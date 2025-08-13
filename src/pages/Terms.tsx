
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';

const Terms = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Card>
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">{t('terms.title', 'Terms of Service')}</h1>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-6">
                {t('terms.lastUpdated', 'Last updated: December 2024')}
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">{t('terms.acceptance', 'Acceptance of Terms')}</h2>
              <p className="text-gray-600 mb-6">
                {t('terms.acceptanceText', 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.')}
              </p>

              <h2 className="text-2xl font-semibold mb-4">{t('terms.useOfSite', 'Use of the Site')}</h2>
              <p className="text-gray-600 mb-6">
                {t('terms.useOfSiteText', 'You may use our website for lawful purposes only. You agree not to use the site in any way that violates any applicable federal, state, local, or international law or regulation.')}
              </p>

              <h2 className="text-2xl font-semibold mb-4">{t('terms.privacy', 'Privacy Policy')}</h2>
              <p className="text-gray-600 mb-6">
                {t('terms.privacyText', 'Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Site.')}
              </p>

              <h2 className="text-2xl font-semibold mb-4">{t('terms.limitation', 'Limitation of Liability')}</h2>
              <p className="text-gray-600 mb-6">
                {t('terms.limitationText', 'In no event shall Orymart be liable for any indirect, incidental, special, consequential, or punitive damages.')}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Terms;
