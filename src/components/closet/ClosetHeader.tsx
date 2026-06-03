import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';

import { theme } from '../../constants/theme';

const coverImage = 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80';
const avatarImage = 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=85';

export function ClosetHeader() {
  return (
    <ImageBackground source={{ uri: coverImage }} resizeMode="cover" style={styles.cover} imageStyle={styles.coverImage}>
      <View style={styles.coverOverlay} />

      <View style={styles.topActions}>
        <Pressable accessibilityLabel="Share closet" style={styles.iconButton}>
          <Feather name="share" color={theme.colors.text} size={18} />
        </Pressable>
        <Pressable accessibilityLabel="Open closet menu" style={styles.iconButton}>
          <Feather name="menu" color={theme.colors.text} size={19} />
        </Pressable>
      </View>

      <View style={styles.profileRow}>
        <ImageBackground source={{ uri: avatarImage }} resizeMode="cover" style={styles.avatar} imageStyle={styles.avatarImage} />

        <View style={styles.profileInfo}>
          <View style={styles.usernameRow}>
            <Text style={styles.username}>@its.sofia</Text>
            <Ionicons name="checkmark-circle" color={theme.colors.purple} size={15} />
          </View>

          <View style={styles.metaRow}>
            <Text style={styles.star}>★</Text>
            <Text style={styles.metaText}>4.8 (126)</Text>
          </View>

          <View style={styles.metaRow}>
            <Feather name="map-pin" color={theme.colors.text} size={11} />
            <Text style={styles.metaText}>Berlin, Germany</Text>
          </View>

          <Pressable style={styles.editButton}>
            <Text style={styles.editText}>Edit Closet</Text>
            <Feather name="edit-2" color="#777777" size={10} />
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  cover: {
    height: 172,
    marginHorizontal: 14,
    marginTop: 4,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    overflow: 'hidden',
  },
  coverImage: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  coverOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.50)',
  },
  topActions: {
    position: 'absolute',
    top: 12,
    right: 13,
    flexDirection: 'row',
    gap: 10,
  },
  iconButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.50)',
  },
  profileRow: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  avatar: {
    width: 78,
    height: 78,
    borderRadius: 39,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: theme.colors.white,
    backgroundColor: '#dddddd',
  },
  avatarImage: {
    borderRadius: 39,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 12,
    paddingTop: 9,
  },
  usernameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  username: {
    color: theme.colors.text,
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: -0.25,
  },
  metaRow: {
    marginTop: 3,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  star: {
    color: '#f7b500',
    fontSize: 11,
    fontWeight: '900',
  },
  metaText: {
    color: theme.colors.text,
    fontSize: 10.5,
    fontWeight: '700',
  },
  editButton: {
    marginTop: 9,
    height: 26,
    maxWidth: 178,
    borderRadius: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
  },
  editText: {
    color: theme.colors.text,
    fontSize: 10.5,
    fontWeight: '800',
  },
});
