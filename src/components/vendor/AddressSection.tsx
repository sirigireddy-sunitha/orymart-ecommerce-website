
import { MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface AddressSectionProps {
  formData: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  countries: { code: string; name: string; flag: string }[];
  handleInputChange: (field: string, value: string | boolean) => void;
}

const AddressSection = ({ formData, countries, handleInputChange }: AddressSectionProps) => {
  const { t } = useTranslation();

  return (
    <Card className="border-green-200">
      <CardHeader className="bg-green-50">
        <CardTitle className="flex items-center gap-2 text-green-800">
          <MapPin className="h-5 w-5" />
          {t('vendor.address')}
        </CardTitle>
        <CardDescription className="text-green-700">
          {t('vendor.addressDescription')}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 pt-6">
        <div>
          <Label htmlFor="address" className="text-sm font-medium">
            {t('vendor.streetAddress')} {t('vendor.required')}
          </Label>
          <Input
            id="address"
            value={formData.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
            placeholder={t('vendor.streetAddressPlaceholder')}
            className="mt-1"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="city" className="text-sm font-medium">
              {t('vendor.city')} {t('vendor.required')}
            </Label>
            <Input
              id="city"
              value={formData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              placeholder={t('vendor.cityPlaceholder')}
              className="mt-1"
              required
            />
          </div>
          <div>
            <Label htmlFor="state" className="text-sm font-medium">
              {t('vendor.state')} {t('vendor.required')}
            </Label>
            <Input
              id="state"
              value={formData.state}
              onChange={(e) => handleInputChange('state', e.target.value)}
              placeholder={t('vendor.statePlaceholder')}
              className="mt-1"
              required
            />
          </div>
          <div>
            <Label htmlFor="zipCode" className="text-sm font-medium">
              {t('vendor.zipCode')} {t('vendor.required')}
            </Label>
            <Input
              id="zipCode"
              value={formData.zipCode}
              onChange={(e) => handleInputChange('zipCode', e.target.value)}
              placeholder={t('vendor.zipCodePlaceholder')}
              className="mt-1"
              required
            />
          </div>
        </div>
        <div>
          <Label htmlFor="country" className="text-sm font-medium">
            {t('vendor.country')} {t('vendor.required')}
          </Label>
          <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country.code} value={country.code}>
                  {country.flag} {country.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default AddressSection;
