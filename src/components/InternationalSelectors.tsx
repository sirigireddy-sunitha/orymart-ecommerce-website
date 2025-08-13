
import { useState } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useInternationalization } from '@/hooks/useInternationalization';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';

const languageNames: { [key: string]: string } = {
  en: 'English',
  zh: '中文',
  ja: '日本語',
  ko: '한국어',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  pt: 'Português',
  ar: 'العربية',
  he: 'עברית',
  hi: 'हिन्दी',
  th: 'ไทย',
  vi: 'Tiếng Việt',
  id: 'Bahasa Indonesia',
  ms: 'Bahasa Melayu',
  tr: 'Türkçe',
  ru: 'Русский',
  pl: 'Polski',
  nl: 'Nederlands',
  sv: 'Svenska',
  no: 'Norsk',
  da: 'Dansk',
  it: 'Italiano'
};

export const InternationalSelectors = () => {
  const { currentCountry, setCountry, countries } = useInternationalization();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {/* Country/Language/Currency Selector */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2 bg-slate-800 border-slate-600 text-white hover:bg-slate-700">
            <Globe className="h-4 w-4" />
            <span className="flex items-center gap-2">
              <span>{currentCountry.flag}</span>
              <span className="text-sm">{languageNames[currentCountry.language] || currentCountry.language.toUpperCase()}</span>
              <span className="text-xs opacity-75">({currentCountry.currency.symbol})</span>
            </span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-80 bg-white border border-gray-200 p-0">
          <ScrollArea className="h-96">
            <div className="p-1">
              {countries.map((country) => (
                <DropdownMenuItem
                  key={country.code}
                  onClick={() => setCountry(country.code)}
                  className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-100 focus:bg-gray-100 rounded-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{country.flag}</span>
                    <div>
                      <div className="font-medium text-gray-900">{country.name}</div>
                      <div className="text-sm text-gray-500">
                        {languageNames[country.language] || country.language.toUpperCase()} • {country.currency.code} ({country.currency.symbol})
                      </div>
                    </div>
                  </div>
                  {currentCountry.code === country.code && (
                    <Check className="h-4 w-4 text-blue-600" />
                  )}
                </DropdownMenuItem>
              ))}
            </div>
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
