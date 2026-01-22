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
    it: {
      title: "Termini di servizio",
      lastUpdated: "Ultimo aggiornamento",
      intro: {
        title: "Accettazione dei termini",
        text: "Scaricando, installando o utilizzando SelfTutor, accetti di essere vincolato da questi Termini di servizio. Se non accetti, non utilizzare l'applicazione.",
      },
      service: {
        title: "Descrizione del servizio",
        text: "SelfTutor è un'app mobile di flashcard progettata per aiutare lo studio. L'app funziona completamente offline sul tuo dispositivo.",
      },
      license: {
        title: "Licenza",
        text1: "Ti concediamo una licenza limitata, non esclusiva, non trasferibile e revocabile per uso personale e non commerciale, secondo questi Termini.",
        text2: "Non puoi:",
        points: [
          "Copiare, modificare o distribuire l'app",
          "Effettuare reverse engineering, decompilare o disassemblare",
          "Noleggiare o concedere in uso l'app a terzi",
          "Usare l'app per scopi illegali",
          "Rimuovere avvisi di copyright o proprietà",
        ],
      },
      content: {
        title: "Contenuti dell'utente",
        text: "Mantieni la proprietà dei contenuti creati in SelfTutor. Poiché i dati sono locali, sei responsabile del backup. Non siamo responsabili per eventuali perdite.",
      },
      intellectual: {
        title: "Proprietà intellettuale",
        text: "SelfTutor e i suoi contenuti originali sono di proprietà di Thomas Neusser / vron.one e protetti da leggi internazionali.",
      },
      disclaimer: {
        title: "Esclusione di garanzie",
        text: 'SelfTutor è fornita "così com\'è" e "come disponibile" senza garanzie di alcun tipo. Non garantiamo che l\'app sia ininterrotta o priva di errori.',
      },
      limitation: {
        title: "Limitazione di responsabilità",
        text: "Nella misura massima consentita dalla legge, Thomas Neusser / vron.one non è responsabile per danni indiretti, incidentali o consequenziali derivanti dall'uso dell'app.",
      },
      changes: {
        title: "Modifiche ai termini",
        text: "Ci riserviamo il diritto di modificare questi Termini in qualsiasi momento. Aggiorneremo la data in alto e l'uso continuato implica accettazione.",
      },
      termination: {
        title: "Risoluzione",
        text: "Possiamo sospendere o terminare l'accesso all'app immediatamente e senza preavviso in caso di violazione.",
      },
      governing: {
        title: "Legge applicabile",
        text: "Questi Termini sono regolati dalle leggi dell'Austria. Le controversie sono soggette alla giurisdizione esclusiva dei tribunali austriaci.",
      },
      contact: {
        title: "Contattaci",
        text: "Per domande sui Termini di servizio, contattaci a:",
      },
    },
    pt: {
      title: "Termos de Serviço",
      lastUpdated: "Última atualização",
      intro: {
        title: "Aceitação dos termos",
        text: "Ao baixar, instalar ou usar o SelfTutor, você concorda com estes Termos de Serviço. Se não concordar, não use o aplicativo.",
      },
      service: {
        title: "Descrição do serviço",
        text: "O SelfTutor é um aplicativo móvel de flashcards para ajudar no estudo. Funciona totalmente offline no seu dispositivo.",
      },
      license: {
        title: "Licença",
        text1: "Concedemos uma licença limitada, não exclusiva, intransferível e revogável para uso pessoal e não comercial, de acordo com estes Termos.",
        text2: "Você não pode:",
        points: [
          "Copiar, modificar ou distribuir o aplicativo",
          "Fazer engenharia reversa, decompilar ou desmontar",
          "Alugar, arrendar ou emprestar a terceiros",
          "Usar o app para fins ilegais",
          "Remover avisos de direitos autorais",
        ],
      },
      content: {
        title: "Conteúdo do usuário",
        text: "Você mantém a propriedade do conteúdo criado. Como os dados ficam no dispositivo, você é responsável pelo backup.",
      },
      intellectual: {
        title: "Propriedade intelectual",
        text: "SelfTutor e seus conteúdos originais pertencem a Thomas Neusser / vron.one e são protegidos por leis internacionais.",
      },
      disclaimer: {
        title: "Isenção de garantias",
        text: 'O SelfTutor é fornecido "no estado em que se encontra" sem garantias. Não garantimos que o app seja ininterrupto ou livre de erros.',
      },
      limitation: {
        title: "Limitação de responsabilidade",
        text: "Na máxima extensão permitida por lei, Thomas Neusser / vron.one não se responsabiliza por danos indiretos ou consequentes decorrentes do uso.",
      },
      changes: {
        title: "Alterações nos termos",
        text: "Podemos modificar estes Termos a qualquer momento. Atualizaremos a data no topo; o uso contínuo implica aceitação.",
      },
      termination: {
        title: "Rescisão",
        text: "Podemos encerrar ou suspender seu acesso imediatamente, sem aviso, em caso de violação.",
      },
      governing: {
        title: "Lei aplicável",
        text: "Estes Termos são regidos pelas leis da Áustria. Qualquer disputa será submetida aos tribunais da Áustria.",
      },
      contact: {
        title: "Contato",
        text: "Se tiver dúvidas sobre estes Termos de Serviço, contate-nos em:",
      },
    },
    gr: {
      title: "Όροι Χρήσης",
      lastUpdated: "Τελευταία ενημέρωση",
      intro: {
        title: "Αποδοχή των όρων",
        text: "Με τη λήψη, εγκατάσταση ή χρήση του SelfTutor, αποδέχεστε αυτούς τους Όρους Χρήσης. Αν δεν συμφωνείτε, μην χρησιμοποιείτε την εφαρμογή.",
      },
      service: {
        title: "Περιγραφή υπηρεσίας",
        text: "Το SelfTutor είναι εφαρμογή καρτών μάθησης για απομνημόνευση. Λειτουργεί πλήρως offline στη συσκευή σας.",
      },
      license: {
        title: "Άδεια χρήσης",
        text1: "Σας παραχωρούμε περιορισμένη, μη αποκλειστική, μη μεταβιβάσιμη και ανακλητή άδεια για προσωπική, μη εμπορική χρήση.",
        text2: "Δεν επιτρέπεται:",
        points: [
          "Αντιγραφή, τροποποίηση ή διανομή της εφαρμογής",
          "Reverse engineering, αποσυμπίληση ή αποσυναρμολόγηση",
          "Ενοικίαση ή παραχώρηση σε τρίτους",
          "Χρήση για παράνομους σκοπούς",
          "Αφαίρεση ειδοποιήσεων πνευματικών δικαιωμάτων",
        ],
      },
      content: {
        title: "Περιεχόμενο χρήστη",
        text: "Διατηρείτε την κυριότητα του περιεχομένου που δημιουργείτε. Είστε υπεύθυνοι για αντίγραφα ασφαλείας.",
      },
      intellectual: {
        title: "Πνευματική ιδιοκτησία",
        text: "Το SelfTutor και το πρωτότυπο περιεχόμενό του ανήκουν στον Thomas Neusser / vron.one και προστατεύονται από διεθνείς νόμους.",
      },
      disclaimer: {
        title: "Αποποίηση εγγυήσεων",
        text: 'Το SelfTutor παρέχεται "ως έχει" χωρίς εγγυήσεις οποιουδήποτε είδους.',
      },
      limitation: {
        title: "Περιορισμός ευθύνης",
        text: "Στο μέγιστο επιτρεπτό από τον νόμο, ο Thomas Neusser / vron.one δεν ευθύνεται για έμμεσες ή παρεπόμενες ζημιές.",
      },
      changes: {
        title: "Αλλαγές στους όρους",
        text: "Διατηρούμε το δικαίωμα να τροποποιούμε τους Όρους. Η συνέχιση χρήσης σημαίνει αποδοχή.",
      },
      termination: {
        title: "Τερματισμός",
        text: "Μπορούμε να τερματίσουμε ή να αναστείλουμε την πρόσβαση άμεσα, χωρίς προειδοποίηση.",
      },
      governing: {
        title: "Εφαρμοστέο δίκαιο",
        text: "Οι Όροι διέπονται από το δίκαιο της Αυστρίας. Οι διαφορές υπάγονται στη δικαιοδοσία των δικαστηρίων της Αυστρίας.",
      },
      contact: {
        title: "Επικοινωνία",
        text: "Για ερωτήσεις σχετικά με τους Όρους Χρήσης, επικοινωνήστε στο:",
      },
    },
    sp: {
      title: "Términos del servicio",
      lastUpdated: "Última actualización",
      intro: {
        title: "Aceptación de los términos",
        text: "Al descargar, instalar o usar SelfTutor, aceptas estos Términos del servicio. Si no estás de acuerdo, no uses la aplicación.",
      },
      service: {
        title: "Descripción del servicio",
        text: "SelfTutor es una app móvil de tarjetas de estudio para ayudarte a memorizar. Funciona completamente offline en tu dispositivo.",
      },
      license: {
        title: "Licencia",
        text1: "Te otorgamos una licencia limitada, no exclusiva, no transferible y revocable para uso personal y no comercial.",
        text2: "No puedes:",
        points: [
          "Copiar, modificar o distribuir la aplicación",
          "Hacer ingeniería inversa, descompilar o desensamblar",
          "Alquilar o prestar la aplicación a terceros",
          "Usar la aplicación con fines ilícitos",
          "Eliminar avisos de derechos de autor",
        ],
      },
      content: {
        title: "Contenido del usuario",
        text: "Conservas la propiedad del contenido que creas. Como los datos son locales, eres responsable de las copias de seguridad.",
      },
      intellectual: {
        title: "Propiedad intelectual",
        text: "SelfTutor y su contenido original pertenecen a Thomas Neusser / vron.one y están protegidos por leyes internacionales.",
      },
      disclaimer: {
        title: "Exención de garantías",
        text: 'SelfTutor se proporciona "tal cual" y "según disponibilidad" sin garantías de ningún tipo.',
      },
      limitation: {
        title: "Limitación de responsabilidad",
        text: "En la máxima medida permitida por la ley, Thomas Neusser / vron.one no será responsable por daños indirectos o consecuentes.",
      },
      changes: {
        title: "Cambios en los términos",
        text: "Nos reservamos el derecho de modificar estos Términos. El uso continuado implica aceptación.",
      },
      termination: {
        title: "Terminación",
        text: "Podemos suspender o terminar el acceso de inmediato y sin previo aviso por cualquier motivo.",
      },
      governing: {
        title: "Ley aplicable",
        text: "Estos Términos se rigen por las leyes de Austria. Las disputas se someterán a los tribunales de Austria.",
      },
      contact: {
        title: "Contacto",
        text: "Si tienes preguntas sobre estos Términos del servicio, contáctanos en:",
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
