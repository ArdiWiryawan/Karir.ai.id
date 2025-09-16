import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CareerBlueprint, BlueprintSkill } from "@/data/comprehensiveCareerBreakdown";
import { 
  Clock, 
  TrendingUp, 
  DollarSign, 
  AlertTriangle, 
  Shield, 
  Target,
  Lightbulb,
  BookOpen,
  Star,
  ArrowRight
} from "lucide-react";

interface CareerBlueprintDetailProps {
  blueprint: CareerBlueprint;
  onStartLearning?: () => void;
}

const CareerBlueprintDetail = ({ blueprint, onStartLearning }: CareerBlueprintDetailProps) => {
  const getRiskColor = (risk: number) => {
    if (risk >= 70) return "text-red-500 bg-red-50 border-red-200";
    if (risk >= 30) return "text-yellow-500 bg-yellow-50 border-yellow-200";
    return "text-green-500 bg-green-50 border-green-200";
  };

  const getSkillTypeColor = (type: 'Hard Skill' | 'Soft Skill') => {
    return type === 'Hard Skill' 
      ? 'bg-blue-100 text-blue-800 border-blue-200'
      : 'bg-purple-100 text-purple-800 border-purple-200';
  };

  const getImportanceStars = (importance: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-3 h-3 ${i < importance / 2 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="space-y-8">
      {/* Header Card - Orientasi Strategis */}
      <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl md:text-3xl font-bold mb-2">
                Blueprint Karir: {blueprint.profession}
              </CardTitle>
              <CardDescription className="text-lg">
                {blueprint.category}
              </CardDescription>
            </div>
            <div className="text-right space-y-2">
              <Badge className={getRiskColor(blueprint.aiRisk)}>
                {blueprint.riskLevel}
              </Badge>
              <div className="text-sm text-muted-foreground">{blueprint.timeline}</div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* AI Risk Analysis */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">AI Impact Analysis</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">AI Replacement Risk</span>
                  <span className="text-sm font-semibold">{blueprint.aiRisk}%</span>
                </div>
                <Progress 
                  value={blueprint.aiRisk} 
                  className={`h-3 ${
                    blueprint.aiRisk >= 70 ? '[&>div]:bg-red-500' :
                    blueprint.aiRisk >= 30 ? '[&>div]:bg-yellow-500' :
                    '[&>div]:bg-green-500'
                  }`}
                />
                <p className="text-sm text-muted-foreground">{blueprint.summary}</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Career Metrics</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Gaji: {blueprint.salaryRange}</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-sm">Pertumbuhan: {blueprint.growth}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="text-sm">Timeline: {blueprint.timeline}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Learning Roadmap */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            🗺️ Peta Jalan Pembelajaran
          </h2>
          <p className="text-lg text-muted-foreground">
            Roadmap terstruktur dengan kombinasi Hard Skills dan Soft Skills
          </p>
        </div>

        {blueprint.phases.map((phase, phaseIndex) => (
          <Card key={phaseIndex} className="border-border/50">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {phaseIndex + 1}
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl">{phase.phase}</CardTitle>
                  <CardDescription className="text-base mt-1">{phase.title}</CardDescription>
                </div>
                <div className="text-right">
                  <Badge variant="outline">
                    <Clock className="w-3 h-3 mr-1" />
                    {phase.duration}
                  </Badge>
                </div>
              </div>
              <div className="ml-16">
                <p className="text-muted-foreground">{phase.objective}</p>
              </div>
            </CardHeader>

            <CardContent className="ml-16 space-y-4">
              {/* Skills Table */}
              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  Skills yang Dipelajari ({phase.skills.length})
                </h4>
                
                <div className="space-y-4">
                  {phase.skills.map((skill, skillIndex) => (
                    <Card key={skillIndex} className="border-border/30">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <span className="text-lg">{skill.icon}</span>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold">{skill.name}</span>
                                <Badge variant="outline" className={getSkillTypeColor(skill.type)}>
                                  {skill.type}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-1">
                                {getImportanceStars(skill.importance)}
                                <span className="text-xs text-muted-foreground ml-1">
                                  Importance: {skill.importance}/10
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">{skill.timeToMaster}</div>
                            {skill.aiProofLevel && (
                              <div className="text-xs text-green-600">
                                AI-Proof: {skill.aiProofLevel}%
                              </div>
                            )}
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground mb-3">
                          {skill.description}
                        </p>

                        {/* Core Concepts */}
                        <div className="mb-3">
                          <div className="text-xs font-medium text-muted-foreground mb-2">
                            Konsep Kunci:
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {skill.concepts.map((concept, conceptIndex) => (
                              <Badge key={conceptIndex} variant="secondary" className="text-xs">
                                {concept}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Learning Path */}
                        {skill.learningPath && (
                          <div className="flex items-center gap-2 text-xs text-primary">
                            <BookOpen className="w-3 h-3" />
                            <span>Recommended: {skill.learningPath}</span>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Key Insights */}
      <Card className="border-accent/20 bg-gradient-to-r from-accent/5 to-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-accent" />
            Key Insights & Market Drivers
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">💡 Key Insights</h4>
            <ul className="space-y-1">
              {blueprint.keyInsights.map((insight, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>{insight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">📈 Market Drivers</h4>
            <ul className="space-y-1">
              {blueprint.marketDrivers.map((driver, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{driver}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Transition Paths for High-Risk Jobs */}
          {blueprint.transitionPaths && (
            <div>
              <h4 className="font-semibold mb-2">🔄 Recommended Transition Paths</h4>
              <div className="flex flex-wrap gap-2">
                {blueprint.transitionPaths.map((path, index) => (
                  <Badge key={index} variant="outline" className="border-green-300 text-green-700">
                    {path}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="bg-gradient-hero text-white border-0">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-bold mb-2">
            🚀 Siap Memulai Journey Anda?
          </h3>
          <p className="mb-4 opacity-90">
            {blueprint.aiRisk >= 70 
              ? "Mulai transition path untuk mengamankan masa depan karier Anda"
              : "Ikuti roadmap lengkap untuk menguasai profesi masa depan ini"
            }
          </p>
          <Button 
            onClick={onStartLearning}
            size="lg" 
            className="bg-white text-primary hover:bg-white/90"
          >
            {blueprint.aiRisk >= 70 ? "Mulai Transition Plan" : "Mulai Learning Path"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CareerBlueprintDetail;