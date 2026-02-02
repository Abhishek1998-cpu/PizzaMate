import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, IconButton, Surface, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type RightsCard = {
  id: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  title: string;
  description: string;
};

const EFFECTIVE_DATE = '1 / 01 / 2026';
const H_PADDING = 24;

const RIGHTS: RightsCard[] = [
  {
    id: 'access',
    icon: 'visibility',
    title: 'Right to Access',
    description: 'Request a copy of the personal data we hold about you.',
  },
  {
    id: 'erasure',
    icon: 'delete',
    title: 'Right to Erasure',
    description: 'Request that we delete your personal information from our systems.',
  },
  {
    id: 'rectification',
    icon: 'edit-note',
    title: 'Right to Rectification',
    description: 'Request corrections to any inaccurate or incomplete personal data.',
  },
];

export default function PrivacyPolicyScreen() {
  const insets = useSafeAreaInsets();
  const { dark, colors } = useTheme();

  const bg = dark ? '#121212' : colors.background;
  const text = dark ? '#fff' : '#111';
  const subText = dark ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.60)';
  const divider = dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)';
  const cardBg = dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)';
  // Some Android devices report insets.bottom as 0 even with a visible nav bar.
  // Keep a safe minimum so the CTA never looks stuck to the bottom.
  const bottomSafePad = Math.max(insets.bottom + 16, 40);

  return (
    <View style={[styles.screen, { backgroundColor: bg }]}>
      {/* Header */}
      <View
        style={[
          styles.header,
          { paddingTop: insets.top + 10, paddingBottom: 10, borderBottomColor: divider },
        ]}
      >
        <IconButton
          icon="chevron-left"
          iconColor="#ec1313"
          size={26}
          onPress={() => router.back()}
          style={styles.backIcon}
        />
        <Text style={[styles.headerTitle, { color: text }]}>Privacy Policy</Text>
        <View style={styles.headerRightSpacer} />
      </View>

      <ScrollView contentContainerStyle={[styles.content, { paddingBottom: 140 + bottomSafePad }]}>
        {/* Headline */}
        <View style={[styles.headline, { paddingHorizontal: H_PADDING }]}>
          <Text style={[styles.h1, { color: text }]}>Privacy Policy</Text>
          <Text style={[styles.effectiveDate, { color: subText }]}>Effective Date: {EFFECTIVE_DATE}</Text>
        </View>

        <View style={[styles.intro, { paddingHorizontal: H_PADDING }]}>
          <Text style={[styles.body, { color: dark ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0.75)' }]}>
            Welcome to PizzaMate. We value your privacy and are committed to protecting your personal data. This policy explains what we collect, how we use it, and the choices you have when using our mobile application.
          </Text>
        </View>

        {/* 1. Data Collection */}
        <View style={[styles.section, { borderTopColor: divider }]}>
          <Text style={[styles.sectionTitle, { color: text, paddingHorizontal: H_PADDING }]}>1. Data Collection</Text>
          <Text style={[styles.body, { color: dark ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0.75)', paddingHorizontal: H_PADDING }]}>
            PizzaMate may collect the following information, depending on how you use the app:
          </Text>

          <View style={[styles.bullets, { paddingHorizontal: H_PADDING }]}>
            <Text style={[styles.bullet, { color: dark ? 'rgba(255,255,255,0.78)' : 'rgba(0,0,0,0.75)' }]}>
              • <Text style={styles.bulletStrong}>Account info:</Text> name and email address (when you sign up / sign in).
            </Text>
            <Text style={[styles.bullet, { color: dark ? 'rgba(255,255,255,0.78)' : 'rgba(0,0,0,0.75)' }]}>
              • <Text style={styles.bulletStrong}>Preferences:</Text> language and theme choice stored on your device.
            </Text>
            <Text style={[styles.bullet, { color: dark ? 'rgba(255,255,255,0.78)' : 'rgba(0,0,0,0.75)' }]}>
              • <Text style={styles.bulletStrong}>App usage data:</Text> basic diagnostics to keep the app reliable (e.g., crash logs).
            </Text>
          </View>
        </View>

        {/* 2. How we use data */}
        <View style={[styles.section, { borderTopColor: divider }]}>
          <Text style={[styles.sectionTitle, { color: text, paddingHorizontal: H_PADDING }]}>2. How We Use Your Data</Text>
          <Text style={[styles.body, { color: dark ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0.75)', paddingHorizontal: H_PADDING }]}>
            We use the information we collect to provide core app functionality (authentication, saving preferences), improve the cooking experience, and support the app (security, debugging, performance).
          </Text>
        </View>

        {/* 3. Your rights */}
        <View style={[styles.section, { borderTopColor: divider }]}>
          <Text style={[styles.sectionTitle, { color: text, paddingHorizontal: H_PADDING }]}>3. Your Rights</Text>
          <Text style={[styles.body, { color: dark ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0.75)', paddingHorizontal: H_PADDING }]}>
            Depending on your location, you may have rights regarding your personal information:
          </Text>

          <View style={[styles.rightsGrid, { paddingHorizontal: H_PADDING }]}>
            {RIGHTS.map((r) => (
              <Surface
                key={r.id}
                style={[styles.rightCard, { backgroundColor: cardBg, borderColor: 'rgba(236,19,19,0.20)' }]}
                elevation={0}
              >
                <View style={styles.rightHeader}>
                  <MaterialIcons name={r.icon} size={18} color="#ec1313" />
                  <Text style={[styles.rightTitle, { color: text }]}>{r.title}</Text>
                </View>
                <Text style={[styles.rightDesc, { color: subText }]}>{r.description}</Text>
              </Surface>
            ))}
          </View>
        </View>

        {/* 4. Third‑party sharing */}
        <View style={[styles.section, { borderTopColor: divider }]}>
          <Text style={[styles.sectionTitle, { color: text, paddingHorizontal: H_PADDING }]}>4. Third‑Party Services</Text>
          <Text style={[styles.body, { color: dark ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0.75)', paddingHorizontal: H_PADDING }]}>
            PizzaMate may rely on third‑party services to function (for example, authentication). We do not sell your personal data to advertisers.
          </Text>
        </View>

        {/* 5. Contact */}
        <View style={[styles.section, { borderTopColor: divider }]}>
          <Text style={[styles.sectionTitle, { color: text, paddingHorizontal: H_PADDING }]}>5. Contact Us</Text>
          <Text style={[styles.body, { color: dark ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0.75)', paddingHorizontal: H_PADDING }]}>
            If you have questions about this Privacy Policy or our data practices, please contact Play Store Support.
          </Text>
          <Button
            mode="contained"
            buttonColor="#ec1313"
            textColor="#fff"
            icon="email"
            style={[styles.contactButton, { marginHorizontal: H_PADDING }]}
            contentStyle={styles.contactButtonContent}
            labelStyle={styles.contactButtonLabel}
            onPress={() => {}}
          >
            Contact Play Store Support
          </Button>
        </View>

        <View style={[styles.footerNote, { paddingHorizontal: H_PADDING }]}>
          <Text style={[styles.footerText, { color: dark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.35)' }]}>
            © 2026 PizzaMate. All rights reserved.
          </Text>
        </View>
      </ScrollView>

      {/* Bottom sticky acknowledge */}
      <View
        style={[
          styles.bottomBar,
          {
            paddingBottom: bottomSafePad,
            borderTopColor: divider,
            backgroundColor: dark ? 'rgba(18,18,18,0.92)' : 'rgba(255,255,255,0.92)',
          },
        ]}
      >
        <Button
          mode="contained"
          buttonColor="#ec1313"
          textColor="#fff"
          style={styles.bottomButton}
          contentStyle={styles.bottomButtonContent}
          labelStyle={styles.bottomButtonLabel}
          onPress={() => router.back()}
        >
          I Understand
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  header: {
    minHeight: 56,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  backIcon: { margin: 0 },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Lexend_700Bold',
    marginRight: 38,
  },
  headerRightSpacer: { width: 38 },
  content: { paddingTop: 10 },
  headline: { paddingTop: 14 },
  h1: {
    fontSize: 30,
    fontWeight: '800',
    fontFamily: 'Lexend_700Bold',
    letterSpacing: -0.5,
  },
  effectiveDate: {
    marginTop: 8,
    fontSize: 13,
    fontFamily: 'Inter_500Medium',
  },
  intro: { paddingTop: 18 },
  body: {
    fontSize: 14,
    lineHeight: 22,
    fontFamily: 'Inter_400Regular',
  },
  section: {
    marginTop: 20,
    paddingTop: 18,
    borderTopWidth: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    fontFamily: 'Lexend_700Bold',
    marginBottom: 8,
  },
  bullets: { marginTop: 10, gap: 8 },
  bullet: {
    fontSize: 13,
    lineHeight: 20,
    fontFamily: 'Inter_400Regular',
  },
  bulletStrong: {
    fontFamily: 'Inter_700Bold',
    fontWeight: '700',
  },
  rightsGrid: { marginTop: 12, gap: 12 },
  rightCard: {
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
  },
  rightHeader: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 6 },
  rightTitle: { fontFamily: 'Inter_700Bold', fontWeight: '800', fontSize: 14 },
  rightDesc: { fontFamily: 'Inter_400Regular', fontSize: 13, lineHeight: 18 },
  contactButton: {
    marginTop: 14,
    borderRadius: 999,
    alignSelf: 'flex-start',
  },
  contactButtonContent: { height: 44, paddingHorizontal: 14 },
  contactButtonLabel: { fontFamily: 'Inter_700Bold', fontWeight: '800' },
  footerNote: { paddingVertical: 18, alignItems: 'center' },
  footerText: { fontFamily: 'Inter_400Regular', fontSize: 11, textAlign: 'center' },
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 24,
    paddingTop: 12,
    borderTopWidth: 1,
  },
  bottomButton: { borderRadius: 16 },
  bottomButtonContent: { height: 54 },
  bottomButtonLabel: { fontFamily: 'Inter_700Bold', fontWeight: '800', fontSize: 14 },
});

