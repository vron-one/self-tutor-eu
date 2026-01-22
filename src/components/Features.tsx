import { BookOpen, FileSpreadsheet, Brain, Languages, Trophy, Repeat } from "lucide-react";
import featuresBg from "@/assets/features-bg.png";

const features = [
  {
    icon: BookOpen,
    title: "Flashcard Decks",
    description: "Create unlimited decks organized by topic. Perfect for vocabulary, facts, or any subject you want to master.",
  },
  {
    icon: FileSpreadsheet,
    title: "Excel Import",
    description: "Already have your content? Import directly from Excel spreadsheets and start learning in seconds.",
  },
  {
    icon: Brain,
    title: "Smart Quizzes",
    description: "Test your knowledge with interactive quizzes. Track your progress and focus on what needs work.",
  },
  {
    icon: Languages,
    title: "Language Learning",
    description: "Built-in reading mode for language practice. Perfect for learning vocabulary in any language.",
  },
  {
    icon: Repeat,
    title: "Spaced Repetition",
    description: "Our algorithm shows cards at optimal intervals so you remember more with less effort.",
  },
  {
    icon: Trophy,
    title: "Progress Tracking",
    description: "See your improvement over time with detailed statistics and achievement badges.",
  },
];

const Features = () => {
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
            Everything You Need to Learn
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful tools designed to make learning efficient, enjoyable, and effective.
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
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
