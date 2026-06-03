import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import { theme } from '../../constants/theme';

const items = [
  {
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=80',
    tag: 'Borrowable',
    size: 'M',
    tagColor: '#2fa66a',
  },
  {
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=500&q=80',
    tag: 'For Sale',
    size: 'L',
    tagColor: '#2fa66a',
  },
  {
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500&q=80',
    tag: 'Swap',
    size: 'M',
    tagColor: theme.colors.purple,
  },
  {
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80',
    tag: 'Borrowable',
    size: '42',
    tagColor: '#2fa66a',
  },
  {
    image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=500&q=80',
    tag: 'For Sale',
    size: 'M',
    tagColor: '#2fa66a',
  },
  {
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=500&q=80',
    tag: 'Swap',
    size: '41',
    tagColor: theme.colors.purple,
  },
];

export function ClosetItemGrid() {
  return (
    <View style={styles.wrap}>
      {items.map((item, index) => (
        <View key={`${item.tag}-${index}`} style={styles.card}>
          <ImageBackground source={{ uri: item.image }} resizeMode="cover" style={styles.image} imageStyle={styles.imageRadius}>
            <View style={[styles.tag, { backgroundColor: item.tagColor }]}>
              <Text style={styles.tagText}>{item.tag}</Text>
            </View>
            <View style={styles.sizeBadge}>
              <Text style={styles.sizeText}>{item.size}</Text>
            </View>
          </ImageBackground>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginHorizontal: 14,
    paddingHorizontal: 10,
    paddingTop: 8,
    paddingBottom: 9,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    backgroundColor: theme.colors.white,
  },
  card: {
    width: '31.5%',
    aspectRatio: 0.85,
    borderRadius: 9,
    overflow: 'hidden',
    backgroundColor: '#ededed',
  },
  image: {
    flex: 1,
  },
  imageRadius: {
    borderRadius: 9,
  },
  tag: {
    position: 'absolute',
    left: 5,
    bottom: 5,
    minHeight: 15,
    borderRadius: 6,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagText: {
    color: theme.colors.white,
    fontSize: 7,
    fontWeight: '900',
  },
  sizeBadge: {
    position: 'absolute',
    right: 4,
    bottom: 4,
    width: 17,
    height: 17,
    borderRadius: 8.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.92)',
  },
  sizeText: {
    color: theme.colors.text,
    fontSize: 7,
    fontWeight: '900',
  },
});
