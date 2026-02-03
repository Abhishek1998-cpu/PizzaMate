import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, IconButton, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HelpMeChooseIntro() {
  const insets = useSafeAreaInsets();
  const { dark, colors } = useTheme();

  const bg = dark ? '#121212' : colors.background;
  const text = dark ? '#fff' : '#111';
  const subText = dark ? '#FFD700' : 'rgba(0,0,0,0.7)';
  const mutedText = dark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.5)';
  const backIconBg = dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';

  return (
    <View style={[styles.screen, { backgroundColor: bg }]}>
      <View style={[styles.header, { paddingTop: insets.top + 12 }]}>
        <IconButton
          icon="arrow-left"
          iconColor={text}
          size={22}
          onPress={() => router.back()}
          style={[styles.backIcon, { backgroundColor: backIconBg }]}
        />
        <View style={styles.headerIcon}>
          <MaterialIcons name="local-pizza" size={18} color="#f42525" />
        </View>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.content}>
        <View style={styles.heroWrap}>
          <View style={styles.heroGlow} />
          <View style={styles.heroCircle}>
            <MaterialIcons name="restaurant-menu" size={72} color="#fff" />
          </View>
        </View>

        <Text style={[styles.title, { color: text }]}>
          Let’s find the <Text style={styles.titleAccent}>right</Text> pizza for you
        </Text>
        <Text style={[styles.subtitle, { color: subText }]}>
          Answer a few quick questions and we’ll suggest pizzas you can make confidently.
        </Text>
      </View>

      <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom + 16, 24) }]}>
        <Button
          mode="contained"
          buttonColor="#f42525"
          textColor="#fff"
          contentStyle={styles.ctaContent}
          labelStyle={styles.ctaLabel}
          style={styles.ctaButton}
          uppercase
          onPress={() => router.push('/help-me-choose/stepper')}>
          Start
        </Button>
        <Text style={[styles.footerNote, { color: mutedText }]}>Takes less than 1 minute</Text>
      </View>

      <View style={styles.glowRight} pointerEvents="none" />
      <View style={styles.glowLeft} pointerEvents="none" />
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
    justifyContent: 'space-between',
  },
  backIcon: {
    margin: 0,
  },
  headerIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(244,37,37,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerSpacer: {
    width: 40,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 18,
  },
  heroWrap: {
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroGlow: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: 'rgba(244,37,37,0.18)',
    shadowColor: '#f42525',
    shadowOpacity: 0.35,
    shadowRadius: 30,
  },
  heroCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f42525',
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    fontFamily: 'Lexend_700Bold',
    textAlign: 'center',
    lineHeight: 42,
  },
  titleAccent: {
    color: '#f42525',
    fontStyle: 'italic',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Inter_500Medium',
    textAlign: 'center',
    lineHeight: 26,
    maxWidth: 280,
  },
  footer: {
    paddingHorizontal: 24,
    gap: 10,
  },
  ctaButton: {
    borderRadius: 999,
  },
  ctaContent: {
    height: 56,
  },
  ctaLabel: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Inter_700Bold',
  },
  footerNote: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontFamily: 'Inter_700Bold',
  },
  glowRight: {
    position: 'absolute',
    bottom: -80,
    right: -80,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: 'rgba(244,37,37,0.12)',
    blurRadius: 40,
  },
  glowLeft: {
    position: 'absolute',
    top: -80,
    left: -80,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: 'rgba(255,215,0,0.08)',
    blurRadius: 40,
  },
});
