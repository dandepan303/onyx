'use client';

import { useCallback, useEffect, useState } from 'react';
import { useAuth } from './AuthProvider';
import { supabase } from '@/lib/supabase/client';
import { parseError } from '@/lib/util/server_util';
import { PostProps as GooglePostProps, PostRet as GooglePostRet } from '@/app/api/auth/google/route';
import { GetProps as EmailGetProps, GetRet as EmailGetRet, PostProps as EmailPostProps, PostRet as EmailPostRet } from '@/app/api/auth/email/route';
import { request } from '@/lib/util/api';

/* 
This page is structured using pageType. Different pageTypes mean different things are rendered
Landing page is the computer + 'get started' button
Step one is just email and password input + continue with google button
Step two is email, password, name, confirmPassword + continue with google button
Google is just a loading page for the google button. Have a small subtext for 'Google not loading? Click here to return' ...
  which sets status to {error, There was an issue with google} and also sets pageType to stepOne

Also what if the button on the button is more like
Step 1: [               ][], with the small button being go to step 2
Step 2: [][               ], with the small button being go back to step 1
*/

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

  // Step 1: Attempt sign in
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // Step 2: Sign up
  const [name, setName] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  // Moniter session.loading and exit 'page-loading'
  useEffect(() => {
    // Only update status when it was page-loading
    setStatus(prev => (prev.status === 'page-loading' ? { status: 'null', message: '' } : prev));
  }, [setStatus]);

  const verifyInputs = ({
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
    // TODO: implement proper checks
    return { isValidInputs: false, msg: 'TODO bruh' };
  };

  const handleGoogleAuth = useCallback(
    async (response: any) => {
      setPageType('google');
      setStatus({ status: 'loading', message: '' });

      try {
        // Sign in using google
        const { data: auth_data, error: auth_error } = await supabase.auth.signInWithIdToken({
          provider: 'google',
          token: response.credential,
        });

        if (auth_error) {
          setStatus({ status: 'error', message: await parseError(auth_error.message, auth_error.code) });
          return;
        }
        if (!auth_data.user || !auth_data.user.id || !auth_data.user.email) {
          setStatus({ status: 'error', message: 'There was an issue signing up with Google' });
          return;
        }

        const body: GooglePostProps = {
          id: auth_data.user.id,
          name: auth_data.user.user_metadata.name,
          email: auth_data.user.email,
          role: 'GUEST',
        };
        const res: GooglePostRet = await request<GooglePostRet>({ type: 'POST', route: 'api/auth/google', body: body });

        setStatus({ status: res.status, message: res.message });
        // AuthProtecter should automatically update page, so no redirects required
      } catch (err: any) {
        console.log('components/auth/google button error: ', await parseError(err.message, err.code));
        setStatus({ status: 'error', message: 'There was an issue with Google. Please try again.' });
      } finally {
        setPageType('step-one'); // Exit google loading page
      }
    },
    [setStatus, setPageType],
  );

  const handleEmailAuthStepOne = useCallback(async () => {
    try {
      setPageType('step-one');
      setStatus({ status: 'loading', message: '' });

      const { isValidInputs, msg } = verifyInputs({ checkEmail: true, checkPassword: true });
      if (!isValidInputs) {
        setStatus({ status: 'error', message: msg });
        return;
      }

      const bodyData: EmailGetProps = { email: email };
      const res: EmailGetRet = await request<EmailGetRet>({ type: 'GET', route: `api/auth/email`, body: bodyData });

      if (res.status === 'error') {
        // error
        setStatus({ status: res.status, message: res.message });
      } else if (res.status === 'signup') {
        // account not found
        setStatus({ status: 'null', message: '' });
        setPageType('step-two');
      } else {
        // account found -> sign in
        const { error: e } = await signIn(email, password);

        if (e) {
          console.log('components/auth/email handle google auth step one error');
          await parseError(e.message, e.code);
          setStatus({ status: 'error', message: 'There was an issue signing in' });
        } else {
          setStatus({ status: 'success', message: 'Successfully signed in' });
        }
      }
    } catch (e: any) {
      console.log('components/auth/auth_flow handle google auth step one error');
      await parseError(e.message, e.code);
      setStatus({ status: 'error', message: 'There was an issue signing in' });
    }
  }, [setStatus, request, setPageType, signIn, parseError, email, password]);

  const handleEmailAuthStepTwo = useCallback(async () => {
    try {
      setPageType('step-two');
      setStatus({ status: 'loading', message: '' });

      // Try to sign in before creating account
      const { isValidInputs: stepOneIsValidInputs, msg: stepOneMsg } = verifyInputs({
        checkEmail: true,
        checkPassword: true,
        checkName: true,
        checkConfirmPassword: true,
      });
      if (!stepOneIsValidInputs) {
        setStatus({ status: 'error', message: stepOneMsg });
        return;
      }

      const { error: e } = await signIn(email, password);
      // If sign in worked
      if (!e) {
        setStatus({ status: 'success', message: 'Successfully signed in' });
        return;
      }

      // If sign in didn't work -> continue to sign up
      const { isValidInputs, msg } = verifyInputs({ checkEmail: true, checkPassword: true, checkName: true, checkConfirmPassword: true });
      if (!isValidInputs) {
        setStatus({ status: 'error', message: msg });
        return;
      }

      // Sign up
      const bodyData: EmailPostProps = {
        email: email,
        password: password,
        name: name,
        role: 'USER',
      };
      const res: EmailPostRet = await request<EmailPostRet>({ type: 'POST', route: 'api/auth/email', body: bodyData });
      setStatus({ status: res.status, message: res.message });

      // Automatically sign in after signing up
      if (res.status === 'success') {
        try {
          const { error: e } = await signIn(email, password);

          if (e) {
            console.log('components/auth/email handle google auth step one error');
            await parseError(e.message, e.code);
            setStatus({ status: 'error', message: `${status.message}\nThere was an issue automatically signing in` });
          } else {
            setStatus({ status: 'success', message: `${status.message}\nSuccessfully automatically signed in` });
          }
        } catch (e: any) {
          console.log('components/auth/auth_flow handle email auth step two error');
          await parseError(e.message, e.code);
          setStatus({ status: 'error', message: `${status.message}There was an issue automatically signing in` });
        }
      }
    } catch (e: any) {
      console.log('components/auth/auth_flow handle email auth step two error');
      await parseError(e.message, e.code);
      setStatus({ status: 'error', message: `There was an issue signing up` });
    }
  }, [setStatus, setPageType, request, signIn, parseError, email, name, password, status.message]);

  return <></>;
}
