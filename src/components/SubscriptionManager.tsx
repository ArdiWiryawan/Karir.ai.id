import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import {
  Bell,
  Calendar,
  TrendingUp,
  Users,
  DollarSign,
  CheckCircle,
  Clock,
  Settings,
  Download,
  Mail
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  period: 'monthly' | 'quarterly' | 'yearly';
  features: string[];
  status: 'active' | 'cancelled' | 'expired';
  nextBilling: string;
  reports: number;
  reportsUsed: number;
}

const SubscriptionManager = () => {
  const [currentPlan, setCurrentPlan] = useState<SubscriptionPlan>({
    id: 'professional-monthly',
    name: 'Professional',
    price: 99000,
    period: 'monthly',
    features: [
      'Monthly industry reports',
      'Weekly skill trend updates',
      'Priority support',
      'Advanced analytics',
      'Export capabilities'
    ],
    status: 'active',
    nextBilling: '2025-02-01',
    reports: 50,
    reportsUsed: 12
  });

  const [notificationSettings, setNotificationSettings] = useState({
    monthlyReports: true,
    weeklyUpdates: true,
    skillAlerts: false,
    marketTrends: true,
    productUpdates: true,
    promotionalEmails: false
  });

  const [updateFrequency, setUpdateFrequency] = useState('monthly');

  const { toast } = useToast();

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotificationSettings(prev => ({ ...prev, [key]: value }));

    toast({
      title: "Settings Updated",
      description: "Your notification preferences have been saved.",
    });
  };

  const handleFrequencyChange = (frequency: string) => {
    setUpdateFrequency(frequency);

    toast({
      title: "Update Frequency Changed",
      description: `You'll now receive updates ${frequency}.`,
    });
  };

  const downloadReport = (type: string) => {
    toast({
      title: "Download Started",
      description: `${type} report is being generated.`,
    });

    // Simulate download
    setTimeout(() => {
      toast({
        title: "Download Complete",
        description: "Report has been downloaded successfully.",
      });
    }, 2000);
  };

  const cancelSubscription = () => {
    toast({
      title: "Subscription Cancelled",
      description: "Your subscription will end on the next billing date.",
      variant: "destructive",
    });
  };

  const upgradePlan = () => {
    toast({
      title: "Upgrade Initiated",
      description: "Redirecting to payment page...",
    });
  };

  return (
    <div className="space-y-6">
      {/* Current Subscription */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            Current Subscription
          </CardTitle>
          <CardDescription>
            Manage your subscription and billing
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">{currentPlan.name} Plan</h3>
              <p className="text-muted-foreground">
                Rp {currentPlan.price.toLocaleString()} / {currentPlan.period}
              </p>
              <Badge className="mt-2" variant={currentPlan.status === 'active' ? 'default' : 'secondary'}>
                {currentPlan.status}
              </Badge>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Next billing</div>
              <div className="font-medium">{currentPlan.nextBilling}</div>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm" onClick={upgradePlan}>
                  Upgrade
                </Button>
                <Button variant="outline" size="sm" onClick={cancelSubscription}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>

          <Separator />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-primary">{currentPlan.reportsUsed}</div>
              <div className="text-sm text-muted-foreground">Reports Used</div>
              <div className="text-xs text-muted-foreground mt-1">
                of {currentPlan.reports} this month
              </div>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-secondary">
                {Math.round((currentPlan.reportsUsed / currentPlan.reports) * 100)}%
              </div>
              <div className="text-sm text-muted-foreground">Usage</div>
              <div className="text-xs text-muted-foreground mt-1">
                {currentPlan.reports - currentPlan.reportsUsed} remaining
              </div>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-accent">
                {new Date(currentPlan.nextBilling).getDate()}
              </div>
              <div className="text-sm text-muted-foreground">Days Left</div>
              <div className="text-xs text-muted-foreground mt-1">
                Until renewal
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Update Frequency */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Update Frequency
          </CardTitle>
          <CardDescription>
            How often would you like to receive updates?
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Industry Report Frequency</Label>
            <Select value={updateFrequency} onValueChange={handleFrequencyChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Weekly Updates</SelectItem>
                <SelectItem value="monthly">Monthly Reports</SelectItem>
                <SelectItem value="quarterly">Quarterly Analysis</SelectItem>
                <SelectItem value="yearly">Annual Summary</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="text-sm text-muted-foreground">
            📊 {updateFrequency === 'weekly' && 'Get the latest data every week to stay ahead of trends.'}
            {updateFrequency === 'monthly' && 'Comprehensive monthly reports with deep insights.'}
            {updateFrequency === 'quarterly' && 'Quarterly analysis perfect for strategic planning.'}
            {updateFrequency === 'yearly' && 'Annual comprehensive review of industry trends.'}
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Notification Preferences
          </CardTitle>
          <CardDescription>
            Choose what updates you want to receive
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-sm font-medium">Monthly Industry Reports</Label>
                <p className="text-xs text-muted-foreground">Comprehensive analysis of industry trends and skill demands</p>
              </div>
              <Switch
                checked={notificationSettings.monthlyReports}
                onCheckedChange={(checked) => handleNotificationChange('monthlyReports', checked)}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-sm font-medium">Weekly Skill Updates</Label>
                <p className="text-xs text-muted-foreground">Latest skill trends and emerging technologies</p>
              </div>
              <Switch
                checked={notificationSettings.weeklyUpdates}
                onCheckedChange={(checked) => handleNotificationChange('weeklyUpdates', checked)}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-sm font-medium">Skill Gap Alerts</Label>
                <p className="text-xs text-muted-foreground">Notifications when critical skill gaps are detected</p>
              </div>
              <Switch
                checked={notificationSettings.skillAlerts}
                onCheckedChange={(checked) => handleNotificationChange('skillAlerts', checked)}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-sm font-medium">Market Trend Alerts</Label>
                <p className="text-xs text-muted-foreground">Real-time notifications about market changes</p>
              </div>
              <Switch
                checked={notificationSettings.marketTrends}
                onCheckedChange={(checked) => handleNotificationChange('marketTrends', checked)}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-sm font-medium">Product Updates</Label>
                <p className="text-xs text-muted-foreground">New features and platform improvements</p>
              </div>
              <Switch
                checked={notificationSettings.productUpdates}
                onCheckedChange={(checked) => handleNotificationChange('productUpdates', checked)}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-sm font-medium">Promotional Offers</Label>
                <p className="text-xs text-muted-foreground">Special discounts and premium features</p>
              </div>
              <Switch
                checked={notificationSettings.promotionalEmails}
                onCheckedChange={(checked) => handleNotificationChange('promotionalEmails', checked)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Reports */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="w-5 h-5" />
            Recent Reports
          </CardTitle>
          <CardDescription>
            Your latest industry reports and insights
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-medium">Technology Industry Report - January 2025</div>
                  <div className="text-sm text-muted-foreground">Monthly comprehensive analysis</div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => downloadReport('Technology')}>
                  Download
                </Button>
                <Badge variant="secondary">PDF</Badge>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-secondary" />
                <div>
                  <div className="font-medium">AI Skills Forecast 2025</div>
                  <div className="text-sm text-muted-foreground">Annual prediction report</div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => downloadReport('AI Skills')}>
                  Download
                </Button>
                <Badge variant="secondary">PDF</Badge>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <DollarSign className="w-5 h-5 text-accent" />
                <div>
                  <div className="font-medium">Salary Trends Report</div>
                  <div className="text-sm text-muted-foreground">Q4 2024 compensation analysis</div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => downloadReport('Salary')}>
                  Download
                </Button>
                <Badge variant="secondary">Excel</Badge>
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <Button variant="outline">
              <Mail className="w-4 h-4 mr-2" />
              View All Reports
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Usage Analytics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Usage Analytics
          </CardTitle>
          <CardDescription>
            Track your platform usage and report consumption
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-primary">{currentPlan.reportsUsed}</div>
              <div className="text-sm text-muted-foreground">Reports Generated</div>
              <div className="text-xs text-muted-foreground mt-1">This month</div>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-secondary">24</div>
              <div className="text-sm text-muted-foreground">Forecasts Run</div>
              <div className="text-xs text-muted-foreground mt-1">This month</div>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-accent">156</div>
              <div className="text-sm text-muted-foreground">Skills Analyzed</div>
              <div className="text-xs text-muted-foreground mt-1">Total</div>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-primary">8.5h</div>
              <div className="text-sm text-muted-foreground">Time Saved</div>
              <div className="text-xs text-muted-foreground mt-1">This month</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubscriptionManager;