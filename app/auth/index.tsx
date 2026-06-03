import Feather from '@expo/vector-icons/Feather';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import { AuthButton } from '../../src/components/auth/AuthButton';
import { AuthFooter } from '../../src/components/auth/AuthFooter';
import { theme } from '../../src/constants/theme';

const authHero = require('../../assets/images/auth-hero.PNG');

export default function AuthWelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.screen} edges={['top', 'bottom']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <View style={styles.brandWrap}>
          <Text style={styles.logo}>Cloyva</Text>
          <Text style={styles.tagline}>BORROW. BUY. SWAP. STYLE.</Text>
        </View>

        <Image source={authHero} resizeMode="cover" style={styles.heroImage} />

        <View style={styles.copyWrap}>
          <Text style={styles.headline}>Borrow. Buy. Swap. Style.</Text>
          <Text style={styles.subheadline}>Join Cloyva to discover closets near you.</Text>
        </View>

        <View style={styles.actions}>
          <AuthButton
            label="Continue with Email"
            onPress={() => router.push('/auth/email')}
            icon={<Feather name="mail" color={theme.colors.white} size={23} />}
          />

          <AuthButton label="Continue with Google" variant="secondary" icon={<Text style={styles.googleIcon}>G</Text>} />
        </View>

        <View style={styles.dividerWrap}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.dividerLine} />
        </View>

        <Pressable onPress={() => router.push('/auth/email')} style={styles.signInWrap}>
          <Text style={styles.signInText}>Already have an account? <Text style={styles.signInLink}>Sign in</Text></Text>
        </Pressable>

        <AuthFooter />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 18,
    backgroundColor: theme.colors.white,
  },
  brandWrap: {
    alignItems: 'center',
    marginBottom: 26,
  },
  logo: {
    color: theme.colors.text,
    fontSize: 43,
    lineHeight: 48,
    fontWeight: '900',
    letterSpacing: -2,
  },
  tagline: {
    marginTop: 3,
    color: theme.colors.purple,
    fontSize: 13,
    lineHeight: 17,
    fontWeight: '800',
    letterSpacing: 2.3,
  },
  heroImage: {
    width: '100%',
    height: 299,
    borderRadius: 21,
    backgroundColor: '#f4f3f1',
  },
  copyWrap: {
    alignItems: 'center',
    paddingTop: 29,
  },
  headline: {
    color: theme.colors.text,
    fontSize: 29,
    lineHeight: 36,
    fontWeight: '900',
    letterSpacing: -1.35,
    textAlign: 'center',
  },
  subheadline: {
    marginTop: 8,
    color: theme.colors.mutedText,
    fontSize: 15.2,
    lineHeight: 21,
    fontWeight: '500',
    textAlign: 'center',
  },
  actions: {
    gap: 14,
    paddingTop: 28,
  },
  googleIcon: {
    color: '#4285F4',
    fontSize: 22,
    lineHeight: 24,
    fontWeight: '900',
  },
  dividerWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingTop: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e9e9ee',
  },
  dividerText: {
    color: '#77777c',
    fontSize: 14,
    fontWeight: '500',
  },
  signInWrap: {
    alignItems: 'center',
    paddingTop: 20,
  },
  signInText: {
    color: '#77777c',
    fontSize: 15,
    fontWeight: '500',
  },
  signInLink: {
    color: theme.colors.purple,
    fontWeight: '700',
  },
});
