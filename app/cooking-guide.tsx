import { CookingStep, defaultRecipeSlug, recipeBySlug } from "@/data/recipes";
import { MaterialIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, IconButton, ProgressBar, Surface } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CookingGuideScreen() {
  const insets = useSafeAreaInsets();
  const { recipe: recipeSlug } = useLocalSearchParams<{ recipe?: string }>();
  const steps = recipeBySlug[recipeSlug ?? defaultRecipeSlug]?.steps ?? [];

  const [stepIndex, setStepIndex] = useState(0);
  const step: CookingStep = steps[stepIndex];

  const [remaining, setRemaining] = useState(step.durationSeconds ?? 0);
  const [isRunning, setIsRunning] = useState(false);

  // Reset timer when step changes
  useEffect(() => {
    setRemaining(step.durationSeconds ?? 0);
    setIsRunning(false);
  }, [stepIndex, step.durationSeconds]);

  // Countdown timer
  useEffect(() => {
    if (!step.durationSeconds || !isRunning || remaining <= 0) return;

    const interval = setInterval(() => {
      setRemaining((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, remaining, step.durationSeconds]);

  const progress = useMemo(
    () => (stepIndex + 1) / steps.length,
    [stepIndex, steps.length]
  );

  const remainingLabel = step.durationSeconds
    ? `${String(Math.floor(remaining / 60)).padStart(2, "0")}:${String(
        remaining % 60
      ).padStart(2, "0")}`
    : "00:00";
  const ringProgress =
    step.durationSeconds && step.durationSeconds > 0
      ? 1 - remaining / step.durationSeconds
      : 0;

  return (
    <View style={styles.screen}>
      {/* HEADER */}
      <View style={[styles.header, { paddingTop: insets.top + 12 }]}>
        <IconButton
          icon="arrow-left"
          iconColor="#fff"
          size={22}
          onPress={() => router.back()}
          style={styles.backIcon}
        />
        <Text style={styles.headerTitle}>Step {step.subtitle}</Text>
        <View style={styles.headerActions}>
          <MaterialIcons name="volume-up" size={22} color="#fff" />
        </View>
      </View>

      {/* CONTENT */}
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.progressSection}>
          <View style={styles.progressHeader}>
            <Text style={styles.stepTitle}>{step.title}</Text>
            <Text style={styles.progressText}>
              {Math.round(progress * 100)}% Complete
            </Text>
          </View>
          <ProgressBar progress={progress} color="#ec1313" />
        </View>

        <Surface style={styles.imageCard}>
          <Image source={{ uri: step.image }} style={styles.image} />
        </Surface>

        <View style={styles.textSection}>
          <Text style={styles.instructionTitle}>{step.title}</Text>
          <Text style={styles.instructionBody}>{step.description}</Text>
        </View>

        {/* TIMER */}
        {step.durationSeconds ? (
          <View style={styles.timerSection}>
            <View style={styles.timerPanel}>
              <ProgressBar
                progress={ringProgress}
                color="#ec1313"
                style={styles.timerBar}
              />
              <Text style={styles.timerValue}>{remainingLabel}</Text>
              <Text style={styles.timerLabel}>REMAINING</Text>
              <View style={styles.timerControlsInline}>
                <IconButton
                  icon="replay"
                  size={20}
                  iconColor="#fff"
                  onPress={() => {
                    setRemaining(step.durationSeconds ?? 0);
                    setIsRunning(false);
                  }}
                  style={styles.timerControlButton}
                />
                <IconButton
                  icon={isRunning ? "pause" : "play"}
                  size={24}
                  iconColor="#fff"
                  onPress={() => setIsRunning((prev) => !prev)}
                  style={[
                    styles.timerControlButton,
                    styles.timerControlPrimary,
                  ]}
                />
              </View>
            </View>
          </View>
        ) : null}
      </ScrollView>

      {/* FOOTER */}
      <View style={[styles.footer, { paddingBottom: insets.bottom + 12 }]}>
        <Button
          mode="contained-tonal"
          buttonColor="rgba(255,255,255,0.08)"
          textColor="#fff"
          icon="chevron-left"
          contentStyle={styles.footerButtonContent}
          labelStyle={styles.footerButtonLabel}
          style={[
            styles.footerButton,
            stepIndex === 0 && styles.footerButtonDisabled,
          ]}
          disabled={stepIndex === 0}
          onPress={() => setStepIndex((prev) => Math.max(prev - 1, 0))}
        >
          Previous
        </Button>

        <Button
          mode="contained"
          buttonColor="#ec1313"
          textColor="#fff"
          onPress={() => {
            if (stepIndex >= steps.length - 1) {
              router.push("/cooking-complete");
              return;
            }
            setStepIndex(stepIndex + 1);
          }}
          icon="chevron-right"
          contentStyle={styles.footerButtonContent}
          labelStyle={styles.footerButtonLabel}
          style={styles.footerButton}
        >
          Next Step
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#221010",
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
  headerActions: {
    width: 64,
    alignItems: "center",
  },
  content: {
    paddingBottom: 140,
  },
  progressSection: {
    paddingHorizontal: 20,
    paddingTop: 4,
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 8,
  },
  stepTitle: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Inter_500Medium",
  },
  progressText: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 12,
    fontFamily: "Inter_400Regular",
  },
  progressBar: {
    height: 8,
    borderRadius: 999,
    backgroundColor: "#3d1a1a",
  },
  imageCard: {
    marginHorizontal: 20,
    marginTop: 16,
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
  },
  textSection: {
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  instructionTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Lexend_700Bold",
    textAlign: "center",
  },
  instructionBody: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 14,
    lineHeight: 22,
    textAlign: "center",
    marginTop: 10,
    fontFamily: "Inter_400Regular",
  },
  timerSection: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  timerPanel: {
    width: "100%",
    maxWidth: 340,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.06)",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },
  timerBar: {
    maxWidth: "50%",
    height: 10,
    borderRadius: 999,
    backgroundColor: "#000000",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    marginBottom: 18,
  },
  timerControlsInline: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 10,
  },
  timerControlButton: {
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 999,
  },
  timerControlPrimary: {
    backgroundColor: "#ec1313",
  },
  timerCircle: {
    width: 190,
    height: 190,
    alignItems: "center",
    justifyContent: "center",
  },
  timerRing: {
    position: "absolute",
    width: 170,
    height: 170,
    borderRadius: 85,
    borderWidth: 8,
    borderColor: "#3d1a1a",
  },
  timerFill: {
    position: "absolute",
    width: 170,
    height: 170,
    borderRadius: 85,
    borderWidth: 8,
    borderColor: "#ec1313",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    transform: [{ rotate: "-90deg" }],
  },
  timerContent: {
    alignItems: "center",
  },
  timerValue: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "700",
    fontFamily: "Lexend_700Bold",
  },
  timerLabel: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 12,
    letterSpacing: 2,
    marginTop: 4,
    fontFamily: "Inter_500Medium",
  },
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: "rgba(34,16,16,0.96)",
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  footerButton: {
    flex: 1,
    borderRadius: 14,
  },
  footerButtonDisabled: {
    opacity: 0.6,
  },
  footerButtonContent: {
    height: 52,
    justifyContent: "center",
  },
  footerButtonLabel: {
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Inter_700Bold",
  },
});
