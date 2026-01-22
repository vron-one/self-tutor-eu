import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "€0",
    period: "forever",
    description: "Perfect to get started",
    features: [
      "2 card decks",
      "50 cards per deck",
      "Basic quizzes",
      "Excel import",
      "Progress tracking",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "€4.99",
    period: "/month",
    description: "For serious learners",
    features: [
      "Unlimited decks",
      "Unlimited cards",
      "Advanced quizzes",
      "Spaced repetition",
      "Language reading mode",
      "Priority support",
      "Offline access",
    ],
    cta: "Go Pro",
    popular: true,
  },
  {
    name: "Team",
    price: "€9.99",
    period: "/month",
    description: "For study groups",
    features: [
      "Everything in Pro",
      "Up to 5 team members",
      "Shared deck library",
      "Group progress tracking",
      "Admin dashboard",
      "API access",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free and upgrade when you're ready. No hidden fees.
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
                  Most Popular
                </span>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
