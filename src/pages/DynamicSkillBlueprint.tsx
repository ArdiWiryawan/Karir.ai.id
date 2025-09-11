import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Brain, Target, Zap, Star, BookOpen, Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Types
interface Skill {
  id: string;
  type: 'Soft Skill' | 'Hard Skill';
  name: string;
  importanceWhy: string;
  coreConcepts: string[];
  courses: {
    provider: string;
    title: string;
    rating: number;
    tag: string;
    logo?: string;
  }[];
  aiCoPilotPrompt: string;
}

interface RoadmapPhase {
  phase: string;
  skills: Skill[];
}

interface BlueprintData {
  profession: string;
  aiImpactScore: number;
  riskLevel: string;
  summary: string;
  roadmap: RoadmapPhase[];
}

// Mock data
const mockBlueprintData: BlueprintData = {
  profession: "Product Manager",
  aiImpactScore: 72,
  riskLevel: "Risiko Sedang",
  summary: "Profesi Anda akan bertransformasi, bukan menghilang. Kunci Anda adalah menguasai AI-Generated Content dan Strategic Branding.",
  roadmap: [
    {
      phase: "Fase 1: Fondasi",
      skills: [
        {
          id: "sk_001",
          type: "Soft Skill",
          name: "Empati Pengguna & Teknik Wawancara",
          importanceWhy: "AI kami menganalisis bahwa 89% lowongan Product Manager di Indonesia mencantumkan kemampuan user research sebagai syarat utama. Skill ini tidak dapat digantikan AI karena membutuhkan interaksi manusia yang mendalam.",
          coreConcepts: ["Persona Development", "Journey Mapping", "Open-ended Questions", "Ethnographic Research"],
          courses: [
            {
              provider: "Coursera",
              title: "Google UX Design Professional Certificate",
              rating: 4.8,
              tag: "Paling Komprehensif"
            },
            {
              provider: "Udemy",
              title: "Complete User Research & Usability Testing Course",
              rating: 4.6,
              tag: "Praktis & Terjangkau"
            }
          ],
          aiCoPilotPrompt: "Act as a senior UX researcher and teach me how to conduct user interviews that uncover deep insights. Give me a framework for asking the right questions and reading between the lines of user responses."
        },
        {
          id: "sk_002",
          type: "Hard Skill",
          name: "Data Analysis & A/B Testing",
          importanceWhy: "85% perusahaan tech Indonesia menggunakan data-driven decision making. Kemampuan menganalisis data dan menjalankan eksperimen adalah fondasi Product Manager modern.",
          coreConcepts: ["Statistical Significance", "Hypothesis Testing", "Conversion Funnels", "Cohort Analysis"],
          courses: [
            {
              provider: "Coursera",
              title: "Google Data Analytics Professional Certificate",
              rating: 4.7,
              tag: "Sertifikat Resmi"
            },
            {
              provider: "Udemy",
              title: "A/B Testing & Conversion Rate Optimization",
              rating: 4.5,
              tag: "Fokus A/B Testing"
            }
          ],
          aiCoPilotPrompt: "Act as a senior data analyst and explain A/B testing methodology to me. Help me understand how to set up experiments, determine sample sizes, and interpret results for product decisions."
        }
      ]
    },
    {
      phase: "Fase 2: Kompetensi Inti",
      skills: [
        {
          id: "sk_003",
          type: "Hard Skill",
          name: "AI-Assisted Product Strategy",
          importanceWhy: "73% startup Indonesia mulai mengintegrasikan AI dalam produk mereka. Product Manager yang tidak memahami AI capabilities akan tertinggal dalam 2-3 tahun ke depan.",
          coreConcepts: ["Machine Learning Basics", "AI Product Integration", "Prompt Engineering", "AI Ethics"],
          courses: [
            {
              provider: "Coursera",
              title: "AI for Product Managers by Duke University",
              rating: 4.9,
              tag: "Khusus PM"
            },
            {
              provider: "Udemy",
              title: "Complete Guide to AI Product Management",
              rating: 4.4,
              tag: "Hands-on Projects"
            }
          ],
          aiCoPilotPrompt: "Act as an AI product strategist and help me understand how to identify AI opportunities in traditional products. Guide me through the process of evaluating AI feasibility and ROI for product features."
        }
      ]
    },
    {
      phase: "Fase 3: Spesialisasi",
      skills: [
        {
          id: "sk_004",
          type: "Soft Skill",
          name: "Strategic Leadership & Stakeholder Management",
          importanceWhy: "91% VP Product di Indonesia menyatakan leadership sebagai skill #1 untuk promosi ke senior level. Kemampuan mempengaruhi tanpa otoritas formal adalah kunci karir PM.",
          coreConcepts: ["Influence Without Authority", "Strategic Communication", "Conflict Resolution", "Cross-functional Leadership"],
          courses: [
            {
              provider: "Coursera",
              title: "Strategic Leadership and Management by University of Illinois",
              rating: 4.6,
              tag: "University Level"
            }
          ],
          aiCoPilotPrompt: "Act as an executive coach specialized in product leadership. Teach me frameworks for managing up, sideways, and down in a tech organization. Help me develop my strategic communication style."
        }
      ]
    }
  ]
};

const DynamicSkillBlueprint = () => {
  const [currentStage, setCurrentStage] = useState<'hook' | 'confession' | 'calculation' | 'revelation'>('hook');
  const [profession, setProfession] = useState('');
  const [userGoal, setUserGoal] = useState('');
  const [showInputModal, setShowInputModal] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [showSkillDetail, setShowSkillDetail] = useState(false);
  const [blueprintData, setBlueprintData] = useState<BlueprintData | null>(null);
  const [loadingText, setLoadingText] = useState('');
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const { toast } = useToast();

  const loadingTexts = [
    "Menganalisis 50.000+ data lowongan kerja...",
    `Memetakan tren skill untuk ${profession}...`,
    `Menyesuaikan rekomendasi untuk tujuan ${userGoal}...`,
    "Hampir selesai menyusun blueprint Anda..."
  ];

  const goalOptions = [
    { value: "secure", label: "Mengamankan posisi saat ini & menaikkan gaji" },
    { value: "transition", label: "Beralih ke jalur karir yang lebih aman dari AI" },
    { value: "beginner", label: "Saya baru memulai & ingin memilih jalur yang tepat" }
  ];

  const handleStartAnalysis = () => {
    if (!profession.trim()) {
      toast({
        title: "Profesi diperlukan",
        description: "Silakan masukkan profesi Anda terlebih dahulu",
        variant: "destructive"
      });
      return;
    }
    setShowInputModal(true);
  };

  const handleAnalysisSubmit = () => {
    if (!userGoal) {
      toast({
        title: "Tujuan diperlukan",
        description: "Silakan pilih tujuan utama Anda",
        variant: "destructive"
      });
      return;
    }

    setShowInputModal(false);
    setCurrentStage('calculation');

    // Simulate loading process
    let textIndex = 0;
    setLoadingText(loadingTexts[textIndex]);

    const interval = setInterval(() => {
      textIndex++;
      if (textIndex < loadingTexts.length) {
        setLoadingText(loadingTexts[textIndex]);
      } else {
        clearInterval(interval);
        // Set mock data and move to revelation stage
        setBlueprintData({
          ...mockBlueprintData,
          profession: profession
        });
        setCurrentStage('revelation');
      }
    }, 2000);
  };

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill);
    setShowSkillDetail(true);
  };

  const copyPrompt = () => {
    if (selectedSkill) {
      navigator.clipboard.writeText(selectedSkill.aiCoPilotPrompt);
      setCopiedPrompt(true);
      toast({
        title: "Prompt disalin!",
        description: "AI Co-Pilot prompt berhasil disalin ke clipboard"
      });
      setTimeout(() => setCopiedPrompt(false), 2000);
    }
  };

  // TAHAP 1: PEMICU (THE HOOK)
  if (currentStage === 'hook') {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-future px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Masa Depan Karir Anda
                <br />
                <span className="text-primary">Dimulai di Sini.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Bukan besok, tapi sekarang. Dapatkan blueprint personal yang akan memastikan Anda tidak hanya bertahan, tapi unggul di era AI.
              </p>
            </div>

            <div className="space-y-6 max-w-md mx-auto">
              <Input
                placeholder="Ketik profesi Anda atau yang Anda impikan..."
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                className="h-14 text-lg text-center border-primary/20 focus:border-primary"
              />
              <Button 
                onClick={handleStartAnalysis}
                className="w-full h-14 text-lg font-semibold"
                variant="hero"
              >
                <Zap className="mr-2 h-5 w-5" />
                Buatkan Blueprint Karir Saya
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="border-primary/20">
                <CardContent className="p-6 text-center">
                  <Brain className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">AI-Powered Analysis</h3>
                  <p className="text-sm text-muted-foreground">Analisis mendalam berbasis 50,000+ data karir</p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="p-6 text-center">
                  <Target className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Personal Blueprint</h3>
                  <p className="text-sm text-muted-foreground">Roadmap yang disesuaikan dengan profil Anda</p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Actionable Steps</h3>
                  <p className="text-sm text-muted-foreground">Langkah konkret dengan rekomendasi kursus</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        {/* TAHAP 2: KONTEKSTUALISASI MODAL */}
        <Dialog open={showInputModal} onOpenChange={setShowInputModal}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl text-center">
                Satu Langkah Lagi untuk Blueprint Personal Anda
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-6 py-4">
              <div className="space-y-2">
                <Label htmlFor="profession-confirm">Profesi Target:</Label>
                <Input
                  id="profession-confirm"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  className="font-semibold"
                />
              </div>
              
              <div className="space-y-3">
                <Label>Tujuan Utama Anda:</Label>
                <RadioGroup value={userGoal} onValueChange={setUserGoal}>
                  {goalOptions.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label htmlFor={option.value} className="cursor-pointer text-sm">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
            
            <Button onClick={handleAnalysisSubmit} className="w-full" variant="hero">
              <Brain className="mr-2 h-4 w-4" />
              Analisis & Buat Blueprint
            </Button>
          </DialogContent>
        </Dialog>

        <Footer />
      </div>
    );
  }

  // TAHAP 3: PROSES ANALISIS (THE CALCULATION)
  if (currentStage === 'calculation') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-future">
        <div className="text-center space-y-8">
          <div className="relative">
            <div className="w-24 h-24 mx-auto rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
            <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-primary/20 animate-glow"></div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Menganalisis Blueprint Karir Anda
            </h2>
            <p className="text-lg text-primary font-medium animate-pulse">
              {loadingText}
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <Progress value={75} className="h-2" />
            <p className="text-sm text-muted-foreground mt-2">
              Memproses data... ini hanya membutuhkan beberapa detik
            </p>
          </div>
        </div>
      </div>
    );
  }

  // TAHAP 4: PENGUNGKAPAN (THE REVELATION)
  if (currentStage === 'revelation' && blueprintData) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-8">
          {/* Above the fold */}
          <div className="text-center space-y-8 mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground">
              Blueprint Karir Masa Depan untuk:
              <br />
              <span className="text-primary">{blueprintData.profession}</span>
            </h1>

            {/* AI Impact Score Card */}
            <Card className="max-w-2xl mx-auto border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-3">
                  <Brain className="h-8 w-8 text-primary" />
                  AI Impact Score
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="space-y-2">
                  <div className="text-6xl font-bold text-primary">
                    {blueprintData.aiImpactScore}/100
                  </div>
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    {blueprintData.riskLevel}
                  </Badge>
                </div>
                <Progress value={blueprintData.aiImpactScore} className="h-3" />
                <p className="text-lg text-muted-foreground mt-4">
                  Skor ini menunjukkan seberapa besar dampak AI terhadap profesi Anda
                </p>
              </CardContent>
            </Card>

            {/* Executive Summary */}
            <Card className="max-w-4xl mx-auto border-accent/20 bg-gradient-future">
              <CardContent className="p-8">
                <p className="text-xl md:text-2xl font-semibold text-center leading-relaxed">
                  {blueprintData.summary}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Below the fold - Skill Roadmap */}
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Roadmap Pengembangan Skill
              </h2>
              <p className="text-lg text-muted-foreground">
                Klik setiap skill untuk melihat panduan lengkap dan rekomendasi kursus
              </p>
            </div>

            {blueprintData.roadmap.map((phase, phaseIndex) => (
              <div key={phaseIndex} className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                    {phaseIndex + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{phase.phase}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-16">
                  {phase.skills.map((skill) => (
                    <Card
                      key={skill.id}
                      className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:border-primary/40"
                      onClick={() => handleSkillClick(skill)}
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge variant={skill.type === 'Soft Skill' ? 'secondary' : 'default'}>
                            {skill.type === 'Soft Skill' ? '🧠' : '🛠️'} {skill.type}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{skill.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Klik untuk melihat panduan lengkap dan rekomendasi kursus
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* TAHAP 5: TINDAKAN (THE ACTION) - Skill Detail Sheet */}
        <Sheet open={showSkillDetail} onOpenChange={setShowSkillDetail}>
          <SheetContent className="w-full md:w-[600px] overflow-y-auto">
            {selectedSkill && (
              <>
                <SheetHeader>
                  <SheetTitle className="text-xl">{selectedSkill.name}</SheetTitle>
                  <Badge variant={selectedSkill.type === 'Soft Skill' ? 'secondary' : 'default'} className="w-fit">
                    {selectedSkill.type === 'Soft Skill' ? '🧠' : '🛠️'} {selectedSkill.type}
                  </Badge>
                </SheetHeader>
                
                <div className="space-y-6 py-6">
                  {/* Why Important */}
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Mengapa Ini Penting?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedSkill.importanceWhy}
                    </p>
                  </div>

                  {/* Core Concepts */}
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Konsep Inti untuk Dipelajari</h3>
                    <ul className="space-y-2">
                      {selectedSkill.coreConcepts.map((concept, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span>{concept}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Course Recommendations */}
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Rekomendasi Kursus Terbaik</h3>
                    <div className="space-y-4">
                      {selectedSkill.courses.map((course, index) => (
                        <Card key={index} className="border-primary/20">
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h4 className="font-semibold">{course.title}</h4>
                                <p className="text-sm text-muted-foreground">{course.provider}</p>
                              </div>
                              <Badge variant="outline">{course.tag}</Badge>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{course.rating}</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* AI Co-Pilot Prompt */}
                  <div>
                    <h3 className="font-semibold text-lg mb-3">🤖 AI Co-Pilot Prompt</h3>
                    <div className="bg-muted p-4 rounded-lg relative">
                      <pre className="text-sm whitespace-pre-wrap text-muted-foreground">
                        {selectedSkill.aiCoPilotPrompt}
                      </pre>
                      <Button
                        size="sm"
                        variant="outline"
                        className="absolute top-2 right-2"
                        onClick={copyPrompt}
                      >
                        {copiedPrompt ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Copy prompt ini ke ChatGPT, Claude, atau AI assistant favorit Anda
                    </p>
                  </div>
                </div>
              </>
            )}
          </SheetContent>
        </Sheet>

        <Footer />
      </div>
    );
  }

  return null;
};

export default DynamicSkillBlueprint;