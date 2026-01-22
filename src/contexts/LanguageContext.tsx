import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "de" | "it" | "pt" | "gr" | "sp";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.features": "Features",
    "nav.howItWorks": "How It Works",
    "nav.pricing": "Pricing",
    "nav.downloadApp": "Download App",
    "nav.getStarted": "Get Started Free",
    // Hero
    "hero.badge": "Learn smarter, not harder",
    "hero.title": "Master Anything with",
    "hero.titleHighlight": "Smart Flashcards",
    "hero.description": "Create personalized flashcard decks, take quizzes, and learn new languages. Import from Excel or build from scratch. Start free today.",
    "hero.cta": "Start Learning Free",
    "hero.secondary": "See How It Works",
    "hero.freeDecks": "2 Free Decks",
    "hero.cardsEach": "50 Cards Each",
    "hero.noCard": "No Credit Card",
    // Features
    "features.title": "Everything You Need to Learn",
    "features.subtitle": "Powerful tools designed to make learning efficient, enjoyable, and effective.",
    // Pricing
    "pricing.title": "Simple, Transparent Pricing",
    "pricing.subtitle": "Start free and upgrade when you're ready. One-time payment, no subscriptions.",
    "pricing.free": "Free",
    "pricing.pro": "Pro",
    "pricing.ai": "AI Subscription",
    "pricing.forever": "forever",
    "pricing.oneTime": "one-time",
    "pricing.month": "/month",
    "pricing.comingSoon": "Coming Soon",
    // How It Works
    "howItWorks.title": "How It Works",
    "howItWorks.subtitle": "Get started in minutes and begin your learning journey today.",
  },
  de: {
    "nav.features": "Funktionen",
    "nav.howItWorks": "So funktioniert's",
    "nav.pricing": "Preise",
    "nav.downloadApp": "App herunterladen",
    "nav.getStarted": "Kostenlos starten",
    "hero.badge": "Lernen Sie klüger, nicht härter",
    "hero.title": "Meistere alles mit",
    "hero.titleHighlight": "Smarten Lernkarten",
    "hero.description": "Erstellen Sie personalisierte Lernkarten-Decks, machen Sie Quizze und lernen Sie neue Sprachen. Importieren Sie aus Excel oder erstellen Sie von Grund auf. Starten Sie heute kostenlos.",
    "hero.cta": "Kostenlos lernen",
    "hero.secondary": "So funktioniert's",
    "hero.freeDecks": "2 Gratis-Decks",
    "hero.cardsEach": "50 Karten je Deck",
    "hero.noCard": "Keine Kreditkarte",
    "features.title": "Alles was Sie zum Lernen brauchen",
    "features.subtitle": "Leistungsstarke Tools für effizientes, angenehmes und effektives Lernen.",
    "pricing.title": "Einfache, transparente Preise",
    "pricing.subtitle": "Starten Sie kostenlos und upgraden Sie, wenn Sie bereit sind. Einmalzahlung, keine Abos.",
    "pricing.free": "Kostenlos",
    "pricing.pro": "Pro",
    "pricing.ai": "KI-Abo",
    "pricing.forever": "für immer",
    "pricing.oneTime": "einmalig",
    "pricing.month": "/Monat",
    "pricing.comingSoon": "Demnächst",
    "howItWorks.title": "So funktioniert's",
    "howItWorks.subtitle": "Starten Sie in wenigen Minuten und beginnen Sie Ihre Lernreise noch heute.",
  },
  it: {
    "nav.features": "Funzionalità",
    "nav.howItWorks": "Come funziona",
    "nav.pricing": "Prezzi",
    "nav.downloadApp": "Scarica l'app",
    "nav.getStarted": "Inizia gratis",
    "hero.badge": "Impara in modo più intelligente",
    "hero.title": "Padroneggia tutto con",
    "hero.titleHighlight": "Flashcard intelligenti",
    "hero.description": "Crea mazzi di flashcard personalizzati, fai quiz e impara nuove lingue. Importa da Excel o crea da zero. Inizia gratis oggi.",
    "hero.cta": "Inizia a imparare gratis",
    "hero.secondary": "Scopri come funziona",
    "hero.freeDecks": "2 mazzi gratis",
    "hero.cardsEach": "50 carte ciascuno",
    "hero.noCard": "Nessuna carta di credito",
    "features.title": "Tutto ciò di cui hai bisogno per imparare",
    "features.subtitle": "Strumenti potenti progettati per rendere l'apprendimento efficiente e piacevole.",
    "pricing.title": "Prezzi semplici e trasparenti",
    "pricing.subtitle": "Inizia gratis e aggiorna quando sei pronto. Pagamento unico, nessun abbonamento.",
    "pricing.free": "Gratis",
    "pricing.pro": "Pro",
    "pricing.ai": "Abbonamento IA",
    "pricing.forever": "per sempre",
    "pricing.oneTime": "una tantum",
    "pricing.month": "/mese",
    "pricing.comingSoon": "Prossimamente",
    "howItWorks.title": "Come funziona",
    "howItWorks.subtitle": "Inizia in pochi minuti e comincia il tuo percorso di apprendimento oggi.",
  },
  pt: {
    "nav.features": "Recursos",
    "nav.howItWorks": "Como funciona",
    "nav.pricing": "Preços",
    "nav.downloadApp": "Baixar app",
    "nav.getStarted": "Começar grátis",
    "hero.badge": "Aprenda de forma mais inteligente",
    "hero.title": "Domine tudo com",
    "hero.titleHighlight": "Flashcards inteligentes",
    "hero.description": "Crie baralhos de flashcards personalizados, faça quizzes e aprenda novos idiomas. Importe do Excel ou crie do zero. Comece grátis hoje.",
    "hero.cta": "Começar a aprender grátis",
    "hero.secondary": "Veja como funciona",
    "hero.freeDecks": "2 baralhos grátis",
    "hero.cardsEach": "50 cartões cada",
    "hero.noCard": "Sem cartão de crédito",
    "features.title": "Tudo o que você precisa para aprender",
    "features.subtitle": "Ferramentas poderosas projetadas para tornar o aprendizado eficiente e agradável.",
    "pricing.title": "Preços simples e transparentes",
    "pricing.subtitle": "Comece grátis e faça upgrade quando estiver pronto. Pagamento único, sem assinaturas.",
    "pricing.free": "Grátis",
    "pricing.pro": "Pro",
    "pricing.ai": "Assinatura IA",
    "pricing.forever": "para sempre",
    "pricing.oneTime": "único",
    "pricing.month": "/mês",
    "pricing.comingSoon": "Em breve",
    "howItWorks.title": "Como funciona",
    "howItWorks.subtitle": "Comece em minutos e inicie sua jornada de aprendizado hoje.",
  },
  gr: {
    "nav.features": "Χαρακτηριστικά",
    "nav.howItWorks": "Πώς λειτουργεί",
    "nav.pricing": "Τιμές",
    "nav.downloadApp": "Λήψη εφαρμογής",
    "nav.getStarted": "Ξεκινήστε δωρεάν",
    "hero.badge": "Μάθετε πιο έξυπνα",
    "hero.title": "Κατακτήστε τα πάντα με",
    "hero.titleHighlight": "Έξυπνες κάρτες",
    "hero.description": "Δημιουργήστε εξατομικευμένες δέσμες καρτών, κάντε κουίζ και μάθετε νέες γλώσσες. Εισαγωγή από Excel ή δημιουργία από την αρχή.",
    "hero.cta": "Ξεκινήστε δωρεάν",
    "hero.secondary": "Δείτε πώς λειτουργεί",
    "hero.freeDecks": "2 δωρεάν δέσμες",
    "hero.cardsEach": "50 κάρτες η καθεμία",
    "hero.noCard": "Χωρίς πιστωτική κάρτα",
    "features.title": "Όλα όσα χρειάζεστε για να μάθετε",
    "features.subtitle": "Ισχυρά εργαλεία σχεδιασμένα για αποτελεσματική μάθηση.",
    "pricing.title": "Απλές, διαφανείς τιμές",
    "pricing.subtitle": "Ξεκινήστε δωρεάν και αναβαθμίστε όταν είστε έτοιμοι. Εφάπαξ πληρωμή.",
    "pricing.free": "Δωρεάν",
    "pricing.pro": "Pro",
    "pricing.ai": "Συνδρομή AI",
    "pricing.forever": "για πάντα",
    "pricing.oneTime": "εφάπαξ",
    "pricing.month": "/μήνα",
    "pricing.comingSoon": "Σύντομα",
    "howItWorks.title": "Πώς λειτουργεί",
    "howItWorks.subtitle": "Ξεκινήστε σε λίγα λεπτά και αρχίστε το ταξίδι μάθησής σας σήμερα.",
  },
  sp: {
    "nav.features": "Características",
    "nav.howItWorks": "Cómo funciona",
    "nav.pricing": "Precios",
    "nav.downloadApp": "Descargar app",
    "nav.getStarted": "Empezar gratis",
    "hero.badge": "Aprende de forma más inteligente",
    "hero.title": "Domina todo con",
    "hero.titleHighlight": "Tarjetas inteligentes",
    "hero.description": "Crea mazos de tarjetas personalizados, haz cuestionarios y aprende nuevos idiomas. Importa desde Excel o crea desde cero. Empieza gratis hoy.",
    "hero.cta": "Empezar a aprender gratis",
    "hero.secondary": "Ver cómo funciona",
    "hero.freeDecks": "2 mazos gratis",
    "hero.cardsEach": "50 tarjetas cada uno",
    "hero.noCard": "Sin tarjeta de crédito",
    "features.title": "Todo lo que necesitas para aprender",
    "features.subtitle": "Herramientas potentes diseñadas para hacer el aprendizaje eficiente y agradable.",
    "pricing.title": "Precios simples y transparentes",
    "pricing.subtitle": "Empieza gratis y mejora cuando estés listo. Pago único, sin suscripciones.",
    "pricing.free": "Gratis",
    "pricing.pro": "Pro",
    "pricing.ai": "Suscripción IA",
    "pricing.forever": "para siempre",
    "pricing.oneTime": "único",
    "pricing.month": "/mes",
    "pricing.comingSoon": "Próximamente",
    "howItWorks.title": "Cómo funciona",
    "howItWorks.subtitle": "Comienza en minutos y emprende tu viaje de aprendizaje hoy.",
  },
};

const languageNames: Record<Language, string> = {
  en: "English",
  de: "Deutsch",
  it: "Italiano",
  pt: "Português",
  gr: "Ελληνικά",
  sp: "Español",
};

const languageFlags: Record<Language, string> = {
  en: "🇬🇧",
  de: "🇩🇪",
  it: "🇮🇹",
  pt: "🇵🇹",
  gr: "🇬🇷",
  sp: "🇪🇸",
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function detectBrowserLanguage(): Language {
  const browserLang = navigator.language.split("-")[0].toLowerCase();
  const langMap: Record<string, Language> = {
    en: "en",
    de: "de",
    it: "it",
    pt: "pt",
    el: "gr",
    es: "sp",
  };
  return langMap[browserLang] || "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language") as Language;
    return saved || detectBrowserLanguage();
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export { languageNames, languageFlags };
