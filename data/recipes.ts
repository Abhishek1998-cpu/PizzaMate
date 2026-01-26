export type CookingStep = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  durationSeconds?: number;
};

export type Ingredient = {
  name: string;
  image: string;
};

export type ChecklistItem = {
  id: string;
  label: string;
  subtitle?: string;
  icon: string;
  checked?: boolean;
};

export type Recipe = {
  slug: string;
  title: string;
  description: string;
  duration: string;
  method: string;
  level: string;
  levelColor: string;
  levelIcon: string;
  image: string;
  rating: string;
  badge: string;
  time: string;
  toolsText: string;
  hero: string;
  diet: 'veg' | 'non-veg';
  ingredients: Ingredient[];
  steps: CookingStep[];
  prepTools: ChecklistItem[];
  prepIngredients: ChecklistItem[];
  helpMeChoose?: {
    match?: string | null;
    highlight?: boolean;
  };
};

export const recipes: Recipe[] = [
  {
    slug: "spicy-paneer-tikka",
    title: "Spicy Paneer Tikka Pizza",
    description:
      "A bold Indian fusion pizza topped with smoky paneer tikka, crunchy capsicum, and spicy makhani sauce. Designed for pan or tawa cooking at home.",
    duration: "40 min",
    method: "Pan / Tawa",
    level: "Intermediate",
    levelColor: "#ec1313",
    levelIcon: "trending-up",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkQVItzwVPyo1v3RKpuvwd-YNfkZfgVnDh8ezjevw0o7lOjCLWVbxY584YvDwRaEtjTZzRmtwyG1HArHbBBwa3eAWURTFPTnCeODAgU5xpM7epz3dYwAFJGyVTvbTTFy95vtwutSZ472QP3Q2s6gsvgaiL05T58XGtSHPAshXQC7fIGY7AkH-JIvCYEEVBk23tY5af5PwgRDpPVScXnMvN8f55JwvJf2twGDqqraiCKOqlVibPkvOJdAUOi3dHPpdWkjsmvPBokAd5",
    time: "40m",
    toolsText: "Pan / Tawa",
    hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4PMSpA1V9Z0UAi-L1YGGZALp3YY8E-qw0Nw_rHRl1vvWVbO1RcBNXg0TIMRI33AlNr0qXN-DG3UUWGHveWmtUhI4aAGe6xap4i-eY4INB57DlK-qix4AR4LdEIysWoAtpIqwST04NUlj3Duc_7k69uD5sA2qYN1gbX8Qm0U0vSuiho6EC0FPtIjZ21sifkjv-h4fn_aN1pjJI5CmUeTXnUd463_H_zcBUExhZO_WwD7r-YcEV89GqI5h_koI_msasH-JxS1jzsIsR",
    diet: "veg",
    rating: "4.9",
    badge: "Bestseller",

    prepTools: [
      {
        id: "tool-pan",
        label: "Heavy-bottom Pan / Tawa",
        icon: "local-fire-department",
      },
      { id: "tool-lid", label: "Lid for Covering", icon: "circle" },
      { id: "tool-spatula", label: "Spatula", icon: "restaurant" },
    ],
    prepIngredients: [
      {
        id: "ing-dough",
        label: "Pizza Dough Ball",
        subtitle: "200–250g, room temperature",
        icon: "grain",
      },
      {
        id: "ing-sauce",
        label: "Spicy Makhani / Pizza Sauce",
        subtitle: "3–4 tbsp",
        icon: "opacity",
      },
      {
        id: "ing-paneer",
        label: "Paneer Tikka",
        subtitle: "½ cup, lightly sautéed",
        icon: "square",
      },
      {
        id: "ing-cheese",
        label: "Mozzarella / Pizza Cheese",
        subtitle: "½ cup, grated",
        icon: "egg",
      },
    ],
    ingredients: [
      {
        name: "Paneer Tikka",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuB1bTOIIs5AJi0C8NBbb14LRTZPr7q9L9dZVubU9v8n4h-FpsLXbd5VDcoZw4UV5UJbAanL98xQlW1JIZ3CqnJtVh-7Yflc7UqlvvEY6B8EapOsAOv31I0svjPdakdardVSrMbViLxxJEcKIThHNoPqO247RuTTvPj3o2TWlpSk2eNh277koFRDDOCErQ94trsajDLuQsoAc485Hjbw18bK7fW6Co5SWMtTgOsqtm_jCdmvWdXKyOFawY4zEmRZm9LTKSowyq05oz9J",
      },
      {
        name: "Capsicum",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC-g03U3Yw0Guh29bYE5B00zicZu7E5TUbHIvV6FXyMt199Um0faicK65WB4WcHJVn3CwyZPRYbMjuCzdww3THrYLEoPLDIJeRNUup-DUfkuD9wYbaKfk1TNAD2zCIYmqcHMcEsgJxpKSmHhKJHVw4AP3BQJ0V_lhHho87sNJktaa2yBk4iSIH4sibP1KeWePxp1TwavzdBTE9wpn6IMrtAdFsX_BpGyENUilzTVZKIfbVFy4H4sTNLqrRxwsK1Hn0s-orrRKgyEdEx",
      },
      {
        name: "Mozzarella Cheese",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAhmwbs5sQoeoQMieknnG49Dys15CgRCUDYGaelQ4X8s9P-XLGC76lWnDpo63evkEHfWD6W6lIoDD60dAB_waDDwuyOVl4l-0t9Km9PfaLgKW7jdsfsV-nKjyAF2wDebfjqCV1ODC2K0wyCm_e_GOHKbQra044k2yWnqO29H-lYsOxY0pKZNXSRUpPXPJcaidyTzqQFLZh8QXNIm21YSRUaBXhMvMNPvNGygK2NCSyeHo3IkUclJXO1O_Z5-cW7XeAcqPFqtcouVord",
      },
    ],
    steps: [
      {
        id: "step-1",
        title: "Shape the Pizza Base",
        subtitle: "1 of 10",
        description:
          "Dust the surface with flour and gently stretch the dough into a medium-thick round base.",
        image: "https://images.unsplash.com/photo-1601924638867-3ec9c4a46f1b",
      },
      {
        id: "step-2",
        title: "Preheat the Pan",
        subtitle: "2 of 10",
        description:
          "Heat a heavy pan on low flame for 3–4 minutes with the lid on.",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        durationSeconds: 240,
      },
      {
        id: "step-3",
        title: "Spread the Sauce",
        subtitle: "3 of 10",
        description:
          "Spread spicy makhani sauce evenly, leaving a small border around the edges.",
        image: "https://images.unsplash.com/photo-1548365328-5b849e6f4f82",
      },
      {
        id: "step-4",
        title: "Add Paneer Tikka",
        subtitle: "4 of 10",
        description: "Evenly spread paneer tikka pieces across the base.",
        image: "https://images.unsplash.com/photo-1628294896516-344152572ee8",
      },
      {
        id: "step-5",
        title: "Add Vegetables",
        subtitle: "5 of 10",
        description: "Add sliced capsicum and onion evenly for crunch.",
        image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
      },
      {
        id: "step-6",
        title: "Add Cheese",
        subtitle: "6 of 10",
        description: "Sprinkle cheese evenly, covering all toppings.",
        image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94",
      },
      {
        id: "step-7",
        title: "Cook Covered",
        subtitle: "7 of 10",
        description:
          "Place pizza in the pan, cover with lid, and cook on low flame.",
        image: "https://images.unsplash.com/photo-1601924638867-3ec9c4a46f1b",
        durationSeconds: 300,
      },
      {
        id: "step-8",
        title: "Check the Base",
        subtitle: "8 of 10",
        description: "Lift slightly and ensure the bottom is crisp and cooked.",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      },
      {
        id: "step-9",
        title: "Final Cheese Melt",
        subtitle: "9 of 10",
        description: "Cook uncovered for extra cheese melt if needed.",
        image: "https://images.unsplash.com/photo-1548365328-5b849e6f4f82",
        durationSeconds: 120,
      },
      {
        id: "step-10",
        title: "Pizza Ready!",
        subtitle: "10 of 10",
        description: "Turn off the flame, slice, and serve hot.",
        image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
      },
    ],
  },
  {
    slug: 'cast-iron-margherita',
    title: 'Cast Iron Margherita',
    description:
      'A crispy, bubbly margherita made in a cast iron skillet. Great for beginners and perfect when you don’t have an oven.',
    duration: '30 min',
    method: 'Pan Method',
    level: 'Beginner',
    levelColor: '#2e9f50',
    levelIcon: 'school',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC7PWZzec5vPzdKJr6_XWkKhMkV2J6zVld5NfdqD9LTfl4N_wjutCmBKPQ5RWi2-SN7qa9xRUc0niUMcwd1t2HgtveXbFiXC7JA_1-YT4dqPug8Dkh4a9dKwReppvhnMwohEFJ5SNc99yAdndqEtsV1VoHILiQD5iicNRQfzVrmgLlLlaqFRy82ZKHg8kctAXGn7NARaguw0hM8r6YhbPEgF16OrgjUtPYlciqXqfG-ClJ5Eb5EI481UhjKaTTGYt3p0Zb0BQUUXrBH',
    time: '30 mins',
    toolsText: 'Cast Iron / Pan',
    diet: 'veg',
    rating: '4.8',
    badge: 'Top Match',
    hero:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC7PWZzec5vPzdKJr6_XWkKhMkV2J6zVld5NfdqD9LTfl4N_wjutCmBKPQ5RWi2-SN7qa9xRUc0niUMcwd1t2HgtveXbFiXC7JA_1-YT4dqPug8Dkh4a9dKwReppvhnMwohEFJ5SNc99yAdndqEtsV1VoHILiQD5iicNRQfzVrmgLlLlaqFRy82ZKHg8kctAXGn7NARaguw0hM8r6YhbPEgF16OrgjUtPYlciqXqfG-ClJ5Eb5EI481UhjKaTTGYt3p0Zb0BQUUXrBH',

    prepTools: [
      { id: 'tool-cast-iron', label: 'Cast Iron Skillet', icon: 'countertops' },
      { id: 'tool-lid', label: 'Lid (or foil cover)', icon: 'circle' },
      { id: 'tool-spatula', label: 'Spatula', icon: 'restaurant' },
    ],
    prepIngredients: [
      { id: 'ing-dough', label: 'Pizza Dough Ball', subtitle: '250g, room temp', icon: 'grain' },
      { id: 'ing-sauce', label: 'Tomato Sauce', subtitle: '3 tbsp', icon: 'opacity' },
      { id: 'ing-cheese', label: 'Mozzarella', subtitle: '½ cup', icon: 'egg' },
      { id: 'ing-basil', label: 'Fresh Basil', subtitle: '5-6 leaves', icon: 'eco' },
    ],
    ingredients: [
      { name: 'Tomato Sauce', image: 'https://images.unsplash.com/photo-1604908177522-0403d4e59dba' },
      { name: 'Mozzarella', image: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94' },
      { name: 'Basil', image: 'https://images.unsplash.com/photo-1524593166156-312f362cada0' },
      { name: 'Olive Oil', image: 'https://images.unsplash.com/photo-1514995669114-6081e934b693' },
    ],
    steps: [
      {
        id: 'step-1',
        title: 'Preheat the skillet',
        subtitle: '1 of 6',
        description: 'Heat the cast iron skillet on low for 3–4 minutes.',
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
        durationSeconds: 240,
      },
      {
        id: 'step-2',
        title: 'Oil + press the dough',
        subtitle: '2 of 6',
        description: 'Add a little oil, then press the dough into the skillet to form a base.',
        image: 'https://images.unsplash.com/photo-1601924638867-3ec9c4a46f1b',
      },
      {
        id: 'step-3',
        title: 'Add sauce & cheese',
        subtitle: '3 of 6',
        description: 'Spread sauce, add mozzarella, and a few basil leaves.',
        image: 'https://images.unsplash.com/photo-1548365328-5b849e6f4f82',
      },
      {
        id: 'step-4',
        title: 'Cook covered',
        subtitle: '4 of 6',
        description: 'Cover and cook on low until cheese melts and base sets.',
        image: 'https://images.unsplash.com/photo-1601924638867-3ec9c4a46f1b',
        durationSeconds: 420,
      },
      {
        id: 'step-5',
        title: 'Crisp the base',
        subtitle: '5 of 6',
        description: 'Uncover and cook 1–2 minutes for extra crispness.',
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
        durationSeconds: 120,
      },
      {
        id: 'step-6',
        title: 'Serve',
        subtitle: '6 of 6',
        description: 'Slice, add a drizzle of olive oil, and enjoy.',
        image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65',
      },
    ],
    helpMeChoose: { match: '98% Match', highlight: true },
  },
  {
    slug: 'spicy-diavola',
    title: 'Spicy Diavola',
    description:
      'A spicy, smoky pizza with salami-style heat and bold flavor. A fun step up if you’re comfortable in the kitchen.',
    duration: '45 min',
    method: 'Skilled Prep',
    level: 'Intermediate',
    levelColor: '#f59e0b',
    levelIcon: 'trending-up',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDt_cftsPzDE9_v11fNiNmCpQqLKOrwIxhWN4FxMlErrvi93YqaSa_AHn_zesDvUZhG9UqdiktGXqZIHxN2bQCwwZvs0MnJ1mU7qVcNDGh9FyoW60oypJRNcUtupSK2iuZW7ISrPDy63Sr6IfiG3rsmapKrnz0dpj3icv5Z32RH8-uDpMofq2F1D4I-Gc9yrhKU_t_L8U5kU9--5XC6GkKu0oTrpo8YtPN_XquKJe6IUEkQyPhkN_DxblS6i87gl5IjmxTqksc1JhYW',
    time: '45 mins',
    toolsText: 'Pan / Oven',
    diet: 'non-veg',
    rating: '4.7',
    badge: 'Spicy',
    hero:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDt_cftsPzDE9_v11fNiNmCpQqLKOrwIxhWN4FxMlErrvi93YqaSa_AHn_zesDvUZhG9UqdiktGXqZIHxN2bQCwwZvs0MnJ1mU7qVcNDGh9FyoW60oypJRNcUtupSK2iuZW7ISrPDy63Sr6IfiG3rsmapKrnz0dpj3icv5Z32RH8-uDpMofq2F1D4I-Gc9yrhKU_t_L8U5kU9--5XC6GkKu0oTrpo8YtPN_XquKJe6IUEkQyPhkN_DxblS6i87gl5IjmxTqksc1JhYW',

    prepTools: [
      { id: 'tool-pan', label: 'Heavy-bottom Pan', icon: 'countertops' },
      { id: 'tool-lid', label: 'Lid / cover', icon: 'circle' },
      { id: 'tool-knife', label: 'Knife & board', icon: 'hardware' },
    ],
    prepIngredients: [
      { id: 'ing-dough', label: 'Pizza Dough', subtitle: '250g', icon: 'grain' },
      { id: 'ing-sauce', label: 'Tomato Sauce', subtitle: '3 tbsp', icon: 'opacity' },
      { id: 'ing-cheese', label: 'Mozzarella', subtitle: '½ cup', icon: 'egg' },
      { id: 'ing-pepperoni', label: 'Pepperoni / Salami', subtitle: 'as you like', icon: 'restaurant' },
      { id: 'ing-chilli', label: 'Chilli flakes', subtitle: 'to taste', icon: 'local-fire-department' },
    ],
    ingredients: [
      { name: 'Mozzarella', image: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94' },
      { name: 'Tomato Sauce', image: 'https://images.unsplash.com/photo-1604908177522-0403d4e59dba' },
      { name: 'Pepperoni / Salami', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe' },
      { name: 'Chilli Flakes', image: 'https://images.unsplash.com/photo-1615485925792-93b3bb5d7c71' },
      { name: 'Olives', image: 'https://images.unsplash.com/photo-1514995669114-6081e934b693' },
    ],
    steps: [
      {
        id: 'step-1',
        title: 'Prep toppings',
        subtitle: '1 of 6',
        description: 'Slice toppings and keep everything ready before you start cooking.',
        image: 'https://images.unsplash.com/photo-1548365328-5b849e6f4f82',
      },
      {
        id: 'step-2',
        title: 'Preheat',
        subtitle: '2 of 6',
        description: 'Warm your pan/oven setup depending on your method.',
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
        durationSeconds: 240,
      },
      {
        id: 'step-3',
        title: 'Sauce it',
        subtitle: '3 of 6',
        description: 'Spread sauce and a light layer of cheese.',
        image: 'https://images.unsplash.com/photo-1601924638867-3ec9c4a46f1b',
      },
      {
        id: 'step-4',
        title: 'Add spicy toppings',
        subtitle: '4 of 6',
        description: 'Add toppings + chilli flakes. Keep it balanced.',
        image: 'https://images.unsplash.com/photo-1548365328-5b849e6f4f82',
      },
      {
        id: 'step-5',
        title: 'Cook',
        subtitle: '5 of 6',
        description: 'Cook until cheese melts and edges brown.',
        image: 'https://images.unsplash.com/photo-1601924638867-3ec9c4a46f1b',
        durationSeconds: 420,
      },
      {
        id: 'step-6',
        title: 'Finish & serve',
        subtitle: '6 of 6',
        description: 'Rest 1 minute, slice, and enjoy.',
        image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65',
      },
    ],
  },
  {
    slug: 'deep-dish-deluxe',
    title: 'Deep Dish Deluxe',
    description:
      'A thick, cheesy deep dish style pizza with a longer cook. Best if you’re confident managing heat and timing.',
    duration: '60 min',
    method: 'High Temp',
    level: 'Advanced',
    levelColor: '#ef4444',
    levelIcon: 'bolt',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBuChZgHdQvpZf5N0YsxgQ2UxEU-3x3J5C12bHjoJEQzljyVKep2G7tkQUE9RMDqrY_V9nnK7KZ_C_m5eRRXJY2j4QHnaU7sxEKnTnDc08mCBmhKUfAJ_kQ64_42tDuLju7-ppxEU-Iayqb18p5fxxJWsGH3rMwr3RbZbm-fayVuL1FVosucc9p-zUdJjHN9ZL05WufY0i6UuOBl8db6ard7L10mqrlWZzBrAU9aGGruUY5Vd8jkMwqDsyM58tAV6fF4JooRLIUbsxJ',
    time: '60 mins',
    toolsText: 'High Temp',
    diet: 'veg',
    rating: '4.6',
    badge: 'Advanced',
    hero:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBuChZgHdQvpZf5N0YsxgQ2UxEU-3x3J5C12bHjoJEQzljyVKep2G7tkQUE9RMDqrY_V9nnK7KZ_C_m5eRRXJY2j4QHnaU7sxEKnTnDc08mCBmhKUfAJ_kQ64_42tDuLju7-ppxEU-Iayqb18p5fxxJWsGH3rMwr3RbZbm-fayVuL1FVosucc9p-zUdJjHN9ZL05WufY0i6UuOBl8db6ard7L10mqrlWZzBrAU9aGGruUY5Vd8jkMwqDsyM58tAV6fF4JooRLIUbsxJ',

    prepTools: [
      { id: 'tool-deep-pan', label: 'Deep Pan', icon: 'countertops' },
      { id: 'tool-lid', label: 'Lid / cover', icon: 'circle' },
      { id: 'tool-spatula', label: 'Spatula', icon: 'restaurant' },
    ],
    prepIngredients: [
      { id: 'ing-dough', label: 'Dough', subtitle: '300g', icon: 'grain' },
      { id: 'ing-sauce', label: 'Sauce', subtitle: '4 tbsp', icon: 'opacity' },
      { id: 'ing-cheese', label: 'Cheese', subtitle: '1 cup', icon: 'egg' },
      { id: 'ing-toppings', label: 'Toppings', subtitle: 'as you like', icon: 'restaurant' },
    ],
    ingredients: [
      { name: 'Cheese', image: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94' },
      { name: 'Tomato Sauce', image: 'https://images.unsplash.com/photo-1604908177522-0403d4e59dba' },
      { name: 'Mushrooms', image: 'https://images.unsplash.com/photo-1605477865164-6a8a6f7c5a66' },
      { name: 'Olives', image: 'https://images.unsplash.com/photo-1514995669114-6081e934b693' },
    ],
    steps: [
      {
        id: 'step-1',
        title: 'Prepare deep pan',
        subtitle: '1 of 7',
        description: 'Oil the pan well and preheat on low.',
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
        durationSeconds: 240,
      },
      {
        id: 'step-2',
        title: 'Press dough up the sides',
        subtitle: '2 of 7',
        description: 'Press dough to form a base and wall (deep dish style).',
        image: 'https://images.unsplash.com/photo-1601924638867-3ec9c4a46f1b',
      },
      {
        id: 'step-3',
        title: 'Layer cheese first',
        subtitle: '3 of 7',
        description: 'Add a layer of cheese to protect the crust from moisture.',
        image: 'https://images.unsplash.com/photo-1548365328-5b849e6f4f82',
      },
      {
        id: 'step-4',
        title: 'Add toppings + sauce',
        subtitle: '4 of 7',
        description: 'Add toppings and spoon sauce on top.',
        image: 'https://images.unsplash.com/photo-1548365328-5b849e6f4f82',
      },
      {
        id: 'step-5',
        title: 'Cook covered',
        subtitle: '5 of 7',
        description: 'Cook on low-medium heat until the base is set.',
        image: 'https://images.unsplash.com/photo-1601924638867-3ec9c4a46f1b',
        durationSeconds: 900,
      },
      {
        id: 'step-6',
        title: 'High heat finish',
        subtitle: '6 of 7',
        description: 'Finish on higher heat briefly to crisp the bottom.',
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
        durationSeconds: 180,
      },
      {
        id: 'step-7',
        title: 'Rest & serve',
        subtitle: '7 of 7',
        description: 'Rest 2 minutes, slice carefully, and serve.',
        image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65',
      },
    ],
  },
  {
    slug: "tawa-margherita",
    title: "Tawa Margherita Pizza",
    description:
      "A classic margherita pizza cooked on a tawa with tomato sauce, mozzarella cheese, and fragrant basil. Simple, quick, and perfect for beginners.",
    duration: "20 min",
    method: "Tawa",
    level: "Beginner",
    levelColor: "#2e9f50",
    levelIcon: "sentiment-satisfied",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBfhySYWknzJOTlILR9no8NB55YP_A73qKE03t1i0ZZ_40T7ZZDEmRWJ3qq3JwKbsF7Rz3NPaOJ1BoEo7MK-ul4F63AWQx6L6soSZDJAUOkjT24w9_H-k4WwxKNqszCiVJr9jVgrI8PClGaFCHzljpXtq3QfupEIBQp4IFym9XC9gsIqnICtgmUVnQ-avbMDon29UnOkl5z-PYwB0WeuJmX1zuBB-mepHlz0A0beo6Bg3M2uAG3epH0unVtn5FMXWCDXYj2UPqa9tmU",
    time: "20m",
    toolsText: "Tawa",
    diet: "veg",
    rating: "4.6",
    badge: "Beginner",
    hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfhySYWknzJOTlILR9no8NB55YP_A73qKE03t1i0ZZ_40T7ZZDEmRWJ3qq3JwKbsF7Rz3NPaOJ1BoEo7MK-ul4F63AWQx6L6soSZDJAUOkjT24w9_H-k4WwxKNqszCiVJr9jVgrI8PClGaFCHzljpXtq3QfupEIBQp4IFym9XC9gsIqnICtgmUVnQ-avbMDon29UnOkl5z-PYwB0WeuJmX1zuBB-mepHlz0A0beo6Bg3M2uAG3epH0unVtn5FMXWCDXYj2UPqa9tmU",

    prepTools: [
      {
        id: "tool-tawa",
        label: "Heavy Tawa",
        icon: "local-fire-department",
      },
      {
        id: "tool-lid",
        label: "Lid for Covering",
        icon: "circle",
      },
      {
        id: "tool-spatula",
        label: "Spatula",
        icon: "restaurant",
      },
    ],

    prepIngredients: [
      {
        id: "ing-dough",
        label: "Pizza Dough Ball",
        subtitle: "200g, room temperature",
        icon: "grain",
      },
      {
        id: "ing-sauce",
        label: "Tomato Pizza Sauce",
        subtitle: "2–3 tbsp",
        icon: "opacity",
      },
      {
        id: "ing-cheese",
        label: "Mozzarella Cheese",
        subtitle: "½ cup, grated",
        icon: "egg",
      },
      {
        id: "ing-basil",
        label: "Fresh Basil Leaves",
        subtitle: "4–6 leaves",
        icon: "eco",
      },
    ],

    ingredients: [
      {
        name: "Pizza Dough",
        image: "https://images.unsplash.com/photo-1601924582975-7f2c8dc9c1d4",
      },
      {
        name: "Tomato Sauce",
        image: "https://images.unsplash.com/photo-1604908177522-0403d4e59dba",
      },
      {
        name: "Mozzarella Cheese",
        image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94",
      },
      {
        name: "Fresh Basil",
        image: "https://images.unsplash.com/photo-1524593166156-312f362cada0",
      },
    ],

    steps: [
      {
        id: "step-1",
        title: "Prepare the Dough",
        subtitle: "1 of 7",
        description:
          "Lightly dust the surface with flour and stretch the dough into a medium-thick round base.",
        image: "https://images.unsplash.com/photo-1601924638867-3ec9c4a46f1b",
      },
      {
        id: "step-2",
        title: "Preheat the Tawa",
        subtitle: "2 of 7",
        description: "Heat a heavy tawa on low flame for 3 minutes.",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        durationSeconds: 180,
      },
      {
        id: "step-3",
        title: "Add Sauce",
        subtitle: "3 of 7",
        description:
          "Spread tomato sauce evenly over the base, leaving a small border.",
        image: "https://images.unsplash.com/photo-1548365328-5b849e6f4f82",
      },
      {
        id: "step-4",
        title: "Add Cheese",
        subtitle: "4 of 7",
        description: "Sprinkle mozzarella evenly across the pizza.",
        image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94",
      },
      {
        id: "step-5",
        title: "Cook Covered",
        subtitle: "5 of 7",
        description:
          "Place the pizza on the tawa, cover with a lid, and cook on low flame.",
        image: "https://images.unsplash.com/photo-1601924638867-3ec9c4a46f1b",
        durationSeconds: 300,
      },
      {
        id: "step-6",
        title: "Add Basil",
        subtitle: "6 of 7",
        description: "Once cheese melts, add fresh basil leaves on top.",
        image: "https://images.unsplash.com/photo-1524593166156-312f362cada0",
      },
      {
        id: "step-7",
        title: "Serve Hot",
        subtitle: "7 of 7",
        description:
          "Turn off the flame, slice, and enjoy your classic margherita.",
        image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
      },
    ],
  },
  {
    slug: "no-yeast-veggie-delight",
    title: "No-Yeast Veggie Delight Pizza",
    description:
      "A quick and easy no-yeast veggie pizza loaded with fresh vegetables, cooked on a pan without an oven. Perfect for instant pizza cravings.",
    duration: "30 min",
    method: "No Oven",
    level: "Beginner",
    levelColor: "#2e9f50",
    levelIcon: "sentiment-satisfied",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBOo8gL0-AKrXh98anROLsGIZdtdKcZTDmcJzG3O6vIPWizglmN8kzowGHdqBvURjz112d_RqY3Kgu9E30mVG16t8scSx2IyKYOeZbyZwxHAVWNM6WpZue08vzbtMS5v9PxV4l9heMGn57aDCsQlwc-ZpgOtRN6eDkB1c3aCfcs24CKpdgEXVKWErDuhfK7W3_Nvf4Tn3Mu2AJn7gr9fEwWmWqqDUtU3IcA2tPAj0rIcCAacDXRWi8JC_-I-OKxtXYMjVC9lwOyCIAb",
    time: "30m",
    toolsText: "No Oven",
    diet: "veg",
    rating: "4.4",
    badge: "Beginner",
    hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOo8gL0-AKrXh98anROLsGIZdtdKcZTDmcJzG3O6vIPWizglmN8kzowGHdqBvURjz112d_RqY3Kgu9E30mVG16t8scSx2IyKYOeZbyZwxHAVWNM6WpZue08vzbtMS5v9PxV4l9heMGn57aDCsQlwc-ZpgOtRN6eDkB1c3aCfcs24CKpdgEXVKWErDuhfK7W3_Nvf4Tn3Mu2AJn7gr9fEwWmWqqDUtU3IcA2tPAj0rIcCAacDXRWi8JC_-I-OKxtXYMjVC9lwOyCIAb",

    prepTools: [
      {
        id: "tool-pan",
        label: "Heavy-bottom Pan / Tawa",
        icon: "local-fire-department",
      },
      {
        id: "tool-lid",
        label: "Lid for Covering",
        icon: "circle",
      },
      {
        id: "tool-bowl",
        label: "Mixing Bowl",
        icon: "soup-kitchen",
      },
      {
        id: "tool-spatula",
        label: "Spatula",
        icon: "restaurant",
      },
    ],

    prepIngredients: [
      {
        id: "ing-flour",
        label: "All-purpose Flour",
        subtitle: "1 cup",
        icon: "grain",
      },
      {
        id: "ing-baking-powder",
        label: "Baking Powder",
        subtitle: "1 tsp",
        icon: "science",
      },
      {
        id: "ing-curd",
        label: "Curd / Yogurt",
        subtitle: "½ cup",
        icon: "opacity",
      },
      {
        id: "ing-sauce",
        label: "Pizza / Tomato Sauce",
        subtitle: "3 tbsp",
        icon: "opacity",
      },
      {
        id: "ing-cheese",
        label: "Mozzarella Cheese",
        subtitle: "½ cup, grated",
        icon: "egg",
      },
    ],

    ingredients: [
      {
        name: "Capsicum",
        image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
      },
      {
        name: "Onion",
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784f0c",
      },
      {
        name: "Sweet Corn",
        image: "https://images.unsplash.com/photo-1604908177522-0403d4e59dba",
      },
      {
        name: "Mozzarella Cheese",
        image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94",
      },
    ],

    steps: [
      {
        id: "step-1",
        title: "Prepare No-Yeast Dough",
        subtitle: "1 of 8",
        description:
          "In a bowl, mix flour, baking powder, salt, curd, and water to form a soft dough.",
        image: "https://images.unsplash.com/photo-1601924582975-7f2c8dc9c1d4",
      },
      {
        id: "step-2",
        title: "Rest the Dough",
        subtitle: "2 of 8",
        description: "Cover and rest the dough for 10 minutes.",
        image: "https://images.unsplash.com/photo-1601924638867-3ec9c4a46f1b",
        durationSeconds: 600,
      },
      {
        id: "step-3",
        title: "Shape the Base",
        subtitle: "3 of 8",
        description: "Roll the dough into a medium-thick round base.",
        image: "https://images.unsplash.com/photo-1601924638867-3ec9c4a46f1b",
      },
      {
        id: "step-4",
        title: "Pre-cook the Base",
        subtitle: "4 of 8",
        description:
          "Place the base on a hot tawa and cook lightly on one side.",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        durationSeconds: 120,
      },
      {
        id: "step-5",
        title: "Add Sauce & Toppings",
        subtitle: "5 of 8",
        description:
          "Flip the base, spread sauce, add veggies, and sprinkle cheese.",
        image: "https://images.unsplash.com/photo-1548365328-5b849e6f4f82",
      },
      {
        id: "step-6",
        title: "Cook Covered",
        subtitle: "6 of 8",
        description: "Cover with lid and cook on low flame until cheese melts.",
        image: "https://images.unsplash.com/photo-1601924638867-3ec9c4a46f1b",
        durationSeconds: 420,
      },
      {
        id: "step-7",
        title: "Check Base Crispness",
        subtitle: "7 of 8",
        description: "Lift slightly to ensure the base is cooked and crisp.",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      },
      {
        id: "step-8",
        title: "Serve Hot",
        subtitle: "8 of 8",
        description:
          "Turn off the flame, slice, and enjoy your veggie delight pizza.",
        image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
      },
    ],
  },
];

function assertNonEmptyString(value: unknown, label: string) {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`recipes validation: "${label}" must be a non-empty string`);
  }
}

function assertNonEmptyArray(value: unknown, label: string) {
  if (!Array.isArray(value) || value.length === 0) {
    throw new Error(`recipes validation: "${label}" must be a non-empty array`);
  }
}

function assertUnique(items: string[], label: string) {
  const set = new Set(items);
  if (set.size !== items.length) {
    throw new Error(`recipes validation: "${label}" contains duplicates`);
  }
}

function containsEggText(value: string) {
  // "egg" should not match "veggie" etc.
  return /\begg(s)?\b/i.test(value);
}

function validateRecipes(all: Recipe[]) {
  assertNonEmptyArray(all, 'recipes');
  assertUnique(
    all.map((r) => r.slug),
    'recipes[].slug'
  );

  for (const r of all) {
    // Core display + routing
    assertNonEmptyString(r.slug, `recipe(${r.slug}).slug`);
    assertNonEmptyString(r.title, `recipe(${r.slug}).title`);
    assertNonEmptyString(r.description, `recipe(${r.slug}).description`);
    assertNonEmptyString(r.duration, `recipe(${r.slug}).duration`);
    assertNonEmptyString(r.time, `recipe(${r.slug}).time`);
    assertNonEmptyString(r.method, `recipe(${r.slug}).method`);
    assertNonEmptyString(r.level, `recipe(${r.slug}).level`);
    assertNonEmptyString(r.levelColor, `recipe(${r.slug}).levelColor`);
    assertNonEmptyString(r.levelIcon, `recipe(${r.slug}).levelIcon`);
    assertNonEmptyString(r.image, `recipe(${r.slug}).image`);
    assertNonEmptyString(r.hero, `recipe(${r.slug}).hero`);
    assertNonEmptyString(r.rating, `recipe(${r.slug}).rating`);
    assertNonEmptyString(r.badge, `recipe(${r.slug}).badge`);
    assertNonEmptyString(r.toolsText, `recipe(${r.slug}).toolsText`);
    if (r.diet !== 'veg' && r.diet !== 'non-veg') {
      throw new Error(`recipes validation: recipe(${r.slug}).diet must be "veg" or "non-veg"`);
    }

    // Arrays used across flows
    assertNonEmptyArray(r.ingredients, `recipe(${r.slug}).ingredients`);
    assertNonEmptyArray(r.steps, `recipe(${r.slug}).steps`);
    assertNonEmptyArray(r.prepTools, `recipe(${r.slug}).prepTools`);
    assertNonEmptyArray(r.prepIngredients, `recipe(${r.slug}).prepIngredients`);

    // Ingredients
    const hasEgg =
      r.ingredients.some((ing) => containsEggText(ing.name)) ||
      r.prepIngredients.some((i) => containsEggText(i.label));
    if (hasEgg && r.diet === 'veg') {
      throw new Error(`recipes validation: recipe(${r.slug}) contains egg, so diet must be "non-veg"`);
    }

    for (const ing of r.ingredients) {
      assertNonEmptyString(ing.name, `recipe(${r.slug}).ingredients[].name`);
      assertNonEmptyString(ing.image, `recipe(${r.slug}).ingredients[].image`);
    }

    // Steps
    assertUnique(
      r.steps.map((s) => s.id),
      `recipe(${r.slug}).steps[].id`
    );
    for (const s of r.steps) {
      assertNonEmptyString(s.id, `recipe(${r.slug}).steps[].id`);
      assertNonEmptyString(s.title, `recipe(${r.slug}).steps[].title`);
      assertNonEmptyString(s.subtitle, `recipe(${r.slug}).steps[].subtitle`);
      assertNonEmptyString(s.description, `recipe(${r.slug}).steps[].description`);
      assertNonEmptyString(s.image, `recipe(${r.slug}).steps[].image`);
      if (s.durationSeconds != null) {
        if (typeof s.durationSeconds !== 'number' || s.durationSeconds <= 0) {
          throw new Error(
            `recipes validation: recipe(${r.slug}).steps(${s.id}).durationSeconds must be a positive number`
          );
        }
      }
    }

    // Prep items
    assertUnique(
      r.prepTools.map((t) => t.id),
      `recipe(${r.slug}).prepTools[].id`
    );
    assertUnique(
      r.prepIngredients.map((i) => i.id),
      `recipe(${r.slug}).prepIngredients[].id`
    );
    for (const t of r.prepTools) {
      assertNonEmptyString(t.id, `recipe(${r.slug}).prepTools[].id`);
      assertNonEmptyString(t.label, `recipe(${r.slug}).prepTools[].label`);
      assertNonEmptyString(t.icon, `recipe(${r.slug}).prepTools[].icon`);
    }
    for (const i of r.prepIngredients) {
      assertNonEmptyString(i.id, `recipe(${r.slug}).prepIngredients[].id`);
      assertNonEmptyString(i.label, `recipe(${r.slug}).prepIngredients[].label`);
      assertNonEmptyString(i.icon, `recipe(${r.slug}).prepIngredients[].icon`);
      if (i.subtitle != null) assertNonEmptyString(i.subtitle, `recipe(${r.slug}).prepIngredients[].subtitle`);
    }
  }
}

// Catch broken/partial recipe objects early during development.
// (No overhead in production builds.)
// eslint-disable-next-line no-undef
if (typeof __DEV__ !== 'undefined' && __DEV__) {
  validateRecipes(recipes);
}

export const recipeBySlug = Object.fromEntries(
  recipes.map((recipe) => [recipe.slug, recipe])
) as Record<string, Recipe>;

export const defaultRecipeSlug = "spicy-paneer-tikka";
