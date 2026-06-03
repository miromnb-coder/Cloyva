import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View } from 'react-native';

import { theme } from '../../constants/theme';

function OptionPill({ label, active, icon }: { label: string; active?: boolean; icon: 'hanger' | 'tag' | 'repeat' }) {
  return (
    <View style={[styles.optionPill, active && styles.activeOptionPill]}>
      {icon === 'hanger' ? (
        <MaterialCommunityIcons name="hanger" color={active ? theme.colors.purple : theme.colors.text} size={17} />
      ) : (
        <Feather name={icon} color={active ? theme.colors.purple : theme.colors.text} size={15} />
      )}
      <Text style={[styles.optionText, active && styles.activeOptionText]}>{label}</Text>
      {active ? (
        <View style={styles.checkCircle}>
          <Feather name="check" color={theme.colors.white} size={9} />
        </View>
      ) : null}
    </View>
  );
}

export function ListingOptionsSection() {
  return (
    <View style={styles.section}>
      <View style={styles.titleRow}>
        <Text style={styles.sectionTitle}>Listing Options</Text>
        <Feather name="info" color="#777777" size={12} />
      </View>

      <View style={styles.optionsRow}>
        <OptionPill label="Borrow" icon="hanger" active />
        <OptionPill label="Sell" icon="tag" active />
        <OptionPill label="Swap" icon="repeat" />
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
  titleRow: {
    marginBottom: 7,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  sectionTitle: {
    color: theme.colors.text,
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: -0.25,
  },
  optionsRow: {
    flexDirection: 'row',
    gap: 7,
  },
  optionPill: {
    flex: 1,
    height: 36,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: '#dddddd',
    backgroundColor: theme.colors.white,
  },
  activeOptionPill: {
    borderColor: theme.colors.purple,
  },
  optionText: {
    color: theme.colors.text,
    fontSize: 11.5,
    fontWeight: '700',
  },
  activeOptionText: {
    color: theme.colors.purple,
    fontWeight: '900',
  },
  checkCircle: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.purple,
  },
});
