import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Affiliate = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('affiliate.title', 'Affiliate Program')}</h1>
          <p className="text-xl text-gray-600">{t('affiliate.subtitle', 'Earn money by promoting Orymart')}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>{t('affiliate.features.earn', 'Earn Commission')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{t('affiliate.features.earnDesc', 'Earn commission on every sale you refer')}</p>
              <Button variant="outline">{t('affiliate.learnMore', 'Learn More')}</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('affiliate.features.support', 'Dedicated Support')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{t('affiliate.features.supportDesc', 'Get support from our affiliate team')}</p>
              <Button variant="outline">{t('affiliate.learnMore', 'Learn More')}</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('affiliate.features.tools', 'Marketing Tools')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{t('affiliate.features.toolsDesc', 'Access to marketing materials and banners')}</p>
              <Button variant="outline">{t('affiliate.learnMore', 'Learn More')}</Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('affiliate.howItWorks', 'How It Works')}</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li className="text-gray-600">{t('affiliate.steps.signUp', 'Sign up for our program')}</li>
            <li className="text-gray-600">{t('affiliate.steps.promote', 'Promote our products')}</li>
            <li className="text-gray-600">{t('affiliate.steps.earn', 'Earn commission')}</li>
          </ol>

          <Button className="mt-8" size="lg">
            {t('affiliate.joinNow', 'Join Affiliate Program')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
