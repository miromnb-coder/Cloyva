import 'react-native-url-polyfill/auto';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

import type { Database } from './database.types';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabasePublishableKey =
  process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

function getRequiredEnv(name: string, value: string | undefined) {
  if (!value) {
    throw new Error(
      `Missing ${name}. Add it to your Expo environment variables and restart Expo with npm run start:clear.`,
    );
  }

  return value;
}

export const SUPABASE_URL = getRequiredEnv(
  'EXPO_PUBLIC_SUPABASE_URL',
  supabaseUrl,
);

export const SUPABASE_PUBLISHABLE_KEY = getRequiredEnv(
  'EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY',
  supabasePublishableKey,
);

export const supabase = createClient<Database>(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
      flowType: 'pkce',
    },
  },
);

export const STORAGE_BUCKETS = {
  itemImages: 'item-images',
  avatars: 'avatars',
} as const;

export type StorageBucket =
  (typeof STORAGE_BUCKETS)[keyof typeof STORAGE_BUCKETS];

export function getPublicStorageUrl(bucket: StorageBucket, path: string) {
  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
}

export function buildUserStoragePath(userId: string, fileName: string) {
  const safeFileName = fileName.replace(/[^a-zA-Z0-9._-]/g, '-');
  return `${userId}/${Date.now()}-${safeFileName}`;
}
