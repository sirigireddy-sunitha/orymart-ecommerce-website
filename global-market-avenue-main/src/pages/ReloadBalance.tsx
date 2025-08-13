import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

const ReloadBalance = () => {
  const { t } = useTranslation();
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reload balance
    console.log('Reload details:', {
      amount,
      paymentMethod
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('reload.title', 'Reload Your Balance')}</h1>
          <p className="text-xl text-gray-600">{t('reload.subtitle', 'Add funds to your Orymart account')}</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label>{t('reload.fields.amount', 'Amount')}</Label>
                  <Select value={amount} onValueChange={setAmount}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('reload.fields.amountPlaceholder', 'Select amount')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="500">₹500</SelectItem>
                      <SelectItem value="1000">₹1,000</SelectItem>
                      <SelectItem value="2000">₹2,000</SelectItem>
                      <SelectItem value="5000">₹5,000</SelectItem>
                      <SelectItem value="10000">₹10,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>{t('reload.fields.paymentMethod', 'Payment Method')}</Label>
                  <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('reload.fields.paymentMethodPlaceholder', 'Select payment method')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="netbanking">{t('reload.methods.netbanking', 'Net Banking')}</SelectItem>
                      <SelectItem value="creditcard">{t('reload.methods.creditcard', 'Credit Card')}</SelectItem>
                      <SelectItem value="debitcard">{t('reload.methods.debitcard', 'Debit Card')}</SelectItem>
                      <SelectItem value="upi">{t('reload.methods.upi', 'UPI')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" className="w-full">
                  {t('reload.reload', 'Reload Balance')}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('reload.features', 'Features')}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>{t('reload.features.instant', 'Instant Reload')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{t('reload.features.instantDesc', 'Funds added instantly to your account')}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('reload.features.multiple', 'Multiple Options')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{t('reload.features.multipleDesc', 'Choose from multiple payment methods')}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('reload.features.safe', 'Safe & Secure')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{t('reload.features.safeDesc', 'Secure payment processing')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReloadBalance;
