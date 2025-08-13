
import { Link } from 'react-router-dom';
import { InternationalSelectors } from '@/components/InternationalSelectors';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-t from-indigo-700 via-blue-600 to-fuchsia-400 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 text-white shadow-2xl rounded-t-3xl mt-16 border-t border-slate-200/30 dark:border-gray-800/80 backdrop-blur-xl transition-colors duration-300">
      {/* Back to top button */}
      <div 
        className="bg-gradient-to-r from-blue-700 via-indigo-600 to-fuchsia-500 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 py-5 text-center cursor-pointer hover:bg-indigo-700/90 dark:hover:bg-gray-800 transition-colors rounded-t-2xl shadow-lg font-poppins text-base tracking-wide"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="text-base font-semibold">{t('footer.backToTop', 'Back to top')}</span>
      </div>

      {/* Main footer content */}
      <div className="bg-transparent py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Get to Know Us */}
            <div>
              <h3 className="text-white font-extrabold text-lg tracking-wider mb-6 uppercase drop-shadow-lg font-poppins">{t('footer.getToKnowUs', 'Get to Know Us')}</h3>
              <ul className="space-y-2">
                <li><Link to="/careers" onClick={scrollToTop} className="text-gray-300 hover:text-blue-300 dark:hover:text-yellow-300 transition-colors font-medium px-2 py-1 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/40 duration-200">{t('footer.careers', 'Careers')}</Link></li>
                <li><Link to="/about" onClick={scrollToTop} className="text-gray-300 hover:text-blue-300 dark:hover:text-yellow-300 transition-colors font-medium px-2 py-1 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/40 duration-200">{t('footer.about', 'About Orymart')}</Link></li>
                <li><Link to="/help" onClick={scrollToTop} className="text-gray-300 hover:text-blue-300 dark:hover:text-yellow-300 transition-colors font-medium px-2 py-1 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/40 duration-200">{t('footer.help', 'Help Center')}</Link></li>
                <li><Link to="/investor-info" onClick={scrollToTop} className="text-gray-300 hover:text-blue-300 dark:hover:text-yellow-300 transition-colors font-medium px-2 py-1 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/40 duration-200">{t('footer.investorInfo', 'Investor Info')}</Link></li>
              </ul>
            </div>

            {/* Sell with Orymart */}
            <div>
              <h3 className="text-white font-semibold mb-4 font-poppins">{t('footer.sellWith', 'Sell with Orymart')}</h3>
              <ul className="space-y-2">
                <li><Link to="/sell-on-orymart" onClick={scrollToTop} className="text-gray-300 hover:text-blue-300 dark:hover:text-yellow-300 transition-colors font-medium px-2 py-1 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/40 duration-200">{t('footer.sellOnOrymart', 'Sell on Orymart')}</Link></li>
                <li><Link to="/become-vendor" onClick={scrollToTop} className="text-gray-300 hover:text-blue-300 dark:hover:text-yellow-300 transition-colors font-medium px-2 py-1 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/40 duration-200">{t('footer.becomeVendor', 'Become a Vendor')}</Link></li>
                <li><Link to="/advertise" onClick={scrollToTop} className="text-gray-300 hover:text-blue-300 dark:hover:text-yellow-300 transition-colors font-medium px-2 py-1 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/40 duration-200">{t('footer.advertise', 'Advertise')}</Link></li>
                <li><Link to="/affiliate" onClick={scrollToTop} className="text-gray-300 hover:text-blue-300 dark:hover:text-yellow-300 transition-colors font-medium px-2 py-1 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/40 duration-200">{t('footer.affiliate', 'Affiliate Program')}</Link></li>
              </ul>
            </div>

            {/* Payment Options */}
            <div>
              <h3 className="text-white font-semibold mb-4 font-poppins">{t('footer.paymentOptions', 'Payment Options')}</h3>
              <ul className="space-y-2">
                <li><Link to="/business-card" onClick={scrollToTop} className="text-gray-300 hover:text-blue-300 dark:hover:text-yellow-300 transition-colors font-medium px-2 py-1 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/40 duration-200">{t('footer.businessCard', 'Orymart Business Card')}</Link></li>
                <li><Link to="/points" onClick={scrollToTop} className="text-gray-300 hover:text-blue-300 dark:hover:text-yellow-300 transition-colors font-medium px-2 py-1 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/40 duration-200">{t('footer.shopWithPoints', 'Shop with Points')}</Link></li>
                <li><Link to="/reload" onClick={scrollToTop} className="text-gray-300 hover:text-blue-300 dark:hover:text-yellow-300 transition-colors font-medium px-2 py-1 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/40 duration-200">{t('footer.reloadBalance', 'Reload Balance')}</Link></li>
                <li><Link to="/currency" onClick={scrollToTop} className="text-gray-300 hover:text-blue-300 dark:hover:text-yellow-300 transition-colors font-medium px-2 py-1 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/40 duration-200">{t('footer.currencyConverter', 'Currency Converter')}</Link></li>
              </ul>
            </div>

            {/* Let Us Help You */}
            <div>
              <h3 className="text-white font-semibold mb-4 font-poppins">{t('footer.letUsHelp', 'Let Us Help You')}</h3>
              <ul className="space-y-2">
                <li><Link to="/profile" onClick={scrollToTop} className="text-gray-300 hover:text-blue-300 dark:hover:text-yellow-300 transition-colors font-medium px-2 py-1 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/40 duration-200">{t('footer.yourAccount', 'Your Account')}</Link></li>
                <li><Link to="/orders" onClick={scrollToTop} className="text-gray-300 hover:text-blue-300 dark:hover:text-yellow-300 transition-colors font-medium px-2 py-1 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/40 duration-200">{t('footer.orders', 'Orders')}</Link></li>
                <li><Link to="/returns" onClick={scrollToTop} className="text-gray-300 hover:text-blue-300 dark:hover:text-yellow-300 transition-colors font-medium px-2 py-1 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/40 duration-200">{t('footer.returns', 'Returns')}</Link></li>
                <li><Link to="/shipping" onClick={scrollToTop} className="text-gray-300 hover:text-blue-300 dark:hover:text-yellow-300 transition-colors font-medium px-2 py-1 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/40 duration-200">{t('footer.shipping', 'Shipping Info')}</Link></li>
                <li><Link to="/content-management" onClick={scrollToTop} className="text-gray-300 hover:text-blue-300 dark:hover:text-yellow-300 transition-colors font-medium px-2 py-1 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/40 duration-200">{t('footer.contentManagement', 'Content Management')}</Link></li>
                <li><Link to="/help-center" onClick={scrollToTop} className="text-gray-300 hover:text-blue-300 dark:hover:text-yellow-300 transition-colors font-medium px-2 py-1 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/40 duration-200">{t('footer.helpCenter', 'Help Center')}</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="bg-gradient-to-t from-slate-900 via-slate-800 to-indigo-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 py-10 border-t border-slate-700/60 rounded-b-3xl shadow-inner">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" onClick={scrollToTop} className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">
              Orymart
            </Link>

            {/* International Selectors */}
            <InternationalSelectors />
          </div>

          {/* Secondary links */}
          <div className="mt-8 pt-6 border-t border-slate-700/60">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <Link to="/terms" onClick={scrollToTop} className="hover:text-blue-300 dark:hover:text-yellow-300 transition-colors font-medium px-2 py-1 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/40 duration-200">{t('footer.termsOfUse', 'Terms of Use')}</Link>
              <Link to="/privacy" onClick={scrollToTop} className="hover:text-blue-300 dark:hover:text-yellow-300 transition-colors font-medium px-2 py-1 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/40 duration-200">{t('footer.privacyPolicy', 'Privacy Policy')}</Link>
              <Link to="/help" onClick={scrollToTop} className="hover:text-blue-300 dark:hover:text-yellow-300 transition-colors font-medium px-2 py-1 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/40 duration-200">{t('footer.customerData', 'Customer Data Disclosure')}</Link>
              <Link to="/privacy" onClick={scrollToTop} className="hover:text-blue-300 dark:hover:text-yellow-300 transition-colors font-medium px-2 py-1 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/40 duration-200">{t('footer.adsPrivacy', 'Your Ads Privacy Choices')}</Link>
            </div>
            <div className="text-center mt-4 text-sm text-gray-400">
              {t('footer.copyright', ' 1996-2025, Orymart.com, Inc. or its affiliates')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
