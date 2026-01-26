import { recipes } from '@/data/recipes';
import { libraryFilters, type FilterKey } from '@/data/ui-constants';
import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function LibraryScreen() {
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');

  const filteredRecipes = useMemo(() => {
    const q = query.trim().toLowerCase();
    const base = q ? recipes.filter((r) => r.title.toLowerCase().includes(q)) : recipes;

    if (activeFilter === 'all') return base;
    if (activeFilter === 'beginner') {
      return base.filter((r) => r.level.toLowerCase().includes('beginner'));
    }
    if (activeFilter === 'no-oven') {
      return base.filter((r) => {
        const hay = `${r.method} ${r.toolsText}`.toLowerCase();
        return hay.includes('no oven');
      });
    }
    if (activeFilter === 'pan-tawa') {
      return base.filter((r) => {
        const hay = `${r.method} ${r.toolsText}`.toLowerCase();
        return hay.includes('pan') || hay.includes('tawa');
      });
    }
    return base;
  }, [query, activeFilter]);

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={[styles.header, { paddingTop: insets.top + 16 }]}>
          <View style={styles.headerBrand}>
            <MaterialIcons name="local-pizza" size={20} color="#ec1313" />
          </View>
          <Text style={styles.headerTitle}>Pizza Library</Text>
          <View style={styles.headerAvatar}>
            <MaterialIcons name="account-circle" size={20} color="#d1d1d1" />
          </View>
        </View>

        <View style={styles.searchWrap}>
          <TextInput
            mode="outlined"
            placeholder="Search Indian pizza recipes..."
            placeholderTextColor="rgba(255,255,255,0.5)"
            style={styles.searchInput}
            outlineColor="rgba(255,255,255,0.08)"
            activeOutlineColor="#ec1313"
            value={query}
            onChangeText={setQuery}
            textColor="#fff"
            cursorColor="#ec1313"
            selectionColor="rgba(236,19,19,0.35)"
            theme={{ colors: { primary: '#ec1313' } }}
            left={<TextInput.Icon icon="magnify" color="rgba(255,255,255,0.6)" />}
            right={
              query ? (
                <TextInput.Icon
                  icon="close"
                  color="rgba(255,255,255,0.6)"
                  onPress={() => setQuery('')}
                />
              ) : null
            }
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterRow}>
          {libraryFilters.map((filter) => (
            <Pressable
              key={filter.key}
              onPress={() => setActiveFilter(filter.key)}
              style={[
                styles.filterChip,
                filter.key === activeFilter && styles.filterChipActive,
              ]}
              accessibilityRole="button"
              accessibilityLabel={`Filter: ${filter.label}`}
              accessibilityState={{ selected: filter.key === activeFilter }}
            >
              <MaterialIcons
                name={filter.icon as any}
                size={16}
                color={filter.key === activeFilter ? '#fff' : '#c7c7c7'}
              />
              <Text
                style={[
                  styles.filterText,
                  filter.key === activeFilter && styles.filterTextActive,
                ]}
              >
                {filter.label}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        <View style={styles.cardStack}>
          {filteredRecipes.map((recipe) => (
            <View key={recipe.title} style={styles.card}>
              <View style={styles.cardImageWrap}>
                <Image source={{ uri: recipe.image }} style={styles.cardImage} contentFit="cover" />
                <View style={styles.cardOverlay} />
                <View style={[styles.levelPill, { backgroundColor: recipe.levelColor }]}>
                  <MaterialIcons name={recipe.levelIcon as any} size={12} color="#fff" />
                  <Text style={styles.levelText}>{recipe.level.toUpperCase()}</Text>
                </View>
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{recipe.title}</Text>
                <View style={styles.cardFooter}>
                  <View style={styles.cardMeta}>
                    <View style={styles.cardMetaItem}>
                      <MaterialIcons name="schedule" size={16} color="#9f9f9f" />
                      <Text style={styles.cardMetaText}>{recipe.duration}</Text>
                    </View>
                    <View style={styles.cardMetaItem}>
                      <MaterialIcons name="outdoor-grill" size={16} color="#ec1313" />
                      <Text style={styles.cardMetaText}>{recipe.method}</Text>
                    </View>
                  </View>
                  <Button
                    mode="contained"
                    buttonColor="#ec1313"
                    textColor="#fff"
                    icon="book-open-variant"
                    onPress={() => router.push(`/recipe/${recipe.slug}`)}
                    accessibilityLabel={`View recipe for ${recipe.title}`}
                    accessibilityHint="Opens the recipe detail screen"
                    accessibilityRole="button"
                    testID={`view-recipe-${recipe.slug}`}>
                    View Recipe
                  </Button>
                </View>
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
    backgroundColor: '#221010',
  },
  container: {
    paddingBottom: 24,
  },
  header: {
    paddingTop: 18,
    paddingHorizontal: 20,
    paddingBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerBrand: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: 'rgba(236,19,19,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    flex: 1,
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Lexend_700Bold',
  },
  headerAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#2a1b1b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchWrap: {
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  searchInput: {
    backgroundColor: '#2b1f1f',
    borderRadius: 14,
  },
  filterRow: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    gap: 10,
  },
  filterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    backgroundColor: '#2a1b1b',
  },
  filterChipActive: {
    backgroundColor: '#ec1313',
    borderColor: '#ec1313',
  },
  filterText: {
    color: '#c7c7c7',
    fontSize: 13,
    fontWeight: '500',
    fontFamily: 'Inter_500Medium',
  },
  filterTextActive: {
    color: '#fff',
  },
  cardStack: {
    paddingHorizontal: 20,
    gap: 16,
  },
  card: {
    backgroundColor: '#1b1717',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    overflow: 'hidden',
  },
  cardImageWrap: {
    position: 'relative',
    width: '100%',
    aspectRatio: 16 / 10,
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  levelPill: {
    position: 'absolute',
    top: 12,
    right: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  levelText: {
    color: '#fff',
    fontSize: 9,
    fontWeight: '700',
    fontFamily: 'Inter_700Bold',
    letterSpacing: 0.8,
  },
  cardContent: {
    padding: 14,
    gap: 10,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Inter_500Medium',
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  cardMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    flex: 1,
  },
  cardMetaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  cardMetaText: {
    color: '#9f9f9f',
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
  },
});
