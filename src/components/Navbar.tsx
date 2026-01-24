import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import LanguagePicker from "@/components/LanguagePicker";
import { useLanguage } from "@/contexts/LanguageContext";

const DownloadButtons = () => (
  <div className="flex flex-col gap-3 p-2">
    <a 
      href="https://apps.apple.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="transition-transform hover:scale-105"
    >
      <img 
        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
        alt="Download on the App Store" 
        className="h-10"
      />
    </a>
    <a 
      href="https://play.google.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="transition-transform hover:scale-105"
    >
      <img 
        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
        alt="Get it on Google Play" 
        className="h-10"
      />
    </a>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="SelfTutor" className="w-10 h-10 rounded-lg object-cover" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.features")}
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.howItWorks")}
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.pricing")}
            </a>
            <Link
              to="/download"
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Download className="w-4 h-4" />
              {t("nav.downloadApp")}
            </Link>
            <LanguagePicker />
            <Link to="/download">
              <Button variant="default">{t("nav.getStarted")}</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              className="text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 flex flex-col gap-4">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              {t("nav.features")}
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              {t("nav.howItWorks")}
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              {t("nav.pricing")}
            </a>
            <div className="py-2">
              <p className="text-sm font-medium text-foreground mb-3 flex items-center gap-1">
                <Download className="w-4 h-4" />
                {t("nav.downloadApp")}
              </p>
              <DownloadButtons />
            </div>
            <div className="py-2">
              <LanguagePicker />
            </div>
            <Link to="/download" className="w-full">
              <Button variant="default" className="w-full">{t("nav.getStarted")}</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
