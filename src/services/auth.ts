import * as Linking from 'expo-linking';

import { supabase } from '../../lib/supabase';

const authCallbackUrl = Linking.createURL('/auth/callback');

export type AuthResultMessage = {
  title: string;
  message: string;
};

export async function continueWithEmailPassword(email: string, password: string) {
  const normalizedEmail = email.trim().toLowerCase();

  if (!normalizedEmail) {
    throw new Error('Add your email address first.');
  }

  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters.');
  }

  const signInResult = await supabase.auth.signInWithPassword({
    email: normalizedEmail,
    password,
  });

  if (!signInResult.error) {
    return {
      title: 'Welcome back',
      message: 'You are now signed in to Cloyva.',
    } satisfies AuthResultMessage;
  }

  const signUpResult = await supabase.auth.signUp({
    email: normalizedEmail,
    password,
    options: {
      emailRedirectTo: authCallbackUrl,
    },
  });

  if (signUpResult.error) {
    throw signUpResult.error;
  }

  if (signUpResult.data.session) {
    return {
      title: 'Account created',
      message: 'Your Cloyva account is ready.',
    } satisfies AuthResultMessage;
  }

  return {
    title: 'Check your email',
    message: 'We sent you a confirmation link to finish creating your Cloyva account.',
  } satisfies AuthResultMessage;
}

export async function sendMagicLink(email: string) {
  const normalizedEmail = email.trim().toLowerCase();

  if (!normalizedEmail) {
    throw new Error('Add your email address first.');
  }

  const { error } = await supabase.auth.signInWithOtp({
    email: normalizedEmail,
    options: {
      emailRedirectTo: authCallbackUrl,
      shouldCreateUser: true,
    },
  });

  if (error) {
    throw error;
  }

  return {
    title: 'Magic link sent',
    message: 'Open the email on this phone to sign in to Cloyva.',
  } satisfies AuthResultMessage;
}

export function getAuthCallbackUrl() {
  return authCallbackUrl;
}
