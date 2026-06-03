import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { theme } from '../../constants/theme';

const coverImage = 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80';
const avatarImage = 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=85';

export function ClosetHeader() {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground source={{ uri: coverImage }} resizeMode="cover" style={styles.cover} imageStyle={styles.coverImage}>
      <View style={styles.coverOverlay} />

      <View style={[styles.topActions, { top: insets.top + 10 }]}>
        <Pressable accessibilityLabel="Share closet" style={styles.iconButton}>
          <Feather name="share-2" color={theme.colors.text} size={16} />
        </Pressable>
        <Pressable accessibilityLabel="Open closet menu" style={styles.iconButton}>
          <Feather name="menu" color={theme.colors.text} size={18} />
        </Pressable>
      </View>

      <View style={styles.profileRow}>
        <ImageBackground source={{ uri: avatarImage }} resizeMode="cover" style={styles.avatar} imageStyle={styles.avatarImage} />

        <View style={styles.profileInfo}>
          <View style={styles.usernameRow}>
            <Text style={styles.username}>@its.sofia</Text>
            <Ionicons name="checkmark-circle" color={theme.colors.purple} size={13} />
          </View>

          <View style={styles.metaRow}>
            <Text style={styles.star}>★</Text>
            <Text style={styles.metaText}>4.8 (126)</Text>
          </View>

          <View style={styles.metaRow}>
            <Feather name="map-pin" color={theme.colors.text} size={10} />
            <Text style={styles.metaText}>Berlin, Germany</Text>
          </View>

          <Pressable style={styles.editButton}>
            <Text style={styles.editText}>Edit Closet</Text>
            <Feather name="edit-2" color="#777777" size={9} />
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  cover: {
    height: 170,
    marginHorizontal: 0,
    marginTop: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    overflow: 'hidden',
  },
  coverImage: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  coverOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.48)',
  },
  topActions: {
    position: 'absolute',
    right: 18,
    flexDirection: 'row',
    gap: 8,
  },
  iconButton: {
    width: 29,
    height: 29,
    borderRadius: 14.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.70)',
  },
  profileRow: {
    position: 'absolute',
    left: 18,
    right: 18,
    bottom: 18,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  avatar: {
    width: 66,
    height: 66,
    borderRadius: 33,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: theme.colors.white,
    backgroundColor: '#dddddd',
  },
  avatarImage: {
    borderRadius: 33,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 11,
    paddingTop: 6,
  },
  usernameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  username: {
    color: theme.colors.text,
    fontSize: 13.5,
    fontWeight: '900',
    letterSpacing: -0.25,
  },
  metaRow: {
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  star: {
    color: '#f7b500',
    fontSize: 10.5,
    fontWeight: '900',
  },
  metaText: {
    color: theme.colors.text,
    fontSize: 9.6,
    fontWeight: '700',
  },
  editButton: {
    marginTop: 8,
    height: 24,
    maxWidth: 166,
    borderRadius: 7,
    paddingHorizontal: 12,
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
  },
  editText: {
    color: theme.colors.text,
    fontSize: 9.7,
    fontWeight: '800',
  },
});
