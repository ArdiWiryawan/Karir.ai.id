import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, CheckCircle, Target, Zap, Brain, TrendingUp } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "ATS Optimization 90%+",
    description: "CV yang lolos sistem ATS dengan tingkat keberhasilan >90%",
    details: ["Keyword optimization", "Format ATS-friendly", "Real-time ATS score"]
  },
  {
    icon: Brain,
    title: "Future-Proof Templates",
    description: "Template CV berbasis prediksi pekerjaan masa depan",
    details: ["Template untuk 2027-2030", "AI-era job descriptions", "Future skill highlighting"]
  },
  {
    icon: Target,
    title: "Skill Prediction",
    description: "Analisis skill yang akan tetap relevan dalam 5 tahun",
    details: ["AI-proof skill detection", "Future relevance score", "Skill gap analysis"]
  },
  {
    icon: Zap,
    title: "One-Click Optimization",
    description: "Optimasi CV untuk ATS dan future-proofing dengan 1 klik",
    details: ["Auto keyword insertion", "Format standardization", "Instant improvements"]
  }
];

const templates = [
  {
    title: "Content Writer (Current)",
    description: "Template untuk posisi Content Writer saat ini",
    features: ["SEO writing skills", "Content management", "Social media expertise"]
  },
  {
    title: "AI Content Strategist (2026)",
    description: "Template untuk evolusi Content Writer di era AI",
    features: ["AI tool proficiency", "Content automation", "Strategy development"]
  },
  {
    title: "Data Analyst (Current)",
    description: "Template untuk Data Analyst tradisional",
    features: ["Excel expertise", "SQL knowledge", "Basic visualization"]
  },
  {
    title: "AI Data Interpreter (2027)",
    description: "Template untuk evolusi Data Analyst dengan AI",
    features: ["AI/ML integration", "Advanced automation", "Strategic insights"]
  }
];

const CVBuilder = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 mb-6">
                  Future-Proof CV Technology
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-hero bg-clip-text text-transparent">
                    Future-Proof
                  </span>{" "}
                  CV Builder
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  CV yang tidak hanya lolos ATS dengan akurasi &gt;90%, tapi juga menunjukkan 
                  kesiapan Anda untuk era AI. Template berbasis prediksi pekerjaan masa depan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-hero">
                    Buat CV Future-Proof
                  </Button>
                  <Button size="lg" variant="outline">
                    Lihat Template
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-accent" />
                      ATS Optimization Score
                    </CardTitle>
                    <CardDescription>
                      Real-time analysis CV Anda
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Keyword Optimization</span>
                        <span className="text-sm font-semibold text-green-500">92%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Format Compatibility</span>
                        <span className="text-sm font-semibold text-green-500">95%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Future-Proof Score</span>
                        <span className="text-sm font-semibold text-primary">87%</span>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border/50">
                      <div className="text-2xl font-bold text-green-500 mb-1">94/100</div>
                      <div className="text-sm text-muted-foreground">Overall ATS Score</div>
                    </div>
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
                Teknologi CV Masa Depan
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Kombinasi ATS optimization dan future-proofing technology untuk memastikan 
                CV Anda tidak hanya lolos seleksi, tapi juga menunjukkan kesiapan era AI.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="border-border/50 hover:border-accent/30 transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {feature.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent" />
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

        {/* Template Comparison */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Template Current vs Future
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Lihat perbedaan template CV untuk pekerjaan saat ini vs evolusinya di masa depan. 
                Siapkan diri untuk transisi karier yang smooth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {templates.map((template, index) => (
                <Card key={index} className={`border-border/50 ${index % 2 === 1 ? 'border-primary/30 bg-primary/5' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{template.title}</CardTitle>
                      {index % 2 === 1 && (
                        <Badge className="bg-primary/10 text-primary border-primary/20">
                          Future
                        </Badge>
                      )}
                    </div>
                    <CardDescription>{template.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {template.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${index % 2 === 1 ? 'bg-primary' : 'bg-muted-foreground'}`} />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ATS Success Rate */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-16">
              Tingkat Keberhasilan Terbukti
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="text-5xl font-bold text-green-500 mb-4">92%</div>
                <h3 className="text-xl font-semibold mb-2">ATS Pass Rate</h3>
                <p className="text-muted-foreground">
                  CV yang lolos sistem ATS perusahaan Indonesia
                </p>
              </div>
              
              <div className="p-6">
                <div className="text-5xl font-bold text-primary mb-4">3x</div>
                <h3 className="text-xl font-semibold mb-2">Interview Calls</h3>
                <p className="text-muted-foreground">
                  Lebih banyak dipanggil interview dibanding CV biasa
                </p>
              </div>
              
              <div className="p-6">
                <div className="text-5xl font-bold text-accent mb-4">85%</div>
                <h3 className="text-xl font-semibold mb-2">Future-Proof Score</h3>
                <p className="text-muted-foreground">
                  Rata-rata skor kesiapan era AI dalam CV
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Cara Kerja CV Builder
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-4">Upload CV Lama</h3>
                <p className="text-muted-foreground text-sm">
                  Upload CV existing atau mulai dari template baru
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-4">AI Analysis</h3>
                <p className="text-muted-foreground text-sm">
                  AI menganalisis dan memberikan skor ATS + Future-Proof
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-4">Optimization</h3>
                <p className="text-muted-foreground text-sm">
                  One-click optimization untuk ATS dan future skills
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-4">Download & Apply</h3>
                <p className="text-muted-foreground text-sm">
                  Download CV yang sudah dioptimasi dan siap apply
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Buat CV Future-Proof Anda
            </h2>
            <p className="text-xl mb-8 opacity-90">
              CV yang tidak hanya lolos ATS hari ini, tapi juga menunjukkan kesiapan 
              Anda untuk karier masa depan. Gratis untuk template pertama.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Buat CV Saya Sekarang
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CVBuilder;