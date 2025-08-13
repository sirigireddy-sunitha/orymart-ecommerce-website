
import { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '@/types/product';

interface WishlistContextType {
  items: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Product[]>(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const saveWishlist = (wishlistItems: Product[]) => {
    setItems(wishlistItems);
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
  };

  const addToWishlist = (product: Product) => {
    if (!isInWishlist(product.id)) {
      const newItems = [...items, product];
      saveWishlist(newItems);
    }
  };

  const removeFromWishlist = (productId: string) => {
    const newItems = items.filter(item => item.id !== productId);
    saveWishlist(newItems);
  };

  const isInWishlist = (productId: string) => {
    return items.some(item => item.id === productId);
  };

  const clearWishlist = () => {
    saveWishlist([]);
  };

  return (
    <WishlistContext.Provider value={{
      items,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
      clearWishlist
    }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
