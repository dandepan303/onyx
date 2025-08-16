'use client';

import { useCallback, useEffect, useState } from 'react';
import { useAuth } from './AuthProvider';
import { UserRoles } from '@/lib/prisma/generated/prisma';
import { supabase } from '@/lib/supabase/client';
import { parseError } from '@/lib/util/server_util';
import { PostProps as GooglePostProps, PostRet as GooglePostRet } from '@/app/api/auth/google/route';
import { GetRet as EmailGetRet, PostProps as EmailPostProps, PostRet as EmailPostRet } from '@/app/api/auth/email/route';
import { request } from '@/lib/util/api';
import GoogleAuthButton from './GoogleButton';
import { MdArrowForwardIos } from 'react-icons/md';

interface GoogleAuthResponse {
  credential: string;
  [key: string]: unknown;
}

export default function AuthFlow() {
  const [status, setStatus] = useState<{
    status: 'success' | 'error' | 'page-loading' | 'loading' | 'null';
    message: string;
  }>({
    status: 'page-loading',
    message: '',
  });
  
  const [pageType, setPageType] = useState<'landing-page' | 'step-one' | 'step-two' | 'google'>('step-one');

  const { signIn } = useAuth();

  // Step 1: Email and password
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  
  // Step 2: Additional fields for signup
  const [name, setName] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  // Monitor session loading and exit 'page-loading'
  useEffect(() => {
    setStatus(prev => (prev.status === 'page-loading' ? { status: 'null', message: '' } : prev));
  }, []);

  const verifyInputs = useCallback(({
    checkEmail = false,
    checkPassword = false,
    checkName = false,
    checkConfirmPassword = false,
  }: {
    checkEmail?: boolean;
    checkPassword?: boolean;
    checkName?: boolean;
    checkConfirmPassword?: boolean;
  }): { isValidInputs: boolean; msg: string } => {
    if (checkEmail) {
      if (!email) return { isValidInputs: false, msg: 'email is required' };
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return { isValidInputs: false, msg: 'please enter a valid email address' };
      }
    }

    if (checkPassword) {
      if (!password) return { isValidInputs: false, msg: 'password is required' };
      if (password.length < 6) {
        return { isValidInputs: false, msg: 'password must be at least 6 characters' };
      }
    }

    if (checkName) {
      if (!name) return { isValidInputs: false, msg: 'name is required' };
      if (name.length < 2) {
        return { isValidInputs: false, msg: 'name must be at least 2 characters' };
      }
    }

    if (checkConfirmPassword) {
      if (!confirmPassword) return { isValidInputs: false, msg: 'please confirm your password' };
      if (password !== confirmPassword) {
        return { isValidInputs: false, msg: 'passwords do not match' };
      }
    }

    return { isValidInputs: true, msg: '' };
  }, [email, password, name, confirmPassword]);

  const handleGoogleAuth = useCallback(
    async (response: GoogleAuthResponse) => {
      setPageType('google');
      setStatus({ status: 'loading', message: '' });

      try {
        const { data: auth_data, error: auth_error } = await supabase.auth.signInWithIdToken({
          provider: 'google',
          token: response.credential,
        });

        if (auth_error) {
          setStatus({ status: 'error', message: await parseError(auth_error.message, auth_error.code) });
          return;
        }
        
        if (!auth_data.user || !auth_data.user.id || !auth_data.user.email) {
          setStatus({ status: 'error', message: 'there was an issue signing up with google' });
          return;
        }

        const body: GooglePostProps = {
          id: auth_data.user.id,
          name: auth_data.user.user_metadata.name,
          email: auth_data.user.email,
          role: UserRoles.GUEST, // Use enum instead of string
        };
        
        const res: GooglePostRet = await request<GooglePostRet>({ 
          type: 'POST', 
          route: 'api/auth/google', 
          body: body 
        });

        setStatus({ status: res.status, message: res.message });
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
        const errorCode = err && typeof err === 'object' && 'code' in err ? (err.code as string) : undefined;
        console.log('Google auth error: ', await parseError(errorMessage, errorCode));
        setStatus({ status: 'error', message: 'there was an issue with google. please try again.' });
      } finally {
        setPageType('step-one');
      }
    },
    [setStatus, setPageType],
  );

  const handleEmailAuthStepOne = useCallback(async () => {
    try {
      setStatus({ status: 'loading', message: '' });

      const { isValidInputs, msg } = verifyInputs({ checkEmail: true, checkPassword: true });
      if (!isValidInputs) {
        setStatus({ status: 'error', message: msg });
        return;
      }

      const res: EmailGetRet = await request<EmailGetRet>({ 
        type: 'GET', 
        route: `api/auth/email?email=${encodeURIComponent(email)}`, 
        body: null 
      });

      if (res.status === 'error') {
        setStatus({ status: res.status, message: res.message });
      } else if (res.status === 'signup') {
        // Account not found - go to step two
        setStatus({ status: 'null', message: '' });
        setPageType('step-two');
      } else {
        // Account found - sign in
        const { error: e } = await signIn(email, password);

        if (e) {
          console.log('Sign in error');
          await parseError(e.message, e.code);
          setStatus({ status: 'error', message: 'invalid email or password' });
        } else {
          setStatus({ status: 'success', message: 'successfully signed in' });
        }
      }
    } catch (e: unknown) {
      console.log('Step one error');
      const errorMessage = e instanceof Error ? e.message : 'Unknown error';
      const errorCode = e && typeof e === 'object' && 'code' in e ? (e.code as string) : undefined;
      await parseError(errorMessage, errorCode);
      setStatus({ status: 'error', message: 'there was an issue signing in' });
    }
  }, [setStatus, email, password, signIn, verifyInputs]);

  const handleEmailAuthStepTwo = useCallback(async () => {
    try {
      setStatus({ status: 'loading', message: '' });

      const { isValidInputs, msg } = verifyInputs({
        checkEmail: true,
        checkPassword: true,
        checkName: true,
        checkConfirmPassword: true,
      });
      
      if (!isValidInputs) {
        setStatus({ status: 'error', message: msg });
        return;
      }

      // Try to sign in first (in case account was created in another tab)
      const { error: signInError } = await signIn(email, password);
      if (!signInError) {
        setStatus({ status: 'success', message: 'successfully signed in' });
        return;
      }

      // with signup
      const bodyData: EmailPostProps = {
        email: email,
        password: password,
        name: name,
        role: UserRoles.USER, // Use enum instead of string
      };
      
      const res: EmailPostRet = await request<EmailPostRet>({ 
        type: 'POST', 
        route: 'api/auth/email', 
        body: bodyData 
      });
      
      setStatus({ status: res.status, message: res.message });

      // Auto sign in after successful signup
      if (res.status === 'success') {
        try {
          const { error: e } = await signIn(email, password);

          if (e) {
            console.log('Auto sign in error');
            await parseError(e.message, e.code);
            setStatus({ status: 'error', message: `${res.message} please sign in manually.` });
          } else {
            setStatus({ status: 'success', message: `${res.message} successfully signed in!` });
          }
        } catch (e: unknown) {
          console.log('Auto sign in error');
          const errorMessage = e instanceof Error ? e.message : 'Unknown error';
          const errorCode = e && typeof e === 'object' && 'code' in e ? (e.code as string) : undefined;
          await parseError(errorMessage, errorCode);
          setStatus({ status: 'error', message: `${res.message} please sign in manually.` });
        }
      }
    } catch (e: unknown) {
      console.log('Step two error');
      const errorMessage = e instanceof Error ? e.message : 'Unknown error';
      const errorCode = e && typeof e === 'object' && 'code' in e ? (e.code as string) : undefined;
      await parseError(errorMessage, errorCode);
      setStatus({ status: 'error', message: 'there was an issue signing up' });
    }
  }, [setStatus, email, password, name, signIn, verifyInputs]);

  const handleBackToStepOne = () => {
    setPageType('step-one');
    setStatus({ status: 'null', message: '' });
    setName('');
    setConfirmPassword('');
  };

  const handleGoogleLoadingBack = () => {
    setStatus({ status: 'error', message: 'there was an issue with google' });
    setPageType('step-one');
  };

  // Loading state
  if (status.status === 'page-loading') {
    return (
      <div className="dialog-content fade-in">
        <div className="dialog-inner">
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            Loading...
          </div>
        </div>
      </div>
    );
  }

  // Google loading page
  if (pageType === 'google') {
    return (
      <div className="dialog-content fade-in">
        <div className="dialog-inner">
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            Signing in with Google...
          </div>
          <p style={{ 
            fontSize: '0.85rem', 
            textAlign: 'center', 
            opacity: 0.7,
            margin: '1rem 0' 
          }}>
            Google not loading?{' '}
            <button 
              onClick={handleGoogleLoadingBack}
              style={{ 
                background: 'none', 
                border: 'none', 
                textDecoration: 'underline', 
                cursor: 'pointer',
                color: 'inherit'
              }}
            >
              Click here to return
            </button>
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Status Messages */}
      {status.message && (
        <div className="error-message">
          {status.message}
        </div>
      )}

      {/* Step One: Email and Password */}
      {pageType === 'step-one' && (
        <>
          <input
            type="email"
            placeholder="email or username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status.status === 'loading'}
          />
          
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={status.status === 'loading'}
          />

          <button 
            className="sign-in-btn" 
            onClick={handleEmailAuthStepOne}
            disabled={status.status === 'loading'}
          >
            <MdArrowForwardIos size={12} />
          </button>

          <div style={{ 
            textAlign: 'center', 
            margin: '1rem 0', 
            fontSize: '0.9rem',
            opacity: 0.7 
          }}>
            or
          </div>

          <div style={{ width: '100%' }}>
            <GoogleAuthButton
              handleGoogleAuthCallback={handleGoogleAuth}
              setStatus={setStatus}
              buttonText="continue_with"
              buttonContext="signin"
            />
          </div>
        </>
      )}

      {/* Step Two: Full Signup */}
      {pageType === 'step-two' && (
        <>
          <h2>sign up</h2>
          
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status.status === 'loading'}
          />
          
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={status.status === 'loading'}
          />
          
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={status.status === 'loading'}
          />
          
          <input
            type="password"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={status.status === 'loading'}
          />

          <div className="auth-nav-buttons">
            <button 
              className="nav-btn back-btn" 
              onClick={handleBackToStepOne}
              disabled={status.status === 'loading'}
            >
              <MdArrowForwardIos size={12} className="back-arrow" />
            </button>
            
            <button 
              className="nav-btn forward-btn" 
              onClick={handleEmailAuthStepTwo}
              disabled={status.status === 'loading'}
            >
              <MdArrowForwardIos size={12} />
            </button>
          </div>

          <div style={{ 
            textAlign: 'center', 
            margin: '0.5rem 0', 
            fontSize: '0.9rem',
            opacity: 0.7 
          }}>
            or
          </div>

          <div style={{ width: '100%' }}>
            <GoogleAuthButton
              handleGoogleAuthCallback={handleGoogleAuth}
              setStatus={setStatus}
              buttonText="continue_with"
              buttonContext="signup"
            />
          </div>
        </>
      )}
    </>
  );
}