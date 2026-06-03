import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';

import { theme } from '../constants/theme';

const tabs = ['For You', 'New In', 'Nearby', 'Following', 'Streetwear'];

export function CategoryTabs() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabs} style={styles.tabsScroll}>
      {tabs.map((tab, index) => {
        const active = index === 0;

        return (
          <Pressable key={tab} style={[styles.tab, active && styles.activeTab]}>
            <Text style={[styles.tabText, active && styles.activeTabText]}>{tab}</Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tabsScroll: {
    flexGrow: 0,
  },
  tabs: {
    height: 42,
    paddingHorizontal: 22,
    gap: 11,
    alignItems: 'center',
  },
  tab: {
    height: 31,
    paddingHorizontal: 14,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: theme.colors.text,
  },
  tabText: {
    color: theme.colors.mutedText,
    fontSize: 12.5,
    fontWeight: '700',
    letterSpacing: -0.15,
  },
  activeTabText: {
    color: theme.colors.white,
    fontWeight: '800',
  },
});
