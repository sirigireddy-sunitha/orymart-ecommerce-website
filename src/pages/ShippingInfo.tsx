
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Truck, Clock, MapPin } from 'lucide-react';

const ShippingInfo = () => {
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
              <Truck className="h-6 w-6" />
              <CardTitle className="text-2xl">Shipping Information</CardTitle>
            </div>
            <CardDescription>
              Everything you need to know about our shipping options
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Truck className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Free Standard Shipping</h3>
                  <p className="text-sm text-gray-600">On orders over $50</p>
                  <p className="text-sm text-gray-600">5-7 business days</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Express Shipping</h3>
                  <p className="text-sm text-gray-600">$9.99 flat rate</p>
                  <p className="text-sm text-gray-600">2-3 business days</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Same Day Delivery</h3>
                  <p className="text-sm text-gray-600">Available in select cities</p>
                  <p className="text-sm text-gray-600">Order by 2 PM</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Shipping Policies</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Orders are processed within 1-2 business days</li>
                <li>• Free shipping applies to orders over $50 before taxes</li>
                <li>• We ship to all 50 states and international locations</li>
                <li>• Tracking information will be provided via email</li>
                <li>• Signature confirmation may be required for high-value items</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ShippingInfo;
