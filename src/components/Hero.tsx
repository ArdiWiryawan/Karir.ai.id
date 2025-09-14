import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, ChevronRight, Sparkles, Target, TrendingUp } from "lucide-react";

const Hero = () => {
  const heroImage = "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-future">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              7,28 Juta Talenta Muda Siap Era AI
            </Badge>
            
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Khawatir Skill-mu{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Digantikan AI?
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Kami Punya Roadmap 5 Tahun untuk Tetap Relevan.
              </p>
            </div>
            
            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Karir.AI membantu talenta muda Indonesia mempersiapkan masa depan dengan 
              <strong className="text-primary"> prediksi skill masa depan</strong>, 
              <strong className="text-secondary"> CV yang lolos ATS</strong>, dan 
              <strong className="text-accent"> interview coach berbasis AI</strong>.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">97%</div>
                <div className="text-sm text-muted-foreground">Tingkatkan AI-Proof Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">85%</div>
                <div className="text-sm text-muted-foreground">CV Lolos ATS</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">70%</div>
                <div className="text-sm text-muted-foreground">Skor Interview Meningkat</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Mulai Roadmap Masa Depan (Gratis)
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="future" size="lg">
                <Brain className="w-5 h-5 mr-2" />
                Analisis AI Impact Score
              </Button>
            </div>
            
            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-hero border-2 border-background"
                  />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <strong className="text-foreground">1.247 pengguna</strong> sepertimu meningkatkan kesiapan AI hari ini
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <img
                src={heroImage}
                alt="Indonesian professionals preparing for AI era careers"
                className="w-full h-auto rounded-2xl shadow-future animate-float"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-card border border-border rounded-lg p-4 shadow-lg animate-float" style={{animationDelay: '0.5s'}}>
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-secondary" />
                  <span className="font-semibold text-sm">AI Impact Score</span>
                </div>
                <div className="text-2xl font-bold text-destructive">68%</div>
                <div className="text-xs text-muted-foreground">Excel berisiko digantikan</div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-lg p-4 shadow-lg animate-float" style={{animationDelay: '1s'}}>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-secondary" />
                  <span className="font-semibold text-sm">Future Job</span>
                </div>
                <div className="text-lg font-bold text-secondary">AI Content Strategist</div>
                <div className="text-xs text-muted-foreground">Muncul di 2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;