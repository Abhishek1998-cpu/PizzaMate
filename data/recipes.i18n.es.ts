import type { RecipeI18n } from "./recipes.i18n.en";

export const recipesI18nEs: Record<string, RecipeI18n> = {
  "spicy-paneer-tikka": {
    title: "Pizza de Paneer Tikka Picante",
    description:
      "Una pizza fusión india con paneer tikka ahumado, pimiento crujiente y salsa makhani picante. Diseñada para cocinar en sartén o tawa en casa.",
    duration: "40 min",
    method: "Sartén / Tawa",
    level: "Intermedio",
    badge: "Más vendido",
    time: "40 min",
    toolsText: "Sartén / Tawa",
    ingredients: {
      "paneer-tikka": "Paneer tikka",
      capsicum: "Pimiento",
      "mozzarella-cheese": "Queso mozzarella",
    },
    prepTools: {
      "tool-pan": { label: "Sartén pesada / Tawa" },
      "tool-lid": { label: "Tapa" },
      "tool-spatula": { label: "Espátula" },
    },
    prepIngredients: {
      "ing-dough": { label: "Bola de masa para pizza", subtitle: "200–250 g, a temperatura ambiente" },
      "ing-sauce": { label: "Salsa makhani picante / salsa para pizza", subtitle: "3–4 cucharadas" },
      "ing-paneer": { label: "Paneer tikka", subtitle: "½ taza, salteado ligeramente" },
      "ing-cheese": { label: "Mozzarella / queso para pizza", subtitle: "½ taza, rallado" },
    },
    steps: {
      "step-1": {
        title: "Formar la base",
        subtitle: "1 de 10",
        description:
          "Espolvorea harina en la superficie y estira la masa suavemente hasta formar una base redonda de grosor medio.",
      },
      "step-2": {
        title: "Precalentar la sartén",
        subtitle: "2 de 10",
        description: "Calienta una sartén pesada a fuego bajo durante 3–4 minutos con la tapa puesta.",
      },
      "step-3": {
        title: "Extender la salsa",
        subtitle: "3 de 10",
        description: "Extiende la salsa makhani picante de manera uniforme, dejando un pequeño borde.",
      },
      "step-4": {
        title: "Añadir el paneer tikka",
        subtitle: "4 de 10",
        description: "Distribuye los trozos de paneer tikka por toda la base.",
      },
      "step-5": {
        title: "Añadir verduras",
        subtitle: "5 de 10",
        description: "Añade pimiento y cebolla en rodajas para un toque crujiente.",
      },
      "step-6": {
        title: "Añadir queso",
        subtitle: "6 de 10",
        description: "Espolvorea el queso de forma uniforme, cubriendo las guarniciones.",
      },
      "step-7": {
        title: "Cocinar tapado",
        subtitle: "7 de 10",
        description: "Coloca la pizza en la sartén, tapa y cocina a fuego bajo.",
      },
      "step-8": {
        title: "Revisar la base",
        subtitle: "8 de 10",
        description: "Levanta un poco y asegúrate de que la parte inferior esté crujiente y cocida.",
      },
      "step-9": {
        title: "Final: derretir el queso",
        subtitle: "9 de 10",
        description: "Si hace falta, cocina destapado para derretir un poco más el queso.",
      },
      "step-10": {
        title: "¡Pizza lista!",
        subtitle: "10 de 10",
        description: "Apaga el fuego, corta y sirve caliente.",
      },
    },
  },

  "cast-iron-margherita": {
    title: "Margherita en Sartén de Hierro",
    description:
      "Una margherita crujiente y burbujeante hecha en una sartén de hierro. Ideal para principiantes y perfecta si no tienes horno.",
    duration: "30 min",
    method: "Método en sartén",
    level: "Principiante",
    badge: "Mejor opción",
    time: "30 min",
    toolsText: "Hierro / Sartén",
    ingredients: {
      "tomato-sauce": "Salsa de tomate",
      mozzarella: "Mozzarella",
      basil: "Albahaca",
      "olive-oil": "Aceite de oliva",
    },
    prepTools: {
      "tool-cast-iron": { label: "Sartén de hierro" },
      "tool-lid": { label: "Tapa (o papel aluminio)" },
      "tool-spatula": { label: "Espátula" },
    },
    prepIngredients: {
      "ing-dough": { label: "Bola de masa para pizza", subtitle: "250 g, a temperatura ambiente" },
      "ing-sauce": { label: "Salsa de tomate", subtitle: "3 cucharadas" },
      "ing-cheese": { label: "Mozzarella", subtitle: "½ taza" },
      "ing-basil": { label: "Albahaca fresca", subtitle: "5–6 hojas" },
    },
    steps: {
      "step-1": {
        title: "Precalentar la sartén",
        subtitle: "1 de 6",
        description: "Calienta la sartén de hierro a fuego bajo durante 3–4 minutos.",
      },
      "step-2": {
        title: "Aceitar y presionar la masa",
        subtitle: "2 de 6",
        description: "Añade un poco de aceite y presiona la masa en la sartén para formar la base.",
      },
      "step-3": {
        title: "Añadir salsa y queso",
        subtitle: "3 de 6",
        description: "Extiende la salsa, añade mozzarella y unas hojas de albahaca.",
      },
      "step-4": {
        title: "Cocinar tapado",
        subtitle: "4 de 6",
        description: "Tapa y cocina a fuego bajo hasta que el queso se derrita y la base quede hecha.",
      },
      "step-5": {
        title: "Dorar la base",
        subtitle: "5 de 6",
        description: "Destapa y cocina 1–2 minutos para más crujiente.",
      },
      "step-6": {
        title: "Servir",
        subtitle: "6 de 6",
        description: "Corta, añade un chorrito de aceite de oliva y disfruta.",
      },
    },
  },

  "spicy-diavola": {
    title: "Diavola Picante",
    description:
      "Una pizza picante y ahumada con el toque intenso del salami y mucho sabor. Un gran paso si ya te sientes cómodo en la cocina.",
    duration: "45 min",
    method: "Preparación avanzada",
    level: "Intermedio",
    badge: "Picante",
    time: "45 min",
    toolsText: "Sartén / Horno",
    ingredients: {
      mozzarella: "Mozzarella",
      "tomato-sauce": "Salsa de tomate",
      "pepperoni-salami": "Pepperoni / salami",
      "chilli-flakes": "Hojuelas de chile",
      olives: "Aceitunas",
    },
    prepTools: {
      "tool-pan": { label: "Sartén pesada" },
      "tool-lid": { label: "Tapa" },
      "tool-knife": { label: "Cuchillo y tabla" },
    },
    prepIngredients: {
      "ing-dough": { label: "Masa para pizza", subtitle: "250 g" },
      "ing-sauce": { label: "Salsa de tomate", subtitle: "3 cucharadas" },
      "ing-cheese": { label: "Mozzarella", subtitle: "½ taza" },
      "ing-pepperoni": { label: "Pepperoni / salami", subtitle: "a gusto" },
      "ing-chilli": { label: "Hojuelas de chile", subtitle: "a gusto" },
    },
    steps: {
      "step-1": {
        title: "Preparar los ingredientes",
        subtitle: "1 de 6",
        description: "Corta las guarniciones y deja todo listo antes de empezar.",
      },
      "step-2": {
        title: "Precalentar",
        subtitle: "2 de 6",
        description: "Calienta tu sartén/horno según el método que uses.",
      },
      "step-3": {
        title: "Poner la salsa",
        subtitle: "3 de 6",
        description: "Extiende la salsa y una capa ligera de queso.",
      },
      "step-4": {
        title: "Añadir toppings picantes",
        subtitle: "4 de 6",
        description: "Añade toppings y hojuelas de chile. Mantén el equilibrio.",
      },
      "step-5": {
        title: "Cocinar",
        subtitle: "5 de 6",
        description: "Cocina hasta que el queso se derrita y los bordes se doren.",
      },
      "step-6": {
        title: "Finalizar y servir",
        subtitle: "6 de 6",
        description: "Deja reposar 1 minuto, corta y disfruta.",
      },
    },
  },

  "deep-dish-deluxe": {
    title: "Deep Dish Deluxe",
    description:
      "Una pizza estilo deep dish, gruesa y muy quesosa, con una cocción más larga. Ideal si controlas bien el calor y los tiempos.",
    duration: "60 min",
    method: "Alta temperatura",
    level: "Avanzado",
    badge: "Avanzado",
    time: "60 min",
    toolsText: "Alta temperatura",
    ingredients: {
      cheese: "Queso",
      "tomato-sauce": "Salsa de tomate",
      mushrooms: "Champiñones",
      olives: "Aceitunas",
    },
    prepTools: {
      "tool-deep-pan": { label: "Sartén profunda" },
      "tool-lid": { label: "Tapa" },
      "tool-spatula": { label: "Espátula" },
    },
    prepIngredients: {
      "ing-dough": { label: "Masa", subtitle: "300 g" },
      "ing-sauce": { label: "Salsa", subtitle: "4 cucharadas" },
      "ing-cheese": { label: "Queso", subtitle: "1 taza" },
      "ing-toppings": { label: "Toppings", subtitle: "a gusto" },
    },
    steps: {
      "step-1": {
        title: "Preparar la sartén profunda",
        subtitle: "1 de 7",
        description: "Engrasa bien la sartén y precalienta a fuego bajo.",
      },
      "step-2": {
        title: "Presionar la masa en los bordes",
        subtitle: "2 de 7",
        description: "Presiona la masa para formar la base y las paredes (estilo deep dish).",
      },
      "step-3": {
        title: "Primero una capa de queso",
        subtitle: "3 de 7",
        description: "Añade una capa de queso para proteger la base de la humedad.",
      },
      "step-4": {
        title: "Añadir toppings y salsa",
        subtitle: "4 de 7",
        description: "Añade los toppings y coloca la salsa por encima.",
      },
      "step-5": {
        title: "Cocinar tapado",
        subtitle: "5 de 7",
        description: "Cocina a fuego medio‑bajo hasta que la base quede firme.",
      },
      "step-6": {
        title: "Final a fuego alto",
        subtitle: "6 de 7",
        description: "Termina un momento a fuego más alto para dejar la base crujiente.",
      },
      "step-7": {
        title: "Reposar y servir",
        subtitle: "7 de 7",
        description: "Deja reposar 2 minutos, corta con cuidado y sirve.",
      },
    },
  },

  "tawa-margherita": {
    title: "Pizza Margherita a la Tawa",
    description:
      "Una margherita clásica cocinada en tawa con salsa de tomate, mozzarella y albahaca aromática. Simple, rápida y perfecta para principiantes.",
    duration: "20 min",
    method: "Tawa",
    level: "Principiante",
    badge: "Principiante",
    time: "20 min",
    toolsText: "Tawa",
    ingredients: {
      "pizza-dough": "Masa para pizza",
      "tomato-sauce": "Salsa de tomate",
      "mozzarella-cheese": "Queso mozzarella",
      "fresh-basil": "Albahaca fresca",
    },
    prepTools: {
      "tool-tawa": { label: "Tawa pesada" },
      "tool-lid": { label: "Tapa" },
      "tool-spatula": { label: "Espátula" },
    },
    prepIngredients: {
      "ing-dough": { label: "Bola de masa para pizza", subtitle: "200 g, a temperatura ambiente" },
      "ing-sauce": { label: "Salsa de tomate para pizza", subtitle: "2–3 cucharadas" },
      "ing-cheese": { label: "Queso mozzarella", subtitle: "½ taza, rallado" },
      "ing-basil": { label: "Hojas de albahaca fresca", subtitle: "4–6 hojas" },
    },
    steps: {
      "step-1": {
        title: "Preparar la masa",
        subtitle: "1 de 7",
        description:
          "Espolvorea un poco de harina y estira la masa hasta formar una base redonda de grosor medio.",
      },
      "step-2": {
        title: "Precalentar la tawa",
        subtitle: "2 de 7",
        description: "Calienta una tawa pesada a fuego bajo durante 3 minutos.",
      },
      "step-3": {
        title: "Añadir salsa",
        subtitle: "3 de 7",
        description: "Extiende la salsa de tomate dejando un pequeño borde.",
      },
      "step-4": {
        title: "Añadir queso",
        subtitle: "4 de 7",
        description: "Espolvorea la mozzarella de forma uniforme.",
      },
      "step-5": {
        title: "Cocinar tapado",
        subtitle: "5 de 7",
        description: "Coloca la pizza en la tawa, tapa y cocina a fuego bajo.",
      },
      "step-6": {
        title: "Añadir albahaca",
        subtitle: "6 de 7",
        description: "Cuando el queso se derrita, añade albahaca fresca por encima.",
      },
      "step-7": {
        title: "Servir caliente",
        subtitle: "7 de 7",
        description: "Apaga el fuego, corta y disfruta tu margherita clásica.",
      },
    },
  },

  "no-yeast-veggie-delight": {
    title: "Pizza Vegetariana Sin Levadura",
    description:
      "Una pizza vegetariana rápida y fácil sin levadura, cargada de verduras frescas, cocinada en sartén sin horno. Perfecta para antojos instantáneos.",
    duration: "30 min",
    method: "Sin horno",
    level: "Principiante",
    badge: "Principiante",
    time: "30 min",
    toolsText: "Sin horno",
    ingredients: {
      capsicum: "Pimiento",
      onion: "Cebolla",
      "sweet-corn": "Maíz dulce",
      "mozzarella-cheese": "Queso mozzarella",
    },
    prepTools: {
      "tool-pan": { label: "Sartén pesada / Tawa" },
      "tool-lid": { label: "Tapa" },
      "tool-bowl": { label: "Bol para mezclar" },
      "tool-spatula": { label: "Espátula" },
    },
    prepIngredients: {
      "ing-flour": { label: "Harina", subtitle: "1 taza" },
      "ing-baking-powder": { label: "Polvo de hornear", subtitle: "1 cucharadita" },
      "ing-curd": { label: "Yogur", subtitle: "½ taza" },
      "ing-sauce": { label: "Salsa para pizza / tomate", subtitle: "3 cucharadas" },
      "ing-cheese": { label: "Queso mozzarella", subtitle: "½ taza, rallado" },
    },
    steps: {
      "step-1": {
        title: "Preparar la masa sin levadura",
        subtitle: "1 de 8",
        description:
          "En un bol, mezcla harina, polvo de hornear, sal, yogur y agua hasta obtener una masa suave.",
      },
      "step-2": {
        title: "Reposar la masa",
        subtitle: "2 de 8",
        description: "Tapa y deja reposar la masa durante 10 minutos.",
      },
      "step-3": {
        title: "Formar la base",
        subtitle: "3 de 8",
        description: "Extiende la masa hasta formar una base redonda de grosor medio.",
      },
      "step-4": {
        title: "Precocinar la base",
        subtitle: "4 de 8",
        description: "Coloca la base en una tawa caliente y cocina ligeramente por un lado.",
      },
      "step-5": {
        title: "Añadir salsa y toppings",
        subtitle: "5 de 8",
        description: "Dale la vuelta a la base, extiende la salsa, añade verduras y espolvorea queso.",
      },
      "step-6": {
        title: "Cocinar tapado",
        subtitle: "6 de 8",
        description: "Tapa y cocina a fuego bajo hasta que el queso se derrita.",
      },
      "step-7": {
        title: "Comprobar el crujiente",
        subtitle: "7 de 8",
        description: "Levanta un poco para asegurarte de que la base esté cocida y crujiente.",
      },
      "step-8": {
        title: "Servir caliente",
        subtitle: "8 de 8",
        description: "Apaga el fuego, corta y disfruta tu pizza vegetariana.",
      },
    },
  },
};

