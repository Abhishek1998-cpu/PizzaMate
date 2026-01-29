import { recipeBySlug, recipes } from '@/data/recipes';
import { helpMeChooseDefaultResultSlugs } from '@/data/ui-constants';
import { MaterialIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Chip, IconButton, Surface } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const resultRecipes = helpMeChooseDefaultResultSlugs
  .map((slug) => recipeBySlug[slug])
  .filter((r): r is NonNullable<typeof r> => Boolean(r));

type QuizParams = {
  method?: string;
  time?: string;
  skill?: string;
  preference?: string;
};

function parseMinutes(value: string) {
  const match = value.match(/(\d+)/);
  if (!match) return null;
  const num = Number(match[1]);
  return Number.isFinite(num) ? num : null;
}

function recipeMinutes(recipe: { duration: { en: string; hi: string }; time: { en: string; hi: string } }) {
  return (
    parseMinutes(recipe.duration.en) ??
    parseMinutes(recipe.time.en) ??
    parseMinutes(recipe.duration.hi) ??
    parseMinutes(recipe.time.hi)
  );
}

function methodMatches(recipe: { method: { en: string; hi: string }; toolsText: { en: string; hi: string } }, selected: string) {
  const haystack = `${recipe.method.en} ${recipe.toolsText.en} ${recipe.method.hi} ${recipe.toolsText.hi}`.toLowerCase();
  if (selected === 'pan') {
    return haystack.includes('pan') || haystack.includes('tawa') || haystack.includes('no oven');
  }
  if (selected === 'oven') {
    return haystack.includes('oven') || haystack.includes('otg') || haystack.includes('high temp');
  }
  return true;
}

function timeMatches(minutes: number | null, selected: string) {
  if (minutes == null) return true;
  if (selected === 'under-30') return minutes <= 30;
  if (selected === '30-45') return minutes > 30 && minutes <= 45;
  if (selected === '45-plus') return minutes > 45;
  return true;
}

function skillScore(recipeLevel: string, selected: string) {
  const lvl = recipeLevel.toLowerCase();
  if (selected === 'beginner') return lvl.includes('beginner') ? 1 : 0;
  if (selected === 'comfortable') return 1; // allow all; user is comfortable
  return 0;
}

function scoreRecipe(recipe: (typeof recipes)[number], params: QuizParams) {
  let score = 0;
  const mins = recipeMinutes(recipe);
  if (params.method && methodMatches(recipe, params.method)) score += 2;
  if (params.time && timeMatches(mins, params.time)) score += 2;
  if (params.skill) score += skillScore(recipe.level.en, params.skill);
  return score;
}

function matchLabel(score: number) {
  // max score = 5 (2+2+1)
  const pct = Math.round((score / 5) * 100);
  return `${pct}% Match`;
}

export default function HelpMeChooseResults() {
  const insets = useSafeAreaInsets();
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith('hi') ? 'hi' : 'en';
  const params = useLocalSearchParams<QuizParams>();
  const hasAnyParams = Boolean(params.method || params.time || params.skill || params.preference);

  const preferenceFiltered =
    params.preference === 'veg'
      ? recipes.filter((r) => r.diet === 'veg')
      : params.preference === 'non-veg'
        ? recipes.filter((r) => r.diet === 'non-veg')
        : recipes;

  const cards = hasAnyParams
    ? preferenceFiltered
        .map((r) => ({ recipe: r, score: scoreRecipe(r, params) }))
        .sort((a, b) => {
          if (b.score !== a.score) return b.score - a.score;
          const ar = Number.parseFloat(a.recipe.rating);
          const br = Number.parseFloat(b.recipe.rating);
          if (Number.isFinite(br) && Number.isFinite(ar) && br !== ar) return br - ar;
          return a.recipe.title.en.localeCompare(b.recipe.title.en);
        })
        .slice(0, 3)
        .map((x, idx) => ({
          recipe: x.recipe,
          match: matchLabel(x.score),
          highlight: idx === 0,
        }))
    : resultRecipes.map((r, idx) => ({
        recipe: r,
        match: r.helpMeChoose?.match ?? null,
        highlight: r.helpMeChoose?.highlight ?? idx === 0,
      }));

  const methodChip =
    params.method === 'pan' ? 'Pan / Tawa' : params.method === 'oven' ? 'Oven / OTG' : null;
  const timeChip =
    params.time === 'under-30'
      ? 'Under 30m'
      : params.time === '30-45'
        ? '30–45m'
        : params.time === '45-plus'
          ? '45m+'
          : null;
  const preferenceChip =
    params.preference === 'veg' ? 'Veg' : params.preference === 'non-veg' ? 'Non‑veg' : null;

  return (
    <View style={styles.screen}>
      <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
        <View style={styles.headerRow}>
          <View style={styles.headerLeft}>
            <IconButton
              icon="arrow-left"
              iconColor="#fff"
              size={20}
              onPress={() => router.back()}
              style={styles.backIcon}
            />
            <Text style={styles.headerTitle}>Personalized Results</Text>
          </View>
          <MaterialIcons name="local-pizza" size={20} color="#f4c025" />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Perfect pizzas for your kitchen</Text>
        <Text style={styles.subtitle}>
          Based on your answers, these pizzas are most likely to succeed with your current
          equipment.
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chipRow}
        >
          <Chip style={styles.chipPrimary} textStyle={styles.chipPrimaryText}>
            Top Matches
          </Chip>
          {preferenceChip ? (
            <Chip style={styles.chip} textStyle={styles.chipText}>
              {preferenceChip}
            </Chip>
          ) : null}
          {timeChip ? (
            <Chip style={styles.chip} textStyle={styles.chipText}>
              {timeChip}
            </Chip>
          ) : null}
          {methodChip ? (
            <Chip style={styles.chip} textStyle={styles.chipText}>
              {methodChip}
            </Chip>
          ) : null}
        </ScrollView>

        <View style={styles.cardStack}>
          {cards.map(({ recipe, match, highlight }) => (
            <Surface key={recipe.slug} style={styles.card} elevation={0}>
              <View style={styles.cardImageWrap}>
                <Image source={{ uri: recipe.image }} style={styles.cardImage} />
                <View style={styles.cardGradient} />
                {match ? (
                  <View style={styles.matchBadge}>
                    <Text style={styles.matchText}>{match}</Text>
                  </View>
                ) : null}
              </View>
              <View style={styles.cardContent}>
                <View style={styles.cardHeader}>
                  <View style={styles.cardHeaderLeft}>
                    <Text style={styles.cardTitle} numberOfLines={2} ellipsizeMode="tail">
                      {recipe.title[lang]}
                    </Text>
                    <View style={styles.cardMeta}>
                      <MaterialIcons name="schedule" size={14} color="#f4c025" />
                      <Text style={styles.cardMetaText}>
                        {recipe.time[lang]} • {recipe.method[lang]}
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.levelBadge, { borderColor: recipe.levelColor }]}>
                    <Text style={[styles.levelText, { color: recipe.levelColor }]}>
                      {recipe.level[lang].toUpperCase()}
                    </Text>
                  </View>
                </View>
                <Button
                  mode={highlight ? 'contained' : 'contained-tonal'}
                  buttonColor={highlight ? '#f4c025' : 'rgba(255,255,255,0.1)'}
                  textColor={highlight ? '#231e10' : '#fff'}
                  contentStyle={styles.cardButtonContent}
                  labelStyle={styles.cardButtonLabel}
                  icon="chevron-right"
                  uppercase
                  onPress={() => router.push(`/recipe/${recipe.slug}`)}>
                  View Recipe
                </Button>
              </View>
            </Surface>
          ))}
        </View>

        <Button
          mode="text"
          textColor="#f4c025"
          icon="refresh"
          labelStyle={styles.retakeLabel}
          style={styles.retakeButton}
          onPress={() => router.replace('/help-me-choose/stepper')}>
          Retake Preference Quiz
        </Button>
      </ScrollView>

      <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom + 16, 24) }]}>
        <Button
          mode="contained-tonal"
          buttonColor="rgba(255,255,255,0.06)"
          textColor="#fff"
          contentStyle={styles.footerButtonContent}
          labelStyle={styles.footerButtonLabel}
          style={styles.footerButton}
          onPress={() => router.push('/(tabs)/library')}>
          Browse All Recipes
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.08)',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  backIcon: {
    margin: 0,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Lexend_700Bold',
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 140,
  },
  title: {
    marginTop: 16,
    fontSize: 30,
    fontWeight: '700',
    fontFamily: 'Lexend_700Bold',
    color: '#fff',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
    color: 'rgba(255,255,255,0.7)',
    fontFamily: 'Inter_400Regular',
  },
  chipRow: {
    gap: 10,
    paddingVertical: 16,
    paddingRight: 16,
  },
  chipPrimary: {
    backgroundColor: 'rgba(244,192,37,0.2)',
    borderColor: 'rgba(244,192,37,0.4)',
  },
  chipPrimaryText: {
    color: '#f4c025',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  chip: {
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
  chipText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Inter_500Medium',
  },
  cardStack: {
    gap: 18,
  },
  card: {
    borderRadius: 18,
    backgroundColor: '#1c1c1c',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    overflow: 'hidden',
  },
  cardImageWrap: {
    width: '100%',
    aspectRatio: 16 / 10,
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardGradient: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  matchBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#f4c025',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
  matchText: {
    color: '#231e10',
    fontSize: 11,
    fontWeight: '700',
  },
  cardContent: {
    padding: 16,
    gap: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  cardHeaderLeft: {
    flex: 1,
    paddingRight: 12,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Lexend_700Bold',
    lineHeight: 26,
  },
  cardMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  cardMetaText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 13,
    fontFamily: 'Inter_400Regular',
  },
  levelBadge: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  levelText: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
  },
  cardButtonContent: {
    height: 44,
  },
  cardButtonLabel: {
    fontSize: 13,
    fontWeight: '700',
    fontFamily: 'Inter_700Bold',
  },
  retakeButton: {
    marginTop: 10,
    alignSelf: 'center',
  },
  retakeLabel: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingTop: 12,
    backgroundColor: 'rgba(18,18,18,0.95)',
  },
  footerButton: {
    borderRadius: 999,
  },
  footerButtonContent: {
    height: 48,
  },
  footerButtonLabel: {
    fontSize: 13,
    fontWeight: '600',
    fontFamily: 'Inter_500Medium',
  },
});
