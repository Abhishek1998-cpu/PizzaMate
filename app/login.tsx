import { useAuth } from "@/lib/auth/auth-context";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
    ImageBackground,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// NOTE: Auth screens are intentionally English-only (not localized).

type LoginFormValues = {
  email: string;
  password: string;
};

export default function LoginScreen() {
  const insets = useSafeAreaInsets();
  const [showPassword, setShowPassword] = useState(false);
  const { user, isLoading, signIn, error: authError, clearError } = useAuth();

  useEffect(() => {
    if (!isLoading && user) {
      router.replace("/(tabs)");
    }
  }, [isLoading, user]);
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    defaultValues: { email: "", password: "" },
  });

  return (
    <LinearGradient colors={["#121212", "#121212"]} style={styles.screen}>
      <KeyboardAvoidingView
        style={styles.screen}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={[
            styles.scrollContent,
            { paddingBottom: Math.max(insets.bottom + 32, 32) },
          ]}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <ImageBackground
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlJAamDbwLPhCMpdG2e0uoGcYVOkjuzh_9Cze9x_MaAkdgp0ny-QaeRFSGRErfi2XyKMyAktBaPgJW-_6uzmi48aa7eZOIsOhXqpiDzKQaK73N0up3Z72I3q3TFPSxb4U-RzH_Uce5i9zhnZsBS5wp9sAFFicALWwqlqfbcvD8ACPeMnu31aOW1NL1bB1OZcCehsrpmTaGXRMbD4NQRvvoWXSJLhsoFvz7QwcpbgWx31bjA2pPQAYHIIFBaY7NcUmTvt503zjEciCR",
            }}
            style={[styles.hero, { paddingTop: insets.top + 16 }]}
          >
            <View style={styles.heroOverlay} />
            {/* Smoothly blend hero image into the screen background */}
            <LinearGradient
              pointerEvents="none"
              colors={["rgba(18,18,18,0)", "#121212"]}
              style={styles.heroFade}
            />
            <View style={styles.heroContent}>
              <View style={styles.logoBadge}>
                <MaterialIcons name="local-pizza" size={32} color="#fff" />
              </View>
              <Text style={styles.brand}>PizzaMate</Text>
            </View>
          </ImageBackground>

          <View style={styles.welcome}>
            <Text style={styles.welcomeTitle}>Welcome Back</Text>
            <Text style={styles.welcomeSubtitle}>
              Let&apos;s get cooking the perfect pie
            </Text>
          </View>

          <View style={styles.form}>
            <Text style={styles.label}>Email Address</Text>
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
                  placeholder="your@email.com"
                  placeholderTextColor="#7c7c7c"
                  style={styles.input}
                  underlineColor="transparent"
                  activeUnderlineColor="transparent"
                  textColor="#fff"
                  cursorColor="#f42525"
                  contentStyle={styles.inputText}
                  left={<TextInput.Icon icon="email-outline" color="#7c7c7c" />}
                  returnKeyType="next"
                />
              )}
            />
            {errors.email ? (
              <Text style={styles.errorText}>{errors.email.message}</Text>
            ) : null}

            <Text style={[styles.label, styles.labelSpacing]}>Password</Text>
            <Controller
              control={control}
              name="password"
              rules={{
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  mode="flat"
                  value={value}
                  onChangeText={onChange}
                  placeholder="••••••••"
                  placeholderTextColor="#7c7c7c"
                  style={styles.input}
                  underlineColor="transparent"
                  activeUnderlineColor="transparent"
                  textColor="#fff"
                  cursorColor="#f42525"
                  contentStyle={styles.inputText}
                  secureTextEntry={!showPassword}
                  left={<TextInput.Icon icon="lock-outline" color="#7c7c7c" />}
                  right={
                    <TextInput.Icon
                      icon={showPassword ? "eye-off-outline" : "eye-outline"}
                      color="#7c7c7c"
                      onPress={() => setShowPassword((prev) => !prev)}
                    />
                  }
                  returnKeyType="done"
                />
              )}
            />
            {errors.password ? (
              <Text style={styles.errorText}>{errors.password.message}</Text>
            ) : null}

            <Pressable
              style={styles.forgotRow}
              onPress={() => router.push("/forgot-password")}
            >
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </Pressable>

            <Button
              mode="contained"
              buttonColor="#f42525"
              textColor="#fff"
              style={styles.signInButton}
              contentStyle={styles.signInContent}
              labelStyle={styles.signInLabel}
              uppercase
              loading={isSubmitting}
              disabled={isSubmitting}
              onPress={() => {
                Keyboard.dismiss();
                handleSubmit(async ({ email, password }) => {
                  clearError();
                  await signIn(email, password);
                  router.replace("/(tabs)");
                })();
              }}
            >
              Sign In
            </Button>

            {authError ? <Text style={styles.errorText}>{authError}</Text> : null}
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Don&apos;t have an account?{" "}
              <Text
                style={styles.footerLink}
                onPress={() => router.push("/register")}
              >
                Create an account
              </Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  hero: {
    height: 220,
    justifyContent: "flex-end",
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(18,18,18,0.85)",
  },
  heroFade: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 80,
  },
  heroContent: {
    alignItems: "center",
    gap: 8,
  },
  logoBadge: {
    width: 56,
    height: 56,
    borderRadius: 14,
    backgroundColor: "#f42525",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#f42525",
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  brand: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
    fontFamily: "Lexend_700Bold",
  },
  welcome: {
    paddingHorizontal: 24,
    paddingTop: 24,
    alignItems: "center",
  },
  welcomeTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Lexend_700Bold",
  },
  welcomeSubtitle: {
    marginTop: 6,
    color: "rgba(255,255,255,0.6)",
    fontSize: 14,
    fontFamily: "Inter_400Regular",
  },
  form: {
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  label: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 14,
    fontFamily: "Inter_500Medium",
    marginBottom: 8,
  },
  labelSpacing: {
    marginTop: 16,
  },
  input: {
    backgroundColor: "#2a2a2a",
    borderRadius: 14,
    height: 54,
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
  forgotRow: {
    alignItems: "flex-end",
    marginTop: 10,
  },
  forgotText: {
    color: "#FFD700",
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Inter_500Medium",
  },
  signInButton: {
    marginTop: 24,
    borderRadius: 14,
    shadowColor: "#f42525",
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  signInContent: {
    height: 56,
  },
  signInLabel: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Inter_700Bold",
  },
  footer: {
    marginTop: "auto",
    paddingBottom: 32,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  footerText: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 13,
    fontFamily: "Inter_400Regular",
  },
  footerLink: {
    color: "#f42525",
    fontWeight: "700",
    fontFamily: "Inter_700Bold",
  },
});
