import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const BusinessCard = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('businessCard.title', 'Orymart Business Card')}</h1>
          <p className="text-xl text-gray-600">{t('businessCard.subtitle', 'Manage your business finances with ease')}</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">{t('businessCard.fields.name', 'Full Name')}</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('businessCard.fields.namePlaceholder', 'Enter your full name')}
                  />
                </div>

                <div>
                  <Label htmlFor="email">{t('businessCard.fields.email', 'Email')}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('businessCard.fields.emailPlaceholder', 'Enter your email')}
                  />
                </div>

                <div>
                  <Label htmlFor="phone">{t('businessCard.fields.phone', 'Phone Number')}</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('businessCard.fields.phonePlaceholder', 'Enter your phone number')}
                  />
                </div>

                <div>
                  <Label htmlFor="businessName">{t('businessCard.fields.businessName', 'Business Name')}</Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder={t('businessCard.fields.businessNamePlaceholder', 'Enter your business name')}
                  />
                </div>

                <div>
                  <Label htmlFor="address">{t('businessCard.fields.address', 'Business Address')}</Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder={t('businessCard.fields.addressPlaceholder', 'Enter your business address')}
                  />
                </div>

                <Button type="submit" className="w-full">
                  {t('businessCard.apply', 'Apply for Business Card')}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('businessCard.features', 'Features')}</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>{t('businessCard.features.reward', 'Reward Points')}</li>
              <li>{t('businessCard.features.cashback', 'Cashback Offers')}</li>
              <li>{t('businessCard.features.global', 'Global Acceptance')}</li>
              <li>{t('businessCard.features.support', '24/7 Support')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
