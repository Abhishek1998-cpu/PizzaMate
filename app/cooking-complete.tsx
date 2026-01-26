import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button, IconButton } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CookingCompleteScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <View style={[styles.header, { paddingTop: insets.top + 12 }]}>
        <IconButton
          icon="arrow-left"
          iconColor="#f4c025"
          size={22}
          onPress={() => router.back()}
          style={styles.backIcon}
        />
        <Text style={styles.headerTitle}>PizzaMate</Text>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.body}>
        <Text style={styles.title}>Pizza Ready!</Text>
        <View style={styles.heroWrap}>
          <View style={styles.glow} />
          <View style={styles.imageRing}>
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvB-88fUPLBOgxcXH6WOuPBqcQkDRuzcAzmSejJgk9LCFCtfzN04fquSo8ReAFH7oKVa6UBYovQ0qlIIJItgHwIQEEWqBgnufOX7Xp5t5GvdqstlD5jcoz1zaSzkEODM2i2S_lYDhGVcKunska5UlCxiw4-m746_TZKNB0t-KProm5C1BhXy9EY6P5VQ3sTNkXVw4OmcSKI_1HrziRHbXz_t0z71dK43maufxuAysgYMy5fzUnKdL57K5p3R6OaZYCsJlGLf5GuEQb",
              }}
              style={styles.heroImage}
            />
          </View>
        </View>
        <Text style={styles.subtitle}>
          You’ve got this 🍕.{"\n"}Enjoy your homemade masterpiece!
        </Text>
      </View>

      <View
        style={[
          styles.actions,
          { paddingBottom: Math.max(insets.bottom + 20, 32) },
        ]}
      >
        <Button
          mode="contained"
          buttonColor="#f4c025"
          textColor="#221e10"
          icon={({ size, color }) => (
            <MaterialIcons name="share" size={size} color={color} />
          )}
          contentStyle={styles.primaryContent}
          labelStyle={styles.primaryLabel}
          style={styles.primaryButton}
          uppercase
        >
          Share My Pizza
        </Button>
        <Button
          mode="contained-tonal"
          buttonColor="rgba(255,255,255,0.12)"
          textColor="#fff"
          contentStyle={styles.secondaryContent}
          labelStyle={styles.secondaryLabel}
          style={styles.secondaryButton}
          uppercase
          onPress={() => {
            console.log("Back to Home clicked");
            router.replace("/(tabs)");
          }}
        >
          Back to Home
        </Button>
      </View>

      <LinearGradient
        pointerEvents="none"
        colors={["rgba(244,192,37,0)", "rgba(244,192,37,0.12)"]}
        style={styles.bottomGlow}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#221e10",
  },
  header: {
    paddingHorizontal: 12,
    paddingBottom: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  backIcon: {
    margin: 0,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Lexend_700Bold",
  },
  headerSpacer: {
    width: 64,
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  title: {
    color: "#f4c025",
    fontSize: 40,
    fontWeight: "800",
    fontFamily: "Lexend_700Bold",
    textAlign: "center",
    marginBottom: 16,
  },
  heroWrap: {
    marginVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  glow: {
    position: "absolute",
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: "rgba(244,192,37,0.2)",
    shadowColor: "#f4c025",
    shadowOpacity: 0.35,
    shadowRadius: 30,
  },
  imageRing: {
    width: 240,
    height: 240,
    borderRadius: 120,
    borderWidth: 4,
    borderColor: "rgba(244,192,37,0.3)",
    overflow: "hidden",
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  subtitle: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Inter_500Medium",
    textAlign: "center",
    marginTop: 12,
    lineHeight: 26,
  },
  actions: {
    paddingHorizontal: 20,
    gap: 12,
  },
  primaryButton: {
    borderRadius: 16,
  },
  primaryContent: {
    height: 56,
  },
  primaryLabel: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Inter_700Bold",
    letterSpacing: 0.5,
  },
  secondaryButton: {
    borderRadius: 16,
  },
  secondaryContent: {
    height: 56,
  },
  secondaryLabel: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Inter_700Bold",
    letterSpacing: 0.5,
  },
  bottomGlow: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "35%",
  },
});
