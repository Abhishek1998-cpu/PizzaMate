// NOTE: Auth screens are intentionally English-only (not localized).
import { MaterialIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator, Button, IconButton } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAuth } from '@/lib/auth/auth-context';

export default function VerifyEmailScreen() {
  const insets = useSafeAreaInsets();
  const { userId, secret } = useLocalSearchParams<{ userId?: string; secret?: string }>();
  const { confirmVerification, error: authError, clearError } = useAuth();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const missing = useMemo(() => !userId || !secret, [userId, secret]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (missing) {
        setStatus('error');
        return;
      }
      try {
        clearError();
        setStatus('loading');
        await confirmVerification(userId!, secret!);
        if (!mounted) return;
        setStatus('success');
      } catch {
        if (!mounted) return;
        setStatus('error');
      }
    })();
    return () => {
      mounted = false;
    };
  }, [clearError, confirmVerification, missing, secret, userId]);

  return (
    <View style={[styles.screen, { paddingTop: insets.top + 8 }]}>
      <View style={styles.header}>
        <IconButton
          icon="arrow-left"
          iconColor="#fff"
          size={22}
          onPress={() => router.replace('/login')}
          style={styles.backIcon}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.iconWrap}>
          <MaterialIcons name="verified" size={44} color="#f42525" />
        </View>

        <Text style={styles.title}>Verify Email</Text>

        {status === 'loading' ? (
          <>
            <Text style={styles.subtitle}>Confirming your email…</Text>
            <ActivityIndicator style={{ marginTop: 16 }} color="#f42525" />
          </>
        ) : status === 'success' ? (
          <>
            <Text style={styles.subtitle}>Your email has been verified successfully.</Text>
            <Button
              mode="contained"
              buttonColor="#f42525"
              textColor="#fff"
              style={styles.ctaButton}
              contentStyle={styles.ctaContent}
              labelStyle={styles.ctaLabel}
              uppercase
              onPress={() => router.replace('/login')}
            >
              Continue to Sign In
            </Button>
          </>
        ) : (
          <>
            <Text style={styles.subtitle}>
              {missing
                ? 'This verification link is missing information. Please request a new verification email.'
                : 'We could not verify your email. Please try again or request a new verification email.'}
            </Text>
            {authError ? <Text style={styles.errorText}>{authError}</Text> : null}
            <Button
              mode="contained"
              buttonColor="#f42525"
              textColor="#fff"
              style={styles.ctaButton}
              contentStyle={styles.ctaContent}
              labelStyle={styles.ctaLabel}
              uppercase
              onPress={() => router.replace('/login')}
            >
              Back to Sign In
            </Button>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    paddingHorizontal: 16,
  },
  header: {
    paddingBottom: 8,
  },
  backIcon: {
    margin: 0,
  },
  content: {
    paddingHorizontal: 8,
    paddingTop: 24,
    alignItems: 'center',
  },
  iconWrap: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: 'rgba(244,37,37,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 20,
    fontSize: 32,
    fontWeight: '700',
    fontFamily: 'Lexend_700Bold',
    color: '#fff',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 20,
    color: 'rgba(255,255,255,0.7)',
    fontFamily: 'Inter_400Regular',
    textAlign: 'center',
    maxWidth: 320,
  },
  errorText: {
    color: '#f42525',
    fontSize: 12,
    fontFamily: 'Inter_500Medium',
    marginTop: 10,
    textAlign: 'center',
    maxWidth: 320,
  },
  ctaButton: {
    marginTop: 22,
    borderRadius: 14,
    shadowColor: '#f42525',
    shadowOpacity: 0.3,
    shadowRadius: 12,
    width: '100%',
    maxWidth: 320,
  },
  ctaContent: {
    height: 56,
  },
  ctaLabel: {
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'Inter_700Bold',
  },
});

