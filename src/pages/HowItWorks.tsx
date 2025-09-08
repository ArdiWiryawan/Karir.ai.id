import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Brain, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload CV & Profil",
    description: "Upload CV Anda dan isi profil lengkap termasuk minat karier dan goals jangka panjang",
    features: ["AI CV Scanner", "Skill Gap Analysis", "Future Risk Assessment"]
  },
  {
    icon: Brain,
    step: "02", 
    title: "AI Analysis & Forecasting",
    description: "AI kami menganalisis skill Anda dan memprediksi pekerjaan masa depan yang cocok",
    features: ["AI Impact Score", "Future Job Matching", "Skill Forecasting"]
  },
  {
    icon: Rocket,
    step: "03",
    title: "Dapatkan Roadmap Personal",
    description: "Terima roadmap 5 tahun yang dipersonalisasi dengan milestone dan project konkret",
    features: ["Personal Learning Path", "Micro Projects", "AI-Proof Skills"]
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Implementasi & Tracking",
    description: "Mulai implementasi roadmap dengan bimbingan AI dan tracking progress real-time",
    features: ["Progress Tracking", "AI Coaching", "Career Transitions"]
  }
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-6">
              Cara Kerja Teknologi AI
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              4 Langkah Menuju{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Karier Masa Depan
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Proses sederhana namun powerful untuk mempersiapkan karier Anda menghadapi revolusi AI. 
              Semua berbasis teknologi AI terdepan dan data pasar kerja Indonesia.
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card 
                    key={index} 
                    className="relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-hero opacity-5 rounded-full -translate-y-16 translate-x-16" />
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-3xl font-bold text-primary/30">{step.step}</span>
                      </div>
                      <CardTitle className="text-2xl">{step.title}</CardTitle>
                      <CardDescription className="text-base text-muted-foreground">
                        {step.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {step.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
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

        {/* Technology Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Teknologi AI Terdepan
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Kami menggunakan teknologi AI dan machine learning terdepan untuk memberikan prediksi 
              yang akurat dan roadmap yang personal.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">LSTM Neural Networks</h3>
                <p className="text-muted-foreground">
                  Untuk prediksi tren pekerjaan masa depan berbasis data historis pasar kerja Indonesia
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Natural Language Processing</h3>
                <p className="text-muted-foreground">
                  Analisis CV dan deskripsi pekerjaan untuk matching yang akurat
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Machine Learning</h3>
                <p className="text-muted-foreground">
                  Personalisasi roadmap pembelajaran berdasarkan profil dan goals individual
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;