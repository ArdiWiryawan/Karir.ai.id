import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, ChevronRight, Sparkles, Target, TrendingUp, Zap, Eye, Crown } from "lucide-react";
import { useState } from "react";
import PricingModal from "@/components/PricingModal";

const Hero = () => {
  const heroImage = "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const [previewRole, setPreviewRole] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const previewData = {
    'data scientist': {
      topSkills: ['Python', 'Machine Learning', 'SQL'],
      avgSalary: 'Rp 15-25 juta',
      aiRisk: 'Low (15%)',
      trend: '📈 Growing 45%'
    },
    'hr manager': {
      topSkills: ['Talent Management', 'Recruitment', 'Employee Relations'],
      avgSalary: 'Rp 12-20 juta',
      aiRisk: 'Medium (35%)',
      trend: '📈 Growing 25%'
    },
    'software engineer': {
      topSkills: ['JavaScript', 'React', 'Node.js'],
      avgSalary: 'Rp 18-30 juta',
      aiRisk: 'Medium (40%)',
      trend: '📈 Growing 35%'
    }
  };

  const getPreviewResult = () => {
    const role = previewRole.toLowerCase();
    for (const [key, data] of Object.entries(previewData)) {
      if (role.includes(key) || key.includes(role)) {
        return data;
      }
    }
    return previewData['data scientist']; // default
  };

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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Prediksi Kebutuhan Skill 6–12 Bulan
                </span>{" "}
                untuk Industri Indonesia — Akurasi Model ~75%
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">
                Untuk HR & L&D: Rencanakan rekrutmen dan upskilling dengan data pasar real-time.
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
            <div className="flex flex-col sm:flex-row gap-4" role="group" aria-label="Primary actions">
              <Button
                variant="hero"
                size="lg"
                className="group font-semibold px-6 sm:px-8 py-4 sm:py-6 min-h-[48px] min-w-[160px] text-base sm:text-lg bg-[#0B63E6] text-white hover:bg-[#0B63E6]/90 touch-manipulation"
                aria-label="Start your career roadmap for free"
                onClick={() => {/* navigation logic */}}
              >
                <span className="block sm:hidden">Mulai Gratis</span>
                <span className="hidden sm:block">Mulai Roadmap Masa Depan (Gratis)</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform ml-2" aria-hidden="true" />
              </Button>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-4 sm:px-6 py-4 sm:py-6 min-h-[48px] text-sm sm:text-base touch-manipulation"
                  aria-label="Analyze AI impact on your career"
                  onClick={() => {/* navigation logic */}}
                >
                  <Brain className="w-4 h-4 sm:w-5 sm:h-5 mr-2" aria-hidden="true" />
                  <span className="block sm:hidden">AI Analysis</span>
                  <span className="hidden sm:block">Analisis AI Impact Score</span>
                </Button>
                <PricingModal />
              </div>
            </div>

            {/* Interactive Mini-Preview */}
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl sm:rounded-2xl max-w-2xl mx-auto" role="region" aria-labelledby="preview-title">
              <div className="text-center mb-4">
                <h3 id="preview-title" className="text-base sm:text-lg font-semibold mb-2">🎯 Try Interactive Preview</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 px-2">
                  Enter your role or major to see instant career insights
                </p>
                <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto" role="group" aria-label="Career preview input">
                  <Input
                    placeholder="e.g., Data Scientist, HR Manager..."
                    value={previewRole}
                    onChange={(e) => setPreviewRole(e.target.value)}
                    className="flex-1 min-h-[44px] text-base"
                    aria-label="Enter your job role or field of study"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        setShowPreview(true);
                      }
                    }}
                  />
                  <Button
                    size="sm"
                    onClick={() => setShowPreview(true)}
                    disabled={!previewRole.trim()}
                    aria-label="Show career preview for entered role"
                    className="min-h-[44px] px-4 touch-manipulation"
                  >
                    <Eye className="w-4 h-4 sm:mr-2" aria-hidden="true" />
                    <span className="hidden sm:inline">Preview</span>
                  </Button>
                </div>
              </div>

              {showPreview && previewRole.trim() && (
                <div className="animate-fade-in-up">
                  <div className="text-center mb-4">
                    <Badge variant="secondary" className="mb-2">Quick Insights for {previewRole}</Badge>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-3 bg-primary/5 rounded-lg">
                      <div className="text-sm font-medium">Top Skills</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {getPreviewResult().topSkills.slice(0, 2).join(', ')}
                      </div>
                    </div>
                    <div className="text-center p-3 bg-secondary/5 rounded-lg">
                      <div className="text-sm font-medium">Avg Salary</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {getPreviewResult().avgSalary}
                      </div>
                    </div>
                    <div className="text-center p-3 bg-accent/5 rounded-lg">
                      <div className="text-sm font-medium">AI Risk</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {getPreviewResult().aiRisk}
                      </div>
                    </div>
                    <div className="text-center p-3 bg-primary/5 rounded-lg">
                      <div className="text-sm font-medium">Trend</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {getPreviewResult().trend}
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <Button variant="outline" size="sm">
                      Get Full Report
                      <ChevronRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Trust Strip */}
            <div className="flex items-center gap-4 pt-6 border-t border-border/50 text-sm text-muted-foreground">
              <span>500+ organisasi • 10,000+ laporan dibuat • data terakhir: 2025-10-01</span>
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