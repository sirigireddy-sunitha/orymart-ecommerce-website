
import { Link } from 'react-router-dom';
import { InternationalSelectors } from '@/components/InternationalSelectors';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-800 text-white">
      {/* Back to top button */}
      <div 
        className="bg-slate-700 py-4 text-center cursor-pointer hover:bg-slate-600 transition-colors"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="text-sm">{t('footer.backToTop', 'Back to top')}</span>
      </div>

      {/* Main footer content */}
      <div className="bg-slate-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Get to Know Us */}
            <div>
              <h3 className="text-white font-semibold mb-4">{t('footer.getToKnowUs', 'Get to Know Us')}</h3>
              <ul className="space-y-2">
                <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">{t('footer.careers', 'Careers')}</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">{t('footer.about', 'About Orymart')}</Link></li>
                <li><Link to="/help" className="text-gray-300 hover:text-white transition-colors">{t('footer.help', 'Help Center')}</Link></li>
                <li><Link to="/vendor-register" className="text-gray-300 hover:text-white transition-colors">{t('footer.investorInfo', 'Investor Info')}</Link></li>
              </ul>
            </div>

            {/* Sell with Orymart */}
            <div>
              <h3 className="text-white font-semibold mb-4">{t('footer.sellWith', 'Sell with Orymart')}</h3>
              <ul className="space-y-2">
                <li><Link to="/vendor-register" className="text-gray-300 hover:text-white transition-colors">{t('footer.sellOnOrymart', 'Sell on Orymart')}</Link></li>
                <li><Link to="/vendor-register" className="text-gray-300 hover:text-white transition-colors">{t('footer.becomeVendor', 'Become a Vendor')}</Link></li>
                <li><Link to="/vendor-register" className="text-gray-300 hover:text-white transition-colors">{t('footer.advertise', 'Advertise')}</Link></li>
                <li><Link to="/vendor-register" className="text-gray-300 hover:text-white transition-colors">{t('footer.affiliate', 'Affiliate Program')}</Link></li>
              </ul>
            </div>

            {/* Payment Options */}
            <div>
              <h3 className="text-white font-semibold mb-4">{t('footer.paymentOptions', 'Payment Options')}</h3>
              <ul className="space-y-2">
                <li><Link to="/payment" className="text-gray-300 hover:text-white transition-colors">{t('footer.businessCard', 'Orymart Business Card')}</Link></li>
                <li><Link to="/payment" className="text-gray-300 hover:text-white transition-colors">{t('footer.shopWithPoints', 'Shop with Points')}</Link></li>
                <li><Link to="/payment" className="text-gray-300 hover:text-white transition-colors">{t('footer.reloadBalance', 'Reload Balance')}</Link></li>
                <li><Link to="/payment" className="text-gray-300 hover:text-white transition-colors">{t('footer.currencyConverter', 'Currency Converter')}</Link></li>
              </ul>
            </div>

            {/* Let Us Help You */}
            <div>
              <h3 className="text-white font-semibold mb-4">{t('footer.letUsHelp', 'Let Us Help You')}</h3>
              <ul className="space-y-2">
                <li><Link to="/profile" className="text-gray-300 hover:text-white transition-colors">{t('footer.yourAccount', 'Your Account')}</Link></li>
                <li><Link to="/profile" className="text-gray-300 hover:text-white transition-colors">{t('footer.orders', 'Orders')}</Link></li>
                <li><Link to="/help" className="text-gray-300 hover:text-white transition-colors">{t('footer.returns', 'Returns')}</Link></li>
                <li><Link to="/help" className="text-gray-300 hover:text-white transition-colors">{t('footer.shipping', 'Shipping Info')}</Link></li>
                <li><Link to="/help" className="text-gray-300 hover:text-white transition-colors">{t('footer.contentManagement', 'Content Management')}</Link></li>
                <li><Link to="/help" className="text-gray-300 hover:text-white transition-colors">{t('footer.helpCenter', 'Help Center')}</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="bg-slate-900 py-8 border-t border-slate-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-white hover:text-gray-300 transition-colors">
              Orymart
            </Link>

            {/* International Selectors */}
            <InternationalSelectors />
          </div>

          {/* Secondary links */}
          <div className="mt-8 pt-6 border-t border-slate-700">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <Link to="/terms" className="hover:text-white transition-colors">{t('footer.termsOfUse', 'Terms of Use')}</Link>
              <Link to="/privacy" className="hover:text-white transition-colors">{t('footer.privacyPolicy', 'Privacy Policy')}</Link>
              <Link to="/help" className="hover:text-white transition-colors">{t('footer.customerData', 'Customer Data Disclosure')}</Link>
              <Link to="/privacy" className="hover:text-white transition-colors">{t('footer.adsPrivacy', 'Your Ads Privacy Choices')}</Link>
            </div>
            <div className="text-center mt-4 text-sm text-gray-400">
              {t('footer.copyright', '© 1996-2025, Orymart.com, Inc. or its affiliates')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
