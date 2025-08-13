
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Careers = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('careers.title', 'Join Our Team')}</h1>
          <p className="text-xl text-gray-600">{t('careers.subtitle', 'Build the future of e-commerce with us')}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>{t('careers.engineering', 'Engineering')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{t('careers.engineeringDesc', 'Build scalable systems that serve millions of users worldwide.')}</p>
              <Button variant="outline">{t('careers.viewJobs', 'View Jobs')}</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('careers.design', 'Design')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{t('careers.designDesc', 'Create beautiful and intuitive user experiences.')}</p>
              <Button variant="outline">{t('careers.viewJobs', 'View Jobs')}</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('careers.marketing', 'Marketing')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{t('careers.marketingDesc', 'Help grow our brand and reach new customers.')}</p>
              <Button variant="outline">{t('careers.viewJobs', 'View Jobs')}</Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">{t('careers.benefits', 'Why Work With Us?')}</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <h3 className="font-semibold mb-2">{t('careers.competitive', 'Competitive Salary')}</h3>
                <p className="text-gray-600">{t('careers.competitiveDesc', 'Industry-leading compensation packages')}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t('careers.flexible', 'Flexible Work')}</h3>
                <p className="text-gray-600">{t('careers.flexibleDesc', 'Remote and hybrid work options')}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t('careers.growth', 'Career Growth')}</h3>
                <p className="text-gray-600">{t('careers.growthDesc', 'Continuous learning and development opportunities')}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Careers;
