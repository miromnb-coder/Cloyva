import { ActivityIndicator, StyleSheet, View } from 'react-native';
import type { ReactNode } from 'react';

import { theme } from '../constants/theme';
import { useAppImagesReady } from '../hooks/useAppImagesReady';

type AppImagePreloadGateProps = {
  children: ReactNode;
};

export function AppImagePreloadGate({ children }: AppImagePreloadGateProps) {
  const imagesReady = useAppImagesReady();

  if (!imagesReady) {
    return (
      <View style={styles.loadingScreen}>
        <ActivityIndicator color={theme.colors.purple} size="small" />
      </View>
    );
  }

  return children;
}

const styles = StyleSheet.create({
  loadingScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
  },
});
