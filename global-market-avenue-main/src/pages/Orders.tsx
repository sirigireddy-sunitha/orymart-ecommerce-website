import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

const Orders = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{t('orders.title', 'Orders')}</h1>
            <p className="text-gray-600 mb-6">{t('orders.loginRequired', 'Please login to view your orders')}</p>
            <Button>{t('orders.login', 'Login')}</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('orders.title', 'Your Orders')}</h1>
          <p className="text-xl text-gray-600">{t('orders.subtitle', 'View and manage your orders')}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>{t('orders.active', 'Active Orders')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{t('orders.activeDesc', 'Orders that are being processed')}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('orders.completed', 'Completed Orders')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{t('orders.completedDesc', 'Orders that have been delivered')}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('orders.cancelled', 'Cancelled Orders')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{t('orders.cancelledDesc', 'Orders that were cancelled')}</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('orders.features', 'Order Features')}</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>{t('orders.features.track', 'Track order status')}</li>
            <li>{t('orders.features.return', 'Request returns')}</li>
            <li>{t('orders.features.cancel', 'Cancel orders')}</li>
            <li>{t('orders.features.invoice', 'Download invoices')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Orders;
