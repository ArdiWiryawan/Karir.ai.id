import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailAutomation from '@/components/EmailAutomation';
import ABTestManager from '@/components/ABTestManager';
import AchievementSystem from '@/components/AchievementSystem';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Mail, TrendingUp, DollarSign, Settings, BarChart3, TestTube } from 'lucide-react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: 'Total Users',
      value: '12,847',
      change: '+12%',
      icon: Users,
      color: 'text-primary'
    },
    {
      title: 'Email Subscribers',
      value: '8,234',
      change: '+8%',
      icon: Mail,
      color: 'text-secondary'
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '+0.5%',
      icon: TrendingUp,
      color: 'text-accent'
    },
    {
      title: 'Monthly Revenue',
      value: 'Rp 45.2M',
      change: '+15%',
      icon: DollarSign,
      color: 'text-green-600'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your platform, users, and marketing campaigns
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {stat.title}
                    </CardTitle>
                    <Icon className={`h-4 w-4 ${stat.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-green-600">{stat.change}</span> from last month
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Main Content Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="email">Email Automation</TabsTrigger>
              <TabsTrigger value="ab-tests">A/B Tests</TabsTrigger>
              <TabsTrigger value="gamification">Gamification</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Latest user actions and system events</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">New user registered</div>
                        <div className="text-xs text-muted-foreground">2 minutes ago</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">Forecast completed</div>
                        <div className="text-xs text-muted-foreground">5 minutes ago</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">Premium upgrade</div>
                        <div className="text-xs text-muted-foreground">1 hour ago</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Top Features</CardTitle>
                    <CardDescription>Most used features this week</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Skill Forecasting</span>
                      <Badge>2,341 uses</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">CV Builder</span>
                      <Badge variant="secondary">1,842 uses</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Interview Coach</span>
                      <Badge variant="secondary">1,234 uses</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Roadmap Generator</span>
                      <Badge variant="secondary">987 uses</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="email">
              <EmailAutomation />
            </TabsContent>

            <TabsContent value="ab-tests">
              <ABTestManager />
            </TabsContent>

            <TabsContent value="gamification">
              <AchievementSystem />
            </TabsContent>

            <TabsContent value="analytics">
              <AnalyticsDashboard />
            </TabsContent>

            <TabsContent value="users" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    User Management
                  </CardTitle>
                  <CardDescription>
                    Manage users, roles, and permissions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">User Management</h3>
                    <p className="text-muted-foreground mb-4">
                      Manage user accounts, roles, and access permissions
                    </p>
                    <Button>Manage Users</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Platform Settings
                  </CardTitle>
                  <CardDescription>
                    Configure platform settings and integrations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Settings className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Platform Settings</h3>
                    <p className="text-muted-foreground mb-4">
                      Configure API keys, integrations, and platform preferences
                    </p>
                    <Button>Configure Settings</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Admin;