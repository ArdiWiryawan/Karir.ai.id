import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  UserPlus, 
  GraduationCap, 
  Eye, 
  ArrowRight,
  ExternalLink,
  FileText,
  Calendar
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SkillInsight {
  skill: string;
  action: "hire" | "train" | "monitor";
  priority: "high" | "medium" | "low";
  reason: string;
  resources?: {
    title: string;
    url: string;
    type: "course" | "article" | "tool";
  }[];
  estimatedImpact?: string;
}

interface ActionableInsightsProps {
  insights: SkillInsight[];
  onCreatePlan?: () => void;
  onExportRecommendations?: () => void;
}

const actionConfig = {
  hire: {
    icon: UserPlus,
    label: "Rekrut Talent",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20"
  },
  train: {
    icon: GraduationCap,
    label: "Upskill Team",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/20"
  },
  monitor: {
    icon: Eye,
    label: "Monitor Trend",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20"
  }
};

const priorityConfig = {
  high: { label: "High Priority", variant: "destructive" as const },
  medium: { label: "Medium Priority", variant: "secondary" as const },
  low: { label: "Low Priority", variant: "outline" as const }
};

export const ActionableInsights = ({ 
  insights, 
  onCreatePlan,
  onExportRecommendations 
}: ActionableInsightsProps) => {
  // Sort by priority
  const sortedInsights = [...insights].sort((a, b) => {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });
  
  const topInsights = sortedInsights.slice(0, 3);
  
  return (
    <Card className="w-full border-2 border-primary/20 shadow-future">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <CardTitle>Rekomendasi Aksi Prioritas</CardTitle>
            </div>
            <CardDescription>
              Langkah konkret berdasarkan hasil prediksi skill — urut berdasarkan impact tertinggi
            </CardDescription>
          </div>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="secondary" className="cursor-help">
                  Top {topInsights.length}
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">Menampilkan {topInsights.length} aksi dengan prioritas tertinggi</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Insight Cards */}
        <div className="space-y-3">
          {topInsights.map((insight, index) => {
            const actionStyle = actionConfig[insight.action];
            const Icon = actionStyle.icon;
            const priorityStyle = priorityConfig[insight.priority];
            
            return (
              <Card 
                key={index}
                className={`border-2 ${actionStyle.borderColor} hover:shadow-md transition-all`}
              >
                <CardContent className="p-4">
                  <div className="space-y-3">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-lg ${actionStyle.bgColor} flex items-center justify-center`}>
                          <Icon className={`w-6 h-6 ${actionStyle.color}`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">{insight.skill}</h4>
                          <p className={`text-sm ${actionStyle.color} font-medium`}>
                            {actionStyle.label}
                          </p>
                        </div>
                      </div>
                      <Badge variant={priorityStyle.variant} className="text-xs">
                        {priorityStyle.label}
                      </Badge>
                    </div>
                    
                    {/* Reason */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {insight.reason}
                    </p>
                    
                    {/* Estimated Impact */}
                    {insight.estimatedImpact && (
                      <div className="flex items-center gap-2 text-xs bg-muted/50 rounded-lg p-2">
                        <TrendingUp className="w-3 h-3 text-secondary" />
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Estimated Impact:</strong> {insight.estimatedImpact}
                        </span>
                      </div>
                    )}
                    
                    {/* Resources */}
                    {insight.resources && insight.resources.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-xs font-medium text-muted-foreground">
                          Sumber Pembelajaran Rekomendasi:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {insight.resources.map((resource, idx) => (
                            <a
                              key={idx}
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 rounded-lg transition-colors"
                            >
                              {resource.type === "course" && <GraduationCap className="w-3 h-3" />}
                              {resource.type === "article" && <FileText className="w-3 h-3" />}
                              {resource.title}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
          <Button 
            onClick={onCreatePlan}
            className="flex-1 group"
            size="lg"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Buat Hiring Plan
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline"
            onClick={onExportRecommendations}
            className="flex-1"
            size="lg"
          >
            <FileText className="w-4 h-4 mr-2" />
            Export Recommendations
          </Button>
        </div>
        
        {/* Additional Help */}
        <div className="bg-muted/30 rounded-lg p-3 text-xs text-muted-foreground text-center">
          💡 Rekomendasi ini diprioritaskan berdasarkan ROI, urgency, dan feasibility untuk organisasi Anda
        </div>
      </CardContent>
    </Card>
  );
};
