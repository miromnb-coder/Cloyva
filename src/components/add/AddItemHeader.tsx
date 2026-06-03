import Feather from '@expo/vector-icons/Feather';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

import { theme } from '../../constants/theme';

export function AddItemHeader() {
  const router = useRouter();

  return (
    <View style={styles.header}>
      <Pressable accessibilityLabel="Go back" onPress={() => router.back()} style={styles.backButton}>
        <Feather name="chevron-left" color={theme.colors.text} size={27} />
      </Pressable>

      <Text style={styles.title}>Add Item</Text>

      <Pressable accessibilityLabel="Save draft" style={styles.draftButton}>
        <Feather name="archive" color={theme.colors.text} size={20} />
        <Text style={styles.draftText}>Save Draft</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 58,
    paddingHorizontal: 21,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.white,
  },
  backButton: {
    width: 40,
    height: 44,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: -0.35,
  },
  draftButton: {
    width: 54,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
  },
  draftText: {
    color: '#666666',
    fontSize: 8.8,
    fontWeight: '700',
  },
});
