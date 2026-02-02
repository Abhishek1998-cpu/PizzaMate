import type { RecipeI18n } from "./recipes.i18n.en";

export const recipesI18nFr: Record<string, RecipeI18n> = {
  "spicy-paneer-tikka": {
    title: "Pizza Paneer Tikka Épicée",
    description:
      "Une pizza fusion indo‑italienne, garnie de paneer tikka fumé, de poivron croquant et d’une sauce makhani épicée. Conçue pour une cuisson à la poêle / tawa à la maison.",
    duration: "40 min",
    method: "Poêle / Tawa",
    level: "Intermédiaire",
    badge: "Meilleure vente",
    time: "40 min",
    toolsText: "Poêle / Tawa",
    ingredients: {
      "paneer-tikka": "Paneer tikka",
      capsicum: "Poivron",
      "mozzarella-cheese": "Mozzarella",
    },
    prepTools: {
      "tool-pan": { label: "Poêle lourde / Tawa" },
      "tool-lid": { label: "Couvercle" },
      "tool-spatula": { label: "Spatule" },
    },
    prepIngredients: {
      "ing-dough": { label: "Boule de pâte à pizza", subtitle: "200–250 g, température ambiante" },
      "ing-sauce": { label: "Sauce makhani épicée / sauce pizza", subtitle: "3–4 c. à s." },
      "ing-paneer": { label: "Paneer tikka", subtitle: "½ tasse, légèrement sauté" },
      "ing-cheese": { label: "Mozzarella / fromage à pizza", subtitle: "½ tasse, râpé" },
    },
    steps: {
      "step-1": {
        title: "Former la base",
        subtitle: "1 sur 10",
        description:
          "Farinez le plan de travail et étirez délicatement la pâte pour obtenir un disque d’épaisseur moyenne.",
      },
      "step-2": {
        title: "Préchauffer la poêle",
        subtitle: "2 sur 10",
        description: "Faites chauffer une poêle lourde à feu doux 3–4 minutes, couvercle fermé.",
      },
      "step-3": {
        title: "Étaler la sauce",
        subtitle: "3 sur 10",
        description: "Étalez la sauce makhani épicée en laissant un petit bord sur le pourtour.",
      },
      "step-4": {
        title: "Ajouter le paneer tikka",
        subtitle: "4 sur 10",
        description: "Répartissez les morceaux de paneer tikka sur la base.",
      },
      "step-5": {
        title: "Ajouter les légumes",
        subtitle: "5 sur 10",
        description: "Ajoutez poivron et oignon émincés pour le croquant.",
      },
      "step-6": {
        title: "Ajouter le fromage",
        subtitle: "6 sur 10",
        description: "Parsemez de fromage de façon uniforme pour couvrir les garnitures.",
      },
      "step-7": {
        title: "Cuire couvert",
        subtitle: "7 sur 10",
        description: "Placez la pizza dans la poêle, couvrez et laissez cuire à feu doux.",
      },
      "step-8": {
        title: "Vérifier la base",
        subtitle: "8 sur 10",
        description: "Soulevez légèrement pour vérifier que le dessous est bien cuit et croustillant.",
      },
      "step-9": {
        title: "Finition du fromage",
        subtitle: "9 sur 10",
        description: "Si besoin, finissez à découvert pour faire fondre davantage le fromage.",
      },
      "step-10": {
        title: "Pizza prête !",
        subtitle: "10 sur 10",
        description: "Coupez le feu, tranchez et servez bien chaud.",
      },
    },
  },

  "cast-iron-margherita": {
    title: "Margherita à la Poêle en Fonte",
    description:
      "Une margherita croustillante et bullée, cuite dans une poêle en fonte. Idéale pour débuter et parfaite quand on n’a pas de four.",
    duration: "30 min",
    method: "Méthode poêle",
    level: "Débutant",
    badge: "Meilleur choix",
    time: "30 min",
    toolsText: "Fonte / Poêle",
    ingredients: {
      "tomato-sauce": "Sauce tomate",
      mozzarella: "Mozzarella",
      basil: "Basilic",
      "olive-oil": "Huile d’olive",
    },
    prepTools: {
      "tool-cast-iron": { label: "Poêle en fonte" },
      "tool-lid": { label: "Couvercle (ou aluminium)" },
      "tool-spatula": { label: "Spatule" },
    },
    prepIngredients: {
      "ing-dough": { label: "Boule de pâte à pizza", subtitle: "250 g, température ambiante" },
      "ing-sauce": { label: "Sauce tomate", subtitle: "3 c. à s." },
      "ing-cheese": { label: "Mozzarella", subtitle: "½ tasse" },
      "ing-basil": { label: "Basilic frais", subtitle: "5–6 feuilles" },
    },
    steps: {
      "step-1": {
        title: "Préchauffer la poêle",
        subtitle: "1 sur 6",
        description: "Chauffez la poêle en fonte à feu doux 3–4 minutes.",
      },
      "step-2": {
        title: "Huiler et presser la pâte",
        subtitle: "2 sur 6",
        description: "Ajoutez un peu d’huile, puis pressez la pâte dans la poêle pour former la base.",
      },
      "step-3": {
        title: "Ajouter sauce et fromage",
        subtitle: "3 sur 6",
        description: "Étalez la sauce, ajoutez la mozzarella et quelques feuilles de basilic.",
      },
      "step-4": {
        title: "Cuire couvert",
        subtitle: "4 sur 6",
        description: "Couvrez et cuisez à feu doux jusqu’à ce que le fromage fonde et que la base prenne.",
      },
      "step-5": {
        title: "Rendre la base croustillante",
        subtitle: "5 sur 6",
        description: "Retirez le couvercle et cuisez 1–2 minutes pour plus de croustillant.",
      },
      "step-6": {
        title: "Servir",
        subtitle: "6 sur 6",
        description: "Tranchez, ajoutez un filet d’huile d’olive et dégustez.",
      },
    },
  },

  "spicy-diavola": {
    title: "Diavola Épicée",
    description:
      "Une pizza épicée et fumée, avec une chaleur type salami et des saveurs franches. Un bon niveau supérieur si vous êtes à l’aise en cuisine.",
    duration: "45 min",
    method: "Préparation avancée",
    level: "Intermédiaire",
    badge: "Épicé",
    time: "45 min",
    toolsText: "Poêle / Four",
    ingredients: {
      mozzarella: "Mozzarella",
      "tomato-sauce": "Sauce tomate",
      "pepperoni-salami": "Pepperoni / salami",
      "chilli-flakes": "Flocons de piment",
      olives: "Olives",
    },
    prepTools: {
      "tool-pan": { label: "Poêle lourde" },
      "tool-lid": { label: "Couvercle" },
      "tool-knife": { label: "Couteau et planche" },
    },
    prepIngredients: {
      "ing-dough": { label: "Pâte à pizza", subtitle: "250 g" },
      "ing-sauce": { label: "Sauce tomate", subtitle: "3 c. à s." },
      "ing-cheese": { label: "Mozzarella", subtitle: "½ tasse" },
      "ing-pepperoni": { label: "Pepperoni / salami", subtitle: "selon vos goûts" },
      "ing-chilli": { label: "Flocons de piment", subtitle: "à votre goût" },
    },
    steps: {
      "step-1": {
        title: "Préparer les garnitures",
        subtitle: "1 sur 6",
        description: "Coupez les garnitures et préparez tout avant de commencer la cuisson.",
      },
      "step-2": {
        title: "Préchauffer",
        subtitle: "2 sur 6",
        description: "Chauffez votre installation poêle/four selon votre méthode.",
      },
      "step-3": {
        title: "Mettre la sauce",
        subtitle: "3 sur 6",
        description: "Étalez la sauce et ajoutez une fine couche de fromage.",
      },
      "step-4": {
        title: "Ajouter les garnitures épicées",
        subtitle: "4 sur 6",
        description: "Ajoutez les garnitures et les flocons de piment. Gardez l’équilibre.",
      },
      "step-5": {
        title: "Cuire",
        subtitle: "5 sur 6",
        description: "Cuisez jusqu’à ce que le fromage fonde et que les bords dorent.",
      },
      "step-6": {
        title: "Finaliser et servir",
        subtitle: "6 sur 6",
        description: "Laissez reposer 1 minute, tranchez et dégustez.",
      },
    },
  },

  "deep-dish-deluxe": {
    title: "Deep Dish Deluxe",
    description:
      "Une pizza style deep‑dish, épaisse et très fromagée, avec une cuisson plus longue. Parfaite si vous gérez bien la chaleur et le timing.",
    duration: "60 min",
    method: "Haute température",
    level: "Avancé",
    badge: "Avancé",
    time: "60 min",
    toolsText: "Haute température",
    ingredients: {
      cheese: "Fromage",
      "tomato-sauce": "Sauce tomate",
      mushrooms: "Champignons",
      olives: "Olives",
    },
    prepTools: {
      "tool-deep-pan": { label: "Poêle profonde" },
      "tool-lid": { label: "Couvercle" },
      "tool-spatula": { label: "Spatule" },
    },
    prepIngredients: {
      "ing-dough": { label: "Pâte", subtitle: "300 g" },
      "ing-sauce": { label: "Sauce", subtitle: "4 c. à s." },
      "ing-cheese": { label: "Fromage", subtitle: "1 tasse" },
      "ing-toppings": { label: "Garnitures", subtitle: "selon vos goûts" },
    },
    steps: {
      "step-1": {
        title: "Préparer la poêle profonde",
        subtitle: "1 sur 7",
        description: "Huilez bien la poêle et préchauffez à feu doux.",
      },
      "step-2": {
        title: "Presser la pâte sur les bords",
        subtitle: "2 sur 7",
        description: "Pressez la pâte pour former une base et des parois (style deep‑dish).",
      },
      "step-3": {
        title: "Mettre le fromage en premier",
        subtitle: "3 sur 7",
        description: "Ajoutez une couche de fromage pour protéger la croûte de l’humidité.",
      },
      "step-4": {
        title: "Ajouter garnitures et sauce",
        subtitle: "4 sur 7",
        description: "Ajoutez les garnitures puis déposez la sauce par-dessus.",
      },
      "step-5": {
        title: "Cuire couvert",
        subtitle: "5 sur 7",
        description: "Cuisez à feu doux‑moyen jusqu’à ce que la base soit bien prise.",
      },
      "step-6": {
        title: "Finition à feu fort",
        subtitle: "6 sur 7",
        description: "Terminez brièvement à feu plus fort pour croustiller le dessous.",
      },
      "step-7": {
        title: "Repos et service",
        subtitle: "7 sur 7",
        description: "Laissez reposer 2 minutes, tranchez délicatement et servez.",
      },
    },
  },

  "tawa-margherita": {
    title: "Pizza Margherita à la Tawa",
    description:
      "Une margherita classique cuite sur une tawa avec sauce tomate, mozzarella et basilic parfumé. Simple, rapide et parfaite pour débuter.",
    duration: "20 min",
    method: "Tawa",
    level: "Débutant",
    badge: "Débutant",
    time: "20 min",
    toolsText: "Tawa",
    ingredients: {
      "pizza-dough": "Pâte à pizza",
      "tomato-sauce": "Sauce tomate",
      "mozzarella-cheese": "Mozzarella",
      "fresh-basil": "Basilic frais",
    },
    prepTools: {
      "tool-tawa": { label: "Tawa lourde" },
      "tool-lid": { label: "Couvercle" },
      "tool-spatula": { label: "Spatule" },
    },
    prepIngredients: {
      "ing-dough": { label: "Boule de pâte à pizza", subtitle: "200 g, température ambiante" },
      "ing-sauce": { label: "Sauce tomate pour pizza", subtitle: "2–3 c. à s." },
      "ing-cheese": { label: "Mozzarella", subtitle: "½ tasse, râpée" },
      "ing-basil": { label: "Feuilles de basilic frais", subtitle: "4–6 feuilles" },
    },
    steps: {
      "step-1": {
        title: "Préparer la pâte",
        subtitle: "1 sur 7",
        description:
          "Farinez légèrement le plan de travail et étirez la pâte pour obtenir un disque d’épaisseur moyenne.",
      },
      "step-2": {
        title: "Préchauffer la tawa",
        subtitle: "2 sur 7",
        description: "Chauffez une tawa lourde à feu doux pendant 3 minutes.",
      },
      "step-3": {
        title: "Ajouter la sauce",
        subtitle: "3 sur 7",
        description: "Étalez la sauce tomate en laissant un petit bord.",
      },
      "step-4": {
        title: "Ajouter le fromage",
        subtitle: "4 sur 7",
        description: "Parsemez la mozzarella uniformément sur la pizza.",
      },
      "step-5": {
        title: "Cuire couvert",
        subtitle: "5 sur 7",
        description: "Déposez la pizza sur la tawa, couvrez et cuisez à feu doux.",
      },
      "step-6": {
        title: "Ajouter le basilic",
        subtitle: "6 sur 7",
        description: "Quand le fromage fond, ajoutez le basilic frais par-dessus.",
      },
      "step-7": {
        title: "Servir chaud",
        subtitle: "7 sur 7",
        description: "Coupez le feu, tranchez et dégustez votre margherita.",
      },
    },
  },

  "no-yeast-veggie-delight": {
    title: "Pizza Végétarienne Sans Levure",
    description:
      "Une pizza végétarienne rapide et facile sans levure, garnie de légumes frais, cuite à la poêle sans four. Parfaite pour une envie de pizza instantanée.",
    duration: "30 min",
    method: "Sans four",
    level: "Débutant",
    badge: "Débutant",
    time: "30 min",
    toolsText: "Sans four",
    ingredients: {
      capsicum: "Poivron",
      onion: "Oignon",
      "sweet-corn": "Maïs doux",
      "mozzarella-cheese": "Mozzarella",
    },
    prepTools: {
      "tool-pan": { label: "Poêle lourde / Tawa" },
      "tool-lid": { label: "Couvercle" },
      "tool-bowl": { label: "Bol de mélange" },
      "tool-spatula": { label: "Spatule" },
    },
    prepIngredients: {
      "ing-flour": { label: "Farine", subtitle: "1 tasse" },
      "ing-baking-powder": { label: "Levure chimique", subtitle: "1 c. à c." },
      "ing-curd": { label: "Yaourt", subtitle: "½ tasse" },
      "ing-sauce": { label: "Sauce pizza / tomate", subtitle: "3 c. à s." },
      "ing-cheese": { label: "Mozzarella", subtitle: "½ tasse, râpée" },
    },
    steps: {
      "step-1": {
        title: "Préparer la pâte sans levure",
        subtitle: "1 sur 8",
        description:
          "Dans un bol, mélangez farine, levure chimique, sel, yaourt et eau pour obtenir une pâte souple.",
      },
      "step-2": {
        title: "Laisser reposer la pâte",
        subtitle: "2 sur 8",
        description: "Couvrez et laissez reposer 10 minutes.",
      },
      "step-3": {
        title: "Former la base",
        subtitle: "3 sur 8",
        description: "Étalez la pâte pour obtenir un disque d’épaisseur moyenne.",
      },
      "step-4": {
        title: "Précuire la base",
        subtitle: "4 sur 8",
        description: "Déposez la base sur une tawa chaude et cuisez légèrement un côté.",
      },
      "step-5": {
        title: "Ajouter sauce et garnitures",
        subtitle: "5 sur 8",
        description: "Retournez la base, étalez la sauce, ajoutez les légumes et parsemez de fromage.",
      },
      "step-6": {
        title: "Cuire couvert",
        subtitle: "6 sur 8",
        description: "Couvrez et cuisez à feu doux jusqu’à ce que le fromage fonde.",
      },
      "step-7": {
        title: "Vérifier le croustillant",
        subtitle: "7 sur 8",
        description: "Soulevez légèrement pour vérifier que la base est cuite et croustillante.",
      },
      "step-8": {
        title: "Servir chaud",
        subtitle: "8 sur 8",
        description: "Coupez le feu, tranchez et profitez de votre pizza veggie.",
      },
    },
  },
};

