import { Loader2, Brain, Sparkles } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

interface LoadingStateProps {
  title?: string;
  description?: string;
  estimatedTime?: number; // in seconds
  showProgress?: boolean;
  variant?: "default" | "ai" | "minimal";
}

export const LoadingState = ({
  title = "Memproses...",
  description = "Mohon tunggu sebentar",
  estimatedTime = 10,
  showProgress = true,
  variant = "default"
}: LoadingStateProps) => {
  const [progress, setProgress] = useState(0);
  const [currentTip, setCurrentTip] = useState(0);

  const tips = [
    "💡 Pastikan CV Anda menonjolkan hasil terukur (metrics)",
    "🎯 Keyword yang tepat meningkatkan peluang lolos ATS hingga 85%",
    "✨ Soft skills juga penting — jangan lupakan!",
    "🚀 Rata-rata pengguna kami dapat interview 2x lebih cepat"
  ];

  useEffect(() => {
    if (!showProgress) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev;
        return prev + (100 / estimatedTime) * 0.5;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [estimatedTime, showProgress]);

  useEffect(() => {
    const tipInterval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 3000);

    return () => clearInterval(tipInterval);
  }, []);

  if (variant === "minimal") {
    return (
      <div className="flex items-center justify-center gap-2">
        <Loader2 className="w-4 h-4 animate-spin text-primary" />
        <span className="text-sm text-muted-foreground">{title}</span>
      </div>
    );
  }

  if (variant === "ai") {
    return (
      <div className="flex flex-col items-center justify-center gap-6 p-12">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
          <Brain className="w-16 h-16 text-primary animate-pulse relative z-10" />
        </div>
        <div className="space-y-2 text-center">
          <h3 className="text-xl font-semibold flex items-center gap-2 justify-center">
            <Sparkles className="w-5 h-5 text-primary" />
            AI sedang menganalisis...
          </h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        {showProgress && (
          <div className="w-full max-w-md space-y-2">
            <Progress value={progress} className="h-2" />
            <p className="text-xs text-center text-muted-foreground">
              Selesai dalam ~{Math.ceil((100 - progress) / 10)} detik
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-12 max-w-2xl mx-auto">
      <div className="relative">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
      </div>
      
      <div className="space-y-2 text-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      {showProgress && (
        <div className="w-full space-y-3">
          <Progress value={progress} className="h-2" />
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Estimasi: ~{estimatedTime} detik</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>
      )}

      {/* Loading Tips */}
      <div className="bg-muted/50 rounded-lg p-4 w-full animate-fade-in">
        <p className="text-sm text-muted-foreground text-center">
          {tips[currentTip]}
        </p>
      </div>
    </div>
  );
};

// Skeleton Loader Components
export const SkeletonCard = () => (
  <div className="border border-border rounded-lg p-6 space-y-4 animate-pulse">
    <div className="h-4 bg-muted rounded w-3/4" />
    <div className="h-4 bg-muted rounded w-1/2" />
    <div className="h-20 bg-muted rounded" />
  </div>
);

export const SkeletonList = ({ items = 3 }: { items?: number }) => (
  <div className="space-y-4">
    {Array.from({ length: items }).map((_, i) => (
      <div key={i} className="flex items-center gap-4 animate-pulse">
        <div className="w-12 h-12 bg-muted rounded-full" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-muted rounded w-3/4" />
          <div className="h-3 bg-muted rounded w-1/2" />
        </div>
      </div>
    ))}
  </div>
);

export const SkeletonText = ({ lines = 3 }: { lines?: number }) => (
  <div className="space-y-2 animate-pulse">
    {Array.from({ length: lines }).map((_, i) => (
      <div
        key={i}
        className="h-4 bg-muted rounded"
        style={{ width: `${100 - i * 10}%` }}
      />
    ))}
  </div>
);
