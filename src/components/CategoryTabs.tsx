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
    height: 35,
    paddingHorizontal: 22,
    gap: 12,
    alignItems: 'center',
  },
  tab: {
    height: 28,
    paddingHorizontal: 12,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: theme.colors.text,
  },
  tabText: {
    color: theme.colors.mutedText,
    fontSize: 10.5,
    fontWeight: '600',
    letterSpacing: -0.08,
  },
  activeTabText: {
    color: theme.colors.white,
    fontWeight: '700',
  },
});
