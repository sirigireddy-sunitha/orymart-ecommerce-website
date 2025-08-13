
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/types/product';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import { useInternationalization } from '@/hooks/useInternationalization';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { t } = useTranslation();
  const { formatPrice } = useInternationalization();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ ...product, quantity: 1 });
    toast.success('Added to cart!');
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast.success('Removed from wishlist');
    } else {
      addToWishlist(product);
      toast.success('Added to wishlist!');
    }
  };

  const inWishlist = isInWishlist(product.id);

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="product-card group cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/95 border-0 rounded-2xl overflow-hidden">
        <CardContent className="p-0">
          <div className="relative overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500 rounded-t-2xl shadow-sm"
              style={{ background: '#f3f4f6' }}
            />
            {product.featured && (
              <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-3 py-1 text-xs rounded-full shadow font-bold tracking-wide uppercase">
                Featured
              </div>
            )}
            <Button
              variant="outline"
              size="sm"
              className={`absolute top-3 right-3 !rounded-full !p-2 shadow-lg ${inWishlist ? 'text-red-600 bg-red-50' : 'text-gray-600 bg-white/90'} hover:text-red-700 hover:bg-red-50`}
              onClick={handleWishlistToggle}
            >
              <Heart className={`h-5 w-5 ${inWishlist ? 'fill-current' : ''}`} />
            </Button>
            {!product.inStock && (
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center rounded-t-2xl">
                <span className="text-white font-semibold text-lg">Out of Stock</span>
              </div>
            )}
          </div>
          <div className="p-5 flex flex-col gap-2">
            <h3 className="font-poppins font-semibold text-xl mb-1 line-clamp-2 group-hover:text-blue-700 transition-colors">
              {product.name}
            </h3>
            
            <div className="flex items-center mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 ml-2">
                ({product.reviews})
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-blue-600">
                {formatPrice(product.price)}
              </span>
              
              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                size="sm"
                className="gap-2"
              >
                <ShoppingCart className="h-4 w-4" />
                {t('addToCart')}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
