
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    welcome: 'Welcome to Ory Mart',
    featuredProducts: 'Featured Products',
    categories: 'Categories',
    addToCart: 'Add to Cart',
    addToWishlist: 'Add to Wishlist',
    removeFromWishlist: 'Remove from Wishlist',
    wishlist: 'Wishlist',
    price: 'Price',
    login: 'Login',
    register: 'Register',
    cart: 'Cart',
    profile: 'Profile',
    orders: 'Order History',
    sortBy: 'Sort by',
    lowToHigh: 'Price: Low to High',
    highToLow: 'Price: High to Low',
    newest: 'Newest',
    popular: 'Most Popular',
  },
  es: {
    welcome: 'Bienvenido a Ory Mart',
    featuredProducts: 'Productos Destacados',
    categories: 'Categorías',
    addToCart: 'Añadir al Carrito',
    addToWishlist: 'Añadir a la Lista de Deseos',
    removeFromWishlist: 'Quitar de la Lista de Deseos',
    wishlist: 'Lista de Deseos',
    price: 'Precio',
    login: 'Iniciar Sesión',
    register: 'Registrarse',
    cart: 'Carrito',
    profile: 'Perfil',
    orders: 'Historial de Pedidos',
    sortBy: 'Ordenar por',
    lowToHigh: 'Precio: Menor a Mayor',
    highToLow: 'Precio: Mayor a Menor',
    newest: 'Más Reciente',
    popular: 'Más Popular',
  },
  fr: {
    welcome: 'Bienvenue à Ory Mart',
    featuredProducts: 'Produits en Vedette',
    categories: 'Catégories',
    addToCart: 'Ajouter au Panier',
    addToWishlist: 'Ajouter à la Liste de Souhaits',
    removeFromWishlist: 'Retirer de la Liste de Souhaits',
    wishlist: 'Liste de Souhaits',
    price: 'Prix',
    login: 'Connexion',
    register: "S'inscrire",
    cart: 'Panier',
    profile: 'Profil',
    orders: 'Historique des Commandes',
    sortBy: 'Trier par',
    lowToHigh: 'Prix: Croissant',
    highToLow: 'Prix: Décroissant',
    newest: 'Plus Récent',
    popular: 'Plus Populaire',
  },
  de: {
    welcome: 'Willkommen bei Ory Mart',
    featuredProducts: 'Empfohlene Produkte',
    categories: 'Kategorien',
    addToCart: 'In den Warenkorb',
    addToWishlist: 'Zur Wunschliste hinzufügen',
    removeFromWishlist: 'Von der Wunschliste entfernen',
    wishlist: 'Wunschliste',
    price: 'Preis',
    login: 'Anmelden',
    register: 'Registrieren',
    cart: 'Warenkorb',
    profile: 'Profil',
    orders: 'Bestellhistorie',
    sortBy: 'Sortieren nach',
    lowToHigh: 'Preis: Niedrig zu Hoch',
    highToLow: 'Preis: Hoch zu Niedrig',
    newest: 'Neueste',
    popular: 'Beliebteste',
  },
  it: {
    welcome: 'Benvenuto a Ory Mart',
    featuredProducts: 'Prodotti in Evidenza',
    categories: 'Categorie',
    addToCart: 'Aggiungi al Carrello',
    addToWishlist: 'Aggiungi alla Lista dei Desideri',
    removeFromWishlist: 'Rimuovi dalla Lista dei Desideri',
    wishlist: 'Lista dei Desideri',
    price: 'Prezzo',
    login: 'Accedi',
    register: 'Registrati',
    cart: 'Carrello',
    profile: 'Profilo',
    orders: 'Cronologia Ordini',
    sortBy: 'Ordina per',
    lowToHigh: 'Prezzo: Basso ad Alto',
    highToLow: 'Prezzo: Alto a Basso',
    newest: 'Più Recente',
    popular: 'Più Popolare',
  },
  pt: {
    welcome: 'Bem-vindo ao Ory Mart',
    featuredProducts: 'Produtos em Destaque',
    categories: 'Categorias',
    addToCart: 'Adicionar ao Carrinho',
    addToWishlist: 'Adicionar à Lista de Desejos',
    removeFromWishlist: 'Remover da Lista de Desejos',
    wishlist: 'Lista de Desejos',
    price: 'Preço',
    login: 'Entrar',
    register: 'Registrar',
    cart: 'Carrinho',
    profile: 'Perfil',
    orders: 'Histórico de Pedidos',
    sortBy: 'Ordenar por',
    lowToHigh: 'Preço: Menor para Maior',
    highToLow: 'Preço: Maior para Menor',
    newest: 'Mais Recente',
    popular: 'Mais Popular',
  },
  hi: {
    welcome: 'Welcome to Ory Mart',
    featuredProducts: 'Featured Products',
    categories: 'Categories',
    addToCart: 'Add to Cart',
    addToWishlist: 'Add to Wishlist',
    removeFromWishlist: 'Remove from Wishlist',
    wishlist: 'Wishlist',
    price: 'Price',
    login: 'Login',
    register: 'Register',
    cart: 'Cart',
    profile: 'Profile',
    orders: 'Order History',
    sortBy: 'Sort by',
    lowToHigh: 'Price: Low to High',
    highToLow: 'Price: High to Low',
    newest: 'Newest',
    popular: 'Most Popular',
  },
  ja: {
    welcome: 'オリーマートへようこそ',
    featuredProducts: '注目商品',
    categories: 'カテゴリー',
    addToCart: 'カートに追加',
    addToWishlist: 'ウィッシュリストに追加',
    removeFromWishlist: 'ウィッシュリストから削除',
    wishlist: 'ウィッシュリスト',
    price: '価格',
    login: 'ログイン',
    register: '登録',
    cart: 'カート',
    profile: 'プロフィール',
    orders: '注文履歴',
    sortBy: '並び替え',
    lowToHigh: '価格: 安い順',
    highToLow: '価格: 高い順',
    newest: '新着',
    popular: '人気',
  },
  ko: {
    welcome: '오리 마트에 오신 것을 환영합니다',
    featuredProducts: '추천 상품',
    categories: '카테고리',
    addToCart: '장바구니에 추가',
    addToWishlist: '위시리스트에 추가',
    removeFromWishlist: '위시리스트에서 제거',
    wishlist: '위시리스트',
    price: '가격',
    login: '로그인',
    register: '회원가입',
    cart: '장바구니',
    profile: '프로필',
    orders: '주문 내역',
    sortBy: '정렬',
    lowToHigh: '가격: 낮은 순',
    highToLow: '가격: 높은 순',
    newest: '최신순',
    popular: '인기순',
  },
};

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  translations: { [key: string]: string };
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'en';
  });

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && savedLanguage !== currentLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const currentTranslations = translations[currentLanguage] || translations.en;

  const t = (key: string) => currentTranslations[key] || key;

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      setLanguage,
      translations: currentTranslations,
      t
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
