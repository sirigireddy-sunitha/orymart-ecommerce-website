
import { Package, CreditCard, ShieldCheck } from 'lucide-react';

const VendorBenefits = () => {
  return (
    <div className="bg-blue-50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <Package className="h-12 w-12 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-2">Millions of Customers</h3>
            <p className="text-gray-600">Access our vast customer base</p>
          </div>
          <div className="text-center">
            <CreditCard className="h-12 w-12 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-2">Secure Payments</h3>
            <p className="text-gray-600">Get paid safely and on time</p>
          </div>
          <div className="text-center">
            <ShieldCheck className="h-12 w-12 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-2">Seller Protection</h3>
            <p className="text-gray-600">We protect your business</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorBenefits;
