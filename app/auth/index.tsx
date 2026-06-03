import Feather from '@expo/vector-icons/Feather';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
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
      <View style={styles.content}>
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
            icon={<Feather name="mail" color={theme.colors.white} size={22} />}
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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 15,
    paddingBottom: 5,
    backgroundColor: theme.colors.white,
  },
  brandWrap: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    color: theme.colors.text,
    fontSize: 42,
    lineHeight: 45,
    fontWeight: '900',
    letterSpacing: -2,
  },
  tagline: {
    marginTop: 2,
    color: theme.colors.purple,
    fontSize: 12.5,
    lineHeight: 16,
    fontWeight: '800',
    letterSpacing: 2.25,
  },
  heroImage: {
    width: '100%',
    height: 274,
    borderRadius: 21,
    backgroundColor: '#f4f3f1',
  },
  copyWrap: {
    alignItems: 'center',
    paddingTop: 24,
  },
  headline: {
    color: theme.colors.text,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '900',
    letterSpacing: -1.25,
    textAlign: 'center',
  },
  subheadline: {
    marginTop: 7,
    color: theme.colors.mutedText,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  actions: {
    gap: 12,
    paddingTop: 24,
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
    paddingTop: 21,
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
    paddingTop: 17,
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
