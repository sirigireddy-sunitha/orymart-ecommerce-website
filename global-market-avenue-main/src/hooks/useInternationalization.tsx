
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface Country {
  code: string;
  name: string;
  flag: string;
  language: string;
  currency: {
    code: string;
    symbol: string;
    name: string;
    rate: number;
  };
}

const countries: Country[] = [
  // North America
  {
    code: 'US',
    name: 'United States',
    flag: '🇺🇸',
    language: 'en',
    currency: { code: 'USD', symbol: '$', name: 'US Dollar', rate: 1 }
  },
  {
    code: 'CA',
    name: 'Canada',
    flag: '🇨🇦',
    language: 'en',
    currency: { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar', rate: 1.35 }
  },
  {
    code: 'MX',
    name: 'Mexico',
    flag: '🇲🇽',
    language: 'es',
    currency: { code: 'MXN', symbol: '$', name: 'Mexican Peso', rate: 17.50 }
  },
  
  // Europe
  {
    code: 'GB',
    name: 'United Kingdom',
    flag: '🇬🇧',
    language: 'en',
    currency: { code: 'GBP', symbol: '£', name: 'British Pound', rate: 0.79 }
  },
  {
    code: 'DE',
    name: 'Germany',
    flag: '🇩🇪',
    language: 'de',
    currency: { code: 'EUR', symbol: '€', name: 'Euro', rate: 0.92 }
  },
  {
    code: 'FR',
    name: 'France',
    flag: '🇫🇷',
    language: 'fr',
    currency: { code: 'EUR', symbol: '€', name: 'Euro', rate: 0.92 }
  },
  {
    code: 'ES',
    name: 'Spain',
    flag: '🇪🇸',
    language: 'es',
    currency: { code: 'EUR', symbol: '€', name: 'Euro', rate: 0.92 }
  },
  {
    code: 'IT',
    name: 'Italy',
    flag: '🇮🇹',
    language: 'it',
    currency: { code: 'EUR', symbol: '€', name: 'Euro', rate: 0.92 }
  },
  {
    code: 'NL',
    name: 'Netherlands',
    flag: '🇳🇱',
    language: 'nl',
    currency: { code: 'EUR', symbol: '€', name: 'Euro', rate: 0.92 }
  },
  {
    code: 'SE',
    name: 'Sweden',
    flag: '🇸🇪',
    language: 'sv',
    currency: { code: 'SEK', symbol: 'kr', name: 'Swedish Krona', rate: 10.85 }
  },
  {
    code: 'NO',
    name: 'Norway',
    flag: '🇳🇴',
    language: 'no',
    currency: { code: 'NOK', symbol: 'kr', name: 'Norwegian Krone', rate: 10.95 }
  },
  {
    code: 'DK',
    name: 'Denmark',
    flag: '🇩🇰',
    language: 'da',
    currency: { code: 'DKK', symbol: 'kr', name: 'Danish Krone', rate: 6.85 }
  },
  {
    code: 'CH',
    name: 'Switzerland',
    flag: '🇨🇭',
    language: 'de',
    currency: { code: 'CHF', symbol: 'CHF', name: 'Swiss Franc', rate: 0.89 }
  },
  {
    code: 'PL',
    name: 'Poland',
    flag: '🇵🇱',
    language: 'pl',
    currency: { code: 'PLN', symbol: 'zł', name: 'Polish Zloty', rate: 4.25 }
  },
  {
    code: 'RU',
    name: 'Russia',
    flag: '🇷🇺',
    language: 'ru',
    currency: { code: 'RUB', symbol: '₽', name: 'Russian Ruble', rate: 92.50 }
  },
  
  // Asia Pacific
  {
    code: 'JP',
    name: 'Japan',
    flag: '🇯🇵',
    language: 'ja',
    currency: { code: 'JPY', symbol: '¥', name: 'Japanese Yen', rate: 149.50 }
  },
  {
    code: 'CN',
    name: 'China',
    flag: '🇨🇳',
    language: 'zh',
    currency: { code: 'CNY', symbol: '¥', name: 'Chinese Yuan', rate: 7.25 }
  },
  {
    code: 'KR',
    name: 'South Korea',
    flag: '🇰🇷',
    language: 'ko',
    currency: { code: 'KRW', symbol: '₩', name: 'Korean Won', rate: 1320.45 }
  },
  {
    code: 'IN',
    name: 'India',
    flag: '🇮🇳',
    language: 'hi',
    currency: { code: 'INR', symbol: '₹', name: 'Indian Rupee', rate: 83.12 }
  },
  {
    code: 'SG',
    name: 'Singapore',
    flag: '🇸🇬',
    language: 'en',
    currency: { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar', rate: 1.35 }
  },
  {
    code: 'AU',
    name: 'Australia',
    flag: '🇦🇺',
    language: 'en',
    currency: { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', rate: 1.53 }
  },
  {
    code: 'NZ',
    name: 'New Zealand',
    flag: '🇳🇿',
    language: 'en',
    currency: { code: 'NZD', symbol: 'NZ$', name: 'New Zealand Dollar', rate: 1.65 }
  },
  {
    code: 'TH',
    name: 'Thailand',
    flag: '🇹🇭',
    language: 'th',
    currency: { code: 'THB', symbol: '฿', name: 'Thai Baht', rate: 35.80 }
  },
  {
    code: 'VN',
    name: 'Vietnam',
    flag: '🇻🇳',
    language: 'vi',
    currency: { code: 'VND', symbol: '₫', name: 'Vietnamese Dong', rate: 24500 }
  },
  {
    code: 'ID',
    name: 'Indonesia',
    flag: '🇮🇩',
    language: 'id',
    currency: { code: 'IDR', symbol: 'Rp', name: 'Indonesian Rupiah', rate: 15750 }
  },
  {
    code: 'MY',
    name: 'Malaysia',
    flag: '🇲🇾',
    language: 'ms',
    currency: { code: 'MYR', symbol: 'RM', name: 'Malaysian Ringgit', rate: 4.65 }
  },
  {
    code: 'PH',
    name: 'Philippines',
    flag: '🇵🇭',
    language: 'en',
    currency: { code: 'PHP', symbol: '₱', name: 'Philippine Peso', rate: 55.80 }
  },
  {
    code: 'HK',
    name: 'Hong Kong',
    flag: '🇭🇰',
    language: 'zh',
    currency: { code: 'HKD', symbol: 'HK$', name: 'Hong Kong Dollar', rate: 7.85 }
  },
  {
    code: 'TW',
    name: 'Taiwan',
    flag: '🇹🇼',
    language: 'zh',
    currency: { code: 'TWD', symbol: 'NT$', name: 'Taiwan Dollar', rate: 31.50 }
  },
  
  // Middle East & Africa
  {
    code: 'AE',
    name: 'United Arab Emirates',
    flag: '🇦🇪',
    language: 'ar',
    currency: { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham', rate: 3.67 }
  },
  {
    code: 'SA',
    name: 'Saudi Arabia',
    flag: '🇸🇦',
    language: 'ar',
    currency: { code: 'SAR', symbol: '﷼', name: 'Saudi Riyal', rate: 3.75 }
  },
  {
    code: 'IL',
    name: 'Israel',
    flag: '🇮🇱',
    language: 'he',
    currency: { code: 'ILS', symbol: '₪', name: 'Israeli Shekel', rate: 3.65 }
  },
  {
    code: 'TR',
    name: 'Turkey',
    flag: '🇹🇷',
    language: 'tr',
    currency: { code: 'TRY', symbol: '₺', name: 'Turkish Lira', rate: 29.25 }
  },
  {
    code: 'ZA',
    name: 'South Africa',
    flag: '🇿🇦',
    language: 'en',
    currency: { code: 'ZAR', symbol: 'R', name: 'South African Rand', rate: 18.75 }
  },
  {
    code: 'EG',
    name: 'Egypt',
    flag: '🇪🇬',
    language: 'ar',
    currency: { code: 'EGP', symbol: '£', name: 'Egyptian Pound', rate: 30.85 }
  },
  {
    code: 'NG',
    name: 'Nigeria',
    flag: '🇳🇬',
    language: 'en',
    currency: { code: 'NGN', symbol: '₦', name: 'Nigerian Naira', rate: 815.50 }
  },
  
  // South America
  {
    code: 'BR',
    name: 'Brazil',
    flag: '🇧🇷',
    language: 'pt',
    currency: { code: 'BRL', symbol: 'R$', name: 'Brazilian Real', rate: 5.15 }
  },
  {
    code: 'AR',
    name: 'Argentina',
    flag: '🇦🇷',
    language: 'es',
    currency: { code: 'ARS', symbol: '$', name: 'Argentine Peso', rate: 365.50 }
  },
  {
    code: 'CL',
    name: 'Chile',
    flag: '🇨🇱',
    language: 'es',
    currency: { code: 'CLP', symbol: '$', name: 'Chilean Peso', rate: 895.50 }
  },
  {
    code: 'CO',
    name: 'Colombia',
    flag: '🇨🇴',
    language: 'es',
    currency: { code: 'COP', symbol: '$', name: 'Colombian Peso', rate: 4125.50 }
  },
  {
    code: 'PE',
    name: 'Peru',
    flag: '🇵🇪',
    language: 'es',
    currency: { code: 'PEN', symbol: 'S/', name: 'Peruvian Sol', rate: 3.75 }
  }
];

interface InternationalizationContextType {
  currentCountry: Country;
  setCountry: (countryCode: string) => void;
  formatPrice: (price: number) => string;
  convertPrice: (price: number) => number;
  countries: Country[];
}

const InternationalizationContext = createContext<InternationalizationContextType | undefined>(undefined);

export const InternationalizationProvider = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();
  const [currentCountry, setCurrentCountry] = useState<Country>(() => {
    const savedCountry = localStorage.getItem('selectedCountry');
    return countries.find(c => c.code === savedCountry) || countries[0];
  });

  useEffect(() => {
    localStorage.setItem('selectedCountry', currentCountry.code);
    localStorage.setItem('language', currentCountry.language);
    localStorage.setItem('currency', currentCountry.currency.code);
    i18n.changeLanguage(currentCountry.language);
  }, [currentCountry, i18n]);

  const setCountry = (countryCode: string) => {
    const country = countries.find(c => c.code === countryCode);
    if (country) {
      setCurrentCountry(country);
    }
  };

  const convertPrice = (priceUSD: number) => {
    return priceUSD * currentCountry.currency.rate;
  };

  const formatPrice = (priceUSD: number) => {
    const convertedPrice = convertPrice(priceUSD);
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currentCountry.currency.code,
      minimumFractionDigits: currentCountry.currency.code === 'JPY' || currentCountry.currency.code === 'KRW' || currentCountry.currency.code === 'VND' || currentCountry.currency.code === 'IDR' ? 0 : 2,
    }).format(convertedPrice);
  };

  return (
    <InternationalizationContext.Provider value={{
      currentCountry,
      setCountry,
      formatPrice,
      convertPrice,
      countries
    }}>
      {children}
    </InternationalizationContext.Provider>
  );
};

export const useInternationalization = () => {
  const context = useContext(InternationalizationContext);
  if (!context) {
    throw new Error('useInternationalization must be used within an InternationalizationProvider');
  }
  return context;
};
