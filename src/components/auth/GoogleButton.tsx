'use client';

import { config } from '@/lib/config';
import { useEffect, useRef, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';

interface GoogleAccountsConfig {
  client_id: string;
  callback: (response: GoogleAuthResponse) => void;
  auto_select?: boolean;
  itp_support?: boolean;
}

interface GoogleRenderConfig {
  type?: string;
  shape?: string;
  theme?: string;
  text?: string;
  size?: string;
  logo_alignment?: string;
}

interface GoogleAuthResponse {
  credential: string;
  [key: string]: unknown;
}

declare global {
  interface Window {
    google?: {
      accounts?: {
        id?: {
          initialize?: (config: GoogleAccountsConfig) => void;
          renderButton?: (element: HTMLElement, config: GoogleRenderConfig) => void;
          prompt?: () => void;
        };
      };
    };
    googleAuthCallback?: (response: GoogleAuthResponse) => void;
  }
}

interface GoogleAuthButtonProps {
  handleGoogleAuthCallback: (response: GoogleAuthResponse) => void;
  setStatus: ({ status, message }: { 
    status: 'success' | 'error' | 'page-loading' | 'loading' | 'null'; 
    message: string 
  }) => void;  buttonText: 'signin_with' | 'signup_with' | 'continue_with';
  buttonContext: 'signin' | 'signup' | 'use';
}

export default function GoogleAuthButton({ 
  handleGoogleAuthCallback, 
  setStatus, 
  buttonText, 
  buttonContext 
}: GoogleAuthButtonProps) {
  const handleGoogleAuthCallbackRef = useRef(handleGoogleAuthCallback);
  const initAttemptedRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [useCustomButton, setUseCustomButton] = useState(false);

  useEffect(() => {
    handleGoogleAuthCallbackRef.current = handleGoogleAuthCallback;
  }, [handleGoogleAuthCallback]);

  const handleCustomGoogleClick = () => {
    // Safe check for Google API availability
    if (window.google?.accounts?.id?.prompt) {
      try {
        window.google.accounts.id.prompt();
      } catch {
        setStatus({ status: 'error', message: 'Google authentication is not available.' });
      }
    } else {
      console.error('Google Identity Services not available');
      setStatus({ status: 'error', message: 'Google authentication is not available.' });
    }
  };

  useEffect(() => {
    initAttemptedRef.current = false;

    const initializeGoogleAuth = () => {
      if (initAttemptedRef.current) return;

      if (window.google?.accounts?.id) {
        initAttemptedRef.current = true;
        setIsLoading(false);

        try {
          // Set up global callback
          window.googleAuthCallback = (response: GoogleAuthResponse) => {
            handleGoogleAuthCallbackRef.current(response);
          };

          // Initialize Google Auth
          if (typeof window.google.accounts.id.initialize === 'function') {
            window.google.accounts.id.initialize({
              client_id: config.google.client_id,
              callback: window.googleAuthCallback,
              auto_select: false,
              itp_support: true,
            });
          }

          // Try to render the native button first
          setTimeout(() => {
            const nativeContainer = containerRef.current?.querySelector('.google-native-btn') as HTMLElement;
            if (nativeContainer && typeof window?.google?.accounts?.id?.renderButton === 'function') {
              try {
                nativeContainer.innerHTML = '';
                window.google.accounts.id.renderButton(nativeContainer, {
                  type: 'standard',
                  shape: 'pill',
                  theme: 'outline',
                  text: buttonText,
                  size: 'large',
                  logo_alignment: 'left',
                });
                
                // Apply custom styles to override Google's default styling
                setTimeout(() => {
                  const googleBtn = nativeContainer.querySelector('div[role="button"]') as HTMLElement;
                  if (googleBtn) {
                    googleBtn.style.cssText = `
                      background: #111 !important;
                      border: 1px solid #333 !important;
                      border-radius: 20px !important;
                      color: #ffffff !important;
                      font-weight: 300 !important;
                      font-size: 1rem !important;
                      padding: 0.8rem 1rem !important;
                      width: 150px !important;
                      box-sizing: border-box !important;
                      transition: all 0.3s ease !important;
                      font-family: system-ui, -apple-system, sans-serif !important;
                      margin: 0 auto !important;
                    `;
                    
                    // Add hover effects
                    googleBtn.addEventListener('mouseenter', () => {
                      googleBtn.style.background = 'rgba(255, 255, 255, 0.08) !important';
                      googleBtn.style.borderColor = '#666 !important';
                    });
                    
                    googleBtn.addEventListener('mouseleave', () => {
                      googleBtn.style.background = '#111 !important';
                      googleBtn.style.borderColor = '#333 !important';
                    });

                    // Style the Google logo and text
                    const logo = googleBtn.querySelector('svg, img') as HTMLElement;
                    if (logo) {
                      logo.style.filter = 'brightness(0) invert(1)';
                    }
                    
                    const textSpans = googleBtn.querySelectorAll('span');
                    textSpans.forEach(span => {
                      span.style.cssText = `
                        color: #ffffff !important;
                        font-weight: 300 !important;
                        font-size: 1rem !important;
                      `;
                      // Change text content to just "google"
                      if (span.textContent && span.textContent.toLowerCase().includes('google')) {
                        span.textContent = 'google';
                      }
                    });
                  }
                  
                  setStatus({ status: 'null', message: '' });
                }, 100);
              } catch {
                console.log('Native Google button failed, using custom button');
                setUseCustomButton(true);
              }
            } else {
              setUseCustomButton(true);
            }
          }, 100);
        } catch {
          console.log('Error initializing Google Auth');
          setUseCustomButton(true);
          setStatus({ status: 'error', message: 'Failed to initialize Google authentication.' });
        }
      } else {
        console.log('Google Identity Services not ready, retrying...');
        setTimeout(initializeGoogleAuth, 500);
      }
    };

    const timeoutId = setTimeout(initializeGoogleAuth, 100);

    return () => {
      clearTimeout(timeoutId);
      if (window.googleAuthCallback) {
        delete window.googleAuthCallback;
      }
    };
  }, [buttonContext, buttonText, setStatus]);

  const getButtonText = () => {
    return 'google';
  };

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
      }}>
        <div style={{
          background: '#111',
          border: '1px solid #333',
          borderRadius: '20px',
          padding: '0.8rem 1rem',
          width: 'auto',
          maxWidth: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#cccccc',
          fontSize: '1rem',
          fontWeight: '300',
          minHeight: '44px'
        }}>
          loading google...
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      {/* Native Google Button Container */}
      {!useCustomButton && (
        <div className="google-native-btn" style={{ display: 'flex', justifyContent: 'center' }}></div>
      )}
      
      {/* Custom Fallback Button */}
      {useCustomButton && (
        <button
          onClick={handleCustomGoogleClick}
          style={{
            background: '#111',
            border: '1px solid #333',
            borderRadius: '20px',
            color: '#ffffff',
            padding: '0.8rem 1rem',
            fontSize: '1rem',
            fontWeight: '300',
            width: 'auto',
            maxWidth: '200px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            transition: 'all 0.3s ease',
            minHeight: '44px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.borderColor = '#666';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#111';
            e.currentTarget.style.borderColor = '#333';
          }}
        >
          <FaGoogle size={16} />
          {getButtonText()}
        </button>
      )}
    </div>
  );
}