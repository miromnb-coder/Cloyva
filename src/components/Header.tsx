import Feather from '@expo/vector-icons/Feather';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { theme } from '../constants/theme';

export function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>Cloyva</Text>

      <View style={styles.headerActions}>
        <Pressable accessibilityLabel="Notifications" style={styles.headerIconButton}>
          <Feather name="bell" color={theme.colors.text} size={17} />
        </Pressable>
        <Pressable accessibilityLabel="Filter" style={styles.headerIconButton}>
          <Feather name="filter" color={theme.colors.text} size={17} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    minHeight: 48,
    paddingHorizontal: 22,
    paddingTop: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    color: theme.colors.text,
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '800',
    letterSpacing: -1.55,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerIconButton: {
    width: 31,
    height: 31,
    borderRadius: 15.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
  },
});
