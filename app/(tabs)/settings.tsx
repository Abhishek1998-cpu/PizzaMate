import { useAuth } from '@/lib/auth/auth-context';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Dialog, IconButton, Portal, Surface, Switch } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function SettingsScreen() {
  const insets = useSafeAreaInsets();
  const { user, signOut } = useAuth();
  const [logoutOpen, setLogoutOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  return (
    <View style={styles.screen}>
      <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
        <IconButton
          icon="arrow-left"
          iconColor="#f42525"
          size={22}
          onPress={() => router.back()}
          style={styles.backIcon}
        />
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Surface style={styles.profileCard} elevation={0}>
          <View style={styles.profileRow}>
            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOd9DYLfUi4dXkJCMW--yu8PD4anCMKuwY6IbQi8p3dLSI_aLPMwY0Q2MUhU0qLxUUCxvqjD2alHQMBYiOt8hh1S6jlNwaG9YIK1jVyoYxwgjk8dOSHJOAsRYn0uzhXqSMZkprMrrg_eVb69SaKTA7YfCs1WjL1Flx-Ru-Sc3jDneLaScX22xP6pIz9Af4WXU_6WUPPckwiDSLlZzsTNGwC35SrvsUr0H41VmEiARY1tj9yRLtJspG2DQb6ltCRzqTV4-EREmcAry5',
              }}
              style={styles.profileAvatar}
            />
            <View style={styles.profileText}>
              <Text style={styles.profileName}>{user?.name ?? 'Pizza Lover'}</Text>
              <Text style={styles.profileEmail}>{user?.email ?? 'Sign in to sync your profile'}</Text>
            </View>
          </View>
        </Surface>

        <Text style={styles.sectionTitle}>GENERAL PREFERENCES</Text>
        <Surface style={styles.sectionCard} elevation={0}>
          <Pressable style={styles.row}>
            <View style={styles.rowLeft}>
              <View style={styles.iconBadgePrimary}>
                <MaterialIcons name="notifications" size={18} color="#fff" />
              </View>
              <Text style={styles.rowText}>Notifications</Text>
            </View>
            <MaterialIcons name="chevron-right" size={22} color="rgba(255,255,255,0.4)" />
          </Pressable>
          <View style={styles.divider} />
          <Pressable style={styles.row}>
            <View style={styles.rowLeft}>
              <View style={styles.iconBadgeSoft}>
                <MaterialIcons name="language" size={18} color="#f42525" />
              </View>
              <Text style={styles.rowText}>Language</Text>
            </View>
            <View style={styles.rowRight}>
              <Text style={styles.rowValue}>English</Text>
              <MaterialIcons name="chevron-right" size={22} color="rgba(255,255,255,0.4)" />
            </View>
          </Pressable>
          <View style={styles.divider} />
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <View style={styles.iconBadgeSoft}>
                <MaterialIcons name="dark-mode" size={18} color="#f42525" />
              </View>
              <Text style={styles.rowText}>Dark Mode</Text>
            </View>
            <Switch value />
          </View>
        </Surface>

        <Text style={[styles.sectionTitle, styles.sectionSpacer]}>APP INFORMATION</Text>
        <Surface style={styles.sectionCard} elevation={0}>
          <Pressable style={styles.row}>
            <View style={styles.rowLeft}>
              <View style={styles.iconBadgeNeutral}>
                <MaterialIcons name="description" size={18} color="rgba(255,255,255,0.6)" />
              </View>
              <Text style={styles.rowText}>Terms of Service</Text>
            </View>
            <MaterialIcons name="chevron-right" size={22} color="rgba(255,255,255,0.4)" />
          </Pressable>
          <View style={styles.divider} />
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <View style={styles.iconBadgeNeutral}>
                <MaterialIcons name="info" size={18} color="rgba(255,255,255,0.6)" />
              </View>
              <Text style={styles.rowText}>Version</Text>
            </View>
            <Text style={styles.rowValue}>1.0.0</Text>
          </View>
        </Surface>

        <Pressable
          style={styles.logoutButton}
          onPress={() => setLogoutOpen(true)}
        >
          <MaterialIcons name="logout" size={20} color="#f42525" />
          <Text style={styles.logoutText}>Log Out</Text>
        </Pressable>
      </ScrollView>

      <Portal>
        <Dialog
          visible={logoutOpen}
          onDismiss={() => (isLoggingOut ? null : setLogoutOpen(false))}
          style={styles.dialog}
        >
          <Dialog.Title style={styles.dialogTitle}>Log out?</Dialog.Title>
          <Dialog.Content>
            <Text style={styles.dialogText}>
              Are you sure you want to log out from PizzaMate?
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              textColor="rgba(255,255,255,0.75)"
              disabled={isLoggingOut}
              onPress={() => setLogoutOpen(false)}
            >
              Cancel
            </Button>
            <Button
              textColor="#f42525"
              loading={isLoggingOut}
              disabled={isLoggingOut}
              onPress={async () => {
                try {
                  setIsLoggingOut(true);
                  try {
                    await signOut();
                  } catch {
                    // Even if remote logout fails (e.g., user is a guest), still route to login.
                  }
                  setLogoutOpen(false);
                  router.replace('/login');
                } finally {
                  setIsLoggingOut(false);
                }
              }}
            >
              Log out
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#120a0a',
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    margin: 0,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Lexend_700Bold',
  },
  headerSpacer: {
    width: 40,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  profileCard: {
    marginTop: 12,
    backgroundColor: '#231010',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#3b1a1a',
    padding: 16,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  profileAvatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 4,
    borderColor: 'rgba(244,37,37,0.2)',
  },
  profileText: {
    flex: 1,
  },
  profileName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Lexend_700Bold',
  },
  profileEmail: {
    marginTop: 4,
    color: 'rgba(244,37,37,0.7)',
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
  },
  sectionTitle: {
    marginTop: 22,
    marginBottom: 10,
    color: 'rgba(255,255,255,0.35)',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
    fontFamily: 'Inter_700Bold',
  },
  sectionSpacer: {
    marginTop: 28,
  },
  sectionCard: {
    backgroundColor: '#231010',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#3b1a1a',
    overflow: 'hidden',
  },
  row: {
    minHeight: 56,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  rowText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Inter_500Medium',
  },
  rowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rowValue: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
  },
  iconBadgePrimary: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: '#f42525',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBadgeSoft: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: 'rgba(244,37,37,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBadgeNeutral: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.08)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#3b1a1a',
  },
  logoutButton: {
    marginTop: 28,
    borderRadius: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: 'rgba(244,37,37,0.3)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: '#231010',
  },
  logoutText: {
    color: '#f42525',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Inter_700Bold',
  },
  dialog: {
    backgroundColor: '#1b1111',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    borderRadius: 18,
  },
  dialogTitle: {
    color: '#fff',
    fontFamily: 'Lexend_700Bold',
  },
  dialogText: {
    color: 'rgba(255,255,255,0.7)',
    fontFamily: 'Inter_400Regular',
    lineHeight: 20,
  },
});
