
import { Store } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface TermsSectionProps {
  formData: {
    agreeToTerms: boolean;
    agreeToSelling: boolean;
    confirmTaxCompliance: boolean;
  };
  handleInputChange: (field: string, value: string | boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const TermsSection = ({ formData, handleInputChange, onSubmit }: TermsSectionProps) => {
  const { t } = useTranslation();

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked as boolean)}
              />
              <Label htmlFor="terms" className="text-sm leading-relaxed">
                {t('vendor.agreeToTerms')}
              </Label>
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox
                id="selling"
                checked={formData.agreeToSelling}
                onCheckedChange={(checked) => handleInputChange('agreeToSelling', checked as boolean)}
              />
              <Label htmlFor="selling" className="text-sm leading-relaxed">
                {t('vendor.agreeToSelling')}
              </Label>
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox
                id="tax"
                checked={formData.confirmTaxCompliance}
                onCheckedChange={(checked) => handleInputChange('confirmTaxCompliance', checked as boolean)}
              />
              <Label htmlFor="tax" className="text-sm leading-relaxed">
                {t('vendor.confirmTaxCompliance')}
              </Label>
            </div>
          </div>
          
          <Separator />
          
          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-lg font-semibold"
            disabled={!formData.agreeToTerms || !formData.agreeToSelling || !formData.confirmTaxCompliance}
            onClick={onSubmit}
          >
            <Store className="h-5 w-5 mr-2" />
            {t('vendor.createSellerAccount')}
          </Button>
          
          <p className="text-xs text-gray-500 text-center">
            {t('vendor.accountDisclaimer')}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TermsSection;
