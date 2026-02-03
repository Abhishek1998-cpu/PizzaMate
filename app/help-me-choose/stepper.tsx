import { helpMeChooseSteps } from '@/data/help-me-choose';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { Button, IconButton, ProgressBar, Surface, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function buildResultsUrl(answers: Record<string, string>) {
  const params = new URLSearchParams();
  const method = answers.method;
  const time = answers.time;
  const skill = answers.skill;
  const preference = answers.preference;
  if (method) params.set('method', method);
  if (time) params.set('time', time);
  if (skill) params.set('skill', skill);
  if (preference) params.set('preference', preference);
  const qs = params.toString();
  return qs ? `/help-me-choose/results?${qs}` : '/help-me-choose/results';
}

export default function HelpMeChooseStepper() {
  const insets = useSafeAreaInsets();
  const { dark, colors } = useTheme();
  const steps = helpMeChooseSteps;
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const step = steps[stepIndex];
  const selected = answers[step.id];
  const canProceed = step.optional || Boolean(selected);
  const totalSteps = steps.length;

  const bg = dark ? '#121212' : colors.background;
  const text = dark ? '#fff' : '#111';
  const mutedText = dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.65)';
  const cardBg = dark ? '#2d1818' : '#ffffff';
  const cardBorder = dark ? '#4a2b2b' : 'rgba(0,0,0,0.12)';
  const cardBorderSelected = '#f42525';
  const progressBg = dark ? '#4a2b2b' : 'rgba(0,0,0,0.1)';
  const footerBg = dark ? '#121212' : colors.background;
  const footerBorder = dark ? '#4a2b2b' : 'rgba(0,0,0,0.08)';
  const iconInactive = dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.5)';
  const backButtonBg = dark ? 'rgba(244,37,37,0.12)' : 'rgba(244,37,37,0.1)';

  const stepLabel = useMemo(
    () => `${stepIndex + 1} of ${totalSteps}`,
    [stepIndex, totalSteps],
  );

  return (
    <View style={[styles.screen, { backgroundColor: bg }]}>
      <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
        <IconButton
          icon="arrow-left"
          iconColor={text}
          size={22}
          onPress={() => router.back()}
          style={styles.closeButton}
        />
        <Text style={[styles.headerTitle, { color: text }]}>Help Me Choose</Text>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.progressWrap}>
        <View style={styles.progressHeader}>
          <Text style={[styles.progressTitle, { color: text }]}>{step.subtitle}</Text>
          <Text style={[styles.progressStep, { color: mutedText }]}>{stepLabel}</Text>
        </View>
        <ProgressBar progress={step.progress} color="#f42525" style={[styles.progressBar, { backgroundColor: progressBg }]} />
      </View>

      <View style={styles.content}>
        <Text style={[styles.question, { color: text }]}>{step.title}</Text>

        {step.options.map((option) => {
          const isSelected = selected === option.id;
          const hasImage = Boolean(option.image);
          return (
            <Pressable
              key={option.id}
              onPress={() => setAnswers((prev) => ({ ...prev, [step.id]: option.id }))}
            >
              <Surface
                style={[
                  styles.card,
                  { backgroundColor: cardBg },
                  isSelected ? { borderWidth: 3, borderColor: cardBorderSelected } : { borderWidth: 2, borderColor: cardBorder },
                ]}
                elevation={0}
              >
                {isSelected ? (
                  <View style={styles.checkBadge}>
                    <MaterialIcons name="check" size={14} color="#fff" />
                  </View>
                ) : null}
                <MaterialIcons
                  name={option.icon as any}
                  size={48}
                  color={isSelected ? '#f42525' : iconInactive}
                />
                <Text style={[isSelected ? styles.cardTitle : styles.cardTitleInactive, { color: isSelected ? text : mutedText }]}>
                  {option.label}
                </Text>
                {hasImage ? (
                  <ImageBackground
                    source={{ uri: option.image as string }}
                    style={styles.cardImage}
                    imageStyle={[
                      styles.cardImageRadius,
                      !isSelected && styles.cardImageMuted,
                    ]}
                  />
                ) : null}
              </Surface>
            </Pressable>
          );
        })}
      </View>

      <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom + 12, 24), backgroundColor: footerBg, borderTopColor: footerBorder }]}>
        <View style={styles.footerButtons}>
          <Button
            mode="contained-tonal"
            buttonColor={backButtonBg}
            textColor="#f42525"
            style={styles.footerButton}
            contentStyle={styles.footerButtonContent}
            labelStyle={styles.footerButtonLabel}
            disabled={stepIndex === 0}
            onPress={() => setStepIndex((prev) => Math.max(prev - 1, 0))}>
            Back
          </Button>
          <Button
            mode="contained"
            buttonColor="#f42525"
            textColor="#fff"
            style={[styles.footerButton, styles.footerButtonPrimary]}
            contentStyle={styles.footerButtonContent}
            labelStyle={styles.footerButtonLabel}
            disabled={!canProceed}
            onPress={() => {
              if (stepIndex >= totalSteps - 1) {
                router.push(buildResultsUrl(answers));
                return;
              }
              setStepIndex((prev) => Math.min(prev + 1, totalSteps - 1));
            }}>
            Next
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeButton: {
    margin: 0,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Lexend_700Bold',
  },
  headerSpacer: {
    width: 40,
  },
  progressWrap: {
    paddingHorizontal: 16,
    paddingTop: 8,
    gap: 10,
  },
  progressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Inter_500Medium',
  },
  progressStep: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
  },
  progressBar: {
    height: 8,
    borderRadius: 999,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },
  question: {
    fontSize: 28,
    fontWeight: '700',
    fontFamily: 'Lexend_700Bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    borderRadius: 18,
    padding: 20,
    alignItems: 'center',
    marginBottom: 16,
  },
  checkBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#f42525',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Inter_700Bold',
  },
  cardTitleInactive: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Inter_700Bold',
  },
  cardImage: {
    width: '100%',
    height: 130,
    marginTop: 16,
  },
  cardImageRadius: {
    borderRadius: 12,
  },
  cardImageMuted: {
    opacity: 0.4,
  },
  footer: {
    borderTopWidth: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  footerButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  footerButton: {
    flex: 1,
    borderRadius: 12,
  },
  footerButtonPrimary: {
    flex: 1,
  },
  footerButtonContent: {
    height: 52,
  },
  footerButtonLabel: {
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'Inter_700Bold',
  },
});
