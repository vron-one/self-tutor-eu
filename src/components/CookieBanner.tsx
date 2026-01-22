import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Cookie, X } from "lucide-react";
import { loadGtm } from "@/lib/gtm";

const COOKIE_CONSENT_KEY = "selftutor_cookie_consent";

export type CookieConsent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
};

const CookieBanner = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay to avoid flash on page load
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }

    try {
      const parsed = JSON.parse(consent) as CookieConsent;
      if (parsed.analytics) {
        loadGtm();
      }
    } catch {
      // Ignore malformed consent values
    }
  }, []);

  const saveConsent = (consent: CookieConsent) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
    setIsVisible(false);

    if (consent.analytics) {
      loadGtm();
    }
    
    // Dispatch custom event for tracking scripts to listen to
    window.dispatchEvent(new CustomEvent("cookieConsentUpdated", { detail: consent }));
  };

  const handleAcceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    });
  };

  const handleAcceptSelected = () => {
    saveConsent({
      ...preferences,
      necessary: true,
      timestamp: new Date().toISOString(),
    });
  };

  const handleRejectAll = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    });
  };

  const content = {
    en: {
      title: "Cookie Settings",
      description: "We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can choose which cookies you allow.",
      acceptAll: "Accept All",
      acceptSelected: "Accept Selected",
      rejectAll: "Reject All",
      customize: "Customize",
      necessary: "Necessary",
      necessaryDesc: "Required for the website to function properly.",
      analytics: "Analytics",
      analyticsDesc: "Help us understand how visitors interact with our website.",
      marketing: "Marketing",
      marketingDesc: "Used to deliver personalized advertisements.",
      learnMore: "Learn more in our",
      privacyPolicy: "Privacy Policy",
    },
    de: {
      title: "Cookie-Einstellungen",
      description: "Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern, den Website-Traffic zu analysieren und Inhalte zu personalisieren. Sie können wählen, welche Cookies Sie zulassen.",
      acceptAll: "Alle akzeptieren",
      acceptSelected: "Ausgewählte akzeptieren",
      rejectAll: "Alle ablehnen",
      customize: "Anpassen",
      necessary: "Notwendig",
      necessaryDesc: "Erforderlich für die ordnungsgemäße Funktion der Website.",
      analytics: "Analyse",
      analyticsDesc: "Helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.",
      marketing: "Marketing",
      marketingDesc: "Werden verwendet, um personalisierte Werbung zu liefern.",
      learnMore: "Mehr erfahren in unserer",
      privacyPolicy: "Datenschutzerklärung",
    },
  };

  const t = content[language as keyof typeof content] || content.en;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card border border-border rounded-2xl shadow-lg p-6">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex w-12 h-12 rounded-full bg-primary/10 items-center justify-center flex-shrink-0">
              <Cookie className="w-6 h-6 text-primary" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-lg">{t.title}</h3>
                <button 
                  onClick={handleRejectAll}
                  className="text-muted-foreground hover:text-foreground p-1"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <p className="text-muted-foreground text-sm mb-4">
                {t.description}{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  {t.learnMore} {t.privacyPolicy}
                </a>
              </p>

              {showDetails && (
                <div className="space-y-3 mb-4 p-4 bg-secondary/50 rounded-lg">
                  <label className="flex items-start gap-3 cursor-not-allowed opacity-70">
                    <input
                      type="checkbox"
                      checked={preferences.necessary}
                      disabled
                      className="mt-1 accent-primary"
                    />
                    <div>
                      <span className="font-medium">{t.necessary}</span>
                      <p className="text-xs text-muted-foreground">{t.necessaryDesc}</p>
                    </div>
                  </label>
                  
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                      className="mt-1 accent-primary"
                    />
                    <div>
                      <span className="font-medium">{t.analytics}</span>
                      <p className="text-xs text-muted-foreground">{t.analyticsDesc}</p>
                    </div>
                  </label>
                  
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences(prev => ({ ...prev, marketing: e.target.checked }))}
                      className="mt-1 accent-primary"
                    />
                    <div>
                      <span className="font-medium">{t.marketing}</span>
                      <p className="text-xs text-muted-foreground">{t.marketingDesc}</p>
                    </div>
                  </label>
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                {!showDetails && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setShowDetails(true)}
                  >
                    {t.customize}
                  </Button>
                )}
                {showDetails && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleAcceptSelected}
                  >
                    {t.acceptSelected}
                  </Button>
                )}
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleRejectAll}
                >
                  {t.rejectAll}
                </Button>
                <Button 
                  size="sm"
                  onClick={handleAcceptAll}
                >
                  {t.acceptAll}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

// Helper to get current consent status
export const getCookieConsent = (): CookieConsent | null => {
  const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
  return consent ? JSON.parse(consent) : null;
};

// Helper to check if analytics is allowed
export const isAnalyticsAllowed = (): boolean => {
  const consent = getCookieConsent();
  return consent?.analytics ?? false;
};
