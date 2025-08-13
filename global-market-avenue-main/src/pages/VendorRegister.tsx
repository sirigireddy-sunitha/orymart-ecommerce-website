
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInternationalization } from '@/hooks/useInternationalization';
import VendorHeader from '@/components/vendor/VendorHeader';
import VendorBenefits from '@/components/vendor/VendorBenefits';
import BusinessInfoSection from '@/components/vendor/BusinessInfoSection';
import ContactInfoSection from '@/components/vendor/ContactInfoSection';
import AddressSection from '@/components/vendor/AddressSection';
import SellingInfoSection from '@/components/vendor/SellingInfoSection';
import TermsSection from '@/components/vendor/TermsSection';
import VendorSupport from '@/components/vendor/VendorSupport';

const VendorRegister = () => {
  const { t } = useTranslation();
  const { currentCountry, countries } = useInternationalization();
  const [formData, setFormData] = useState({
    // Business Information
    businessName: '',
    businessType: '',
    taxId: '',
    businessDescription: '',
    website: '',
    
    // Contact Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Address Information
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: currentCountry.code,
    
    // Selling Information
    productCategories: '',
    expectedMonthlyRevenue: '',
    businessExperience: '',
    
    // Legal & Compliance
    agreeToTerms: false,
    agreeToSelling: false,
    confirmTaxCompliance: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Vendor registration data:', formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <VendorHeader />
      <VendorBenefits />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('vendor.createAccount')}</h2>
          <p className="text-gray-600">{t('vendor.formDescription')}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <BusinessInfoSection 
            formData={formData}
            handleInputChange={handleInputChange}
          />

          <ContactInfoSection 
            formData={formData}
            handleInputChange={handleInputChange}
          />

          <AddressSection 
            formData={formData}
            countries={countries}
            handleInputChange={handleInputChange}
          />

          <SellingInfoSection 
            formData={formData}
            handleInputChange={handleInputChange}
          />

          <TermsSection 
            formData={formData}
            handleInputChange={handleInputChange}
            onSubmit={handleSubmit}
          />
        </form>

        <VendorSupport />
      </div>
    </div>
  );
};

export default VendorRegister;
