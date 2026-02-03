import { MaterialIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, IconButton, Surface, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Params = {
  feature?: 'create' | 'fix';
};

export default function ComingSoonScreen() {
  const insets = useSafeAreaInsets();
  const { dark, colors } = useTheme();
  const { feature } = useLocalSearchParams<Params>();

  const bg = dark ? '#121212' : colors.background;
  const text = dark ? '#fff' : '#111';
  const subText = dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.65)';
  const cardBg = dark ? '#1c1c1c' : '#ffffff';
  const cardBorder = dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const cardBodyColor = dark ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0.75)';
  const cardAccentColor = dark ? '#fff' : '#111';
  const badgeBg = dark ? 'rgba(236,19,19,0.18)' : 'rgba(236,19,19,0.12)';
  const badgeBorder = dark ? 'rgba(236,19,19,0.35)' : 'rgba(236,19,19,0.4)';

  const copy = useMemo(() => {
    if (feature === 'fix') {
      return {
        title: 'Fix My Pizza',
        subtitle:
          'We’re building a smart troubleshooter for dough, crust, sauce, and heat issues.',
        icon: 'build' as const,
      };
    }
    return {
      title: 'Create My Pizza',
      subtitle:
        'We’re building a full “build your own pizza” flow with custom dough, sauce, toppings, and steps.',
      icon: 'add-circle' as const,
    };
  }, [feature]);

  return (
    <View style={[styles.screen, { backgroundColor: bg }]}>
      <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
        <IconButton
          icon="arrow-left"
          iconColor={text}
          size={22}
          onPress={() => router.back()}
          style={styles.backIcon}
        />
        <Text style={[styles.headerTitle, { color: text }]}>Coming Soon</Text>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.content}>
        <View style={[styles.badgeWrap, { backgroundColor: badgeBg, borderColor: badgeBorder }]}>
          <View style={styles.badgeIcon}>
            <MaterialIcons name={copy.icon} size={22} color="#fff" />
          </View>
          <Text style={[styles.badgeText, { color: text }]}>COMING SOON</Text>
        </View>

        <Text style={[styles.title, { color: text }]}>{copy.title}</Text>
        <Text style={[styles.subtitle, { color: subText }]}>{copy.subtitle}</Text>

        <Surface style={[styles.card, { backgroundColor: cardBg, borderColor: cardBorder }]} elevation={0}>
          <Text style={styles.cardTitle}>For now</Text>
          <Text style={[styles.cardBody, { color: cardBodyColor }]}>
            Use <Text style={[styles.cardAccent, { color: cardAccentColor }]}>Choose a Pizza</Text> and{' '}
            <Text style={[styles.cardAccent, { color: cardAccentColor }]}>Help Me Choose</Text> — we’ll unlock this feature once
            we see great feedback.
          </Text>
        </Surface>
      </View>

      <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom + 16, 24) }]}>
        <Button
          mode="contained"
          buttonColor="#ec1313"
          textColor="#fff"
          style={styles.primaryButton}
          contentStyle={styles.primaryButtonContent}
          labelStyle={styles.primaryButtonLabel}
          uppercase
          onPress={() => router.replace('/(tabs)')}
        >
          Back to Home
        </Button>
      </View>

      <View style={styles.glow} pointerEvents="none" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
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
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Lexend_700Bold',
  },
  headerSpacer: {
    width: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    alignItems: 'center',
  },
  badgeWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
  },
  badgeIcon: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: '#ec1313',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
    fontFamily: 'Inter_700Bold',
  },
  title: {
    marginTop: 18,
    fontSize: 34,
    fontWeight: '800',
    fontFamily: 'Lexend_700Bold',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 22,
    fontFamily: 'Inter_400Regular',
    textAlign: 'center',
    maxWidth: 320,
  },
  card: {
    marginTop: 24,
    width: '100%',
    maxWidth: 420,
    borderRadius: 18,
    borderWidth: 1,
    padding: 16,
  },
  cardTitle: {
    color: '#f4c025',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
    fontFamily: 'Inter_700Bold',
    textTransform: 'uppercase',
  },
  cardBody: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 22,
    fontFamily: 'Inter_400Regular',
  },
  cardAccent: {
    fontFamily: 'Inter_700Bold',
  },
  footer: {
    paddingHorizontal: 24,
    paddingTop: 12,
  },
  primaryButton: {
    borderRadius: 14,
  },
  primaryButtonContent: {
    height: 56,
  },
  primaryButtonLabel: {
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 1,
    fontFamily: 'Inter_700Bold',
  },
  glow: {
    position: 'absolute',
    bottom: -160,
    right: -120,
    width: 340,
    height: 340,
    borderRadius: 170,
    backgroundColor: 'rgba(236,19,19,0.14)',
  },
});

