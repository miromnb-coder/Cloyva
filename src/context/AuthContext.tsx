import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import * as Linking from 'expo-linking';
import type { Session, User } from '@supabase/supabase-js';

import { supabase } from '../../lib/supabase';

type AuthContextValue = {
  session: Session | null;
  user: User | null;
  isLoading: boolean;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

function getCodeFromUrl(url: string) {
  const queryString = url.includes('?') ? url.split('?')[1]?.split('#')[0] : '';
  const hashString = url.includes('#') ? url.split('#')[1] : '';
  const queryParams = new URLSearchParams(queryString);
  const hashParams = new URLSearchParams(hashString);

  return queryParams.get('code') ?? hashParams.get('code');
}

async function handleAuthUrl(url: string) {
  const code = getCodeFromUrl(url);

  if (!code) {
    return;
  }

  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    throw error;
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const handledUrls = useRef(new Set<string>());

  useEffect(() => {
    let isMounted = true;

    async function initializeAuth() {
      const { data } = await supabase.auth.getSession();

      if (isMounted) {
        setSession(data.session);
        setIsLoading(false);
      }
    }

    initializeAuth();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
    });

    async function handleIncomingUrl(url: string | null) {
      if (!url || handledUrls.current.has(url)) {
        return;
      }

      handledUrls.current.add(url);

      try {
        await handleAuthUrl(url);
      } catch (error) {
        console.warn('Failed to handle auth callback URL', error);
      }
    }

    Linking.getInitialURL().then(handleIncomingUrl);

    const urlSubscription = Linking.addEventListener('url', ({ url }) => {
      handleIncomingUrl(url);
    });

    return () => {
      isMounted = false;
      authListener.subscription.unsubscribe();
      urlSubscription.remove();
    };
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      session,
      user: session?.user ?? null,
      isLoading,
      signOut: async () => {
        await supabase.auth.signOut();
      },
    }),
    [isLoading, session],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }

  return context;
}
