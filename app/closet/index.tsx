import { ScrollView, StyleSheet, View } from 'react-native';

import { BottomNav } from '../../src/components/BottomNav';
import { ClosetCategories } from '../../src/components/closet/ClosetCategories';
import { ClosetHeader } from '../../src/components/closet/ClosetHeader';
import { ClosetItemGrid } from '../../src/components/closet/ClosetItemGrid';
import { ClosetTabs } from '../../src/components/closet/ClosetTabs';
import { StyleMatchSection } from '../../src/components/closet/StyleMatchSection';
import { theme } from '../../src/constants/theme';

export default function ClosetScreen() {
  return (
    <View style={styles.screen}>
      <ClosetHeader />

      <View style={styles.panel}>
        <ClosetTabs />
        <ClosetCategories />
      </View>

      <ScrollView style={styles.itemsScroll} showsVerticalScrollIndicator={false} contentContainerStyle={styles.itemsScrollContent}>
        <ClosetItemGrid />
        <StyleMatchSection />
      </ScrollView>

      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  panel: {
    marginTop: -18,
    zIndex: 2,
  },
  itemsScroll: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  itemsScrollContent: {
    paddingBottom: 92,
    backgroundColor: theme.colors.white,
  },
});
