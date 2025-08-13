
import { Building2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface BusinessInfoSectionProps {
  formData: {
    businessName: string;
    businessType: string;
    taxId: string;
    businessDescription: string;
    website: string;
  };
  handleInputChange: (field: string, value: string | boolean) => void;
}

const BusinessInfoSection = ({ formData, handleInputChange }: BusinessInfoSectionProps) => {
  const { t } = useTranslation();

  return (
    <Card className="border-orange-200">
      <CardHeader className="bg-orange-50">
        <CardTitle className="flex items-center gap-2 text-orange-800">
          <Building2 className="h-5 w-5" />
          {t('vendor.businessInfo')}
        </CardTitle>
        <CardDescription className="text-orange-700">
          {t('vendor.businessInfoDescription')}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="businessName" className="text-sm font-medium">
              {t('vendor.businessName')} {t('vendor.required')}
            </Label>
            <Input
              id="businessName"
              value={formData.businessName}
              onChange={(e) => handleInputChange('businessName', e.target.value)}
              placeholder={t('vendor.businessNamePlaceholder')}
              className="mt-1"
              required
            />
          </div>
          <div>
            <Label htmlFor="businessType" className="text-sm font-medium">
              {t('vendor.businessType')} {t('vendor.required')}
            </Label>
            <Select onValueChange={(value) => handleInputChange('businessType', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder={t('vendor.businessTypePlaceholder')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="individual">{t('vendor.individual')}</SelectItem>
                <SelectItem value="partnership">{t('vendor.partnership')}</SelectItem>
                <SelectItem value="corporation">{t('vendor.corporation')}</SelectItem>
                <SelectItem value="llc">{t('vendor.llc')}</SelectItem>
                <SelectItem value="nonprofit">{t('vendor.nonprofit')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="taxId" className="text-sm font-medium">{t('vendor.taxId')}</Label>
            <Input
              id="taxId"
              value={formData.taxId}
              onChange={(e) => handleInputChange('taxId', e.target.value)}
              placeholder={t('vendor.taxIdPlaceholder')}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="website" className="text-sm font-medium">{t('vendor.website')}</Label>
            <Input
              id="website"
              value={formData.website}
              onChange={(e) => handleInputChange('website', e.target.value)}
              placeholder={t('vendor.websitePlaceholder')}
              className="mt-1"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="businessDescription" className="text-sm font-medium">
            {t('vendor.businessDescription')} {t('vendor.required')}
          </Label>
          <Textarea
            id="businessDescription"
            value={formData.businessDescription}
            onChange={(e) => handleInputChange('businessDescription', e.target.value)}
            placeholder={t('vendor.businessDescriptionPlaceholder')}
            className="mt-1"
            rows={3}
            required
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default BusinessInfoSection;
