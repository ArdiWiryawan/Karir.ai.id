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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Brain, TrendingUp, AlertTriangle, Shield, Target, Zap, Loader2, Play, BarChart3, Users, Clock } from "lucide-react";
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

const demoProfiles = [
  {
    id: "software-engineer",
    name: "Software Engineer",
    profession: "Software Engineer",
    experience: "3",
    skills: "JavaScript, React, Node.js, Python, Git, MongoDB",
    analysis: {
      aiImpactScore: 25,
      riskLevel: "Low",
      futureOutlook: {
        nextYear: "Permintaan tinggi untuk full-stack developers dengan skill AI/ML",
        next3Years: "Evolusi ke AI-assisted development, fokus pada arsitektur dan problem solving",
        next5Years: "Spesialisasi dalam AI integration dan human-AI collaboration systems"
      },
      recommendations: {
        skillsToLearn: ["Machine Learning", "AI/ML APIs", "Kubernetes", "Cloud Architecture", "Prompt Engineering"],
        skillsToImprove: ["System Design", "DevOps", "Data Structures"],
        aiProofSkills: ["Creative Problem Solving", "System Architecture", "Team Leadership", "Innovation"]
      },
      transitionPaths: [
        {
          targetRole: "AI/ML Engineer",
          difficulty: "Medium",
          timeframe: "8-12 bulan",
          requiredSkills: ["Python", "TensorFlow", "Data Science"]
        },
        {
          targetRole: "Solution Architect",
          difficulty: "Medium",
          timeframe: "12-18 bulan",
          requiredSkills: ["Cloud Platforms", "System Design", "Leadership"]
        }
      ],
      marketData: {
        currentDemand: "High",
        futureDemand: "High",
        salaryTrend: "Increasing"
      }
    }
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing Specialist",
    profession: "Digital Marketing Specialist",
    experience: "5",
    skills: "SEO, Google Ads, Social Media Marketing, Analytics, Content Strategy, Email Marketing",
    analysis: {
      aiImpactScore: 55,
      riskLevel: "Medium",
      futureOutlook: {
        nextYear: "AI tools akan mengotomasi tugas operasional, fokus bergeser ke strategi",
        next3Years: "Kebutuhan tinggi untuk AI-savvy marketers yang bisa mengintegrasikan AI tools",
        next5Years: "Evolusi ke AI Marketing Strategist dengan fokus pada personalisasi dan insights"
      },
      recommendations: {
        skillsToLearn: ["AI Marketing Tools", "Data Analysis", "Marketing Automation", "Predictive Analytics", "Customer Psychology"],
        skillsToImprove: ["Strategic Thinking", "Data Interpretation", "Creative Campaign Design"],
        aiProofSkills: ["Strategic Planning", "Creative Storytelling", "Customer Empathy", "Brand Vision"]
      },
      transitionPaths: [
        {
          targetRole: "AI Marketing Strategist",
          difficulty: "Easy",
          timeframe: "6-9 bulan",
          requiredSkills: ["AI Tools", "Advanced Analytics", "Strategy"]
        },
        {
          targetRole: "Growth Marketing Manager",
          difficulty: "Medium",
          timeframe: "9-12 bulan",
          requiredSkills: ["Product Marketing", "A/B Testing", "Leadership"]
        }
      ],
      marketData: {
        currentDemand: "High",
        futureDemand: "Medium",
        salaryTrend: "Stable"
      }
    }
  },
  {
    id: "customer-service",
    name: "Customer Service Representative",
    profession: "Customer Service Representative",
    experience: "2",
    skills: "Communication, Problem Solving, CRM Software, Phone Support, Email Support, Conflict Resolution",
    analysis: {
      aiImpactScore: 78,
      riskLevel: "High",
      futureOutlook: {
        nextYear: "Chatbots dan AI menangani 70% pertanyaan rutin",
        next3Years: "Transisi ke complex problem solving dan emotional support roles",
        next5Years: "Fokus pada high-touch customer experience dan relationship management"
      },
      recommendations: {
        skillsToLearn: ["AI Chat Management", "Advanced Problem Solving", "Customer Psychology", "Data Analysis", "Process Improvement"],
        skillsToImprove: ["Emotional Intelligence", "Complex Communication", "Technical Skills"],
        aiProofSkills: ["Empathy", "Creative Problem Solving", "Relationship Building", "Cultural Intelligence"]
      },
      transitionPaths: [
        {
          targetRole: "Customer Success Manager",
          difficulty: "Easy",
          timeframe: "4-6 bulan",
          requiredSkills: ["Account Management", "Strategic Thinking", "Business Acumen"]
        },
        {
          targetRole: "UX Researcher",
          difficulty: "Hard",
          timeframe: "12-18 bulan",
          requiredSkills: ["Research Methods", "Data Analysis", "Design Thinking"]
        }
      ],
      marketData: {
        currentDemand: "Medium",
        futureDemand: "Low",
        salaryTrend: "Decreasing"
      }
    }
  }
];

const SkillForecasting = () => {
  const { toast } = useToast();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [selectedDemo, setSelectedDemo] = useState(null);
  const [isDemoRunning, setIsDemoRunning] = useState(false);
  const [demoProgress, setDemoProgress] = useState(0);
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

  const runDemo = async (demoProfile) => {
    setIsDemoRunning(true);
    setSelectedDemo(null);
    setDemoProgress(0);

    // Simulate AI analysis process
    const steps = [
      { progress: 20, message: "Menganalisis profesi dan skill..." },
      { progress: 40, message: "Menghitung AI Impact Score..." },
      { progress: 60, message: "Membuat prediksi masa depan..." },
      { progress: 80, message: "Generating rekomendasi..." },
      { progress: 100, message: "Analisis selesai!" }
    ];

    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setDemoProgress(step.progress);
      
      if (step.progress === 100) {
        setSelectedDemo(demoProfile);
        toast({
          title: "Demo Analisis Selesai",
          description: `Hasil untuk ${demoProfile.name} telah ditampilkan`,
        });
      }
    }
    
    setIsDemoRunning(false);
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

        {/* Interactive Demo */}
        <section id="demo" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Demo Interaktif AI Analysis
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Lihat bagaimana AI kami menganalisis berbagai profesi dan memberikan insight yang akurat 
                untuk masa depan karier Anda.
              </p>
            </div>

            <Tabs defaultValue="demo-profiles" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="demo-profiles">Demo Profesi</TabsTrigger>
                <TabsTrigger value="live-stats">Live Statistics</TabsTrigger>
              </TabsList>

              <TabsContent value="demo-profiles" className="space-y-8">
                <div className="grid md:grid-cols-3 gap-6">
                  {demoProfiles.map((profile) => (
                    <Card key={profile.id} className="border-border/50 hover:border-primary/30 transition-all cursor-pointer">
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span>{profile.name}</span>
                          <Badge variant={
                            profile.analysis.aiImpactScore > 70 ? 'destructive' : 
                            profile.analysis.aiImpactScore > 40 ? 'secondary' : 
                            'default'
                          }>
                            {profile.analysis.aiImpactScore}% Risk
                          </Badge>
                        </CardTitle>
                        <CardDescription>
                          Experience: {profile.experience === "0" ? "Fresh Graduate" : `${profile.experience} tahun`}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm font-medium mb-2">Key Skills:</p>
                            <div className="flex flex-wrap gap-1">
                              {profile.skills.split(', ').slice(0, 3).map((skill, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                              {profile.skills.split(', ').length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                  +{profile.skills.split(', ').length - 3}
                                </Badge>
                              )}
                            </div>
                          </div>
                          
                          <Button 
                            onClick={() => runDemo(profile)}
                            disabled={isDemoRunning}
                            className="w-full"
                            variant={selectedDemo?.id === profile.id ? "default" : "outline"}
                          >
                            <Play className="w-4 h-4 mr-2" />
                            {isDemoRunning ? "Analyzing..." : "Run Analysis"}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {isDemoRunning && (
                  <Card className="border-border/50">
                    <CardContent className="p-8 text-center">
                      <div className="space-y-4">
                        <Brain className="w-16 h-16 mx-auto text-primary animate-pulse" />
                        <h3 className="text-xl font-semibold">AI Sedang Menganalisis...</h3>
                        <Progress value={demoProgress} className="w-full max-w-md mx-auto" />
                        <p className="text-muted-foreground">
                          Memproses data dengan teknologi machine learning terdepan
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {selectedDemo && !isDemoRunning && (
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <Card className="border-border/50">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Brain className="w-5 h-5 text-primary" />
                            AI Impact Analysis
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-center space-y-4">
                            <div className={`text-6xl font-bold ${
                              selectedDemo.analysis.aiImpactScore > 70 ? 'text-red-500' : 
                              selectedDemo.analysis.aiImpactScore > 40 ? 'text-orange-500' : 
                              'text-green-500'
                            }`}>
                              {selectedDemo.analysis.aiImpactScore}%
                            </div>
                            <Badge variant={
                              selectedDemo.analysis.riskLevel === 'High' ? 'destructive' : 
                              selectedDemo.analysis.riskLevel === 'Medium' ? 'secondary' : 
                              'default'
                            }>
                              Risk Level: {selectedDemo.analysis.riskLevel}
                            </Badge>
                            <div className="pt-4">
                              <div className="w-full bg-muted rounded-full h-3">
                                <div 
                                  className={`h-3 rounded-full transition-all duration-1000 ${
                                    selectedDemo.analysis.aiImpactScore > 70 ? 'bg-red-500' : 
                                    selectedDemo.analysis.aiImpactScore > 40 ? 'bg-orange-500' : 
                                    'bg-green-500'
                                  }`}
                                  style={{ width: `${selectedDemo.analysis.aiImpactScore}%` }}
                                />
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-border/50">
                        <CardHeader>
                          <CardTitle>Market Outlook</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                              <div className={`text-2xl font-bold ${
                                selectedDemo.analysis.marketData.currentDemand === 'High' ? 'text-green-500' :
                                selectedDemo.analysis.marketData.currentDemand === 'Medium' ? 'text-orange-500' :
                                'text-red-500'
                              }`}>
                                {selectedDemo.analysis.marketData.currentDemand}
                              </div>
                              <p className="text-sm text-muted-foreground">Current Demand</p>
                            </div>
                            <div>
                              <div className={`text-2xl font-bold ${
                                selectedDemo.analysis.marketData.futureDemand === 'High' ? 'text-green-500' :
                                selectedDemo.analysis.marketData.futureDemand === 'Medium' ? 'text-orange-500' :
                                'text-red-500'
                              }`}>
                                {selectedDemo.analysis.marketData.futureDemand}
                              </div>
                              <p className="text-sm text-muted-foreground">Future Demand</p>
                            </div>
                            <div>
                              <div className={`text-2xl font-bold ${
                                selectedDemo.analysis.marketData.salaryTrend === 'Increasing' ? 'text-green-500' :
                                selectedDemo.analysis.marketData.salaryTrend === 'Stable' ? 'text-orange-500' :
                                'text-red-500'
                              }`}>
                                {selectedDemo.analysis.marketData.salaryTrend === 'Increasing' ? '↗' :
                                 selectedDemo.analysis.marketData.salaryTrend === 'Stable' ? '→' : '↘'}
                              </div>
                              <p className="text-sm text-muted-foreground">Salary Trend</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="space-y-6">
                      <Card className="border-border/50">
                        <CardHeader>
                          <CardTitle>Future Outlook</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-3">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <Clock className="w-4 h-4 text-primary" />
                                <span className="font-semibold text-sm">1 Tahun ke Depan</span>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {selectedDemo.analysis.futureOutlook.nextYear}
                              </p>
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <Clock className="w-4 h-4 text-primary" />
                                <span className="font-semibold text-sm">3 Tahun ke Depan</span>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {selectedDemo.analysis.futureOutlook.next3Years}
                              </p>
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <Clock className="w-4 h-4 text-primary" />
                                <span className="font-semibold text-sm">5 Tahun ke Depan</span>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {selectedDemo.analysis.futureOutlook.next5Years}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-border/50">
                        <CardHeader>
                          <CardTitle>Transition Opportunities</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {selectedDemo.analysis.transitionPaths.map((path, index) => (
                              <div key={index} className="p-4 border border-border rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="font-semibold">{path.targetRole}</h4>
                                  <Badge variant={
                                    path.difficulty === 'Easy' ? 'default' :
                                    path.difficulty === 'Medium' ? 'secondary' :
                                    'destructive'
                                  }>
                                    {path.difficulty}
                                  </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground mb-2">
                                  Timeframe: {path.timeframe}
                                </p>
                                <div className="flex flex-wrap gap-1">
                                  {path.requiredSkills.map((skill, skillIndex) => (
                                    <Badge key={skillIndex} variant="outline" className="text-xs">
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="live-stats">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="border-border/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-primary" />
                        Analyses Today
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-primary">2,847</div>
                      <p className="text-sm text-muted-foreground">+18% from yesterday</p>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Users className="w-5 h-5 text-secondary" />
                        Active Users
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-secondary">12,459</div>
                      <p className="text-sm text-muted-foreground">Across Indonesia</p>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-orange-500" />
                        High Risk Jobs
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-orange-500">234</div>
                      <p className="text-sm text-muted-foreground">Identified this month</p>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Shield className="w-5 h-5 text-green-500" />
                        AI-Proof Skills
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-green-500">156</div>
                      <p className="text-sm text-muted-foreground">Trending skills</p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-border/50 mt-8">
                  <CardHeader>
                    <CardTitle>Real-time AI Impact Trends</CardTitle>
                    <CardDescription>
                      Live data dari analisis yang sedang berjalan di platform
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {aiImpactData.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${
                              item.risk > 70 ? 'bg-red-500 animate-pulse' : 
                              item.risk > 40 ? 'bg-orange-500' : 'bg-green-500'
                            }`} />
                            <span className="font-medium">{item.profession}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                              <div 
                                className={`h-full transition-all duration-1000 ${
                                  item.risk > 70 ? 'bg-red-500' : 
                                  item.risk > 40 ? 'bg-orange-500' : 'bg-green-500'
                                }`}
                                style={{ 
                                  width: `${item.risk}%`,
                                  animation: 'pulse 2s infinite'
                                }}
                              />
                            </div>
                            <span className={`text-sm font-semibold min-w-[3rem] ${item.color}`}>
                              {item.risk}%
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
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