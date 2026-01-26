export type HelpMeChooseOption = {
  id: string;
  label: string;
  icon: string;
  image?: string;
};

export type HelpMeChooseStep = {
  id: string;
  title: string;
  subtitle: string;
  progress: number;
  optional: boolean;
  options: HelpMeChooseOption[];
};

export const helpMeChooseSteps: HelpMeChooseStep[] = [
  {
    id: 'method',
    title: 'What do you have?',
    subtitle: 'Cooking Method',
    progress: 0.25,
    optional: false,
    options: [
      {
        id: 'pan',
        label: 'Pan / Tawa',
        icon: 'soup-kitchen',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDqa5InLTDDVpefUVvTNl6GCe-CEvjGhQhGzC04DHQLGm8CQGpR2E1uIcsD1zt7Y8YDm_5wPMXYoFuw9-YbFzBcsEodKRS7T_iEY0yk4p3T9QXZI00QauJQ5igRKQLg4fcS_-dKKBgwboseZvgb0KEuqovvNEn1Y7r4yxVy44Tp51oUiJ4E1XD5WTmEc5es8MCJFNcxFIHI9WbFT10QSW-41-scNAKhD7Ha4rh6SjXHjwTqHxUcviryt5LweXiCzl32jLuI3aufh6oA',
      },
      {
        id: 'oven',
        label: 'Oven / OTG',
        icon: 'oven',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBtFcaaGF8s0BPJkJhvEeRdRK4TpKw0hnr_LUGv6TNqQAWeJJBxnPG3gUnCkjkcnFz5rbolXisTZbfSpwrpyszOwjoJjZKOyUW7TqPMPKtZ9sXyrpYyGlL73_X1u8kmPMxtdCJAr7BHq-egCzxIQ7YWCRGJ8MBOkCh4mI1zJp1uDXkd7zsVp8kZGwAz1Abv6RgblvgMAznBrGhwt2o8MIXIL1UMbZjCojWO1-HIddRv_Y1XVEGdC-_XZtulhyEC5Mg3KhcANROt42IL',
      },
    ],
  },
  {
    id: 'time',
    title: 'How much time do you have?',
    subtitle: 'Kitchen & Time',
    progress: 0.5,
    optional: false,
    options: [
      { id: 'under-30', label: 'Under 30 min', icon: 'timer' },
      { id: '30-45', label: '30–45 min', icon: 'schedule' },
      { id: '45-plus', label: '45+ min', icon: 'hourglass-bottom' },
    ],
  },
  {
    id: 'skill',
    title: 'Your comfort level?',
    subtitle: 'Skill Level',
    progress: 0.75,
    optional: false,
    options: [
      { id: 'beginner', label: 'Beginner', icon: 'school' },
      { id: 'comfortable', label: 'Comfortable', icon: 'emoji-events' },
    ],
  },
  {
    id: 'preference',
    title: 'What do you prefer?',
    subtitle: 'Preference',
    progress: 1,
    optional: true,
    options: [
      { id: 'veg', label: 'Veg', icon: 'eco' },
      { id: 'non-veg', label: 'Non-veg', icon: 'restaurant' },
      { id: 'any', label: 'Doesn’t matter', icon: 'check-circle' },
    ],
  },
];
