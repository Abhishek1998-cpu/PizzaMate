export const es = {
  common: {
    appName: 'PizzaMate',
    comingSoon: 'Próximamente',
    cancel: 'Cancelar',
    confirm: 'Confirmar',
    backToHome: 'Volver al inicio',
  },
  settings: {
    title: 'Ajustes',
    generalPreferences: 'PREFERENCIAS GENERALES',
    appInformation: 'INFORMACIÓN DE LA APP',
    notifications: 'Notificaciones',
    notificationsEnabled: 'Activadas',
    notificationsDisabled: 'Desactivadas',
    notificationsDialogTitle: 'Notificaciones',
    notificationsDialogBody:
      'Activa las notificaciones para que PizzaMate pueda avisarte cuando terminen los temporizadores (especialmente si la app está en segundo plano).',
    notificationsAllow: 'Permitir',
    notificationsNotNow: 'Ahora no',
    language: 'Idioma',
    darkMode: 'Modo oscuro',
    termsOfService: 'Términos de servicio',
    privacyPolicy: 'Política de privacidad',
    version: 'Versión',
    logout: 'Cerrar sesión',
    logoutTitle: '¿Cerrar sesión?',
    logoutBody: '¿Seguro que quieres cerrar sesión de PizzaMate?',
    logoutConfirm: 'Cerrar sesión',
    languageEnglish: 'Inglés',
    languageHindi: 'Hindi',
    languageFrench: 'Francés',
    languageSpanish: 'Español',
    languageUrdu: 'Urdu',
  },
  home: {
    greetingPrimary: '¡Bienvenido, Chef!',
    greetingAccent: '¿Qué vamos a hornear hoy?',
    cards: {
      choose: {
        title: 'Elegir una pizza',
        description: 'Explora nuestra colección de recetas auténticas',
        button: 'Explorar',
      },
      help: {
        title: 'Ayúdame a elegir',
        description: '¿No estás seguro? Encontraremos tu pizza ideal',
        button: 'Empezar quiz',
      },
      create: {
        title: 'Crear mi pizza',
        description: 'Crea una obra maestra desde cero',
        button: 'Crear',
      },
      fix: {
        title: 'Arreglar mi pizza',
        description: 'Soluciona problemas de masa, borde o salsa',
        button: 'Obtener ayuda',
      },
    },
  },
  library: {
    title: 'Biblioteca de pizzas',
    searchPlaceholder: 'Buscar recetas de pizza...',
    filters: {
      all: 'Todas',
      noOven: 'Sin horno',
      panTawa: 'Sartén / Tawa',
      beginner: 'Principiante',
    },
    viewRecipe: 'Ver receta',
  },
} as const;

