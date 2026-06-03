import Feather from '@expo/vector-icons/Feather';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';

import { theme } from '../constants/theme';
import { ActionButton } from './ActionButton';

const outfitImage =
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=90';

export function OutfitCard() {
  return (
    <View style={styles.cardWrap}>
      <ImageBackground source={{ uri: outfitImage }} resizeMode="cover" style={styles.cardImage} imageStyle={styles.cardImageRadius}>
        <View style={styles.imageShade} />
        <View style={styles.content}>
          <View style={styles.sellerRow}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>LB</Text>
            </View>

            <View style={styles.sellerTextWrap}>
              <Text style={styles.sellerName}>Luca B.</Text>
              <Text style={styles.sellerMeta}>1.2 km away</Text>
            </View>
          </View>

          <View style={styles.styleTag}>
            <Text style={styles.styleTagText}>Streetwear</Text>
          </View>

          <View style={styles.socialActions}>
            <Pressable accessibilityLabel="Save item" style={styles.socialButton}>
              <Feather name="heart" color={theme.colors.text} size={17} />
            </Pressable>
            <Text style={styles.socialCount}>128</Text>

            <Pressable accessibilityLabel="Ask about item" style={styles.socialButton}>
              <Feather name="message-circle" color={theme.colors.text} size={17} />
            </Pressable>
            <Text style={styles.socialCount}>24</Text>

            <Pressable accessibilityLabel="Share item" style={styles.socialButton}>
              <Feather name="send" color={theme.colors.text} size={17} />
            </Pressable>
          </View>

          <View style={styles.itemInfoStack}>
            <View style={styles.infoPill}>
              <Text style={styles.infoLabel}>Size</Text>
              <Text style={styles.infoValue}>M</Text>
            </View>

            <View style={styles.infoPill}>
              <Text style={styles.infoLabel}>Condition</Text>
              <Text style={styles.infoValue}>Like New</Text>
            </View>
          </View>

          <View style={styles.actionRow}>
            <ActionButton icon="calendar" label="Borrow" variant="purple" />
            <ActionButton icon="repeat" label="Buy" variant="black" />
            <ActionButton icon="repeat" label="Swap" variant="white" />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrap: {
    height: 560,
    marginHorizontal: 22,
    marginTop: 6,
    marginBottom: 8,
    borderRadius: 22,
    overflow: 'hidden',
    backgroundColor: '#dedede',
    shadowColor: theme.colors.text,
    shadowOpacity: 0.12,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 11 },
    elevation: 7,
  },
  cardImage: {
    flex: 1,
  },
  cardImageRadius: {
    borderRadius: 22,
  },
  imageShade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.18)',
  },
  content: {
    flex: 1,
    padding: 12,
  },
  sellerRow: {
    position: 'absolute',
    top: 13,
    left: 13,
    right: 112,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.94)',
  },
  avatarText: {
    color: theme.colors.text,
    fontSize: 10.5,
    fontWeight: '900',
  },
  sellerTextWrap: {
    minWidth: 0,
  },
  sellerName: {
    color: theme.colors.white,
    fontSize: 12.5,
    lineHeight: 15,
    fontWeight: '800',
    textShadowColor: 'rgba(0,0,0,0.52)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 7,
  },
  sellerMeta: {
    color: 'rgba(255,255,255,0.92)',
    fontSize: 10.2,
    lineHeight: 13,
    fontWeight: '700',
    textShadowColor: 'rgba(0,0,0,0.52)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 7,
  },
  styleTag: {
    position: 'absolute',
    top: 15,
    right: 12,
    height: 28,
    paddingHorizontal: 11,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.purple,
  },
  styleTagText: {
    color: theme.colors.white,
    fontSize: 10.5,
    fontWeight: '800',
  },
  socialActions: {
    position: 'absolute',
    right: 11,
    bottom: 78,
    alignItems: 'center',
  },
  socialButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.96)',
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 9,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },
  socialCount: {
    marginTop: 2,
    marginBottom: 7,
    color: theme.colors.white,
    fontSize: 10,
    fontWeight: '800',
    textShadowColor: 'rgba(0,0,0,0.46)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 7,
  },
  itemInfoStack: {
    position: 'absolute',
    left: 13,
    bottom: 73,
    gap: 7,
  },
  infoPill: {
    width: 74,
    minHeight: 47,
    borderRadius: 10,
    paddingHorizontal: 9,
    paddingVertical: 6,
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.92)',
  },
  infoLabel: {
    color: '#777777',
    fontSize: 9.8,
    fontWeight: '700',
  },
  infoValue: {
    marginTop: 3,
    color: theme.colors.text,
    fontSize: 12.2,
    fontWeight: '900',
    letterSpacing: -0.2,
  },
  actionRow: {
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 9,
    flexDirection: 'row',
    gap: 8,
  },
});
