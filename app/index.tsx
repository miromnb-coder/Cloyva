import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const tabs = ['For You', 'Nearby', 'New In', 'Following', 'Streetwear'];

const outfitImage =
  'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=90';

const purple = '#7057ff';
const text = '#101010';
const muted = '#6f6f75';

export default function IndexScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.logo}>Cloyva</Text>

        <View style={styles.headerActions}>
          <Pressable accessibilityLabel="Notifications" style={styles.headerIconButton}>
            <Feather name="bell" color={text} size={21} />
          </Pressable>
          <Pressable accessibilityLabel="Filter" style={styles.headerIconButton}>
            <Feather name="filter" color={text} size={21} />
          </Pressable>
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabs} style={styles.tabsScroll}>
        {tabs.map((tab, index) => {
          const active = index === 0;

          return (
            <Pressable key={tab} style={[styles.tab, active && styles.activeTab]}>
              <Text style={[styles.tabText, active && styles.activeTabText]}>{tab}</Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <View style={styles.feedCardWrap}>
        <ImageBackground source={{ uri: outfitImage }} resizeMode="cover" style={styles.cardImage} imageStyle={styles.cardImageRadius}>
          <View style={styles.imageShade} />
          <View style={styles.cardContent}>
            <View style={styles.sellerRow}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>LB</Text>
              </View>

              <View style={styles.sellerTextWrap}>
                <Text style={styles.sellerName}>Luca B.</Text>
                <Text style={styles.sellerMeta}>1.2 km away · 4.8 ★</Text>
              </View>
            </View>

            <View style={styles.styleTag}>
              <Text style={styles.styleTagText}>Streetwear</Text>
            </View>

            <View style={styles.socialActions}>
              <Pressable accessibilityLabel="Save item" style={styles.socialButton}>
                <Feather name="heart" color={text} size={25} />
              </Pressable>
              <Text style={styles.socialCount}>128</Text>

              <Pressable accessibilityLabel="Ask about item" style={styles.socialButton}>
                <Feather name="message-circle" color={text} size={24} />
              </Pressable>
              <Text style={styles.socialCount}>24</Text>

              <Pressable accessibilityLabel="Share item" style={styles.socialButton}>
                <Feather name="send" color={text} size={23} />
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
              <Pressable style={[styles.actionButton, styles.borrowButton]}>
                <Feather name="calendar" color="#ffffff" size={17} />
                <Text style={styles.borrowButtonText}>Borrow</Text>
              </Pressable>

              <Pressable style={[styles.actionButton, styles.buyButton]}>
                <Feather name="repeat" color="#ffffff" size={17} />
                <Text style={styles.buyButtonText}>Buy</Text>
              </Pressable>

              <Pressable style={[styles.actionButton, styles.swapButton]}>
                <Feather name="repeat" color={text} size={17} />
                <Text style={styles.swapButtonText}>Swap</Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Feather name="home" color={purple} size={20} />
          <Text style={styles.activeNavText}>Feed</Text>
        </View>

        <View style={styles.navItem}>
          <Ionicons name="sparkles-outline" color={text} size={20} />
          <Text style={styles.navText}>Match</Text>
        </View>

        <View style={styles.addNavItem}>
          <View style={styles.addCircle}>
            <Feather name="plus" color="#ffffff" size={24} />
          </View>
          <Text style={styles.activeNavText}>Add</Text>
        </View>

        <View style={styles.navItem}>
          <MaterialCommunityIcons name="hanger" color={text} size={21} />
          <Text style={styles.navText}>Closet</Text>
        </View>

        <View style={styles.navItem}>
          <Feather name="circle" color={text} size={21} />
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
    minHeight: 64,
    paddingHorizontal: 22,
    paddingTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    color: text,
    fontSize: 43,
    lineHeight: 49,
    fontWeight: '900',
    letterSpacing: -2.8,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerIconButton: {
    width: 47,
    height: 47,
    borderRadius: 23.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#eeeeee',
    shadowColor: '#111111',
    shadowOpacity: 0.04,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
  tabsScroll: {
    flexGrow: 0,
  },
  tabs: {
    height: 49,
    paddingHorizontal: 22,
    gap: 14,
    alignItems: 'center',
  },
  tab: {
    height: 37,
    paddingHorizontal: 18,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  activeTab: {
    backgroundColor: text,
  },
  tabText: {
    color: muted,
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: -0.25,
  },
  activeTabText: {
    color: '#ffffff',
  },
  feedCardWrap: {
    flex: 1,
    marginHorizontal: 21,
    marginTop: 8,
    marginBottom: 13,
    minHeight: 505,
    borderRadius: 30,
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
    borderRadius: 30,
  },
  imageShade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.04)',
  },
  cardContent: {
    flex: 1,
    padding: 16,
  },
  sellerRow: {
    position: 'absolute',
    top: 18,
    left: 18,
    right: 132,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.94)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.75)',
  },
  avatarText: {
    color: text,
    fontSize: 14,
    fontWeight: '900',
  },
  sellerTextWrap: {
    minWidth: 0,
  },
  sellerName: {
    color: '#ffffff',
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '900',
    letterSpacing: -0.4,
    textShadowColor: 'rgba(0,0,0,0.45)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 8,
  },
  sellerMeta: {
    marginTop: 1,
    color: 'rgba(255,255,255,0.92)',
    fontSize: 12.5,
    lineHeight: 16,
    fontWeight: '800',
    textShadowColor: 'rgba(0,0,0,0.45)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 8,
  },
  styleTag: {
    position: 'absolute',
    top: 22,
    right: 16,
    height: 39,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: purple,
  },
  styleTagText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: -0.2,
  },
  socialActions: {
    position: 'absolute',
    right: 14,
    bottom: 128,
    alignItems: 'center',
  },
  socialButton: {
    width: 47,
    height: 47,
    borderRadius: 23.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.96)',
    shadowColor: '#000000',
    shadowOpacity: 0.11,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  socialCount: {
    marginTop: 5,
    marginBottom: 12,
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '900',
    textShadowColor: 'rgba(0,0,0,0.42)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 7,
  },
  itemInfoStack: {
    position: 'absolute',
    left: 16,
    bottom: 92,
    gap: 10,
  },
  infoPill: {
    width: 100,
    minHeight: 63,
    borderRadius: 13,
    paddingHorizontal: 13,
    paddingVertical: 9,
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.92)',
  },
  infoLabel: {
    color: '#777777',
    fontSize: 12.5,
    fontWeight: '800',
  },
  infoValue: {
    marginTop: 4,
    color: text,
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: -0.35,
  },
  actionRow: {
    position: 'absolute',
    left: 13,
    right: 13,
    bottom: 14,
    height: 58,
    flexDirection: 'row',
    gap: 10,
  },
  actionButton: {
    flex: 1,
    borderRadius: 17,
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  borrowButton: {
    backgroundColor: purple,
  },
  buyButton: {
    backgroundColor: '#050505',
  },
  swapButton: {
    backgroundColor: '#ffffff',
  },
  borrowButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: -0.25,
  },
  buyButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: -0.25,
  },
  swapButtonText: {
    color: text,
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: -0.25,
  },
  bottomNav: {
    minHeight: 69,
    paddingHorizontal: 26,
    paddingTop: 8,
    paddingBottom: 8,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#efefef',
  },
  navItem: {
    width: 47,
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  addNavItem: {
    width: 47,
    minHeight: 52,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: -1,
  },
  addCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: purple,
  },
  navText: {
    marginTop: 2,
    color: '#444444',
    fontSize: 9.5,
    lineHeight: 12,
    fontWeight: '700',
  },
  activeNavText: {
    marginTop: 2,
    color: purple,
    fontSize: 9.5,
    lineHeight: 12,
    fontWeight: '800',
  },
});
