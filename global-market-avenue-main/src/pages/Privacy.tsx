
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Card>
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">{t('privacy.title', 'Privacy Policy')}</h1>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-6">
                {t('privacy.lastUpdated', 'Last updated: December 2024')}
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">{t('privacy.collection', 'Information We Collect')}</h2>
              <p className="text-gray-600 mb-6">
                {t('privacy.collectionText', 'We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.')}
              </p>

              <h2 className="text-2xl font-semibold mb-4">{t('privacy.usage', 'How We Use Your Information')}</h2>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>{t('privacy.usage1', 'To provide and maintain our services')}</li>
                <li>{t('privacy.usage2', 'To process transactions and send related information')}</li>
                <li>{t('privacy.usage3', 'To send you technical notices and support messages')}</li>
                <li>{t('privacy.usage4', 'To communicate with you about products, services, and events')}</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">{t('privacy.sharing', 'Information Sharing')}</h2>
              <p className="text-gray-600 mb-6">
                {t('privacy.sharingText', 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.')}
              </p>

              <h2 className="text-2xl font-semibold mb-4">{t('privacy.security', 'Data Security')}</h2>
              <p className="text-gray-600 mb-6">
                {t('privacy.securityText', 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.')}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;
