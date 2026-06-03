import Feather from '@expo/vector-icons/Feather';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { theme } from '../../constants/theme';

export type ItemSize = 'XS' | 'S' | 'M' | 'L';
export type ItemCondition = 'New' | 'Like New' | 'Good';

type BasicDetailsSectionProps = {
  itemTitle: string;
  onChangeItemTitle: (title: string) => void;
  selectedSize: ItemSize;
  onSelectSize: (size: ItemSize) => void;
  selectedCondition: ItemCondition;
  onSelectCondition: (condition: ItemCondition) => void;
};

function Row({ label, value, chevron }: { label: string; value?: string; chevron?: boolean }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <View style={styles.rowValueWrap}>
        {value ? <Text style={styles.rowValue}>{value}</Text> : null}
        {chevron ? <Feather name="chevron-right" color="#777777" size={18} /> : null}
      </View>
    </View>
  );
}

function Chip({ label, active, onPress }: { label: string; active?: boolean; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={[styles.chip, active && styles.activeChip]}>
      <Text style={[styles.chipText, active && styles.activeChipText]}>{label}</Text>
    </Pressable>
  );
}

const sizes: ItemSize[] = ['XS', 'S', 'M', 'L'];
const conditions: ItemCondition[] = ['New', 'Like New', 'Good'];

export function BasicDetailsSection({
  itemTitle,
  onChangeItemTitle,
  selectedSize,
  onSelectSize,
  selectedCondition,
  onSelectCondition,
}: BasicDetailsSectionProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Basic Details</Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.rowLabel}>Item Title</Text>
          <TextInput
            value={itemTitle}
            onChangeText={onChangeItemTitle}
            placeholder="Vintage Varsity Jacket"
            placeholderTextColor="#999999"
            style={styles.titleInput}
            returnKeyType="done"
          />
        </View>
        <View style={styles.divider} />
        <Row label="Category" value="Jackets" chevron />
        <View style={styles.divider} />

        <View style={styles.optionRow}>
          <Text style={styles.rowLabel}>Size</Text>
          <View style={styles.chipsRow}>
            {sizes.map((size) => (
              <Chip key={size} label={size} active={selectedSize === size} onPress={() => onSelectSize(size)} />
            ))}
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.optionRow}>
          <Text style={styles.rowLabel}>Condition</Text>
          <View style={styles.conditionChipsRow}>
            {conditions.map((condition) => (
              <Chip key={condition} label={condition} active={selectedCondition === condition} onPress={() => onSelectCondition(condition)} />
            ))}
          </View>
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
  row: {
    minHeight: 35,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowLabel: {
    color: theme.colors.text,
    fontSize: 11.7,
    fontWeight: '600',
  },
  rowValueWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  rowValue: {
    color: theme.colors.text,
    fontSize: 11.7,
    fontWeight: '700',
  },
  titleInput: {
    flex: 1,
    marginLeft: 12,
    paddingVertical: 0,
    color: theme.colors.text,
    textAlign: 'right',
    fontSize: 11.7,
    fontWeight: '800',
  },
  divider: {
    height: 1,
    backgroundColor: '#ededed',
  },
  optionRow: {
    minHeight: 35,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chipsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  conditionChipsRow: {
    flexDirection: 'row',
    gap: 7,
  },
  chip: {
    minWidth: 45,
    height: 24,
    paddingHorizontal: 11,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e1e1e1',
    backgroundColor: theme.colors.white,
  },
  activeChip: {
    borderColor: theme.colors.purple,
    backgroundColor: theme.colors.purple,
  },
  chipText: {
    color: theme.colors.text,
    fontSize: 10.5,
    fontWeight: '700',
  },
  activeChipText: {
    color: theme.colors.white,
    fontWeight: '900',
  },
});
