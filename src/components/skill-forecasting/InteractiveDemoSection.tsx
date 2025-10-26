import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Brain,
  Sparkles,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface DemoSkill {
  name: string;
  currentDemand: number;
  forecastedDemand: number;
  trend: "up" | "down" | "stable";
  confidence: number;
}

const demoSkills: DemoSkill[] = [
  {
    name: "Machine Learning",
    currentDemand: 65,
    forecastedDemand: 89,
    trend: "up",
    confidence: 78
  },
  {
    name: "React & TypeScript",
    currentDemand: 78,
    forecastedDemand: 85,
    trend: "up",
    confidence: 82
  },
  {
    name: "Cloud Architecture (AWS/Azure)",
    currentDemand: 71,
    forecastedDemand: 92,
    trend: "up",
    confidence: 75
  },
  {
    name: "Data Entry Manual",
    currentDemand: 42,
    forecastedDemand: 18,
    trend: "down",
    confidence: 85
  }
];

export const InteractiveDemoSection = () => {
  const [selectedRole, setSelectedRole] = useState<"hr" | "graduate" | "lnd">("hr");

  const roleContent = {
    hr: {
      title: "Untuk HR & Recruiter",
      description: "Prediksi kebutuhan skill untuk perencanaan rekrutmen 6-12 bulan ke depan",
      benefits: [
        "Identifikasi skill gaps sebelum kompetitor",
        "Optimalkan budget hiring dengan prioritas yang tepat",
        "Kurangi mis-hire dengan data prediktif"
      ]
    },
    graduate: {
      title: "Untuk Fresh Graduate",
      description: "Pahami skill apa yang akan dicari perusahaan saat kamu lulus",
      benefits: [
        "Fokus belajar skill yang high-demand",
        "Hindari skill yang akan digantikan AI",
        "Dapatkan competitive advantage di job market"
      ]
    },
    lnd: {
      title: "Untuk L&D Professional",
      description: "Rancang program upskilling berbasis data pasar yang akurat",
      benefits: [
        "ROI training program lebih tinggi",
        "Employee retention meningkat",
        "Organisasi siap hadapi perubahan industri"
      ]
    }
  };

  const content = roleContent[selectedRole];

  return (
    <section id="demo-section" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4 animate-fade-in-up">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            <Sparkles className="w-3 h-3 mr-1" />
            Demo Interaktif
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            Lihat Bagaimana <span className="bg-gradient-hero bg-clip-text text-transparent">Skill Forecasting</span> Bekerja
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilih role Anda dan lihat bagaimana prediksi skill dapat membantu pengambilan keputusan
          </p>
        </div>

        {/* Role Selection */}
        <div className="max-w-5xl mx-auto mb-8">
          <Tabs value={selectedRole} onValueChange={(v) => setSelectedRole(v as any)} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="hr" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                👔 HR & Recruiter
              </TabsTrigger>
              <TabsTrigger value="graduate" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                🎓 Fresh Graduate
              </TabsTrigger>
              <TabsTrigger value="lnd" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                📚 L&D Professional
              </TabsTrigger>
            </TabsList>

            <TabsContent value={selectedRole} className="space-y-6 animate-fade-in">
              {/* Role-specific content */}
              <Card className="border-2 border-primary/20 shadow-future">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Target className="w-6 h-6 text-primary" />
                    {content.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {content.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {content.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Demo Forecast Results */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Brain className="w-5 h-5 text-primary" />
                        Contoh Hasil Prediksi — Tech Industry
                      </CardTitle>
                      <CardDescription>
                        Prediksi demand skill untuk 6 bulan ke depan (Nov 2025 - Mei 2026)
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="hidden md:flex">
                      Updated: Oct 2025
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {demoSkills.map((skill, index) => (
                    <div 
                      key={skill.name} 
                      className="p-4 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-base">{skill.name}</h4>
                            {skill.trend === "up" ? (
                              <TrendingUp className="w-4 h-4 text-secondary" />
                            ) : (
                              <TrendingDown className="w-4 h-4 text-destructive" />
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Demand naik <span className={`font-semibold ${skill.trend === "up" ? "text-secondary" : "text-destructive"}`}>
                              {skill.trend === "up" ? "+" : ""}{skill.forecastedDemand - skill.currentDemand}%
                            </span> dalam 6 bulan
                          </p>
                        </div>
                        <Badge 
                          variant={skill.trend === "up" ? "default" : "destructive"}
                          className="ml-4"
                        >
                          {skill.confidence}% confidence
                        </Badge>
                      </div>

                      {/* Visual demand comparison */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Demand saat ini</span>
                          <span className="font-medium">{skill.currentDemand}%</span>
                        </div>
                        <Progress value={skill.currentDemand} className="h-2 bg-muted" />
                        
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Prediksi 6 bulan</span>
                          <span className="font-semibold text-foreground">{skill.forecastedDemand}%</span>
                        </div>
                        <Progress 
                          value={skill.forecastedDemand} 
                          className={`h-2 ${skill.trend === "up" ? "bg-muted [&>div]:bg-secondary" : "bg-muted [&>div]:bg-destructive"}`}
                        />
                      </div>
                    </div>
                  ))}

                  {/* CTA in demo */}
                  <div className="pt-6 border-t border-border/50">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10">
                      <div>
                        <p className="font-semibold mb-1">
                          Tertarik melihat prediksi untuk industri Anda?
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Dapatkan analisis lengkap dengan data real-time dari 50K+ lowongan
                        </p>
                      </div>
                      <Button className="group whitespace-nowrap" size="lg">
                        Mulai Analisis Gratis
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Trust indicators */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "75%", label: "Akurasi Model" },
              { value: "50K+", label: "Data Lowongan" },
              { value: "500+", label: "Profesi Analyzed" },
              { value: "12K+", label: "Active Users" }
            ].map((stat, index) => (
              <div key={index} className="p-4 rounded-lg bg-card border border-border/50">
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
