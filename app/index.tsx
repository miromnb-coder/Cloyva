import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { hasSupabaseConfig } from '../src/lib/supabase';

export default function IndexScreen() {
  const supabaseStatus = useMemo(() => (hasSupabaseConfig ? 'configured' : 'not configured'), []);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Cloyva app is running.</Text>
      <Text style={styles.subtitle}>Supabase is {supabaseStatus}.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
  },
});
