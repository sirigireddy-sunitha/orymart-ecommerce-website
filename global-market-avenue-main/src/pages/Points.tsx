import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

const Points = () => {
  const { t } = useTranslation();
  const [points, setPoints] = useState('');
  const [redeemAmount, setRedeemAmount] = useState('');

  const handlePointsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPoints(e.target.value);
  };

  const handleRedeemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRedeemAmount(e.target.value);
  };

  const handleRedeem = () => {
    // Handle points redemption
    console.log('Redeeming points:', points, 'for amount:', redeemAmount);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('points.title', 'Shop with Points')}</h1>
          <p className="text-xl text-gray-600">{t('points.subtitle', 'Convert your points into rewards')}</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <Label>{t('points.fields.pointsAvailable', 'Points Available')}</Label>
                  <Input
                    type="number"
                    value={points}
                    onChange={handlePointsChange}
                    placeholder={t('points.fields.pointsPlaceholder', 'Enter points to redeem')}
                  />
                </div>

                <div>
                  <Label>{t('points.fields.redeemAmount', 'Redeem Amount')}</Label>
                  <Input
                    type="number"
                    value={redeemAmount}
                    onChange={handleRedeemChange}
                    placeholder={t('points.fields.amountPlaceholder', 'Enter redeem amount')}
                  />
                </div>

                <Button onClick={handleRedeem} className="w-full">
                  {t('points.redeem', 'Redeem Points')}
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('points.howItWorks', 'How It Works')}</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-gray-600">{t('points.steps.earn', 'Earn points on purchases')}</li>
              <li className="text-gray-600">{t('points.steps.accumulate', 'Accumulate points')}</li>
              <li className="text-gray-600">{t('points.steps.redeem', 'Redeem for rewards')}</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('points.rewards', 'Available Rewards')}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>{t('points.rewards.cashback', 'Cashback')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{t('points.rewards.cashbackDesc', 'Convert points to cashback')}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('points.rewards.products', 'Products')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{t('points.rewards.productsDesc', 'Redeem for products')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Points;
