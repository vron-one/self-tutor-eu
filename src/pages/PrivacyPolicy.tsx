import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const PrivacyPolicy = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated",
      intro: {
        title: "Introduction",
        text: "At SelfTutor, we take your privacy seriously. This Privacy Policy explains how we handle your data and what measures we take to protect your privacy.",
      },
      noBackend: {
        title: "Offline-First Application",
        text1: "SelfTutor is designed as an offline-first mobile application. This means:",
        points: [
          "All your data is stored locally on your device",
          "No backend servers are used to process or store your personal data",
          "Your flashcards, learning progress, and settings remain entirely on your mobile device",
          "The application functions fully without an internet connection",
        ],
        text2: "Because all data processing happens locally on your device, your personal learning data never leaves your phone or tablet.",
      },
      dataCollection: {
        title: "Data Collection",
        text: "Since SelfTutor operates entirely offline without backend services, we do not collect, transmit, or store any of your personal data on external servers. Your learning content, progress, and preferences are stored only on your local device.",
      },
      cookies: {
        title: "Cookies & GDPR Compliance",
        text1: "For our website (selftutor.eu), we may use cookies to enhance your browsing experience. If cookies are used that require consent under GDPR or other applicable privacy regulations, we will:",
        points: [
          "Display a cookie consent banner before setting any non-essential cookies",
          "Provide clear information about what cookies are used and for what purpose",
          "Allow you to accept or reject non-essential cookies",
          "Respect your cookie preferences throughout your session",
        ],
        text2: "Essential cookies required for the basic functionality of the website may be set without consent, as permitted by law.",
      },
      rights: {
        title: "Your Rights",
        text: "Under GDPR and other applicable privacy laws, you have the right to:",
        points: [
          "Access any personal data we may hold about you",
          "Request correction of inaccurate data",
          "Request deletion of your data",
          "Object to data processing",
          "Data portability",
        ],
        text2: "However, since SelfTutor's mobile app stores all data locally on your device, you have full control over your data at all times. You can delete all app data by uninstalling the application or clearing the app data through your device settings.",
      },
      children: {
        title: "Children's Privacy",
        text: "SelfTutor is suitable for users of all ages. Since no personal data is collected or transmitted, the application is safe for use by children under appropriate parental guidance.",
      },
      changes: {
        title: "Changes to This Policy",
        text: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.",
      },
      contact: {
        title: "Contact Us",
        text: "If you have any questions about this Privacy Policy, please contact us at:",
      },
    },
    de: {
      title: "Datenschutzerklärung",
      lastUpdated: "Zuletzt aktualisiert",
      intro: {
        title: "Einleitung",
        text: "Bei SelfTutor nehmen wir Ihre Privatsphäre ernst. Diese Datenschutzerklärung erklärt, wie wir mit Ihren Daten umgehen und welche Maßnahmen wir zum Schutz Ihrer Privatsphäre ergreifen.",
      },
      noBackend: {
        title: "Offline-First Anwendung",
        text1: "SelfTutor ist als Offline-First Mobile-Anwendung konzipiert. Das bedeutet:",
        points: [
          "Alle Ihre Daten werden lokal auf Ihrem Gerät gespeichert",
          "Es werden keine Backend-Server zur Verarbeitung oder Speicherung Ihrer persönlichen Daten verwendet",
          "Ihre Karteikarten, Lernfortschritte und Einstellungen verbleiben vollständig auf Ihrem mobilen Gerät",
          "Die Anwendung funktioniert vollständig ohne Internetverbindung",
        ],
        text2: "Da die gesamte Datenverarbeitung lokal auf Ihrem Gerät stattfindet, verlassen Ihre persönlichen Lerndaten niemals Ihr Telefon oder Tablet.",
      },
      dataCollection: {
        title: "Datenerhebung",
        text: "Da SelfTutor vollständig offline ohne Backend-Dienste arbeitet, erheben, übertragen oder speichern wir keine Ihrer persönlichen Daten auf externen Servern. Ihre Lerninhalte, Fortschritte und Präferenzen werden nur auf Ihrem lokalen Gerät gespeichert.",
      },
      cookies: {
        title: "Cookies & DSGVO-Konformität",
        text1: "Für unsere Website (selftutor.eu) verwenden wir möglicherweise Cookies, um Ihr Browsing-Erlebnis zu verbessern. Wenn Cookies verwendet werden, die nach der DSGVO oder anderen anwendbaren Datenschutzbestimmungen eine Einwilligung erfordern, werden wir:",
        points: [
          "Ein Cookie-Zustimmungsbanner anzeigen, bevor nicht-essentielle Cookies gesetzt werden",
          "Klare Informationen darüber bereitstellen, welche Cookies verwendet werden und zu welchem Zweck",
          "Ihnen ermöglichen, nicht-essentielle Cookies zu akzeptieren oder abzulehnen",
          "Ihre Cookie-Präferenzen während Ihrer gesamten Sitzung respektieren",
        ],
        text2: "Essentielle Cookies, die für die grundlegende Funktionalität der Website erforderlich sind, können gemäß den gesetzlichen Bestimmungen ohne Einwilligung gesetzt werden.",
      },
      rights: {
        title: "Ihre Rechte",
        text: "Nach der DSGVO und anderen anwendbaren Datenschutzgesetzen haben Sie das Recht auf:",
        points: [
          "Zugang zu personenbezogenen Daten, die wir möglicherweise über Sie haben",
          "Berichtigung unrichtiger Daten",
          "Löschung Ihrer Daten",
          "Widerspruch gegen die Datenverarbeitung",
          "Datenübertragbarkeit",
        ],
        text2: "Da die mobile App von SelfTutor jedoch alle Daten lokal auf Ihrem Gerät speichert, haben Sie jederzeit die volle Kontrolle über Ihre Daten. Sie können alle App-Daten löschen, indem Sie die Anwendung deinstallieren oder die App-Daten über Ihre Geräteeinstellungen löschen.",
      },
      children: {
        title: "Datenschutz für Kinder",
        text: "SelfTutor ist für Benutzer jeden Alters geeignet. Da keine personenbezogenen Daten erhoben oder übertragen werden, ist die Anwendung unter angemessener elterlicher Aufsicht auch für Kinder sicher.",
      },
      changes: {
        title: "Änderungen dieser Richtlinie",
        text: "Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Alle Änderungen werden auf dieser Seite mit einem aktualisierten Revisionsdatum veröffentlicht.",
      },
      contact: {
        title: "Kontakt",
        text: "Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte unter:",
      },
    },
  };

  const t = language === "de" ? content.de : content.en;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-foreground mb-2">{t.title}</h1>
          <p className="text-muted-foreground mb-8">
            {t.lastUpdated}: {new Date().toLocaleDateString(language === "de" ? "de-DE" : "en-US")}
          </p>

          <div className="space-y-8">
            {/* Introduction */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t.intro.title}</h2>
              <p className="text-muted-foreground">{t.intro.text}</p>
            </section>

            {/* Offline-First */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t.noBackend.title}</h2>
              <p className="text-muted-foreground mb-4">{t.noBackend.text1}</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                {t.noBackend.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <p className="text-muted-foreground">{t.noBackend.text2}</p>
            </section>

            {/* Data Collection */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t.dataCollection.title}</h2>
              <p className="text-muted-foreground">{t.dataCollection.text}</p>
            </section>

            {/* Cookies & GDPR */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t.cookies.title}</h2>
              <p className="text-muted-foreground mb-4">{t.cookies.text1}</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                {t.cookies.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <p className="text-muted-foreground">{t.cookies.text2}</p>
            </section>

            {/* Your Rights */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t.rights.title}</h2>
              <p className="text-muted-foreground mb-4">{t.rights.text}</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                {t.rights.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <p className="text-muted-foreground">{t.rights.text2}</p>
            </section>

            {/* Children's Privacy */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t.children.title}</h2>
              <p className="text-muted-foreground">{t.children.text}</p>
            </section>

            {/* Changes */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t.changes.title}</h2>
              <p className="text-muted-foreground">{t.changes.text}</p>
            </section>

            {/* Contact */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t.contact.title}</h2>
              <p className="text-muted-foreground mb-2">{t.contact.text}</p>
              <a href="mailto:selftutor@vron.one" className="text-primary hover:underline font-medium">
                selftutor@vron.one
              </a>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
