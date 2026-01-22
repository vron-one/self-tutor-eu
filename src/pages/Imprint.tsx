import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Imprint = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Imprint",
      aboutTitle: "About SelfTutor",
      aboutText:
        "SelfTutor is an innovative learning platform based on an idea by Franziska Neusser. This application is a service of vron.one.",
      providerTitle: "Service Provider",
      emailLabel: "Email",
      websiteLabel: "Website",
      legalTitle: "Legal Information",
      legalText1:
        "This service is subject to European privacy regulations (GDPR) and Austrian legal requirements.",
      legalText2:
        "All data is stored on self-operated servers in Europe and processed in accordance with applicable privacy policies.",
      disclaimerTitle: "Disclaimer",
      disclaimerText1:
        "The contents of this website have been created with the utmost care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content.",
      disclaimerText2:
        "As a service provider, we are responsible for our own content on these pages in accordance with general laws.",
      contactTitle: "Contact",
      contactText:
        "For questions or concerns, you can reach us at the following email address:",
    },
    de: {
      title: "Impressum",
      aboutTitle: "Über SelfTutor",
      aboutText:
        "SelfTutor ist eine innovative Lernplattform, die auf einer Idee von Franziska Neusser basiert. Diese Anwendung ist ein Service von vron.one.",
      providerTitle: "Dienstanbieter",
      emailLabel: "E-Mail",
      websiteLabel: "Website",
      legalTitle: "Rechtliche Informationen",
      legalText1:
        "Dieser Service unterliegt den europäischen Datenschutzbestimmungen (DSGVO) und den österreichischen gesetzlichen Anforderungen.",
      legalText2:
        "Alle Daten werden auf selbst betriebenen Servern in Europa gespeichert und nach den geltenden Datenschutzrichtlinien verarbeitet.",
      disclaimerTitle: "Haftungsausschluss",
      disclaimerText1:
        "Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.",
      disclaimerText2:
        "Als Diensteanbieter sind wir gemäß den allgemeinen Gesetzen für eigene Inhalte auf diesen Seiten verantwortlich.",
      contactTitle: "Kontakt",
      contactText:
        "Bei Fragen oder Anliegen können Sie uns unter folgender E-Mail-Adresse erreichen:",
    },
    it: {
      title: "Impressum",
      aboutTitle: "Informazioni su SelfTutor",
      aboutText:
        "SelfTutor è una piattaforma di apprendimento innovativa basata su un'idea di Franziska Neusser. Questa applicazione è un servizio di vron.one.",
      providerTitle: "Fornitore del servizio",
      emailLabel: "Email",
      websiteLabel: "Sito web",
      legalTitle: "Informazioni legali",
      legalText1:
        "Questo servizio è soggetto al GDPR europeo e alle normative austriache.",
      legalText2:
        "Tutti i dati sono archiviati su server gestiti in Europa e trattati secondo le normative applicabili.",
      disclaimerTitle: "Esclusione di responsabilità",
      disclaimerText1:
        "I contenuti di questo sito sono stati creati con la massima cura. Tuttavia, non possiamo garantire accuratezza, completezza o attualità.",
      disclaimerText2:
        "In qualità di fornitore del servizio, siamo responsabili dei nostri contenuti secondo le leggi vigenti.",
      contactTitle: "Contatto",
      contactText:
        "Per domande o dubbi puoi contattarci al seguente indirizzo email:",
    },
    pt: {
      title: "Impressum",
      aboutTitle: "Sobre o SelfTutor",
      aboutText:
        "SelfTutor é uma plataforma de aprendizagem inovadora baseada em uma ideia de Franziska Neusser. Este aplicativo é um serviço da vron.one.",
      providerTitle: "Prestador do serviço",
      emailLabel: "Email",
      websiteLabel: "Website",
      legalTitle: "Informações legais",
      legalText1:
        "Este serviço está sujeito ao GDPR europeu e às exigências legais da Áustria.",
      legalText2:
        "Todos os dados são armazenados em servidores próprios na Europa e processados conforme as políticas aplicáveis.",
      disclaimerTitle: "Isenção de responsabilidade",
      disclaimerText1:
        "Os conteúdos deste site foram criados com o máximo cuidado. No entanto, não garantimos precisão, integridade ou atualidade.",
      disclaimerText2:
        "Como prestador do serviço, somos responsáveis pelo nosso próprio conteúdo de acordo com as leis gerais.",
      contactTitle: "Contato",
      contactText:
        "Para perguntas ou solicitações, entre em contato pelo seguinte email:",
    },
    gr: {
      title: "Impressum",
      aboutTitle: "Σχετικά με το SelfTutor",
      aboutText:
        "Το SelfTutor είναι μια καινοτόμος πλατφόρμα μάθησης βασισμένη σε ιδέα της Franziska Neusser. Η εφαρμογή είναι υπηρεσία της vron.one.",
      providerTitle: "Πάροχος υπηρεσίας",
      emailLabel: "Email",
      websiteLabel: "Ιστότοπος",
      legalTitle: "Νομικές πληροφορίες",
      legalText1:
        "Η υπηρεσία αυτή υπόκειται στο ευρωπαϊκό GDPR και στους αυστριακούς κανονισμούς.",
      legalText2:
        "Όλα τα δεδομένα αποθηκεύονται σε ιδιόκτητους servers στην Ευρώπη και επεξεργάζονται σύμφωνα με τις ισχύουσες πολιτικές.",
      disclaimerTitle: "Αποποίηση ευθύνης",
      disclaimerText1:
        "Τα περιεχόμενα αυτού του ιστότοπου έχουν δημιουργηθεί με τη μέγιστη επιμέλεια. Ωστόσο δεν εγγυόμαστε την ακρίβεια ή πληρότητα.",
      disclaimerText2:
        "Ως πάροχος υπηρεσίας, είμαστε υπεύθυνοι για το περιεχόμενό μας σύμφωνα με τους γενικούς νόμους.",
      contactTitle: "Επικοινωνία",
      contactText:
        "Για ερωτήσεις ή ζητήματα, επικοινωνήστε στο παρακάτω email:",
    },
    sp: {
      title: "Imprint",
      aboutTitle: "Sobre SelfTutor",
      aboutText:
        "SelfTutor es una plataforma de aprendizaje innovadora basada en una idea de Franziska Neusser. Esta aplicación es un servicio de vron.one.",
      providerTitle: "Proveedor del servicio",
      emailLabel: "Email",
      websiteLabel: "Sitio web",
      legalTitle: "Información legal",
      legalText1:
        "Este servicio está sujeto al RGPD europeo y a los requisitos legales de Austria.",
      legalText2:
        "Todos los datos se almacenan en servidores propios en Europa y se procesan conforme a las políticas aplicables.",
      disclaimerTitle: "Exención de responsabilidad",
      disclaimerText1:
        "Los contenidos de este sitio web se han creado con el máximo cuidado. Sin embargo, no garantizamos su exactitud o actualidad.",
      disclaimerText2:
        "Como proveedor del servicio, somos responsables de nuestro propio contenido conforme a las leyes generales.",
      contactTitle: "Contacto",
      contactText:
        "Para preguntas o consultas, puede contactarnos en el siguiente email:",
    },
  };

  const t = content[language] || content.en;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            {t.title}
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            {/* About SelfTutor */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t.aboutTitle}
              </h2>
              <p className="text-muted-foreground">
                {t.aboutText}
              </p>
            </section>

            {/* Service Provider */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t.providerTitle}
              </h2>
              <div className="text-muted-foreground space-y-2">
                <p className="font-semibold text-foreground">Thomas Neusser</p>
                <p>vron.one</p>
                <p>
                  <span className="font-medium">{t.emailLabel}:</span>{" "}
                  <a href="mailto:selftutor@vron.one" className="text-primary hover:underline">
                    selftutor@vron.one
                  </a>
                </p>
                <p>
                  <span className="font-medium">{t.websiteLabel}:</span>{" "}
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
                {t.legalTitle}
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>{t.legalText1}</p>
                <p>{t.legalText2}</p>
              </div>
            </section>

            {/* Disclaimer */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t.disclaimerTitle}
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>{t.disclaimerText1}</p>
                <p>{t.disclaimerText2}</p>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t.contactTitle}
              </h2>
              <p className="text-muted-foreground">
                {t.contactText}
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
