import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BottomNav } from '../src/components/BottomNav';
import { CategoryTabs } from '../src/components/CategoryTabs';
import { Header } from '../src/components/Header';
import { OutfitCard } from '../src/components/OutfitCard';
import { theme } from '../src/constants/theme';

export default function IndexScreen() {
  return (
    <SafeAreaView edges={['top']} style={styles.screen}>
      <Header />
      <CategoryTabs />

      <View style={styles.content}>
        <OutfitCard />
      </View>

      <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flexShrink: 0,
  },
});
