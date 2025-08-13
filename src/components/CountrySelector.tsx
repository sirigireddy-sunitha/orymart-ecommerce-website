
import { useState } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useCurrency } from '@/hooks/useCurrency';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const CountrySelector = () => {
  const { currentCountry, setCountry, countries } = useCurrency();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          <span className="flex items-center gap-1">
            <span>{currentCountry.flag}</span>
            <span className="text-sm">{currentCountry.currency.symbol}</span>
          </span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        {countries.map((country) => (
          <DropdownMenuItem
            key={country.code}
            onClick={() => setCountry(country.code)}
            className="flex items-center justify-between p-3 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">{country.flag}</span>
              <div>
                <div className="font-medium">{country.name}</div>
                <div className="text-sm text-gray-500">
                  {country.currency.code} ({country.currency.symbol})
                </div>
              </div>
            </div>
            {currentCountry.code === country.code && (
              <Check className="h-4 w-4 text-blue-600" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
