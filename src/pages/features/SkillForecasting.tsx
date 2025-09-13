import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Brain, TrendingUp, AlertTriangle, Shield, Target, Zap, User, Search, ArrowRight, Bot, Users } from "lucide-react";
import { allJobs, jobsByCategory, emergingJobs, riskJobs } from "@/data/jobDatabase";
import { assessmentQuestions } from "@/data/assessmentQuestions";
import { Job, AssessmentResult, JobMatch } from "@/data/skillForecastingTypes";

const features = [
  {
    icon: Brain,
    title: "AI Impact Score Analysis",
    description: "Analisis risiko tergantikan AI untuk setiap skill dengan akurasi >75%",
    details: ["Skor 0-100% untuk setiap profesi", "Berbasis 50.000+ lowongan Indonesia", "Update data real-time"]
  },
  {
    icon: TrendingUp,
    title: "Future Job Database",
    description: "Database 500+ pekerjaan yang akan muncul di Indonesia 2026-2030",
    details: ["Prediksi gaji masa depan", "Skill requirements detail", "Growth trajectory analysis"]
  },
  {
    icon: AlertTriangle,
    title: "Risk Assessment",
    description: "Identifikasi pekerjaan dan skill yang berisiko tergantikan AI",
    details: ["Early warning system", "Transition difficulty score", "Alternative career paths"]
  },
  {
    icon: Shield,
    title: "AI-Proof Skills",
    description: "Rekomendasi skill yang tidak bisa digantikan AI",
    details: ["Kreativitas & inovasi", "Empati & komunikasi", "Problem solving kompleks"]
  }
];

const aiImpactData = [
  { profession: "Data Entry", risk: 95, color: "text-red-500" },
  { profession: "Kasir", risk: 87, color: "text-red-500" },
  { profession: "Content Writer", risk: 73, color: "text-orange-500" },
  { profession: "Graphic Designer", risk: 45, color: "text-yellow-500" },
  { profession: "Sales Representative", risk: 32, color: "text-green-500" },
  { profession: "Psychologist", risk: 12, color: "text-green-500" }
];

const SkillForecasting = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'selection' | 'personal-assessment' | 'job-results' | 'direct-exploration' | 'roadmap-view'>('landing');
  const [selectedJobs, setSelectedJobs] = useState<Job[]>([]);
  const [assessmentAnswers, setAssessmentAnswers] = useState<Record<string, string | number | string[]>>({});
  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleStartForecasting = () => {
    setCurrentView('selection');
  };

  const handlePersonalPath = () => {
    setCurrentView('personal-assessment');
  };

  const handleDirectPath = () => {
    setCurrentView('direct-exploration');
  };

  // Selection Interface Component
  const SelectionInterface = () => (
    <section className="py-24 bg-gradient-subtle min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Pilih Jalur
            </span>{" "}
            Prediksi Anda
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dapatkan rekomendasi karier yang tepat dengan dua cara berbeda
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Personal Assessment Path */}
          <Card 
            className="p-8 border-2 hover:border-primary/50 transition-all duration-300 cursor-pointer group"
            onClick={handlePersonalPath}
            data-testid="button-personal-path"
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <User className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI-Powered Personal Assessment</h3>
              <p className="text-muted-foreground mb-6">
                Jawab pertanyaan yang dipersonalisasi untuk mendapatkan rekomendasi pekerjaan yang paling sesuai dengan kepribadian, minat, dan keahlian Anda
              </p>
              <div className="space-y-2 text-sm text-left">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Analisis kepribadian & minat mendalam</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Matching dengan 500+ profesi masa depan</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Roadmap pembelajaran yang dipersonalisasi</span>
                </div>
              </div>
              <Button className="w-full mt-6 bg-gradient-hero group-hover:scale-105 transition-transform">
                Mulai Assessment <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>

          {/* Direct Job Exploration Path */}
          <Card 
            className="p-8 border-2 hover:border-secondary/50 transition-all duration-300 cursor-pointer group"
            onClick={handleDirectPath}
            data-testid="button-direct-path"
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Search className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Eksplorasi Pekerjaan Langsung</h3>
              <p className="text-muted-foreground mb-6">
                Jelajahi langsung database lengkap pekerjaan masa depan, lihat prediksi gaji, risiko AI, dan roadmap pembelajaran untuk setiap profesi
              </p>
              <div className="space-y-2 text-sm text-left">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>500+ pekerjaan dengan data lengkap</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Filter berdasarkan kategori & risiko AI</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Roadmap & rekomendasi kursus detail</span>
                </div>
              </div>
              <Button variant="secondary" className="w-full mt-6 group-hover:scale-105 transition-transform">
                Mulai Eksplorasi <Search className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="ghost" 
            onClick={() => setCurrentView('landing')}
            data-testid="button-back-to-landing"
          >
            ← Kembali ke Halaman Utama
          </Button>
        </div>
      </div>
    </section>
  );

  if (currentView === 'selection') {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <SelectionInterface />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentView === 'personal-assessment') {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="py-24 min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Personal Assessment (Coming Soon)</h2>
              <p className="text-muted-foreground mb-8">
                Fitur assessment personal sedang dalam pengembangan
              </p>
              <Button onClick={() => setCurrentView('selection')}>
                Kembali ke Pilihan
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (currentView === 'direct-exploration') {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="py-24 min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Direct Job Exploration (Coming Soon)</h2>
              <p className="text-muted-foreground mb-8">
                Fitur eksplorasi pekerjaan langsung sedang dalam pengembangan
              </p>
              <Button onClick={() => setCurrentView('selection')}>
                Kembali ke Pilihan
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-6">
                  AI-Powered Technology
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-hero bg-clip-text text-transparent">
                    AI-Powered
                  </span>{" "}
                  Skill Forecasting
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Teknologi AI terdepan yang memprediksi pekerjaan masa depan dengan akurasi &gt;75%. 
                  Berbasis analisis 50.000+ lowongan Indonesia dan tren global.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-hero"
                    onClick={handleStartForecasting}
                    data-testid="button-start-forecasting"
                  >
                    Coba Prediksi Gratis
                  </Button>
                  <Button size="lg" variant="outline">
                    Lihat Demo
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="w-5 h-5 text-primary" />
                      AI Impact Analysis
                    </CardTitle>
                    <CardDescription>
                      Risiko tergantikan AI per profesi
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {aiImpactData.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{item.profession}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${item.risk > 70 ? 'bg-red-500' : item.risk > 40 ? 'bg-orange-500' : 'bg-green-500'}`}
                              style={{ width: `${item.risk}%` }}
                            />
                          </div>
                          <span className={`text-sm font-semibold ${item.color}`}>
                            {item.risk}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Teknologi Prediksi Masa Depan
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Kombinasi AI, machine learning, dan big data untuk memberikan insight yang akurat 
                tentang masa depan karier Anda.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="border-border/50 hover:border-primary/30 transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {feature.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Cara Kerja Teknologi AI
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4">Data Collection</h3>
                <p className="text-muted-foreground">
                  Mengumpulkan data dari 50.000+ lowongan kerja Indonesia, trend global, 
                  dan laporan industri terpercaya.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4">AI Analysis</h3>
                <p className="text-muted-foreground">
                  LSTM neural networks menganalisis pola dan memprediksi perubahan 
                  pasar kerja dalam 3-5 tahun ke depan.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-4">Personal Insights</h3>
                <p className="text-muted-foreground">
                  Memberikan rekomendasi personal berdasarkan skill, minat, 
                  dan goals karier individu.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Accuracy Stats */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-16">
              Tingkat Akurasi Terbukti
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="text-5xl font-bold text-primary mb-4">75%+</div>
                <h3 className="text-xl font-semibold mb-2">Prediction Accuracy</h3>
                <p className="text-muted-foreground">
                  Akurasi prediksi pekerjaan yang muncul dalam 1 tahun
                </p>
              </div>
              
              <div className="p-6">
                <div className="text-5xl font-bold text-secondary mb-4">50K+</div>
                <h3 className="text-xl font-semibold mb-2">Data Points</h3>
                <p className="text-muted-foreground">
                  Lowongan kerja Indonesia yang dianalisis setiap bulan
                </p>
              </div>
              
              <div className="p-6">
                <div className="text-5xl font-bold text-accent mb-4">500+</div>
                <h3 className="text-xl font-semibold mb-2">Future Jobs</h3>
                <p className="text-muted-foreground">
                  Pekerjaan masa depan dalam database kami
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Mulai Prediksi Karier Anda
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Dapatkan analisis AI Impact Score dan roadmap 5 tahun untuk karier masa depan Anda. 
              Gratis untuk 7 hari pertama.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Analisis Skill Saya Gratis
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SkillForecasting;