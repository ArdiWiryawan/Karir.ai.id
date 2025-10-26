import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SubscriptionManager from '@/components/SubscriptionManager';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, CreditCard, Gift, Star, TrendingUp, Users } from 'lucide-react';

const Subscription = () => {
  const [activeTab, setActiveTab] = useState('manage');

  const features = [
    {
      icon: TrendingUp,
      title: 'Monthly Industry Reports',
      description: 'Comprehensive analysis of market trends and skill demands',
      included: true
    },
    {
      icon: Calendar,
      title: 'Weekly Skill Updates',
      description: 'Latest emerging skills and technology trends',
      included: true
    },
    {
      icon: Users,
      title: 'Priority Support',
      description: '24/7 access to career advisors and technical support',
      included: true
    },
    {
      icon: Gift,
      title: 'Exclusive Webinars',
      description: 'Monthly sessions with industry experts and thought leaders',
      included: false
    },
    {
      icon: Star,
      title: 'Advanced Analytics',
      description: 'Deep insights into career trajectories and market positioning',
      included: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Subscription Management</h1>
            <p className="text-muted-foreground">
              Manage your subscription, preferences, and access premium features
            </p>
          </div>

          {/* Current Plan Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Current Plan: Professional
              </CardTitle>
              <CardDescription>
                You're on the Professional plan with monthly industry reports and advanced features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Rp 99.000</div>
                  <div className="text-sm text-muted-foreground">per month</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">38</div>
                  <div className="text-sm text-muted-foreground">reports used</div>
                  <div className="text-xs text-muted-foreground">of 50 available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">12 days</div>
                  <div className="text-sm text-muted-foreground">until renewal</div>
                  <div className="text-xs text-muted-foreground">Feb 1, 2025</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="manage">Manage Subscription</TabsTrigger>
              <TabsTrigger value="reports">Download Reports</TabsTrigger>
              <TabsTrigger value="billing">Billing History</TabsTrigger>
            </TabsList>

            <TabsContent value="manage">
              <SubscriptionManager />
            </TabsContent>

            <TabsContent value="reports" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Available Reports</CardTitle>
                  <CardDescription>
                    Download your subscribed reports and insights
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        <div>
                          <div className="font-medium">Technology Industry Report</div>
                          <div className="text-sm text-muted-foreground">January 2025</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Download PDF</Button>
                        <Button variant="outline" size="sm">Download Excel</Button>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Users className="w-5 h-5 text-secondary" />
                        <div>
                          <div className="font-medium">AI Skills Forecast</div>
                          <div className="text-sm text-muted-foreground">Annual 2025</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Download PDF</Button>
                        <Button variant="outline" size="sm">Download Excel</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="billing" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Billing History</CardTitle>
                  <CardDescription>
                    View and download your past invoices
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <div className="font-medium">Professional Plan - January 2025</div>
                        <div className="text-sm text-muted-foreground">Jan 1, 2025</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">Rp 99.000</div>
                        <div className="flex gap-2 mt-2">
                          <Button variant="outline" size="sm">Download Invoice</Button>
                          <Badge variant="default">Paid</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <div className="font-medium">Professional Plan - December 2024</div>
                        <div className="text-sm text-muted-foreground">Dec 1, 2024</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">Rp 99.000</div>
                        <div className="flex gap-2 mt-2">
                          <Button variant="outline" size="sm">Download Invoice</Button>
                          <Badge variant="default">Paid</Badge>
                        </div>
                      </div>
                    </div>
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

export default Subscription;