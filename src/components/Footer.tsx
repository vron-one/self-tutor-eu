import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">SelfTutor</span>
            </div>
            <p className="text-secondary-foreground/80">
              {t("footer.tagline")}
            </p>
          </div>
          
          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.product")}</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>
                <Link to="/#features" className="hover:text-secondary-foreground transition-colors">
                  {t("footer.features")}
                </Link>
              </li>
              <li>
                <Link to="/#pricing" className="hover:text-secondary-foreground transition-colors">
                  {t("footer.pricing")}
                </Link>
              </li>
              <li>
                <Link to="/examples" className="hover:text-secondary-foreground transition-colors">
                  {t("footer.examples")}
                </Link>
              </li>
              <li>
                <Link to="/download" className="hover:text-secondary-foreground transition-colors">
                  {t("footer.downloadApp")}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.support")}</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>
                <Link to="/help" className="hover:text-secondary-foreground transition-colors">
                  {t("footer.helpCenter")}
                </Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-secondary-foreground transition-colors">
                  {t("footer.contact")}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-secondary-foreground transition-colors">
                  {t("footer.faq")}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.legal")}</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>
                <Link to="/privacy" className="hover:text-secondary-foreground transition-colors">
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-secondary-foreground transition-colors">
                  {t("footer.terms")}
                </Link>
              </li>
              <li>
                <Link to="/imprint" className="hover:text-secondary-foreground transition-colors">
                  {t("footer.imprint")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-secondary-foreground/20 text-center text-secondary-foreground/60">
          <p>© {new Date().getFullYear()} SelfTutor. Made with ❤️ in the EU.</p>
          <p className="text-sm mt-2">selftutor.eu</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
