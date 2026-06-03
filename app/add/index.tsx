import { useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BottomNav } from '../../src/components/BottomNav';
import { AddItemHeader } from '../../src/components/add/AddItemHeader';
import { BasicDetailsSection, type ItemCondition, type ItemSize } from '../../src/components/add/BasicDetailsSection';
import { ExtraDetailsSection } from '../../src/components/add/ExtraDetailsSection';
import { ListingOptionsSection, type ListingOption } from '../../src/components/add/ListingOptionsSection';
import { PhotoUploadSection } from '../../src/components/add/PhotoUploadSection';
import { PricingSection } from '../../src/components/add/PricingSection';
import { theme } from '../../src/constants/theme';

export default function AddItemScreen() {
  const [selectedSize, setSelectedSize] = useState<ItemSize>('M');
  const [selectedCondition, setSelectedCondition] = useState<ItemCondition>('Like New');
  const [selectedOptions, setSelectedOptions] = useState<ListingOption[]>(['borrow', 'sell']);

  const toggleListingOption = (option: ListingOption) => {
    setSelectedOptions((currentOptions) => {
      const isSelected = currentOptions.includes(option);

      if (isSelected && currentOptions.length === 1) {
        return currentOptions;
      }

      if (isSelected) {
        return currentOptions.filter((currentOption) => currentOption !== option);
      }

      return [...currentOptions, option];
    });
  };

  const publishItem = () => {
    Alert.alert(
      'Item published',
      `Vintage Varsity Jacket is now listed as ${selectedOptions.join(', ')}. Size: ${selectedSize}. Condition: ${selectedCondition}.`,
    );
  };

  return (
    <SafeAreaView edges={['top']} style={styles.screen}>
      <AddItemHeader />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <PhotoUploadSection />
        <BasicDetailsSection
          selectedSize={selectedSize}
          onSelectSize={setSelectedSize}
          selectedCondition={selectedCondition}
          onSelectCondition={setSelectedCondition}
        />
        <ListingOptionsSection selectedOptions={selectedOptions} onToggleOption={toggleListingOption} />
        <PricingSection />
        <ExtraDetailsSection />

        <View style={styles.publishWrap}>
          <Pressable onPress={publishItem} style={styles.publishButton}>
            <Text style={styles.publishText}>Publish Item</Text>
          </Pressable>
        </View>
      </ScrollView>

      <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  scrollContent: {
    paddingBottom: 102,
    backgroundColor: theme.colors.white,
  },
  publishWrap: {
    paddingHorizontal: 22,
    paddingTop: 9,
    paddingBottom: 4,
    backgroundColor: theme.colors.white,
  },
  publishButton: {
    height: 45,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.purple,
  },
  publishText: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: -0.2,
  },
});
