import { defaultRecipeSlug, recipeBySlug } from '@/data/recipes';
import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function RecipeDetailScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const recipe = recipeBySlug[id ?? defaultRecipeSlug] ?? recipeBySlug[defaultRecipeSlug];
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <View style={[styles.topBar, { paddingTop: insets.top + 16 }]}>
        <Pressable
          style={styles.topButton}
          onPress={() => router.back()}
          accessibilityLabel="Go back">
          <MaterialIcons name="arrow-back-ios-new" size={18} color="#fff" />
        </Pressable>
        <View style={styles.topActions}>
          <Pressable style={styles.topButton} accessibilityLabel="Share recipe">
            <MaterialIcons name="share" size={18} color="#fff" />
          </Pressable>
          <Pressable style={[styles.topButton, styles.topButtonActive]} accessibilityLabel="Favorite">
            <MaterialIcons name="favorite" size={18} color="#ec1313" />
          </Pressable>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Image source={{ uri: recipe.hero }} style={styles.heroImage} contentFit="cover" />
          <View style={styles.heroOverlay} />
        </View>

        <View style={styles.body}>
          <View style={styles.badgeRow}>
            <Text style={styles.badge}>{recipe.badge.toUpperCase()}</Text>
            <View style={styles.rating}>
              <MaterialIcons name="star" size={16} color="#f4c430" />
              <Text style={styles.ratingText}>{recipe.rating}</Text>
            </View>
          </View>

          <Text style={styles.title}>{recipe.title}</Text>
          <Text style={styles.description}>{recipe.description}</Text>

          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <MaterialIcons name="schedule" size={18} color="#ec1313" />
              <Text style={styles.statLabel}>TIME</Text>
              <Text style={styles.statValue}>{recipe.time}</Text>
            </View>
            <View style={styles.statCard}>
              <MaterialIcons name="outdoor-grill" size={18} color="#ec1313" />
              <Text style={styles.statLabel}>TOOLS</Text>
              <Text style={styles.statValue}>{recipe.toolsText}</Text>
            </View>
            <View style={styles.statCard}>
              <MaterialIcons name="signal-cellular-alt" size={18} color="#ec1313" />
              <Text style={styles.statLabel}>LEVEL</Text>
              <Text style={styles.statValue}>{recipe.level}</Text>
            </View>
          </View>

          <View style={styles.ingredientsHeader}>
            <Text style={styles.sectionTitle}>Ingredients</Text>
            <Text style={styles.sectionCount}>{recipe.ingredients.length} items</Text>
          </View>
          <View style={styles.ingredientsGrid}>
            {recipe.ingredients.map((ingredient) => (
              <View key={ingredient.name} style={styles.ingredientItem}>
                <View style={styles.ingredientImageWrap}>
                  <Image
                    source={{ uri: ingredient.image }}
                    style={styles.ingredientImage}
                    contentFit="cover"
                  />
                </View>
                <Text style={styles.ingredientLabel}>{ingredient.name}</Text>
              </View>
            ))}
          </View>

          <View style={styles.tipCard}>
            <View style={styles.tipHeader}>
              <MaterialIcons name="tips-and-updates" size={18} color="#ec1313" />
              <Text style={styles.tipTitle}>Chef's Secret</Text>
            </View>
            <Text style={styles.tipText}>
              Preheat your baking tray for 10 minutes to get that restaurant-style crispy base!
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.ctaWrap}>
        <Button
          mode="contained"
          icon="silverware-fork-knife"
          buttonColor="#ec1313"
          textColor="#fff"
          contentStyle={styles.ctaContent}
          labelStyle={styles.ctaLabel}
          style={styles.ctaButton}
          uppercase
          onPress={() => router.push(`/prep-checklist?recipe=${recipe.slug}`)}>
          Start Cooking
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#120a0a',
  },
  topBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    paddingTop: 48,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topActions: {
    flexDirection: 'row',
    gap: 10,
  },
  topButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topButtonActive: {
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  hero: {
    height: 360,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  content: {
    paddingBottom: 140,
  },
  body: {
    marginTop: -24,
    paddingHorizontal: 20,
    paddingTop: 24,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    backgroundColor: '#120a0a',
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 8,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: 'rgba(236,19,19,0.2)',
    color: '#ec1313',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.4,
    fontFamily: 'Inter_700Bold',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '700',
    fontFamily: 'Inter_700Bold',
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '700',
    fontFamily: 'Lexend_700Bold',
  },
  description: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 10,
    fontFamily: 'Inter_400Regular',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 22,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#2a1616',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    gap: 6,
  },
  statLabel: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 11,
    letterSpacing: 1,
    fontWeight: '600',
    fontFamily: 'Inter_500Medium',
  },
  statValue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Inter_700Bold',
  },
  ingredientsHeader: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Lexend_700Bold',
  },
  sectionCount: {
    color: '#ec1313',
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Inter_500Medium',
  },
  ingredientsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
    marginTop: 14,
  },
  ingredientItem: {
    width: '22%',
    alignItems: 'center',
    gap: 8,
  },
  ingredientImageWrap: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#2a1616',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    overflow: 'hidden',
  },
  ingredientImage: {
    width: '100%',
    height: '100%',
  },
  ingredientLabel: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 10,
    textAlign: 'center',
    fontFamily: 'Inter_500Medium',
  },
  tipCard: {
    marginTop: 24,
    backgroundColor: 'rgba(236,19,19,0.12)',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: 'rgba(236,19,19,0.3)',
  },
  tipHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  tipTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Inter_700Bold',
  },
  tipText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 13,
    lineHeight: 20,
    fontFamily: 'Inter_400Regular',
  },
  ctaWrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 20,
    paddingBottom: 24,
    paddingTop: 12,
    backgroundColor: 'rgba(18,10,10,0.9)',
  },
  ctaButton: {
    borderRadius: 14,
  },
  ctaContent: {
    height: 54,
  },
  ctaLabel: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Inter_700Bold',
  },
});
