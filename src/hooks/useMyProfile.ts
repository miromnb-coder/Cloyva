import { useCallback, useEffect, useState } from 'react';

import { useAuth } from '../context/AuthContext';
import { ensureMyProfile, type Profile } from '../services/profile';

type UseMyProfileResult = {
  profile: Profile | null;
  isLoading: boolean;
  error: Error | null;
  reloadProfile: () => Promise<void>;
};

export function useMyProfile(): UseMyProfileResult {
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const loadProfile = useCallback(async () => {
    if (!user) {
      setProfile(null);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const nextProfile = await ensureMyProfile();
      setProfile(nextProfile);
    } catch (profileError) {
      setError(profileError instanceof Error ? profileError : new Error('Could not load profile.'));
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  useEffect(() => {
    loadProfile();
  }, [loadProfile]);

  return {
    profile,
    isLoading,
    error,
    reloadProfile: loadProfile,
  };
}
