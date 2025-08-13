import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

const Returns = () => {
  const { t } = useTranslation();
  const [orderNumber, setOrderNumber] = useState('');
  const [reason, setReason] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle return request
    console.log('Return request submitted:', {
      orderNumber,
      reason,
      description
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('returns.title', 'Returns')}</h1>
          <p className="text-xl text-gray-600">{t('returns.subtitle', 'Process your return request')}</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label>{t('returns.fields.orderNumber', 'Order Number')}</Label>
                  <Input
                    type="text"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    placeholder={t('returns.fields.orderNumberPlaceholder', 'Enter order number')}
                  />
                </div>

                <div>
                  <Label>{t('returns.fields.reason', 'Reason for Return')}</Label>
                  <Select value={reason} onValueChange={setReason}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('returns.fields.reasonPlaceholder', 'Select reason')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="damaged">{t('returns.reasons.damaged', 'Damaged Product')}</SelectItem>
                      <SelectItem value="wrong">{t('returns.reasons.wrong', 'Wrong Item')}</SelectItem>
                      <SelectItem value="changedMind">{t('returns.reasons.changedMind', 'Changed My Mind')}</SelectItem>
                      <SelectItem value="other">{t('returns.reasons.other', 'Other Reason')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>{t('returns.fields.description', 'Description')}</Label>
                  <Textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder={t('returns.fields.descriptionPlaceholder', 'Describe the issue')}
                  />
                </div>

                <Button type="submit" className="w-full">
                  {t('returns.submit', 'Submit Return Request')}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('returns.policy', 'Return Policy')}</h2>
            <div className="space-y-4">
              <p className="text-gray-600">{t('returns.policyDesc1', 'Returns are accepted within 30 days of delivery')}</p>
              <p className="text-gray-600">{t('returns.policyDesc2', 'Products must be in original condition')}</p>
              <p className="text-gray-600">{t('returns.policyDesc3', 'Shipping fees are non-refundable')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Returns;
