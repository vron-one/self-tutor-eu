import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Pricing = () => {
  const { t } = useLanguage();

  const plans = [
    {
      nameKey: "pricing.free",
      price: "€0",
      periodKey: "pricing.forever",
      descKey: "pricing.freeDesc",
      features: [
        "pricing.free.feature1",
        "pricing.free.feature2",
        "pricing.free.feature3",
        "pricing.free.feature4",
        "pricing.free.feature5",
      ],
      ctaKey: "pricing.startFree",
      popular: false,
    },
    {
      nameKey: "pricing.pro",
      price: "€9.50",
      periodKey: "pricing.oneTime",
      descKey: "pricing.proDesc",
      features: [
        "pricing.pro.feature1",
        "pricing.pro.feature2",
        "pricing.pro.feature3",
        "pricing.pro.feature4",
        "pricing.pro.feature5",
        "pricing.pro.feature6",
        "pricing.pro.feature7",
      ],
      ctaKey: "pricing.goPro",
      popular: true,
    },
    {
      nameKey: "pricing.ai",
      price: "€3",
      periodKey: "pricing.month",
      descKey: "pricing.aiDesc",
      features: [
        "pricing.ai.feature1",
        "pricing.ai.feature2",
        "pricing.ai.feature3",
        "pricing.ai.feature4",
      ],
      ctaKey: "pricing.comingSoon",
      popular: false,
      comingSoon: true,
    },
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("pricing.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border ${
                plan.popular
                  ? "border-primary bg-card shadow-xl scale-105"
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  {t("pricing.mostPopular")}
                </span>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  {t(plan.nameKey)}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{t(plan.periodKey)}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{t(plan.descKey)}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((featureKey, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-card-foreground">{t(featureKey)}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
                disabled={plan.comingSoon}
              >
                {t(plan.ctaKey)}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
