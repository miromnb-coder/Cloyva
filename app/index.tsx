import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const tabs = ['For You', 'Nearby', 'New In', 'Following', 'Streetwear'];

const outfitImage =
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85';

export default function IndexScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.logo}>Cloyva</Text>

        <View style={styles.headerActions}>
          <Pressable accessibilityLabel="Notifications" style={styles.iconButton}>
            <Text style={styles.iconText}>♡</Text>
          </Pressable>
          <Pressable accessibilityLabel="Filter" style={styles.iconButton}>
            <Text style={styles.iconText}>⌯</Text>
          </Pressable>
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabs}>
        {tabs.map((tab, index) => {
          const active = index === 0;

          return (
            <Pressable key={tab} style={[styles.tab, active && styles.activeTab]}>
              <Text style={[styles.tabText, active && styles.activeTabText]}>{tab}</Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <View style={styles.feedCard}>
        <ImageBackground source={{ uri: outfitImage }} resizeMode="cover" style={styles.cardImage} imageStyle={styles.cardImageRadius}>
          <View style={styles.imageOverlay}>
            <View style={styles.sellerRow}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>LB</Text>
              </View>

              <View>
                <Text style={styles.sellerName}>Luca B.</Text>
                <Text style={styles.sellerMeta}>1.2 km away · 4.8 ★</Text>
              </View>
            </View>

            <View style={styles.styleTag}>
              <Text style={styles.styleTagText}>Streetwear</Text>
            </View>

            <View style={styles.socialActions}>
              <View style={styles.socialButton}>
                <Text style={styles.socialIcon}>♡</Text>
              </View>
              <Text style={styles.socialCount}>Save</Text>

              <View style={styles.socialButton}>
                <Text style={styles.socialIcon}>●</Text>
              </View>
              <Text style={styles.socialCount}>Ask</Text>

              <View style={styles.socialButton}>
                <Text style={styles.socialIcon}>↗</Text>
              </View>
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
              <Pressable style={[styles.actionButton, styles.borrowButton]}>
                <Text style={styles.borrowButtonText}>▣ Borrow</Text>
              </Pressable>

              <Pressable style={[styles.actionButton, styles.buyButton]}>
                <Text style={styles.buyButtonText}>⇄ Buy</Text>
              </Pressable>

              <Pressable style={[styles.actionButton, styles.swapButton]}>
                <Text style={styles.swapButtonText}>↔ Swap</Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Text style={styles.activeNavIcon}>⌂</Text>
          <Text style={styles.activeNavText}>Feed</Text>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>✧</Text>
          <Text style={styles.navText}>Match</Text>
        </View>

        <View style={styles.addNavItem}>
          <Text style={styles.addIcon}>＋</Text>
          <Text style={styles.activeNavText}>Add</Text>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>♙</Text>
          <Text style={styles.navText}>Closet</Text>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>○</Text>
          <Text style={styles.navText}>Inbox</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fbfaf8',
  },
  header: {
    minHeight: 72,
    paddingHorizontal: 22,
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    color: '#111111',
    fontSize: 35,
    lineHeight: 42,
    fontWeight: '800',
    letterSpacing: -1.5,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#eeeeee',
  },
  iconText: {
    color: '#111111',
    fontSize: 21,
    fontWeight: '600',
  },
  tabs: {
    paddingHorizontal: 22,
    gap: 12,
    paddingBottom: 14,
  },
  tab: {
    height: 36,
    paddingHorizontal: 16,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  activeTab: {
    backgroundColor: '#101010',
  },
  tabText: {
    color: '#6e6d73',
    fontSize: 14,
    fontWeight: '600',
  },
  activeTabText: {
    color: '#ffffff',
  },
  feedCard: {
    flex: 1,
    marginHorizontal: 22,
    marginBottom: 14,
    borderRadius: 28,
    overflow: 'hidden',
    backgroundColor: '#dedede',
    shadowColor: '#111111',
    shadowOpacity: 0.16,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 15 },
    elevation: 10,
  },
  cardImage: {
    flex: 1,
  },
  cardImageRadius: {
    borderRadius: 28,
  },
  imageOverlay: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.08)',
  },
  sellerRow: {
    position: 'absolute',
    top: 17,
    left: 17,
    right: 118,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.92)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.72)',
  },
  avatarText: {
    color: '#111111',
    fontSize: 13,
    fontWeight: '800',
  },
  sellerName: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800',
    textShadowColor: 'rgba(0,0,0,0.35)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 8,
  },
  sellerMeta: {
    marginTop: 2,
    color: 'rgba(255,255,255,0.9)',
    fontSize: 12,
    fontWeight: '700',
    textShadowColor: 'rgba(0,0,0,0.35)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 8,
  },
  styleTag: {
    position: 'absolute',
    top: 21,
    right: 17,
    height: 34,
    paddingHorizontal: 13,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7057ff',
  },
  styleTagText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '800',
  },
  socialActions: {
    position: 'absolute',
    right: 15,
    top: '39%',
    alignItems: 'center',
  },
  socialButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.95)',
    shadowColor: '#000000',
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  socialIcon: {
    color: '#111111',
    fontSize: 21,
    fontWeight: '800',
  },
  socialCount: {
    marginTop: 5,
    marginBottom: 12,
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '800',
    textShadowColor: 'rgba(0,0,0,0.4)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 7,
  },
  itemInfoStack: {
    position: 'absolute',
    left: 16,
    bottom: 94,
    gap: 10,
  },
  infoPill: {
    width: 96,
    minHeight: 62,
    borderRadius: 12,
    paddingHorizontal: 13,
    paddingVertical: 9,
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.93)',
  },
  infoLabel: {
    color: '#777777',
    fontSize: 12,
    fontWeight: '700',
  },
  infoValue: {
    marginTop: 4,
    color: '#111111',
    fontSize: 15,
    fontWeight: '800',
  },
  actionRow: {
    position: 'absolute',
    left: 13,
    right: 13,
    bottom: 14,
    height: 56,
    flexDirection: 'row',
    gap: 10,
  },
  actionButton: {
    flex: 1,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  borrowButton: {
    backgroundColor: '#7057ff',
  },
  buyButton: {
    backgroundColor: '#050505',
  },
  swapButton: {
    backgroundColor: '#ffffff',
  },
  borrowButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '800',
  },
  buyButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '800',
  },
  swapButtonText: {
    color: '#111111',
    fontSize: 14,
    fontWeight: '800',
  },
  bottomNav: {
    minHeight: 82,
    paddingHorizontal: 18,
    paddingTop: 9,
    paddingBottom: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  navItem: {
    width: 58,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addNavItem: {
    width: 58,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -2,
  },
  navIcon: {
    color: '#252525',
    fontSize: 23,
    lineHeight: 27,
  },
  activeNavIcon: {
    color: '#7057ff',
    fontSize: 25,
    lineHeight: 28,
    fontWeight: '800',
  },
  addIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    overflow: 'hidden',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#ffffff',
    backgroundColor: '#7057ff',
    fontSize: 28,
    lineHeight: 41,
    fontWeight: '700',
  },
  navText: {
    marginTop: 2,
    color: '#4f4f4f',
    fontSize: 11,
    fontWeight: '700',
  },
  activeNavText: {
    marginTop: 2,
    color: '#7057ff',
    fontSize: 11,
    fontWeight: '800',
  },
});
