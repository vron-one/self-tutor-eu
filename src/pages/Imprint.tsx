import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Imprint = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            {language === "de" ? "Impressum" : "Imprint"}
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            {/* About SelfTutor */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {language === "de" ? "Über SelfTutor" : "About SelfTutor"}
              </h2>
              <p className="text-muted-foreground">
                {language === "de"
                  ? "SelfTutor ist eine innovative Lernplattform, die auf einer Idee von Franziska Neusser basiert. Diese Anwendung ist ein Service von vron.one."
                  : "SelfTutor is an innovative learning platform based on an idea by Franziska Neusser. This application is a service of vron.one."}
              </p>
            </section>

            {/* Service Provider */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {language === "de" ? "Dienstanbieter" : "Service Provider"}
              </h2>
              <div className="text-muted-foreground space-y-2">
                <p className="font-semibold text-foreground">Thomas Neusser</p>
                <p>vron.one</p>
                <p>
                  <span className="font-medium">{language === "de" ? "E-Mail" : "Email"}:</span>{" "}
                  <a href="mailto:selftutor@vron.one" className="text-primary hover:underline">
                    selftutor@vron.one
                  </a>
                </p>
                <p>
                  <span className="font-medium">{language === "de" ? "Website" : "Website"}:</span>{" "}
                  <a
                    href="https://vron.one"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    vron.one
                  </a>
                </p>
              </div>
            </section>

            {/* Legal Information */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {language === "de" ? "Rechtliche Informationen" : "Legal Information"}
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  {language === "de"
                    ? "Dieser Service unterliegt den europäischen Datenschutzbestimmungen (DSGVO) und den österreichischen gesetzlichen Anforderungen."
                    : "This service is subject to European privacy regulations (GDPR) and Austrian legal requirements."}
                </p>
                <p>
                  {language === "de"
                    ? "Alle Daten werden auf selbst betriebenen Servern in Europa gespeichert und nach den geltenden Datenschutzrichtlinien verarbeitet."
                    : "All data is stored on self-operated servers in Europe and processed in accordance with applicable privacy policies."}
                </p>
              </div>
            </section>

            {/* Disclaimer */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {language === "de" ? "Haftungsausschluss" : "Disclaimer"}
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  {language === "de"
                    ? "Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen."
                    : "The contents of this website have been created with the utmost care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content."}
                </p>
                <p>
                  {language === "de"
                    ? "Als Diensteanbieter sind wir gemäß den allgemeinen Gesetzen für eigene Inhalte auf diesen Seiten verantwortlich."
                    : "As a service provider, we are responsible for our own content on these pages in accordance with general laws."}
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {language === "de" ? "Kontakt" : "Contact"}
              </h2>
              <p className="text-muted-foreground">
                {language === "de"
                  ? "Bei Fragen oder Anliegen können Sie uns unter folgender E-Mail-Adresse erreichen:"
                  : "For questions or concerns, you can reach us at the following email address:"}
              </p>
              <p className="mt-2">
                <a href="mailto:selftutor@vron.one" className="text-primary hover:underline font-medium">
                  selftutor@vron.one
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Imprint;
