import { StyleSheet, Text, View } from 'react-native';

import { theme } from '../../constants/theme';

export function AuthFooter() {
  return (
    <View style={styles.footer}>
      <Text style={styles.termsText}>
        By continuing, you agree to Cloyva&apos;s <Text style={styles.linkText}>Terms of Service</Text>
      </Text>
      <Text style={styles.termsText}>
        and acknowledge our <Text style={styles.linkText}>Privacy Policy.</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 6,
  },
  termsText: {
    color: '#77777c',
    fontSize: 11.2,
    lineHeight: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
  linkText: {
    color: theme.colors.purple,
    fontWeight: '600',
  },
});
