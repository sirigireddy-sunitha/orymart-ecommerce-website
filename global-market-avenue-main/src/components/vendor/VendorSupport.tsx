
const VendorSupport = () => {
  return (
    <div className="mt-8 bg-blue-50 rounded-lg p-6 text-center">
      <h3 className="font-semibold text-lg mb-2">Need Help Getting Started?</h3>
      <p className="text-gray-600 mb-4">
        Our seller support team is here to help you succeed on OryMart
      </p>
      <div className="space-y-2 text-sm">
        <p>📞 Phone: 1-800-ORYMART (1-800-679-6278)</p>
        <p>✉️ Email: <a href="mailto:seller-support@orymart.com" className="text-orange-600 hover:underline">seller-support@orymart.com</a></p>
        <p>💬 Live Chat: Available 24/7 in your seller dashboard</p>
      </div>
    </div>
  );
};

export default VendorSupport;
