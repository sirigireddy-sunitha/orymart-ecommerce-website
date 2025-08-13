import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Advertise = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('advertising.title', 'Advertise on Orymart')}</h1>
          <p className="text-xl text-gray-600">{t('advertising.subtitle', 'Reach millions of customers with our advertising solutions')}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>{t('advertising.types.product', 'Product Ads')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{t('advertising.types.productDesc', 'Promote your products directly to customers')}</p>
              <Button variant="outline">{t('advertising.learnMore', 'Learn More')}</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('advertising.types.banner', 'Banner Ads')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{t('advertising.types.bannerDesc', 'Display your brand across our platform')}</p>
              <Button variant="outline">{t('advertising.learnMore', 'Learn More')}</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('advertising.types.sponsored', 'Sponsored Products')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{t('advertising.types.sponsoredDesc', 'Get featured placement for your products')}</p>
              <Button variant="outline">{t('advertising.learnMore', 'Learn More')}</Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('advertising.benefits', 'Why Advertise with Us')}</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-4">
            <li>{t('advertising.benefits.targeted', 'Targeted Audience')}</li>
            <li>{t('advertising.benefits.performance', 'Performance Tracking')}</li>
            <li>{t('advertising.benefits.support', '24/7 Support')}</li>
            <li>{t('advertising.benefits.results', 'Proven Results')}</li>
          </ul>

          <Button className="mt-8" size="lg">
            {t('advertising.startAdvertising', 'Start Advertising Now')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
