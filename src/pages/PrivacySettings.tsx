
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { ArrowLeft, Shield } from 'lucide-react';
import { toast } from 'sonner';

const PrivacySettings = () => {
  const [settings, setSettings] = useState({
    dataCollection: true,
    personalizedAds: true,
    analyticsTracking: false,
    thirdPartySharing: false,
    marketingEmails: true,
    activityTracking: true
  });

  const handleSettingChange = (key: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSave = () => {
    toast.success('Privacy settings updated successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="outline" asChild>
            <Link to="/profile">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Profile
            </Link>
          </Button>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6" />
              <CardTitle className="text-2xl">Privacy Settings</CardTitle>
            </div>
            <CardDescription>
              Manage how your data is collected and used
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Data Collection</h4>
                  <p className="text-sm text-gray-600">Allow collection of usage data to improve our services</p>
                </div>
                <Switch
                  checked={settings.dataCollection}
                  onCheckedChange={() => handleSettingChange('dataCollection')}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Personalized Advertisements</h4>
                  <p className="text-sm text-gray-600">Show ads based on your interests and activity</p>
                </div>
                <Switch
                  checked={settings.personalizedAds}
                  onCheckedChange={() => handleSettingChange('personalizedAds')}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Analytics Tracking</h4>
                  <p className="text-sm text-gray-600">Help us understand how you use our platform</p>
                </div>
                <Switch
                  checked={settings.analyticsTracking}
                  onCheckedChange={() => handleSettingChange('analyticsTracking')}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Third-party Data Sharing</h4>
                  <p className="text-sm text-gray-600">Allow sharing data with trusted partners</p>
                </div>
                <Switch
                  checked={settings.thirdPartySharing}
                  onCheckedChange={() => handleSettingChange('thirdPartySharing')}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Marketing Emails</h4>
                  <p className="text-sm text-gray-600">Receive promotional emails and offers</p>
                </div>
                <Switch
                  checked={settings.marketingEmails}
                  onCheckedChange={() => handleSettingChange('marketingEmails')}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Activity Tracking</h4>
                  <p className="text-sm text-gray-600">Track your browsing activity for better recommendations</p>
                </div>
                <Switch
                  checked={settings.activityTracking}
                  onCheckedChange={() => handleSettingChange('activityTracking')}
                />
              </div>
            </div>

            <div className="border-t pt-6">
              <Button onClick={handleSave} className="w-full">
                Save Privacy Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacySettings;
