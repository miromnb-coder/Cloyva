import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { usePathname, useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { theme } from '../constants/theme';

export function BottomNav() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const pathname = usePathname();

  const isFeedActive = pathname === '/';
  const isClosetActive = pathname.startsWith('/closet');

  return (
    <View style={[styles.bottomNav, { paddingBottom: Math.max(insets.bottom, 6) }]}>
      <Pressable accessibilityLabel="Open feed" onPress={() => router.push('/')} style={styles.navItem}>
        <Feather name="home" color={isFeedActive ? theme.colors.purple : theme.colors.text} size={18} />
        <Text style={isFeedActive ? styles.activeNavText : styles.navText}>Feed</Text>
      </Pressable>

      <Pressable accessibilityLabel="Open match" style={styles.navItem}>
        <Ionicons name="sparkles-outline" color={theme.colors.text} size={18} />
        <Text style={styles.navText}>Match</Text>
      </Pressable>

      <Pressable accessibilityLabel="Add item" style={styles.addNavItem}>
        <View style={styles.addCircle}>
          <Feather name="plus" color={theme.colors.white} size={21} />
        </View>
        <Text style={styles.activeNavText}>Add</Text>
      </Pressable>

      <Pressable accessibilityLabel="Open closet" onPress={() => router.push('/closet')} style={styles.navItem}>
        <MaterialCommunityIcons name="hanger" color={isClosetActive ? theme.colors.purple : theme.colors.text} size={19} />
        <Text style={isClosetActive ? styles.activeNavText : styles.navText}>Closet</Text>
      </Pressable>

      <Pressable accessibilityLabel="Open inbox" style={styles.navItem}>
        <Feather name="circle" color={theme.colors.text} size={19} />
        <Text style={styles.navText}>Inbox</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    minHeight: 63,
    paddingHorizontal: 30,
    paddingTop: 7,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.white,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },
  navItem: {
    width: 42,
    minHeight: 43,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  addNavItem: {
    width: 42,
    minHeight: 47,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: -1,
  },
  addCircle: {
    width: 33,
    height: 33,
    borderRadius: 16.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.purple,
  },
  navText: {
    marginTop: 1,
    color: '#444444',
    fontSize: 8.8,
    lineHeight: 11,
    fontWeight: '700',
  },
  activeNavText: {
    marginTop: 1,
    color: theme.colors.purple,
    fontSize: 8.8,
    lineHeight: 11,
    fontWeight: '800',
  },
});
