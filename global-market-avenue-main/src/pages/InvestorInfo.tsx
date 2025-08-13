import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

const InvestorInfo = () => {
  const { t } = useTranslation();
  const [interest, setInterest] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle investor inquiry
    console.log('Investor inquiry submitted:', {
      interest,
      amount,
      message
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('investor.title', 'Investor Information')}</h1>
          <p className="text-xl text-gray-600">{t('investor.subtitle', 'Invest in Orymart and grow with us')}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>{t('investor.opportunities.title', 'Investment Opportunities')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{t('investor.opportunities.desc', 'Explore our growth opportunities')}</p>
              <Button variant="outline">{t('investor.opportunities.learnMore', 'Learn More')}</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('investor.performance.title', 'Financial Performance')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{t('investor.performance.desc', 'View our financial reports')}</p>
              <Button variant="outline">{t('investor.performance.viewReports', 'View Reports')}</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('investor.news.title', 'News & Updates')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{t('investor.news.desc', 'Stay updated with our latest news')}</p>
              <Button variant="outline">{t('investor.news.viewNews', 'View News')}</Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('investor.inquire', 'Investor Inquiry Form')}</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label>{t('investor.fields.interest', 'Investment Interest')}</Label>
              <Select value={interest} onValueChange={setInterest}>
                <SelectTrigger>
                  <SelectValue placeholder={t('investor.fields.interestPlaceholder', 'Select your interest')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="growth">{t('investor.fields.growth', 'Growth Capital')}</SelectItem>
                  <SelectItem value="angel">{t('investor.fields.angel', 'Angel Investment')}</SelectItem>
                  <SelectItem value="vc">{t('investor.fields.vc', 'Venture Capital')}</SelectItem>
                  <SelectItem value="private">{t('investor.fields.private', 'Private Equity')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>{t('investor.fields.amount', 'Investment Amount')}</Label>
              <Select value={amount} onValueChange={setAmount}>
                <SelectTrigger>
                  <SelectValue placeholder={t('investor.fields.amountPlaceholder', 'Select amount range')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="100k">₹1,00,000 - ₹10,00,000</SelectItem>
                  <SelectItem value="1m">₹10,00,000 - ₹1,00,00,000</SelectItem>
                  <SelectItem value="10m">₹1,00,00,000 - ₹10,00,00,000</SelectItem>
                  <SelectItem value="100m">₹10,00,00,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>{t('investor.fields.message', 'Additional Information')}</Label>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t('investor.fields.messagePlaceholder', 'Add any additional information')}
              />
            </div>

            <Button type="submit" className="w-full">
              {t('investor.submit', 'Submit Inquiry')}
            </Button>
          </form>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('investor.reports', 'Financial Reports')}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>{t('investor.reports.q1', 'Q1 2025')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('investor.reports.q1Desc', 'First quarter financial report')}</p>
                <Button variant="outline">{t('investor.reports.download', 'Download Report')}</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('investor.reports.annual', '2024 Annual Report')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t('investor.reports.annualDesc', 'Full year financial report')}</p>
                <Button variant="outline">{t('investor.reports.download', 'Download Report')}</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorInfo;
