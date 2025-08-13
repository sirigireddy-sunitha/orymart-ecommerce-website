
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCart } from '@/hooks/useCart';
import { useAuth } from '@/hooks/useAuth';
import { useInternationalization } from '@/hooks/useInternationalization';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';

const Payment = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const { formatPrice } = useInternationalization();
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: user?.email || '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
    upiId: ''
  });
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast.success('Payment successful! Your order has been confirmed.');
    clearCart();
    navigate('/profile');
    setIsProcessing(false);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{t('payment.cartEmpty', 'Your cart is empty')}</h1>
          <Button asChild>
            <Link to="/products">{t('payment.continueShopping', 'Continue Shopping')}</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="outline" className="mb-6" asChild>
          <Link to="/cart">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('payment.backToCart', 'Back to Cart')}
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Form */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  {t('payment.title', 'Payment Details')}
                </CardTitle>
                <CardDescription>
                  {t('payment.secure', 'Your payment information is secure and encrypted')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">{t('payment.contactInfo', 'Contact Information')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">{t('payment.firstName', 'First Name')}</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">{t('payment.lastName', 'Last Name')}</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">{t('payment.email', 'Email')}</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">{t('payment.shippingAddress', 'Shipping Address')}</h3>
                    <div>
                      <Label htmlFor="address">{t('payment.address', 'Address')}</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">{t('payment.city', 'City')}</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">{t('payment.state', 'State')}</Label>
                        <Input
                          id="state"
                          value={formData.state}
                          onChange={(e) => handleInputChange('state', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="zipCode">{t('payment.zipCode', 'ZIP Code')}</Label>
                        <Input
                          id="zipCode"
                          value={formData.zipCode}
                          onChange={(e) => handleInputChange('zipCode', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Method Selection */}
<div className="space-y-4">
  <h3 className="font-semibold text-lg">Payment Method</h3>
  <div className="flex flex-col gap-2">
    <label className="flex items-center gap-2">
      <input
        type="radio"
        name="paymentMethod"
        value="cod"
        checked={paymentMethod === 'cod'}
        onChange={() => setPaymentMethod('cod')}
        className="accent-blue-600"
      />
      Cash on Delivery (COD)
    </label>
    <label className="flex items-center gap-2">
      <input
        type="radio"
        name="paymentMethod"
        value="card"
        checked={paymentMethod === 'card'}
        onChange={() => setPaymentMethod('card')}
        className="accent-blue-600"
      />
      Credit/Debit Card
    </label>
    <label className="flex items-center gap-2">
      <input
        type="radio"
        name="paymentMethod"
        value="upi"
        checked={paymentMethod === 'upi'}
        onChange={() => setPaymentMethod('upi')}
        className="accent-blue-600"
      />
      UPI / Wallet
    </label>
  </div>
  {paymentError && <div className="text-red-600 text-sm">{paymentError}</div>}
</div>

{/* Card Payment Fields */}
{paymentMethod === 'card' && (
  <div className="space-y-4">
    <div>
      <Label htmlFor="cardNumber">Card Number</Label>
      <Input
        id="cardNumber"
        placeholder="1234 5678 9012 3456"
        value={formData.cardNumber}
        onChange={(e) => handleInputChange('cardNumber', e.target.value)}
      />
    </div>
    <div>
      <Label htmlFor="nameOnCard">Name on Card</Label>
      <Input
        id="nameOnCard"
        value={formData.nameOnCard}
        onChange={(e) => handleInputChange('nameOnCard', e.target.value)}
      />
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <Label htmlFor="expiryDate">Expiry Date</Label>
        <Input
          id="expiryDate"
          placeholder="MM/YY"
          value={formData.expiryDate}
          onChange={(e) => handleInputChange('expiryDate', e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="cvv">CVV</Label>
        <Input
          id="cvv"
          placeholder="123"
          value={formData.cvv}
          onChange={(e) => handleInputChange('cvv', e.target.value)}
        />
      </div>
    </div>
  </div>
)}

{/* UPI Payment Field */}
{paymentMethod === 'upi' && (
  <div className="space-y-4">
    <div>
      <Label htmlFor="upiId">UPI ID</Label>
      <Input
        id="upiId"
        placeholder="yourname@upi"
        value={formData.upiId}
        onChange={(e) => handleInputChange('upiId', e.target.value)}
      />
    </div>
  </div>
)}

                  <Button type="submit" className="w-full gap-2" disabled={isProcessing}>
                    <CreditCard className="h-5 w-5" />
                    {isProcessing ? t('payment.processing', 'Processing Payment...') : `${t('payment.pay', 'Pay')} ${formatPrice(getTotalPrice())}`}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>{t('payment.orderSummary', 'Order Summary')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-600">{t('payment.quantity', 'Qty')}: {item.quantity}</p>
                    </div>
                    <p className="font-semibold">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                ))}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>{t('payment.total', 'Total')}</span>
                    <span>{formatPrice(getTotalPrice())}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
