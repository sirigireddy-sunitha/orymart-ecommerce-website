
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InternationalizationProvider } from "@/hooks/useInternationalization";
import { LanguageProvider } from "@/hooks/useLanguage";
import { AuthProvider } from "@/hooks/useAuth";
import { CartProvider } from "@/hooks/useCart";
import { WishlistProvider } from "@/hooks/useWishlist";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import Settings from "./pages/Settings";
import Wishlist from "./pages/Wishlist";
import VendorRegister from "./pages/VendorRegister";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Help from "./pages/Help";
import Careers from "./pages/Careers";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import SellOnOrymart from "./pages/SellOnOrymart";
import BecomeVendor from "./pages/BecomeVendor";
import Advertise from "./pages/Advertise";
import Affiliate from "./pages/Affiliate";
import BusinessCard from "./pages/BusinessCard";
import Points from "./pages/Points";
import GiftCard from "./pages/GiftCard";
import ReloadBalance from "./pages/ReloadBalance";
import CurrencyConverter from "./pages/CurrencyConverter";
import Orders from "./pages/Orders";
import Returns from "./pages/Returns";
import Shipping from "./pages/Shipping";
import ContentManagement from "./pages/ContentManagement";
import HelpCenter from "./pages/HelpCenter";
import InvestorInfo from "./pages/InvestorInfo";

// Import i18n configuration
import './i18n';

const queryClient = new QueryClient();

import { ThemeProvider } from '@/components/ThemeProvider';

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <InternationalizationProvider>
          <AuthProvider>
            <CartProvider>
              <WishlistProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter>
                  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 w-full flex flex-col">
                    <Header />
                    <main className="flex-1">
                      <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/shop" element={<Products />} />
                        <Route path="/sell" element={<VendorRegister />} />
                        <Route path="/categories" element={<Categories />} />
                        <Route path="/product/:id" element={<ProductDetail />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/payment" element={<Payment />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/vendor-register" element={<VendorRegister />} />
                        <Route path="/forgot-password" element={<ForgotPassword />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/wishlist" element={<Wishlist />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/help" element={<Help />} />
                        <Route path="/careers" element={<Careers />} />
                        <Route path="/terms" element={<Terms />} />
                        <Route path="/privacy" element={<Privacy />} />
                        <Route path="/sell-on-orymart" element={<SellOnOrymart />} />
                        <Route path="/become-vendor" element={<BecomeVendor />} />
                        <Route path="/advertise" element={<Advertise />} />
                        <Route path="/affiliate" element={<Affiliate />} />
                        <Route path="/business-card" element={<BusinessCard />} />
                        <Route path="/points" element={<Points />} />
                        <Route path="/gift-card" element={<GiftCard />} />
                        <Route path="/reload" element={<ReloadBalance />} />
                        <Route path="/currency" element={<CurrencyConverter />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/returns" element={<Returns />} />
                        <Route path="/shipping" element={<Shipping />} />
                        <Route path="/content-management" element={<ContentManagement />} />
                        <Route path="/help-center" element={<HelpCenter />} />
                        <Route path="/investor-info" element={<InvestorInfo />} />
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </main>
                    <Footer />
                  </div>
                </BrowserRouter>
              </WishlistProvider>
            </CartProvider>
          </AuthProvider>
        </InternationalizationProvider>
      </LanguageProvider>
    </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
