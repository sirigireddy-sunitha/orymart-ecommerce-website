
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  {
    id: 'electronics',
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300',
    productCount: 1200
  },
  {
    id: 'clothing',
    name: 'Fashion',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300',
    productCount: 850
  },
  {
    id: 'home',
    name: 'Home & Garden',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300',
    productCount: 650
  },
  {
    id: 'sports',
    name: 'Sports & Outdoors',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300',
    productCount: 420
  },
  {
    id: 'books',
    name: 'Books',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300',
    productCount: 980
  },
  {
    id: 'beauty',
    name: 'Beauty & Health',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300',
    productCount: 320
  }
];

export const CategoriesGrid = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('categories.title', 'Shop by Category')}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t('categories.subtitle', 'Discover products across our wide range of categories')}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <Link key={category.id} to={`/products?category=${category.id}`} className="group">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4">
                <div className="aspect-square overflow-hidden rounded-lg mb-3">
                  <img
                    src={category.image}
                    alt={t(`categories.${category.id}`, category.name)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-center text-sm text-gray-900 group-hover:text-blue-600 transition-colors">
                  {t(`categories.${category.id}`, category.name)}
                </h3>
                <p className="text-xs text-gray-500 text-center mt-1">
                  {category.productCount.toLocaleString()} {t('categories.items', 'items')}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};
