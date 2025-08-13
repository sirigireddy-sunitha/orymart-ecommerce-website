import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const BecomeVendor = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    phone: '',
    businessType: '',
    description: '',
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('vendor.title', 'Become a Vendor')}</h1>
          <p className="text-xl text-gray-600">{t('vendor.subtitle', 'Join our network of trusted sellers')}</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="businessName">{t('vendor.fields.businessName', 'Business Name')}</Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder={t('vendor.fields.businessNamePlaceholder', 'Enter your business name')}
                  />
                </div>

                <div>
                  <Label htmlFor="email">{t('vendor.fields.email', 'Email')}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('vendor.fields.emailPlaceholder', 'Enter your email')}
                  />
                </div>

                <div>
                  <Label htmlFor="phone">{t('vendor.fields.phone', 'Phone Number')}</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('vendor.fields.phonePlaceholder', 'Enter your phone number')}
                  />
                </div>

                <div>
                  <Label htmlFor="businessType">{t('vendor.fields.businessType', 'Business Type')}</Label>
                  <Input
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    placeholder={t('vendor.fields.businessTypePlaceholder', 'Enter your business type')}
                  />
                </div>

                <div>
                  <Label htmlFor="description">{t('vendor.fields.description', 'Business Description')}</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder={t('vendor.fields.descriptionPlaceholder', 'Tell us about your business')}
                  />
                </div>

                <Button type="submit" className="w-full">
                  {t('vendor.submit', 'Submit Application')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BecomeVendor;
