import { homeCards as cards } from "@/data/ui-constants";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Button, useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();
  const { dark, colors } = useTheme();

  const bg = dark ? "#121212" : colors.background;
  const text = dark ? "#fff" : "#111";
  const muted = dark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.60)";
  const cardBg = dark ? "#1e1e1e" : "#ffffff";
  const cardBorder = dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.08)";
  const profileBg = dark ? "#232323" : "rgba(0,0,0,0.04)";
  const imgWrapBg = dark ? "#2a2a2a" : "rgba(0,0,0,0.04)";

  const cardKeyForTitle = (title: string) => {
    if (title === "Choose a Pizza") return "choose";
    if (title === "Help Me Choose") return "help";
    if (title === "Create My Pizza") return "create";
    if (title === "Fix My Pizza") return "fix";
    return null;
  };

  return (
    <View style={[styles.screen, { backgroundColor: bg }]}>
      <StatusBar barStyle={dark ? "light-content" : "dark-content"} />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.header, { paddingTop: insets.top + 16 }]}>
          <View style={styles.brandIcon}>
            <MaterialIcons name="local-pizza" size={22} color="#fff" />
          </View>
          <Text style={[styles.brandTitle, { color: text }]}>PizzaMate</Text>
          <View
            style={[styles.profileButton, { backgroundColor: profileBg }]}
            accessibilityRole="button"
            accessibilityLabel="Open Settings"
            onTouchEnd={() => router.push("/(tabs)/settings")}
          >
            <MaterialIcons
              name="person"
              size={20}
              color={dark ? "#fff" : "rgba(0,0,0,0.65)"}
            />
          </View>
        </View>

        <View style={styles.headline}>
          <Text style={[styles.headlinePrimary, { color: text }]}>{t("home.greetingPrimary")}</Text>
          <Text style={styles.headlineAccent}>{t("home.greetingAccent")}</Text>
        </View>

        <View style={styles.cardStack}>
          {cards.map((card) => (
            <View key={card.title} style={[styles.card, { backgroundColor: cardBg, borderColor: cardBorder }]}>
              {card.comingSoon ? (
                <View style={styles.comingSoonCornerPill} pointerEvents="none">
                  <Text style={styles.comingSoonText}>{t("common.comingSoon")}</Text>
                </View>
              ) : null}
              <View style={styles.cardContent}>
                <View style={styles.cardText}>
                  <View style={styles.cardTitleRow}>
                    <View style={styles.cardTitleLeft}>
                      <MaterialIcons
                        name={card.icon as any}
                        size={20}
                        color="#ec1313"
                      />
                      <Text style={[styles.cardTitle, { color: text }]}>
                        {(() => {
                          const k = cardKeyForTitle(card.title);
                          return k ? t(`home.cards.${k}.title`) : card.title;
                        })()}
                      </Text>
                    </View>
                  </View>
                  <Text style={[styles.cardSubtitle, { color: muted }]}>
                    {(() => {
                      const k = cardKeyForTitle(card.title);
                      return k ? t(`home.cards.${k}.description`) : card.description;
                    })()}
                  </Text>
                </View>
                <Button
                  mode={
                    card.buttonStyle === "primary"
                      ? "contained"
                      : "contained-tonal"
                  }
                  icon={({ size, color }) => (
                    <MaterialIcons
                      name={
                        card.buttonStyle === "primary"
                          ? "chevron-right"
                          : "auto-fix-high"
                      }
                      size={size}
                      color={color}
                    />
                  )}
                  textColor={
                    card.buttonStyle === "primary" ? "#fff" : dark ? "#f0f0f0" : "#111"
                  }
                  buttonColor={
                    card.buttonStyle === "primary" ? "#ec1313" : dark ? "#2a2a2a" : "rgba(0,0,0,0.06)"
                  }
                  rippleColor={dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.10)"}
                  style={styles.cardButton}
                  contentStyle={styles.cardButtonContent}
                  labelStyle={styles.cardButtonText}
                  uppercase
                  onPress={() => {
                    if (card.title === "Choose a Pizza") {
                      router.push("/(tabs)/library");
                      return;
                    }
                    if (card.title === "Help Me Choose") {
                      router.push("/help-me-choose");
                      return;
                    }
                    if (card.title === "Create My Pizza") {
                      router.push("/coming-soon?feature=create");
                      return;
                    }
                    if (card.title === "Fix My Pizza") {
                      router.push("/coming-soon?feature=fix");
                    }
                  }}
                >
                  {(() => {
                    const k = cardKeyForTitle(card.title);
                    return k ? t(`home.cards.${k}.button`) : card.button;
                  })()}
                </Button>
              </View>
              <View style={[styles.cardImageWrap, { backgroundColor: imgWrapBg }]}>
                <Image
                  source={{ uri: card.image }}
                  style={styles.cardImage}
                  contentFit="cover"
                />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#121212",
  },
  container: {
    paddingBottom: 24,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  brandIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ec1313",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#ec1313",
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  brandTitle: {
    flex: 1,
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Lexend_700Bold",
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#232323",
  },
  headline: {
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  headlinePrimary: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "700",
    fontFamily: "Lexend_700Bold",
    letterSpacing: -0.5,
  },
  headlineAccent: {
    color: "#ec1313",
    fontSize: 32,
    fontWeight: "700",
    fontFamily: "Lexend_700Bold",
    letterSpacing: -0.5,
  },
  cardStack: {
    paddingHorizontal: 16,
    gap: 16,
  },
  card: {
    backgroundColor: "#1e1e1e",
    borderRadius: 18,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
    position: "relative",
  },
  cardContent: {
    flex: 1,
    justifyContent: "space-between",
    gap: 14,
  },
  cardText: {
    gap: 8,
  },
  cardTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  cardTitleLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingRight: 10,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Inter_500Medium",
  },
  cardSubtitle: {
    color: "rgba(255,255,255,0.55)",
    fontSize: 13,
    lineHeight: 18,
    fontFamily: "Inter_400Regular",
  },
  cardButton: {
    alignSelf: "flex-start",
    borderRadius: 10,
  },
  cardButtonContent: {
    height: 38,
    paddingHorizontal: 12,
    flexDirection: "row-reverse",
  },
  cardButtonText: {
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter_700Bold",
    letterSpacing: 1.2,
  },
  cardImageWrap: {
    width: 86,
    height: 86,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#2a2a2a",
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
  comingSoonCornerPill: {
    position: "absolute",
    top: -9,
    right: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: "rgba(244,192,37,0.16)",
    borderWidth: 1,
    borderColor: "rgba(244,192,37,0.35)",
  },
  comingSoonText: {
    color: "#f4c025",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
    fontFamily: "Inter_700Bold",
    textTransform: "uppercase",
  },
});
