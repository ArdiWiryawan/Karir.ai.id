import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Brain, TrendingUp, AlertTriangle, Shield, Target, Zap, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

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
  const { toast } = useToast();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [formData, setFormData] = useState({
    profession: "",
    experience: "",
    skills: ""
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleAnalyze = async () => {
    if (!formData.profession || !formData.skills) {
      toast({
        title: "Data Belum Lengkap",
        description: "Mohon isi profesi dan skill Anda",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    try {
      const { data, error } = await supabase.functions.invoke('analyze-skills', {
        body: {
          profession: formData.profession,
          experience: formData.experience || "0",
          skills: formData.skills.split(',').map(s => s.trim()).filter(Boolean)
        }
      });

      if (error) throw error;

      setAnalysis(data);
      toast({
        title: "Analisis Berhasil",
        description: "Hasil analisis AI telah tersedia",
      });
    } catch (error) {
      console.error('Error analyzing skills:', error);
      toast({
        title: "Analisis Gagal",
        description: "Terjadi kesalahan saat menganalisis. Coba lagi.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

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
                  <Button size="lg" className="bg-gradient-hero" onClick={() => document.getElementById('analyzer')?.scrollIntoView({ behavior: 'smooth' })}>
                    Coba Prediksi Gratis
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}>
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

        {/* AI Skill Analyzer */}
        <section id="analyzer" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Analisis AI Skill Anda
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Masukkan profesi dan skill Anda untuk mendapatkan analisis AI Impact Score dan rekomendasi karier masa depan.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Input Data Anda</CardTitle>
                  <CardDescription>
                    Berikan informasi tentang profesi dan skill Anda saat ini
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="profession">Profesi Saat Ini</Label>
                    <Input
                      id="profession"
                      placeholder="e.g. Software Engineer, Marketing Manager"
                      value={formData.profession}
                      onChange={(e) => setFormData(prev => ({ ...prev, profession: e.target.value }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Pengalaman (Tahun)</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, experience: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih pengalaman" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">Fresh Graduate</SelectItem>
                        <SelectItem value="1">1-2 tahun</SelectItem>
                        <SelectItem value="3">3-5 tahun</SelectItem>
                        <SelectItem value="6">6-10 tahun</SelectItem>
                        <SelectItem value="10">10+ tahun</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skills">Skill Anda (pisahkan dengan koma)</Label>
                    <Textarea
                      id="skills"
                      placeholder="e.g. JavaScript, React, Python, Project Management, Data Analysis"
                      value={formData.skills}
                      onChange={(e) => setFormData(prev => ({ ...prev, skills: e.target.value }))}
                      rows={4}
                    />
                  </div>

                  <Button 
                    onClick={handleAnalyze} 
                    className="w-full bg-gradient-hero" 
                    disabled={isAnalyzing}
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Menganalisis...
                      </>
                    ) : (
                      'Analisis Sekarang'
                    )}
                  </Button>
                </CardContent>
              </Card>

              <div className="space-y-6">
                {analysis ? (
                  <>
                    <Card className="border-border/50">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Brain className="w-5 h-5 text-primary" />
                          AI Impact Score
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center">
                          <div className={`text-6xl font-bold mb-4 ${
                            analysis.aiImpactScore > 70 ? 'text-red-500' : 
                            analysis.aiImpactScore > 40 ? 'text-orange-500' : 
                            'text-green-500'
                          }`}>
                            {analysis.aiImpactScore}%
                          </div>
                          <Badge variant={analysis.riskLevel === 'High' ? 'destructive' : analysis.riskLevel === 'Medium' ? 'secondary' : 'default'}>
                            Risk Level: {analysis.riskLevel}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-border/50">
                      <CardHeader>
                        <CardTitle>Future Outlook</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm">1 Tahun ke Depan:</h4>
                          <p className="text-sm text-muted-foreground">{analysis.futureOutlook.nextYear}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">3 Tahun ke Depan:</h4>
                          <p className="text-sm text-muted-foreground">{analysis.futureOutlook.next3Years}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">5 Tahun ke Depan:</h4>
                          <p className="text-sm text-muted-foreground">{analysis.futureOutlook.next5Years}</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-border/50">
                      <CardHeader>
                        <CardTitle>Rekomendasi Skill</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Skill Baru yang Harus Dipelajari:</h4>
                          <div className="flex flex-wrap gap-2">
                            {analysis.recommendations.skillsToLearn.map((skill, index) => (
                              <Badge key={index} variant="secondary">{skill}</Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-2">AI-Proof Skills:</h4>
                          <div className="flex flex-wrap gap-2">
                            {analysis.recommendations.aiProofSkills.map((skill, index) => (
                              <Badge key={index} variant="default">{skill}</Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </>
                ) : (
                  <Card className="border-border/50">
                    <CardContent className="p-8 text-center text-muted-foreground">
                      <Brain className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Isi form di sebelah kiri untuk mendapatkan analisis AI Impact Score Anda</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="demo" className="py-24">
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