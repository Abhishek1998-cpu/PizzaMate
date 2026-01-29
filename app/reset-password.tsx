import { useAuth } from '@/lib/auth/auth-context';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, Text, View } from 'react-native';
import { Button, IconButton, ProgressBar, TextInput } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// NOTE: Auth screens are intentionally English-only (not localized).

type ResetPasswordForm = {
  password: string;
  confirmPassword: string;
};

export default function ResetPasswordScreen() {
  const insets = useSafeAreaInsets();
  const { userId, secret } = useLocalSearchParams<{ userId?: string; secret?: string }>();
  const { confirmRecovery, error: authError, clearError } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordForm>({
    defaultValues: { password: '', confirmPassword: '' },
  });

  const password = watch('password');
  const strength = useMemo(() => {
    if (password.length >= 10) return { label: 'STRONG', value: 0.75 };
    if (password.length >= 6) return { label: 'MEDIUM', value: 0.5 };
    return { label: 'WEAK', value: 0.25 };
  }, [password]);

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

      <View style={styles.hero}>
        <Text style={styles.title}>New Password</Text>
        <Text style={styles.subtitle}>
          Create a new password for your account. Ensure it&apos;s secure and easy to remember.
        </Text>
        {!userId || !secret ? (
          <Text style={styles.missingTokenText}>
            This reset link is missing information. Please request a new password reset email.
          </Text>
        ) : null}
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>New Password</Text>
        <Controller
          control={control}
          name="password"
          rules={{
            required: 'Password is required',
            minLength: { value: 8, message: 'Minimum 8 characters' },
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              mode="flat"
              value={value}
              onChangeText={onChange}
              placeholder="••••••••"
              placeholderTextColor="#5b5b5b"
              style={styles.input}
              underlineColor="transparent"
              activeUnderlineColor="#f42525"
              textColor="#fff"
              secureTextEntry={!showPassword}
              cursorColor="#f42525"
              contentStyle={styles.inputText}
              right={
                <TextInput.Icon
                  icon={showPassword ? 'eye-off-outline' : 'eye-outline'}
                  color="#8a8a8a"
                  onPress={() => setShowPassword((prev) => !prev)}
                />
              }
            />
          )}
        />
        {errors.password ? <Text style={styles.errorText}>{errors.password.message}</Text> : null}

        <View style={styles.strengthHeader}>
          <Text style={styles.strengthLabel}>SECURITY STRENGTH</Text>
          <Text style={styles.strengthValue}>{strength.label}</Text>
        </View>
        <ProgressBar progress={strength.value} color="#f42525" style={styles.strengthBar} />

        <Text style={[styles.label, styles.labelSpacing]}>Confirm New Password</Text>
        <Controller
          control={control}
          name="confirmPassword"
          rules={{
            required: 'Please confirm your password',
            validate: (v) => v === watch('password') || 'Passwords do not match',
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              mode="flat"
              value={value}
              onChangeText={onChange}
              placeholder="••••••••"
              placeholderTextColor="#5b5b5b"
              style={styles.input}
              underlineColor="transparent"
              activeUnderlineColor="#f42525"
              textColor="#fff"
              secureTextEntry={!showConfirm}
              cursorColor="#f42525"
              contentStyle={styles.inputText}
              right={
                <TextInput.Icon
                  icon={showConfirm ? 'eye-off-outline' : 'eye-outline'}
                  color="#8a8a8a"
                  onPress={() => setShowConfirm((prev) => !prev)}
                />
              }
            />
          )}
        />
        {errors.confirmPassword ? (
          <Text style={styles.errorText}>{errors.confirmPassword.message}</Text>
        ) : null}
      </View>

      <View style={styles.actions}>
        <Button
          mode="contained"
          buttonColor="#f42525"
          textColor="#fff"
          style={styles.ctaButton}
          contentStyle={styles.ctaContent}
          labelStyle={styles.ctaLabel}
          uppercase
          loading={isSubmitting}
          disabled={isSubmitting || !userId || !secret}
          onPress={handleSubmit(async ({ password, confirmPassword }) => {
            if (!userId || !secret) return;
            clearError();
            await confirmRecovery(userId, secret, password, confirmPassword);
            router.replace('/login');
          })}
        >
          Update Password
        </Button>

        {authError ? <Text style={styles.errorText}>{authError}</Text> : null}

        <Text style={styles.supportText}>
          Need help? <Text style={styles.supportLink}>Contact Support</Text>
        </Text>
      </View>

      <View style={styles.homeIndicator} />
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
  hero: {
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 8,
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '700',
    fontFamily: 'Lexend_700Bold',
  },
  subtitle: {
    marginTop: 10,
    color: 'rgba(255,255,255,0.6)',
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Inter_400Regular',
  },
  missingTokenText: {
    marginTop: 12,
    color: 'rgba(255,255,255,0.75)',
    fontSize: 13,
    lineHeight: 18,
    fontFamily: 'Inter_400Regular',
  },
  form: {
    paddingHorizontal: 24,
    paddingTop: 12,
    gap: 10,
  },
  label: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
    marginBottom: 6,
  },
  labelSpacing: {
    marginTop: 10,
  },
  input: {
    backgroundColor: '#1a1a1a',
    borderRadius: 14,
    height: 54,
    borderWidth: 1,
    borderColor: '#2a2a2a',
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
  strengthHeader: {
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  strengthLabel: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 12,
    letterSpacing: 1.5,
    fontWeight: '600',
    fontFamily: 'Inter_500Medium',
  },
  strengthValue: {
    color: '#f42525',
    fontSize: 12,
    letterSpacing: 1.5,
    fontWeight: '700',
    fontFamily: 'Inter_700Bold',
  },
  strengthBar: {
    height: 6,
    borderRadius: 999,
    backgroundColor: '#2a2a2a',
  },
  actions: {
    marginTop: 'auto',
    paddingHorizontal: 24,
    paddingBottom: 24,
    gap: 16,
  },
  ctaButton: {
    borderRadius: 14,
    shadowColor: '#f42525',
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  ctaContent: {
    height: 56,
  },
  ctaLabel: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Inter_700Bold',
  },
  supportText: {
    textAlign: 'center',
    color: 'rgba(255,255,255,0.45)',
    fontSize: 13,
    fontFamily: 'Inter_400Regular',
  },
  supportLink: {
    color: '#f42525',
    fontWeight: '600',
    fontFamily: 'Inter_500Medium',
  },
  homeIndicator: {
    height: 4,
    width: 120,
    alignSelf: 'center',
    borderRadius: 999,
    backgroundColor: '#1a1a1a',
    marginBottom: 12,
  },
});
