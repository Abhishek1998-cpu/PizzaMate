import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, IconButton, TextInput, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type TermsSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  note?: string;
};

const LAST_UPDATED = '1 / 01 / 2026';
const SUPPORT_CONTACT_LABEL = 'Contact Play Store Support';

const TERMS_SECTIONS: TermsSection[] = [
  {
    id: 'intro',
    title: '1. Introduction',
    paragraphs: [
      "Welcome to PizzaMate. PizzaMate is a guided pizza cooking app that helps you discover recipes and follow step-by-step cooking guidance.",
      'By accessing or using the app, you agree to these Terms of Service. If you do not agree, please do not use the app.',
      'PizzaMate does not offer food ordering, delivery tracking, or payment processing inside the app.',
    ],
  },
  {
    id: 'accounts',
    title: '2. Accounts & Access',
    paragraphs: [
      'You may need to create an account to access certain features (such as saving preferences or syncing across devices).',
      'You are responsible for maintaining the confidentiality of your credentials and for all activity under your account. If you believe your account has been compromised, contact us.',
    ],
    note: 'Note: Users must be at least 13 years of age to create an account. Users under 18 must have parental consent.',
  },
  {
    id: 'recipes',
    title: '3. Recipes & Guidance (Disclaimer)',
    paragraphs: [
      'Recipes, timers, checklists, and cooking guidance in PizzaMate are provided for general informational purposes only.',
      'Cooking results depend on many factors (ingredients, equipment, heat levels, technique). We do not guarantee specific outcomes.',
      'PizzaMate is not a professional culinary, safety, medical, or dietary service. Always use your own judgment.',
    ],
  },
  {
    id: 'safety',
    title: '4. Kitchen Safety & Allergens',
    paragraphs: [
      'You are responsible for safe food handling and safe use of kitchen equipment (ovens, stovetops, knives, hot surfaces, etc.).',
      'If you have allergies or dietary restrictions, always verify ingredient labels and cross-contamination risk. Diet tags (e.g., veg/non-veg) are best-effort and may not fit every definition.',
    ],
    bullets: [
      'Follow local food safety guidelines and cook foods to safe temperatures.',
      'Keep children and pets away from hot surfaces and sharp tools.',
      'If you are unsure, consult a qualified professional.',
    ],
  },
  {
    id: 'privacy',
    title: '5. Privacy, Third‑Party Services & Changes',
    paragraphs: [
      'Your privacy is important to us. The app may store preferences (such as language and theme) on your device and may use third-party services to provide authentication and app functionality.',
      'We may update the app and these Terms from time to time. Continued use of the app after changes means you accept the updated Terms.',
      'If you have questions, contact us at the email below.',
    ],
  },
];

export default function TermsOfServiceScreen() {
  const insets = useSafeAreaInsets();
  const { dark, colors } = useTheme();
  const [query, setQuery] = useState('');

  const filteredSections = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return TERMS_SECTIONS;
    return TERMS_SECTIONS.filter((s) => {
      const hay = [
        s.title,
        ...s.paragraphs,
        ...(s.bullets ?? []),
        s.note ?? '',
      ]
        .join(' ')
        .toLowerCase();
      return hay.includes(q);
    });
  }, [query]);

  const bg = dark ? '#221010' : colors.background;
  const text = dark ? '#fff' : '#111';
  const subText = dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.60)';
  const border = dark ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.10)';
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
          { paddingTop: insets.top + 10, paddingBottom: 10, borderBottomColor: border },
        ]}
      >
        <IconButton
          icon="chevron-left"
          iconColor="#ec1313"
          size={26}
          onPress={() => router.back()}
          style={styles.backIcon}
        />
        <Text style={[styles.headerTitle, { color: text }]}>Terms of Service</Text>
        <View style={styles.headerRightSpacer} />
      </View>

      <ScrollView contentContainerStyle={[styles.content, { paddingBottom: 140 + bottomSafePad }]}>
        {/* Metadata */}
        <View style={styles.meta}>
          <Text style={styles.metaLabel}>LEGAL DOCUMENT</Text>
          <Text style={[styles.metaValue, { color: subText }]}>
            Effective Date: {LAST_UPDATED}
          </Text>
          <View style={[styles.metaDivider, { backgroundColor: border }]} />
        </View>

        {/* Search */}
        <View style={styles.searchWrap}>
          <TextInput
            mode="outlined"
            value={query}
            onChangeText={setQuery}
            placeholder="Search terms..."
            placeholderTextColor={dark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)'}
            outlineColor={dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.10)'}
            activeOutlineColor="#ec1313"
            textColor={text}
            cursorColor="#ec1313"
            style={[styles.searchInput, { backgroundColor: cardBg }]}
            left={<TextInput.Icon icon="magnify" color={dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.45)'} />}
            right={
              query ? (
                <TextInput.Icon
                  icon="close"
                  color={dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.45)'}
                  onPress={() => setQuery('')}
                />
              ) : null
            }
          />
        </View>

        {/* Sections */}
        {filteredSections.map((section) => (
          <View key={section.id} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {section.paragraphs.map((p, idx) => (
              <Text key={`${section.id}-p-${idx}`} style={[styles.paragraph, { color: dark ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.75)' }]}>
                {p}
              </Text>
            ))}

            {section.note ? (
              <View style={[styles.noteCard, { backgroundColor: dark ? 'rgba(236,19,19,0.10)' : 'rgba(236,19,19,0.06)', borderLeftColor: '#ec1313' }]}>
                <Text style={[styles.noteText, { color: dark ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0.70)' }]}>
                  {section.note}
                </Text>
              </View>
            ) : null}

            {section.bullets?.length ? (
              <View style={styles.bullets}>
                {section.bullets.map((b, idx) => (
                  <View key={`${section.id}-b-${idx}`} style={styles.bulletRow}>
                    <MaterialIcons name="check-circle" size={18} color="#ec1313" style={styles.bulletIcon} />
                    <Text style={[styles.bulletText, { color: dark ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.75)' }]}>{b}</Text>
                  </View>
                ))}
              </View>
            ) : null}
          </View>
        ))}

        {/* Footer contact */}
        <View style={styles.contactWrap}>
          <View style={[styles.contactCard, { backgroundColor: cardBg, borderColor: border }]}>
            <Text style={[styles.contactTitle, { color: text }]}>Have questions?</Text>
            <Text style={[styles.contactBody, { color: subText }]}>
              Contact Play Store Support if you have any questions regarding these terms.
            </Text>
            <Text style={styles.contactEmail}>{SUPPORT_CONTACT_LABEL}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Sticky bottom action */}
      <View
        style={[
          styles.bottomBar,
          {
            paddingBottom: bottomSafePad,
            backgroundColor: dark ? 'rgba(34,16,16,0.90)' : 'rgba(255,255,255,0.92)',
            borderTopColor: border,
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
  content: {
    paddingTop: 10,
  },
  meta: {
    paddingHorizontal: 16,
    paddingTop: 6,
  },
  metaLabel: {
    color: '#ec1313',
    opacity: 0.85,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.6,
    fontFamily: 'Inter_700Bold',
  },
  metaValue: {
    marginTop: 6,
    fontSize: 13,
    fontFamily: 'Inter_400Regular',
  },
  metaDivider: {
    height: 1,
    marginTop: 14,
  },
  searchWrap: {
    paddingHorizontal: 16,
    marginTop: 14,
  },
  searchInput: {
    borderRadius: 14,
  },
  section: {
    marginTop: 10,
  },
  sectionTitle: {
    color: '#ec1313',
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Lexend_700Bold',
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 6,
  },
  paragraph: {
    paddingHorizontal: 16,
    paddingTop: 6,
    fontSize: 14,
    lineHeight: 22,
    fontFamily: 'Inter_400Regular',
  },
  noteCard: {
    marginHorizontal: 16,
    marginTop: 12,
    padding: 14,
    borderRadius: 14,
    borderLeftWidth: 4,
  },
  noteText: {
    fontSize: 13,
    lineHeight: 20,
    fontStyle: 'italic',
    fontFamily: 'Inter_400Regular',
  },
  bullets: {
    paddingHorizontal: 16,
    paddingTop: 10,
    gap: 10,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  bulletIcon: {
    marginTop: 1,
  },
  bulletText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 18,
    fontFamily: 'Inter_400Regular',
  },
  contactWrap: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 18,
  },
  contactCard: {
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    alignItems: 'center',
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Lexend_700Bold',
  },
  contactBody: {
    marginTop: 6,
    fontSize: 13,
    lineHeight: 18,
    fontFamily: 'Inter_400Regular',
    textAlign: 'center',
  },
  contactEmail: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '700',
    color: '#ec1313',
    fontFamily: 'Inter_700Bold',
  },
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 16,
    paddingTop: 12,
    borderTopWidth: 1,
  },
  bottomButton: {
    borderRadius: 16,
  },
  bottomButtonContent: {
    height: 54,
  },
  bottomButtonLabel: {
    fontSize: 15,
    fontWeight: '800',
    fontFamily: 'Inter_700Bold',
  },
});

