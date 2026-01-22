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
    it: {
      title: "Informativa sulla privacy",
      lastUpdated: "Ultimo aggiornamento",
      intro: {
        title: "Introduzione",
        text: "In SelfTutor prendiamo sul serio la tua privacy. Questa informativa spiega come gestiamo i dati e quali misure adottiamo per proteggerli.",
      },
      noBackend: {
        title: "Applicazione offline-first",
        text1: "SelfTutor è progettato come applicazione mobile offline-first. Ciò significa:",
        points: [
          "Tutti i dati sono salvati localmente sul tuo dispositivo",
          "Non utilizziamo server backend per elaborare o archiviare dati personali",
          "Flashcard, progressi e impostazioni restano sul tuo dispositivo",
          "L'app funziona completamente senza connessione internet",
        ],
        text2: "Poiché l'elaborazione avviene localmente, i tuoi dati di apprendimento non lasciano mai il tuo telefono o tablet.",
      },
      dataCollection: {
        title: "Raccolta dati",
        text: "Poiché SelfTutor opera offline senza servizi backend, non raccogliamo, trasmettiamo o archiviamo dati personali su server esterni. I tuoi contenuti e preferenze restano solo sul tuo dispositivo.",
      },
      cookies: {
        title: "Cookie e conformità GDPR",
        text1: "Per il nostro sito (selftutor.eu) potremmo usare cookie per migliorare l'esperienza di navigazione. Se sono richiesti consensi, noi:",
        points: [
          "Mostriamo un banner di consenso prima di impostare cookie non essenziali",
          "Forniamo informazioni chiare su cookie e finalità",
          "Permettiamo di accettare o rifiutare i cookie non essenziali",
          "Rispettiamo le preferenze per tutta la sessione",
        ],
        text2: "I cookie essenziali per il funzionamento base del sito possono essere impostati senza consenso, ove consentito dalla legge.",
      },
      rights: {
        title: "I tuoi diritti",
        text: "In base al GDPR e ad altre leggi applicabili, hai diritto a:",
        points: [
          "Accedere ai dati personali eventualmente detenuti",
          "Richiedere la correzione di dati inesatti",
          "Richiedere la cancellazione dei dati",
          "Opporti al trattamento",
          "Portabilità dei dati",
        ],
        text2: "Poiché l'app salva tutto localmente, hai sempre il controllo completo. Puoi eliminare i dati disinstallando l'app o cancellandoli dalle impostazioni del dispositivo.",
      },
      children: {
        title: "Privacy dei minori",
        text: "SelfTutor è adatto a utenti di tutte le età. Poiché non vengono raccolti dati personali, l'app è sicura anche per i minori con adeguata supervisione.",
      },
      changes: {
        title: "Modifiche a questa informativa",
        text: "Potremmo aggiornare questa informativa periodicamente. Le modifiche verranno pubblicate su questa pagina con una data di revisione aggiornata.",
      },
      contact: {
        title: "Contattaci",
        text: "Se hai domande su questa informativa, contattaci a:",
      },
    },
    pt: {
      title: "Política de Privacidade",
      lastUpdated: "Última atualização",
      intro: {
        title: "Introdução",
        text: "Na SelfTutor levamos a sua privacidade a sério. Esta política explica como tratamos os dados e as medidas de proteção adotadas.",
      },
      noBackend: {
        title: "Aplicativo offline-first",
        text1: "O SelfTutor foi projetado como aplicativo móvel offline-first. Isso significa:",
        points: [
          "Todos os dados são armazenados localmente no seu dispositivo",
          "Não usamos servidores backend para processar ou armazenar dados pessoais",
          "Seus flashcards, progresso e configurações ficam no seu dispositivo",
          "O app funciona completamente sem internet",
        ],
        text2: "Como todo o processamento ocorre localmente, seus dados nunca saem do seu telefone ou tablet.",
      },
      dataCollection: {
        title: "Coleta de dados",
        text: "Como o SelfTutor funciona offline e sem backend, não coletamos, transmitimos ou armazenamos dados pessoais em servidores externos.",
      },
      cookies: {
        title: "Cookies e conformidade GDPR",
        text1: "No nosso site (selftutor.eu) podemos usar cookies para melhorar a experiência. Quando necessário, vamos:",
        points: [
          "Exibir um banner de consentimento antes de cookies não essenciais",
          "Informar claramente quais cookies são usados e para quê",
          "Permitir aceitar ou rejeitar cookies não essenciais",
          "Respeitar suas preferências durante a sessão",
        ],
        text2: "Cookies essenciais para o funcionamento básico podem ser definidos sem consentimento, conforme a lei.",
      },
      rights: {
        title: "Seus direitos",
        text: "Pelo GDPR e outras leis aplicáveis, você tem direito a:",
        points: [
          "Acessar dados pessoais que possamos ter",
          "Corrigir dados imprecisos",
          "Solicitar exclusão dos dados",
          "Opor-se ao processamento",
          "Portabilidade de dados",
        ],
        text2: "Como o app guarda os dados localmente, você mantém controle total. Você pode remover os dados desinstalando o app ou limpando os dados no dispositivo.",
      },
      children: {
        title: "Privacidade de menores",
        text: "SelfTutor é adequado para todas as idades. Como não coletamos dados pessoais, o app é seguro para crianças com supervisão adequada.",
      },
      changes: {
        title: "Alterações nesta política",
        text: "Podemos atualizar esta política periodicamente. As alterações serão publicadas nesta página com data de revisão atualizada.",
      },
      contact: {
        title: "Contato",
        text: "Se você tiver dúvidas sobre esta política, entre em contato:",
      },
    },
    gr: {
      title: "Πολιτική Απορρήτου",
      lastUpdated: "Τελευταία ενημέρωση",
      intro: {
        title: "Εισαγωγή",
        text: "Στο SelfTutor παίρνουμε σοβαρά την ιδιωτικότητά σας. Αυτή η πολιτική εξηγεί πώς χειριζόμαστε τα δεδομένα σας.",
      },
      noBackend: {
        title: "Εφαρμογή offline-first",
        text1: "Το SelfTutor είναι σχεδιασμένο ως εφαρμογή offline-first. Αυτό σημαίνει:",
        points: [
          "Όλα τα δεδομένα αποθηκεύονται τοπικά στη συσκευή σας",
          "Δεν χρησιμοποιούνται backend servers για προσωπικά δεδομένα",
          "Οι κάρτες, η πρόοδος και οι ρυθμίσεις μένουν στη συσκευή σας",
          "Η εφαρμογή λειτουργεί πλήρως χωρίς σύνδεση",
        ],
        text2: "Επειδή η επεξεργασία γίνεται τοπικά, τα δεδομένα σας δεν φεύγουν ποτέ από τη συσκευή.",
      },
      dataCollection: {
        title: "Συλλογή δεδομένων",
        text: "Καθώς το SelfTutor λειτουργεί offline χωρίς backend υπηρεσίες, δεν συλλέγουμε ή μεταδίδουμε προσωπικά δεδομένα.",
      },
      cookies: {
        title: "Cookies και συμμόρφωση GDPR",
        text1: "Στον ιστότοπο (selftutor.eu) μπορεί να χρησιμοποιούμε cookies για καλύτερη εμπειρία. Όταν απαιτείται συναίνεση, θα:",
        points: [
          "Εμφανίζουμε banner συγκατάθεσης πριν από μη απαραίτητα cookies",
          "Παρέχουμε σαφείς πληροφορίες για χρήση και σκοπό",
          "Επιτρέπουμε αποδοχή ή απόρριψη μη απαραίτητων cookies",
          "Σεβόμαστε τις προτιμήσεις σας",
        ],
        text2: "Τα απαραίτητα cookies μπορούν να οριστούν χωρίς συναίνεση, όπου επιτρέπεται από τον νόμο.",
      },
      rights: {
        title: "Τα δικαιώματά σας",
        text: "Σύμφωνα με το GDPR έχετε δικαίωμα να:",
        points: [
          "Έχετε πρόσβαση στα προσωπικά δεδομένα",
          "Ζητήσετε διόρθωση ανακριβών δεδομένων",
          "Ζητήσετε διαγραφή δεδομένων",
          "Εναντιωθείτε στην επεξεργασία",
          "Φορητότητα δεδομένων",
        ],
        text2: "Επειδή τα δεδομένα αποθηκεύονται τοπικά, έχετε πλήρη έλεγχο. Μπορείτε να διαγράψετε τα δεδομένα απεγκαθιστώντας την εφαρμογή.",
      },
      children: {
        title: "Ιδιωτικότητα παιδιών",
        text: "Το SelfTutor είναι κατάλληλο για όλες τις ηλικίες. Εφόσον δεν συλλέγονται δεδομένα, είναι ασφαλές για παιδιά με κατάλληλη επίβλεψη.",
      },
      changes: {
        title: "Αλλαγές στην πολιτική",
        text: "Ενδέχεται να ενημερώνουμε την πολιτική αυτή κατά καιρούς. Οι αλλαγές θα δημοσιεύονται εδώ.",
      },
      contact: {
        title: "Επικοινωνία",
        text: "Αν έχετε ερωτήσεις σχετικά με την πολιτική, επικοινωνήστε στο:",
      },
    },
    sp: {
      title: "Política de Privacidad",
      lastUpdated: "Última actualización",
      intro: {
        title: "Introducción",
        text: "En SelfTutor nos tomamos en serio tu privacidad. Esta política explica cómo manejamos los datos y cómo los protegemos.",
      },
      noBackend: {
        title: "Aplicación offline-first",
        text1: "SelfTutor está diseñada como una aplicación móvil offline-first. Esto significa:",
        points: [
          "Todos los datos se guardan localmente en tu dispositivo",
          "No usamos servidores backend para procesar o almacenar datos personales",
          "Tus tarjetas, progreso y ajustes permanecen en tu dispositivo",
          "La app funciona totalmente sin conexión a internet",
        ],
        text2: "Como todo el procesamiento ocurre localmente, tus datos no salen de tu teléfono o tablet.",
      },
      dataCollection: {
        title: "Recogida de datos",
        text: "Al funcionar completamente offline y sin backend, no recopilamos ni transmitimos datos personales a servidores externos.",
      },
      cookies: {
        title: "Cookies y cumplimiento del RGPD",
        text1: "En nuestro sitio (selftutor.eu) podemos usar cookies para mejorar la experiencia. Si se requiere consentimiento:",
        points: [
          "Mostramos un banner antes de cookies no esenciales",
          "Indicamos qué cookies se usan y con qué propósito",
          "Permitimos aceptar o rechazar cookies no esenciales",
          "Respetamos tus preferencias durante la sesión",
        ],
        text2: "Las cookies esenciales necesarias para el funcionamiento básico pueden establecerse sin consentimiento, según la ley.",
      },
      rights: {
        title: "Tus derechos",
        text: "Según el RGPD y otras leyes aplicables, tienes derecho a:",
        points: [
          "Acceder a los datos personales que podamos tener",
          "Solicitar correcciones de datos inexactos",
          "Solicitar la eliminación de tus datos",
          "Oponerte al tratamiento",
          "Portabilidad de datos",
        ],
        text2: "Dado que los datos se almacenan localmente, tienes control total. Puedes borrar los datos desinstalando la app.",
      },
      children: {
        title: "Privacidad de menores",
        text: "SelfTutor es adecuada para todas las edades. Como no se recopilan datos personales, es segura para menores con supervisión.",
      },
      changes: {
        title: "Cambios en esta política",
        text: "Podemos actualizar esta política ocasionalmente. Cualquier cambio se publicará en esta página con la fecha revisada.",
      },
      contact: {
        title: "Contacto",
        text: "Si tienes preguntas sobre esta política, contáctanos en:",
      },
    },
  };

  const localeMap: Record<string, string> = {
    en: "en-US",
    de: "de-DE",
    it: "it-IT",
    pt: "pt-PT",
    gr: "el-GR",
    sp: "es-ES",
  };
  const t = content[language] || content.en;
  const locale = localeMap[language] || "en-US";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-foreground mb-2">{t.title}</h1>
          <p className="text-muted-foreground mb-8">
            {t.lastUpdated}: {new Date().toLocaleDateString(locale)}
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
