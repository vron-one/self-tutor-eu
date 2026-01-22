import { Globe } from "lucide-react";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useLanguage, languageNames, languageFlags, Language } from "@/contexts/LanguageContext";

const languages: Language[] = ["en", "de", "it", "pt", "gr", "sp"];

const LanguagePicker = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const handleSelect = (lang: Language) => {
    setLanguage(lang);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
          <Globe className="w-4 h-4" />
          <span className="text-lg">{languageFlags[language]}</span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-40 p-1 bg-popover border border-border shadow-lg z-50">
        <div className="flex flex-col">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => handleSelect(lang)}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                language === lang
                  ? "bg-primary/10 text-primary"
                  : "text-popover-foreground hover:bg-muted"
              }`}
            >
              <span className="text-lg">{languageFlags[lang]}</span>
              <span>{languageNames[lang]}</span>
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LanguagePicker;
