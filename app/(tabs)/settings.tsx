import { changeLanguage, i18n, type SupportedLanguage } from '@/i18n';
import { useAuth } from '@/lib/auth/auth-context';
import {
    getNotificationPermissionStatus,
    getStoredNotificationsEnabled,
    requestNotificationPermission,
    setStoredNotificationsEnabled,
} from '@/lib/notifications/notifications';
import { useThemeMode } from '@/lib/theme/theme-context';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Dialog, IconButton, Portal, RadioButton, Surface, Switch, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function SettingsScreen() {
  const insets = useSafeAreaInsets();
  const { user, signOut } = useAuth();
  const { mode, setMode } = useThemeMode();
  const [logoutOpen, setLogoutOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [isRequestingNotifications, setIsRequestingNotifications] = useState(false);
  const { t } = useTranslation();
  const { dark, colors } = useTheme();

  const bg = dark ? '#120a0a' : colors.background;
  const cardBg = dark ? '#231010' : '#ffffff';
  const border = dark ? '#3b1a1a' : 'rgba(0,0,0,0.10)';
  const text = dark ? '#fff' : '#111';
  const subText = dark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)';
  const sectionTitle = dark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.45)';

  const currentLang = (['en', 'hi', 'fr', 'es'].includes(i18n.language?.split('-')[0] ?? 'en')
    ? (i18n.language?.split('-')[0] as SupportedLanguage)
    : 'en') as SupportedLanguage;
  const currentLangLabel =
    currentLang === 'hi'
      ? t('settings.languageHindi')
      : currentLang === 'fr'
        ? t('settings.languageFrench')
        : currentLang === 'es'
          ? t('settings.languageSpanish')
          : t('settings.languageEnglish');
  const [pendingLang, setPendingLang] = useState<SupportedLanguage>(currentLang);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const stored = await getStoredNotificationsEnabled();
      const status = await getNotificationPermissionStatus();
      const enabled = stored && status === 'granted';
      if (mounted) setNotificationsEnabled(enabled);
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <View style={[styles.screen, { backgroundColor: bg }]}>
      <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
        <IconButton
          icon="arrow-left"
          iconColor="#f42525"
          size={22}
          onPress={() => router.back()}
          style={styles.backIcon}
        />
        <Text style={[styles.headerTitle, { color: text }]}>{t('settings.title')}</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Surface style={[styles.profileCard, { backgroundColor: cardBg, borderColor: border }]} elevation={0}>
          <View style={styles.profileRow}>
            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOd9DYLfUi4dXkJCMW--yu8PD4anCMKuwY6IbQi8p3dLSI_aLPMwY0Q2MUhU0qLxUUCxvqjD2alHQMBYiOt8hh1S6jlNwaG9YIK1jVyoYxwgjk8dOSHJOAsRYn0uzhXqSMZkprMrrg_eVb69SaKTA7YfCs1WjL1Flx-Ru-Sc3jDneLaScX22xP6pIz9Af4WXU_6WUPPckwiDSLlZzsTNGwC35SrvsUr0H41VmEiARY1tj9yRLtJspG2DQb6ltCRzqTV4-EREmcAry5',
              }}
              style={styles.profileAvatar}
            />
            <View style={styles.profileText}>
              <Text style={[styles.profileName, { color: text }]}>{user?.name ?? 'Pizza Lover'}</Text>
              <Text style={[styles.profileEmail, { color: dark ? 'rgba(244,37,37,0.7)' : subText }]}>
                {user?.email ?? 'Sign in to sync your profile'}
              </Text>
            </View>
          </View>
        </Surface>

        <Text style={[styles.sectionTitle, { color: sectionTitle }]}>{t('settings.generalPreferences')}</Text>
        <Surface style={[styles.sectionCard, { backgroundColor: cardBg, borderColor: border }]} elevation={0}>
          <Pressable
            style={styles.row}
            onPress={async () => {
              const status = await getNotificationPermissionStatus();
              const stored = await getStoredNotificationsEnabled();
              setNotificationsEnabled(stored && status === 'granted');
              setNotificationsOpen(true);
            }}
          >
            <View style={styles.rowLeft}>
              <View style={styles.iconBadgePrimary}>
                <MaterialIcons name="notifications" size={18} color="#fff" />
              </View>
              <Text style={[styles.rowText, { color: text }]}>{t('settings.notifications')}</Text>
            </View>
            <View style={styles.rowRight}>
              <Text style={[styles.rowValue, { color: subText }]}>
                {notificationsEnabled ? t('settings.notificationsEnabled') : t('settings.notificationsDisabled')}
              </Text>
              <MaterialIcons
                name="chevron-right"
                size={22}
                color={dark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.35)'}
              />
            </View>
          </Pressable>
          <View style={[styles.divider, { backgroundColor: border }]} />
          <Pressable
            style={styles.row}
            onPress={() => {
              setPendingLang(currentLang);
              setLanguageOpen(true);
            }}
          >
            <View style={styles.rowLeft}>
              <View style={styles.iconBadgeSoft}>
                <MaterialIcons name="language" size={18} color="#f42525" />
              </View>
              <Text style={[styles.rowText, { color: text }]}>{t('settings.language')}</Text>
            </View>
            <View style={styles.rowRight}>
              <Text style={[styles.rowValue, { color: subText }]}>{currentLangLabel}</Text>
              <MaterialIcons name="chevron-right" size={22} color={dark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.35)'} />
            </View>
          </Pressable>
          <View style={[styles.divider, { backgroundColor: border }]} />
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <View style={styles.iconBadgeSoft}>
                <MaterialIcons name="dark-mode" size={18} color="#f42525" />
              </View>
              <Text style={[styles.rowText, { color: text }]}>{t('settings.darkMode')}</Text>
            </View>
            <Switch
              value={mode === 'dark'}
              onValueChange={async (v) => {
                await setMode(v ? 'dark' : 'light');
              }}
            />
          </View>
        </Surface>

        <Text style={[styles.sectionTitle, styles.sectionSpacer, { color: sectionTitle }]}>{t('settings.appInformation')}</Text>
        <Surface style={[styles.sectionCard, { backgroundColor: cardBg, borderColor: border }]} elevation={0}>
          <Pressable style={styles.row} onPress={() => router.push('/terms-of-service')}>
            <View style={styles.rowLeft}>
              <View style={styles.iconBadgeNeutral}>
                <MaterialIcons name="description" size={18} color={dark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.45)'} />
              </View>
              <Text style={[styles.rowText, { color: text }]}>{t('settings.termsOfService')}</Text>
            </View>
            <MaterialIcons name="chevron-right" size={22} color={dark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.35)'} />
          </Pressable>
          <View style={[styles.divider, { backgroundColor: border }]} />
          <Pressable style={styles.row} onPress={() => router.push('/privacy-policy')}>
            <View style={styles.rowLeft}>
              <View style={styles.iconBadgeNeutral}>
                <MaterialIcons name="privacy-tip" size={18} color={dark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.45)'} />
              </View>
              <Text style={[styles.rowText, { color: text }]}>{t('settings.privacyPolicy')}</Text>
            </View>
            <MaterialIcons name="chevron-right" size={22} color={dark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.35)'} />
          </Pressable>
          <View style={[styles.divider, { backgroundColor: border }]} />
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <View style={styles.iconBadgeNeutral}>
                <MaterialIcons name="info" size={18} color={dark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.45)'} />
              </View>
              <Text style={[styles.rowText, { color: text }]}>{t('settings.version')}</Text>
            </View>
            <Text style={[styles.rowValue, { color: subText }]}>1.0.0</Text>
          </View>
        </Surface>

        <Pressable
          style={[styles.logoutButton, { backgroundColor: cardBg, borderColor: dark ? 'rgba(244,37,37,0.3)' : 'rgba(244,37,37,0.35)' }]}
          onPress={() => setLogoutOpen(true)}
        >
          <MaterialIcons name="logout" size={20} color="#f42525" />
          <Text style={styles.logoutText}>{t('settings.logout')}</Text>
        </Pressable>
      </ScrollView>

      <Portal>
        <Dialog visible={notificationsOpen} onDismiss={() => (isRequestingNotifications ? null : setNotificationsOpen(false))} style={styles.dialog}>
          <Dialog.Title style={styles.dialogTitle}>{t('settings.notificationsDialogTitle')}</Dialog.Title>
          <Dialog.Content>
            <Text style={styles.dialogText}>{t('settings.notificationsDialogBody')}</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              textColor={dark ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0.65)'}
              disabled={isRequestingNotifications}
              onPress={async () => {
                // "Not now" means user doesn't want in-app notifications right now,
                // even if OS permissions were previously granted.
                await setStoredNotificationsEnabled(false);
                setNotificationsEnabled(false);
                setNotificationsOpen(false);
              }}
            >
              {t('settings.notificationsNotNow')}
            </Button>
            <Button
              textColor="#f42525"
              loading={isRequestingNotifications}
              disabled={isRequestingNotifications}
              onPress={async () => {
                try {
                  setIsRequestingNotifications(true);
                  const ok = await requestNotificationPermission();
                  setNotificationsEnabled(ok);
                } finally {
                  setIsRequestingNotifications(false);
                  setNotificationsOpen(false);
                }
              }}
            >
              {t('settings.notificationsAllow')}
            </Button>
          </Dialog.Actions>
        </Dialog>

        <Dialog
          visible={languageOpen}
          onDismiss={() => setLanguageOpen(false)}
          style={styles.dialog}
        >
          <Dialog.Title style={styles.dialogTitle}>{t('settings.language')}</Dialog.Title>
          <Dialog.Content>
            <RadioButton.Group
              value={pendingLang}
              onValueChange={(v) => setPendingLang(v as SupportedLanguage)}
            >
              <View style={styles.radioRow}>
                <RadioButton value="en" color="#f42525" uncheckedColor="rgba(255,255,255,0.5)" />
                <Text style={styles.radioLabel}>{t('settings.languageEnglish')}</Text>
              </View>
              <View style={styles.radioRow}>
                <RadioButton value="hi" color="#f42525" uncheckedColor="rgba(255,255,255,0.5)" />
                <Text style={styles.radioLabel}>{t('settings.languageHindi')}</Text>
              </View>
              <View style={styles.radioRow}>
                <RadioButton value="fr" color="#f42525" uncheckedColor="rgba(255,255,255,0.5)" />
                <Text style={styles.radioLabel}>{t('settings.languageFrench')}</Text>
              </View>
              <View style={styles.radioRow}>
                <RadioButton value="es" color="#f42525" uncheckedColor="rgba(255,255,255,0.5)" />
                <Text style={styles.radioLabel}>{t('settings.languageSpanish')}</Text>
              </View>
            </RadioButton.Group>
          </Dialog.Content>
          <Dialog.Actions>
            <Button textColor="rgba(255,255,255,0.75)" onPress={() => setLanguageOpen(false)}>
              {t('common.cancel')}
            </Button>
            <Button
              textColor="#f42525"
              onPress={async () => {
                await changeLanguage(pendingLang);
                setLanguageOpen(false);
              }}
            >
              {t('common.confirm')}
            </Button>
          </Dialog.Actions>
        </Dialog>

        <Dialog
          visible={logoutOpen}
          onDismiss={() => (isLoggingOut ? null : setLogoutOpen(false))}
          style={styles.dialog}
        >
          <Dialog.Title style={styles.dialogTitle}>{t('settings.logoutTitle')}</Dialog.Title>
          <Dialog.Content>
            <Text style={styles.dialogText}>
              {t('settings.logoutBody')}
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              textColor="rgba(255,255,255,0.75)"
              disabled={isLoggingOut}
              onPress={() => setLogoutOpen(false)}
            >
              {t('common.cancel')}
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
              {t('settings.logoutConfirm')}
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
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 6,
  },
  radioLabel: {
    color: '#fff',
    fontFamily: 'Inter_500Medium',
    fontSize: 15,
  },
});
