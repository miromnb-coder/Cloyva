import Feather from '@expo/vector-icons/Feather';
import { useEffect, useState } from 'react';
import { Alert, Image, Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import { AuthButton } from '../../src/components/auth/AuthButton';
import { AuthFooter } from '../../src/components/auth/AuthFooter';
import { theme } from '../../src/constants/theme';
import { useAuth } from '../../src/context/AuthContext';
import { continueWithEmailPassword, sendMagicLink } from '../../src/services/auth';

const authEmailHero = require('../../assets/images/auth-email-hero.PNG');

export default function AuthEmailScreen() {
  const router = useRouter();
  const { session } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loadingAction, setLoadingAction] = useState<'continue' | 'magic-link' | null>(null);

  useEffect(() => {
    if (session) {
      router.replace('/feed');
    }
  }, [router, session]);

  const handleContinue = async () => {
    Keyboard.dismiss();
    setLoadingAction('continue');

    try {
      const result = await continueWithEmailPassword(email, password);

      Alert.alert(result.title, result.message);

      if (result.title !== 'Check your email') {
        router.replace('/feed');
      }
    } catch (error) {
      Alert.alert('Could not continue', error instanceof Error ? error.message : 'Please try again.');
    } finally {
      setLoadingAction(null);
    }
  };

  const handleMagicLink = async () => {
    Keyboard.dismiss();
    setLoadingAction('magic-link');

    try {
      const result = await sendMagicLink(email);
      Alert.alert(result.title, result.message);
    } catch (error) {
      Alert.alert('Could not send magic link', error instanceof Error ? error.message : 'Please try again.');
    } finally {
      setLoadingAction(null);
    }
  };

  return (
    <SafeAreaView style={styles.screen} edges={['top', 'bottom']}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.content}>
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
                onChangeText={setEmail}
                placeholder="you@example.com"
                placeholderTextColor="#74747a"
                returnKeyType="next"
                style={styles.input}
                textContentType="emailAddress"
                value={email}
              />
            </View>

            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.passwordInputWrap}>
                <TextInput
                  onChangeText={setPassword}
                  placeholder="••••••••••••"
                  placeholderTextColor="#313136"
                  returnKeyType="done"
                  secureTextEntry={!isPasswordVisible}
                  style={styles.passwordInput}
                  textContentType="password"
                  value={password}
                />
                <Pressable accessibilityLabel="Toggle password visibility" onPress={() => setIsPasswordVisible((current) => !current)}>
                  <Feather name={isPasswordVisible ? 'eye-off' : 'eye'} color="#77777c" size={21} />
                </Pressable>
              </View>
            </View>

            <Pressable onPress={handleMagicLink} style={styles.forgotWrap}>
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
            <AuthButton label="Continue" isLoading={loadingAction === 'continue'} onPress={handleContinue} />
            <AuthButton
              label="Send magic link"
              variant="secondary"
              isLoading={loadingAction === 'magic-link'}
              onPress={handleMagicLink}
              icon={<Feather name="mail" color={theme.colors.text} size={24} />}
            />
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
        </View>
      </TouchableWithoutFeedback>
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
    paddingTop: 7,
    paddingBottom: 5,
    backgroundColor: theme.colors.white,
  },
  backButton: {
    width: 38,
    height: 32,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headerCopy: {
    alignItems: 'center',
    paddingTop: 9,
    paddingBottom: 17,
  },
  title: {
    color: theme.colors.text,
    fontSize: 27,
    lineHeight: 32,
    fontWeight: '900',
    letterSpacing: -1.1,
    textAlign: 'center',
  },
  subtitle: {
    color: theme.colors.mutedText,
    fontSize: 15.4,
    lineHeight: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  heroImage: {
    width: '100%',
    height: 145,
    borderRadius: 18,
    backgroundColor: '#f4f3f1',
  },
  form: {
    paddingTop: 19,
  },
  fieldGroup: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 7,
    color: '#4a4a50',
    fontSize: 14.2,
    lineHeight: 17,
    fontWeight: '600',
  },
  input: {
    height: 45,
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
    height: 45,
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
    marginTop: -6,
  },
  forgotText: {
    color: theme.colors.purple,
    fontSize: 14.3,
    fontWeight: '700',
  },
  keepRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
    paddingTop: 16,
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
    fontSize: 14.2,
    fontWeight: '500',
  },
  actions: {
    gap: 12,
    paddingTop: 22,
  },
  dividerWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingTop: 20,
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
