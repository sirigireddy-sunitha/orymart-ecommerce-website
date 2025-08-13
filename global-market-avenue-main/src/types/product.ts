
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  featured?: boolean;
  sizes?: string[]; // Optional, used for clothing items
}

export interface Category {
  id: string;
  name: string;
  image: string;
  productCount: number;
}
