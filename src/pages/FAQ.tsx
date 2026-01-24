import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const faqContent = {
  en: {
    title: "Frequently Asked Questions",
    subtitle: "Find answers to the most common questions about SelfTutor.",
    items: [
    {
      question: "Which languages are supported?",
      answer: "SelfTutor supports multiple languages. You can choose your preferred language for reading flashcards, making it easier to learn in your native language or practice a new one."
    },
    {
      question: "What is the best reading speed?",
      answer: "We found that speed 0.1x is best for optimal retention. This slower pace allows your brain to fully process and memorize the information on each flashcard."
    },
    {
      question: "How does the spaced repetition system work?",
      answer: "Our AI-powered spaced repetition algorithm analyzes your learning patterns and schedules reviews at optimal intervals. Cards you find difficult appear more frequently, while mastered cards are shown less often."
    },
    {
      question: "Can I create my own flashcard decks?",
      answer: "Yes! You can create unlimited custom decks with your own content. Add text, images, and even audio to make your flashcards more engaging and effective."
    },
    {
      question: "What's included in the free plan?",
      answer: "The free plan includes access to basic flashcard features, limited deck creation, and community decks. Upgrade to Premium for unlimited decks, AI assistance, and advanced analytics."
    }
    ],
  },
  de: {
    title: "Häufig gestellte Fragen",
    subtitle: "Finden Sie Antworten auf die häufigsten Fragen zu SelfTutor.",
    items: [
    {
      question: "Welche Sprachen werden unterstützt?",
      answer: "SelfTutor unterstützt mehrere Sprachen. Sie können Ihre bevorzugte Sprache zum Lesen von Lernkarten wählen, was das Lernen in Ihrer Muttersprache oder das Üben einer neuen Sprache erleichtert."
    },
    {
      question: "Was ist die beste Lesegeschwindigkeit?",
      answer: "Wir haben festgestellt, dass eine Geschwindigkeit von 0,1x am besten für optimales Behalten ist. Dieses langsamere Tempo ermöglicht es Ihrem Gehirn, die Informationen auf jeder Lernkarte vollständig zu verarbeiten und zu speichern."
    },
    {
      question: "Wie funktioniert das Spaced-Repetition-System?",
      answer: "Unser KI-gestützter Spaced-Repetition-Algorithmus analysiert Ihre Lernmuster und plant Wiederholungen in optimalen Intervallen. Karten, die Sie schwierig finden, erscheinen häufiger, während gemeisterte Karten seltener gezeigt werden."
    },
    {
      question: "Kann ich eigene Lernkarten-Decks erstellen?",
      answer: "Ja! Sie können unbegrenzt eigene Decks mit Ihren Inhalten erstellen. Fügen Sie Text, Bilder und sogar Audio hinzu, um Ihre Lernkarten ansprechender und effektiver zu gestalten."
    },
    {
      question: "Was ist im kostenlosen Plan enthalten?",
      answer: "Der kostenlose Plan beinhaltet Zugang zu grundlegenden Lernkarten-Funktionen, begrenzte Deck-Erstellung und Community-Decks. Upgraden Sie auf Premium für unbegrenzte Decks, KI-Unterstützung und erweiterte Analysen."
    }
    ],
  },
  it: {
    title: "Domande frequenti",
    subtitle: "Trova le risposte alle domande più comuni su SelfTutor.",
    items: [
      {
        question: "Quali lingue sono supportate?",
        answer: "SelfTutor supporta più lingue. Puoi scegliere la lingua preferita per leggere le flashcard, così da imparare nella tua lingua madre o esercitare una nuova lingua."
      },
      {
        question: "Qual è la migliore velocità di lettura?",
        answer: "Abbiamo scoperto che 0,1x è la velocità migliore per una memorizzazione ottimale. Questo ritmo più lento permette al cervello di elaborare e memorizzare ogni flashcard."
      },
      {
        question: "Come funziona il sistema di ripetizione spaziata?",
        answer: "Il nostro algoritmo di ripetizione spaziata basato su AI analizza i tuoi schemi di apprendimento e pianifica i ripassi agli intervalli ottimali. Le carte difficili compaiono più spesso, quelle già apprese meno."
      },
      {
        question: "Posso creare i miei mazzi di flashcard?",
        answer: "Sì! Puoi creare mazzi personalizzati illimitati con i tuoi contenuti. Aggiungi testo, immagini e anche audio per renderle più efficaci."
      },
      {
        question: "Cosa include il piano gratuito?",
        answer: "Il piano gratuito include funzioni base delle flashcard, creazione limitata dei mazzi e mazzi della community. Passa a Premium per mazzi illimitati, assistenza AI e analytics avanzate."
      }
    ],
  },
  pt: {
    title: "Perguntas frequentes",
    subtitle: "Encontre respostas para as dúvidas mais comuns sobre o SelfTutor.",
    items: [
      {
        question: "Quais idiomas são suportados?",
        answer: "O SelfTutor suporta vários idiomas. Você pode escolher o idioma preferido para ler os flashcards, facilitando estudar na sua língua nativa ou praticar uma nova."
      },
      {
        question: "Qual é a melhor velocidade de leitura?",
        answer: "Descobrimos que 0,1x é a melhor velocidade para retenção ideal. Esse ritmo mais lento permite que o cérebro processe e memorize cada flashcard."
      },
      {
        question: "Como funciona o sistema de repetição espaçada?",
        answer: "Nosso algoritmo de repetição espaçada com IA analisa seus padrões de aprendizado e agenda revisões em intervalos ideais. Cartas difíceis aparecem com mais frequência, enquanto as dominadas aparecem menos."
      },
      {
        question: "Posso criar meus próprios baralhos?",
        answer: "Sim! Você pode criar baralhos personalizados ilimitados com seu próprio conteúdo. Adicione texto, imagens e até áudio para tornar as flashcards mais eficazes."
      },
      {
        question: "O que está incluído no plano gratuito?",
        answer: "O plano gratuito inclui recursos básicos, criação limitada de baralhos e baralhos da comunidade. Faça upgrade para Premium para baralhos ilimitados, assistência de IA e análises avançadas."
      }
    ],
  },
  gr: {
    title: "Συχνές ερωτήσεις",
    subtitle: "Βρείτε απαντήσεις στις πιο συχνές ερωτήσεις για το SelfTutor.",
    items: [
      {
        question: "Ποιες γλώσσες υποστηρίζονται;",
        answer: "Το SelfTutor υποστηρίζει πολλές γλώσσες. Μπορείτε να επιλέξετε τη γλώσσα που προτιμάτε για την ανάγνωση καρτών."
      },
      {
        question: "Ποια είναι η καλύτερη ταχύτητα ανάγνωσης;",
        answer: "Βρήκαμε ότι το 0,1x είναι η καλύτερη ταχύτητα για βέλτιστη απομνημόνευση. Ο πιο αργός ρυθμός βοηθά τον εγκέφαλο να επεξεργάζεται την κάθε κάρτα."
      },
      {
        question: "Πώς λειτουργεί το σύστημα επανάληψης με διαστήματα;",
        answer: "Ο αλγόριθμος επανάληψης με διαστήματα αναλύει τα μοτίβα μάθησης και προγραμματίζει επαναλήψεις στα ιδανικά διαστήματα."
      },
      {
        question: "Μπορώ να δημιουργήσω δικά μου decks;",
        answer: "Ναι! Μπορείτε να δημιουργήσετε απεριόριστα προσαρμοσμένα decks με το δικό σας περιεχόμενο."
      },
      {
        question: "Τι περιλαμβάνει το δωρεάν πλάνο;",
        answer: "Το δωρεάν πλάνο περιλαμβάνει βασικές λειτουργίες καρτών, περιορισμένη δημιουργία decks και decks κοινότητας."
      }
    ],
  },
  sp: {
    title: "Preguntas frecuentes",
    subtitle: "Encuentra respuestas a las preguntas más comunes sobre SelfTutor.",
    items: [
      {
        question: "¿Qué idiomas están disponibles?",
        answer: "SelfTutor admite varios idiomas. Puedes elegir tu idioma preferido para leer las tarjetas y practicar una nueva lengua."
      },
      {
        question: "¿Cuál es la mejor velocidad de lectura?",
        answer: "Hemos comprobado que 0,1x es la mejor velocidad para una retención óptima. Un ritmo más lento permite procesar cada tarjeta."
      },
      {
        question: "¿Cómo funciona el sistema de repetición espaciada?",
        answer: "Nuestro algoritmo de repetición espaciada analiza tus patrones de aprendizaje y programa repasos en intervalos óptimos."
      },
      {
        question: "¿Puedo crear mis propios mazos?",
        answer: "¡Sí! Puedes crear mazos personalizados ilimitados con tu propio contenido. Añade texto, imágenes e incluso audio."
      },
      {
        question: "¿Qué incluye el plan gratuito?",
        answer: "El plan gratuito incluye funciones básicas, creación limitada de mazos y mazos de la comunidad. Actualiza a Premium para mazos ilimitados y analíticas avanzadas."
      }
    ],
  },
};

const FAQ = () => {
  const { language } = useLanguage();
  const current = faqContent[language] || faqContent.en;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">
            {current.title}
          </h1>
          <p className="text-muted-foreground text-center mb-12">
            {current.subtitle}
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            {current.items.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
