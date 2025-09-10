import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, ArrowRight, CheckCircle, Clock, TrendingUp, Target } from "lucide-react";

const transitionPaths = [
  {
    from: "Content Writer",
    to: "AI Content Strategist",
    risk: "73%",
    timeframe: "4-6 bulan",
    difficulty: "Medium",
    salary: {
      current: "Rp 5-8 juta",
      future: "Rp 12-18 juta"
    },
    keySkills: [
      "AI tools mastery (ChatGPT, Claude)",
      "Content strategy & planning",
      "Data-driven content optimization",
      "Brand voice development"
    ],
    milestones: [
      { task: "Master 3 AI content tools", duration: "2 minggu" },
      { task: "Complete content strategy course", duration: "1 bulan" },
      { task: "Build portfolio dengan AI-generated content", duration: "2 bulan" },
      { task: "Internship di digital agency", duration: "3 bulan" }
    ]
  },
  {
    from: "Data Entry",
    to: "Data Analyst",
    risk: "95%",
    timeframe: "6-8 bulan",
    difficulty: "High",
    salary: {
      current: "Rp 3-5 juta",
      future: "Rp 8-15 juta"
    },
    keySkills: [
      "Excel advanced & Power BI",
      "SQL & database management",
      "Statistical analysis",
      "Data visualization"
    ],
    milestones: [
      { task: "Excel certification", duration: "1 bulan" },
      { task: "SQL fundamentals", duration: "2 bulan" },
      { task: "Statistics & visualization", duration: "2 bulan" },
      { task: "Capstone project", duration: "3 bulan" }
    ]
  },
  {
    from: "Graphic Designer",
    to: "UX/UI Designer",
    risk: "45%",
    timeframe: "3-5 bulan",
    difficulty: "Low",
    salary: {
      current: "Rp 4-7 juta",
      future: "Rp 8-15 juta"
    },
    keySkills: [
      "User research & testing",
      "Figma & prototyping",
      "Design systems",
      "Interaction design"
    ],
    milestones: [
      { task: "UX design fundamentals", duration: "1 bulan" },
      { task: "Figma mastery", duration: "3 minggu" },
      { task: "Portfolio redesign", duration: "1 bulan" },
      { task: "Freelance UX projects", duration: "2 bulan" }
    ]
  }
];

const features = [
  {
    icon: Target,
    title: "Personalized Roadmap",
    description: "Roadmap adaptif berdasarkan skill saat ini dan target karier masa depan",
    details: ["Assessment skill mendalam", "Custom milestone planning", "Progress tracking real-time"]
  },
  {
    icon: Clock,
    title: "Timeline Realistis",
    description: "Estimasi waktu yang akurat berdasarkan data ribuan career changers",
    details: ["Berdasarkan data historis", "Faktor personal considerations", "Flexible adjustment"]
  },
  {
    icon: TrendingUp,
    title: "ROI Calculator",
    description: "Hitung return on investment dari career transition Anda",
    details: ["Salary progression forecast", "Learning cost analysis", "Break-even point calculation"]
  },
  {
    icon: CheckCircle,
    title: "Milestone Tracking",
    description: "Tracking progress dengan milestone mikro yang achievable",
    details: ["Weekly mini-goals", "Progress celebration", "Course correction alerts"]
  }
];

const TransitionPaths = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20 mb-6">
                Career Transformation Roadmap
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Transition
                </span>{" "}
                Paths
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Jalur transisi yang telah terbukti dari pekerjaan berisiko tinggi ke pekerjaan masa depan. 
                Roadmap adaptif dengan milestone mikro dan estimasi waktu yang realistis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-hero">
                  Cari Path Saya
                </Button>
                <Button size="lg" variant="outline">
                  Lihat Semua Paths
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Transition Examples */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Contoh Transition Paths
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Berdasarkan data ribuan career changers yang berhasil, 
                ini adalah jalur transisi yang paling efektif dan realistis.
              </p>
            </div>

            <div className="space-y-12">
              {transitionPaths.map((path, index) => (
                <Card key={index} className="border-border/50 overflow-hidden">
                  <CardHeader className="bg-muted/30">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="text-lg font-semibold">{path.from}</div>
                          <div className="text-sm text-red-500">AI Risk: {path.risk}</div>
                        </div>
                        <ArrowRight className="w-8 h-8 text-primary" />
                        <div className="text-center">
                          <div className="text-lg font-semibold text-primary">{path.to}</div>
                          <div className="text-sm text-green-500">Future-Proof</div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Badge className={`${
                          path.difficulty === 'Low' ? 'bg-green-100 text-green-700' :
                          path.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {path.difficulty} Difficulty
                        </Badge>
                        <Badge variant="outline">
                          {path.timeframe}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Salary Comparison */}
                      <div>
                        <h4 className="font-semibold mb-3">Salary Progression</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Current:</span>
                            <span className="text-sm">{path.salary.current}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Future:</span>
                            <span className="text-sm font-semibold text-green-600">{path.salary.future}</span>
                          </div>
                        </div>
                      </div>

                      {/* Key Skills */}
                      <div>
                        <h4 className="font-semibold mb-3">Key Skills to Develop</h4>
                        <div className="space-y-2">
                          {path.keySkills.map((skill, skillIndex) => (
                            <div key={skillIndex} className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-secondary" />
                              <span className="text-sm text-muted-foreground">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Milestones */}
                      <div>
                        <h4 className="font-semibold mb-3">Learning Milestones</h4>
                        <div className="space-y-3">
                          {path.milestones.map((milestone, milestoneIndex) => (
                            <div key={milestoneIndex} className="flex items-start gap-3">
                              <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center text-xs font-bold text-secondary mt-0.5">
                                {milestoneIndex + 1}
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-medium">{milestone.task}</div>
                                <div className="text-xs text-muted-foreground">{milestone.duration}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-border/50">
                      <Button className="w-full sm:w-auto">
                        Mulai Transition Path Ini
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Fitur Transition Paths
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Technology dan metodologi yang memastikan transition path Anda 
                realistis, terukur, dan achievable.
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

        {/* Success Timeline */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Timeline Sukses Career Transition
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Berdasarkan data dari 2,500+ career changers yang berhasil beralih 
                ke pekerjaan masa depan menggunakan platform kami.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-hero"></div>
                
                <div className="space-y-12">
                  {[
                    { month: "Month 1", title: "Assessment & Planning", desc: "Skill audit dan pemilihan transition path yang tepat" },
                    { month: "Month 2-3", title: "Skill Development", desc: "Intensive learning dan hands-on practice" },
                    { month: "Month 4-5", title: "Portfolio Building", desc: "Real projects dan networking building" },
                    { month: "Month 6+", title: "Job Hunting & Landing", desc: "Apply dan interview untuk role baru" }
                  ].map((phase, index) => (
                    <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                        <Card className="border-border/50">
                          <CardHeader>
                            <CardTitle className="text-lg">{phase.title}</CardTitle>
                            <CardDescription>{phase.desc}</CardDescription>
                          </CardHeader>
                        </Card>
                      </div>
                      
                      <div className="relative z-10">
                        <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                      </div>
                      
                      <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8 text-right'}`}>
                        <div className="text-lg font-semibold text-primary">{phase.month}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-16">
              Success Rate Terbukti
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="p-6">
                <div className="text-4xl font-bold text-secondary mb-2">78%</div>
                <div className="text-lg font-semibold mb-2">Success Rate</div>
                <p className="text-muted-foreground">
                  Berhasil transition dalam 6 bulan pertama
                </p>
              </div>
              
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
                <div className="text-lg font-semibold mb-2">Career Changers</div>
                <p className="text-muted-foreground">
                  Yang sudah berhasil menggunakan platform kami
                </p>
              </div>
              
              <div className="p-6">
                <div className="text-4xl font-bold text-accent mb-2">156%</div>
                <div className="text-lg font-semibold mb-2">Avg Salary Increase</div>
                <p className="text-muted-foreground">
                  Peningkatan gaji rata-rata setelah transition
                </p>
              </div>
              
              <div className="p-6">
                <div className="text-4xl font-bold text-green-500 mb-2">4.2</div>
                <div className="text-lg font-semibold mb-2">Months Average</div>
                <p className="text-muted-foreground">
                  Waktu rata-rata untuk menyelesaikan transition
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Mulai Transition Path Anda
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Dapatkan roadmap personal untuk beralih dari pekerjaan berisiko ke pekerjaan masa depan. 
              78% sukses dalam 6 bulan pertama.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Temukan Path Saya Sekarang
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TransitionPaths;