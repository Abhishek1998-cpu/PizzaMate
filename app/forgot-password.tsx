import { useAuth } from '@/lib/auth/auth-context';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Button, IconButton, TextInput } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type ForgotPasswordForm = {
  email: string;
};

export default function ForgotPasswordScreen() {
  const insets = useSafeAreaInsets();
  const { sendRecovery, error: authError, clearError } = useAuth();
  const [sent, setSent] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordForm>({
    defaultValues: { email: '' },
  });

  return (
    <View style={styles.screen}>
      <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
        <IconButton
          icon="arrow-left"
          iconColor="#fff"
          size={22}
          onPress={() => router.back()}
          style={styles.backIcon}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.iconWrap}>
          <MaterialIcons name="lock-reset" size={44} color="#f42525" />
        </View>

        <Text style={styles.title}>Forgot Password?</Text>
        <Text style={styles.subtitle}>
          Enter your email and we’ll send you a link to reset it.
        </Text>

        <Text style={styles.label}>Email Address</Text>
        <Controller
          control={control}
          name="email"
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Enter a valid email',
            },
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              mode="flat"
              value={value}
              onChangeText={onChange}
              placeholder="e.g. pizzalover@example.com"
              placeholderTextColor="rgba(255,255,255,0.3)"
              style={styles.input}
              underlineColor="transparent"
              activeUnderlineColor="#f42525"
              textColor="#fff"
              keyboardType="email-address"
              autoCapitalize="none"
              cursorColor="#f42525"
              contentStyle={styles.inputText}
            />
          )}
        />
        {errors.email ? <Text style={styles.errorText}>{errors.email.message}</Text> : null}

        <Button
          mode="contained"
          buttonColor="#f42525"
          textColor="#fff"
          style={styles.ctaButton}
          contentStyle={styles.ctaContent}
          labelStyle={styles.ctaLabel}
          uppercase
          loading={isSubmitting}
          disabled={isSubmitting}
          onPress={handleSubmit(async ({ email }) => {
            clearError();
            setSent(false);
            await sendRecovery(email);
            setSent(true);
          })}
        >
          Send Reset Link
        </Button>

        {sent ? (
          <Text style={styles.successText}>
            Reset link sent. Please check your email (and spam folder).
          </Text>
        ) : null}

        {authError ? <Text style={styles.errorText}>{authError}</Text> : null}

        <Pressable style={styles.backLink} onPress={() => router.replace('/login')}>
          <MaterialIcons name="chevron-left" size={18} color="rgba(255,255,255,0.5)" />
          <Text style={styles.backText}>Back to Sign In</Text>
        </Pressable>
      </View>

      <View style={styles.bottomGlow} pointerEvents="none" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  header: {
    paddingHorizontal: 16,
  },
  backIcon: {
    margin: 0,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  iconWrap: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: 'rgba(244,37,37,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
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
    marginTop: 8,
    fontSize: 14,
    lineHeight: 20,
    color: 'rgba(255,255,255,0.7)',
    fontFamily: 'Inter_400Regular',
    textAlign: 'center',
  },
  label: {
    marginTop: 24,
    marginBottom: 8,
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
    color: 'rgba(255,255,255,0.9)',
  },
  input: {
    backgroundColor: '#1a1a1a',
    borderRadius: 14,
    height: 54,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  inputText: {
    fontFamily: 'Inter_400Regular',
  },
  errorText: {
    color: '#f42525',
    fontSize: 12,
    fontFamily: 'Inter_500Medium',
    marginTop: 8,
  },
  successText: {
    marginTop: 12,
    color: 'rgba(255,255,255,0.7)',
    fontSize: 13,
    lineHeight: 18,
    fontFamily: 'Inter_400Regular',
    textAlign: 'center',
  },
  ctaButton: {
    marginTop: 20,
    borderRadius: 14,
    shadowColor: '#f42525',
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  ctaContent: {
    height: 56,
  },
  ctaLabel: {
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'Inter_700Bold',
  },
  backLink: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  backText: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 13,
    fontFamily: 'Inter_500Medium',
  },
  bottomGlow: {
    position: 'absolute',
    bottom: -120,
    right: -120,
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: 'rgba(244,37,37,0.12)',
  },
});
