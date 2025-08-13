import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

const GiftCard = () => {
  const { t } = useTranslation();
  const [amount, setAmount] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle gift card purchase
    console.log('Gift card details:', {
      amount,
      recipientEmail,
      recipientName,
      message
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('giftCard.title', 'Gift Cards')}</h1>
          <p className="text-xl text-gray-600">{t('giftCard.subtitle', 'Share the joy of shopping')}</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label>{t('giftCard.fields.amount', 'Amount')}</Label>
                  <Select value={amount} onValueChange={setAmount}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('giftCard.fields.amountPlaceholder', 'Select amount')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1000">₹1,000</SelectItem>
                      <SelectItem value="2000">₹2,000</SelectItem>
                      <SelectItem value="3000">₹3,000</SelectItem>
                      <SelectItem value="5000">₹5,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>{t('giftCard.fields.recipientEmail', 'Recipient Email')}</Label>
                  <Input
                    type="email"
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    placeholder={t('giftCard.fields.emailPlaceholder', 'Enter recipient email')}
                  />
                </div>

                <div>
                  <Label>{t('giftCard.fields.recipientName', 'Recipient Name')}</Label>
                  <Input
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    placeholder={t('giftCard.fields.namePlaceholder', 'Enter recipient name')}
                  />
                </div>

                <div>
                  <Label>{t('giftCard.fields.message', 'Personal Message')}</Label>
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t('giftCard.fields.messagePlaceholder', 'Add a personal message')}
                  />
                </div>

                <Button type="submit" className="w-full">
                  {t('giftCard.purchase', 'Purchase Gift Card')}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('giftCard.features', 'Features')}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>{t('giftCard.features.digital', 'Digital Delivery')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{t('giftCard.features.digitalDesc', 'Instant delivery via email')}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('giftCard.features.validity', 'Validity')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{t('giftCard.features.validityDesc', 'Valid for 1 year')}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('giftCard.features.redeem', 'Easy Redemption')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{t('giftCard.features.redeemDesc', 'Redeem online or in-store')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
