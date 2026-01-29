export type LocalizedString = {
  en: string;
  hi: string;
};

export type CookingStep = {
  id: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  description: LocalizedString;
  image: string;
  durationSeconds?: number;
};

export type Ingredient = {
  name: LocalizedString;
  image: string;
};

export type ChecklistItem = {
  id: string;
  label: LocalizedString;
  subtitle?: LocalizedString;
  icon: string;
  checked?: boolean;
};

export type Recipe = {
  slug: string;
  title: LocalizedString;
  description: LocalizedString;
  duration: LocalizedString;
  method: LocalizedString;
  level: LocalizedString;
  levelColor: string;
  levelIcon: string;
  image: string;
  rating: string;
  badge: LocalizedString;
  time: LocalizedString;
  toolsText: LocalizedString;
  hero: string;
  diet: "veg" | "non-veg";
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
    title: {
      en: "Spicy Paneer Tikka Pizza",
      hi: "स्पाइसी पनीर टिक्का पिज़्ज़ा",
    },
    description: {
      en: "A bold Indian fusion pizza topped with smoky paneer tikka, crunchy capsicum, and spicy makhani sauce. Designed for pan or tawa cooking at home.",
      hi: "धुएँदार पनीर टिक्का, कुरकुरी शिमला मिर्च और स्पाइसी मखनी सॉस के साथ एक बेहतरीन इंडियन फ्यूज़न पिज़्ज़ा। घर पर पैन/तवा पर बनाने के लिए परफेक्ट।",
    },
    duration: { en: "40 min", hi: "40 मिनट" },
    method: { en: "Pan / Tawa", hi: "पैन / तवा" },
    level: { en: "Intermediate", hi: "मध्यम" },
    levelColor: "#ec1313",
    levelIcon: "trending-up",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkQVItzwVPyo1v3RKpuvwd-YNfkZfgVnDh8ezjevw0o7lOjCLWVbxY584YvDwRaEtjTZzRmtwyG1HArHbBBwa3eAWURTFPTnCeODAgU5xpM7epz3dYwAFJGyVTvbTTFy95vtwutSZ472QP3Q2s6gsvgaiL05T58XGtSHPAshXQC7fIGY7AkH-JIvCYEEVBk23tY5af5PwgRDpPVScXnMvN8f55JwvJf2twGDqqraiCKOqlVibPkvOJdAUOi3dHPpdWkjsmvPBokAd5",
    time: { en: "40m", hi: "40 मिनट" },
    toolsText: { en: "Pan / Tawa", hi: "पैन / तवा" },
    hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4PMSpA1V9Z0UAi-L1YGGZALp3YY8E-qw0Nw_rHRl1vvWVbO1RcBNXg0TIMRI33AlNr0qXN-DG3UUWGHveWmtUhI4aAGe6xap4i-eY4INB57DlK-qix4AR4LdEIysWoAtpIqwST04NUlj3Duc_7k69uD5sA2qYN1gbX8Qm0U0vSuiho6EC0FPtIjZ21sifkjv-h4fn_aN1pjJI5CmUeTXnUd463_H_zcBUExhZO_WwD7r-YcEV89GqI5h_koI_msasH-JxS1jzsIsR",
    diet: "veg",
    rating: "4.9",
    badge: { en: "Bestseller", hi: "बेस्टसेलर" },

    prepTools: [
      {
        id: "tool-pan",
        label: { en: "Heavy-bottom Pan / Tawa", hi: "हेवी-बॉटम पैन / तवा" },
        icon: "local-fire-department",
      },
      {
        id: "tool-lid",
        label: { en: "Lid for Covering", hi: "ढक्कन" },
        icon: "circle",
      },
      {
        id: "tool-spatula",
        label: { en: "Spatula", hi: "स्पैचुला" },
        icon: "restaurant",
      },
    ],
    prepIngredients: [
      {
        id: "ing-dough",
        label: { en: "Pizza Dough Ball", hi: "पिज़्ज़ा डो बॉल" },
        subtitle: {
          en: "200–250g, room temperature",
          hi: "200–250 ग्राम, रूम टेम्परेचर",
        },
        icon: "grain",
      },
      {
        id: "ing-sauce",
        label: {
          en: "Spicy Makhani / Pizza Sauce",
          hi: "स्पाइसी मखनी / पिज़्ज़ा सॉस",
        },
        subtitle: { en: "3–4 tbsp", hi: "3–4 टेबलस्पून" },
        icon: "opacity",
      },
      {
        id: "ing-paneer",
        label: { en: "Paneer Tikka", hi: "पनीर टिक्का" },
        subtitle: { en: "½ cup, lightly sautéed", hi: "½ कप, हल्का भुना हुआ" },
        icon: "square",
      },
      {
        id: "ing-cheese",
        label: {
          en: "Mozzarella / Pizza Cheese",
          hi: "मोज़रेला / पिज़्ज़ा चीज़",
        },
        subtitle: { en: "½ cup, grated", hi: "½ कप, कद्दूकस" },
        icon: "egg",
      },
    ],
    ingredients: [
      {
        name: { en: "Paneer Tikka", hi: "पनीर टिक्का" },
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuB1bTOIIs5AJi0C8NBbb14LRTZPr7q9L9dZVubU9v8n4h-FpsLXbd5VDcoZw4UV5UJbAanL98xQlW1JIZ3CqnJtVh-7Yflc7UqlvvEY6B8EapOsAOv31I0svjPdakdardVSrMbViLxxJEcKIThHNoPqO247RuTTvPj3o2TWlpSk2eNh277koFRDDOCErQ94trsajDLuQsoAc485Hjbw18bK7fW6Co5SWMtTgOsqtm_jCdmvWdXKyOFawY4zEmRZm9LTKSowyq05oz9J",
      },
      {
        name: { en: "Capsicum", hi: "शिमला मिर्च" },
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC-g03U3Yw0Guh29bYE5B00zicZu7E5TUbHIvV6FXyMt199Um0faicK65WB4WcHJVn3CwyZPRYbMjuCzdww3THrYLEoPLDIJeRNUup-DUfkuD9wYbaKfk1TNAD2zCIYmqcHMcEsgJxpKSmHhKJHVw4AP3BQJ0V_lhHho87sNJktaa2yBk4iSIH4sibP1KeWePxp1TwavzdBTE9wpn6IMrtAdFsX_BpGyENUilzTVZKIfbVFy4H4sTNLqrRxwsK1Hn0s-orrRKgyEdEx",
      },
      {
        name: { en: "Mozzarella Cheese", hi: "मोज़रेला चीज़" },
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAhmwbs5sQoeoQMieknnG49Dys15CgRCUDYGaelQ4X8s9P-XLGC76lWnDpo63evkEHfWD6W6lIoDD60dAB_waDDwuyOVl4l-0t9Km9PfaLgKW7jdsfsV-nKjyAF2wDebfjqCV1ODC2K0wyCm_e_GOHKbQra044k2yWnqO29H-lYsOxY0pKZNXSRUpPXPJcaidyTzqQFLZh8QXNIm21YSRUaBXhMvMNPvNGygK2NCSyeHo3IkUclJXO1O_Z5-cW7XeAcqPFqtcouVord",
      },
    ],
    steps: [
      {
        id: "step-1",
        title: { en: "Shape the Pizza Base", hi: "पिज़्ज़ा बेस बनाएं" },
        subtitle: { en: "1 of 10", hi: "10 में से 1" },
        description: {
          en: "Dust the surface with flour and gently stretch the dough into a medium-thick round base.",
          hi: "सतह पर थोड़ा आटा छिड़कें और डो को धीरे-धीरे खींचकर मध्यम मोटाई का गोल बेस बनाएं।",
        },
        image: "https://images.unsplash.com/photo-1601924638867-3ec9c4a46f1b",
      },
      {
        id: "step-2",
        title: { en: "Preheat the Pan", hi: "पैन गरम करें" },
        subtitle: { en: "2 of 10", hi: "10 में से 2" },
        description: {
          en: "Heat a heavy pan on low flame for 3–4 minutes with the lid on.",
          hi: "हेवी पैन को धीमी आंच पर ढक्कन लगाकर 3–4 मिनट गरम करें।",
        },
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        // Timer Testing
        durationSeconds: 240,
      },
      {
        id: "step-3",
        title: { en: "Spread the Sauce", hi: "सॉस फैलाएं" },
        subtitle: { en: "3 of 10", hi: "10 में से 3" },
        description: {
          en: "Spread spicy makhani sauce evenly, leaving a small border around the edges.",
          hi: "स्पाइसी मखनी सॉस को समान रूप से फैलाएं, किनारों पर थोड़ा खाली हिस्सा छोड़ें।",
        },
        image: "https://images.unsplash.com/photo-1548365328-5b849e6f4f82",
      },
      {
        id: "step-4",
        title: { en: "Add Paneer Tikka", hi: "पनीर टिक्का डालें" },
        subtitle: { en: "4 of 10", hi: "10 में से 4" },
        description: {
          en: "Evenly spread paneer tikka pieces across the base.",
          hi: "बेस पर पनीर टिक्का के टुकड़े समान रूप से फैलाएं।",
        },
        image: "https://images.unsplash.com/photo-1628294896516-344152572ee8",
      },
      {
        id: "step-5",
        title: { en: "Add Vegetables", hi: "सब्ज़ियाँ डालें" },
        subtitle: { en: "5 of 10", hi: "10 में से 5" },
        description: {
          en: "Add sliced capsicum and onion evenly for crunch.",
          hi: "क्रंच के लिए कटी हुई शिमला मिर्च और प्याज़ समान रूप से डालें।",
        },
        image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
      },
      {
        id: "step-6",
        title: { en: "Add Cheese", hi: "चीज़ डालें" },
        subtitle: { en: "6 of 10", hi: "10 में से 6" },
        description: {
          en: "Sprinkle cheese evenly, covering all toppings.",
          hi: "सभी टॉपिंग्स को ढकते हुए चीज़ समान रूप से छिड़कें।",
        },
        image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94",
      },
      {
        id: "step-7",
        title: { en: "Cook Covered", hi: "ढककर पकाएं" },
        subtitle: { en: "7 of 10", hi: "10 में से 7" },
        description: {
          en: "Place pizza in the pan, cover with lid, and cook on low flame.",
          hi: "पिज़्ज़ा को पैन में रखें, ढक्कन लगाएं और धीमी आंच पर पकाएं।",
        },
        image: "https://images.unsplash.com/photo-1601924638867-3ec9c4a46f1b",
        durationSeconds: 300,
      },
      {
        id: "step-8",
        title: { en: "Check the Base", hi: "बेस चेक करें" },
        subtitle: { en: "8 of 10", hi: "10 में से 8" },
        description: {
          en: "Lift slightly and ensure the bottom is crisp and cooked.",
          hi: "हल्का उठाकर देखें कि नीचे का हिस्सा कुरकुरा और पका है।",
        },
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      },
      {
        id: "step-9",
        title: { en: "Final Cheese Melt", hi: "अंत में चीज़ पिघलाएं" },
        subtitle: { en: "9 of 10", hi: "10 में से 9" },
        description: {
          en: "Cook uncovered for extra cheese melt if needed.",
          hi: "जरूरत हो तो बिना ढक्कन के थोड़ा और पकाएं ताकि चीज़ अच्छे से पिघले।",
        },
        image: "https://images.unsplash.com/photo-1548365328-5b849e6f4f82",
        durationSeconds: 120,
      },
      {
        id: "step-10",
        title: { en: "Pizza Ready!", hi: "पिज़्ज़ा तैयार!" },
        subtitle: { en: "10 of 10", hi: "10 में से 10" },
        description: {
          en: "Turn off the flame, slice, and serve hot.",
          hi: "आंच बंद करें, स्लाइस करें और गरमागरम सर्व करें।",
        },
        image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
      },
    ],
  },
  {
    slug: "cast-iron-margherita",
    title: { en: "Cast Iron Margherita", hi: "कास्ट आयरन मार्घेरिटा" },
    description: {
      en: "A crispy, bubbly margherita made in a cast iron skillet. Great for beginners and perfect when you don’t have an oven.",
      hi: "कास्ट आयरन स्किलेट में बना कुरकुरा, बबल वाला मार्घेरिटा। शुरुआती लोगों के लिए बढ़िया और बिना ओवन के भी परफेक्ट।",
    },
    duration: { en: "30 min", hi: "30 मिनट" },
    method: { en: "Pan Method", hi: "पैन मेथड" },
    level: { en: "Beginner", hi: "शुरुआती" },
    levelColor: "#2e9f50",
    levelIcon: "school",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC7PWZzec5vPzdKJr6_XWkKhMkV2J6zVld5NfdqD9LTfl4N_wjutCmBKPQ5RWi2-SN7qa9xRUc0niUMcwd1t2HgtveXbFiXC7JA_1-YT4dqPug8Dkh4a9dKwReppvhnMwohEFJ5SNc99yAdndqEtsV1VoHILiQD5iicNRQfzVrmgLlLlaqFRy82ZKHg8kctAXGn7NARaguw0hM8r6YhbPEgF16OrgjUtPYlciqXqfG-ClJ5Eb5EI481UhjKaTTGYt3p0Zb0BQUUXrBH",
    time: { en: "30 mins", hi: "30 मिनट" },
    toolsText: { en: "Cast Iron / Pan", hi: "कास्ट आयरन / पैन" },
    diet: "veg",
    rating: "4.8",
    badge: { en: "Top Match", hi: "टॉप मैच" },
    hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7PWZzec5vPzdKJr6_XWkKhMkV2J6zVld5NfdqD9LTfl4N_wjutCmBKPQ5RWi2-SN7qa9xRUc0niUMcwd1t2HgtveXbFiXC7JA_1-YT4dqPug8Dkh4a9dKwReppvhnMwohEFJ5SNc99yAdndqEtsV1VoHILiQD5iicNRQfzVrmgLlLlaqFRy82ZKHg8kctAXGn7NARaguw0hM8r6YhbPEgF16OrgjUtPYlciqXqfG-ClJ5Eb5EI481UhjKaTTGYt3p0Zb0BQUUXrBH",

    prepTools: [
      {
        id: "tool-cast-iron",
        label: { en: "Cast Iron Skillet", hi: "कास्ट आयरन स्किलेट" },
        icon: "countertops",
      },
      {
        id: "tool-lid",
        label: { en: "Lid (or foil cover)", hi: "ढक्कन (या फॉयल)" },
        icon: "circle",
      },
      {
        id: "tool-spatula",
        label: { en: "Spatula", hi: "स्पैचुला" },
        icon: "restaurant",
      },
    ],
    prepIngredients: [
      {
        id: "ing-dough",
        label: { en: "Pizza Dough Ball", hi: "पिज़्ज़ा डो बॉल" },
        subtitle: { en: "250g, room temp", hi: "250 ग्राम, रूम टेम्परेचर" },
        icon: "grain",
      },
      {
        id: "ing-sauce",
        label: { en: "Tomato Sauce", hi: "टमाटर सॉस" },
        subtitle: { en: "3 tbsp", hi: "3 टेबलस्पून" },
        icon: "opacity",
      },
      {
        id: "ing-cheese",
        label: { en: "Mozzarella", hi: "मोज़रेला" },
        subtitle: { en: "½ cup", hi: "½ कप" },
        icon: "egg",
      },
      {
        id: "ing-basil",
        label: { en: "Fresh Basil", hi: "ताज़ा तुलसी" },
        subtitle: { en: "5-6 leaves", hi: "5–6 पत्ते" },
        icon: "eco",
      },
    ],
    ingredients: [
      {
        name: { en: "Tomato Sauce", hi: "टमाटर सॉस" },
        image: "https://images.unsplash.com/photo-1604908177522-0403d4e59dba",
      },
      {
        name: { en: "Mozzarella", hi: "मोज़रेला" },
        image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94",
      },
      {
        name: { en: "Basil", hi: "तुलसी" },
        image: "https://images.unsplash.com/photo-1524593166156-312f362cada0",
      },
      {
        name: { en: "Olive Oil", hi: "ऑलिव ऑयल" },
        image: "https://images.unsplash.com/photo-1514995669114-6081e934b693",
      },
    ],
    steps: [
      {
        id: "step-1",
        title: { en: "Preheat the skillet", hi: "स्किलेट गरम करें" },
        subtitle: { en: "1 of 6", hi: "6 में से 1" },
        description: {
          en: "Heat the cast iron skillet on low for 3–4 minutes.",
          hi: "कास्ट आयरन स्किलेट को धीमी आंच पर 3–4 मिनट गरम करें।",
        },
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        durationSeconds: 240,
      },
      {
        id: "step-2",
        title: { en: "Oil + press the dough", hi: "तेल लगाएँ और डो दबाएँ" },
        subtitle: { en: "2 of 6", hi: "6 में से 2" },
        description: {
          en: "Add a little oil, then press the dough into the skillet to form a base.",
          hi: "थोड़ा तेल डालें, फिर डो को स्किलेट में दबाकर बेस बनाएं।",
        },
        image: "https://images.unsplash.com/photo-1601924638867-3ec9c4a46f1b",
      },
      {
        id: "step-3",
        title: { en: "Add sauce & cheese", hi: "सॉस और चीज़ डालें" },
        subtitle: { en: "3 of 6", hi: "6 में से 3" },
        description: {
          en: "Spread sauce, add mozzarella, and a few basil leaves.",
          hi: "सॉस फैलाएं, मोज़रेला डालें और कुछ तुलसी के पत्ते रखें।",
        },
        image: "https://images.unsplash.com/photo-1548365328-5b849e6f4f82",
      },
      {
        id: "step-4",
        title: { en: "Cook covered", hi: "ढककर पकाएँ" },
        subtitle: { en: "4 of 6", hi: "6 में से 4" },
        description: {
          en: "Cover and cook on low until cheese melts and base sets.",
          hi: "ढक्कन लगाकर धीमी आंच पर पकाएँ जब तक चीज़ पिघल जाए और बेस सेट हो जाए।",
        },
        image: "https://images.unsplash.com/photo-1601924638867-3ec9c4a46f1b",
        durationSeconds: 420,
      },
      {
        id: "step-5",
        title: { en: "Crisp the base", hi: "बेस कुरकुरा करें" },
        subtitle: { en: "5 of 6", hi: "6 में से 5" },
        description: {
          en: "Uncover and cook 1–2 minutes for extra crispness.",
          hi: "ढक्कन हटाकर 1–2 मिनट और पकाएँ ताकि बेस और कुरकुरा हो जाए।",
        },
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        durationSeconds: 120,
      },
      {
        id: "step-6",
        title: { en: "Serve", hi: "परोसें" },
        subtitle: { en: "6 of 6", hi: "6 में से 6" },
        description: {
          en: "Slice, add a drizzle of olive oil, and enjoy.",
          hi: "स्लाइस करें, थोड़ा ऑलिव ऑयल डालें और आनंद लें।",
        },
        image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
      },
    ],
    helpMeChoose: { match: "98% Match", highlight: true },
  },
  {
    slug: "spicy-diavola",
    title: { en: "Spicy Diavola", hi: "स्पाइसी डियावोला" },
    description: {
      en: "A spicy, smoky pizza with salami-style heat and bold flavor. A fun step up if you’re comfortable in the kitchen.",
      hi: "सलामी जैसी तीखापन और धुएँदार स्वाद वाला एक स्पाइसी पिज़्ज़ा। अगर आप किचन में कंफर्टेबल हैं तो यह शानदार अगला कदम है।",
    },
    duration: { en: "45 min", hi: "45 मिनट" },
    method: { en: "Skilled Prep", hi: "स्किल्ड प्रेप" },
    level: { en: "Intermediate", hi: "मध्यम" },
    levelColor: "#f59e0b",
    levelIcon: "trending-up",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDt_cftsPzDE9_v11fNiNmCpQqLKOrwIxhWN4FxMlErrvi93YqaSa_AHn_zesDvUZhG9UqdiktGXqZIHxN2bQCwwZvs0MnJ1mU7qVcNDGh9FyoW60oypJRNcUtupSK2iuZW7ISrPDy63Sr6IfiG3rsmapKrnz0dpj3icv5Z32RH8-uDpMofq2F1D4I-Gc9yrhKU_t_L8U5kU9--5XC6GkKu0oTrpo8YtPN_XquKJe6IUEkQyPhkN_DxblS6i87gl5IjmxTqksc1JhYW",
    time: { en: "45 mins", hi: "45 मिनट" },
    toolsText: { en: "Pan / Oven", hi: "पैन / ओवन" },
    diet: "non-veg",
    rating: "4.7",
    badge: { en: "Spicy", hi: "स्पाइसी" },
    hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuDt_cftsPzDE9_v11fNiNmCpQqLKOrwIxhWN4FxMlErrvi93YqaSa_AHn_zesDvUZhG9UqdiktGXqZIHxN2bQCwwZvs0MnJ1mU7qVcNDGh9FyoW60oypJRNcUtupSK2iuZW7ISrPDy63Sr6IfiG3rsmapKrnz0dpj3icv5Z32RH8-uDpMofq2F1D4I-Gc9yrhKU_t_L8U5kU9--5XC6GkKu0oTrpo8YtPN_XquKJe6IUEkQyPhkN_DxblS6i87gl5IjmxTqksc1JhYW",

    prepTools: [
      {
        id: "tool-pan",
        label: { en: "Heavy-bottom Pan", hi: "हेवी-बॉटम पैन" },
        icon: "countertops",
      },
      {
        id: "tool-lid",
        label: { en: "Lid / cover", hi: "ढक्कन / कवर" },
        icon: "circle",
      },
      {
        id: "tool-knife",
        label: { en: "Knife & board", hi: "चाकू और बोर्ड" },
        icon: "hardware",
      },
    ],
    prepIngredients: [
      {
        id: "ing-dough",
        label: { en: "Pizza Dough", hi: "पिज़्ज़ा डो" },
        subtitle: { en: "250g", hi: "250 ग्राम" },
        icon: "grain",
      },
      {
        id: "ing-sauce",
        label: { en: "Tomato Sauce", hi: "टमाटर सॉस" },
        subtitle: { en: "3 tbsp", hi: "3 टेबलस्पून" },
        icon: "opacity",
      },
      {
        id: "ing-cheese",
        label: { en: "Mozzarella", hi: "मोज़रेला" },
        subtitle: { en: "½ cup", hi: "½ कप" },
        icon: "egg",
      },
      {
        id: "ing-pepperoni",
        label: { en: "Pepperoni / Salami", hi: "पेपरॉनी / सलामी" },
        subtitle: { en: "as you like", hi: "अपने अनुसार" },
        icon: "restaurant",
      },
      {
        id: "ing-chilli",
        label: { en: "Chilli flakes", hi: "चिली फ्लेक्स" },
        subtitle: { en: "to taste", hi: "स्वाद अनुसार" },
        icon: "local-fire-department",
      },
    ],
    ingredients: [
      {
        name: { en: "Mozzarella", hi: "मोज़रेला" },
        image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94",
      },
      {
        name: { en: "Tomato Sauce", hi: "टमाटर सॉस" },
        image: "https://images.unsplash.com/photo-1604908177522-0403d4e59dba",
      },
      {
        name: { en: "Pepperoni / Salami", hi: "पेपरॉनी / सलामी" },
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
      },
      {
        name: { en: "Chilli Flakes", hi: "चिली फ्लेक्स" },
        image: "https://images.unsplash.com/photo-1615485925792-93b3bb5d7c71",
      },
      {
        name: { en: "Olives", hi: "ऑलिव्स" },
        image: "https://images.unsplash.com/photo-1514995669114-6081e934b693",
      },
    ],
    steps: [
      {
        id: "step-1",
        title: { en: "Prep toppings", hi: "टॉपिंग्स तैयार करें" },
        subtitle: { en: "1 of 6", hi: "6 में से 1" },
        description: {
          en: "Slice toppings and keep everything ready before you start cooking.",
          hi: "टॉपिंग्स काट लें और पकाने से पहले सब कुछ तैयार रखें।",
        },
        image: "https://images.unsplash.com/photo-1548365328-5b849e6f4f82",
      },
      {
        id: "step-2",
        title: { en: "Preheat", hi: "प्रीहीट करें" },
        subtitle: { en: "2 of 6", hi: "6 में से 2" },
        description: {
          en: "Warm your pan/oven setup depending on your method.",
          hi: "अपने मेथड के अनुसार पैन/ओवन सेटअप को गरम करें।",
        },
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        durationSeconds: 240,
      },
      {
        id: "step-3",
        title: { en: "Sauce it", hi: "सॉस लगाएँ" },
        subtitle: { en: "3 of 6", hi: "6 में से 3" },
        description: {
          en: "Spread sauce and a light layer of cheese.",
          hi: "सॉस फैलाएँ और ऊपर हल्की परत में चीज़ डालें।",
        },
        image: "https://images.unsplash.com/photo-1601924638867-3ec9c4a46f1b",
      },
      {
        id: "step-4",
        title: { en: "Add spicy toppings", hi: "स्पाइसी टॉपिंग्स डालें" },
        subtitle: { en: "4 of 6", hi: "6 में से 4" },
        description: {
          en: "Add toppings + chilli flakes. Keep it balanced.",
          hi: "टॉपिंग्स और चिली फ्लेक्स डालें। संतुलन बनाए रखें।",
        },
        image: "https://images.unsplash.com/photo-1548365328-5b849e6f4f82",
      },
      {
        id: "step-5",
        title: { en: "Cook", hi: "पकाएँ" },
        subtitle: { en: "5 of 6", hi: "6 में से 5" },
        description: {
          en: "Cook until cheese melts and edges brown.",
          hi: "जब तक चीज़ पिघल जाए और किनारे ब्राउन हो जाएँ, तब तक पकाएँ।",
        },
        image: "https://images.unsplash.com/photo-1601924638867-3ec9c4a46f1b",
        durationSeconds: 420,
      },
      {
        id: "step-6",
        title: { en: "Finish & serve", hi: "अंत में परोसें" },
        subtitle: { en: "6 of 6", hi: "6 में से 6" },
        description: {
          en: "Rest 1 minute, slice, and enjoy.",
          hi: "1 मिनट रेस्ट दें, स्लाइस करें और आनंद लें।",
        },
        image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
      },
    ],
  },
  {
    slug: "deep-dish-deluxe",
    title: { en: "Deep Dish Deluxe", hi: "डीप डिश डिलक्स" },
    description: {
      en: "A thick, cheesy deep dish style pizza with a longer cook. Best if you’re confident managing heat and timing.",
      hi: "लंबे कुक टाइम के साथ एक मोटा, चीज़ी डीप-डिश स्टाइल पिज़्ज़ा। अगर आप हीट और टाइमिंग संभालने में कॉन्फिडेंट हैं तो यह बेस्ट है।",
    },
    duration: { en: "60 min", hi: "60 मिनट" },
    method: { en: "High Temp", hi: "हाई टेम्प" },
    level: { en: "Advanced", hi: "एडवांस्ड" },
    levelColor: "#ef4444",
    levelIcon: "bolt",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBuChZgHdQvpZf5N0YsxgQ2UxEU-3x3J5C12bHjoJEQzljyVKep2G7tkQUE9RMDqrY_V9nnK7KZ_C_m5eRRXJY2j4QHnaU7sxEKnTnDc08mCBmhKUfAJ_kQ64_42tDuLju7-ppxEU-Iayqb18p5fxxJWsGH3rMwr3RbZbm-fayVuL1FVosucc9p-zUdJjHN9ZL05WufY0i6UuOBl8db6ard7L10mqrlWZzBrAU9aGGruUY5Vd8jkMwqDsyM58tAV6fF4JooRLIUbsxJ",
    time: { en: "60 mins", hi: "60 मिनट" },
    toolsText: { en: "High Temp", hi: "हाई टेम्प" },
    diet: "veg",
    rating: "4.6",
    badge: { en: "Advanced", hi: "एडवांस्ड" },
    hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuChZgHdQvpZf5N0YsxgQ2UxEU-3x3J5C12bHjoJEQzljyVKep2G7tkQUE9RMDqrY_V9nnK7KZ_C_m5eRRXJY2j4QHnaU7sxEKnTnDc08mCBmhKUfAJ_kQ64_42tDuLju7-ppxEU-Iayqb18p5fxxJWsGH3rMwr3RbZbm-fayVuL1FVosucc9p-zUdJjHN9ZL05WufY0i6UuOBl8db6ard7L10mqrlWZzBrAU9aGGruUY5Vd8jkMwqDsyM58tAV6fF4JooRLIUbsxJ",

    prepTools: [
      {
        id: "tool-deep-pan",
        label: { en: "Deep Pan", hi: "डीप पैन" },
        icon: "countertops",
      },
      {
        id: "tool-lid",
        label: { en: "Lid / cover", hi: "ढक्कन / कवर" },
        icon: "circle",
      },
      {
        id: "tool-spatula",
        label: { en: "Spatula", hi: "स्पैचुला" },
        icon: "restaurant",
      },
    ],
    prepIngredients: [
      {
        id: "ing-dough",
        label: { en: "Dough", hi: "डो" },
        subtitle: { en: "300g", hi: "300 ग्राम" },
        icon: "grain",
      },
      {
        id: "ing-sauce",
        label: { en: "Sauce", hi: "सॉस" },
        subtitle: { en: "4 tbsp", hi: "4 टेबलस्पून" },
        icon: "opacity",
      },
      {
        id: "ing-cheese",
        label: { en: "Cheese", hi: "चीज़" },
        subtitle: { en: "1 cup", hi: "1 कप" },
        icon: "egg",
      },
      {
        id: "ing-toppings",
        label: { en: "Toppings", hi: "टॉपिंग्स" },
        subtitle: { en: "as you like", hi: "अपने अनुसार" },
        icon: "restaurant",
      },
    ],
    ingredients: [
      {
        name: { en: "Cheese", hi: "चीज़" },
        image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94",
      },
      {
        name: { en: "Tomato Sauce", hi: "टमाटर सॉस" },
        image: "https://images.unsplash.com/photo-1604908177522-0403d4e59dba",
      },
      {
        name: { en: "Mushrooms", hi: "मशरूम" },
        image: "https://images.unsplash.com/photo-1605477865164-6a8a6f7c5a66",
      },
      {
        name: { en: "Olives", hi: "ऑलिव्स" },
        image: "https://images.unsplash.com/photo-1514995669114-6081e934b693",
      },
    ],
    steps: [
      {
        id: "step-1",
        title: { en: "Prepare deep pan", hi: "डीप पैन तैयार करें" },
        subtitle: { en: "1 of 7", hi: "7 में से 1" },
        description: {
          en: "Oil the pan well and preheat on low.",
          hi: "पैन में अच्छे से तेल लगाएँ और धीमी आंच पर प्रीहीट करें।",
        },
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        durationSeconds: 240,
      },
      {
        id: "step-2",
        title: { en: "Press dough up the sides", hi: "डो को किनारों तक दबाएँ" },
        subtitle: { en: "2 of 7", hi: "7 में से 2" },
        description: {
          en: "Press dough to form a base and wall (deep dish style).",
          hi: "डीप-डिश स्टाइल में बेस और दीवार बनाने के लिए डो दबाएँ।",
        },
        image: "https://images.unsplash.com/photo-1601924638867-3ec9c4a46f1b",
      },
      {
        id: "step-3",
        title: { en: "Layer cheese first", hi: "पहले चीज़ की परत" },
        subtitle: { en: "3 of 7", hi: "7 में से 3" },
        description: {
          en: "Add a layer of cheese to protect the crust from moisture.",
          hi: "क्रस्ट को नमी से बचाने के लिए पहले चीज़ की परत लगाएँ।",
        },
        image: "https://images.unsplash.com/photo-1548365328-5b849e6f4f82",
      },
      {
        id: "step-4",
        title: { en: "Add toppings + sauce", hi: "टॉपिंग्स और सॉस डालें" },
        subtitle: { en: "4 of 7", hi: "7 में से 4" },
        description: {
          en: "Add toppings and spoon sauce on top.",
          hi: "टॉपिंग्स डालें और ऊपर से सॉस चम्मच से डालें।",
        },
        image: "https://images.unsplash.com/photo-1548365328-5b849e6f4f82",
      },
      {
        id: "step-5",
        title: { en: "Cook covered", hi: "ढककर पकाएँ" },
        subtitle: { en: "5 of 7", hi: "7 में से 5" },
        description: {
          en: "Cook on low-medium heat until the base is set.",
          hi: "धीमी-मध्यम आंच पर पकाएँ जब तक बेस सेट न हो जाए।",
        },
        image: "https://images.unsplash.com/photo-1601924638867-3ec9c4a46f1b",
        durationSeconds: 900,
      },
      {
        id: "step-6",
        title: { en: "High heat finish", hi: "हाई हीट फिनिश" },
        subtitle: { en: "6 of 7", hi: "7 में से 6" },
        description: {
          en: "Finish on higher heat briefly to crisp the bottom.",
          hi: "नीचे का हिस्सा कुरकुरा करने के लिए थोड़ी देर हाई हीट पर फिनिश करें।",
        },
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        durationSeconds: 180,
      },
      {
        id: "step-7",
        title: { en: "Rest & serve", hi: "रेस्ट देकर परोसें" },
        subtitle: { en: "7 of 7", hi: "7 में से 7" },
        description: {
          en: "Rest 2 minutes, slice carefully, and serve.",
          hi: "2 मिनट रेस्ट दें, सावधानी से स्लाइस करें और परोसें।",
        },
        image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
      },
    ],
  },
  {
    slug: "tawa-margherita",
    title: { en: "Tawa Margherita Pizza", hi: "तवा मार्घेरिटा पिज़्ज़ा" },
    description: {
      en: "A classic margherita pizza cooked on a tawa with tomato sauce, mozzarella cheese, and fragrant basil. Simple, quick, and perfect for beginners.",
      hi: "तवे पर बना क्लासिक मार्घेरिटा पिज़्ज़ा—टमाटर सॉस, मोज़रेला चीज़ और खुशबूदार तुलसी के साथ। आसान, जल्दी और शुरुआती लोगों के लिए परफेक्ट।",
    },
    duration: { en: "20 min", hi: "20 मिनट" },
    method: { en: "Tawa", hi: "तवा" },
    level: { en: "Beginner", hi: "शुरुआती" },
    levelColor: "#2e9f50",
    levelIcon: "sentiment-satisfied",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBfhySYWknzJOTlILR9no8NB55YP_A73qKE03t1i0ZZ_40T7ZZDEmRWJ3qq3JwKbsF7Rz3NPaOJ1BoEo7MK-ul4F63AWQx6L6soSZDJAUOkjT24w9_H-k4WwxKNqszCiVJr9jVgrI8PClGaFCHzljpXtq3QfupEIBQp4IFym9XC9gsIqnICtgmUVnQ-avbMDon29UnOkl5z-PYwB0WeuJmX1zuBB-mepHlz0A0beo6Bg3M2uAG3epH0unVtn5FMXWCDXYj2UPqa9tmU",
    time: { en: "20m", hi: "20 मिनट" },
    toolsText: { en: "Tawa", hi: "तवा" },
    diet: "veg",
    rating: "4.6",
    badge: { en: "Beginner", hi: "शुरुआती" },
    hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfhySYWknzJOTlILR9no8NB55YP_A73qKE03t1i0ZZ_40T7ZZDEmRWJ3qq3JwKbsF7Rz3NPaOJ1BoEo7MK-ul4F63AWQx6L6soSZDJAUOkjT24w9_H-k4WwxKNqszCiVJr9jVgrI8PClGaFCHzljpXtq3QfupEIBQp4IFym9XC9gsIqnICtgmUVnQ-avbMDon29UnOkl5z-PYwB0WeuJmX1zuBB-mepHlz0A0beo6Bg3M2uAG3epH0unVtn5FMXWCDXYj2UPqa9tmU",

    prepTools: [
      {
        id: "tool-tawa",
        label: { en: "Heavy Tawa", hi: "हेवी तवा" },
        icon: "local-fire-department",
      },
      {
        id: "tool-lid",
        label: { en: "Lid for Covering", hi: "ढक्कन" },
        icon: "circle",
      },
      {
        id: "tool-spatula",
        label: { en: "Spatula", hi: "स्पैचुला" },
        icon: "restaurant",
      },
    ],

    prepIngredients: [
      {
        id: "ing-dough",
        label: { en: "Pizza Dough Ball", hi: "पिज़्ज़ा डो बॉल" },
        subtitle: {
          en: "200g, room temperature",
          hi: "200 ग्राम, रूम टेम्परेचर",
        },
        icon: "grain",
      },
      {
        id: "ing-sauce",
        label: { en: "Tomato Pizza Sauce", hi: "टमाटर पिज़्ज़ा सॉस" },
        subtitle: { en: "2–3 tbsp", hi: "2–3 टेबलस्पून" },
        icon: "opacity",
      },
      {
        id: "ing-cheese",
        label: { en: "Mozzarella Cheese", hi: "मोज़रेला चीज़" },
        subtitle: { en: "½ cup, grated", hi: "½ कप, कद्दूकस" },
        icon: "egg",
      },
      {
        id: "ing-basil",
        label: { en: "Fresh Basil Leaves", hi: "ताज़ा तुलसी के पत्ते" },
        subtitle: { en: "4–6 leaves", hi: "4–6 पत्ते" },
        icon: "eco",
      },
    ],

    ingredients: [
      {
        name: { en: "Pizza Dough", hi: "पिज़्ज़ा डो" },
        image: "https://images.unsplash.com/photo-1601924582975-7f2c8dc9c1d4",
      },
      {
        name: { en: "Tomato Sauce", hi: "टमाटर सॉस" },
        image: "https://images.unsplash.com/photo-1604908177522-0403d4e59dba",
      },
      {
        name: { en: "Mozzarella Cheese", hi: "मोज़रेला चीज़" },
        image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94",
      },
      {
        name: { en: "Fresh Basil", hi: "ताज़ा तुलसी" },
        image: "https://images.unsplash.com/photo-1524593166156-312f362cada0",
      },
    ],

    steps: [
      {
        id: "step-1",
        title: { en: "Prepare the Dough", hi: "डो तैयार करें" },
        subtitle: { en: "1 of 7", hi: "7 में से 1" },
        description: {
          en: "Lightly dust the surface with flour and stretch the dough into a medium-thick round base.",
          hi: "सतह पर हल्का आटा छिड़कें और डो को खींचकर मध्यम मोटाई का गोल बेस बनाएं।",
        },
        image: "https://images.unsplash.com/photo-1601924638867-3ec9c4a46f1b",
      },
      {
        id: "step-2",
        title: { en: "Preheat the Tawa", hi: "तवा गरम करें" },
        subtitle: { en: "2 of 7", hi: "7 में से 2" },
        description: {
          en: "Heat a heavy tawa on low flame for 3 minutes.",
          hi: "हेवी तवे को धीमी आंच पर 3 मिनट गरम करें।",
        },
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        durationSeconds: 180,
      },
      {
        id: "step-3",
        title: { en: "Add Sauce", hi: "सॉस डालें" },
        subtitle: { en: "3 of 7", hi: "7 में से 3" },
        description: {
          en: "Spread tomato sauce evenly over the base, leaving a small border.",
          hi: "बेस पर टमाटर सॉस समान रूप से फैलाएं और किनारों पर थोड़ा बॉर्डर छोड़ें।",
        },
        image: "https://images.unsplash.com/photo-1548365328-5b849e6f4f82",
      },
      {
        id: "step-4",
        title: { en: "Add Cheese", hi: "चीज़ डालें" },
        subtitle: { en: "4 of 7", hi: "7 में से 4" },
        description: {
          en: "Sprinkle mozzarella evenly across the pizza.",
          hi: "पिज़्ज़ा पर मोज़रेला समान रूप से छिड़कें।",
        },
        image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94",
      },
      {
        id: "step-5",
        title: { en: "Cook Covered", hi: "ढककर पकाएँ" },
        subtitle: { en: "5 of 7", hi: "7 में से 5" },
        description: {
          en: "Place the pizza on the tawa, cover with a lid, and cook on low flame.",
          hi: "पिज़्ज़ा को तवे पर रखें, ढक्कन लगाएं और धीमी आंच पर पकाएं।",
        },
        image: "https://images.unsplash.com/photo-1601924638867-3ec9c4a46f1b",
        durationSeconds: 300,
      },
      {
        id: "step-6",
        title: { en: "Add Basil", hi: "तुलसी डालें" },
        subtitle: { en: "6 of 7", hi: "7 में से 6" },
        description: {
          en: "Once cheese melts, add fresh basil leaves on top.",
          hi: "जब चीज़ पिघल जाए, ऊपर ताज़ा तुलसी के पत्ते डालें।",
        },
        image: "https://images.unsplash.com/photo-1524593166156-312f362cada0",
      },
      {
        id: "step-7",
        title: { en: "Serve Hot", hi: "गरमागरम परोसें" },
        subtitle: { en: "7 of 7", hi: "7 में से 7" },
        description: {
          en: "Turn off the flame, slice, and enjoy your classic margherita.",
          hi: "आंच बंद करें, स्लाइस करें और अपना क्लासिक मार्घेरिटा आनंद लें।",
        },
        image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
      },
    ],
  },
  {
    slug: "no-yeast-veggie-delight",
    title: {
      en: "No-Yeast Veggie Delight Pizza",
      hi: "बिना यीस्ट वेजी डिलाइट पिज़्ज़ा",
    },
    description: {
      en: "A quick and easy no-yeast veggie pizza loaded with fresh vegetables, cooked on a pan without an oven. Perfect for instant pizza cravings.",
      hi: "बिना यीस्ट का जल्दी और आसान वेजी पिज़्ज़ा, ताज़ी सब्ज़ियों से भरपूर। ओवन के बिना पैन पर पकता है—इंस्टेंट क्रेविंग्स के लिए परफेक्ट।",
    },
    duration: { en: "30 min", hi: "30 मिनट" },
    method: { en: "No Oven", hi: "बिना ओवन" },
    level: { en: "Beginner", hi: "शुरुआती" },
    levelColor: "#2e9f50",
    levelIcon: "sentiment-satisfied",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBOo8gL0-AKrXh98anROLsGIZdtdKcZTDmcJzG3O6vIPWizglmN8kzowGHdqBvURjz112d_RqY3Kgu9E30mVG16t8scSx2IyKYOeZbyZwxHAVWNM6WpZue08vzbtMS5v9PxV4l9heMGn57aDCsQlwc-ZpgOtRN6eDkB1c3aCfcs24CKpdgEXVKWErDuhfK7W3_Nvf4Tn3Mu2AJn7gr9fEwWmWqqDUtU3IcA2tPAj0rIcCAacDXRWi8JC_-I-OKxtXYMjVC9lwOyCIAb",
    time: { en: "30m", hi: "30 मिनट" },
    toolsText: { en: "No Oven", hi: "बिना ओवन" },
    diet: "veg",
    rating: "4.4",
    badge: { en: "Beginner", hi: "शुरुआती" },
    hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOo8gL0-AKrXh98anROLsGIZdtdKcZTDmcJzG3O6vIPWizglmN8kzowGHdqBvURjz112d_RqY3Kgu9E30mVG16t8scSx2IyKYOeZbyZwxHAVWNM6WpZue08vzbtMS5v9PxV4l9heMGn57aDCsQlwc-ZpgOtRN6eDkB1c3aCfcs24CKpdgEXVKWErDuhfK7W3_Nvf4Tn3Mu2AJn7gr9fEwWmWqqDUtU3IcA2tPAj0rIcCAacDXRWi8JC_-I-OKxtXYMjVC9lwOyCIAb",

    prepTools: [
      {
        id: "tool-pan",
        label: { en: "Heavy-bottom Pan / Tawa", hi: "हेवी-बॉटम पैन / तवा" },
        icon: "local-fire-department",
      },
      {
        id: "tool-lid",
        label: { en: "Lid for Covering", hi: "ढक्कन" },
        icon: "circle",
      },
      {
        id: "tool-bowl",
        label: { en: "Mixing Bowl", hi: "मिक्सिंग बाउल" },
        icon: "soup-kitchen",
      },
      {
        id: "tool-spatula",
        label: { en: "Spatula", hi: "स्पैचुला" },
        icon: "restaurant",
      },
    ],

    prepIngredients: [
      {
        id: "ing-flour",
        label: { en: "All-purpose Flour", hi: "मैदा" },
        subtitle: { en: "1 cup", hi: "1 कप" },
        icon: "grain",
      },
      {
        id: "ing-baking-powder",
        label: { en: "Baking Powder", hi: "बेकिंग पाउडर" },
        subtitle: { en: "1 tsp", hi: "1 टीस्पून" },
        icon: "science",
      },
      {
        id: "ing-curd",
        label: { en: "Curd / Yogurt", hi: "दही" },
        subtitle: { en: "½ cup", hi: "½ कप" },
        icon: "opacity",
      },
      {
        id: "ing-sauce",
        label: { en: "Pizza / Tomato Sauce", hi: "पिज़्ज़ा / टमाटर सॉस" },
        subtitle: { en: "3 tbsp", hi: "3 टेबलस्पून" },
        icon: "opacity",
      },
      {
        id: "ing-cheese",
        label: { en: "Mozzarella Cheese", hi: "मोज़रेला चीज़" },
        subtitle: { en: "½ cup, grated", hi: "½ कप, कद्दूकस" },
        icon: "egg",
      },
    ],

    ingredients: [
      {
        name: { en: "Capsicum", hi: "शिमला मिर्च" },
        image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
      },
      {
        name: { en: "Onion", hi: "प्याज़" },
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784f0c",
      },
      {
        name: { en: "Sweet Corn", hi: "स्वीट कॉर्न" },
        image: "https://images.unsplash.com/photo-1604908177522-0403d4e59dba",
      },
      {
        name: { en: "Mozzarella Cheese", hi: "मोज़रेला चीज़" },
        image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94",
      },
    ],

    steps: [
      {
        id: "step-1",
        title: {
          en: "Prepare No-Yeast Dough",
          hi: "बिना यीस्ट का डो तैयार करें",
        },
        subtitle: { en: "1 of 8", hi: "8 में से 1" },
        description: {
          en: "In a bowl, mix flour, baking powder, salt, curd, and water to form a soft dough.",
          hi: "एक बाउल में मैदा, बेकिंग पाउडर, नमक, दही और पानी मिलाकर नरम डो बनाएं।",
        },
        image: "https://images.unsplash.com/photo-1601924582975-7f2c8dc9c1d4",
      },
      {
        id: "step-2",
        title: { en: "Rest the Dough", hi: "डो को रेस्ट दें" },
        subtitle: { en: "2 of 8", hi: "8 में से 2" },
        description: {
          en: "Cover and rest the dough for 10 minutes.",
          hi: "डो को ढककर 10 मिनट रेस्ट दें।",
        },
        image: "https://images.unsplash.com/photo-1601924638867-3ec9c4a46f1b",
        durationSeconds: 600,
      },
      {
        id: "step-3",
        title: { en: "Shape the Base", hi: "बेस बनाएं" },
        subtitle: { en: "3 of 8", hi: "8 में से 3" },
        description: {
          en: "Roll the dough into a medium-thick round base.",
          hi: "डो को बेलकर मध्यम मोटाई का गोल बेस बनाएं।",
        },
        image: "https://images.unsplash.com/photo-1601924638867-3ec9c4a46f1b",
      },
      {
        id: "step-4",
        title: { en: "Pre-cook the Base", hi: "बेस को हल्का पकाएँ" },
        subtitle: { en: "4 of 8", hi: "8 में से 4" },
        description: {
          en: "Place the base on a hot tawa and cook lightly on one side.",
          hi: "बेस को गरम तवे पर रखें और एक तरफ हल्का पकाएँ।",
        },
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        durationSeconds: 120,
      },
      {
        id: "step-5",
        title: { en: "Add Sauce & Toppings", hi: "सॉस और टॉपिंग्स डालें" },
        subtitle: { en: "5 of 8", hi: "8 में से 5" },
        description: {
          en: "Flip the base, spread sauce, add veggies, and sprinkle cheese.",
          hi: "बेस पलटें, सॉस फैलाएँ, सब्ज़ियाँ डालें और चीज़ छिड़कें।",
        },
        image: "https://images.unsplash.com/photo-1548365328-5b849e6f4f82",
      },
      {
        id: "step-6",
        title: { en: "Cook Covered", hi: "ढककर पकाएँ" },
        subtitle: { en: "6 of 8", hi: "8 में से 6" },
        description: {
          en: "Cover with lid and cook on low flame until cheese melts.",
          hi: "ढक्कन लगाकर धीमी आंच पर पकाएँ जब तक चीज़ पिघल न जाए।",
        },
        image: "https://images.unsplash.com/photo-1601924638867-3ec9c4a46f1b",
        durationSeconds: 420,
      },
      {
        id: "step-7",
        title: { en: "Check Base Crispness", hi: "बेस की कुरकुराहट चेक करें" },
        subtitle: { en: "7 of 8", hi: "8 में से 7" },
        description: {
          en: "Lift slightly to ensure the base is cooked and crisp.",
          hi: "हल्का उठाकर देखें कि बेस पका और कुरकुरा है।",
        },
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      },
      {
        id: "step-8",
        title: { en: "Serve Hot", hi: "गरमागरम परोसें" },
        subtitle: { en: "8 of 8", hi: "8 में से 8" },
        description: {
          en: "Turn off the flame, slice, and enjoy your veggie delight pizza.",
          hi: "आंच बंद करें, स्लाइस करें और अपना वेजी डिलाइट पिज़्ज़ा आनंद लें।",
        },
        image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
      },
    ],
  },
];

function assertNonEmptyString(value: unknown, label: string) {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(
      `recipes validation: "${label}" must be a non-empty string`
    );
  }
}

function assertLocalizedString(value: unknown, label: string) {
  const v = value as LocalizedString;
  if (!v || typeof v !== "object") {
    throw new Error(`recipes validation: "${label}" must be a LocalizedString`);
  }
  assertNonEmptyString(v.en, `${label}.en`);
  assertNonEmptyString(v.hi, `${label}.hi`);
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
  return /\begg(s)?\b/i.test(value) || /\b(अंडा|अंडे)\b/i.test(value);
}

function validateRecipes(all: Recipe[]) {
  assertNonEmptyArray(all, "recipes");
  assertUnique(
    all.map((r) => r.slug),
    "recipes[].slug"
  );

  for (const r of all) {
    // Core display + routing
    assertNonEmptyString(r.slug, `recipe(${r.slug}).slug`);
    assertLocalizedString(r.title, `recipe(${r.slug}).title`);
    assertLocalizedString(r.description, `recipe(${r.slug}).description`);
    assertLocalizedString(r.duration, `recipe(${r.slug}).duration`);
    assertLocalizedString(r.time, `recipe(${r.slug}).time`);
    assertLocalizedString(r.method, `recipe(${r.slug}).method`);
    assertLocalizedString(r.level, `recipe(${r.slug}).level`);
    assertNonEmptyString(r.levelColor, `recipe(${r.slug}).levelColor`);
    assertNonEmptyString(r.levelIcon, `recipe(${r.slug}).levelIcon`);
    assertNonEmptyString(r.image, `recipe(${r.slug}).image`);
    assertNonEmptyString(r.hero, `recipe(${r.slug}).hero`);
    assertNonEmptyString(r.rating, `recipe(${r.slug}).rating`);
    assertLocalizedString(r.badge, `recipe(${r.slug}).badge`);
    assertLocalizedString(r.toolsText, `recipe(${r.slug}).toolsText`);
    if (r.diet !== "veg" && r.diet !== "non-veg") {
      throw new Error(
        `recipes validation: recipe(${r.slug}).diet must be "veg" or "non-veg"`
      );
    }

    // Arrays used across flows
    assertNonEmptyArray(r.ingredients, `recipe(${r.slug}).ingredients`);
    assertNonEmptyArray(r.steps, `recipe(${r.slug}).steps`);
    assertNonEmptyArray(r.prepTools, `recipe(${r.slug}).prepTools`);
    assertNonEmptyArray(r.prepIngredients, `recipe(${r.slug}).prepIngredients`);

    // Ingredients
    const hasEgg =
      r.ingredients.some(
        (ing) => containsEggText(ing.name.en) || containsEggText(ing.name.hi)
      ) ||
      r.prepIngredients.some(
        (i) => containsEggText(i.label.en) || containsEggText(i.label.hi)
      );
    if (hasEgg && r.diet === "veg") {
      throw new Error(
        `recipes validation: recipe(${r.slug}) contains egg, so diet must be "non-veg"`
      );
    }

    for (const ing of r.ingredients) {
      assertLocalizedString(ing.name, `recipe(${r.slug}).ingredients[].name`);
      assertNonEmptyString(ing.image, `recipe(${r.slug}).ingredients[].image`);
    }

    // Steps
    assertUnique(
      r.steps.map((s) => s.id),
      `recipe(${r.slug}).steps[].id`
    );
    for (const s of r.steps) {
      assertNonEmptyString(s.id, `recipe(${r.slug}).steps[].id`);
      assertLocalizedString(s.title, `recipe(${r.slug}).steps[].title`);
      assertLocalizedString(s.subtitle, `recipe(${r.slug}).steps[].subtitle`);
      assertLocalizedString(
        s.description,
        `recipe(${r.slug}).steps[].description`
      );
      assertNonEmptyString(s.image, `recipe(${r.slug}).steps[].image`);
      if (s.durationSeconds != null) {
        if (typeof s.durationSeconds !== "number" || s.durationSeconds <= 0) {
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
      assertLocalizedString(t.label, `recipe(${r.slug}).prepTools[].label`);
      assertNonEmptyString(t.icon, `recipe(${r.slug}).prepTools[].icon`);
    }
    for (const i of r.prepIngredients) {
      assertNonEmptyString(i.id, `recipe(${r.slug}).prepIngredients[].id`);
      assertLocalizedString(
        i.label,
        `recipe(${r.slug}).prepIngredients[].label`
      );
      assertNonEmptyString(i.icon, `recipe(${r.slug}).prepIngredients[].icon`);
      if (i.subtitle != null)
        assertLocalizedString(
          i.subtitle,
          `recipe(${r.slug}).prepIngredients[].subtitle`
        );
    }
  }
}

// Catch broken/partial recipe objects early during development.
// (No overhead in production builds.)
// eslint-disable-next-line no-undef
if (typeof __DEV__ !== "undefined" && __DEV__) {
  validateRecipes(recipes);
}

export const recipeBySlug = Object.fromEntries(
  recipes.map((recipe) => [recipe.slug, recipe])
) as Record<string, Recipe>;

export const defaultRecipeSlug = "spicy-paneer-tikka";
