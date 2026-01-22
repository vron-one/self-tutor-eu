import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Examples = () => {
  const { t } = useLanguage();

  const examples = [
    {
      titleKey: "examples.item1.title",
      descKey: "examples.item1.desc",
      downloadKey: "examples.item1.download",
      file: "/examples/flashcards_daily_verbs_portugese.xlsx",
    },
    {
      titleKey: "examples.item2.title",
      descKey: "examples.item2.desc",
      downloadKey: "examples.item2.download",
      file: "/examples/flashcards_daily_verbs_italian.xlsx",
    },
    {
      titleKey: "examples.item3.title",
      descKey: "examples.item3.desc",
      downloadKey: "examples.item3.download",
      file: "/examples/flashcards_daily_verbs_greek.xlsx",
    },
    {
      titleKey: "examples.item4.title",
      descKey: "examples.item4.desc",
      downloadKey: "examples.item4.download",
      file: "/examples/flashcards_daily_verbs_deutsch.xlsx",
    },
  ];

  return (
    <section id="examples" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("examples.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("examples.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {examples.map((example) => (
            <div
              key={example.titleKey}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                {t(example.titleKey)}
              </h3>
              <p className="text-muted-foreground">{t(example.descKey)}</p>
              <div className="mt-4">
                <a href={example.file} download>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="w-4 h-4" />
                    {t(example.downloadKey)}
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Examples;
