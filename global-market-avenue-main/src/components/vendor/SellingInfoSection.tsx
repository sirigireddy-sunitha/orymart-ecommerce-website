
import { Package } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface SellingInfoSectionProps {
  formData: {
    productCategories: string;
    expectedMonthlyRevenue: string;
    businessExperience: string;
  };
  handleInputChange: (field: string, value: string | boolean) => void;
}

const SellingInfoSection = ({ formData, handleInputChange }: SellingInfoSectionProps) => {
  const { t } = useTranslation();

  return (
    <Card className="border-purple-200">
      <CardHeader className="bg-purple-50">
        <CardTitle className="flex items-center gap-2 text-purple-800">
          <Package className="h-5 w-5" />
          {t('vendor.sellingInfo')}
        </CardTitle>
        <CardDescription className="text-purple-700">
          {t('vendor.sellingInfoDescription')}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 pt-6">
        <div>
          <Label htmlFor="productCategories" className="text-sm font-medium">
            {t('vendor.productCategories')} {t('vendor.required')}
          </Label>
          <Select onValueChange={(value) => handleInputChange('productCategories', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder={t('vendor.productCategoriesPlaceholder')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="electronics">{t('vendor.electronics')}</SelectItem>
              <SelectItem value="clothing">{t('vendor.clothing')}</SelectItem>
              <SelectItem value="home">{t('vendor.home')}</SelectItem>
              <SelectItem value="books">{t('vendor.books')}</SelectItem>
              <SelectItem value="sports">{t('vendor.sports')}</SelectItem>
              <SelectItem value="beauty">{t('vendor.beauty')}</SelectItem>
              <SelectItem value="automotive">{t('vendor.automotive')}</SelectItem>
              <SelectItem value="other">{t('vendor.other')}</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="expectedMonthlyRevenue" className="text-sm font-medium">
              {t('vendor.expectedRevenue')}
            </Label>
            <Select onValueChange={(value) => handleInputChange('expectedMonthlyRevenue', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder={t('vendor.expectedRevenuePlaceholder')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-1000">{t('vendor.revenue0to1000')}</SelectItem>
                <SelectItem value="1000-5000">{t('vendor.revenue1000to5000')}</SelectItem>
                <SelectItem value="5000-10000">{t('vendor.revenue5000to10000')}</SelectItem>
                <SelectItem value="10000-25000">{t('vendor.revenue10000to25000')}</SelectItem>
                <SelectItem value="25000+">{t('vendor.revenue25000plus')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="businessExperience" className="text-sm font-medium">
              {t('vendor.businessExperience')}
            </Label>
            <Select onValueChange={(value) => handleInputChange('businessExperience', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder={t('vendor.businessExperiencePlaceholder')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new">{t('vendor.experienceNew')}</SelectItem>
                <SelectItem value="beginner">{t('vendor.experienceBeginner')}</SelectItem>
                <SelectItem value="intermediate">{t('vendor.experienceIntermediate')}</SelectItem>
                <SelectItem value="experienced">{t('vendor.experienceExperienced')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SellingInfoSection;
