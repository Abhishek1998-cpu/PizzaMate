export const hi = {
  common: {
    appName: 'PizzaMate',
    comingSoon: 'जल्द आ रहा है',
    cancel: 'रद्द करें',
    confirm: 'पुष्टि करें',
    backToHome: 'होम पर जाएँ',
  },
  settings: {
    title: 'सेटिंग्स',
    generalPreferences: 'सामान्य प्राथमिकताएँ',
    appInformation: 'ऐप जानकारी',
    notifications: 'नोटिफिकेशन',
    notificationsEnabled: 'चालू',
    notificationsDisabled: 'बंद',
    notificationsDialogTitle: 'नोटिफिकेशन',
    notificationsDialogBody:
      'नोटिफिकेशन चालू करें ताकि PizzaMate टाइमर पूरा होने पर आपको अलर्ट कर सके (खासकर जब ऐप बैकग्राउंड में हो)।',
    notificationsAllow: 'अनुमति दें',
    notificationsNotNow: 'अभी नहीं',
    language: 'भाषा',
    darkMode: 'डार्क मोड',
    termsOfService: 'सेवा की शर्तें',
    privacyPolicy: 'गोपनीयता नीति',
    version: 'संस्करण',
    logout: 'लॉग आउट',
    logoutTitle: 'लॉग आउट करें?',
    logoutBody: 'क्या आप वाकई PizzaMate से लॉग आउट करना चाहते हैं?',
    logoutConfirm: 'लॉग आउट',
    languageEnglish: 'अंग्रेज़ी',
    languageHindi: 'हिंदी',
    languageFrench: 'फ़्रेंच',
    languageSpanish: 'स्पेनिश',
  },
  home: {
    greetingPrimary: 'नमस्ते, शेफ!',
    greetingAccent: 'आज क्या बनाएँगे?',
    cards: {
      choose: {
        title: 'पिज़्ज़ा चुनें',
        description: 'असली रेसिपीज़ का हमारा क्यूरेटेड कलेक्शन देखें',
        button: 'ब्राउज़ करें',
      },
      help: {
        title: 'मदद करें चुनने में',
        description: 'कन्फ्यूज़ हैं? हम आपका परफेक्ट पिज़्ज़ा मैच ढूँढेंगे',
        button: 'क्विज़ शुरू करें',
      },
      create: {
        title: 'अपना पिज़्ज़ा बनाएँ',
        description: 'शुरुआत से अपना मास्टरपीस बनाइए',
        button: 'बनाएँ',
      },
      fix: {
        title: 'मेरा पिज़्ज़ा ठीक करें',
        description: 'डो, क्रस्ट या सॉस की समस्या सुलझाएँ',
        button: 'मदद लें',
      },
    },
  },
  library: {
    title: 'पिज़्ज़ा लाइब्रेरी',
    searchPlaceholder: 'पिज़्ज़ा रेसिपी खोजें...',
    filters: {
      all: 'सभी',
      noOven: 'बिना ओवन',
      panTawa: 'पैन / तवा',
      beginner: 'शुरुआती',
    },
    viewRecipe: 'रेसिपी देखें',
  },
} as const;

