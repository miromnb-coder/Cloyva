import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View } from 'react-native';

import { theme } from '../../constants/theme';

const categories = [
  { label: 'Jackets', count: 24, family: 'material', icon: 'tshirt-crew-outline' },
  { label: 'Tops', count: 38, family: 'material', icon: 'hanger' },
  { label: 'Pants', count: 20, family: 'material', icon: 'human-male' },
  { label: 'Shoes', count: 18, family: 'material', icon: 'shoe-sneaker' },
  { label: 'Accessories', count: 12, family: 'feather', icon: 'shopping-bag' },
] as const;

export function ClosetCategories() {
  return (
    <View style={styles.wrap}>
      {categories.map((category, index) => {
        const active = index === 0;
        const iconColor = active ? theme.colors.text : '#777777';

        return (
          <View key={category.label} style={styles.category}>
            {category.family === 'material' ? (
              <MaterialCommunityIcons name={category.icon} color={iconColor} size={19} />
            ) : (
              <Feather name={category.icon} color={iconColor} size={18} />
            )}
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
    height: 62,
    marginHorizontal: 0,
    paddingHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.white,
  },
  category: {
    width: 52,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginTop: 2,
    color: theme.colors.text,
    fontSize: 7.7,
    fontWeight: '800',
  },
  count: {
    marginTop: 1,
    color: '#777777',
    fontSize: 7.7,
    fontWeight: '700',
  },
  activeCount: {
    color: theme.colors.purple,
  },
  activeLine: {
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 0,
    height: 2,
    borderRadius: 2,
    backgroundColor: theme.colors.purple,
  },
});
