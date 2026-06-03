import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View } from 'react-native';

import { theme } from '../constants/theme';

export function BottomNav() {
  return (
    <View style={styles.bottomNav}>
      <View style={styles.navItem}>
        <Feather name="home" color={theme.colors.purple} size={18} />
        <Text style={styles.activeNavText}>Feed</Text>
      </View>

      <View style={styles.navItem}>
        <Ionicons name="sparkles-outline" color={theme.colors.text} size={18} />
        <Text style={styles.navText}>Match</Text>
      </View>

      <View style={styles.addNavItem}>
        <View style={styles.addCircle}>
          <Feather name="plus" color={theme.colors.white} size={21} />
        </View>
        <Text style={styles.activeNavText}>Add</Text>
      </View>

      <View style={styles.navItem}>
        <MaterialCommunityIcons name="hanger" color={theme.colors.text} size={19} />
        <Text style={styles.navText}>Closet</Text>
      </View>

      <View style={styles.navItem}>
        <Feather name="circle" color={theme.colors.text} size={19} />
        <Text style={styles.navText}>Inbox</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    minHeight: 63,
    paddingHorizontal: 30,
    paddingTop: 7,
    paddingBottom: 6,
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
