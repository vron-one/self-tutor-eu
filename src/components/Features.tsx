import { BookOpen, FileSpreadsheet, Brain, Languages, Trophy, Repeat } from "lucide-react";
import featuresBg from "@/assets/features-bg.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: BookOpen,
      titleKey: "features.flashcardDecks",
      descKey: "features.flashcardDecksDesc",
    },
    {
      icon: FileSpreadsheet,
      titleKey: "features.excelImport",
      descKey: "features.excelImportDesc",
    },
    {
      icon: Brain,
      titleKey: "features.smartQuizzes",
      descKey: "features.smartQuizzesDesc",
    },
    {
      icon: Languages,
      titleKey: "features.languageLearning",
      descKey: "features.languageLearningDesc",
    },
    {
      icon: Repeat,
      titleKey: "features.spacedRepetition",
      descKey: "features.spacedRepetitionDesc",
    },
    {
      icon: Trophy,
      titleKey: "features.progressTracking",
      descKey: "features.progressTrackingDesc",
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-10">
        <img src={featuresBg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("features.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("features.subtitle")}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                {t(feature.titleKey)}
              </h3>
              <p className="text-muted-foreground">
                {t(feature.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
