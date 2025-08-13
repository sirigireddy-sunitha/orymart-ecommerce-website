
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, RotateCcw, Clock, CheckCircle } from 'lucide-react';

const ReturnsPolicy = () => {
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
              <RotateCcw className="h-6 w-6" />
              <CardTitle className="text-2xl">Returns Policy</CardTitle>
            </div>
            <CardDescription>
              Easy returns within 30 days of purchase
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">30-Day Window</h3>
                  <p className="text-sm text-gray-600">Return items within 30 days of delivery</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Easy Process</h3>
                  <p className="text-sm text-gray-600">Simple online return initiation</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <RotateCcw className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Free Returns</h3>
                  <p className="text-sm text-gray-600">No return shipping fees</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Return Conditions</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Items must be in original condition and packaging</li>
                <li>• Include all original accessories and documentation</li>
                <li>• Some items like personalized products are non-returnable</li>
                <li>• Electronics must be in working condition</li>
              </ul>

              <h3 className="text-xl font-semibold">Return Process</h3>
              <ol className="space-y-2 text-gray-700">
                <li>1. Log into your account and go to Order History</li>
                <li>2. Select the item you want to return</li>
                <li>3. Choose your return reason and preferred refund method</li>
                <li>4. Print the prepaid return label</li>
                <li>5. Package the item and attach the return label</li>
                <li>6. Drop off at any authorized shipping location</li>
              </ol>

              <h3 className="text-xl font-semibold">Refund Timeline</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Refunds are processed within 3-5 business days of receiving the return</li>
                <li>• Credit card refunds may take 5-10 business days to appear</li>
                <li>• Store credit is applied immediately</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReturnsPolicy;
