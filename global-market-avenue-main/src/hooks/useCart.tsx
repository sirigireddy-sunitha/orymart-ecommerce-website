
import { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '@/types/product';

interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string, selectedSize?: string) => void;
  updateQuantity: (productId: string, quantity: number, selectedSize?: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const saveCart = (cartItems: CartItem[]) => {
    setItems(cartItems);
    localStorage.setItem('cart', JSON.stringify(cartItems));
  };

  const addToCart = (item: CartItem) => {
    const existingItem = items.find(
      i => i.id === item.id && i.selectedSize === item.selectedSize
    );
    if (existingItem) {
      updateQuantity(item.id, existingItem.quantity + item.quantity, item.selectedSize);
    } else {
      const newItems = [...items, item];
      saveCart(newItems);
    }
  };

  const removeFromCart = (productId: string, selectedSize?: string) => {
    const newItems = items.filter(item =>
      !(item.id === productId && (selectedSize ? item.selectedSize === selectedSize : true))
    );
    saveCart(newItems);
  };

  const updateQuantity = (productId: string, quantity: number, selectedSize?: string) => {
    if (quantity <= 0) {
      removeFromCart(productId, selectedSize);
      return;
    }
    const newItems = items.map(item =>
      item.id === productId && item.selectedSize === selectedSize
        ? { ...item, quantity }
        : item
    );
    saveCart(newItems);
  };

  const clearCart = () => {
    saveCart([]);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
