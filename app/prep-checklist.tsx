import { defaultRecipeSlug, recipeBySlug } from "@/data/recipes";
import { MaterialIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
    Button,
    Checkbox,
    IconButton,
    ProgressBar,
    Surface,
} from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function PrepChecklistScreen() {
  const insets = useSafeAreaInsets();
  const { recipe: recipeSlug } = useLocalSearchParams<{ recipe?: string }>();
  const recipe = recipeBySlug[recipeSlug ?? defaultRecipeSlug];
  const tools = recipe?.prepTools ?? [];
  const ingredients = recipe?.prepIngredients ?? [];
  const [toolState, setToolState] = useState<Record<string, boolean>>(
    tools.reduce(
      (acc, item) => ({ ...acc, [item.id]: Boolean(item.checked) }),
      {} as Record<string, boolean>
    )
  );
  const [ingredientState, setIngredientState] = useState<
    Record<string, boolean>
  >(
    ingredients.reduce(
      (acc, item) => ({ ...acc, [item.id]: Boolean(item.checked) }),
      {} as Record<string, boolean>
    )
  );

  const { total, ready, progress, allReady } = useMemo(() => {
    const allValues = [
      ...Object.values(toolState),
      ...Object.values(ingredientState),
    ];
    const readyCount = allValues.filter(Boolean).length;
    const totalCount = allValues.length;
    return {
      total: totalCount,
      ready: readyCount,
      progress: totalCount ? readyCount / totalCount : 0,
      allReady: totalCount > 0 && readyCount === totalCount,
    };
  }, [toolState, ingredientState]);

  const toggleTool = (id: string) =>
    setToolState((prev) => ({ ...prev, [id]: !prev[id] }));
  const toggleIngredient = (id: string) =>
    setIngredientState((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <View style={styles.screen}>
      <View style={[styles.header, { paddingTop: insets.top + 12 }]}>
        <IconButton
          icon="arrow-left"
          iconColor="#fff"
          size={22}
          onPress={() => router.back()}
          style={styles.backIcon}
        />
        <Text style={styles.headerTitle}>Prepare Your Space</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.progressSection}>
          <View style={styles.progressHeader}>
            <View>
              <Text style={styles.progressLabel}>Current Progress</Text>
              <Text style={styles.progressText}>
                {ready} of {total} items ready
              </Text>
            </View>
            <Text style={styles.progressPercent}>
              {Math.round(progress * 100)}%
            </Text>
          </View>
          <ProgressBar
            progress={progress}
            color="#ec1313"
            style={styles.progressBar}
          />
        </View>

        <Surface style={styles.recipeCard} elevation={0}>
          <View style={styles.recipeIcon}>
            <MaterialIcons name="restaurant" size={18} color="#ec1313" />
          </View>
          <View>
            <Text style={styles.recipeTitle}>{recipe?.title}</Text>
            <Text
              style={styles.recipeSubtitle}
            >{`Prep time: ${recipe?.duration}`}</Text>
          </View>
        </Surface>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialIcons name="construction" size={20} color="#ec1313" />
            <Text style={styles.sectionTitle}>Tools</Text>
          </View>
          {tools.map((item) => (
            <Surface key={item.id} style={styles.checkRow} elevation={0}>
              <View style={styles.checkRowContent}>
                <MaterialIcons
                  name={item.icon as any}
                  size={18}
                  color="rgba(255,255,255,0.5)"
                />
                <Text style={styles.checkRowText}>{item.label}</Text>
              </View>
              <Checkbox.Android
                status={toolState[item.id] ? "checked" : "unchecked"}
                onPress={() => toggleTool(item.id)}
                color="#ec1313"
                uncheckedColor="rgba(255,255,255,0.25)"
              />
            </Surface>
          ))}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialIcons name="local-pizza" size={20} color="#ec1313" />
            <Text style={styles.sectionTitle}>Ingredients</Text>
          </View>
          {ingredients.map((item) => (
            <Surface key={item.id} style={styles.checkRow} elevation={0}>
              <View style={styles.checkRowContent}>
                <View style={styles.ingredientIcon}>
                  <MaterialIcons
                    name={item.icon as any}
                    size={14}
                    color="rgba(255,255,255,0.7)"
                  />
                </View>
                <View>
                  <Text style={styles.checkRowText}>{item.label}</Text>
                  {item.subtitle ? (
                    <Text style={styles.checkRowSubtitle}>{item.subtitle}</Text>
                  ) : null}
                </View>
              </View>
              <Checkbox.Android
                status={ingredientState[item.id] ? "checked" : "unchecked"}
                onPress={() => toggleIngredient(item.id)}
                color="#ec1313"
                uncheckedColor="rgba(255,255,255,0.25)"
              />
            </Surface>
          ))}
        </View>
      </ScrollView>

      <View
        style={[
          styles.ctaWrap,
          { paddingBottom: Math.max(insets.bottom + 12, 20) },
        ]}
      >
        <Button
          mode="contained"
          icon="chevron-right"
          contentStyle={styles.ctaContent}
          labelStyle={allReady ? styles.ctaLabel : styles.ctaLabelDisabled}
          style={[styles.ctaButton, !allReady && styles.ctaButtonDisabled]}
          uppercase
          disabled={!allReady}
          onPress={() =>
            router.push(`/cooking-guide?recipe=${recipe.slug}`)
          }
        >
          I'm Ready, Let's Cook!
        </Button>
        <View style={styles.homeIndicator} />
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
  backIcon: {
    margin: 0,
  },
  content: {
    paddingBottom: 160,
  },
  progressSection: {
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  progressHeader: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  progressLabel: {
    color: "#ec1313",
    fontSize: 11,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1.2,
    fontFamily: "Inter_700Bold",
  },
  progressText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Inter_500Medium",
    marginTop: 4,
  },
  progressPercent: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 13,
    fontFamily: "Inter_400Regular",
  },
  progressBar: {
    height: 8,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.12)",
  },
  recipeCard: {
    marginTop: 16,
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "rgba(236,19,19,0.08)",
    borderWidth: 1,
    borderColor: "rgba(236,19,19,0.25)",
  },
  recipeIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "rgba(236,19,19,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  recipeTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Inter_700Bold",
  },
  recipeSubtitle: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    marginTop: 2,
  },
  section: {
    marginTop: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Lexend_700Bold",
  },
  checkRow: {
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  checkRowContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },
  checkRowText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Inter_500Medium",
  },
  checkRowSubtitle: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    marginTop: 4,
  },
  ingredientIcon: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.1)",
    alignItems: "center",
    justifyContent: "center",
  },
  ctaWrap: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 20,
    paddingTop: 12,
    backgroundColor: "rgba(34,16,16,0.95)",
  },
  ctaButton: {
    borderRadius: 14,
  },
  ctaButtonDisabled: {
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
    color: "green",
  },
  ctaContent: {
    height: 54,
  },
  ctaLabel: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Inter_700Bold",
    color: "white",
  },
  ctaLabelDisabled: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Inter_700Bold",
    color: "grey",
  },
  homeIndicator: {
    marginTop: 12,
    height: 4,
    width: 120,
    alignSelf: "center",
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.15)",
  },
});
