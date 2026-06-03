import Feather from '@expo/vector-icons/Feather';
import { StyleSheet, Text, View } from 'react-native';

import { theme } from '../../constants/theme';

export function PricingSection() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Pricing</Text>

      <View style={styles.card}>
        <View style={styles.priceRow}>
          <View style={styles.priceColumn}>
            <Text style={styles.priceLabel}>Borrow Price (per day)</Text>
            <View style={styles.priceInput}>
              <Text style={styles.priceValue}>€8</Text>
              <Text style={styles.priceMuted}>/ day</Text>
            </View>
          </View>

          <View style={styles.verticalDivider} />

          <View style={styles.priceColumn}>
            <Text style={styles.priceLabel}>Sale Price</Text>
            <View style={styles.priceInput}>
              <Text style={styles.priceValue}>€45</Text>
            </View>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.swapRow}>
          <View style={styles.swapTextWrap}>
            <Text style={styles.swapLabel}>I'm open to swap preferences (optional)</Text>
            <Text style={styles.swapPlaceholder}>e.g. Sneakers, Denim, Bags</Text>
          </View>
          <Feather name="chevron-right" color={theme.colors.text} size={17} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 13,
    paddingHorizontal: 22,
    backgroundColor: theme.colors.white,
  },
  sectionTitle: {
    marginBottom: 7,
    color: theme.colors.text,
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: -0.25,
  },
  card: {
    borderWidth: 1,
    borderColor: '#e7e7e7',
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: theme.colors.white,
  },
  priceRow: {
    minHeight: 67,
    flexDirection: 'row',
  },
  priceColumn: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  priceLabel: {
    color: theme.colors.text,
    fontSize: 10.2,
    fontWeight: '700',
  },
  priceInput: {
    marginTop: 7,
    height: 30,
    borderRadius: 8,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    backgroundColor: '#ffffff',
  },
  priceValue: {
    color: theme.colors.text,
    fontSize: 12.5,
    fontWeight: '900',
  },
  priceMuted: {
    color: '#555555',
    fontSize: 11.5,
    fontWeight: '700',
  },
  verticalDivider: {
    width: 1,
    backgroundColor: '#ededed',
  },
  divider: {
    height: 1,
    backgroundColor: '#ededed',
  },
  swapRow: {
    minHeight: 52,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  swapTextWrap: {
    flex: 1,
  },
  swapLabel: {
    color: theme.colors.text,
    fontSize: 10.4,
    fontWeight: '700',
  },
  swapPlaceholder: {
    marginTop: 7,
    height: 25,
    paddingHorizontal: 9,
    paddingTop: 5,
    borderRadius: 7,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e6e6e6',
    color: '#888888',
    fontSize: 10.5,
    fontWeight: '600',
  },
});
