export type CookingStepBase = {
  id: string;
  image: string;
  durationSeconds?: number;
};

export type IngredientBase = {
  id: string;
  image: string;
};

export type ChecklistItemBase = {
  id: string;
  icon: string;
  hasSubtitle?: boolean;
};

export type RecipeBase = {
  id: string; // unique 3-digit id, e.g. "001"
  slug: string;
  levelColor: string;
  levelIcon: string;
  image: string;
  rating: string;
  hero: string;
  diet: "veg" | "non-veg";
  ingredients: IngredientBase[];
  steps: CookingStepBase[];
  prepTools: ChecklistItemBase[];
  prepIngredients: ChecklistItemBase[];
  helpMeChoose?: {
    // Kept as-is (currently not localized in UI; can be moved later).
    match?: string | null;
    highlight?: boolean;
  };
};

export const recipesBase: RecipeBase[] = [
  {
    id: "001",
    slug: "spicy-paneer-tikka",
    levelColor: "#ec1313",
    levelIcon: "trending-up",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkQVItzwVPyo1v3RKpuvwd-YNfkZfgVnDh8ezjevw0o7lOjCLWVbxY584YvDwRaEtjTZzRmtwyG1HArHbBBwa3eAWURTFPTnCeODAgU5xpM7epz3dYwAFJGyVTvbTTFy95vtwutSZ472QP3Q2s6gsvgaiL05T58XGtSHPAshXQC7fIGY7AkH-JIvCYEEVBk23tY5af5PwgRDpPVScXnMvN8f55JwvJf2twGDqqraiCKOqlVibPkvOJdAUOi3dHPpdWkjsmvPBokAd5",
    hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4PMSpA1V9Z0UAi-L1YGGZALp3YY8E-qw0Nw_rHRl1vvWVbO1RcBNXg0TIMRI33AlNr0qXN-DG3UUWGHveWmtUhI4aAGe6xap4i-eY4INB57DlK-qix4AR4LdEIysWoAtpIqwST04NUlj3Duc_7k69uD5sA2qYN1gbX8Qm0U0vSuiho6EC0FPtIjZ21sifkjv-h4fn_aN1pjJI5CmUeTXnUd463_H_zcBUExhZO_WwD7r-YcEV89GqI5h_koI_msasH-JxS1jzsIsR",
    diet: "veg",
    rating: "4.9",
    ingredients: [
      {
        id: "paneer-tikka",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuB1bTOIIs5AJi0C8NBbb14LRTZPr7q9L9dZVubU9v8n4h-FpsLXbd5VDcoZw4UV5UJbAanL98xQlW1JIZ3CqnJtVh-7Yflc7UqlvvEY6B8EapOsAOv31I0svjPdakdardVSrMbViLxxJEcKIThHNoPqO247RuTTvPj3o2TWlpSk2eNh277koFRDDOCErQ94trsajDLuQsoAc485Hjbw18bK7fW6Co5SWMtTgOsqtm_jCdmvWdXKyOFawY4zEmRZm9LTKSowyq05oz9J",
      },
      {
        id: "capsicum",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC-g03U3Yw0Guh29bYE5B00zicZu7E5TUbHIvV6FXyMt199Um0faicK65WB4WcHJVn3CwyZPRYbMjuCzdww3THrYLEoPLDIJeRNUup-DUfkuD9wYbaKfk1TNAD2zCIYmqcHMcEsgJxpKSmHhKJHVw4AP3BQJ0V_lhHho87sNJktaa2yBk4iSIH4sibP1KeWePxp1TwavzdBTE9wpn6IMrtAdFsX_BpGyENUilzTVZKIfbVFy4H4sTNLqrRxwsK1Hn0s-orrRKgyEdEx",
      },
      {
        id: "mozzarella-cheese",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAhmwbs5sQoeoQMieknnG49Dys15CgRCUDYGaelQ4X8s9P-XLGC76lWnDpo63evkEHfWD6W6lIoDD60dAB_waDDwuyOVl4l-0t9Km9PfaLgKW7jdsfsV-nKjyAF2wDebfjqCV1ODC2K0wyCm_e_GOHKbQra044k2yWnqO29H-lYsOxY0pKZNXSRUpPXPJcaidyTzqQFLZh8QXNIm21YSRUaBXhMvMNPvNGygK2NCSyeHo3IkUclJXO1O_Z5-cW7XeAcqPFqtcouVord",
      },
    ],
    prepTools: [
      { id: "tool-pan", icon: "local-fire-department" },
      { id: "tool-lid", icon: "circle" },
      { id: "tool-spatula", icon: "restaurant" },
    ],
    prepIngredients: [
      { id: "ing-dough", icon: "grain", hasSubtitle: true },
      { id: "ing-sauce", icon: "opacity", hasSubtitle: true },
      { id: "ing-paneer", icon: "square", hasSubtitle: true },
      { id: "ing-cheese", icon: "egg", hasSubtitle: true },
    ],
    steps: [
      {
        id: "step-1",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/697fa911001a13fd78cc/view?project=69748622002fa8040371&mode=admin",
      },
      {
        id: "step-2",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/697fa91d00038dd3586e/view?project=69748622002fa8040371&mode=admin",
        durationSeconds: 10,
      },
      {
        id: "step-3",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/697fa927000de898bb0c/view?project=69748622002fa8040371&mode=admin",
      },
      {
        id: "step-4",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/697fa92f002f0e018eec/view?project=69748622002fa8040371&mode=admin",
      },
      {
        id: "step-5",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/697fa938001d0447bd41/view?project=69748622002fa8040371&mode=admin",
      },
      {
        id: "step-6",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/697fa94000385ed97212/view?project=69748622002fa8040371&mode=admin",
      },
      {
        id: "step-7",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/697fa94800036b308194/view?project=69748622002fa8040371&mode=admin",
        durationSeconds: 300,
      },
      {
        id: "step-8",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/697fa94f003419764e27/view?project=69748622002fa8040371&mode=admin",
      },
      {
        id: "step-9",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/697fa958002ad60dacfe/view?project=69748622002fa8040371&mode=admin",
        durationSeconds: 120,
      },
      {
        id: "step-10",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/697fa961002a4025c096/view?project=69748622002fa8040371&mode=admin",
      },
    ],
  },
  {
    id: "002",
    slug: "cast-iron-margherita",
    levelColor: "#2e9f50",
    levelIcon: "school",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC7PWZzec5vPzdKJr6_XWkKhMkV2J6zVld5NfdqD9LTfl4N_wjutCmBKPQ5RWi2-SN7qa9xRUc0niUMcwd1t2HgtveXbFiXC7JA_1-YT4dqPug8Dkh4a9dKwReppvhnMwohEFJ5SNc99yAdndqEtsV1VoHILiQD5iicNRQfzVrmgLlLlaqFRy82ZKHg8kctAXGn7NARaguw0hM8r6YhbPEgF16OrgjUtPYlciqXqfG-ClJ5Eb5EI481UhjKaTTGYt3p0Zb0BQUUXrBH",
    hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7PWZzec5vPzdKJr6_XWkKhMkV2J6zVld5NfdqD9LTfl4N_wjutCmBKPQ5RWi2-SN7qa9xRUc0niUMcwd1t2HgtveXbFiXC7JA_1-YT4dqPug8Dkh4a9dKwReppvhnMwohEFJ5SNc99yAdndqEtsV1VoHILiQD5iicNRQfzVrmgLlLlaqFRy82ZKHg8kctAXGn7NARaguw0hM8r6YhbPEgF16OrgjUtPYlciqXqfG-ClJ5Eb5EI481UhjKaTTGYt3p0Zb0BQUUXrBH",
    diet: "veg",
    rating: "4.8",
    ingredients: [
      {
        id: "tomato-sauce",
        image: "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/6980d826001e69fe59a6/view?project=69748622002fa8040371&mode=admin",
      },
      {
        id: "mozzarella",
        image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94",
      },
      {
        id: "basil",
        image: "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/6980d8a50013c83b5e7c/view?project=69748622002fa8040371&mode=admin",
      },
      {
        id: "olive-oil",
        image: "https://images.unsplash.com/photo-1514995669114-6081e934b693",
      },
    ],
    prepTools: [
      { id: "tool-cast-iron", icon: "countertops" },
      { id: "tool-lid", icon: "circle" },
      { id: "tool-spatula", icon: "restaurant" },
    ],
    prepIngredients: [
      { id: "ing-dough", icon: "grain", hasSubtitle: true },
      { id: "ing-sauce", icon: "opacity", hasSubtitle: true },
      { id: "ing-cheese", icon: "egg", hasSubtitle: true },
      { id: "ing-basil", icon: "eco", hasSubtitle: true },
    ],
    steps: [
      {
        id: "step-1",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/697fad5600146406efba/view?project=69748622002fa8040371&mode=admin",
        durationSeconds: 240,
      },
      {
        id: "step-2",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/697fad65000995c127f7/view?project=69748622002fa8040371&mode=admin",
      },
      {
        id: "step-3",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/697fad70001861f5905d/view?project=69748622002fa8040371&mode=admin",
      },
      {
        id: "step-4",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/697fad8e002b3fc1f2ff/view?project=69748622002fa8040371&mode=admin",
        durationSeconds: 420,
      },
      {
        id: "step-5",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/697fada600362073e90f/view?project=69748622002fa8040371&mode=admin",
        durationSeconds: 120,
      },
      {
        id: "step-6",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/697fadb90020c1cf1b3d/view?project=69748622002fa8040371&mode=admin",
      },
    ],
    helpMeChoose: { match: "98% Match", highlight: true },
  },
  {
    id: "003",
    slug: "spicy-diavola",
    levelColor: "#f59e0b",
    levelIcon: "trending-up",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDt_cftsPzDE9_v11fNiNmCpQqLKOrwIxhWN4FxMlErrvi93YqaSa_AHn_zesDvUZhG9UqdiktGXqZIHxN2bQCwwZvs0MnJ1mU7qVcNDGh9FyoW60oypJRNcUtupSK2iuZW7ISrPDy63Sr6IfiG3rsmapKrnz0dpj3icv5Z32RH8-uDpMofq2F1D4I-Gc9yrhKU_t_L8U5kU9--5XC6GkKu0oTrpo8YtPN_XquKJe6IUEkQyPhkN_DxblS6i87gl5IjmxTqksc1JhYW",
    hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuDt_cftsPzDE9_v11fNiNmCpQqLKOrwIxhWN4FxMlErrvi93YqaSa_AHn_zesDvUZhG9UqdiktGXqZIHxN2bQCwwZvs0MnJ1mU7qVcNDGh9FyoW60oypJRNcUtupSK2iuZW7ISrPDy63Sr6IfiG3rsmapKrnz0dpj3icv5Z32RH8-uDpMofq2F1D4I-Gc9yrhKU_t_L8U5kU9--5XC6GkKu0oTrpo8YtPN_XquKJe6IUEkQyPhkN_DxblS6i87gl5IjmxTqksc1JhYW",
    diet: "non-veg",
    rating: "4.7",
    ingredients: [
      {
        id: "mozzarella",
        image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94",
      },
      {
        id: "tomato-sauce",
        image: "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/6980d826001e69fe59a6/view?project=69748622002fa8040371&mode=admin",
      },
      {
        id: "pepperoni-salami",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
      },
      {
        id: "chilli-flakes",
        image: "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/6980daf50031691c061d/view?project=69748622002fa8040371&mode=admin",
      },
      {
        id: "olives",
        image: "https://images.unsplash.com/photo-1514995669114-6081e934b693",
      },
    ],
    prepTools: [
      { id: "tool-pan", icon: "countertops" },
      { id: "tool-lid", icon: "circle" },
      { id: "tool-knife", icon: "hardware" },
    ],
    prepIngredients: [
      { id: "ing-dough", icon: "grain", hasSubtitle: true },
      { id: "ing-sauce", icon: "opacity", hasSubtitle: true },
      { id: "ing-cheese", icon: "egg", hasSubtitle: true },
      { id: "ing-pepperoni", icon: "restaurant", hasSubtitle: true },
      { id: "ing-chilli", icon: "local-fire-department", hasSubtitle: true },
    ],
    steps: [
      {
        id: "step-1",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/69803c49003b3b53c24c/view?project=69748622002fa8040371&mode=admin",
      },
      {
        id: "step-2",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/69803c56001888ab35fc/view?project=69748622002fa8040371&mode=admin",
        durationSeconds: 240,
      },
      {
        id: "step-3",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/69803c64003d58db86d8/view?project=69748622002fa8040371&mode=admin",
      },
      {
        id: "step-4",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/69803c72002ab67d4914/view?project=69748622002fa8040371&mode=admin",
      },
      {
        id: "step-5",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/69803c7f00006574abcf/view?project=69748622002fa8040371&mode=admin",
        durationSeconds: 420,
      },
      {
        id: "step-6",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/69803c880024188b1e4f/view?project=69748622002fa8040371&mode=admin",
      },
    ],
  },
  {
    id: "004",
    slug: "deep-dish-deluxe",
    levelColor: "#ef4444",
    levelIcon: "bolt",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBuChZgHdQvpZf5N0YsxgQ2UxEU-3x3J5C12bHjoJEQzljyVKep2G7tkQUE9RMDqrY_V9nnK7KZ_C_m5eRRXJY2j4QHnaU7sxEKnTnDc08mCBmhKUfAJ_kQ64_42tDuLju7-ppxEU-Iayqb18p5fxxJWsGH3rMwr3RbZbm-fayVuL1FVosucc9p-zUdJjHN9ZL05WufY0i6UuOBl8db6ard7L10mqrlWZzBrAU9aGGruUY5Vd8jkMwqDsyM58tAV6fF4JooRLIUbsxJ",
    hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuChZgHdQvpZf5N0YsxgQ2UxEU-3x3J5C12bHjoJEQzljyVKep2G7tkQUE9RMDqrY_V9nnK7KZ_C_m5eRRXJY2j4QHnaU7sxEKnTnDc08mCBmhKUfAJ_kQ64_42tDuLju7-ppxEU-Iayqb18p5fxxJWsGH3rMwr3RbZbm-fayVuL1FVosucc9p-zUdJjHN9ZL05WufY0i6UuOBl8db6ard7L10mqrlWZzBrAU9aGGruUY5Vd8jkMwqDsyM58tAV6fF4JooRLIUbsxJ",
    diet: "veg",
    rating: "4.6",
    ingredients: [
      {
        id: "cheese",
        image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94",
      },
      {
        id: "tomato-sauce",
        image: "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/6980d826001e69fe59a6/view?project=69748622002fa8040371&mode=admin",
      },
      {
        id: "mushrooms",
        image: "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/6980db75001799c4a940/view?project=69748622002fa8040371&mode=admin",
      },
      {
        id: "olives",
        image: "https://images.unsplash.com/photo-1514995669114-6081e934b693",
      },
    ],
    prepTools: [
      { id: "tool-deep-pan", icon: "countertops" },
      { id: "tool-lid", icon: "circle" },
      { id: "tool-spatula", icon: "restaurant" },
    ],
    prepIngredients: [
      { id: "ing-dough", icon: "grain", hasSubtitle: true },
      { id: "ing-sauce", icon: "opacity", hasSubtitle: true },
      { id: "ing-cheese", icon: "egg", hasSubtitle: true },
      { id: "ing-toppings", icon: "restaurant", hasSubtitle: true },
    ],
    steps: [
      {
        id: "step-1",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/69804076000800aae8fe/view?project=69748622002fa8040371&mode=admin",
        durationSeconds: 240,
      },
      {
        id: "step-2",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/6980407f0033a73b07c0/view?project=69748622002fa8040371&mode=admin",
      },
      {
        id: "step-3",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/6980408a0014f5ddfe71/view?project=69748622002fa8040371&mode=admin",
      },
      {
        id: "step-4",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/698040940024e7ab86fe/view?project=69748622002fa8040371&mode=admin",
      },
      {
        id: "step-5",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/698040a2002d7cbc8f66/view?project=69748622002fa8040371&mode=admin",
        durationSeconds: 900,
      },
      {
        id: "step-6",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/698040ae0013d312a7d9/view?project=69748622002fa8040371&mode=admin",
        durationSeconds: 180,
      },
      {
        id: "step-7",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/698040b60014d2f69ea1/view?project=69748622002fa8040371&mode=admin",
      },
    ],
  },
  {
    id: "005",
    slug: "tawa-margherita",
    levelColor: "#2e9f50",
    levelIcon: "sentiment-satisfied",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBfhySYWknzJOTlILR9no8NB55YP_A73qKE03t1i0ZZ_40T7ZZDEmRWJ3qq3JwKbsF7Rz3NPaOJ1BoEo7MK-ul4F63AWQx6L6soSZDJAUOkjT24w9_H-k4WwxKNqszCiVJr9jVgrI8PClGaFCHzljpXtq3QfupEIBQp4IFym9XC9gsIqnICtgmUVnQ-avbMDon29UnOkl5z-PYwB0WeuJmX1zuBB-mepHlz0A0beo6Bg3M2uAG3epH0unVtn5FMXWCDXYj2UPqa9tmU",
    hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfhySYWknzJOTlILR9no8NB55YP_A73qKE03t1i0ZZ_40T7ZZDEmRWJ3qq3JwKbsF7Rz3NPaOJ1BoEo7MK-ul4F63AWQx6L6soSZDJAUOkjT24w9_H-k4WwxKNqszCiVJr9jVgrI8PClGaFCHzljpXtq3QfupEIBQp4IFym9XC9gsIqnICtgmUVnQ-avbMDon29UnOkl5z-PYwB0WeuJmX1zuBB-mepHlz0A0beo6Bg3M2uAG3epH0unVtn5FMXWCDXYj2UPqa9tmU",
    diet: "veg",
    rating: "4.6",
    ingredients: [
      {
        id: "pizza-dough",
        image: "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/6980dc98001709bf063a/view?project=69748622002fa8040371&mode=admin",
      },
      {
        id: "tomato-sauce",
        image: "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/6980d826001e69fe59a6/view?project=69748622002fa8040371&mode=admin",
      },
      {
        id: "mozzarella-cheese",
        image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94",
      },
      {
        id: "fresh-basil",
        image: "https://images.unsplash.com/photo-1524593166156-312f362cada0",
      },
    ],
    prepTools: [
      { id: "tool-tawa", icon: "local-fire-department" },
      { id: "tool-lid", icon: "circle" },
      { id: "tool-spatula", icon: "restaurant" },
    ],
    prepIngredients: [
      { id: "ing-dough", icon: "grain", hasSubtitle: true },
      { id: "ing-sauce", icon: "opacity", hasSubtitle: true },
      { id: "ing-cheese", icon: "egg", hasSubtitle: true },
      { id: "ing-basil", icon: "eco", hasSubtitle: true },
    ],
    steps: [
      {
        id: "step-1",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/69804563000c2f97ffe6/view?project=69748622002fa8040371&mode=admin",
      },
      {
        id: "step-2",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/69804572003097f10bd7/view?project=69748622002fa8040371&mode=admin",
        durationSeconds: 180,
      },
      {
        id: "step-3",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/6980457e0005d568a560/view?project=69748622002fa8040371&mode=admin",
      },
      {
        id: "step-4",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/6980458c001548d3d2ef/view?project=69748622002fa8040371&mode=admin",
      },
      {
        id: "step-5",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/698045990034f85b8f44/view?project=69748622002fa8040371&mode=admin",
        durationSeconds: 300,
      },
      {
        id: "step-6",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/698045a6000960525b76/view?project=69748622002fa8040371&mode=admin",
      },
      {
        id: "step-7",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/698045b00000658dfdcf/view?project=69748622002fa8040371&mode=admin",
      },
    ],
  },
  {
    id: "006",
    slug: "no-yeast-veggie-delight",
    levelColor: "#2e9f50",
    levelIcon: "sentiment-satisfied",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBOo8gL0-AKrXh98anROLsGIZdtdKcZTDmcJzG3O6vIPWizglmN8kzowGHdqBvURjz112d_RqY3Kgu9E30mVG16t8scSx2IyKYOeZbyZwxHAVWNM6WpZue08vzbtMS5v9PxV4l9heMGn57aDCsQlwc-ZpgOtRN6eDkB1c3aCfcs24CKpdgEXVKWErDuhfK7W3_Nvf4Tn3Mu2AJn7gr9fEwWmWqqDUtU3IcA2tPAj0rIcCAacDXRWi8JC_-I-OKxtXYMjVC9lwOyCIAb",
    hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOo8gL0-AKrXh98anROLsGIZdtdKcZTDmcJzG3O6vIPWizglmN8kzowGHdqBvURjz112d_RqY3Kgu9E30mVG16t8scSx2IyKYOeZbyZwxHAVWNM6WpZue08vzbtMS5v9PxV4l9heMGn57aDCsQlwc-ZpgOtRN6eDkB1c3aCfcs24CKpdgEXVKWErDuhfK7W3_Nvf4Tn3Mu2AJn7gr9fEwWmWqqDUtU3IcA2tPAj0rIcCAacDXRWi8JC_-I-OKxtXYMjVC9lwOyCIAb",
    diet: "veg",
    rating: "4.4",
    ingredients: [
      {
        id: "capsicum",
        image: "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/6980dde00020de63a98a/view?project=69748622002fa8040371&mode=admin",
      },
      {
        id: "onion",
        image: "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/6980dd010020296d3a51/view?project=69748622002fa8040371&mode=admin",
      },
      {
        id: "sweet-corn",
        image: "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/6980dd7800091e32cc16/view?project=69748622002fa8040371&mode=admin",
      },
      {
        id: "mozzarella-cheese",
        image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94",
      },
    ],
    prepTools: [
      { id: "tool-pan", icon: "local-fire-department" },
      { id: "tool-lid", icon: "circle" },
      { id: "tool-bowl", icon: "soup-kitchen" },
      { id: "tool-spatula", icon: "restaurant" },
    ],
    prepIngredients: [
      { id: "ing-flour", icon: "grain", hasSubtitle: true },
      { id: "ing-baking-powder", icon: "science", hasSubtitle: true },
      { id: "ing-curd", icon: "opacity", hasSubtitle: true },
      { id: "ing-sauce", icon: "opacity", hasSubtitle: true },
      { id: "ing-cheese", icon: "egg", hasSubtitle: true },
    ],
    steps: [
      {
        id: "step-1",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/69804a8d001f5ef86f3e/view?project=69748622002fa8040371&mode=admin",
      },
      {
        id: "step-2",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/69804a9900125a4c7958/view?project=69748622002fa8040371&mode=admin",
        durationSeconds: 600,
      },
      {
        id: "step-3",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/69804aa4001ac162749e/view?project=69748622002fa8040371&mode=admin",
      },
      {
        id: "step-4",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/69804aae0026c707b7c0/view?project=69748622002fa8040371&mode=admin",
        durationSeconds: 120,
      },
      {
        id: "step-5",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/69804aba001bda0efab6/view?project=69748622002fa8040371&mode=admin",
      },
      {
        id: "step-6",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/69804ac60027bbdcfd54/view?project=69748622002fa8040371&mode=admin",
        durationSeconds: 420,
      },
      {
        id: "step-7",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/69804ad4001737e3b398/view?project=69748622002fa8040371&mode=admin",
      },
      {
        id: "step-8",
        image:
          "https://fra.cloud.appwrite.io/v1/storage/buckets/pizza-mate-bucket/files/69804adf003025daa7cb/view?project=69748622002fa8040371&mode=admin",
      },
    ],
  },
];
