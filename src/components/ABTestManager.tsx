import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import {
  TestTube,
  Play,
  Pause,
  Square,
  TrendingUp,
  TrendingDown,
  Users,
  Target,
  Eye,
  MousePointer,
  Clock,
  Award,
  AlertCircle
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface ABTest {
  id: string;
  name: string;
  description: string;
  status: 'draft' | 'running' | 'paused' | 'completed';
  type: 'hero-cta' | 'preview' | 'pricing' | 'onboarding';
  variants: {
    id: string;
    name: string;
    content: {
      headline?: string;
      subheadline?: string;
      ctaText?: string;
      ctaColor?: string;
      previewText?: string;
    };
    traffic: number;
    conversions: number;
    conversionRate: number;
  }[];
  startDate: string;
  endDate?: string;
  totalVisitors: number;
  totalConversions: number;
  confidence: number;
  winner?: string;
}

const ABTestManager = () => {
  const [tests, setTests] = useState<ABTest[]>([
    {
      id: 'hero-cta-v1',
      name: 'Hero CTA Copy Test',
      description: 'Testing different CTA text variations on hero section',
      status: 'running',
      type: 'hero-cta',
      variants: [
        {
          id: 'control',
          name: 'Control',
          content: {
            headline: 'Prediksi Kebutuhan Skill 6–12 Bulan',
            ctaText: 'Mulai Roadmap Masa Depan (Gratis)',
            ctaColor: '#0B63E6'
          },
          traffic: 1250,
          conversions: 156,
          conversionRate: 12.5
        },
        {
          id: 'variant-a',
          name: 'Variant A',
          content: {
            headline: 'AI-Powered Skill Forecasting',
            ctaText: 'Coba Sekarang - Gratis!',
            ctaColor: '#10B981'
          },
          traffic: 1180,
          conversions: 189,
          conversionRate: 16.0
        }
      ],
      startDate: '2025-01-15',
      totalVisitors: 2430,
      totalConversions: 345,
      confidence: 95,
      winner: 'variant-a'
    },
    {
      id: 'preview-engagement',
      name: 'Interactive Preview Test',
      description: 'Testing preview engagement vs no preview',
      status: 'completed',
      type: 'preview',
      variants: [
        {
          id: 'no-preview',
          name: 'No Preview',
          content: {},
          traffic: 800,
          conversions: 64,
          conversionRate: 8.0
        },
        {
          id: 'with-preview',
          name: 'With Preview',
          content: {
            previewText: 'Try Interactive Preview - Enter your role to see instant insights'
          },
          traffic: 820,
          conversions: 131,
          conversionRate: 16.0
        }
      ],
      startDate: '2025-01-01',
      endDate: '2025-01-14',
      totalVisitors: 1620,
      totalConversions: 195,
      confidence: 99,
      winner: 'with-preview'
    }
  ]);

  const [newTest, setNewTest] = useState<Partial<ABTest>>({
    name: '',
    description: '',
    type: 'hero-cta',
    variants: [
      {
        id: 'control',
        name: 'Control',
        content: {},
        traffic: 50,
        conversions: 0,
        conversionRate: 0
      },
      {
        id: 'variant-a',
        name: 'Variant A',
        content: {},
        traffic: 50,
        conversions: 0,
        conversionRate: 0
      }
    ]
  });

  const { toast } = useToast();

  const handleTestAction = (testId: string, action: 'start' | 'pause' | 'stop') => {
    setTests(prev => prev.map(test => {
      if (test.id === testId) {
        let newStatus: ABTest['status'] = test.status;
        switch (action) {
          case 'start':
            newStatus = 'running';
            break;
          case 'pause':
            newStatus = 'paused';
            break;
          case 'stop':
            newStatus = 'completed';
            break;
        }
        return { ...test, status: newStatus };
      }
      return test;
    }));

    toast({
      title: `Test ${action}ed`,
      description: `A/B test has been ${action}ed successfully.`,
    });
  };

  const createTest = () => {
    if (!newTest.name || !newTest.description) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const test: ABTest = {
      id: Date.now().toString(),
      name: newTest.name,
      description: newTest.description,
      status: 'draft',
      type: newTest.type as ABTest['type'],
      variants: newTest.variants!,
      startDate: new Date().toISOString().split('T')[0],
      totalVisitors: 0,
      totalConversions: 0,
      confidence: 0
    };

    setTests(prev => [...prev, test]);
    setNewTest({
      name: '',
      description: '',
      type: 'hero-cta',
      variants: [
        {
          id: 'control',
          name: 'Control',
          content: {},
          traffic: 50,
          conversions: 0,
          conversionRate: 0
        },
        {
          id: 'variant-a',
          name: 'Variant A',
          content: {},
          traffic: 50,
          conversions: 0,
          conversionRate: 0
        }
      ]
    });

    toast({
      title: "Test Created",
      description: "New A/B test has been created successfully.",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'bg-green-100 text-green-800';
      case 'paused': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'hero-cta': return Target;
      case 'preview': return Eye;
      case 'pricing': return MousePointer;
      case 'onboarding': return Users;
      default: return TestTube;
    }
  };

  return (
    <div className="space-y-6">
      {/* Create New Test */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TestTube className="w-5 h-5" />
            Create New A/B Test
          </CardTitle>
          <CardDescription>
            Set up a new experiment to optimize user experience
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="test-name">Test Name</Label>
              <Input
                id="test-name"
                placeholder="e.g., Hero CTA Copy Test"
                value={newTest.name || ''}
                onChange={(e) => setNewTest(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="test-type">Test Type</Label>
              <Select value={newTest.type} onValueChange={(value) => setNewTest(prev => ({ ...prev, type: value as ABTest['type'] }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select test type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hero-cta">Hero CTA</SelectItem>
                  <SelectItem value="preview">Interactive Preview</SelectItem>
                  <SelectItem value="pricing">Pricing Modal</SelectItem>
                  <SelectItem value="onboarding">Onboarding Flow</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="test-description">Description</Label>
            <Textarea
              id="test-description"
              placeholder="Describe what you're testing and why..."
              value={newTest.description || ''}
              onChange={(e) => setNewTest(prev => ({ ...prev, description: e.target.value }))}
              rows={3}
            />
          </div>

          <div className="space-y-4">
            <Label>Variants</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4">
                <div className="font-medium mb-2">Control</div>
                <div className="space-y-2 text-sm">
                  <div>
                    <Label className="text-xs">Headline</Label>
                    <Input placeholder="Original headline" />
                  </div>
                  <div>
                    <Label className="text-xs">CTA Text</Label>
                    <Input placeholder="Original CTA text" />
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="font-medium mb-2">Variant A</div>
                <div className="space-y-2 text-sm">
                  <div>
                    <Label className="text-xs">Headline</Label>
                    <Input placeholder="New headline variation" />
                  </div>
                  <div>
                    <Label className="text-xs">CTA Text</Label>
                    <Input placeholder="New CTA text" />
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <Button onClick={createTest} className="w-full">
            Create Test
          </Button>
        </CardContent>
      </Card>

      {/* Active Tests */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            A/B Tests
          </CardTitle>
          <CardDescription>
            Monitor and manage your active experiments
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {tests.map((test) => {
            const TypeIcon = getTypeIcon(test.type);
            const bestVariant = test.variants.reduce((best, current) =>
              current.conversionRate > best.conversionRate ? current : best
            );

            return (
              <div key={test.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <TypeIcon className="w-5 h-5 text-primary" />
                    <div>
                      <h3 className="font-semibold">{test.name}</h3>
                      <p className="text-sm text-muted-foreground">{test.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getStatusColor(test.status)}>
                      {test.status}
                    </Badge>
                    {test.winner && (
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        <Award className="w-3 h-3 mr-1" />
                        Winner: {test.winner}
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-sm font-medium">Total Visitors</div>
                    <div className="text-lg font-bold">{test.totalVisitors.toLocaleString()}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium">Conversions</div>
                    <div className="text-lg font-bold">{test.totalConversions}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium">Best Rate</div>
                    <div className="text-lg font-bold text-green-600">
                      {bestVariant.conversionRate}%
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium">Confidence</div>
                    <div className="text-lg font-bold">{test.confidence}%</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-sm font-medium">Variants Performance:</div>
                  {test.variants.map((variant) => (
                    <div key={variant.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${
                          variant.id === test.winner ? 'bg-green-500' : 'bg-gray-400'
                        }`} />
                        <div>
                          <div className="font-medium">{variant.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {variant.traffic.toLocaleString()} visitors
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{variant.conversionRate}%</div>
                        <div className="text-sm text-muted-foreground">
                          {variant.conversions} conversions
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2 mt-4">
                  {test.status === 'draft' && (
                    <Button size="sm" onClick={() => handleTestAction(test.id, 'start')}>
                      <Play className="w-4 h-4 mr-1" />
                      Start Test
                    </Button>
                  )}
                  {test.status === 'running' && (
                    <>
                      <Button variant="outline" size="sm" onClick={() => handleTestAction(test.id, 'pause')}>
                        <Pause className="w-4 h-4 mr-1" />
                        Pause
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleTestAction(test.id, 'stop')}>
                        <Square className="w-4 h-4 mr-1" />
                        Stop
                      </Button>
                    </>
                  )}
                  {test.status === 'paused' && (
                    <Button size="sm" onClick={() => handleTestAction(test.id, 'start')}>
                      <Play className="w-4 h-4 mr-1" />
                      Resume
                    </Button>
                  )}
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Test Templates */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            Test Templates
          </CardTitle>
          <CardDescription>
            Pre-configured tests for common optimization scenarios
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4 cursor-pointer hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-5 h-5 text-primary" />
                <div className="font-medium">Hero CTA Copy Test</div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Test different headline and CTA text combinations
              </p>
              <Button variant="outline" size="sm">Use Template</Button>
            </Card>

            <Card className="p-4 cursor-pointer hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <Eye className="w-5 h-5 text-secondary" />
                <div className="font-medium">Preview Engagement Test</div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Compare pages with and without interactive preview
              </p>
              <Button variant="outline" size="sm">Use Template</Button>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ABTestManager;