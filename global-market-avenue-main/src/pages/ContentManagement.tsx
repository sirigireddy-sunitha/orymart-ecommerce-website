import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

const ContentManagement = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{t('content.title', 'Content Management')}</h1>
            <p className="text-gray-600 mb-6">{t('content.loginRequired', 'Please login to access content management')}</p>
            <Button>{t('content.login', 'Login')}</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('content.title', 'Content Management')}</h1>
          <p className="text-xl text-gray-600">{t('content.subtitle', 'Manage your content and media')}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>{t('content.sections.products', 'Products')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{t('content.sections.productsDesc', 'Manage product listings')}</p>
              <Button variant="outline">{t('content.sections.productsButton', 'Manage Products')}</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('content.sections.categories', 'Categories')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{t('content.sections.categoriesDesc', 'Manage product categories')}</p>
              <Button variant="outline">{t('content.sections.categoriesButton', 'Manage Categories')}</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('content.sections.media', 'Media')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{t('content.sections.mediaDesc', 'Manage images and videos')}</p>
              <Button variant="outline">{t('content.sections.mediaButton', 'Manage Media')}</Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('content.features', 'Features')}</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>{t('content.features.dragDrop', 'Drag and drop file upload')}</li>
            <li>{t('content.features.versionControl', 'Version control')}</li>
            <li>{t('content.features.mediaOptimization', 'Automatic media optimization')}</li>
            <li>{t('content.features.contentPreview', 'Content preview')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContentManagement;
