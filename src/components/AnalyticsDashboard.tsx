import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import {
  BarChart3,
  TrendingUp,
  Users,
  Target,
  MousePointer,
  Clock,
  Eye,
  UserPlus,
  ShoppingCart,
  Download,
  Share2,
  Filter,
  Calendar,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

interface AnalyticsData {
  overview: {
    totalUsers: number;
    activeUsers: number;
    conversionRate: number;
    avgSessionTime: string;
    bounceRate: number;
    topPages: { page: string; views: number; percentage: number }[];
  };
  userJourney: {
    stages: {
      name: string;
      users: number;
      conversion: number;
      dropoff: number;
    }[];
  };
  conversionFunnel: {
    step: string;
    users: number;
    conversion: number;
    rate: number;
  }[];
  trafficSources: {
    source: string;
    users: number;
    percentage: number;
    change: number;
  }[];
  deviceBreakdown: {
    device: string;
    users: number;
    percentage: number;
  }[];
  featureUsage: {
    feature: string;
    usage: number;
    growth: number;
  }[];
}

const AnalyticsDashboard = () => {
  const [timeRange, setTimeRange] = useState('30d');
  const [activeTab, setActiveTab] = useState('overview');

  const analyticsData: AnalyticsData = {
    overview: {
      totalUsers: 12847,
      activeUsers: 3421,
      conversionRate: 3.2,
      avgSessionTime: '4m 32s',
      bounceRate: 42.5,
      topPages: [
        { page: '/features/skill-forecasting', views: 5432, percentage: 35.2 },
        { page: '/', views: 3876, percentage: 25.1 },
        { page: '/auth', views: 2156, percentage: 14.0 },
        { page: '/subscription', views: 1234, percentage: 8.0 }
      ]
    },
    userJourney: {
      stages: [
        { name: 'Landing', users: 10000, conversion: 100, dropoff: 0 },
        { name: 'Sign Up', users: 6500, conversion: 65, dropoff: 35 },
        { name: 'First Forecast', users: 3200, conversion: 32, dropoff: 51 },
        { name: 'Report Generated', users: 1800, conversion: 18, dropoff: 44 },
        { name: 'Premium Conversion', users: 320, conversion: 3.2, dropoff: 82 }
      ]
    },
    conversionFunnel: [
      { step: 'Page Visit', users: 10000, conversion: 100, rate: 100 },
      { step: 'Sign Up', users: 6500, conversion: 65, rate: 65 },
      { step: 'Complete Profile', users: 4800, conversion: 48, rate: 74 },
      { step: 'Run Forecast', users: 3200, conversion: 32, rate: 67 },
      { step: 'View Results', users: 2800, conversion: 28, rate: 88 },
      { step: 'Export/Share', users: 1200, conversion: 12, rate: 43 },
      { step: 'Premium Upgrade', users: 320, conversion: 3.2, rate: 27 }
    ],
    trafficSources: [
      { source: 'Organic Search', users: 5421, percentage: 42.2, change: 12.5 },
      { source: 'Social Media', users: 3214, percentage: 25.0, change: -3.2 },
      { source: 'Direct', users: 2156, percentage: 16.8, change: 8.7 },
      { source: 'Referral', users: 1234, percentage: 9.6, change: 15.3 },
      { source: 'Email', users: 822, percentage: 6.4, change: -1.8 }
    ],
    deviceBreakdown: [
      { device: 'Desktop', users: 6423, percentage: 50.0 },
      { device: 'Mobile', users: 5138, percentage: 40.0 },
      { device: 'Tablet', users: 1286, percentage: 10.0 }
    ],
    featureUsage: [
      { feature: 'Skill Forecasting', usage: 89, growth: 15.2 },
      { feature: 'CV Builder', usage: 67, growth: 8.7 },
      { feature: 'Interview Coach', usage: 45, growth: 22.1 },
      { feature: 'Scenario Simulator', usage: 34, growth: 45.8 },
      { feature: 'Talent Bench', usage: 23, growth: 67.3 }
    ]
  };

  const getChangeIcon = (change: number) => {
    return change > 0 ? (
      <ArrowUp className="w-3 h-3 text-green-600" />
    ) : (
      <ArrowDown className="w-3 h-3 text-red-600" />
    );
  };

  const getChangeColor = (change: number) => {
    return change > 0 ? 'text-green-600' : 'text-red-600';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
          <p className="text-muted-foreground">Comprehensive insights into user behavior and platform performance</p>
        </div>
        <div className="flex items-center gap-4">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="journey">User Journey</TabsTrigger>
          <TabsTrigger value="funnel">Conversion Funnel</TabsTrigger>
          <TabsTrigger value="traffic">Traffic Sources</TabsTrigger>
          <TabsTrigger value="features">Feature Usage</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{analyticsData.overview.totalUsers.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+12.5%</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                <UserPlus className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{analyticsData.overview.activeUsers.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+8.2%</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{analyticsData.overview.conversionRate}%</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+0.5%</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Session</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{analyticsData.overview.avgSessionTime}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-red-600">-12s</span> from last month
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Top Pages */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Top Pages
              </CardTitle>
              <CardDescription>Most visited pages and their performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.overview.topPages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-sm font-mono text-muted-foreground">#{index + 1}</div>
                      <div>
                        <div className="font-medium">{page.page}</div>
                        <div className="text-sm text-muted-foreground">{page.views.toLocaleString()} views</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{page.percentage}%</div>
                      <div className="text-sm text-muted-foreground">of total traffic</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="journey" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                User Journey Flow
              </CardTitle>
              <CardDescription>User progression through key platform stages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.userJourney.stages.map((stage, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-32 text-sm font-medium">{stage.name}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">{stage.users.toLocaleString()} users</span>
                        <span className="text-sm font-medium">{stage.conversion}% conversion</span>
                      </div>
                      <div className="relative">
                        <Progress value={stage.conversion} className="h-2" />
                        <div className="absolute right-0 top-0 text-xs text-muted-foreground transform translate-x-full ml-2">
                          -{stage.dropoff}%
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="funnel" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Conversion Funnel
              </CardTitle>
              <CardDescription>Detailed breakdown of user conversion through each step</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.conversionFunnel.map((step, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                    <div className="w-32 text-sm font-medium">{step.step}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold">{step.users.toLocaleString()} users</span>
                        <span className="text-sm text-muted-foreground">{step.rate}% rate</span>
                      </div>
                      <Progress value={step.rate} className="w-full" />
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{step.conversion}%</div>
                      <div className="text-sm text-muted-foreground">conversion</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="traffic" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MousePointer className="w-5 h-5" />
                Traffic Sources
              </CardTitle>
              <CardDescription>Where your users are coming from</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.trafficSources.map((source, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <div className="font-medium">{source.source}</div>
                        <div className="text-sm text-muted-foreground">{source.users.toLocaleString()} users</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{source.percentage}%</div>
                      <div className={`text-sm flex items-center gap-1 ${getChangeColor(source.change)}`}>
                        {getChangeIcon(source.change)}
                        {Math.abs(source.change)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="features" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Feature Usage
              </CardTitle>
              <CardDescription>Most popular features and their growth</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.featureUsage.map((feature, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <div className="font-medium">{feature.feature}</div>
                        <div className="text-sm text-muted-foreground">{feature.usage}% usage rate</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-bold flex items-center gap-1 ${getChangeColor(feature.growth)}`}>
                        {getChangeIcon(feature.growth)}
                        {Math.abs(feature.growth)}%
                      </div>
                      <div className="text-sm text-muted-foreground">growth</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Device Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Device & Browser Analytics</CardTitle>
          <CardDescription>User device preferences and browser usage</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-4">Device Types</h3>
              <div className="space-y-3">
                {analyticsData.deviceBreakdown.map((device, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm">{device.device}</span>
                    <div className="flex items-center gap-2">
                      <Progress value={device.percentage} className="w-20" />
                      <span className="text-sm font-medium w-12">{device.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Top Browsers</h3>
              <div className="space-y-3">
                {[
                  { browser: 'Chrome', percentage: 68.5, change: 2.1 },
                  { browser: 'Safari', percentage: 18.2, change: -1.3 },
                  { browser: 'Firefox', percentage: 8.7, change: 0.8 },
                  { browser: 'Edge', percentage: 4.6, change: -0.5 }
                ].map((browser, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm">{browser.browser}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium w-12">{browser.percentage}%</span>
                      <span className={`text-xs flex items-center gap-1 ${getChangeColor(browser.change)}`}>
                        {getChangeIcon(browser.change)}
                        {Math.abs(browser.change)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsDashboard;