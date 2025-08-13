
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield, Lock, CreditCard } from 'lucide-react';

const PaymentSecurity = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="outline" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6" />
              <CardTitle className="text-2xl">Payment Security</CardTitle>
            </div>
            <CardDescription>
              Your payment information is protected with industry-leading security
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Lock className="h-8 w-8 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">SSL Encryption</h3>
                  <p className="text-sm text-gray-600">256-bit SSL encryption protects your data</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">PCI Compliant</h3>
                  <p className="text-sm text-gray-600">We meet all PCI DSS requirements</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <CreditCard className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Secure Processing</h3>
                  <p className="text-sm text-gray-600">Trusted payment processors</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Payment Methods</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• All major credit cards (Visa, MasterCard, American Express)</li>
                <li>• PayPal and digital wallets</li>
                <li>• Bank transfers and ACH payments</li>
                <li>• Buy now, pay later options</li>
              </ul>

              <h3 className="text-xl font-semibold">Security Features</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Your payment data is never stored on our servers</li>
                <li>• Real-time fraud detection and prevention</li>
                <li>• Two-factor authentication for account security</li>
                <li>• Regular security audits and compliance checks</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaymentSecurity;
