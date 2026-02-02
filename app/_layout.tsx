import {
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
} from '@expo-google-fonts/inter';
import {
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_700Bold,
} from '@expo-google-fonts/lexend';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { MD3DarkTheme, MD3LightTheme, PaperProvider, configureFonts } from 'react-native-paper';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { initI18n } from '@/i18n';
import { AuthProvider } from '@/lib/auth/auth-context';
import { ThemeModeProvider, useThemeMode } from '@/lib/theme/theme-context';
import { getStoredThemeMode, type ThemeMode } from '@/lib/theme/theme-mode';

export const unstable_settings = {
  anchor: '(tabs)',
};

function AppShell() {
  const segments = useSegments();
  const { mode } = useThemeMode();

  // Auth (unauthenticated) routes are always dark-mode.
  const isAuthRoute =
    segments[0] === 'login' ||
    segments[0] === 'register' ||
    segments[0] === 'forgot-password' ||
    segments[0] === 'reset-password' ||
    segments[0] === 'verify-email' ||
    segments[0] === 'splash';

  const effectiveScheme: 'dark' | 'light' = isAuthRoute ? 'dark' : mode;
  const paperTheme =
    effectiveScheme === 'dark'
      ? {
          ...MD3DarkTheme,
          colors: {
            ...MD3DarkTheme.colors,
            primary: '#ec1313',
            background: '#121212',
            surface: '#1e1e1e',
            onSurface: '#ffffff',
          },
          fonts: configureFonts({
            config: {
              displaySmall: { fontFamily: 'Lexend_400Regular', fontWeight: '400' },
              displayMedium: { fontFamily: 'Lexend_500Medium', fontWeight: '500' },
              displayLarge: { fontFamily: 'Lexend_700Bold', fontWeight: '700' },
              headlineSmall: { fontFamily: 'Lexend_400Regular', fontWeight: '400' },
              headlineMedium: { fontFamily: 'Lexend_500Medium', fontWeight: '500' },
              headlineLarge: { fontFamily: 'Lexend_700Bold', fontWeight: '700' },
              titleSmall: { fontFamily: 'Inter_500Medium', fontWeight: '500' },
              titleMedium: { fontFamily: 'Inter_500Medium', fontWeight: '500' },
              titleLarge: { fontFamily: 'Inter_700Bold', fontWeight: '700' },
              labelSmall: { fontFamily: 'Inter_500Medium', fontWeight: '500' },
              labelMedium: { fontFamily: 'Inter_500Medium', fontWeight: '500' },
              labelLarge: { fontFamily: 'Inter_700Bold', fontWeight: '700' },
              bodySmall: { fontFamily: 'Inter_400Regular', fontWeight: '400' },
              bodyMedium: { fontFamily: 'Inter_400Regular', fontWeight: '400' },
              bodyLarge: { fontFamily: 'Inter_400Regular', fontWeight: '400' },
            },
          }),
        }
      : {
          ...MD3LightTheme,
          colors: {
            ...MD3LightTheme.colors,
            primary: '#ec1313',
            background: '#ffffff',
            surface: '#f4f4f4',
            onSurface: '#1a1a1a',
          },
          fonts: configureFonts({
            config: {
              displaySmall: { fontFamily: 'Lexend_400Regular', fontWeight: '400' },
              displayMedium: { fontFamily: 'Lexend_500Medium', fontWeight: '500' },
              displayLarge: { fontFamily: 'Lexend_700Bold', fontWeight: '700' },
              headlineSmall: { fontFamily: 'Lexend_400Regular', fontWeight: '400' },
              headlineMedium: { fontFamily: 'Lexend_500Medium', fontWeight: '500' },
              headlineLarge: { fontFamily: 'Lexend_700Bold', fontWeight: '700' },
              titleSmall: { fontFamily: 'Inter_500Medium', fontWeight: '500' },
              titleMedium: { fontFamily: 'Inter_500Medium', fontWeight: '500' },
              titleLarge: { fontFamily: 'Inter_700Bold', fontWeight: '700' },
              labelSmall: { fontFamily: 'Inter_500Medium', fontWeight: '500' },
              labelMedium: { fontFamily: 'Inter_500Medium', fontWeight: '500' },
              labelLarge: { fontFamily: 'Inter_700Bold', fontWeight: '700' },
              bodySmall: { fontFamily: 'Inter_400Regular', fontWeight: '400' },
              bodyMedium: { fontFamily: 'Inter_400Regular', fontWeight: '400' },
              bodyLarge: { fontFamily: 'Inter_400Regular', fontWeight: '400' },
            },
          }),
        };

  return (
    <PaperProvider theme={paperTheme}>
      <ThemeProvider value={effectiveScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <AuthProvider>
          <Stack
            initialRouteName="splash"
            screenOptions={{
              // Global navigation feel: fade transitions everywhere (stack pushes/replaces).
              animation: 'fade',
              headerShown: false,
            }}
          >
            <Stack.Screen name="splash" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="recipe/[id]" options={{ headerShown: false }} />
            <Stack.Screen name="prep-checklist" options={{ headerShown: false }} />
            <Stack.Screen name="cooking-guide" options={{ headerShown: false }} />
            <Stack.Screen name="cooking-complete" options={{ headerShown: false }} />
            <Stack.Screen name="help-me-choose" options={{ headerShown: false }} />
            <Stack.Screen name="help-me-choose/stepper" options={{ headerShown: false }} />
            <Stack.Screen name="help-me-choose/results" options={{ headerShown: false }} />
            <Stack.Screen name="coming-soon" options={{ headerShown: false }} />
            <Stack.Screen name="terms-of-service" options={{ headerShown: false }} />
            <Stack.Screen name="privacy-policy" options={{ headerShown: false }} />
            <Stack.Screen name="login" options={{ headerShown: false }} />
            <Stack.Screen name="register" options={{ headerShown: false }} />
            <Stack.Screen name="forgot-password" options={{ headerShown: false }} />
            <Stack.Screen name="reset-password" options={{ headerShown: false }} />
            <Stack.Screen name="verify-email" options={{ headerShown: false }} />
            <Stack.Screen name="profile" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
          </Stack>
        </AuthProvider>
        <StatusBar style="auto" />
      </ThemeProvider>
    </PaperProvider>
  );
}

export default function RootLayout() {
  const [i18nReady, setI18nReady] = useState(false);
  const [themeReady, setThemeReady] = useState(false);
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_700Bold,
  });

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        await initI18n();
      } finally {
        if (mounted) setI18nReady(true);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const stored = await getStoredThemeMode();
        if (mounted && stored) setThemeMode(stored);
        // If not set, default to dark (matches existing UI).
        if (mounted) setThemeReady(true);
      } catch {
        if (mounted) setThemeReady(true);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  if (!fontsLoaded || !i18nReady || !themeReady) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeModeProvider initialMode={themeMode}>
        <AppShell />
      </ThemeModeProvider>
    </SafeAreaProvider>
  );
}
