import { User, Package, Settings, LogOut, Key, Shield, Download, Eye, Truck, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/useAuth';
import { useTranslation } from 'react-i18next';
import { useInternationalization } from '@/hooks/useInternationalization';
import { ProfileSettings } from '@/components/ProfileSettings';
import { useState } from 'react';
import { toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useAuth();
  const { t } = useTranslation();
  const { formatPrice } = useInternationalization();
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  const navigate = useNavigate();

  // Enhanced order data with tracking information
  const orders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 129.99,
      items: 3,
      trackingNumber: 'TRK123456789',
      estimatedDelivery: '2024-01-17',
      currentLocation: 'Delivered to your doorstep',
      timeline: [
        { status: 'Order Placed', date: '2024-01-15', completed: true },
        { status: 'Payment Confirmed', date: '2024-01-15', completed: true },
        { status: 'Shipped', date: '2024-01-16', completed: true },
        { status: 'Out for Delivery', date: '2024-01-17', completed: true },
        { status: 'Delivered', date: '2024-01-17', completed: true }
      ]
    },
    {
      id: 'ORD-002',
      date: '2024-01-10',
      status: 'Shipped',
      total: 79.99,
      items: 2,
      trackingNumber: 'TRK987654321',
      estimatedDelivery: '2024-01-18',
      currentLocation: 'In transit to delivery facility',
      timeline: [
        { status: 'Order Placed', date: '2024-01-10', completed: true },
        { status: 'Payment Confirmed', date: '2024-01-10', completed: true },
        { status: 'Shipped', date: '2024-01-16', completed: true },
        { status: 'Out for Delivery', date: '', completed: false },
        { status: 'Delivered', date: '', completed: false }
      ]
    },
    {
      id: 'ORD-003',
      date: '2024-01-05',
      status: 'Processing',
      total: 199.99,
      items: 1,
      trackingNumber: 'TRK456789123',
      estimatedDelivery: '2024-01-20',
      currentLocation: 'Preparing for shipment',
      timeline: [
        { status: 'Order Placed', date: '2024-01-05', completed: true },
        { status: 'Payment Confirmed', date: '2024-01-05', completed: true },
        { status: 'Shipped', date: '', completed: false },
        { status: 'Out for Delivery', date: '', completed: false },
        { status: 'Delivered', date: '', completed: false }
      ]
    }
  ];

  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'change-password':
        navigate('/change-password');
        break;
      case 'privacy-settings':
        navigate('/privacy-settings');
        break;
      case 'download-data':
        // Simulate data download
        const dataBlob = new Blob([JSON.stringify({
          user: user,
          downloadDate: new Date().toISOString()
        }, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'orymart-data.json';
        a.click();
        URL.revokeObjectURL(url);
        toast.success('Your data download has started');
        break;
      default:
        break;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Shipped':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Processing':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Delivered':
        return <CheckCircle className="h-4 w-4" />;
      case 'Shipped':
        return <Truck className="h-4 w-4" />;
      case 'Processing':
        return <Package className="h-4 w-4" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card>
          <CardContent className="p-6 text-center">
            <p className="mb-4">Please log in to view your profile</p>
            <Button asChild>
              <Link to="/login">Login</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Account</h1>
          <p className="text-gray-600">Manage your profile and view your orders</p>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant="outline"
              className="flex items-center gap-2 h-auto p-4"
              onClick={() => handleQuickAction('change-password')}
            >
              <Key className="h-5 w-5" />
              <div className="text-left">
                <div className="font-medium">Change Password</div>
                <div className="text-sm text-gray-500">Update your account security</div>
              </div>
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 h-auto p-4"
              onClick={() => handleQuickAction('privacy-settings')}
            >
              <Shield className="h-5 w-5" />
              <div className="text-left">
                <div className="font-medium">Privacy Settings</div>
                <div className="text-sm text-gray-500">Manage your privacy preferences</div>
              </div>
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 h-auto p-4"
              onClick={() => handleQuickAction('download-data')}
            >
              <Download className="h-5 w-5" />
              <div className="text-left">
                <div className="font-medium">Download Data</div>
                <div className="text-sm text-gray-500">Export your account data</div>
              </div>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <ProfileSettings />
          </TabsContent>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>
                  View and track your recent orders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {orders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-6">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-semibold text-lg">{order.id}</h4>
                            <Badge className={`flex items-center gap-1 ${getStatusColor(order.status)}`}>
                              {getStatusIcon(order.status)}
                              {order.status}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                            <div>Order Date: {new Date(order.date).toLocaleDateString()}</div>
                            <div>Items: {order.items}</div>
                            <div>Tracking: {order.trackingNumber}</div>
                            <div>Est. Delivery: {new Date(order.estimatedDelivery).toLocaleDateString()}</div>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <MapPin className="h-4 w-4 text-gray-500" />
                            <span className="text-gray-600">{order.currentLocation}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-xl mb-2">{formatPrice(order.total)}</p>
                          <div className="space-y-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedOrder(selectedOrder === order.id ? null : order.id)}
                              className="flex items-center gap-1"
                            >
                              <Eye className="h-4 w-4" />
                              {selectedOrder === order.id ? 'Hide' : 'Track Order'}
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Order Timeline */}
                      {selectedOrder === order.id && (
                        <div className="mt-6 pt-6 border-t">
                          <h5 className="font-medium mb-4">Order Timeline</h5>
                          <div className="space-y-3">
                            {order.timeline.map((step, index) => (
                              <div key={index} className="flex items-center gap-3">
                                <div className={`w-3 h-3 rounded-full border-2 ${
                                  step.completed 
                                    ? 'bg-green-500 border-green-500' 
                                    : 'bg-gray-200 border-gray-300'
                                }`} />
                                <div className="flex-1">
                                  <div className={`font-medium ${
                                    step.completed ? 'text-green-700' : 'text-gray-500'
                                  }`}>
                                    {step.status}
                                  </div>
                                  {step.date && (
                                    <div className="text-sm text-gray-500">
                                      {new Date(step.date).toLocaleDateString()}
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>
                  Manage your account preferences and security
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Notifications</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked />
                      <span>Email notifications for orders</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked />
                      <span>Promotional emails</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span>SMS notifications</span>
                    </label>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold text-red-600 mb-4">Danger Zone</h4>
                  <Button 
                    variant="destructive" 
                    onClick={logout}
                    className="flex items-center gap-2"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
