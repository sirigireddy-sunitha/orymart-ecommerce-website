
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Card>
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">{t('about.title', 'About Orymart')}</h1>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-6">
                {t('about.description', 'Orymart is a leading global marketplace connecting millions of buyers and sellers worldwide. We provide a platform for businesses of all sizes to reach customers globally.')}
              </p>
              <h2 className="text-2xl font-semibold mb-4">{t('about.mission', 'Our Mission')}</h2>
              <p className="text-gray-600 mb-6">
                {t('about.missionText', 'To empower businesses and individuals to thrive in the digital economy by providing world-class e-commerce solutions.')}
              </p>
              <h2 className="text-2xl font-semibold mb-4">{t('about.values', 'Our Values')}</h2>
              <ul className="list-disc pl-6 text-gray-600">
                <li>{t('about.value1', 'Customer satisfaction is our top priority')}</li>
                <li>{t('about.value2', 'Innovation drives our technology')}</li>
                <li>{t('about.value3', 'Trust and security in every transaction')}</li>
                <li>{t('about.value4', 'Global reach with local understanding')}</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
