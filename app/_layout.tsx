import { Stack } from 'expo-router';

import { AppImagePreloadGate } from '../src/components/AppImagePreloadGate';

export default function RootLayout() {
  return (
    <AppImagePreloadGate>
      <Stack screenOptions={{ headerShown: false }} />
    </AppImagePreloadGate>
  );
}
