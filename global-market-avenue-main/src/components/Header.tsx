
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import { useAuth } from '@/hooks/useAuth';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from './LanguageSelector';

import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { items } = useCart();
  const { items: wishlistItems } = useWishlist();
  const { user, logout } = useAuth();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);
  const wishlistItemCount = wishlistItems.length;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setShowSuggestions(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.trim()) {
      const filtered = products.filter(
        p => p.name.toLowerCase().includes(value.toLowerCase()) ||
             p.description.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 5);
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (id: string) => {
    navigate(`/product/${id}`);
    setShowSuggestions(false);
    setSearchQuery('');
  };

  return (
    <header className="bg-white/90 dark:bg-gray-900/95 shadow-2xl rounded-b-3xl sticky top-0 z-50 transition-colors border-b border-slate-200/70 dark:border-gray-800/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-4xl font-extrabold font-poppins bg-gradient-to-r from-blue-700 via-indigo-600 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg tracking-tight hover:scale-105 transition-transform duration-200">
            Orymart
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                onFocus={() => { if (suggestions.length > 0) setShowSuggestions(true); }}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                placeholder={t('products.searchPlaceholder', 'Search products...')}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
              />
              {showSuggestions && suggestions.length > 0 && (
                <ul className="absolute left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 max-h-72 overflow-y-auto">
                  {suggestions.map(product => (
                    <li
                      key={product.id}
                      className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                      onMouseDown={() => handleSuggestionClick(product.id)}
                    >
                      <img src={product.image} alt={product.name} className="w-10 h-10 object-cover rounded" />
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-900 dark:text-white">{product.name}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-300">${product.price.toFixed(2)}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </form>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            
            <Link to="/wishlist" className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Heart className="h-6 w-6 text-gray-700 dark:text-gray-200" />
              {wishlistItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistItemCount}
                </span>
              )}
            </Link>
            
            <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ShoppingCart className="h-6 w-6 text-gray-700 dark:text-gray-200" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            <div className="flex items-center gap-4">
              {user ? (
                <div className="flex items-center space-x-2">
                  <Link to="/profile" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <User className="h-6 w-6 text-gray-700 dark:text-gray-200" />
                  </Link>
                  <Button onClick={logout} variant="outline" size="sm">
                    {t('auth.logout', 'Logout')}
                  </Button>
                </div>
              ) : (
                <div className="flex space-x-2">
                  <Button asChild variant="outline" size="sm">
                    <Link to="/login">{t('auth.login', 'Login')}</Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link to="/register">{t('auth.register', 'Register')}</Link>
                  </Button>
                </div>
              )}
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-gray-700 dark:text-gray-200" /> : <Menu className="h-6 w-6 text-gray-700 dark:text-gray-200" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleInputChange}
                  onFocus={() => { if (suggestions.length > 0) setShowSuggestions(true); }}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                  placeholder={t('products.searchPlaceholder', 'Search products...')}
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                />
                {showSuggestions && suggestions.length > 0 && (
                  <ul className="absolute left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 max-h-72 overflow-y-auto">
                    {suggestions.map(product => (
                      <li
                        key={product.id}
                        className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                        onMouseDown={() => handleSuggestionClick(product.id)}
                      >
                        <img src={product.image} alt={product.name} className="w-10 h-10 object-cover rounded" />
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-900 dark:text-white">{product.name}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-300">${product.price.toFixed(2)}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </form>
            
            <div className="space-y-2">
              <div className="mb-4">
                <LanguageSelector />
              </div>
              
              <Link 
                to="/wishlist" 
                className="flex items-center justify-between p-3 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center">
                  <Heart className="h-5 w-5 mr-3" />
                  {t('wishlist', 'Wishlist')}
                </span>
                {wishlistItemCount > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlistItemCount}
                  </span>
                )}
              </Link>
              
              <Link 
                to="/cart" 
                className="flex items-center justify-between p-3 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center">
                  <ShoppingCart className="h-5 w-5 mr-3" />
                  {t('cart', 'Cart')}
                </span>
                {cartItemCount > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Link>

              {user ? (
                <>
                  <Link 
                    to="/profile" 
                    className="flex items-center p-3 hover:bg-gray-100 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="h-5 w-5 mr-3" />
                    {t('profile', 'Profile')}
                  </Link>
                  <button 
                    onClick={() => { logout(); setIsMenuOpen(false); }}
                    className="w-full text-left p-3 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {t('auth.logout', 'Logout')}
                  </button>
                </>
              ) : (
                <div className="space-y-2">
                  <Link 
                    to="/login" 
                    className="block p-3 hover:bg-gray-100 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('auth.login', 'Login')}
                  </Link>
                  <Link 
                    to="/register" 
                    className="block p-3 hover:bg-gray-100 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('auth.register', 'Register')}
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
