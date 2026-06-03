import Feather from '@expo/vector-icons/Feather';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { theme } from '../constants/theme';

export function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>Cloyva</Text>

      <View style={styles.headerActions}>
        <Pressable accessibilityLabel="Notifications" style={styles.headerIconButton}>
          <Feather name="bell" color={theme.colors.text} size={19} />
        </Pressable>
        <Pressable accessibilityLabel="Filter" style={styles.headerIconButton}>
          <Feather name="filter" color={theme.colors.text} size={19} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    minHeight: 58,
    paddingHorizontal: 22,
    paddingTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    color: theme.colors.text,
    fontSize: 39,
    lineHeight: 45,
    fontWeight: '900',
    letterSpacing: -2.55,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerIconButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.border,
    shadowColor: theme.colors.text,
    shadowOpacity: 0.045,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
});
