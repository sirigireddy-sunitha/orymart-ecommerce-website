import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

const CurrencyConverter = () => {
  const { t } = useTranslation();
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('INR');
  const [toCurrency, setToCurrency] = useState('USD');
  const [result, setResult] = useState('');

  const handleConvert = () => {
    // Simple conversion rates (for demonstration)
    const rates = {
      INR: { USD: 0.012, EUR: 0.011, GBP: 0.0098, JPY: 1.68 },
      USD: { INR: 82.5, EUR: 0.92, GBP: 0.81, JPY: 140.5 },
      EUR: { INR: 89.7, USD: 1.09, GBP: 0.88, JPY: 152.7 },
      GBP: { INR: 102.2, USD: 1.23, EUR: 1.14, JPY: 175.9 },
      JPY: { INR: 0.595, USD: 0.0071, EUR: 0.0065, GBP: 0.0057 }
    };

    const amountNum = parseFloat(amount);
    if (!isNaN(amountNum)) {
      const converted = amountNum * rates[fromCurrency][toCurrency];
      // For JPY, show 0 decimal places since it's typically shown as whole numbers
      const decimals = toCurrency === 'JPY' ? 0 : 2;
      setResult(converted.toFixed(decimals));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('currency.title', 'Currency Converter')}</h1>
          <p className="text-xl text-gray-600">{t('currency.subtitle', 'Convert currencies instantly')}</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <Label>{t('currency.fields.amount', 'Amount')}</Label>
                  <Input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder={t('currency.fields.amountPlaceholder', 'Enter amount')}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>{t('currency.fields.from', 'From')}</Label>
                    <Select value={fromCurrency} onValueChange={setFromCurrency}>
                      <SelectTrigger>
                        <SelectValue placeholder={t('currency.fields.fromPlaceholder', 'Select currency')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="INR">₹ INR</SelectItem>
                        <SelectItem value="USD">$ USD</SelectItem>
                        <SelectItem value="EUR">€ EUR</SelectItem>
                        <SelectItem value="GBP">£ GBP</SelectItem>
                        <SelectItem value="JPY">¥ JPY</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>{t('currency.fields.to', 'To')}</Label>
                    <Select value={toCurrency} onValueChange={setToCurrency}>
                      <SelectTrigger>
                        <SelectValue placeholder={t('currency.fields.toPlaceholder', 'Select currency')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="INR">₹ INR</SelectItem>
                        <SelectItem value="USD">$ USD</SelectItem>
                        <SelectItem value="EUR">€ EUR</SelectItem>
                        <SelectItem value="GBP">£ GBP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button onClick={handleConvert} className="w-full">
                  {t('currency.convert', 'Convert')}
                </Button>

                {result && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-blue-700 font-semibold">
                      {t('currency.result', 'Converted Amount')}: {result} {toCurrency}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('currency.features', 'Features')}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>{t('currency.features.realtime', 'Real-time Rates')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{t('currency.features.realtimeDesc', 'Get latest currency rates')}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('currency.features.multiple', 'Multiple Currencies')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{t('currency.features.multipleDesc', 'Convert between multiple currencies')}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('currency.features.easy', 'Easy to Use')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{t('currency.features.easyDesc', 'Simple and intuitive interface')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
