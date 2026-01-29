import { useAuth } from "@/lib/auth/auth-context";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Button, Dialog, IconButton, Portal, TextInput } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// NOTE: Auth screens are intentionally English-only (not localized).

type RegisterFormValues = {
  fullName: string;
  email: string;
  password: string;
};

export default function RegisterScreen() {
  const insets = useSafeAreaInsets();
  const [showPassword, setShowPassword] = useState(false);
  const { signUp, error: authError, clearError } = useAuth();
  const [verifyOpen, setVerifyOpen] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState<string | null>(null);
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
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
        <View style={styles.headerLogo}>
          <MaterialIcons name="local-pizza" size={18} color="#fff" />
        </View>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.hero}>
        <Text style={styles.title}>Join PizzaMate</Text>
        <Text style={styles.subtitle}>
          Start your journey to becoming a master pizzaiolo.
        </Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Full Name</Text>
        <Controller
          control={control}
          name="fullName"
          rules={{ required: "Full name is required" }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              mode="flat"
              value={value}
              onChangeText={onChange}
              placeholder="Gino Sorbillo"
              placeholderTextColor="rgba(203,144,144,0.6)"
              style={styles.input}
              underlineColor="transparent"
              activeUnderlineColor="#f42525"
              textColor="#fff"
              cursorColor="#f42525"
              contentStyle={styles.inputText}
            />
          )}
        />
        {errors.fullName ? (
          <Text style={styles.errorText}>{errors.fullName.message}</Text>
        ) : null}

        <Text style={[styles.label, styles.labelSpacing]}>Email</Text>
        <Controller
          control={control}
          name="email"
          rules={{
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Enter a valid email",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              mode="flat"
              value={value}
              onChangeText={onChange}
              placeholder="chef@pizzamate.com"
              placeholderTextColor="rgba(203,144,144,0.6)"
              style={styles.input}
              underlineColor="transparent"
              activeUnderlineColor="#f42525"
              textColor="#fff"
              cursorColor="#f42525"
              keyboardType="email-address"
              autoCapitalize="none"
              contentStyle={styles.inputText}
            />
          )}
        />
        {errors.email ? (
          <Text style={styles.errorText}>{errors.email.message}</Text>
        ) : null}

        <Text style={[styles.label, styles.labelSpacing]}>Create Password</Text>
        <Controller
          control={control}
          name="password"
          rules={{
            required: "Password is required",
            minLength: { value: 8, message: "Minimum 8 characters" },
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              mode="flat"
              value={value}
              onChangeText={onChange}
              placeholder="At least 8 characters"
              placeholderTextColor="rgba(203,144,144,0.6)"
              style={styles.input}
              underlineColor="transparent"
              activeUnderlineColor="#f42525"
              textColor="#fff"
              cursorColor="#f42525"
              secureTextEntry={!showPassword}
              contentStyle={styles.inputText}
              right={
                <TextInput.Icon
                  icon={showPassword ? "eye-off-outline" : "eye-outline"}
                  color="rgba(203,144,144,0.7)"
                  onPress={() => setShowPassword((prev) => !prev)}
                />
              }
            />
          )}
        />
        {errors.password ? (
          <Text style={styles.errorText}>{errors.password.message}</Text>
        ) : null}
      </View>

      <View style={styles.actions}>
        <Button
          mode="contained"
          buttonColor="#f42525"
          textColor="#fff"
          style={styles.signUpButton}
          contentStyle={styles.signUpContent}
          labelStyle={styles.signUpLabel}
          uppercase
          loading={isSubmitting}
          disabled={isSubmitting}
          onPress={handleSubmit(async ({ fullName, email, password }) => {
            clearError();
            await signUp(fullName, email, password);
            setVerifyEmail(email);
            setVerifyOpen(true);
          })}
        >
          Sign Up
        </Button>

        {authError ? <Text style={styles.errorText}>{authError}</Text> : null}

        <Pressable onPress={() => router.replace("/login")}>
          <Text style={styles.loginText}>
            Already have an account?{" "}
            <Text style={styles.loginLink}>Log In</Text>
          </Text>
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerNote}>
          By signing up, you agree to cook great pizza and adhere to the secret
          techniques shared within this community.
        </Text>
      </View>

      <LinearGradient
        pointerEvents="none"
        colors={["rgba(34,16,16,0)", "rgba(244,37,37,0.10)"]}
        style={styles.bottomGlow}
      />

      <Portal>
        <Dialog visible={verifyOpen} onDismiss={() => setVerifyOpen(false)} style={styles.dialog}>
          <Dialog.Title style={styles.dialogTitle}>Verify your email</Dialog.Title>
          <Dialog.Content>
            <Text style={styles.dialogBody}>
              We sent a verification link{verifyEmail ? ` to ${verifyEmail}` : ""}. Please verify your email before
              signing in.
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              textColor="rgba(255,255,255,0.75)"
              onPress={() => {
                setVerifyOpen(false);
                router.replace("/login");
              }}
            >
              OK
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#221010",
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backIcon: {
    margin: 0,
  },
  headerLogo: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#f42525",
    alignItems: "center",
    justifyContent: "center",
  },
  headerSpacer: {
    width: 40,
  },
  hero: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 12,
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "700",
    fontFamily: "Lexend_700Bold",
    textAlign: "center",
  },
  subtitle: {
    marginTop: 8,
    color: "#cb9090",
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    textAlign: "center",
  },
  form: {
    paddingHorizontal: 20,
    paddingTop: 18,
    gap: 10,
    alignSelf: "center",
    width: "100%",
    maxWidth: 420,
  },
  label: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Inter_500Medium",
    marginBottom: 6,
  },
  labelSpacing: {
    marginTop: 12,
  },
  input: {
    backgroundColor: "#341818",
    borderRadius: 14,
    height: 54,
    borderWidth: 1,
    borderColor: "#683131",
  },
  inputText: {
    fontFamily: "Inter_400Regular",
  },
  errorText: {
    color: "#f42525",
    fontSize: 12,
    fontFamily: "Inter_500Medium",
    marginTop: 6,
  },
  actions: {
    paddingHorizontal: 20,
    paddingTop: 18,
    gap: 12,
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
    maxWidth: 420,
  },
  signUpButton: {
    width: "100%",
    borderRadius: 14,
  },
  signUpContent: {
    height: 56,
  },
  signUpLabel: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter_700Bold",
  },
  loginText: {
    color: "#cb9090",
    fontSize: 13,
    fontFamily: "Inter_400Regular",
  },
  loginLink: {
    color: "#fff",
    fontWeight: "700",
    fontFamily: "Inter_700Bold",
  },
  footer: {
    marginTop: "auto",
    paddingHorizontal: 24,
    paddingBottom: 12,
  },
  footerNote: {
    color: "rgba(203,144,144,0.6)",
    fontSize: 11,
    lineHeight: 16,
    textAlign: "center",
    fontFamily: "Inter_400Regular",
  },
  bottomGlow: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
  },
  dialog: {
    backgroundColor: "#1e1e1e",
    borderRadius: 14,
  },
  dialogTitle: {
    color: "#fff",
    fontFamily: "Lexend_700Bold",
    fontSize: 22,
  },
  dialogBody: {
    color: "rgba(255,255,255,0.75)",
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 20,
  },
});
