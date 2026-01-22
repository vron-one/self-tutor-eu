import appHome from "@/assets/app-home.png";
import appDecks from "@/assets/app-decks.png";
import appCards from "@/assets/app-cards.png";
import appSettings from "@/assets/app-settings.png";
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      image: appHome,
      step: "01",
      titleKey: "howItWorks.step1Title",
      descKey: "howItWorks.step1Desc",
    },
    {
      image: appDecks,
      step: "02",
      titleKey: "howItWorks.step2Title",
      descKey: "howItWorks.step2Desc",
    },
    {
      image: appCards,
      step: "03",
      titleKey: "howItWorks.step3Title",
      descKey: "howItWorks.step3Desc",
    },
    {
      image: appSettings,
      step: "04",
      titleKey: "howItWorks.step4Title",
      descKey: "howItWorks.step4Desc",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
            {t("howItWorks.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("howItWorks.subtitle")}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-32 left-full w-full h-0.5 bg-border -translate-x-1/2" />
              )}
              
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-48 h-auto rounded-2xl overflow-hidden shadow-lg border border-border bg-background">
                    <img 
                      src={step.image} 
                      alt={t(step.titleKey)} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  {t(step.titleKey)}
                </h3>
                <p className="text-muted-foreground">
                  {t(step.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
