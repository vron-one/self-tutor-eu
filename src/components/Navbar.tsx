import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-foreground">SelfTutor</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <Popover>
              <PopoverTrigger asChild>
                <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                  <Download className="w-4 h-4" />
                  Download App
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto">
                <DownloadButtons />
              </PopoverContent>
            </Popover>
            <Button variant="default">Get Started Free</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 flex flex-col gap-4">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              Features
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              How It Works
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              Pricing
            </a>
            <div className="py-2">
              <p className="text-sm font-medium text-foreground mb-3 flex items-center gap-1">
                <Download className="w-4 h-4" />
                Download App
              </p>
              <DownloadButtons />
            </div>
            <Button variant="default" className="w-full">Get Started Free</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
