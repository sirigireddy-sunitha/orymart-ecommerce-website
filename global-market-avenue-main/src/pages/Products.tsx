
import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { products, categories } from '@/data/products';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/hooks/useAuth';
import { Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(() => {
    return searchParams.get('category') || 'all';
  });
  const [sortBy, setSortBy] = useState('newest');

  // Update URL when category changes
  useEffect(() => {
    if (selectedCategory === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', selectedCategory);
    }
    setSearchParams(searchParams);
  }, [selectedCategory, searchParams, setSearchParams]);

  // Update selected category when URL changes
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl && categoryFromUrl !== selectedCategory) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [searchParams]);

  // Require authentication to view products
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card>
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('auth.loginRequired', 'Login Required')}</h2>
            <p className="text-gray-600 mb-6">{t('auth.loginToProducts', 'Please log in to browse our products')}</p>
            <div className="flex gap-4 justify-center">
              <Button asChild>
                <Link to="/login">{t('auth.login', 'Login')}</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/register">{t('auth.register', 'Register')}</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Sort products
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'lowToHigh':
          return a.price - b.price;
        case 'highToLow':
          return b.price - a.price;
        case 'popular':
          return b.reviews - a.reviews;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
        default:
          return 0;
      }
    });

    return sorted;
  }, [searchQuery, selectedCategory, sortBy]);

  const getCurrentCategoryName = () => {
    if (selectedCategory === 'all') return t('categories.allCategories', 'All Categories');
    const category = categories.find(c => c.id === selectedCategory);
    return category ? t(`categories.${category.id}`, category.name) : '';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {selectedCategory === 'all' 
              ? t('products.allProducts', 'All Products')
              : getCurrentCategoryName()
            }
          </h1>
          <p className="text-gray-600">
            {t('products.showingResults', 'Showing {{count}} products', { count: filteredAndSortedProducts.length })}
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder={t('products.searchPlaceholder', 'Search products...')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder={t('products.category', 'Category')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('categories.allCategories', 'All Categories')}</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {t(`categories.${category.id}`, category.name)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder={t('sortBy')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">{t('newest')}</SelectItem>
                <SelectItem value="popular">{t('popular')}</SelectItem>
                <SelectItem value="lowToHigh">{t('lowToHigh')}</SelectItem>
                <SelectItem value="highToLow">{t('highToLow')}</SelectItem>
                <SelectItem value="rating">{t('products.highestRated', 'Highest Rated')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('products.noProducts', 'No products found')}</h3>
            <p className="text-gray-600 mb-4">{t('products.adjustFilters', 'Try adjusting your search or filter criteria')}</p>
            <Button onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSortBy('newest');
            }}>
              {t('products.clearFilters', 'Clear Filters')}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
