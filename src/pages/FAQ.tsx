import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const faqData = {
  en: [
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
      question: "Is my progress synced across devices?",
      answer: "Absolutely. Your learning progress is automatically synced across all your devices. Start learning on your phone and continue on your tablet or computer seamlessly."
    },
    {
      question: "What's included in the free plan?",
      answer: "The free plan includes access to basic flashcard features, limited deck creation, and community decks. Upgrade to Premium for unlimited decks, AI assistance, and advanced analytics."
    }
  ],
  de: [
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
      question: "Wird mein Fortschritt geräteübergreifend synchronisiert?",
      answer: "Absolut. Ihr Lernfortschritt wird automatisch auf allen Ihren Geräten synchronisiert. Beginnen Sie auf Ihrem Telefon und setzen Sie nahtlos auf Ihrem Tablet oder Computer fort."
    },
    {
      question: "Was ist im kostenlosen Plan enthalten?",
      answer: "Der kostenlose Plan beinhaltet Zugang zu grundlegenden Lernkarten-Funktionen, begrenzte Deck-Erstellung und Community-Decks. Upgraden Sie auf Premium für unbegrenzte Decks, KI-Unterstützung und erweiterte Analysen."
    }
  ]
};

const FAQ = () => {
  const { language } = useLanguage();
  const currentLang = language === "de" ? "de" : "en";
  const faqs = faqData[currentLang];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">
            {currentLang === "de" ? "Häufig gestellte Fragen" : "Frequently Asked Questions"}
          </h1>
          <p className="text-muted-foreground text-center mb-12">
            {currentLang === "de" 
              ? "Finden Sie Antworten auf die häufigsten Fragen zu SelfTutor."
              : "Find answers to the most common questions about SelfTutor."}
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
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
