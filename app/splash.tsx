import { useAuth } from '@/lib/auth/auth-context';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useMemo, useRef } from 'react';
import { Animated, Easing, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SPLASH_DURATION_MS = 3000;

export default function SplashScreen() {
  const { user, isLoading } = useAuth();
  const progress = useRef(new Animated.Value(0)).current;
  const progressWidth = useMemo(
    () =>
      progress.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '100%'],
      }),
    [progress],
  );

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const animation = Animated.timing(progress, {
      toValue: 1,
      duration: SPLASH_DURATION_MS,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    });

    animation.start(({ finished }) => {
      if (finished) {
        // If auth is still hydrating (SecureStore/session restore), wait a tick.
        if (isLoading) {
          timeoutId = setTimeout(() => {
            router.replace(user ? '/(tabs)' : '/login');
          }, 250);
          return;
        }
        router.replace(user ? '/(tabs)' : '/login');
      }
    });

    return () => {
      animation.stop();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [progress, isLoading, user]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.texture} />
      <View style={styles.content}>
        <Text style={styles.title}>PizzaMate</Text>
        <Text style={styles.tagline}>GUIDED PIZZA COOKING</Text>
        <Text style={styles.subtitle}>Make great pizza at home, step by step</Text>
        <View style={styles.heroCard}>
          <Image
            source={require('@/assets/images/splash-icon.png')}
            style={styles.heroImage}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.loader}>
        <View style={styles.progressTrack}>
          <Animated.View style={[styles.progressFill, { width: progressWidth }]} />
        </View>
        <View style={styles.loaderLabel}>
          <MaterialIcons name="restaurant" size={14} color="rgba(255,255,255,0.45)" />
          <Text style={styles.loaderText}>PREPARING KITCHEN...</Text>
        </View>
      </View>
      <View style={styles.glowLeft} />
      <View style={styles.glowRight} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121010',
    paddingHorizontal: 24,
  },
  texture: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.02)',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  title: {
    color: '#ec1313',
    fontSize: 56,
    fontWeight: '700',
    fontFamily: 'Lexend_700Bold',
    letterSpacing: -1,
    textAlign: 'center',
  },
  tagline: {
    color: '#FFD700',
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Inter_700Bold',
    letterSpacing: 1,
    textAlign: 'center',
  },
  subtitle: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Inter_400Regular',
    textAlign: 'center',
    marginTop: 4,
    maxWidth: 260,
  },
  heroCard: {
    marginTop: 24,
    width: '80%',
    maxWidth: 280,
    height: 180,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.04)',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  heroImage: {
    width: '70%',
    height: '70%',
    opacity: 0.5,
  },
  loader: {
    paddingBottom: 28,
    alignItems: 'center',
  },
  progressTrack: {
    width: '70%',
    maxWidth: 220,
    height: 6,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.12)',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 999,
    backgroundColor: '#ec1313',
  },
  loaderLabel: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  loaderText: {
    color: 'rgba(255,255,255,0.45)',
    fontSize: 11,
    letterSpacing: 2,
    fontFamily: 'Inter_500Medium',
  },
  glowLeft: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: 'rgba(236,19,19,0.15)',
    bottom: -80,
    left: -60,
    opacity: 0.6,
  },
  glowRight: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: 'rgba(255,215,0,0.08)',
    top: -60,
    right: -60,
  },
});
