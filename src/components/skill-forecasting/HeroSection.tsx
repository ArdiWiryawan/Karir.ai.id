import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, ArrowRight, Database } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { HelpCircle } from "lucide-react";

interface HeroSectionProps {
  onStartForecasting: () => void;
}

export const HeroSection = ({ onStartForecasting }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-future">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Badge with Target Audience */}
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-base">
            <Brain className="w-4 h-4 mr-2" />
            Untuk HR, L&D & Fresh Graduates
          </Badge>
          
          {/* Measurable Value Proposition */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Prediksi Kebutuhan Skill{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                6-12 Bulan Mendatang
              </span>
            </h1>
            <div className="flex items-center justify-center gap-2 text-xl md:text-2xl text-muted-foreground">
              <span>Akurasi Model</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="inline-flex items-center gap-1 text-primary font-semibold cursor-help">
                      ~75%
                      <HelpCircle className="w-4 h-4" />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p className="text-sm">
                      Model kami dilatih pada 50.000+ lowongan kerja Indonesia dan terus diperbarui setiap bulan
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <p className="text-lg md:text-xl text-foreground/80 font-medium max-w-3xl mx-auto">
              Rencanakan rekrutmen dan upskilling dengan data pasar yang akurat — dari jobs corpus terlengkap di Indonesia
            </p>
          </div>
          
          {/* Measurable Stats with Trust Signals */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 max-w-4xl mx-auto">
            <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Profesi Teranalisis</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-3xl font-bold text-secondary">50K+</div>
              <div className="text-sm text-muted-foreground mt-1">Lowongan Data</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-3xl font-bold text-accent">12.470+</div>
              <div className="text-sm text-muted-foreground mt-1">Pengguna Aktif</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-3xl font-bold text-primary">2025-11</div>
              <div className="text-sm text-muted-foreground mt-1">Last Updated</div>
            </div>
          </div>
          
          {/* Clear CTA Hierarchy */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={onStartForecasting}
              className="group min-w-[240px] h-14 text-lg font-semibold shadow-future hover:shadow-ai-glow"
              aria-label="Mulai analisis prediksi skill gratis"
            >
              Jalankan Prediksi Gratis
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="h-14 text-base border-2 min-w-[180px]"
              onClick={() => document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Lihat demo produk"
            >
              Lihat Demo
            </Button>
          </div>
          
          {/* Friction-reducing Microcopy */}
          <p className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
            💡 Tidak yakin mulai dari mana? Dapatkan rekomendasi jalur karier yang dipersonalisasi — 100% gratis, tanpa kartu kredit
          </p>
          
          {/* Data Provenance & Trust Bar */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2 bg-muted/30 px-4 py-2 rounded-lg">
              <Database className="w-4 h-4 text-primary" />
              <span>
                <strong className="text-foreground">Dataset:</strong> JobPostings Corpus (50K+)
              </span>
            </div>
            <div className="flex items-center gap-2 bg-muted/30 px-4 py-2 rounded-lg">
              <span>
                <strong className="text-foreground">Model:</strong> Forecast v1.3
              </span>
            </div>
            <div className="flex items-center gap-2 bg-muted/30 px-4 py-2 rounded-lg">
              <span>
                <strong className="text-foreground">Last Indexed:</strong> 2025-10-26
              </span>
            </div>
          </div>
          
          {/* Privacy Assurance */}
          <div className="flex items-start gap-2 text-xs text-muted-foreground bg-muted/30 p-4 rounded-lg max-w-2xl mx-auto border border-border/50">
            <span className="text-primary text-base">🔒</span>
            <p className="text-left">
              <strong className="text-foreground">Data Anda aman & terenkripsi.</strong> CV/data organisasi Anda hanya digunakan untuk analisis dan disimpan maksimal 30 hari.{" "}
              <a href="/privacy" className="text-primary hover:underline font-medium">Lihat kebijakan privasi</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
