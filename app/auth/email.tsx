import Feather from '@expo/vector-icons/Feather';
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import { AuthButton } from '../../src/components/auth/AuthButton';
import { AuthFooter } from '../../src/components/auth/AuthFooter';
import { theme } from '../../src/constants/theme';

const authEmailHero = require('../../assets/images/auth-email-hero.PNG');

export default function AuthEmailScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.screen} edges={['top', 'bottom']}>
      <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Pressable accessibilityLabel="Go back" onPress={() => router.back()} style={styles.backButton}>
          <Feather name="arrow-left" color={theme.colors.text} size={24} />
        </Pressable>

        <View style={styles.headerCopy}>
          <Text style={styles.title}>Continue with Email</Text>
          <Text style={styles.subtitle}>Sign in or create your account to start</Text>
          <Text style={styles.subtitle}>borrowing, buying, and swapping.</Text>
        </View>

        <Image source={authEmailHero} resizeMode="cover" style={styles.heroImage} />

        <View style={styles.form}>
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              placeholder="you@example.com"
              placeholderTextColor="#74747a"
              style={styles.input}
              textContentType="emailAddress"
            />
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordInputWrap}>
              <TextInput
                placeholder="••••••••••••"
                placeholderTextColor="#313136"
                secureTextEntry
                style={styles.passwordInput}
                textContentType="password"
              />
              <Feather name="eye" color="#77777c" size={21} />
            </View>
          </View>

          <Pressable style={styles.forgotWrap}>
            <Text style={styles.forgotText}>Forgot password?</Text>
          </Pressable>

          <View style={styles.keepRow}>
            <View style={styles.checkbox}>
              <Feather name="check" color={theme.colors.white} size={15} />
            </View>
            <Text style={styles.keepText}>Keep me signed in</Text>
          </View>
        </View>

        <View style={styles.actions}>
          <AuthButton label="Continue" />
          <AuthButton label="Send magic link" variant="secondary" icon={<Feather name="mail" color={theme.colors.text} size={24} />} />
        </View>

        <View style={styles.dividerWrap}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.signInWrap}>
          <Text style={styles.signInText}>Already have an account? <Text style={styles.signInLink}>Sign in</Text></Text>
        </View>

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
    paddingTop: 13,
    paddingBottom: 18,
    backgroundColor: theme.colors.white,
  },
  backButton: {
    width: 38,
    height: 38,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headerCopy: {
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 25,
  },
  title: {
    color: theme.colors.text,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '900',
    letterSpacing: -1.1,
    textAlign: 'center',
  },
  subtitle: {
    color: theme.colors.mutedText,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '500',
    textAlign: 'center',
  },
  heroImage: {
    width: '100%',
    height: 163,
    borderRadius: 18,
    backgroundColor: '#f4f3f1',
  },
  form: {
    paddingTop: 25,
  },
  fieldGroup: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 8,
    color: '#4a4a50',
    fontSize: 14.5,
    lineHeight: 18,
    fontWeight: '600',
  },
  input: {
    height: 48,
    paddingHorizontal: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#dedee3',
    backgroundColor: theme.colors.white,
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: '500',
  },
  passwordInputWrap: {
    height: 48,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#dedee3',
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: '500',
  },
  forgotWrap: {
    alignItems: 'flex-end',
    marginTop: -8,
  },
  forgotText: {
    color: theme.colors.purple,
    fontSize: 14.5,
    fontWeight: '700',
  },
  keepRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
    paddingTop: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.purple,
  },
  keepText: {
    color: '#4f4f55',
    fontSize: 14.3,
    fontWeight: '500',
  },
  actions: {
    gap: 14,
    paddingTop: 27,
  },
  dividerWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingTop: 23,
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
