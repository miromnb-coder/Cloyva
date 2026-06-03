import { supabase } from '../../lib/supabase';

import type { Tables, TablesUpdate } from '../../lib/database.types';

export type Profile = Tables<'profiles'>;
export type ProfileUpdate = TablesUpdate<'profiles'>;

function getEmailName(email?: string | null) {
  return email?.split('@')[0]?.replace(/[^a-zA-Z0-9._-]/g, '') || 'cloyva_user';
}

export function getProfileDisplayUsername(profile: Profile | null, email?: string | null) {
  if (profile?.username) {
    return `@${profile.username}`;
  }

  return `@${getEmailName(email)}`;
}

export function getProfileDisplayName(profile: Profile | null, email?: string | null) {
  return profile?.display_name || getEmailName(email);
}

export function getProfileLocation(profile: Profile | null) {
  const location = [profile?.city, profile?.country].filter(Boolean).join(', ');
  return location || 'Add your location';
}

export async function getMyProfile() {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    throw userError;
  }

  if (!user) {
    throw new Error('You must be signed in to load your profile.');
  }

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
}

export async function ensureMyProfile() {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    throw userError;
  }

  if (!user) {
    throw new Error('You must be signed in to create your profile.');
  }

  const existingProfile = await getMyProfile();

  if (existingProfile) {
    return existingProfile;
  }

  const emailName = getEmailName(user.email);
  const displayName =
    typeof user.user_metadata?.display_name === 'string'
      ? user.user_metadata.display_name
      : typeof user.user_metadata?.full_name === 'string'
        ? user.user_metadata.full_name
        : emailName;

  const avatarUrl =
    typeof user.user_metadata?.avatar_url === 'string'
      ? user.user_metadata.avatar_url
      : null;

  const { data, error } = await supabase
    .from('profiles')
    .insert({
      id: user.id,
      display_name: displayName,
      avatar_url: avatarUrl,
    })
    .select('*')
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function updateMyProfile(updates: ProfileUpdate) {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    throw userError;
  }

  if (!user) {
    throw new Error('You must be signed in to update your profile.');
  }

  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', user.id)
    .select('*')
    .single();

  if (error) {
    throw error;
  }

  return data;
}
