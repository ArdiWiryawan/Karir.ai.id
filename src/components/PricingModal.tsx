import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { CheckCircle, Star, Zap, Crown, Users, TrendingUp, Shield, BookOpen } from 'lucide-react';

const PricingModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const plans = [
    {
      name: 'Free',
      price: 'Rp 0',
      period: '/month',
      description: 'Perfect for individual career planning',
      icon: Users,
      features: [
        '5 career forecasts per month',
        'Basic AI impact analysis',
        'Standard skill roadmap',
        'Community support',
        'Basic CV builder'
      ],
      limitations: [
        'Limited to 5 forecasts',
        'Basic insights only',
        'No advanced analytics'
      ],
      cta: 'Get Started Free',
      popular: false,
      color: 'text-muted-foreground'
    },
    {
      name: 'Professional',
      price: 'Rp 99.000',
      period: '/month',
      description: 'For serious career development',
      icon: TrendingUp,
      features: [
        'Unlimited career forecasts',
        'Advanced AI impact analysis',
        'Detailed skill roadmaps',
        'Priority support',
        'Advanced CV builder with ATS optimization',
        'Interview preparation tools',
        'Monthly industry reports',
        'Scenario simulator',
        'Export reports (PDF/Excel)'
      ],
      limitations: [],
      cta: 'Start Free Trial',
      popular: true,
      color: 'text-primary'
    },
    {
      name: 'Enterprise',
      price: 'Rp 299.000',
      period: '/month',
      description: 'For teams and organizations',
      icon: Crown,
      features: [
        'Everything in Professional',
        'Internal talent bench dashboard',
        'HRIS integration',
        'Team collaboration tools',
        'Custom reporting',
        'API access',
        'Dedicated account manager',
        'Training workshops',
        'Bulk user management',
        'Advanced analytics dashboard'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false,
      color: 'text-secondary'
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Crown className="w-4 h-4 mr-2" />
          Upgrade Plans
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Choose Your Plan
          </DialogTitle>
          <DialogDescription className="text-center">
            Unlock advanced features to accelerate your career growth
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card
                key={plan.name}
                className={`relative transition-all duration-300 hover:shadow-lg ${
                  plan.popular
                    ? 'border-primary shadow-primary/20 scale-105'
                    : 'hover:border-primary/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-white px-3 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className={`w-12 h-12 mx-auto rounded-lg flex items-center justify-center mb-4 ${
                    plan.popular ? 'bg-primary/10' : 'bg-muted'
                  }`}>
                    <Icon className={`w-6 h-6 ${plan.color}`} />
                  </div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-green-600 mb-2">✓ What's included:</div>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {plan.limitations.length > 0 && (
                    <div className="space-y-2 pt-2 border-t">
                      <div className="text-sm font-medium text-muted-foreground mb-2">⚠ Limitations:</div>
                      {plan.limitations.map((limitation, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-4 h-4 rounded-full border border-muted-foreground mt-0.5 flex-shrink-0" />
                          <span>{limitation}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <Button
                    className={`w-full mt-6 ${
                      plan.popular
                        ? 'bg-primary hover:bg-primary/90'
                        : 'variant-outline'
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>

                  {plan.name === 'Professional' && (
                    <p className="text-xs text-center text-muted-foreground mt-2">
                      7-day free trial • Cancel anytime
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 p-4 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-semibold">Why upgrade?</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Professional and Enterprise plans include advanced features like scenario simulation,
            internal talent mapping, and priority support to help you make better career decisions faster.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PricingModal;