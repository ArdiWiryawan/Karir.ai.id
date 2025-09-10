import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Brain, Target, Globe, Mic, Video } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Analisis real-time jawaban interview dengan feedback mendalam",
    details: ["Voice tone analysis", "Content structure review", "Confidence scoring"]
  },
  {
    icon: Target,
    title: "Future-Focused Questions",
    description: "500+ pertanyaan berbasis pekerjaan masa depan dan era AI",
    details: ["AI collaboration scenarios", "Future skill assessment", "Industry evolution topics"]
  },
  {
    icon: Globe,
    title: "Indonesia Context",
    description: "Pertanyaan dan feedback sesuai budaya kerja Indonesia",
    details: ["Startup vs corporate culture", "Local business etiquette", "Indonesia-specific scenarios"]
  },
  {
    icon: MessageSquare,
    title: "AI-Proof Traits",
    description: "Melatih kemampuan yang tidak bisa digantikan AI",
    details: ["Creativity assessment", "Empathy evaluation", "Problem-solving skills"]
  }
];

const questionTypes = [
  {
    category: "AI Collaboration",
    description: "Pertanyaan tentang bekerja bersama AI",
    examples: [
      "Bagaimana Anda akan menggunakan AI untuk meningkatkan produktivitas?",
      "Apa strategi Anda jika AI mulai mengotomatisasi bagian pekerjaan Anda?",
      "Ceritakan pengalaman menggunakan AI tools dalam pekerjaan"
    ]
  },
  {
    category: "Future Skills",
    description: "Evaluasi skill yang dibutuhkan masa depan",
    examples: [
      "Bagaimana Anda terus belajar skill baru di era yang cepat berubah?",
      "Apa pendapat Anda tentang pekerjaan remote dan hybrid?",
      "Bagaimana cara Anda beradaptasi dengan teknologi baru?"
    ]
  },
  {
    category: "Cultural Fit Indonesia",
    description: "Sesuai dengan budaya kerja Indonesia",
    examples: [
      "Bagaimana Anda mengelola konflik dalam tim yang beragam?",
      "Pengalaman bekerja dengan deadline ketat di Indonesia?",
      "Cara berkomunikasi dengan atasan dan bawahan di budaya Indonesia"
    ]
  }
];

const InterviewCoach = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20 mb-6">
                  AI Interview Technology
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-hero bg-clip-text text-transparent">
                    AI Interview
                  </span>{" "}
                  Coach
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Simulasi interview berbasis pekerjaan masa depan dengan feedback real-time. 
                  Latih AI-Proof Traits: kreativitas, empati, dan problem-solving yang tidak bisa digantikan AI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-hero">
                    Mulai Simulasi Gratis
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
                      <MessageSquare className="w-5 h-5 text-secondary" />
                      Interview Performance
                    </CardTitle>
                    <CardDescription>
                      Analisis real-time jawaban Anda
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Clarity & Structure</span>
                        <span className="text-sm font-semibold text-green-500">88%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Creativity Score</span>
                        <span className="text-sm font-semibold text-primary">92%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Empathy & EQ</span>
                        <span className="text-sm font-semibold text-secondary">85%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Problem Solving</span>
                        <span className="text-sm font-semibold text-accent">90%</span>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border/50">
                      <div className="text-2xl font-bold text-green-500 mb-1">89/100</div>
                      <div className="text-sm text-muted-foreground">AI-Proof Traits Score</div>
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
                Teknologi Interview AI Terdepan
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Gabungan AI analysis, psychology, dan budaya kerja Indonesia untuk memberikan 
                feedback yang akurat dan actionable.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="border-border/50 hover:border-secondary/30 transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-secondary" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {feature.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-secondary" />
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

        {/* Question Types */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Pertanyaan Interview Masa Depan
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Database 500+ pertanyaan yang dirancang untuk menguji kesiapan Anda menghadapi 
                era AI dan pekerjaan masa depan.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {questionTypes.map((type, index) => (
                <Card key={index} className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">{type.category}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {type.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="p-3 bg-muted/50 rounded-lg">
                          <p className="text-sm italic">"{example}"</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Interview Modes */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Mode Interview Tersedia
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-border/50 hover:border-primary/30 transition-all duration-300">
                <CardHeader className="text-center">
                  <Mic className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Voice-Only Mode</CardTitle>
                  <CardDescription>
                    Interview dengan analisis suara dan tone
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm">Voice clarity analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm">Confidence detection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm">Speed & rhythm feedback</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-secondary/30 transition-all duration-300">
                <CardHeader className="text-center">
                  <Video className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <CardTitle>Video Interview</CardTitle>
                  <CardDescription>
                    Interview lengkap dengan analisis visual
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="text-sm">Body language analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="text-sm">Eye contact tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="text-sm">Professional appearance tips</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-accent/30 transition-all duration-300">
                <CardHeader className="text-center">
                  <MessageSquare className="w-12 h-12 text-accent mx-auto mb-4" />
                  <CardTitle>Text Mode</CardTitle>
                  <CardDescription>
                    Interview tertulis dengan analisis struktur
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm">Content structure analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm">Grammar & clarity check</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm">Answer completeness score</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Stats */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-16">
              Hasil Latihan Terbukti
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="text-5xl font-bold text-secondary mb-4">73%</div>
                <h3 className="text-xl font-semibold mb-2">Performance Improvement</h3>
                <p className="text-muted-foreground">
                  Peningkatan skor interview dalam 1 minggu latihan
                </p>
              </div>
              
              <div className="p-6">
                <div className="text-5xl font-bold text-primary mb-4">2.5x</div>
                <h3 className="text-xl font-semibold mb-2">Success Rate</h3>
                <p className="text-muted-foreground">
                  Lebih tinggi lolos interview dibanding tanpa latihan
                </p>
              </div>
              
              <div className="p-6">
                <div className="text-5xl font-bold text-accent mb-4">500+</div>
                <h3 className="text-xl font-semibold mb-2">Question Database</h3>
                <p className="text-muted-foreground">
                  Pertanyaan berbasis pekerjaan masa depan
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Latih Interview Masa Depan Anda
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Simulasi interview berbasis AI dengan feedback real-time. 
              Tingkatkan AI-Proof Traits dan confidence untuk interview impian Anda.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Mulai Simulasi Interview
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InterviewCoach;