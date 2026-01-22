import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { MessageCircle, Zap, Globe, PiggyBank } from "lucide-react";

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || "";
const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL || "";

const topicOptions = [
  { value: "choose", label: "Choose..." },
  { value: "feedback", label: "Feedback" },
  { value: "found_error", label: "Found Error" },
  { value: "feature_request", label: "Feature Request" },
  { value: "business_request", label: "Business Request" },
  { value: "google_meet", label: "Google Meet" },
  { value: "question_about_vron", label: "Question about vron" },
];

const HelpCenter = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    topic: "choose",
    message: "",
  });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.confirmEmail.trim() !== "" &&
    formData.email === formData.confirmEmail &&
    formData.topic !== "choose" &&
    formData.message.trim() !== "" &&
    captchaToken !== null;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTopicChange = (value: string) => {
    setFormData((prev) => ({ ...prev, topic: value }));
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) return;

    setIsSubmitting(true);

    try {
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        topic: formData.topic,
        message: formData.message,
        captchaToken,
        timestamp: new Date().toISOString(),
        language,
      };

      const response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      toast({
        title: language === "de" ? "Erfolgreich gesendet!" : "Successfully sent!",
        description:
          language === "de"
            ? "Wir werden uns bald bei Ihnen melden."
            : "We will get back to you soon.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: "",
        topic: "choose",
        message: "",
      });
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
    } catch (error) {
      toast({
        title: language === "de" ? "Fehler" : "Error",
        description:
          language === "de"
            ? "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."
            : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {language === "de" ? "Hilfe-Center" : "Help Center"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === "de"
              ? "Wir nutzen KI, um schnell, multinational und kostengünstig zu helfen. Nutzen Sie unser Feedback-Formular!"
              : "We use AI to help quickly, multinationally, and keep prices low. Use our feedback form!"}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">
                {language === "de" ? "Schnelle Antworten" : "Quick Responses"}
              </h3>
              <p className="text-muted-foreground text-sm">
                {language === "de"
                  ? "KI-gestützte Bearbeitung für schnelle Hilfe"
                  : "AI-powered processing for fast assistance"}
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">
                {language === "de" ? "Multinational" : "Multinational"}
              </h3>
              <p className="text-muted-foreground text-sm">
                {language === "de"
                  ? "Unterstützung in mehreren Sprachen"
                  : "Support in multiple languages"}
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <PiggyBank className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">
                {language === "de" ? "Günstige Preise" : "Low Prices"}
              </h3>
              <p className="text-muted-foreground text-sm">
                {language === "de"
                  ? "Effizienz ermöglicht faire Preise"
                  : "Efficiency enables fair pricing"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">
                {language === "de" ? "Kontaktformular" : "Contact Form"}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">
                    {language === "de" ? "Vorname" : "First Name"} *
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder={language === "de" ? "Max" : "John"}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">
                    {language === "de" ? "Nachname" : "Last Name"} *
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder={language === "de" ? "Mustermann" : "Doe"}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  {language === "de" ? "E-Mail" : "Email"} *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="email@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmEmail">
                  {language === "de" ? "E-Mail bestätigen" : "Confirm Email"} *
                </Label>
                <Input
                  id="confirmEmail"
                  name="confirmEmail"
                  type="email"
                  value={formData.confirmEmail}
                  onChange={handleInputChange}
                  placeholder="email@example.com"
                  required
                />
                {formData.email &&
                  formData.confirmEmail &&
                  formData.email !== formData.confirmEmail && (
                    <p className="text-sm text-destructive">
                      {language === "de"
                        ? "E-Mail-Adressen stimmen nicht überein"
                        : "Email addresses do not match"}
                    </p>
                  )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="topic">
                  {language === "de" ? "Thema" : "Topic"} *
                </Label>
                <Select value={formData.topic} onValueChange={handleTopicChange}>
                  <SelectTrigger>
                    <SelectValue placeholder={language === "de" ? "Auswählen..." : "Choose..."} />
                  </SelectTrigger>
                  <SelectContent>
                    {topicOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  {language === "de" ? "Nachricht" : "Message"} *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={
                    language === "de"
                      ? "Beschreiben Sie Ihr Anliegen..."
                      : "Describe your inquiry..."
                  }
                  rows={5}
                  required
                />
              </div>

              {RECAPTCHA_SITE_KEY && (
                <div className="flex justify-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={RECAPTCHA_SITE_KEY}
                    onChange={handleCaptchaChange}
                  />
                </div>
              )}

              <Button
                type="submit"
                className="w-full"
                disabled={!isFormValid || isSubmitting}
              >
                {isSubmitting
                  ? language === "de"
                    ? "Wird gesendet..."
                    : "Sending..."
                  : language === "de"
                  ? "Absenden"
                  : "Send"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                {language === "de"
                  ? "* Alle Felder sind Pflichtfelder"
                  : "* All fields are required"}
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HelpCenter;
