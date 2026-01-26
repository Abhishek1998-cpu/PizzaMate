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
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { MD3DarkTheme, MD3LightTheme, PaperProvider, configureFonts } from 'react-native-paper';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { AuthProvider } from '@/lib/auth/auth-context';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_700Bold,
  });
  const paperTheme =
    colorScheme === 'dark'
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

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <PaperProvider theme={paperTheme}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <AuthProvider>
            <Stack initialRouteName="splash">
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
              <Stack.Screen name="login" options={{ headerShown: false }} />
              <Stack.Screen name="register" options={{ headerShown: false }} />
              <Stack.Screen name="forgot-password" options={{ headerShown: false }} />
              <Stack.Screen name="reset-password" options={{ headerShown: false }} />
              <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
            </Stack>
          </AuthProvider>
          <StatusBar style="auto" />
        </ThemeProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
