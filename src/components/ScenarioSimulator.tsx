import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Plus, Copy, Download, TrendingUp, TrendingDown, Minus, Calculator } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface Scenario {
  id: string;
  name: string;
  baseForecast: string;
  variables: {
    demandGrowth: number;
    automationRate: number;
    regulationChange: number;
  };
  results: {
    skillDemand: { [skill: string]: number };
    hiringNeeds: number;
    costProjection: number;
  };
  createdAt: string;
}

const ScenarioSimulator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scenarios, setScenarios] = useState<Scenario[]>([
    {
      id: 'base',
      name: 'Base Scenario',
      baseForecast: 'Current Market Trends',
      variables: {
        demandGrowth: 10,
        automationRate: 5,
        regulationChange: 0
      },
      results: {
        skillDemand: {
          'Python': 85,
          'Machine Learning': 78,
          'Data Analysis': 72,
          'Project Management': 65
        },
        hiringNeeds: 150,
        costProjection: 2500000
      },
      createdAt: new Date().toISOString()
    }
  ]);

  const [currentScenario, setCurrentScenario] = useState<Partial<Scenario>>({
    name: '',
    variables: {
      demandGrowth: 10,
      automationRate: 5,
      regulationChange: 0
    }
  });

  const { toast } = useToast();

  const handleVariableChange = (variable: string, value: number) => {
    setCurrentScenario(prev => ({
      ...prev,
      variables: {
        ...prev.variables!,
        [variable]: value
      }
    }));
  };

  const createScenario = () => {
    if (!currentScenario.name) {
      toast({
        title: "Error",
        description: "Please enter a scenario name.",
        variant: "destructive",
      });
      return;
    }

    const newScenario: Scenario = {
      id: Date.now().toString(),
      name: currentScenario.name,
      baseForecast: 'Current Market Trends',
      variables: currentScenario.variables!,
      results: {
        skillDemand: {
          'Python': 85 + currentScenario.variables!.demandGrowth,
          'Machine Learning': 78 + currentScenario.variables!.demandGrowth,
          'Data Analysis': 72 + currentScenario.variables!.demandGrowth,
          'Project Management': 65 + currentScenario.variables!.demandGrowth
        },
        hiringNeeds: 150 + (currentScenario.variables!.demandGrowth * 2),
        costProjection: 2500000 + (currentScenario.variables!.demandGrowth * 100000)
      },
      createdAt: new Date().toISOString()
    };

    setScenarios(prev => [...prev, newScenario]);
    setCurrentScenario({
      name: '',
      variables: {
        demandGrowth: 10,
        automationRate: 5,
        regulationChange: 0
      }
    });

    toast({
      title: "Scenario Created",
      description: `${newScenario.name} has been created successfully.`,
    });
  };

  const cloneScenario = (scenarioId: string) => {
    const scenario = scenarios.find(s => s.id === scenarioId);
    if (scenario) {
      const cloned = {
        ...scenario,
        id: Date.now().toString(),
        name: `${scenario.name} (Copy)`,
        createdAt: new Date().toISOString()
      };
      setScenarios(prev => [...prev, cloned]);

      toast({
        title: "Scenario Cloned",
        description: `${cloned.name} has been created.`,
      });
    }
  };

  const deleteScenario = (scenarioId: string) => {
    setScenarios(prev => prev.filter(s => s.id !== scenarioId));

    toast({
      title: "Scenario Deleted",
      description: "Scenario has been removed.",
    });
  };

  const exportScenario = (scenarioId: string) => {
    const scenario = scenarios.find(s => s.id === scenarioId);
    if (scenario) {
      const dataStr = JSON.stringify(scenario, null, 2);
      const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

      const exportFileDefaultName = `${scenario.name.toLowerCase().replace(/\s+/g, '-')}-scenario.json`;

      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();

      toast({
        title: "Export Complete",
        description: "Scenario data has been downloaded.",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Calculator className="w-4 h-4 mr-2" />
          Scenario Simulator
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Scenario Simulator
          </DialogTitle>
          <DialogDescription>
            Create and compare different market scenarios to plan your hiring strategy
          </DialogDescription>
        </DialogHeader>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Scenario Builder */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  Create New Scenario
                </CardTitle>
                <CardDescription>
                  Adjust market variables to see how they impact skill demand
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="scenario-name">Scenario Name</Label>
                  <input
                    id="scenario-name"
                    type="text"
                    placeholder="e.g., High Growth Scenario"
                    value={currentScenario.name || ''}
                    onChange={(e) => setCurrentScenario(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-input rounded-md focus:ring-2 focus:ring-ring focus:border-transparent bg-background"
                  />
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Demand Growth Rate</Label>
                      <span className="text-sm text-muted-foreground">{currentScenario.variables?.demandGrowth}%</span>
                    </div>
                    <Slider
                      value={[currentScenario.variables?.demandGrowth || 10]}
                      onValueChange={(value) => handleVariableChange('demandGrowth', value[0])}
                      max={50}
                      min={-20}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Decline (-20%)</span>
                      <span>Growth (50%)</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Automation Adoption Rate</Label>
                      <span className="text-sm text-muted-foreground">{currentScenario.variables?.automationRate}%</span>
                    </div>
                    <Slider
                      value={[currentScenario.variables?.automationRate || 5]}
                      onValueChange={(value) => handleVariableChange('automationRate', value[0])}
                      max={30}
                      min={0}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Slow (0%)</span>
                      <span>Rapid (30%)</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Regulation Impact</Label>
                      <span className="text-sm text-muted-foreground">{currentScenario.variables?.regulationChange}%</span>
                    </div>
                    <Slider
                      value={[currentScenario.variables?.regulationChange || 0]}
                      onValueChange={(value) => handleVariableChange('regulationChange', value[0])}
                      max={20}
                      min={-10}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Restrictive (-10%)</span>
                      <span>Supportive (20%)</span>
                    </div>
                  </div>
                </div>

                <Button onClick={createScenario} className="w-full">
                  Create Scenario
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Scenario Comparison */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Scenario Comparison
                </CardTitle>
                <CardDescription>
                  Compare different scenarios side by side
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {scenarios.map((scenario) => (
                  <div key={scenario.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold">{scenario.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          Based on {scenario.baseForecast}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => cloneScenario(scenario.id)}
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => exportScenario(scenario.id)}
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                        {scenario.id !== 'base' && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => deleteScenario(scenario.id)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-3">
                      <div className="text-center">
                        <div className="text-sm font-medium">Demand Growth</div>
                        <div className={`text-lg font-bold ${
                          scenario.variables.demandGrowth > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {scenario.variables.demandGrowth > 0 ? '+' : ''}{scenario.variables.demandGrowth}%
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium">Automation</div>
                        <div className="text-lg font-bold text-blue-600">
                          {scenario.variables.automationRate}%
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium">Hiring Need</div>
                        <div className="text-lg font-bold text-purple-600">
                          {scenario.results.hiringNeeds}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm font-medium">Top Skills Impact:</div>
                      <div className="flex flex-wrap gap-2">
                        {Object.entries(scenario.results.skillDemand).slice(0, 3).map(([skill, demand]) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}: {demand}%
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t">
                      <div className="text-sm text-muted-foreground">
                        Cost Projection: Rp {scenario.results.costProjection.toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))}

                {scenarios.length > 1 && (
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <div className="text-sm font-medium mb-2">Comparison Summary:</div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Best Case:</span>
                        <div className="font-medium text-green-600">
                          +{Math.max(...scenarios.map(s => s.variables.demandGrowth))}% growth
                        </div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Worst Case:</span>
                        <div className="font-medium text-red-600">
                          {Math.min(...scenarios.map(s => s.variables.demandGrowth))}% growth
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ScenarioSimulator;