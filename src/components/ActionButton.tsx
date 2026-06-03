import Feather from '@expo/vector-icons/Feather';
import type { ComponentProps } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { theme } from '../constants/theme';

type FeatherIconName = ComponentProps<typeof Feather>['name'];

type ActionButtonProps = {
  icon: FeatherIconName;
  label: string;
  variant: 'purple' | 'black' | 'white';
};

export function ActionButton({ icon, label, variant }: ActionButtonProps) {
  const isWhite = variant === 'white';

  return (
    <Pressable style={[styles.button, styles[variant]]}>
      <Feather name={icon} color={isWhite ? theme.colors.text : theme.colors.white} size={15} />
      <Text style={[styles.label, isWhite && styles.darkLabel]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 46,
    borderRadius: 13,
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  purple: {
    backgroundColor: theme.colors.purple,
  },
  black: {
    backgroundColor: theme.colors.black,
  },
  white: {
    backgroundColor: theme.colors.white,
  },
  label: {
    color: theme.colors.white,
    fontSize: 12.5,
    fontWeight: '800',
    letterSpacing: -0.12,
  },
  darkLabel: {
    color: theme.colors.text,
  },
});
