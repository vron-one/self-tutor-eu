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
      whyDownload: "Warum SelfTutor herunterladen?",
      benefits: [
        "Lernen Sie überall und jederzeit - auch offline",
        "Erstellen Sie unbegrenzte Karteikarten-Decks",
        "Verfolgen Sie Ihren Fortschritt mit detaillierten Statistiken",
        "Spaced Repetition für besseres Behalten",
        "Schöne, ablenkungsfreie Oberfläche"
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
