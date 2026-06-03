import { Pressable, StyleSheet, Text, View } from 'react-native';

import { theme } from '../../constants/theme';

const tabs = ['Items', 'Outfits', 'Reviews', 'About'];

export function ClosetTabs() {
  return (
    <View style={styles.wrap}>
      {tabs.map((tab, index) => {
        const active = index === 0;

        return (
          <Pressable key={tab} style={styles.tab}>
            <Text style={[styles.tabText, active && styles.activeText]}>{tab}</Text>
            {active ? <View style={styles.activeLine} /> : null}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    height: 38,
    marginHorizontal: 0,
    paddingHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  tab: {
    height: 36,
    minWidth: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: '#555555',
    fontSize: 9.2,
    fontWeight: '700',
  },
  activeText: {
    color: theme.colors.text,
    fontWeight: '900',
  },
  activeLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 2,
    borderRadius: 2,
    backgroundColor: theme.colors.purple,
  },
});
