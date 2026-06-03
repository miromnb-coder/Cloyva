import Feather from '@expo/vector-icons/Feather';
import { StyleSheet, Text, View } from 'react-native';

import { theme } from '../../constants/theme';

function DetailRow({ icon, label, value }: { icon: keyof typeof Feather.glyphMap; label: string; value: string }) {
  return (
    <View style={styles.detailRow}>
      <View style={styles.detailLeft}>
        <Feather name={icon} color="#777777" size={13} />
        <Text style={styles.detailLabel}>{label}</Text>
      </View>
      <View style={styles.detailRight}>
        <Text numberOfLines={2} style={styles.detailValue}>{value}</Text>
        <Feather name="chevron-right" color={theme.colors.text} size={17} />
      </View>
    </View>
  );
}

export function ExtraDetailsSection() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Extra Details</Text>

      <View style={styles.card}>
        <DetailRow icon="map-pin" label="Location" value="Berlin, Germany" />
        <View style={styles.divider} />
        <DetailRow icon="file-text" label="Description" value="Classic vintage varsity jacket with embroidered details. Timeless style..." />
        <View style={styles.divider} />

        <View style={styles.aiCard}>
          <View style={styles.aiIcon}>
            <Feather name="zap" color={theme.colors.white} size={17} />
          </View>
          <View style={styles.aiTextWrap}>
            <Text style={styles.aiTitle}>AI tip: Pair with black jeans and white sneakers.</Text>
            <Text style={styles.aiSubtitle}>Our AI stylist thinks this combo is a perfect match.</Text>
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
  detailRow: {
    minHeight: 41,
    paddingHorizontal: 11,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailLeft: {
    width: 118,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailLabel: {
    color: theme.colors.text,
    fontSize: 10.7,
    fontWeight: '700',
  },
  detailRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 7,
  },
  detailValue: {
    flex: 1,
    color: theme.colors.text,
    textAlign: 'right',
    fontSize: 10.6,
    lineHeight: 13,
    fontWeight: '700',
  },
  divider: {
    height: 1,
    backgroundColor: '#ededed',
  },
  aiCard: {
    margin: 8,
    minHeight: 50,
    borderRadius: 11,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    backgroundColor: '#f3f0ff',
  },
  aiIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.purple,
  },
  aiTextWrap: {
    flex: 1,
  },
  aiTitle: {
    color: theme.colors.text,
    fontSize: 10.6,
    lineHeight: 13,
    fontWeight: '900',
  },
  aiSubtitle: {
    marginTop: 2,
    color: '#666666',
    fontSize: 9.5,
    lineHeight: 12,
    fontWeight: '600',
  },
});
