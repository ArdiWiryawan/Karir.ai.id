import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Brain, TrendingUp, CheckCircle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface ForecastLoadingStateProps {
  estimatedTime?: number; // in seconds
  onComplete?: () => void;
}

const loadingSteps = [
  { id: 1, label: "Mengunggah data", icon: Database, duration: 3000 },
  { id: 2, label: "Menjalankan model prediksi", icon: Brain, duration: 6000 },
  { id: 3, label: "Menghasilkan laporan", icon: TrendingUp, duration: 3000 },
];

const loadingTips = [
  "Model kami dilatih pada 50.000+ lowongan kerja Indonesia",
  "Prediksi skill mencakup 500+ profesi masa depan",
  "Data diperbarui setiap bulan untuk akurasi maksimal",
  "Analisis kami membantu 12.470+ profesional merencanakan karier",
];

export const ForecastLoadingState = ({ estimatedTime = 12, onComplete }: ForecastLoadingStateProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [currentTip, setCurrentTip] = useState(0);
  
  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          onComplete?.();
          return 100;
        }
        return prev + (100 / estimatedTime) * 0.1;
      });
    }, 100);
    
    // Step progression
    let stepTime = 0;
    loadingSteps.forEach((step, index) => {
      stepTime += step.duration;
      setTimeout(() => {
        setCurrentStep(index + 1);
      }, stepTime);
    });
    
    // Rotate tips every 3 seconds
    const tipInterval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % loadingTips.length);
    }, 3000);
    
    return () => {
      clearInterval(progressInterval);
      clearInterval(tipInterval);
    };
  }, [estimatedTime, onComplete]);
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm">
      <Card className="w-full max-w-md mx-4 shadow-future">
        <CardContent className="pt-6 space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="w-16 h-16 mx-auto bg-gradient-hero rounded-full flex items-center justify-center animate-pulse">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Memproses Prediksi Skill</h3>
            <p className="text-sm text-muted-foreground">
              Estimasi waktu: ~{estimatedTime} detik
            </p>
          </div>
          
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          
          {/* Steps */}
          <div className="space-y-3" role="status" aria-live="polite">
            {loadingSteps.map((step, index) => {
              const Icon = step.icon;
              const isCompleted = currentStep > index;
              const isCurrent = currentStep === index;
              
              return (
                <div 
                  key={step.id}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                    isCurrent 
                      ? 'bg-primary/10 border border-primary/20' 
                      : isCompleted 
                      ? 'bg-secondary/10 border border-secondary/20' 
                      : 'bg-muted/30'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isCompleted 
                      ? 'bg-secondary text-white' 
                      : isCurrent 
                      ? 'bg-primary text-white animate-pulse' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {isCompleted ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <Icon className="w-5 h-5" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${
                      isCurrent || isCompleted ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step.label}
                    </p>
                  </div>
                  {isCompleted && (
                    <Badge variant="secondary" className="text-xs">
                      Selesai
                    </Badge>
                  )}
                  {isCurrent && (
                    <Badge className="text-xs bg-primary">
                      Memproses...
                    </Badge>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Loading Tip */}
          <div className="bg-muted/50 rounded-lg p-4 border border-border/50">
            <p className="text-sm text-muted-foreground text-center animate-fade-in">
              💡 {loadingTips[currentTip]}
            </p>
          </div>
          
          {/* Email Notification Option (Future Feature) */}
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Perlu waktu lebih lama? Kami akan mengirim email ketika selesai
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Skeleton for chart preview
export const ChartSkeleton = () => (
  <div className="space-y-4 p-6">
    <div className="flex justify-between items-center">
      <Skeleton className="h-6 w-48" />
      <Skeleton className="h-8 w-24" />
    </div>
    <Skeleton className="h-[300px] w-full" />
    <div className="grid grid-cols-3 gap-4">
      <Skeleton className="h-16" />
      <Skeleton className="h-16" />
      <Skeleton className="h-16" />
    </div>
  </div>
);
