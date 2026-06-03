import { Stack } from 'expo-router';

import { AppImagePreloadGate } from '../src/components/AppImagePreloadGate';
import { AuthProvider } from '../src/context/AuthContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <AppImagePreloadGate>
        <Stack screenOptions={{ headerShown: false }} />
      </AppImagePreloadGate>
    </AuthProvider>
  );
}
