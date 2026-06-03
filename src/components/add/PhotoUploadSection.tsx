import Feather from '@expo/vector-icons/Feather';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';

import { theme } from '../../constants/theme';

const jacketImage = 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=90';
const jacketBackImage = 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=500&q=85';
const patchImage = 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=500&q=85';

export function PhotoUploadSection() {
  return (
    <View style={styles.wrap}>
      <ImageBackground source={{ uri: jacketImage }} resizeMode="cover" style={styles.heroImage} imageStyle={styles.heroImageRadius}>
        <View style={styles.imageOverlay} />
        <Pressable accessibilityLabel="Add main photo" style={styles.cameraButton}>
          <Feather name="camera" color={theme.colors.text} size={17} />
        </Pressable>
      </ImageBackground>

      <View style={styles.thumbsRow}>
        <View style={[styles.thumb, styles.activeThumb]}>
          <ImageBackground source={{ uri: jacketImage }} resizeMode="cover" style={styles.thumbImage} imageStyle={styles.thumbRadius} />
        </View>
        <View style={styles.thumb}>
          <ImageBackground source={{ uri: jacketBackImage }} resizeMode="cover" style={styles.thumbImage} imageStyle={styles.thumbRadius} />
        </View>
        <View style={styles.thumb}>
          <ImageBackground source={{ uri: patchImage }} resizeMode="cover" style={styles.thumbImage} imageStyle={styles.thumbRadius} />
        </View>
        <Pressable accessibilityLabel="Add photo slot" style={styles.emptyThumb}>
          <Feather name="plus" color={theme.colors.text} size={22} />
        </Pressable>
        <Pressable accessibilityLabel="Add photos" style={styles.addPhotosButton}>
          <Text style={styles.addPhotosText}>+ Add</Text>
          <Text style={styles.addPhotosText}>photos</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 22,
    backgroundColor: theme.colors.white,
  },
  heroImage: {
    height: 174,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#eeeeee',
  },
  heroImageRadius: {
    borderRadius: 15,
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.10)',
  },
  cameraButton: {
    position: 'absolute',
    left: 12,
    top: 12,
    width: 35,
    height: 35,
    borderRadius: 17.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.95)',
  },
  thumbsRow: {
    marginTop: 10,
    height: 53,
    flexDirection: 'row',
    gap: 9,
  },
  thumb: {
    width: 62,
    height: 53,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#eeeeee',
  },
  activeThumb: {
    borderWidth: 1.8,
    borderColor: theme.colors.purple,
  },
  thumbImage: {
    flex: 1,
  },
  thumbRadius: {
    borderRadius: 7,
  },
  emptyThumb: {
    width: 68,
    height: 53,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#d7d7d7',
    borderStyle: 'dashed',
    backgroundColor: theme.colors.white,
  },
  addPhotosButton: {
    flex: 1,
    height: 53,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.2,
    borderColor: theme.colors.purple,
    backgroundColor: theme.colors.white,
  },
  addPhotosText: {
    color: theme.colors.purple,
    fontSize: 11.5,
    lineHeight: 14,
    fontWeight: '800',
  },
});
