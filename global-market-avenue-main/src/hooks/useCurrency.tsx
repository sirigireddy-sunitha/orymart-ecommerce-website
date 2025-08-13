
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Currency {
  code: string;
  symbol: string;
  name: string;
  rate: number; // Exchange rate relative to USD
}

interface Country {
  code: string;
  name: string;
  flag: string;
  currency: Currency;
}

const countries: Country[] = [
  {
    code: 'US',
    name: 'United States',
    flag: '🇺🇸',
    currency: { code: 'USD', symbol: '$', name: 'US Dollar', rate: 1 }
  },
  {
    code: 'IN',
    name: 'India',
    flag: '🇮🇳',
    currency: { code: 'INR', symbol: '₹', name: 'Indian Rupee', rate: 83.12 }
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    flag: '🇬🇧',
    currency: { code: 'GBP', symbol: '£', name: 'British Pound', rate: 0.79 }
  },
  {
    code: 'EU',
    name: 'European Union',
    flag: '🇪🇺',
    currency: { code: 'EUR', symbol: '€', name: 'Euro', rate: 0.92 }
  },
  {
    code: 'CA',
    name: 'Canada',
    flag: '🇨🇦',
    currency: { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar', rate: 1.35 }
  },
  {
    code: 'AU',
    name: 'Australia',
    flag: '🇦🇺',
    currency: { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', rate: 1.53 }
  },
  {
    code: 'JP',
    name: 'Japan',
    flag: '🇯🇵',
    currency: { code: 'JPY', symbol: '¥', name: 'Japanese Yen', rate: 149.50 }
  },
  {
    code: 'KR',
    name: 'South Korea',
    flag: '🇰🇷',
    currency: { code: 'KRW', symbol: '₩', name: 'Korean Won', rate: 1320.45 }
  }
];

interface CurrencyContextType {
  currentCountry: Country;
  setCountry: (countryCode: string) => void;
  formatPrice: (price: number) => string;
  convertPrice: (price: number) => number;
  countries: Country[];
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currentCountry, setCurrentCountry] = useState<Country>(() => {
    const savedCountry = localStorage.getItem('selectedCountry');
    return countries.find(c => c.code === savedCountry) || countries[0];
  });

  useEffect(() => {
    localStorage.setItem('selectedCountry', currentCountry.code);
  }, [currentCountry]);

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
    const formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currentCountry.currency.code,
      minimumFractionDigits: currentCountry.currency.code === 'JPY' ? 0 : 2,
    }).format(convertedPrice);
    
    return formatted;
  };

  return (
    <CurrencyContext.Provider value={{
      currentCountry,
      setCountry,
      formatPrice,
      convertPrice,
      countries
    }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
