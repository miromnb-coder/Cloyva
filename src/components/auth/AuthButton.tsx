import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { theme } from '../../constants/theme';

type AuthButtonProps = {
  label: string;
  variant?: 'primary' | 'secondary';
  icon?: ReactNode;
  onPress?: () => void;
};

export function AuthButton({ label, variant = 'primary', icon, onPress }: AuthButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        isPrimary ? styles.primaryButton : styles.secondaryButton,
        pressed && styles.pressed,
      ]}
    >
      {icon ? <View style={styles.iconWrap}>{icon}</View> : null}
      <Text style={isPrimary ? styles.primaryText : styles.secondaryText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  primaryButton: {
    backgroundColor: theme.colors.purple,
  },
  secondaryButton: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: '#dedee3',
  },
  pressed: {
    opacity: 0.84,
    transform: [{ scale: 0.995 }],
  },
  iconWrap: {
    position: 'absolute',
    left: 20,
    width: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: {
    color: theme.colors.white,
    fontSize: 15.5,
    fontWeight: '800',
    letterSpacing: -0.1,
  },
  secondaryText: {
    color: theme.colors.text,
    fontSize: 15.5,
    fontWeight: '800',
    letterSpacing: -0.1,
  },
});
