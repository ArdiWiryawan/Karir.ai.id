import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CareerBlueprint } from "@/data/comprehensiveCareerBreakdown";
import { Clock, TrendingUp, DollarSign, AlertTriangle, Shield } from "lucide-react";

interface CareerBlueprintCardProps {
  blueprint: CareerBlueprint;
  onViewDetails?: () => void;
}

const CareerBlueprintCard = ({ blueprint, onViewDetails }: CareerBlueprintCardProps) => {
  const getRiskColor = (risk: number) => {
    if (risk >= 70) return "text-red-500 bg-red-50 border-red-200";
    if (risk >= 30) return "text-yellow-500 bg-yellow-50 border-yellow-200";
    return "text-green-500 bg-green-50 border-green-200";
  };

  const getRiskIcon = (risk: number) => {
    if (risk >= 70) return AlertTriangle;
    return Shield;
  };

  const RiskIcon = getRiskIcon(blueprint.aiRisk);

  return (
    <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 h-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2">{blueprint.profession}</CardTitle>
            <CardDescription className="text-base">{blueprint.category}</CardDescription>
          </div>
          <Badge variant="outline" className={getRiskColor(blueprint.aiRisk)}>
            <RiskIcon className="w-3 h-3 mr-1" />
            {blueprint.aiRisk}% AI Risk
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* AI Risk Visualization */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">AI Replacement Risk</span>
            <span className="text-sm font-semibold">{blueprint.aiRisk}%</span>
          </div>
          <Progress 
            value={blueprint.aiRisk} 
            className={`h-2 ${
              blueprint.aiRisk >= 70 ? '[&>div]:bg-red-500' :
              blueprint.aiRisk >= 30 ? '[&>div]:bg-yellow-500' :
              '[&>div]:bg-green-500'
            }`}
          />
          <div className="text-xs text-muted-foreground">{blueprint.riskLevel}</div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-muted-foreground" />
            <div>
              <div className="text-sm font-medium">{blueprint.salaryRange}</div>
              <div className="text-xs text-muted-foreground">Salary Range</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
            <div>
              <div className="text-sm font-medium">{blueprint.growth}</div>
              <div className="text-xs text-muted-foreground">Growth</div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div>
          <h4 className="font-semibold mb-2">Ringkasan AI Impact</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {blueprint.summary}
          </p>
        </div>

        {/* Learning Phases Preview */}
        <div>
          <h4 className="font-semibold mb-3">Learning Roadmap ({blueprint.phases.length} Fase)</h4>
          <div className="space-y-2">
            {blueprint.phases.slice(0, 2).map((phase, index) => (
              <div key={index} className="flex items-center gap-3 p-2 bg-muted/30 rounded-lg">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{phase.title}</div>
                  <div className="text-xs text-muted-foreground">{phase.duration}</div>
                </div>
              </div>
            ))}
            {blueprint.phases.length > 2 && (
              <div className="text-xs text-muted-foreground text-center">
                +{blueprint.phases.length - 2} fase lainnya
              </div>
            )}
          </div>
        </div>

        {/* Timeline */}
        <div className="flex items-center gap-2 pt-4 border-t border-border/50">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Timeline: {blueprint.timeline}</span>
        </div>

        {/* Action Button */}
        <Button 
          onClick={onViewDetails}
          className="w-full"
          variant={blueprint.aiRisk >= 70 ? "destructive" : "default"}
        >
          {blueprint.aiRisk >= 70 ? "Lihat Transition Path" : "Lihat Blueprint Lengkap"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default CareerBlueprintCard;