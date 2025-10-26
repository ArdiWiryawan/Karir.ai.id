import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Mail, Clock, CheckCircle, AlertCircle, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface EmailSequence {
  id: string;
  name: string;
  description: string;
  trigger: string;
  delay: string;
  status: 'active' | 'paused' | 'draft';
  openRate: string;
  clickRate: string;
  subject: string;
  preview: string;
}

const EmailAutomation = () => {
  const [sequences, setSequences] = useState<EmailSequence[]>([
    {
      id: 'welcome-series',
      name: 'Welcome Series',
      description: '3-email sequence for new users',
      trigger: 'User signup',
      delay: '0, 3, 7 days',
      status: 'active',
      openRate: '45%',
      clickRate: '12%',
      subject: 'Welcome to Karir AI! 🎯',
      preview: 'Selamat bergabung! Mari mulai dengan mengeksplorasi skill masa depan Anda...'
    },
    {
      id: 'engagement-boost',
      name: 'Engagement Boost',
      description: 'Re-engagement for inactive users',
      trigger: '7 days no activity',
      delay: '7, 14, 30 days',
      status: 'active',
      openRate: '38%',
      clickRate: '8%',
      subject: 'Kabar Skill Terbaru untuk Anda 📈',
      preview: 'Industri Anda berkembang pesat! Lihat update skill terbaru...'
    },
    {
      id: 'premium-upgrade',
      name: 'Premium Upgrade',
      description: 'Convert free users to paid',
      trigger: '5 forecasts completed',
      delay: '0, 7, 14 days',
      status: 'paused',
      openRate: '52%',
      clickRate: '15%',
      subject: 'Unlock Unlimited Career Insights 🚀',
      preview: 'Anda sudah membuat 5 forecast! Upgrade untuk insights tanpa batas...'
    }
  ]);

  const [preferences, setPreferences] = useState({
    welcomeEmails: true,
    weeklyInsights: true,
    monthlyReports: false,
    promotionalOffers: true,
    productUpdates: true
  });

  const { toast } = useToast();

  const handleSequenceToggle = (id: string) => {
    setSequences(prev => prev.map(seq =>
      seq.id === id
        ? { ...seq, status: seq.status === 'active' ? 'paused' : 'active' }
        : seq
    ));

    toast({
      title: "Sequence Updated",
      description: "Email sequence status has been updated successfully.",
    });
  };

  const handlePreferenceChange = (key: string, value: boolean) => {
    setPreferences(prev => ({ ...prev, [key]: value }));

    toast({
      title: "Preferences Updated",
      description: "Your email preferences have been saved.",
    });
  };

  const sendTestEmail = (sequenceId: string) => {
    toast({
      title: "Test Email Sent",
      description: "Test email has been sent to your inbox.",
    });
  };

  return (
    <div className="space-y-6">
      {/* Email Sequences */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Email Sequences
          </CardTitle>
          <CardDescription>
            Automated email campaigns to engage and convert users
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {sequences.map((sequence) => (
            <div key={sequence.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    sequence.status === 'active' ? 'bg-green-500' :
                    sequence.status === 'paused' ? 'bg-yellow-500' : 'bg-gray-400'
                  }`} />
                  <div>
                    <h3 className="font-semibold">{sequence.name}</h3>
                    <p className="text-sm text-muted-foreground">{sequence.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={sequence.status === 'active' ? 'default' : 'secondary'}>
                    {sequence.status}
                  </Badge>
                  <Switch
                    checked={sequence.status === 'active'}
                    onCheckedChange={() => handleSequenceToggle(sequence.id)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                <div className="text-center">
                  <div className="text-sm font-medium">Trigger</div>
                  <div className="text-xs text-muted-foreground">{sequence.trigger}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium">Delay</div>
                  <div className="text-xs text-muted-foreground">{sequence.delay}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium">Open Rate</div>
                  <div className="text-xs text-muted-foreground">{sequence.openRate}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium">Click Rate</div>
                  <div className="text-xs text-muted-foreground">{sequence.clickRate}</div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-3 mb-3">
                <div className="text-sm font-medium mb-1">Subject: {sequence.subject}</div>
                <div className="text-sm text-muted-foreground">{sequence.preview}</div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => sendTestEmail(sequence.id)}>
                  <Send className="w-4 h-4 mr-1" />
                  Send Test
                </Button>
                <Button variant="outline" size="sm">
                  Edit Template
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Email Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Email Preferences
          </CardTitle>
          <CardDescription>
            Manage what emails you receive from us
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-sm font-medium">Welcome Series</Label>
                <p className="text-xs text-muted-foreground">3-email onboarding sequence for new users</p>
              </div>
              <Switch
                checked={preferences.welcomeEmails}
                onCheckedChange={(checked) => handlePreferenceChange('welcomeEmails', checked)}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-sm font-medium">Weekly Career Insights</Label>
                <p className="text-xs text-muted-foreground">Latest skill trends and job market updates</p>
              </div>
              <Switch
                checked={preferences.weeklyInsights}
                onCheckedChange={(checked) => handlePreferenceChange('weeklyInsights', checked)}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-sm font-medium">Monthly Industry Reports</Label>
                <p className="text-xs text-muted-foreground">Comprehensive analysis of industry trends</p>
              </div>
              <Switch
                checked={preferences.monthlyReports}
                onCheckedChange={(checked) => handlePreferenceChange('monthlyReports', checked)}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-sm font-medium">Promotional Offers</Label>
                <p className="text-xs text-muted-foreground">Special discounts and premium features</p>
              </div>
              <Switch
                checked={preferences.promotionalOffers}
                onCheckedChange={(checked) => handlePreferenceChange('promotionalOffers', checked)}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-sm font-medium">Product Updates</Label>
                <p className="text-xs text-muted-foreground">New features and platform improvements</p>
              </div>
              <Switch
                checked={preferences.productUpdates}
                onCheckedChange={(checked) => handlePreferenceChange('productUpdates', checked)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Analytics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            Performance Analytics
          </CardTitle>
          <CardDescription>
            Track the effectiveness of your email campaigns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-primary">42%</div>
              <div className="text-sm text-muted-foreground">Avg Open Rate</div>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-secondary">11%</div>
              <div className="text-sm text-muted-foreground">Avg Click Rate</div>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-accent">3.2%</div>
              <div className="text-sm text-muted-foreground">Conversion Rate</div>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-primary">1,247</div>
              <div className="text-sm text-muted-foreground">Active Subscribers</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailAutomation;