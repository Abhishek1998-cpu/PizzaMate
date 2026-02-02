export type StepI18n = {
  title: string;
  subtitle: string;
  description: string;
};

export type RecipeI18n = {
  title: string;
  description: string;
  duration: string;
  method: string;
  level: string;
  badge: string;
  time: string;
  toolsText: string;
  ingredients: Record<string, string>;
  prepTools: Record<string, { label: string }>;
  prepIngredients: Record<string, { label: string; subtitle?: string }>;
  steps: Record<string, StepI18n>;
};

export const recipesI18nEn: Record<string, RecipeI18n> = {
  "spicy-paneer-tikka": {
    title: "Spicy Paneer Tikka Pizza",
    description:
      "A bold Indian fusion pizza topped with smoky paneer tikka, crunchy capsicum, and spicy makhani sauce. Designed for pan or tawa cooking at home.",
    duration: "40 min",
    method: "Pan / Tawa",
    level: "Intermediate",
    badge: "Bestseller",
    time: "40m",
    toolsText: "Pan / Tawa",
    ingredients: {
      "paneer-tikka": "Paneer Tikka",
      capsicum: "Capsicum",
      "mozzarella-cheese": "Mozzarella Cheese",
    },
    prepTools: {
      "tool-pan": { label: "Heavy-bottom Pan / Tawa" },
      "tool-lid": { label: "Lid for Covering" },
      "tool-spatula": { label: "Spatula" },
    },
    prepIngredients: {
      "ing-dough": {
        label: "Pizza Dough Ball",
        subtitle: "200–250g, room temperature",
      },
      "ing-sauce": {
        label: "Spicy Makhani / Pizza Sauce",
        subtitle: "3–4 tbsp",
      },
      "ing-paneer": {
        label: "Paneer Tikka",
        subtitle: "½ cup, lightly sautéed",
      },
      "ing-cheese": {
        label: "Mozzarella / Pizza Cheese",
        subtitle: "½ cup, grated",
      },
    },
    steps: {
      "step-1": {
        title: "Shape the Pizza Base",
        subtitle: "1 of 10",
        description:
          "Dust the surface with flour and gently stretch the dough into a medium-thick round base.",
      },
      "step-2": {
        title: "Preheat the Pan",
        subtitle: "2 of 10",
        description:
          "Heat a heavy pan on low flame for 3–4 minutes with the lid on.",
      },
      "step-3": {
        title: "Spread the Sauce",
        subtitle: "3 of 10",
        description:
          "Spread spicy makhani sauce evenly, leaving a small border around the edges.",
      },
      "step-4": {
        title: "Add Paneer Tikka",
        subtitle: "4 of 10",
        description: "Evenly spread paneer tikka pieces across the base.",
      },
      "step-5": {
        title: "Add Vegetables",
        subtitle: "5 of 10",
        description: "Add sliced capsicum and onion evenly for crunch.",
      },
      "step-6": {
        title: "Add Cheese",
        subtitle: "6 of 10",
        description: "Sprinkle cheese evenly, covering all toppings.",
      },
      "step-7": {
        title: "Cook Covered",
        subtitle: "7 of 10",
        description:
          "Place pizza in the pan, cover with lid, and cook on low flame.",
      },
      "step-8": {
        title: "Check the Base",
        subtitle: "8 of 10",
        description: "Lift slightly and ensure the bottom is crisp and cooked.",
      },
      "step-9": {
        title: "Final Cheese Melt",
        subtitle: "9 of 10",
        description: "Cook uncovered for extra cheese melt if needed.",
      },
      "step-10": {
        title: "Pizza Ready!",
        subtitle: "10 of 10",
        description: "Turn off the flame, slice, and serve hot.",
      },
    },
  },

  "cast-iron-margherita": {
    title: "Cast Iron Margherita",
    description:
      "A crispy, bubbly margherita made in a cast iron skillet. Great for beginners and perfect when you don’t have an oven.",
    duration: "30 min",
    method: "Pan Method",
    level: "Beginner",
    badge: "Top Match",
    time: "30 mins",
    toolsText: "Cast Iron / Pan",
    ingredients: {
      "tomato-sauce": "Tomato Sauce",
      mozzarella: "Mozzarella",
      basil: "Basil",
      "olive-oil": "Olive Oil",
    },
    prepTools: {
      "tool-cast-iron": { label: "Cast Iron Skillet" },
      "tool-lid": { label: "Lid (or foil cover)" },
      "tool-spatula": { label: "Spatula" },
    },
    prepIngredients: {
      "ing-dough": { label: "Pizza Dough Ball", subtitle: "250g, room temp" },
      "ing-sauce": { label: "Tomato Sauce", subtitle: "3 tbsp" },
      "ing-cheese": { label: "Mozzarella", subtitle: "½ cup" },
      "ing-basil": { label: "Fresh Basil", subtitle: "5-6 leaves" },
    },
    steps: {
      "step-1": {
        title: "Preheat the skillet",
        subtitle: "1 of 6",
        description: "Heat the cast iron skillet on low for 3–4 minutes.",
      },
      "step-2": {
        title: "Oil + press the dough",
        subtitle: "2 of 6",
        description:
          "Add a little oil, then press the dough into the skillet to form a base.",
      },
      "step-3": {
        title: "Add sauce & cheese",
        subtitle: "3 of 6",
        description: "Spread sauce, add mozzarella, and a few basil leaves.",
      },
      "step-4": {
        title: "Cook covered",
        subtitle: "4 of 6",
        description: "Cover and cook on low until cheese melts and base sets.",
      },
      "step-5": {
        title: "Crisp the base",
        subtitle: "5 of 6",
        description: "Uncover and cook 1–2 minutes for extra crispness.",
      },
      "step-6": {
        title: "Serve",
        subtitle: "6 of 6",
        description: "Slice, add a drizzle of olive oil, and enjoy.",
      },
    },
  },

  "spicy-diavola": {
    title: "Spicy Diavola",
    description:
      "A spicy, smoky pizza with salami-style heat and bold flavor. A fun step up if you’re comfortable in the kitchen.",
    duration: "45 min",
    method: "Skilled Prep",
    level: "Intermediate",
    badge: "Spicy",
    time: "45 mins",
    toolsText: "Pan / Oven",
    ingredients: {
      mozzarella: "Mozzarella",
      "tomato-sauce": "Tomato Sauce",
      "pepperoni-salami": "Pepperoni / Salami",
      "chilli-flakes": "Chilli Flakes",
      olives: "Olives",
    },
    prepTools: {
      "tool-pan": { label: "Heavy-bottom Pan" },
      "tool-lid": { label: "Lid / cover" },
      "tool-knife": { label: "Knife & board" },
    },
    prepIngredients: {
      "ing-dough": { label: "Pizza Dough", subtitle: "250g" },
      "ing-sauce": { label: "Tomato Sauce", subtitle: "3 tbsp" },
      "ing-cheese": { label: "Mozzarella", subtitle: "½ cup" },
      "ing-pepperoni": { label: "Pepperoni / Salami", subtitle: "as you like" },
      "ing-chilli": { label: "Chilli flakes", subtitle: "to taste" },
    },
    steps: {
      "step-1": {
        title: "Prep toppings",
        subtitle: "1 of 6",
        description:
          "Slice toppings and keep everything ready before you start cooking.",
      },
      "step-2": {
        title: "Preheat",
        subtitle: "2 of 6",
        description: "Warm your pan/oven setup depending on your method.",
      },
      "step-3": {
        title: "Sauce it",
        subtitle: "3 of 6",
        description: "Spread sauce and a light layer of cheese.",
      },
      "step-4": {
        title: "Add spicy toppings",
        subtitle: "4 of 6",
        description: "Add toppings + chilli flakes. Keep it balanced.",
      },
      "step-5": {
        title: "Cook",
        subtitle: "5 of 6",
        description: "Cook until cheese melts and edges brown.",
      },
      "step-6": {
        title: "Finish & serve",
        subtitle: "6 of 6",
        description: "Rest 1 minute, slice, and enjoy.",
      },
    },
  },

  "deep-dish-deluxe": {
    title: "Deep Dish Deluxe",
    description:
      "A thick, cheesy deep dish style pizza with a longer cook. Best if you’re confident managing heat and timing.",
    duration: "60 min",
    method: "High Temp",
    level: "Advanced",
    badge: "Advanced",
    time: "60 mins",
    toolsText: "High Temp",
    ingredients: {
      cheese: "Cheese",
      "tomato-sauce": "Tomato Sauce",
      mushrooms: "Mushrooms",
      olives: "Olives",
    },
    prepTools: {
      "tool-deep-pan": { label: "Deep Pan" },
      "tool-lid": { label: "Lid / cover" },
      "tool-spatula": { label: "Spatula" },
    },
    prepIngredients: {
      "ing-dough": { label: "Dough", subtitle: "300g" },
      "ing-sauce": { label: "Sauce", subtitle: "4 tbsp" },
      "ing-cheese": { label: "Cheese", subtitle: "1 cup" },
      "ing-toppings": { label: "Toppings", subtitle: "as you like" },
    },
    steps: {
      "step-1": {
        title: "Prepare deep pan",
        subtitle: "1 of 7",
        description: "Oil the pan well and preheat on low.",
      },
      "step-2": {
        title: "Press dough up the sides",
        subtitle: "2 of 7",
        description: "Press dough to form a base and wall (deep dish style).",
      },
      "step-3": {
        title: "Layer cheese first",
        subtitle: "3 of 7",
        description:
          "Add a layer of cheese to protect the crust from moisture.",
      },
      "step-4": {
        title: "Add toppings + sauce",
        subtitle: "4 of 7",
        description: "Add toppings and spoon sauce on top.",
      },
      "step-5": {
        title: "Cook covered",
        subtitle: "5 of 7",
        description: "Cook on low-medium heat until the base is set.",
      },
      "step-6": {
        title: "High heat finish",
        subtitle: "6 of 7",
        description: "Finish on higher heat briefly to crisp the bottom.",
      },
      "step-7": {
        title: "Rest & serve",
        subtitle: "7 of 7",
        description: "Rest 2 minutes, slice carefully, and serve.",
      },
    },
  },

  "tawa-margherita": {
    title: "Tawa Margherita Pizza",
    description:
      "A classic margherita pizza cooked on a tawa with tomato sauce, mozzarella cheese, and fragrant basil. Simple, quick, and perfect for beginners.",
    duration: "20 min",
    method: "Tawa",
    level: "Beginner",
    badge: "Beginner",
    time: "20m",
    toolsText: "Tawa",
    ingredients: {
      "pizza-dough": "Pizza Dough",
      "tomato-sauce": "Tomato Sauce",
      "mozzarella-cheese": "Mozzarella Cheese",
      "fresh-basil": "Fresh Basil",
    },
    prepTools: {
      "tool-tawa": { label: "Heavy Tawa" },
      "tool-lid": { label: "Lid for Covering" },
      "tool-spatula": { label: "Spatula" },
    },
    prepIngredients: {
      "ing-dough": {
        label: "Pizza Dough Ball",
        subtitle: "200g, room temperature",
      },
      "ing-sauce": { label: "Tomato Pizza Sauce", subtitle: "2–3 tbsp" },
      "ing-cheese": { label: "Mozzarella Cheese", subtitle: "½ cup, grated" },
      "ing-basil": { label: "Fresh Basil Leaves", subtitle: "4–6 leaves" },
    },
    steps: {
      "step-1": {
        title: "Prepare the Dough",
        subtitle: "1 of 7",
        description:
          "Lightly dust the surface with flour and stretch the dough into a medium-thick round base.",
      },
      "step-2": {
        title: "Preheat the Tawa",
        subtitle: "2 of 7",
        description: "Heat a heavy tawa on low flame for 3 minutes.",
      },
      "step-3": {
        title: "Add Sauce",
        subtitle: "3 of 7",
        description:
          "Spread tomato sauce evenly over the base, leaving a small border.",
      },
      "step-4": {
        title: "Add Cheese",
        subtitle: "4 of 7",
        description: "Sprinkle mozzarella evenly across the pizza.",
      },
      "step-5": {
        title: "Cook Covered",
        subtitle: "5 of 7",
        description:
          "Place the pizza on the tawa, cover with a lid, and cook on low flame.",
      },
      "step-6": {
        title: "Add Basil",
        subtitle: "6 of 7",
        description: "Once cheese melts, add fresh basil leaves on top.",
      },
      "step-7": {
        title: "Serve Hot",
        subtitle: "7 of 7",
        description:
          "Turn off the flame, slice, and enjoy your classic margherita.",
      },
    },
  },

  "no-yeast-veggie-delight": {
    title: "No-Yeast Veggie Delight Pizza",
    description:
      "A quick and easy no-yeast veggie pizza loaded with fresh vegetables, cooked on a pan without an oven. Perfect for instant pizza cravings.",
    duration: "30 min",
    method: "No Oven",
    level: "Beginner",
    badge: "Beginner",
    time: "30m",
    toolsText: "No Oven",
    ingredients: {
      capsicum: "Capsicum",
      onion: "Onion",
      "sweet-corn": "Sweet Corn",
      "mozzarella-cheese": "Mozzarella Cheese",
    },
    prepTools: {
      "tool-pan": { label: "Heavy-bottom Pan / Tawa" },
      "tool-lid": { label: "Lid for Covering" },
      "tool-bowl": { label: "Mixing Bowl" },
      "tool-spatula": { label: "Spatula" },
    },
    prepIngredients: {
      "ing-flour": { label: "All-purpose Flour", subtitle: "1 cup" },
      "ing-baking-powder": { label: "Baking Powder", subtitle: "1 tsp" },
      "ing-curd": { label: "Curd / Yogurt", subtitle: "½ cup" },
      "ing-sauce": { label: "Pizza / Tomato Sauce", subtitle: "3 tbsp" },
      "ing-cheese": { label: "Mozzarella Cheese", subtitle: "½ cup, grated" },
    },
    steps: {
      "step-1": {
        title: "Prepare No-Yeast Dough",
        subtitle: "1 of 8",
        description:
          "In a bowl, mix flour, baking powder, salt, curd, and water to form a soft dough.",
      },
      "step-2": {
        title: "Rest the Dough",
        subtitle: "2 of 8",
        description: "Cover and rest the dough for 10 minutes.",
      },
      "step-3": {
        title: "Shape the Base",
        subtitle: "3 of 8",
        description: "Roll the dough into a medium-thick round base.",
      },
      "step-4": {
        title: "Pre-cook the Base",
        subtitle: "4 of 8",
        description:
          "Place the base on a hot tawa and cook lightly on one side.",
      },
      "step-5": {
        title: "Add Sauce & Toppings",
        subtitle: "5 of 8",
        description:
          "Flip the base, spread sauce, add veggies, and sprinkle cheese.",
      },
      "step-6": {
        title: "Cook Covered",
        subtitle: "6 of 8",
        description: "Cover with lid and cook on low flame until cheese melts.",
      },
      "step-7": {
        title: "Check Base Crispness",
        subtitle: "7 of 8",
        description: "Lift slightly to ensure the base is cooked and crisp.",
      },
      "step-8": {
        title: "Serve Hot",
        subtitle: "8 of 8",
        description:
          "Turn off the flame, slice, and enjoy your veggie delight pizza.",
      },
    },
  },
};
