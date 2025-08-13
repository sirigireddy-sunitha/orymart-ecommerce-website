
import { Store } from 'lucide-react';

const VendorHeader = () => {
  return (
    <div className="bg-white border-b">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-4">
          <Store className="h-8 w-8 text-orange-500" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Sell on OryMart</h1>
            <p className="text-gray-600">Reach millions of customers worldwide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorHeader;
