
import { User, Mail, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ContactInfoSectionProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  handleInputChange: (field: string, value: string | boolean) => void;
}

const ContactInfoSection = ({ formData, handleInputChange }: ContactInfoSectionProps) => {
  const { t } = useTranslation();

  return (
    <Card className="border-blue-200">
      <CardHeader className="bg-blue-50">
        <CardTitle className="flex items-center gap-2 text-blue-800">
          <User className="h-5 w-5" />
          {t('vendor.contactInfo')}
        </CardTitle>
        <CardDescription className="text-blue-700">
          {t('vendor.contactInfoDescription')}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="text-sm font-medium">
              {t('vendor.firstName')} {t('vendor.required')}
            </Label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              placeholder={t('vendor.firstNamePlaceholder')}
              className="mt-1"
              required
            />
          </div>
          <div>
            <Label htmlFor="lastName" className="text-sm font-medium">
              {t('vendor.lastName')} {t('vendor.required')}
            </Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              placeholder={t('vendor.lastNamePlaceholder')}
              className="mt-1"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email" className="flex items-center gap-2 text-sm font-medium">
              <Mail className="h-4 w-4" />
              {t('vendor.email')} {t('vendor.required')}
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder={t('vendor.emailPlaceholder')}
              className="mt-1"
              required
            />
          </div>
          <div>
            <Label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium">
              <Phone className="h-4 w-4" />
              {t('vendor.phone')} {t('vendor.required')}
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder={t('vendor.phonePlaceholder')}
              className="mt-1"
              required
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactInfoSection;
