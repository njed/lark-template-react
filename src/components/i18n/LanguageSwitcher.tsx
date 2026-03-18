import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { useLocaleStore } from "@/store/localeStore";
import {
  SUPPORTED_LANGUAGES,
  type LanguageCode,
} from "@/i18n/config/languages";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { t } = useTranslation("common");
  const { locale, setLocale } = useLocaleStore();

  const handleLanguageChange = (lang: LanguageCode) => {
    setLocale(lang);
  };

  return (
    <div className="relative inline-block">
      <div className="flex items-center gap-2">
        <Globe className="h-5 w-5 text-[hsl(var(--muted-foreground))]" />
        <select
          value={locale}
          onChange={(e) => handleLanguageChange(e.target.value as LanguageCode)}
          className={cn(
            "appearance-none bg-transparent pe-6 ps-2 text-sm",
            "text-[hsl(var(--foreground))] cursor-pointer",
            "focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]",
            "rounded-md border border-[hsl(var(--border))]",
          )}
          aria-label={t("switchLanguage")}
        >
          {Object.values(SUPPORTED_LANGUAGES).map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.nativeName}
              {lang.dir === "rtl" ? " ←" : ""}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
