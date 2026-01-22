const Footer = () => {
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
              Master anything with smart flashcards. Learn smarter, not harder.
            </p>
          </div>
          
          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><a href="#features" className="hover:text-secondary-foreground transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-secondary-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Download App</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><a href="/help" className="hover:text-secondary-foreground transition-colors">Help Center</a></li>
              <li><a href="/help" className="hover:text-secondary-foreground transition-colors">Contact Us</a></li>
              <li><a href="/help" className="hover:text-secondary-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><a href="/privacy" className="hover:text-secondary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-secondary-foreground transition-colors">Terms of Service</a></li>
              <li><a href="/imprint" className="hover:text-secondary-foreground transition-colors">Imprint</a></li>
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
