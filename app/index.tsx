import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Redirect } from 'expo-router';

import { theme } from '../src/constants/theme';
import { useAuth } from '../src/context/AuthContext';

export default function IndexScreen() {
  const { isLoading, session } = useAuth();

  if (isLoading) {
    return (
      <View style={styles.loadingScreen}>
        <ActivityIndicator color={theme.colors.purple} size="small" />
      </View>
    );
  }

  return <Redirect href={session ? '/feed' : '/auth'} />;
}

const styles = StyleSheet.create({
  loadingScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
  },
});
