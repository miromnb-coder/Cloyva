import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View } from 'react-native';

import { theme } from '../../constants/theme';

const categories = [
  { label: 'Jackets', count: 24, icon: 'tshirt-crew-outline' },
  { label: 'Tops', count: 38, icon: 'hanger' },
  { label: 'Pants', count: 20, icon: 'human' },
  { label: 'Shoes', count: 18, icon: 'shoe-sneaker' },
  { label: 'Accessories', count: 12, icon: 'bag-personal-outline' },
] as const;

export function ClosetCategories() {
  return (
    <View style={styles.wrap}>
      {categories.map((category, index) => {
        const active = index === 0;

        return (
          <View key={category.label} style={styles.category}>
            <MaterialCommunityIcons name={category.icon} color={active ? theme.colors.text : '#777777'} size={22} />
            <Text style={styles.label}>{category.label}</Text>
            <Text style={[styles.count, active && styles.activeCount]}>{category.count}</Text>
            {active ? <View style={styles.activeLine} /> : null}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    height: 70,
    marginHorizontal: 14,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.white,
  },
  category: {
    width: 58,
    height: 62,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginTop: 3,
    color: theme.colors.text,
    fontSize: 8.5,
    fontWeight: '800',
  },
  count: {
    marginTop: 1,
    color: '#777777',
    fontSize: 8.5,
    fontWeight: '700',
  },
  activeCount: {
    color: theme.colors.purple,
  },
  activeLine: {
    position: 'absolute',
    left: 11,
    right: 11,
    bottom: 0,
    height: 2,
    borderRadius: 2,
    backgroundColor: theme.colors.purple,
  },
});
