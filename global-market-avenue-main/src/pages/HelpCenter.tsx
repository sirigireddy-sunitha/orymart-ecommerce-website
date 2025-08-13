import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const HelpCenter = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('help.title', 'Help Center')}</h1>
          <p className="text-xl text-gray-600">{t('help.subtitle', 'Find answers to your questions')}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>{t('help.categories.orders', 'Orders')}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>{t('help.categories.ordersQ1', 'How to track my order?')}</li>
                <li>{t('help.categories.ordersQ2', 'How to cancel an order?')}</li>
                <li>{t('help.categories.ordersQ3', 'Shipping and delivery times')}</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('help.categories.payment', 'Payment')}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>{t('help.categories.paymentQ1', 'Payment methods accepted')}</li>
                <li>{t('help.categories.paymentQ2', 'Refund policy')}</li>
                <li>{t('help.categories.paymentQ3', 'Payment issues')}</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('help.categories.shipping', 'Shipping')}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>{t('help.categories.shippingQ1', 'Shipping rates and times')}</li>
                <li>{t('help.categories.shippingQ2', 'International shipping')}</li>
                <li>{t('help.categories.shippingQ3', 'Shipping restrictions')}</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('help.categories.returns', 'Returns')}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>{t('help.categories.returnsQ1', 'Return policy')}</li>
                <li>{t('help.categories.returnsQ2', 'How to return items?')}</li>
                <li>{t('help.categories.returnsQ3', 'Return timeline')}</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('help.contact', 'Contact Support')}</h2>
          <div className="space-y-4">
            <div>
              <Label>{t('help.contact.email', 'Email')}</Label>
              <Input
                placeholder={t('help.contact.emailPlaceholder', 'Enter your email')}
                className="w-full"
              />
            </div>

            <div>
              <Label>{t('help.contact.subject', 'Subject')}</Label>
              <Input
                placeholder={t('help.contact.subjectPlaceholder', 'Enter subject')}
                className="w-full"
              />
            </div>

            <div>
              <Label>{t('help.contact.message', 'Message')}</Label>
              <Textarea
                placeholder={t('help.contact.messagePlaceholder', 'Enter your message')}
                className="w-full"
              />
            </div>

            <Button className="w-full">
              {t('help.contact.submit', 'Submit Request')}
            </Button>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('help.faq', 'Frequently Asked Questions')}</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{t('help.faqQ1', 'How do I track my order?')}</h3>
              <p className="text-gray-600">{t('help.faqA1', 'You can track your order by logging into your account and visiting the Orders section.')}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">{t('help.faqQ2', 'What is your return policy?')}</h3>
              <p className="text-gray-600">{t('help.faqA2', 'We accept returns within 30 days of delivery. Products must be in original condition.')}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">{t('help.faqQ3', 'How do I change my password?')}</h3>
              <p className="text-gray-600">{t('help.faqA3', 'You can change your password in your account settings section.')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
