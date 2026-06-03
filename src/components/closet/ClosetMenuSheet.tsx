import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Alert, Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { theme } from '../../constants/theme';
import { useAuth } from '../../context/AuthContext';
import { useMyProfile } from '../../hooks/useMyProfile';
import { getProfileDisplayUsername } from '../../services/profile';

const fallbackAvatarImage = 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=85';

type ClosetMenuSheetProps = {
  visible: boolean;
  onClose: () => void;
};

type MenuRowProps = {
  icon: React.ComponentProps<typeof Feather>['name'];
  label: string;
  destructive?: boolean;
  onPress?: () => void;
};

function MenuRow({ icon, label, destructive = false, onPress }: MenuRowProps) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.menuRow, pressed && styles.pressedRow]}>
      <Feather name={icon} color={destructive ? '#f04444' : theme.colors.text} size={22} />
      <Text style={destructive ? styles.destructiveLabel : styles.menuLabel}>{label}</Text>
      <Feather name="chevron-right" color={destructive ? '#f04444' : theme.colors.text} size={22} />
    </Pressable>
  );
}

export function ClosetMenuSheet({ visible, onClose }: ClosetMenuSheetProps) {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { user, signOut } = useAuth();
  const { profile } = useMyProfile();
  const avatarSource = { uri: profile?.avatar_url || fallbackAvatarImage };
  const username = getProfileDisplayUsername(profile, user?.email);

  const handleSignOut = () => {
    Alert.alert('Sign out', 'Are you sure you want to sign out of Cloyva?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Sign out',
        style: 'destructive',
        onPress: async () => {
          await signOut();
          onClose();
          router.replace('/auth');
        },
      },
    ]);
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalRoot}>
        <Pressable style={styles.backdrop} onPress={onClose} />

        <View style={[styles.sheet, { paddingBottom: Math.max(insets.bottom, 16) }]}> 
          <View style={styles.handle} />

          <View style={styles.accountRow}>
            <Image source={avatarSource} style={styles.accountAvatar} />
            <View style={styles.accountCopy}>
              <View style={styles.usernameRow}>
                <Text style={styles.username}>{username}</Text>
                {profile?.is_verified ? <Ionicons name="checkmark-circle" color={theme.colors.purple} size={16} /> : null}
              </View>
              <Text style={styles.email}>{user?.email ?? 'Not signed in'}</Text>
            </View>
          </View>

          <View style={styles.menuGroup}>
            <MenuRow icon="user" label="View profile" />
            <MenuRow icon="edit-2" label="Edit closet" />
            <MenuRow icon="bookmark" label="Saved items" />
            <MenuRow icon="shopping-bag" label="Orders & rentals" />
            <MenuRow icon="settings" label="Settings" />
            <MenuRow icon="help-circle" label="Help & support" />
          </View>

          <View style={styles.signOutGroup}>
            <MenuRow icon="log-out" label="Sign out" destructive onPress={handleSignOut} />
          </View>

          <Pressable onPress={onClose} style={styles.cancelButton}>
            <Text style={styles.cancelText}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalRoot: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.46)',
  },
  sheet: {
    paddingTop: 13,
    paddingHorizontal: 22,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    backgroundColor: theme.colors.white,
    shadowColor: '#000000',
    shadowOpacity: 0.12,
    shadowRadius: 22,
    shadowOffset: { width: 0, height: -8 },
    elevation: 18,
  },
  handle: {
    alignSelf: 'center',
    width: 54,
    height: 5,
    borderRadius: 999,
    backgroundColor: '#cfcfd4',
    marginBottom: 24,
  },
  accountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    marginBottom: 22,
  },
  accountAvatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#dddddd',
  },
  accountCopy: {
    flex: 1,
    marginLeft: 14,
  },
  usernameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  username: {
    color: theme.colors.text,
    fontSize: 22,
    lineHeight: 27,
    fontWeight: '900',
    letterSpacing: -0.65,
  },
  email: {
    marginTop: 2,
    color: theme.colors.mutedText,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '500',
  },
  menuGroup: {
    overflow: 'hidden',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#eeeeef',
    backgroundColor: theme.colors.white,
  },
  signOutGroup: {
    overflow: 'hidden',
    marginTop: 16,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#eeeeef',
    backgroundColor: theme.colors.white,
  },
  menuRow: {
    minHeight: 64,
    paddingHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e8e8eb',
  },
  pressedRow: {
    backgroundColor: '#f8f8fb',
  },
  menuLabel: {
    flex: 1,
    marginLeft: 20,
    color: theme.colors.text,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700',
    letterSpacing: -0.3,
  },
  destructiveLabel: {
    flex: 1,
    marginLeft: 20,
    color: '#f04444',
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700',
    letterSpacing: -0.3,
  },
  cancelButton: {
    alignSelf: 'center',
    paddingTop: 20,
    paddingBottom: 2,
    paddingHorizontal: 18,
  },
  cancelText: {
    color: '#7e7e84',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
  },
});
