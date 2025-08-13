
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Help = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('help.title', 'Help Center')}</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>{t('help.faq', 'Frequently Asked Questions')}</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>{t('help.shipping', 'How long does shipping take?')}</AccordionTrigger>
                  <AccordionContent>
                    {t('help.shippingAnswer', 'Standard shipping takes 3-7 business days. Express shipping takes 1-3 business days.')}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>{t('help.returns', 'What is your return policy?')}</AccordionTrigger>
                  <AccordionContent>
                    {t('help.returnsAnswer', 'We offer 30-day returns on most items. Items must be in original condition.')}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>{t('help.payment', 'What payment methods do you accept?')}</AccordionTrigger>
                  <AccordionContent>
                    {t('help.paymentAnswer', 'We accept all major credit cards, PayPal, and bank transfers.')}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('help.contact', 'Contact Support')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">{t('help.email', 'Email Support')}</h3>
                  <p className="text-gray-600">support@orymart.com</p>
                </div>
                <div>
                  <h3 className="font-semibold">{t('help.phone', 'Phone Support')}</h3>
                  <p className="text-gray-600">1-800-ORYMART</p>
                </div>
                <div>
                  <h3 className="font-semibold">{t('help.hours', 'Support Hours')}</h3>
                  <p className="text-gray-600">{t('help.hoursText', 'Monday - Friday: 9AM - 6PM EST')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Help;
