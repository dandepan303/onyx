'use client';

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { User, Session, AuthError } from '@supabase/supabase-js';
import { Profile } from '@/lib/prisma/generated/prisma';
import { supabase } from '@/lib/supabase/client';
import axios from 'axios';
import { parseError } from '@/lib/util/server_util';

interface AuthContextType {
  user: { data: User | null; loading: boolean };
  profile: { data: Profile | null; loading: boolean };
  session: { data: Session | null; loading: boolean };
  signIn: (email: string, password: string) => Promise<{ error: AuthError | null }>;
  signOut: () => Promise<void>;
  getUser: () => Promise<User | null>;
  version: number;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<{ data: User | null; loading: boolean }>({ data: null, loading: true });
  const [profile, setProfile] = useState<{ data: Profile | null; loading: boolean }>({ data: null, loading: true });
  const [session, setSession] = useState<{ data: Session | null; loading: boolean }>({ data: null, loading: true });

  const [version, setVersion] = useState<number>(0);

  const fetchProfile = useCallback(async (currSession: Session | null) => {
    if (!currSession?.user?.id) {
      setProfile({ data: null, loading: false });
      return;
    }

    try {
      const res = await axios.get(`/api/profile?id=${currSession.user.id}`, {
        validateStatus: () => true,
        withCredentials: true,
        headers: { Authorization: `Bearer ${currSession?.access_token}` },
      });

      if (res.data && res.data.user) {
        setProfile({ data: res.data.user, loading: false });
      } else {
        setProfile({ data: null, loading: false });
      }
    } catch (error: unknown) {
      console.log('Error fetching profile:', error);
      setProfile({ data: null, loading: false });
    }
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      return { error };
    } catch (error: unknown) {
      // If it's not an AuthError, wrap it as a generic error
      const authError = error instanceof Error 
        ? { message: error.message, name: 'AuthError' } as AuthError
        : { message: 'Unknown authentication error', name: 'AuthError' } as AuthError;
      return { error: authError };
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const getUser = async () => {
    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        console.log('/components/auth-provider get_user error');
        parseError(error.message, error.code);
        return null;
      }

      return user;
    } catch (error: unknown) {
      console.error('/components/auth-provider get_user error');
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      const errorCode = error && typeof error === 'object' && 'code' in error 
        ? (error.code as string) 
        : undefined;
      parseError(errorMessage, errorCode);
      return null;
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.warn('Auth loading timeout - forcing loading states to false');
      setUser(prev => ({ data: prev.data, loading: false }));
      setProfile(prev => ({ data: prev.data, loading: false }));
      setSession(prev => ({ data: prev.data, loading: false }));
    }, 10000);

    // Get initial session
    supabase.auth
      .getSession()
      .then(async ({ data: { session } }) => {
        // Update info
        setSession({ data: session, loading: false });
        setUser({ data: session?.user ?? null, loading: false });
        await fetchProfile(session);

        setVersion(v => v + 1);
        clearTimeout(timeout);
      })
      .catch(error => {
        console.log('Error getting initial session:', error);
        setUser({ data: null, loading: false });
        setProfile({ data: null, loading: false });
        setSession({ data: null, loading: false });
        clearTimeout(timeout);
      });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setSession({ data: session, loading: false });
      setUser({ data: session?.user ?? null, loading: false });

      if (event === 'SIGNED_OUT') {
        setProfile({ data: null, loading: false });
      } else {
        await fetchProfile(session);
      }

      if (event === 'SIGNED_IN' && session?.user) {
        await fetchProfile(session);
      } else if (event === 'SIGNED_OUT') {
        setProfile({ data: null, loading: false });
      } else {
        await fetchProfile(session);
      }

      setVersion(v => v + 1);
    });

    return () => {
      subscription.unsubscribe();
      clearTimeout(timeout);
    };
  }, [fetchProfile]);

  // logging
  // useEffect(() => {
  //   console.log('Auth state:', {
  //     user: { data: !!user.data, loading: user.loading },
  //     profile: { data: !!profile?.data, loading: profile.loading },
  //     session: { data: !!session.data, loading: session.loading },
  //     version,
  //   });
  // }, [user, profile, session, version]);

  const value = {
    user,
    profile,
    session,
    signIn,
    signOut,
    getUser,
    version,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}