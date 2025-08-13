import { useState } from 'react';
import { User, Package, MapPin, Bell, CreditCard, Shield, Globe, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/hooks/useAuth';
import { useLanguage } from '@/hooks/useLanguage';
import { useTranslation } from 'react-i18next';
import { useInternationalization } from '@/hooks/useInternationalization';
import { toast } from 'sonner';

const Settings = () => {
  const { user, logout } = useAuth();
  const { currentLanguage, setLanguage } = useLanguage();
  const { t } = useTranslation();
  const { currentCountry } = useInternationalization();
  
  const [addresses, setAddresses] = useState([
    {
      id: '1',
      type: 'Home',
      name: 'John Doe',
      address: '123 Main St, City, State 12345',
      isDefault: true
    },
    {
      id: '2',
      type: 'Work',
      name: 'John Doe',
      address: '456 Business Ave, City, State 67890',
      isDefault: false
    }
  ]);

  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: '1',
      type: 'Visa',
      last4: '4242',
      expiry: '12/25',
      isDefault: true
    },
    {
      id: '2',
      type: 'Mastercard',
      last4: '8888',
      expiry: '08/26',
      isDefault: false
    }
  ]);

  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotions: true,
    newsletter: false,
    sms: false
  });

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card>
          <CardContent className="p-6 text-center">
            <p className="mb-4">{t('auth.pleaseLogin')}</p>
            <Button asChild>
              <a href="/login">{t('auth.login')}</a>
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('settings.accountSettings')}</h1>
          <p className="text-gray-600">{t('settings.manageAccount')}</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {t('settings.profile')}
            </TabsTrigger>
            <TabsTrigger value="addresses" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {t('settings.addresses')}
            </TabsTrigger>
            <TabsTrigger value="payment" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              {t('settings.payment')}
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              {t('settings.notifications')}
            </TabsTrigger>
            <TabsTrigger value="preferences" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              {t('settings.preferences')}
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              {t('settings.security')}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>{t('settings.profileInformation')}</CardTitle>
                <CardDescription>{t('settings.updatePersonalInfo')}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{t('settings.firstName')}</Label>
                    <Input id="firstName" defaultValue="Demo" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{t('settings.lastName')}</Label>
                    <Input id="lastName" defaultValue="User" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t('settings.email')}</Label>
                  <Input id="email" defaultValue={user.email} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{t('settings.phoneNumber')}</Label>
                  <Input id="phone" placeholder="+1 (555) 000-0000" />
                </div>
                <Button onClick={() => toast.success(t('settings.profileUpdated'))}>
                  {t('settings.saveChanges')}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="addresses">
            <Card>
              <CardHeader>
                <CardTitle>{t('settings.shippingAddresses')}</CardTitle>
                <CardDescription>{t('settings.manageDeliveryAddresses')}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {addresses.map((address) => (
                  <div key={address.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">{address.type}</h4>
                          {address.isDefault && (
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{t('settings.default')}</span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{address.name}</p>
                        <p className="text-sm text-gray-600">{address.address}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">{t('settings.edit')}</Button>
                        <Button variant="outline" size="sm">{t('settings.delete')}</Button>
                      </div>
                    </div>
                  </div>
                ))}
                <Button onClick={() => toast.success(t('settings.addNewAddressToast'))}>
                  {t('settings.addNewAddress')}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payment">
            <Card>
              <CardHeader>
                <CardTitle>{t('settings.paymentMethods')}</CardTitle>
                <CardDescription>{t('settings.manageSavedPaymentMethods')}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-semibold">
                          {method.type}
                        </div>
                        <div>
                          <p className="font-medium">•••• •••• •••• {method.last4}</p>
                          <p className="text-sm text-gray-600">{t('settings.expires')} {method.expiry}</p>
                          {method.isDefault && (
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">{t('settings.default')}</span>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">{t('settings.edit')}</Button>
                        <Button variant="outline" size="sm">{t('settings.remove')}</Button>
                      </div>
                    </div>
                  </div>
                ))}
                <Button onClick={() => toast.success(t('settings.addNewPaymentMethodToast'))}>
                  {t('settings.addNewPaymentMethod')}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>{t('settings.notificationPreferences')}</CardTitle>
                <CardDescription>{t('settings.chooseHowNotified')}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="orderUpdates">{t('settings.orderUpdates')}</Label>
                    <p className="text-sm text-gray-600">{t('settings.orderUpdatesDesc')}</p>
                  </div>
                  <Switch
                    id="orderUpdates"
                    checked={notifications.orderUpdates}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, orderUpdates: checked }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="promotions">{t('settings.promotionalEmails')}</Label>
                    <p className="text-sm text-gray-600">{t('settings.promotionalEmailsDesc')}</p>
                  </div>
                  <Switch
                    id="promotions"
                    checked={notifications.promotions}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, promotions: checked }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="newsletter">{t('settings.newsletter')}</Label>
                    <p className="text-sm text-gray-600">{t('settings.newsletterDesc')}</p>
                  </div>
                  <Switch
                    id="newsletter"
                    checked={notifications.newsletter}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, newsletter: checked }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="sms">{t('settings.smsNotifications')}</Label>
                    <p className="text-sm text-gray-600">{t('settings.smsNotificationsDesc')}</p>
                  </div>
                  <Switch
                    id="sms"
                    checked={notifications.sms}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, sms: checked }))
                    }
                  />
                </div>
                <Button onClick={() => toast.success(t('settings.notificationPreferencesSaved'))}>
                  {t('settings.savePreferences')}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preferences">
            <Card>
              <CardHeader>
                <CardTitle>{t('settings.accountPreferences')}</CardTitle>
                <CardDescription>{t('settings.customizeAccountSettings')}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="language">{t('settings.language')}</Label>
                  <Select value={currentLanguage} onValueChange={setLanguage}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                      <SelectItem value="fr">Français</SelectItem>
                      <SelectItem value="de">Deutsch</SelectItem>
                      <SelectItem value="it">Italiano</SelectItem>
                      <SelectItem value="pt">Português</SelectItem>
                      <SelectItem value="ko">한국어</SelectItem>
                      <SelectItem value="ja">日本語</SelectItem>
                      <SelectItem value="ar">العربية</SelectItem>
                      <SelectItem value="he">עברית</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">{t('settings.currency')}</Label>
                  <Select defaultValue={currentCountry.currency.code.toLowerCase()}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD ($)</SelectItem>
                      <SelectItem value="eur">EUR (€)</SelectItem>
                      <SelectItem value="gbp">GBP (£)</SelectItem>
                      <SelectItem value="jpy">JPY (¥)</SelectItem>
                      <SelectItem value="cad">CAD (C$)</SelectItem>
                      <SelectItem value="aud">AUD (A$)</SelectItem>
                      <SelectItem value="krw">KRW (₩)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">{t('settings.timezone')}</Label>
                  <Select defaultValue="utc">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utc">UTC</SelectItem>
                      <SelectItem value="est">EST</SelectItem>
                      <SelectItem value="pst">PST</SelectItem>
                      <SelectItem value="cet">CET</SelectItem>
                      <SelectItem value="jst">JST</SelectItem>
                      <SelectItem value="kst">KST</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={() => toast.success(t('settings.preferencesSaved'))}>
                  {t('settings.savePreferences')}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>{t('settings.securitySettings')}</CardTitle>
                <CardDescription>{t('settings.manageAccountSecurity')}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">{t('settings.changePassword')}</h4>
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">{t('settings.currentPassword')}</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">{t('settings.newPassword')}</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmNewPassword">{t('settings.confirmNewPassword')}</Label>
                    <Input id="confirmNewPassword" type="password" />
                  </div>
                  <Button onClick={() => toast.success(t('settings.passwordChanged'))}>
                    {t('settings.updatePassword')}
                  </Button>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold text-red-600 mb-4">{t('settings.dangerZone')}</h4>
                  <div className="space-y-4">
                    <Button variant="outline" onClick={() => toast.success(t('settings.deactivateAccountToast'))}>
                      {t('settings.deactivateAccount')}
                    </Button>
                    <Button 
                      variant="destructive" 
                      onClick={logout}
                      className="flex items-center gap-2"
                    >
                      <LogOut className="h-4 w-4" />
                      {t('auth.logout')}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
