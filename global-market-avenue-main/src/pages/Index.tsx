
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, ShoppingCart, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import { useTranslation } from 'react-i18next';
import { useInternationalization } from '@/hooks/useInternationalization';
import { CategoriesGrid } from '@/components/CategoriesGrid';
import { toast } from 'sonner';

import { products } from '@/data/products';
// Use main products array with sizes
const featuredProducts = products.filter(p => p.featured);

const Index = () => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { t } = useTranslation();
  const { formatPrice } = useInternationalization();

  const handleAddToCart = (product: any) => {
    addToCart({ ...product, quantity: 1, selectedSize: undefined });
    toast.success('Added to cart!');
  };

  const handleWishlistToggle = (product: any) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast.success('Removed from wishlist');
    } else {
      addToWishlist(product);
      toast.success('Added to wishlist!');
    }
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Clean Hero Section */}
      <section className="w-full flex flex-col items-center justify-center px-4 pt-20 pb-16 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-center font-poppins text-gray-900 dark:text-white w-full mb-4">
          Welcome to OryMart!
        </h1>
        <p className="text-xl md:text-2xl text-center text-gray-600 dark:text-gray-200 mb-10 font-inter font-medium">
          Your one-stop shop for everything you love.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/shop"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-10 py-4 rounded-full shadow-lg transition-transform font-poppins text-lg text-center focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          >
            Shop Now
          </Link>
          <Link
            to="/sell"
            className="bg-white dark:bg-gray-900 border border-indigo-200 text-indigo-700 dark:text-indigo-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-bold px-10 py-4 rounded-full shadow transition font-poppins text-lg text-center focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          >
            Become a Vendor
          </Link>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="w-full flex justify-center gap-8 py-6 bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
        <div className="flex flex-col items-center">
          <Truck className="h-8 w-8 text-indigo-600 mb-1" />
          <span className="font-inter text-gray-700 dark:text-gray-200 text-sm">Free Shipping</span>
        </div>
        <div className="flex flex-col items-center">
          <Shield className="h-8 w-8 text-indigo-600 mb-1" />
          <span className="font-inter text-gray-700 dark:text-gray-200 text-sm">Secure Payment</span>
        </div>
        <div className="flex flex-col items-center">
          <RotateCcw className="h-8 w-8 text-indigo-600 mb-1" />
          <span className="font-inter text-gray-700 dark:text-gray-200 text-sm">Easy Returns</span>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-16 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold font-poppins mb-10 text-gray-900 dark:text-white">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredProducts.slice(0, 4).map(product => (
            <Card key={product.id} className="rounded-2xl shadow-lg bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex flex-col">
              <img src={product.image} alt={product.name} className="w-full h-56 object-cover rounded-t-2xl" />
              <CardContent className="flex-1 flex flex-col justify-between p-4">
                <div>
                  <h3 className="font-poppins text-lg font-semibold text-gray-900 dark:text-white mb-1">{product.name}</h3>
                  <div className="flex items-center mb-2">{renderStars(product.rating)}</div>
                  <div className="font-inter text-indigo-600 dark:text-indigo-400 font-bold text-xl mb-3">{formatPrice(product.price)}</div>
                </div>
                <div className="flex gap-2 mt-auto">
                  <Button onClick={() => handleAddToCart(product)} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-4 py-2 rounded-full shadow font-inter">Add to Cart</Button>
                  <Button variant="outline" onClick={() => handleWishlistToggle(product)} className={`rounded-full px-4 py-2 border font-inter ${isInWishlist(product.id) ? 'border-pink-500 text-pink-600' : 'border-gray-300 text-gray-600 dark:text-gray-300'}`}>{isInWishlist(product.id) ? <Heart fill="#ec4899" className="inline h-5 w-5 mr-1" /> : <Heart className="inline h-5 w-5 mr-1" />} Wishlist</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
