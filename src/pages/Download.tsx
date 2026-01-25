import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Smartphone, CheckCircle, Download as DownloadIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackEvent } from "@/hooks/usePageTracking";

const Download = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Download SelfTutor",
      subtitle: "Get the app on your favorite device and start learning today",
      backHome: "Back to Home",
      ios: {
        title: "iOS App",
        description: "Download for iPhone and iPad",
        features: ["Optimized for iOS 15+", "Works offline", "Sync across devices"]
      },
      android: {
        title: "Android App",
        description: "Download for Android devices",
        features: ["Optimized for Android 10+", "Works offline", "Sync across devices"]
      },
      testflight: {
        title: "iOS TestFlight Beta",
        description: "Help us test the app on iOS with TestFlight.",
        note: "You need to install the TestFlight app from Apple before using the link.",
        cta: "Open TestFlight"
      },
      androidTesting: {
        title: "Android Testing Program",
        description: "Help us test the app on Android and get early access.",
        comingSoon: "Internal App Sharing (coming soon)",
        emailCta: "Email us to become a tester"
      },
      whyDownload: "Why Download SelfTutor?",
      benefits: [
        "Learn anywhere, anytime - even offline",
        "Create unlimited flashcard decks",
        "Track your progress with detailed statistics",
        "Spaced repetition for better retention",
        "Beautiful, distraction-free interface"
      ]
    },
    de: {
      title: "SelfTutor herunterladen",
      subtitle: "Holen Sie sich die App auf Ihrem Lieblingsgerät und beginnen Sie noch heute zu lernen",
      backHome: "Zurück zur Startseite",
      ios: {
        title: "iOS App",
        description: "Für iPhone und iPad herunterladen",
        features: ["Optimiert für iOS 15+", "Funktioniert offline", "Geräteübergreifende Synchronisation"]
      },
      android: {
        title: "Android App",
        description: "Für Android-Geräte herunterladen",
        features: ["Optimiert für Android 10+", "Funktioniert offline", "Geräteübergreifende Synchronisation"]
      },
      testflight: {
        title: "iOS TestFlight Beta",
        description: "Hilf uns, die App auf iOS mit TestFlight zu testen.",
        note: "Du musst zuerst die TestFlight-App von Apple aus dem App Store installieren, bevor du den Link nutzt.",
        cta: "TestFlight öffnen"
      },
      androidTesting: {
        title: "Android Testprogramm",
        description: "Hilf uns, die App auf Android zu testen und erhalte frühen Zugang.",
        comingSoon: "Internal App Sharing (kommt bald)",
        emailCta: "Schreib uns, um Testmitglied zu werden"
      },
      whyDownload: "Warum SelfTutor herunterladen?",
      benefits: [
        "Lernen Sie überall und jederzeit - auch offline",
        "Erstellen Sie unbegrenzte Karteikarten-Decks",
        "Verfolgen Sie Ihren Fortschritt mit detaillierten Statistiken",
        "Spaced Repetition für besseres Behalten",
        "Schöne, ablenkungsfreie Oberfläche"
      ]
    },
    it: {
      title: "Scarica SelfTutor",
      subtitle: "Scarica l'app sul tuo dispositivo preferito e inizia a imparare oggi",
      backHome: "Torna alla Home",
      ios: {
        title: "App iOS",
        description: "Scarica per iPhone e iPad",
        features: ["Ottimizzato per iOS 15+", "Funziona offline", "Sincronizzazione tra dispositivi"]
      },
      android: {
        title: "App Android",
        description: "Scarica per dispositivi Android",
        features: ["Ottimizzato per Android 10+", "Funziona offline", "Sincronizzazione tra dispositivi"]
      },
      testflight: {
        title: "Beta iOS TestFlight",
        description: "Aiutaci a testare l'app su iOS con TestFlight.",
        note: "Devi prima installare l'app TestFlight di Apple dall'App Store per usare il link.",
        cta: "Apri TestFlight"
      },
      androidTesting: {
        title: "Programma di test Android",
        description: "Aiutaci a testare l'app su Android e ottieni accesso anticipato.",
        comingSoon: "Internal App Sharing (in arrivo)",
        emailCta: "Scrivici per diventare tester"
      },
      whyDownload: "Perché scaricare SelfTutor?",
      benefits: [
        "Impara ovunque, in qualsiasi momento - anche offline",
        "Crea mazzi di flashcard illimitati",
        "Monitora i tuoi progressi con statistiche dettagliate",
        "Ripetizione spaziata per una migliore memorizzazione",
        "Interfaccia bella e senza distrazioni"
      ]
    },
    pt: {
      title: "Baixar SelfTutor",
      subtitle: "Baixe o app no seu dispositivo favorito e comece a aprender hoje",
      backHome: "Voltar para a Página Inicial",
      ios: {
        title: "App iOS",
        description: "Baixe para iPhone e iPad",
        features: ["Otimizado para iOS 15+", "Funciona offline", "Sincronização entre dispositivos"]
      },
      android: {
        title: "App Android",
        description: "Baixe para dispositivos Android",
        features: ["Otimizado para Android 10+", "Funciona offline", "Sincronização entre dispositivos"]
      },
      testflight: {
        title: "Beta iOS TestFlight",
        description: "Ajude-nos a testar o app no iOS com o TestFlight.",
        note: "Você precisa instalar primeiro o app TestFlight da Apple pela App Store para usar o link.",
        cta: "Abrir TestFlight"
      },
      androidTesting: {
        title: "Programa de testes Android",
        description: "Ajude-nos a testar o app no Android e tenha acesso antecipado.",
        comingSoon: "Internal App Sharing (em breve)",
        emailCta: "Envie um e-mail para virar tester"
      },
      whyDownload: "Por que baixar o SelfTutor?",
      benefits: [
        "Aprenda em qualquer lugar, a qualquer hora - até offline",
        "Crie baralhos de flashcards ilimitados",
        "Acompanhe seu progresso com estatísticas detalhadas",
        "Repetição espaçada para melhor retenção",
        "Interface bonita e sem distrações"
      ]
    },
    gr: {
      title: "Λήψη SelfTutor",
      subtitle: "Κατεβάστε την εφαρμογή στη συσκευή σας και ξεκινήστε να μαθαίνετε σήμερα",
      backHome: "Επιστροφή στην Αρχική",
      ios: {
        title: "Εφαρμογή iOS",
        description: "Λήψη για iPhone και iPad",
        features: ["Βελτιστοποιημένο για iOS 15+", "Λειτουργεί offline", "Συγχρονισμός μεταξύ συσκευών"]
      },
      android: {
        title: "Εφαρμογή Android",
        description: "Λήψη για συσκευές Android",
        features: ["Βελτιστοποιημένο για Android 10+", "Λειτουργεί offline", "Συγχρονισμός μεταξύ συσκευών"]
      },
      testflight: {
        title: "iOS TestFlight Beta",
        description: "Βοηθήστε μας να δοκιμάσουμε την εφαρμογή σε iOS με το TestFlight.",
        note: "Πρέπει πρώτα να εγκαταστήσετε την εφαρμογή TestFlight της Apple από το App Store για να χρησιμοποιήσετε τον σύνδεσμο.",
        cta: "Άνοιγμα TestFlight"
      },
      androidTesting: {
        title: "Πρόγραμμα δοκιμών Android",
        description: "Βοηθήστε μας να δοκιμάσουμε την εφαρμογή σε Android και αποκτήστε πρόωρη πρόσβαση.",
        comingSoon: "Internal App Sharing (σύντομα)",
        emailCta: "Στείλτε μας email για να γίνετε tester"
      },
      whyDownload: "Γιατί να κατεβάσετε το SelfTutor;",
      benefits: [
        "Μάθετε οπουδήποτε, οποτεδήποτε - ακόμα και offline",
        "Δημιουργήστε απεριόριστες δέσμες καρτών",
        "Παρακολουθήστε την πρόοδό σας με λεπτομερή στατιστικά",
        "Διαστημική επανάληψη για καλύτερη απομνημόνευση",
        "Όμορφο, χωρίς περισπασμούς περιβάλλον"
      ]
    },
    sp: {
      title: "Descargar SelfTutor",
      subtitle: "Obtén la app en tu dispositivo favorito y empieza a aprender hoy",
      backHome: "Volver al Inicio",
      ios: {
        title: "App iOS",
        description: "Descargar para iPhone y iPad",
        features: ["Optimizado para iOS 15+", "Funciona sin conexión", "Sincronización entre dispositivos"]
      },
      android: {
        title: "App Android",
        description: "Descargar para dispositivos Android",
        features: ["Optimizado para Android 10+", "Funciona sin conexión", "Sincronización entre dispositivos"]
      },
      testflight: {
        title: "Beta iOS TestFlight",
        description: "Ayúdanos a probar la app en iOS con TestFlight.",
        note: "Primero debes instalar la app TestFlight de Apple desde la App Store para usar el enlace.",
        cta: "Abrir TestFlight"
      },
      androidTesting: {
        title: "Programa de pruebas Android",
        description: "Ayúdanos a probar la app en Android y obtén acceso anticipado.",
        comingSoon: "Internal App Sharing (próximamente)",
        emailCta: "Envíanos un correo para ser tester"
      },
      whyDownload: "¿Por qué descargar SelfTutor?",
      benefits: [
        "Aprende en cualquier lugar y momento - incluso sin conexión",
        "Crea mazos de tarjetas ilimitados",
        "Sigue tu progreso con estadísticas detalladas",
        "Repetición espaciada para mejor retención",
        "Interfaz bonita y sin distracciones"
      ]
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          {t.backHome}
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* iOS Card */}
          <Card className="border-border bg-card">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">{t.ios.title}</CardTitle>
              <p className="text-muted-foreground">{t.ios.description}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                {t.ios.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a 
                href="https://apps.apple.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block transition-transform hover:scale-105"
                onClick={() => trackEvent("download_click", { platform: "ios", source: "download_page" })}
              >
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                  alt="Download on the App Store" 
                  className="h-12 mx-auto"
                />
              </a>
            </CardContent>
          </Card>

          {/* Android Card */}
          <Card className="border-border bg-card">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">{t.android.title}</CardTitle>
              <p className="text-muted-foreground">{t.android.description}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                {t.android.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a 
                href="https://play.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block transition-transform hover:scale-105"
                onClick={() => trackEvent("download_click", { platform: "android", source: "download_page" })}
              >
                <img 
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                  alt="Get it on Google Play" 
                  className="h-12 mx-auto"
                />
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Beta Testing Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <Card className="border-border bg-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{t.testflight.title}</CardTitle>
              <p className="text-muted-foreground">{t.testflight.description}</p>
              <p className="text-sm text-muted-foreground mt-2">{t.testflight.note}</p>
            </CardHeader>
            <CardContent className="flex justify-center">
              <a
                href="https://testflight.apple.com/v1/app/6758100911?build=195283673"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("download_click", { platform: "ios_testflight", source: "download_page" })}
              >
                <Button variant="default">{t.testflight.cta}</Button>
              </a>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{t.androidTesting.title}</CardTitle>
              <p className="text-muted-foreground">{t.androidTesting.description}</p>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-3">
              <Button variant="secondary" disabled className="w-full sm:w-auto">
                {t.androidTesting.comingSoon}
              </Button>
              <a
                href="mailto:selftutor@vron.one?subject=Android%20Testing%20Program"
                onClick={() => trackEvent("contact_click", { source: "download_page", topic: "android_testing" })}
              >
                <Button variant="default" className="w-full sm:w-auto">
                  {t.androidTesting.emailCta}
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center justify-center gap-2">
            <DownloadIcon className="w-6 h-6 text-primary" />
            {t.whyDownload}
          </h2>
          <ul className="space-y-3">
            {t.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Download;
