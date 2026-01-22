import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const TermsOfService = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Terms of Service",
      lastUpdated: "Last updated",
      intro: {
        title: "Agreement to Terms",
        text: "By downloading, installing, or using SelfTutor, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the application.",
      },
      service: {
        title: "Description of Service",
        text: "SelfTutor is a mobile flashcard learning application designed to help users study and memorize information effectively. The application operates entirely offline on your mobile device.",
      },
      license: {
        title: "License",
        text1: "We grant you a limited, non-exclusive, non-transferable, revocable license to use SelfTutor for personal, non-commercial purposes, subject to these Terms.",
        text2: "You may not:",
        points: [
          "Copy, modify, or distribute the application",
          "Reverse engineer, decompile, or disassemble the application",
          "Rent, lease, or lend the application to third parties",
          "Use the application for any unlawful purpose",
          "Remove any copyright or proprietary notices from the application",
        ],
      },
      content: {
        title: "User Content",
        text: "You retain ownership of any content (flashcards, notes, etc.) you create within SelfTutor. Since all data is stored locally on your device, you are solely responsible for backing up your content. We are not responsible for any loss of user-created content.",
      },
      intellectual: {
        title: "Intellectual Property",
        text: "SelfTutor and its original content, features, and functionality are owned by Thomas Neusser / vron.one and are protected by international copyright, trademark, and other intellectual property laws.",
      },
      disclaimer: {
        title: "Disclaimer of Warranties",
        text: 'SelfTutor is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that the application will be uninterrupted, error-free, or free of viruses or other harmful components.',
      },
      limitation: {
        title: "Limitation of Liability",
        text: "To the fullest extent permitted by law, Thomas Neusser / vron.one shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, or other intangible losses resulting from your use of the application.",
      },
      changes: {
        title: "Changes to Terms",
        text: "We reserve the right to modify these Terms at any time. We will notify users of any material changes by updating the date at the top of these Terms. Your continued use of the application after any changes constitutes acceptance of the new Terms.",
      },
      termination: {
        title: "Termination",
        text: "We may terminate or suspend your access to the application immediately, without prior notice, for any reason whatsoever, including without limitation if you breach these Terms.",
      },
      governing: {
        title: "Governing Law",
        text: "These Terms shall be governed by and construed in accordance with the laws of Austria, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Austria.",
      },
      contact: {
        title: "Contact Us",
        text: "If you have any questions about these Terms of Service, please contact us at:",
      },
    },
    de: {
      title: "Nutzungsbedingungen",
      lastUpdated: "Zuletzt aktualisiert",
      intro: {
        title: "Zustimmung zu den Bedingungen",
        text: "Durch das Herunterladen, Installieren oder Nutzen von SelfTutor stimmen Sie diesen Nutzungsbedingungen zu. Wenn Sie diesen Bedingungen nicht zustimmen, nutzen Sie die Anwendung bitte nicht.",
      },
      service: {
        title: "Beschreibung des Dienstes",
        text: "SelfTutor ist eine mobile Karteikarten-Lernanwendung, die Benutzern helfen soll, Informationen effektiv zu lernen und zu merken. Die Anwendung funktioniert vollständig offline auf Ihrem mobilen Gerät.",
      },
      license: {
        title: "Lizenz",
        text1: "Wir gewähren Ihnen eine eingeschränkte, nicht-exklusive, nicht übertragbare, widerrufliche Lizenz zur Nutzung von SelfTutor für persönliche, nicht-kommerzielle Zwecke, vorbehaltlich dieser Bedingungen.",
        text2: "Sie dürfen nicht:",
        points: [
          "Die Anwendung kopieren, modifizieren oder verbreiten",
          "Die Anwendung reverse-engineeren, dekompilieren oder disassemblieren",
          "Die Anwendung an Dritte vermieten, verleasen oder verleihen",
          "Die Anwendung für rechtswidrige Zwecke nutzen",
          "Urheberrechts- oder Eigentumshinweise aus der Anwendung entfernen",
        ],
      },
      content: {
        title: "Benutzerinhalte",
        text: "Sie behalten das Eigentum an allen Inhalten (Karteikarten, Notizen usw.), die Sie in SelfTutor erstellen. Da alle Daten lokal auf Ihrem Gerät gespeichert werden, sind Sie allein für die Sicherung Ihrer Inhalte verantwortlich. Wir sind nicht verantwortlich für den Verlust von benutzergenerierten Inhalten.",
      },
      intellectual: {
        title: "Geistiges Eigentum",
        text: "SelfTutor und seine ursprünglichen Inhalte, Funktionen und Funktionalitäten sind Eigentum von Thomas Neusser / vron.one und sind durch internationale Urheberrechts-, Marken- und andere Gesetze zum Schutz geistigen Eigentums geschützt.",
      },
      disclaimer: {
        title: "Gewährleistungsausschluss",
        text: 'SelfTutor wird "wie besehen" und "wie verfügbar" ohne jegliche ausdrückliche oder stillschweigende Gewährleistung bereitgestellt. Wir garantieren nicht, dass die Anwendung ununterbrochen, fehlerfrei oder frei von Viren oder anderen schädlichen Komponenten ist.',
      },
      limitation: {
        title: "Haftungsbeschränkung",
        text: "Im größtmöglichen gesetzlich zulässigen Umfang haftet Thomas Neusser / vron.one nicht für indirekte, zufällige, besondere, Folge- oder Strafschäden oder für entgangene Gewinne oder Einnahmen, die direkt oder indirekt entstanden sind, oder für Datenverlust, Nutzungsausfall oder andere immaterielle Verluste, die sich aus Ihrer Nutzung der Anwendung ergeben.",
      },
      changes: {
        title: "Änderungen der Bedingungen",
        text: "Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern. Wir werden Benutzer über wesentliche Änderungen informieren, indem wir das Datum oben in diesen Bedingungen aktualisieren. Ihre fortgesetzte Nutzung der Anwendung nach Änderungen stellt die Annahme der neuen Bedingungen dar.",
      },
      termination: {
        title: "Kündigung",
        text: "Wir können Ihren Zugang zur Anwendung sofort ohne vorherige Ankündigung aus beliebigem Grund beenden oder aussetzen, einschließlich, aber nicht beschränkt auf einen Verstoß gegen diese Bedingungen.",
      },
      governing: {
        title: "Anwendbares Recht",
        text: "Diese Bedingungen unterliegen dem Recht Österreichs und werden in Übereinstimmung damit ausgelegt, ohne Berücksichtigung von Kollisionsnormen. Alle Streitigkeiten, die sich aus diesen Bedingungen ergeben, unterliegen der ausschließlichen Gerichtsbarkeit der Gerichte Österreichs.",
      },
      contact: {
        title: "Kontakt",
        text: "Wenn Sie Fragen zu diesen Nutzungsbedingungen haben, kontaktieren Sie uns bitte unter:",
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
            {/* Agreement */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t.intro.title}</h2>
              <p className="text-muted-foreground">{t.intro.text}</p>
            </section>

            {/* Service Description */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t.service.title}</h2>
              <p className="text-muted-foreground">{t.service.text}</p>
            </section>

            {/* License */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t.license.title}</h2>
              <p className="text-muted-foreground mb-4">{t.license.text1}</p>
              <p className="text-muted-foreground mb-2">{t.license.text2}</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                {t.license.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </section>

            {/* User Content */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t.content.title}</h2>
              <p className="text-muted-foreground">{t.content.text}</p>
            </section>

            {/* Intellectual Property */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t.intellectual.title}</h2>
              <p className="text-muted-foreground">{t.intellectual.text}</p>
            </section>

            {/* Disclaimer */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t.disclaimer.title}</h2>
              <p className="text-muted-foreground">{t.disclaimer.text}</p>
            </section>

            {/* Limitation of Liability */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t.limitation.title}</h2>
              <p className="text-muted-foreground">{t.limitation.text}</p>
            </section>

            {/* Changes */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t.changes.title}</h2>
              <p className="text-muted-foreground">{t.changes.text}</p>
            </section>

            {/* Termination */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t.termination.title}</h2>
              <p className="text-muted-foreground">{t.termination.text}</p>
            </section>

            {/* Governing Law */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">{t.governing.title}</h2>
              <p className="text-muted-foreground">{t.governing.text}</p>
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

export default TermsOfService;
