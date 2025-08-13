import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SellOnOrymart = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('sell.title', 'Sell on Orymart')}</h1>
          <p className="text-xl text-gray-600">{t('sell.subtitle', 'Join millions of successful sellers on Orymart')}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>{t('sell.features.listing', 'Easy Product Listing')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{t('sell.features.listingDesc', 'Quickly list your products with our user-friendly interface')}</p>
              <Button variant="outline">{t('sell.getStarted', 'Get Started')}</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('sell.features.reach', 'Global Reach')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{t('sell.features.reachDesc', 'Sell to customers worldwide with our global marketplace')}</p>
              <Button variant="outline">{t('sell.learnMore', 'Learn More')}</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('sell.features.support', '24/7 Support')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{t('sell.features.supportDesc', 'Dedicated support team available around the clock')}</p>
              <Button variant="outline">{t('sell.contactUs', 'Contact Us')}</Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('sell.steps', 'How to Start Selling')}</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li className="text-gray-600">{t('sell.steps.step1', 'Create an account')}</li>
            <li className="text-gray-600">{t('sell.steps.step2', 'List your products')}</li>
            <li className="text-gray-600">{t('sell.steps.step3', 'Manage orders')}</li>
            <li className="text-gray-600">{t('sell.steps.step4', 'Grow your business')}</li>
          </ol>

          <Button className="mt-8" size="lg">
            {t('sell.startSelling', 'Start Selling Now')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SellOnOrymart;
