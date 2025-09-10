import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Brain, Zap, Target, Lightbulb, Rocket } from "lucide-react";

const aiTools = [
  {
    category: "Content Creation",
    tools: [
      { name: "ChatGPT", use: "Content writing dan brainstorming", level: "Beginner" },
      { name: "Claude", use: "Long-form content dan research", level: "Intermediate" },
      { name: "Jasper", use: "Marketing copy dan social media", level: "Beginner" },
      { name: "Copy.ai", use: "Sales copy dan email marketing", level: "Beginner" }
    ]
  },
  {
    category: "Design & Visual",
    tools: [
      { name: "Midjourney", use: "AI image generation untuk konten", level: "Intermediate" },
      { name: "DALL-E", use: "Custom illustrations dan mockups", level: "Beginner" },
      { name: "Canva AI", use: "Design automation dan templates", level: "Beginner" },
      { name: "Figma AI", use: "UI/UX design assistance", level: "Advanced" }
    ]
  },
  {
    category: "Data & Analysis",
    tools: [
      { name: "Excel Copilot", use: "Advanced data analysis dan formulas", level: "Intermediate" },
      { name: "Tableau AI", use: "Automated insights dan visualizations", level: "Advanced" },
      { name: "Power BI AI", use: "Business intelligence dan reporting", level: "Intermediate" },
      { name: "DataRobot", use: "Automated machine learning", level: "Advanced" }
    ]
  },
  {
    category: "Productivity",
    tools: [
      { name: "Notion AI", use: "Note-taking dan project management", level: "Beginner" },
      { name: "Otter.ai", use: "Meeting transcription dan summaries", level: "Beginner" },
      { name: "Grammarly", use: "Writing enhancement dan proofreading", level: "Beginner" },
      { name: "Calendly AI", use: "Smart scheduling dan coordination", level: "Beginner" }
    ]
  }
];

const strategies = [
  {
    icon: Shield,
    title: "AI sebagai Alat, Bukan Pengganti",
    description: "Pahami cara menggunakan AI untuk meningkatkan kemampuan, bukan menggantikan kreativitas Anda",
    tips: ["Gunakan AI untuk tugas repetitif", "Fokus pada kreativitas dan strategi", "Selalu add human touch"]
  },
  {
    icon: Brain,
    title: "Skill Kolaborasi dengan AI",
    description: "Pelajari cara berkolaborasi efektif dengan AI untuk hasil maksimal",
    tips: ["Master prompt engineering", "Pahami limitasi AI", "Validasi output AI"]
  },
  {
    icon: Zap,
    title: "Automation yang Cerdas",
    description: "Identifikasi proses yang bisa diotomatisasi untuk meningkatkan efisiensi",
    tips: ["Map workflow saat ini", "Pilih tools yang tepat", "Measure productivity gains"]
  },
  {
    icon: Target,
    title: "Fokus pada Value-Add",
    description: "Concentrasi pada aktivitas yang memberikan value tinggi dan sulit digantikan AI",
    tips: ["Kembangkan critical thinking", "Tingkatkan emotional intelligence", "Build interpersonal skills"]
  }
];

const AICoPilot = () => {
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
                <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 mb-6">
                  AI Collaboration Strategy
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-hero bg-clip-text text-transparent">
                    AI Co-Pilot
                  </span>{" "}
                  Guide
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Panduan lengkap menggunakan AI sebagai alat pendukung karier yang powerful. 
                  200+ AI tools dengan strategi implementasi untuk setiap profesi di Indonesia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-hero">
                    Explore AI Tools
                  </Button>
                  <Button size="lg" variant="outline">
                    Download Guide
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-accent" />
                      AI Productivity Score
                    </CardTitle>
                    <CardDescription>
                      Seberapa optimal Anda menggunakan AI?
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Content Creation</span>
                        <span className="text-sm font-semibold text-green-500">85%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Data Analysis</span>
                        <span className="text-sm font-semibold text-yellow-500">67%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Automation</span>
                        <span className="text-sm font-semibold text-orange-500">43%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Strategic Planning</span>
                        <span className="text-sm font-semibold text-primary">78%</span>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border/50">
                      <div className="text-2xl font-bold text-accent mb-1">68/100</div>
                      <div className="text-sm text-muted-foreground">AI Mastery Level</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Strategies */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Strategi AI-Proof
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                4 strategi inti untuk menggunakan AI sebagai co-pilot yang memberdayakan, 
                bukan menggantikan kemampuan unik Anda.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {strategies.map((strategy, index) => {
                const Icon = strategy.icon;
                return (
                  <Card key={index} className="border-border/50 hover:border-accent/30 transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl">{strategy.title}</CardTitle>
                      <CardDescription>{strategy.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {strategy.tips.map((tip, tipIndex) => (
                          <div key={tipIndex} className="flex items-center gap-2">
                            <Lightbulb className="w-4 h-4 text-accent" />
                            <span className="text-sm text-muted-foreground">{tip}</span>
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

        {/* AI Tools Database */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                200+ AI Tools Database
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Kumpulan lengkap AI tools yang sudah dikurasi untuk setiap profesi. 
                Termasuk panduan praktis dan level kesulitan penggunaan.
              </p>
            </div>

            <div className="space-y-8">
              {aiTools.map((category, index) => (
                <Card key={index} className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-2xl">{category.category}</CardTitle>
                    <CardDescription>AI tools untuk {category.category.toLowerCase()}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {category.tools.map((tool, toolIndex) => (
                        <div key={toolIndex} className="p-4 bg-background rounded-lg border border-border/50">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{tool.name}</h4>
                            <Badge 
                              variant="outline" 
                              className={`text-xs ${
                                tool.level === 'Beginner' ? 'border-green-300 text-green-700' :
                                tool.level === 'Intermediate' ? 'border-yellow-300 text-yellow-700' :
                                'border-red-300 text-red-700'
                              }`}
                            >
                              {tool.level}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{tool.use}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Guide */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Roadmap Implementasi AI
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Panduan step-by-step untuk mengintegrasikan AI dalam workflow harian Anda.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-border/50 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <CardTitle>Assessment & Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-left space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm">Audit workflow saat ini</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm">Identifikasi pain points</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm">Set AI adoption goals</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border/50 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <CardTitle>Tool Selection & Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-left space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm">Pilih 2-3 tools prioritas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm">Master basic features</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm">Practice prompt engineering</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border/50 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <CardTitle>Integration & Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-left space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm">Integrate dalam daily workflow</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm">Measure productivity gains</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm">Continuous improvement</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-16">
              Hasil yang Terukur
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="p-6">
                <div className="text-4xl font-bold text-accent mb-2">47%</div>
                <div className="text-lg font-semibold mb-2">Productivity Increase</div>
                <p className="text-muted-foreground">
                  Rata-rata peningkatan produktivitas setelah menggunakan AI
                </p>
              </div>
              
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">3.2x</div>
                <div className="text-lg font-semibold mb-2">Output Quality</div>
                <p className="text-muted-foreground">
                  Peningkatan kualitas output dengan AI assistance
                </p>
              </div>
              
              <div className="p-6">
                <div className="text-4xl font-bold text-secondary mb-2">68%</div>
                <div className="text-lg font-semibold mb-2">Time Savings</div>
                <p className="text-muted-foreground">
                  Waktu yang dihemat untuk tugas repetitif
                </p>
              </div>
              
              <div className="p-6">
                <div className="text-4xl font-bold text-green-500 mb-2">92%</div>
                <div className="text-lg font-semibold mb-2">User Satisfaction</div>
                <p className="text-muted-foreground">
                  Pengguna yang puas dengan AI implementation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Jadikan AI sebagai Co-Pilot Anda
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Akses database 200+ AI tools dengan panduan implementasi lengkap. 
              Transform your workflow dan tingkatkan produktivitas hingga 47%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Explore AI Tools Database
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Download Implementation Guide
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AICoPilot;