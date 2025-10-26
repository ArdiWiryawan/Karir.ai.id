import { HelpCircle, ExternalLink } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface InlineExplainerProps {
  term: string;
  explanation: string;
  learnMoreUrl?: string;
  className?: string;
}

export const InlineExplainer = ({ 
  term, 
  explanation, 
  learnMoreUrl,
  className = "" 
}: InlineExplainerProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button 
            className={`inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors cursor-help border-b border-dashed border-primary/50 ${className}`}
            aria-label={`Explanation for ${term}`}
            aria-describedby={`tooltip-${term.replace(/\s+/g, '-').toLowerCase()}`}
          >
            <span className="font-medium">{term}</span>
            <HelpCircle className="w-3 h-3" />
          </button>
        </TooltipTrigger>
        <TooltipContent 
          className="max-w-xs"
          id={`tooltip-${term.replace(/\s+/g, '-').toLowerCase()}`}
        >
          <div className="space-y-2">
            <p className="text-sm leading-relaxed">{explanation}</p>
            {learnMoreUrl && (
              <a
                href={learnMoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
              >
                Learn more
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

// Pre-configured explainers for common terms
export const ConfidenceIntervalExplainer = () => (
  <InlineExplainer
    term="Confidence Interval"
    explanation="Rentang nilai dimana kita yakin 75% bahwa nilai sebenarnya berada di dalamnya. Semakin lebar rentangnya, semakin tinggi ketidakpastian prediksi."
    learnMoreUrl="https://en.wikipedia.org/wiki/Confidence_interval"
  />
);

export const BaselineExplainer = () => (
  <InlineExplainer
    term="Baseline"
    explanation="Nilai acuan atau standar yang digunakan untuk membandingkan perubahan. Baseline biasanya menggunakan data historis atau kondisi saat ini."
    learnMoreUrl="#"
  />
);

export const AIImpactScoreExplainer = () => (
  <InlineExplainer
    term="AI Impact Score"
    explanation="Skor 0-100% yang menunjukkan seberapa besar risiko pekerjaan ini tergantikan atau terpengaruh oleh AI dalam 5-10 tahun ke depan. Skor >70% = high risk."
    learnMoreUrl="/features/skill-forecasting#ai-impact"
  />
);

export const ForecastHorizonExplainer = () => (
  <InlineExplainer
    term="Forecast Horizon"
    explanation="Jangka waktu prediksi ke depan (misalnya 6 bulan, 12 bulan). Semakin jauh horizon, semakin tinggi ketidakpastian prediksi."
    learnMoreUrl="#"
  />
);
