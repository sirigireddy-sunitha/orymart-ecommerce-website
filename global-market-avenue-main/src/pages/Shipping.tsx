import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Shipping = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('shipping.title', 'Shipping Information')}</h1>
          <p className="text-xl text-gray-600">{t('shipping.subtitle', 'Learn about our shipping policies')}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>{t('shipping.types.standard', 'Standard Shipping')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{t('shipping.types.standardDesc', 'Free shipping on orders over ₹1000')}</p>
              <Button variant="outline">{t('shipping.learnMore', 'Learn More')}</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('shipping.types.express', 'Express Shipping')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{t('shipping.types.expressDesc', 'Next day delivery available')}</p>
              <Button variant="outline">{t('shipping.learnMore', 'Learn More')}</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('shipping.types.international', 'International Shipping')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{t('shipping.types.internationalDesc', 'Shipping to 100+ countries')}</p>
              <Button variant="outline">{t('shipping.learnMore', 'Learn More')}</Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('shipping.policy', 'Shipping Policy')}</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">{t('shipping.policyTitle1', 'Delivery Times')}</h3>
            <p className="text-gray-600">{t('shipping.policyDesc1', 'Standard shipping takes 3-7 business days')}</p>

            <h3 className="text-xl font-semibold text-gray-800">{t('shipping.policyTitle2', 'Shipping Costs')}</h3>
            <p className="text-gray-600">{t('shipping.policyDesc2', 'Free shipping on orders over ₹1000')}</p>

            <h3 className="text-xl font-semibold text-gray-800">{t('shipping.policyTitle3', 'Shipping Address')}</h3>
            <p className="text-gray-600">{t('shipping.policyDesc3', 'Update your shipping address in account settings')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
