import Feather from '@expo/vector-icons/Feather';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import { theme } from '../../constants/theme';

const matches = [
  {
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80',
    match: '92% Match',
  },
  {
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=80',
    match: '88% Match',
  },
  {
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=500&q=80',
    match: '85% Match',
  },
];

export function StyleMatchSection() {
  return (
    <View style={styles.wrap}>
      <View style={styles.headerRow}>
        <View style={styles.titleRow}>
          <Feather name="zap" color={theme.colors.purple} size={12} />
          <Text style={styles.title}>Style Match</Text>
        </View>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      <View style={styles.cardsRow}>
        {matches.map((item) => (
          <View key={item.match} style={styles.card}>
            <ImageBackground source={{ uri: item.image }} resizeMode="cover" style={styles.image} imageStyle={styles.imageRadius}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{item.match}</Text>
              </View>
            </ImageBackground>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginHorizontal: 0,
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 170,
    backgroundColor: theme.colors.white,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  headerRow: {
    height: 26,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  title: {
    color: theme.colors.text,
    fontSize: 11.5,
    fontWeight: '900',
    letterSpacing: -0.2,
  },
  seeAll: {
    color: theme.colors.purple,
    fontSize: 9.2,
    fontWeight: '800',
  },
  cardsRow: {
    flexDirection: 'row',
    gap: 7,
  },
  card: {
    flex: 1,
    height: 56,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#ededed',
  },
  image: {
    flex: 1,
  },
  imageRadius: {
    borderRadius: 8,
  },
  badge: {
    position: 'absolute',
    left: 4,
    bottom: 4,
    height: 15,
    borderRadius: 5,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.purple,
  },
  badgeText: {
    color: theme.colors.white,
    fontSize: 6.6,
    fontWeight: '900',
  },
});
