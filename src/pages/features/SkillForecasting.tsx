import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RoadmapDetail from "@/components/RoadmapDetail";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Brain, TrendingUp, AlertTriangle, Shield, Target, Zap, User, Search, ArrowRight, ArrowLeft, Bot, Users, CheckCircle, Clock, Star, Trophy, PlayCircle, ChevronDown, ChevronUp, HardDrive, Filter, BookOpen, Database, Sparkles, Rocket } from "lucide-react";
import { allJobs, jobsByCategory, futureJobs, disappearingJobs, jobSeparation } from "@/data/jobDatabase";
import { assessmentQuestions, categoryWeights } from "@/data/assessmentQuestions";
import { Job, AssessmentResult, JobMatch, JobCategory } from "@/data/skillForecastingTypes";
import completeJobs from "@/data/completeJobsData";

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
  { profession: "Data Entry", risk: 95, color: "text-destructive" },
  { profession: "Kasir", risk: 87, color: "text-destructive" },
  { profession: "Content Writer", risk: 73, color: "text-accent" },
  { profession: "Graphic Designer", risk: 45, color: "text-accent" },
  { profession: "Sales Representative", risk: 32, color: "text-secondary" },
  { profession: "Psychologist", risk: 12, color: "text-secondary" }
];

const SkillForecasting = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'selection' | 'personal-assessment' | 'job-results' | 'direct-exploration' | 'roadmap-view'>('landing');
  const [selectedJobs, setSelectedJobs] = useState<Job[]>([]);
  const [selectedJobForRoadmap, setSelectedJobForRoadmap] = useState<Job | null>(null);
  const [assessmentAnswers, setAssessmentAnswers] = useState<Record<string, string | number | string[]>>({});
  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  // Direct exploration filters - moved to top level to follow Rules of Hooks
  const [selectedCategory, setSelectedCategory] = useState<JobCategory | 'all'>('all');
  const [selectedRiskLevel, setSelectedRiskLevel] = useState<'all' | 'low' | 'medium' | 'high'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showNewJobs, setShowNewJobs] = useState(false);
  // NEW: Filter untuk memisahkan jenis pekerjaan
  const [jobTypeFilter, setJobTypeFilter] = useState<'all' | 'disappearing' | 'future'>('all');
  
  // Roadmap interaction states for gamification with persistence
  const [expandedPhases, setExpandedPhases] = useState<Set<string>>(new Set());
  const [completedPhases, setCompletedPhases] = useState<Set<string>>(() => {
    // Load completed phases from localStorage on init
    const saved = localStorage.getItem('completedPhases');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });
  const [hoveredPhase, setHoveredPhase] = useState<string | null>(null);

  // Persist completed phases to localStorage
  useEffect(() => {
    localStorage.setItem('completedPhases', JSON.stringify([...completedPhases]));
  }, [completedPhases]);

  // Assessment scoring function
  const calculateJobMatches = (answers: Record<string, string | number | string[]>): JobMatch[] => {
    const categoryScores: Record<JobCategory, number> = {
      'Teknologi & AI': 0,
      'Data & Analytics': 0,
      'Kreatif & Media': 0,
      'Bisnis & Manajemen': 0,
      'Kesehatan & Medis': 0,
      'Keuangan & Fintech': 0,
      'Energi & Lingkungan': 0,
      'Manufaktur & Produksi': 0,
      'Layanan & Hospitality': 0,
      'Pendidikan & Pelatihan': 0,
      'Pemerintahan & Publik': 0,
      'Penelitian & Sains': 0
    };

    let totalPossibleScore = 0;

    // Calculate scores based on answers
    assessmentQuestions.forEach(question => {
      const answer = answers[question.id];
      if (!answer) return;

      const selectedOption = question.options.find(opt => 
        opt.value === answer || opt.id === answer
      );
      
      if (selectedOption && selectedOption.jobCategories) {
        const questionWeight = question.weight || 1;
        const categoryWeight = categoryWeights[question.category] || 0.1;
        
        // For scale questions, use the numeric value as intensity multiplier
        let intensityMultiplier = 1;
        if (question.type === 'scale' && typeof selectedOption.value === 'number') {
          intensityMultiplier = selectedOption.value / 5; // Normalize 1-5 scale to 0.2-1.0
        }
        
        const score = questionWeight * categoryWeight * intensityMultiplier;
        totalPossibleScore += questionWeight * categoryWeight; // For normalization
        
        selectedOption.jobCategories.forEach(category => {
          if (category in categoryScores) {
            categoryScores[category as JobCategory] += score;
          }
        });
      }
    });

    // Use complete jobs for matching with deduplication
    const jobsToMatch = [...completeJobs, ...allJobs];
    const uniqueJobs = jobsToMatch.filter((job, index, self) => 
      index === self.findIndex(j => j.id === job.id)
    );
    
    // Calculate job matches with normalized scores
    const matches: JobMatch[] = uniqueJobs.map(job => {
      const rawScore = categoryScores[job.category as JobCategory] || 0;
      const normalizedScore = totalPossibleScore > 0 ? (rawScore / totalPossibleScore) : 0;
      
      return {
        job,
        matchScore: Math.min(normalizedScore, 1), // Cap at 100%
        reasoning: [
          `Sesuai dengan minat di ${job.category}`,
          ...(normalizedScore > 0.6 ? ['Match score tinggi dengan preferensi Anda'] : []),
          ...(job.isNewProfession ? ['Profesi masa depan dengan prospek cerah'] : []),
          ...(job.aiReplacementRisk <= 20 ? ['Aman dari penggantian AI'] : [])
        ]
      };
    });

    // Sort by match score and return top 10
    const sortedMatches = matches
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 10);

    // Ensure we have at least some matches even if scores are low
    if (sortedMatches.length === 0 || sortedMatches[0].matchScore === 0) {
      // Fallback: return jobs from complete jobs with basic reasons
      return completeJobs.slice(0, 5).map(job => ({
        job,
        matchScore: 0.3, // Give a baseline score
        reasoning: [
          'Profesi populer dengan prospek bagus',
          'Cocok untuk eksplorasi karier baru'
        ]
      }));
    }

    return sortedMatches;
  };

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
    <section className="relative py-24 bg-gradient-future min-h-screen flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 space-y-6 animate-fade-in-up">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
            <Brain className="w-4 h-4 mr-2" />
            Dua Jalur Prediksi Karier Masa Depan
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Pilih Jalur
            </span>{" "}
            Prediksi Anda
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dapatkan rekomendasi karier yang tepat dengan AI-powered analysis
            yang disesuaikan dengan kepribadian dan tren masa depan Indonesia
          </p>

          {/* Quick Stats */}
          <div className="flex justify-center gap-8 pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Profesi Masa Depan</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">95%</div>
              <div className="text-sm text-muted-foreground">Akurasi Prediksi</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">3-5 Tahun</div>
              <div className="text-sm text-muted-foreground">Roadmap Karier</div>
            </div>
          </div>
        </div>

        {/* Selection Cards */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Personal Assessment Path */}
          <Card 
            className="group relative overflow-hidden border-2 hover:border-primary/30 hover:shadow-future transition-all duration-500 cursor-pointer hover:-translate-y-2 animate-fade-in-up bg-card/80 backdrop-blur-sm"
            onClick={handlePersonalPath}
            data-testid="button-personal-path"
            style={{animationDelay: '0.2s'}}
          >
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  Direkomendasikan
                </Badge>
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-ai-glow">
                  <User className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold">
                AI-Powered Personal Assessment
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground leading-relaxed">
                Jawab pertanyaan yang dipersonalisasi untuk mendapatkan rekomendasi 
                pekerjaan yang paling sesuai dengan kepribadian, minat, dan keahlian Anda
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Benefits */}
              <div className="space-y-3">
                {[
                  { icon: Brain, text: "Analisis kepribadian & minat mendalam" },
                  { icon: Target, text: "Matching dengan 500+ profesi masa depan" },
                  { icon: TrendingUp, text: "Roadmap pembelajaran yang dipersonalisasi" }
                ].map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{benefit.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full group-hover:scale-105 transition-all duration-300 text-base font-semibold"
              >
                Mulai Assessment Gratis
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Additional Info */}
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-2">
                <Clock className="w-3 h-3" />
                <span>Estimasi waktu: 10-15 menit</span>
              </div>
            </CardContent>
          </Card>

          {/* Direct Job Exploration Path */}
          <Card 
            className="group relative overflow-hidden border-2 hover:border-secondary/30 hover:shadow-future transition-all duration-500 cursor-pointer hover:-translate-y-2 animate-fade-in-up bg-card/80 backdrop-blur-sm"
            onClick={handleDirectPath}
            data-testid="button-direct-path"
            style={{animationDelay: '0.4s'}}
          >
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">
                  Eksplorasi Bebas
                </Badge>
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-future">
                  <Search className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold">
                Eksplorasi Pekerjaan Langsung
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground leading-relaxed">
                Jelajahi langsung database lengkap pekerjaan masa depan, lihat prediksi gaji, 
                risiko AI, dan roadmap pembelajaran untuk setiap profesi
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Benefits */}
              <div className="space-y-3">
                {[
                  { icon: HardDrive, text: "500+ pekerjaan dengan data lengkap" },
                  { icon: Filter, text: "Filter berdasarkan kategori & risiko AI" },
                  { icon: BookOpen, text: "Roadmap & rekomendasi kursus detail" }
                ].map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/5 hover:bg-secondary/10 transition-colors">
                      <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="text-sm font-medium">{benefit.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <Button 
                variant="future" 
                size="lg" 
                className="w-full group-hover:scale-105 transition-all duration-300 text-base font-semibold"
              >
                Mulai Eksplorasi
                <Search className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Additional Info */}
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-2">
                <Zap className="w-3 h-3" />
                <span>Akses langsung, tanpa perlu assessment</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 space-y-6 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          {/* Additional Info */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 max-w-4xl mx-auto">
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Tidak yakin mana yang lebih cocok?</strong><br />
              Assessment AI-Powered memberikan hasil yang lebih personal dan akurat, 
              sementara Eksplorasi Langsung cocok untuk Anda yang sudah tahu minat spesifik.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>100% Gratis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <span>Data Ter-update</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span>Khusus Indonesia</span>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => setCurrentView('landing')}
            data-testid="button-back-to-landing"
            className="group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Halaman Utama
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
    const currentQuestion = assessmentQuestions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === assessmentQuestions.length - 1;
    
    const handleAnswerSelect = (value: string | number) => {
      setAssessmentAnswers(prev => ({
        ...prev,
        [currentQuestion.id]: value
      }));
    };

    const handleNext = () => {
      // Validation: ensure question is answered
      if (!currentAnswer) {
        return; // Don't proceed if no answer selected
      }

      if (isLastQuestion) {
        // Calculate matches and show results
        const matches = calculateJobMatches(assessmentAnswers);
        setJobMatches(matches);
        setCurrentView('job-results');
      } else {
        setCurrentQuestionIndex(prev => prev + 1);
      }
    };

    const handlePrevious = () => {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(prev => prev - 1);
      }
    };

    const currentAnswer = assessmentAnswers[currentQuestion.id];

    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="py-12">
            <div className="max-w-4xl mx-auto px-4">
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">
                    Pertanyaan {currentQuestionIndex + 1} dari {assessmentQuestions.length}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {Math.round(((currentQuestionIndex + 1) / assessmentQuestions.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-hero h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestionIndex + 1) / assessmentQuestions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
                  <CardDescription>
                    Pilih jawaban yang paling sesuai dengan preferensi Anda
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {currentQuestion.options.map((option) => (
                      <div
                        key={option.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-all ${
                          currentAnswer === option.value || currentAnswer === option.id
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-border/80 hover:bg-muted/50'
                        }`}
                        onClick={() => handleAnswerSelect(option.value || option.id)}
                        data-testid={`option-${option.id}`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-4 h-4 rounded-full border-2 ${
                            currentAnswer === option.value || currentAnswer === option.id
                              ? 'border-primary bg-primary'
                              : 'border-muted-foreground/30'
                          }`}>
                            {(currentAnswer === option.value || currentAnswer === option.id) && (
                              <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5" />
                            )}
                          </div>
                          <span className="text-sm font-medium">{option.text}</span>
                          {currentQuestion.type === 'scale' && typeof option.value === 'number' && (
                            <Badge variant="outline">{option.value}</Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Navigation */}
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  data-testid="button-previous"
                >
                  Sebelumnya
                </Button>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentView('selection')}
                    data-testid="button-back-to-selection"
                  >
                    Kembali ke Pilihan
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={!currentAnswer}
                    data-testid="button-next"
                  >
                    {isLastQuestion ? 'Lihat Hasil' : 'Selanjutnya'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (currentView === 'job-results') {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="py-12">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Hasil Assessment Anda</h2>
                <p className="text-xl text-muted-foreground">
                  Kami telah menganalisis jawaban Anda dan menemukan {jobMatches.length} pekerjaan yang cocok
                </p>
              </div>

              {/* Job matches grid */}
              <div className="grid gap-6 mb-8">
                {jobMatches.slice(0, 5).map((match, index) => (
                  <Card key={match.job.id} className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <h3 className="text-xl font-semibold" data-testid={`job-title-${match.job.id}`}>
                            {match.job.title}
                          </h3>
                          <Badge variant="outline" className="text-xs">
                            #{index + 1} Match
                          </Badge>
                          <Badge 
                            variant={match.job.isNewProfession ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {match.job.isNewProfession ? "Profesi Baru" : "Profesi Established"}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-3">{match.job.description}</p>
                        
                        {/* Key metrics */}
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div>
                            <div className="text-sm text-muted-foreground">Gaji (per tahun)</div>
                            <div className="font-semibold text-green-600">
                              Rp {Math.round(match.job.salaryRange.min / 1000000)}-{Math.round(match.job.salaryRange.max / 1000000)} juta
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">AI Risk Level</div>
                            <div className="flex items-center space-x-2">
                              <div className={`w-3 h-3 rounded-full ${
                                match.job.aiReplacementRisk <= 20 ? 'bg-green-500' :
                                match.job.aiReplacementRisk <= 50 ? 'bg-yellow-500' : 'bg-red-500'
                              }`}></div>
                              <span className="text-sm font-medium">
                                {match.job.aiReplacementRisk <= 20 ? 'Rendah' :
                                 match.job.aiReplacementRisk <= 50 ? 'Sedang' : 'Tinggi'} ({match.job.aiReplacementRisk}%)
                              </span>
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Proyeksi Pertumbuhan</div>
                            <div className="font-semibold text-blue-600">{match.job.growthProjection}</div>
                          </div>
                        </div>

                        {/* Match reasons */}
                        <div className="mb-4">
                          <div className="text-sm font-medium mb-2">Mengapa cocok untuk Anda:</div>
                          <div className="flex flex-wrap gap-2">
                            {match.reasoning.map((reason, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {reason}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Skills preview */}
                        {match.job.requiredSkills && match.job.requiredSkills.length > 0 && (
                          <div className="mb-4">
                            <div className="text-sm font-medium mb-2">Skills yang dibutuhkan:</div>
                            <div className="flex flex-wrap gap-2">
                              {match.job.requiredSkills.slice(0, 4).map((skill) => (
                                <Badge key={skill.id} variant="outline" className="text-xs">
                                  {skill.name}
                                </Badge>
                              ))}
                              {match.job.requiredSkills.length > 4 && (
                                <Badge variant="outline" className="text-xs">
                                  +{match.job.requiredSkills.length - 4} lainnya
                                </Badge>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex flex-col space-y-2 ml-4">
                        <Button 
                          size="sm"
                          onClick={() => {
                            setSelectedJobs([match.job]);
                            setCurrentView('roadmap-view');
                          }}
                          data-testid={`button-view-roadmap-${match.job.id}`}
                        >
                          Lihat Roadmap
                        </Button>
                        <div className="text-center">
                          <div className="text-xs text-muted-foreground">Match Score</div>
                          <div className="text-lg font-bold text-blue-600">
                            {Math.round(match.matchScore * 100)}%
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Actions */}
              <div className="flex justify-center space-x-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setCurrentQuestionIndex(0);
                    setAssessmentAnswers({});
                    setCurrentView('personal-assessment');
                  }}
                  data-testid="button-retake-assessment"
                >
                  Ulangi Assessment
                </Button>
                <Button
                  onClick={() => setCurrentView('direct-exploration')}
                  data-testid="button-explore-all-jobs"
                >
                  Jelajahi Semua Pekerjaan
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setCurrentView('selection')}
                  data-testid="button-back-to-main"
                >
                  Kembali ke Menu Utama
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (currentView === 'direct-exploration') {
    // Combine all jobs for exploration
    const allJobsForExploration = [...completeJobs, ...allJobs]
      .filter((job, index, self) => index === self.findIndex(j => j.id === job.id)); // Deduplicate

    // Filter jobs based on selected filters
    const filteredJobs = allJobsForExploration.filter(job => {
      // Category filter
      if (selectedCategory !== 'all' && job.category !== selectedCategory) {
        return false;
      }

      // NEW: Job type filter - pisahkan pekerjaan yang akan hilang vs masa depan
      if (jobTypeFilter === 'disappearing') {
        // Tampilkan hanya pekerjaan yang akan hilang (risiko tinggi, pertumbuhan menurun)
        const isDisappearingJob = disappearingJobs.some(disappearingJob => disappearingJob.id === job.id);
        if (!isDisappearingJob) return false;
      } else if (jobTypeFilter === 'future') {
        // Tampilkan hanya pekerjaan masa depan (risiko rendah, pertumbuhan tinggi)
        const isFutureJob = futureJobs.some(futureJob => futureJob.id === job.id);
        if (!isFutureJob) return false;
      }

      // Risk level filter
      if (selectedRiskLevel !== 'all') {
        if (selectedRiskLevel === 'low' && job.aiReplacementRisk > 20) return false;
        if (selectedRiskLevel === 'medium' && (job.aiReplacementRisk <= 20 || job.aiReplacementRisk > 50)) return false;
        if (selectedRiskLevel === 'high' && job.aiReplacementRisk <= 50) return false;
      }

      // New jobs filter
      if (showNewJobs && !job.isNewProfession) {
        return false;
      }

      // Search query filter
      if (searchQuery && !job.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
          !job.description.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      return true;
    });

    // Get unique categories for filter
    const uniqueCategories = Array.from(new Set(allJobsForExploration.map(job => job.category))) as JobCategory[];

    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="py-12">
            <div className="max-w-7xl mx-auto px-4">
              {/* Header */}
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Eksplorasi Pekerjaan Masa Depan</h1>
                <p className="text-xl text-muted-foreground">
                  Jelajahi {allJobsForExploration.length}+ pekerjaan dengan prediksi AI, salary, dan roadmap lengkap
                </p>
              </div>

              {/* Filters */}
              <Card className="mb-8 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Search */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Cari Pekerjaan</label>
                    <input
                      type="text"
                      placeholder="Cari berdasarkan nama atau deskripsi..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-3 py-2 border border-input rounded-md focus:ring-2 focus:ring-ring focus:border-transparent bg-background"
                      data-testid="input-job-search"
                    />
                  </div>

                  {/* Category Filter */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Kategori</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value as JobCategory | 'all')}
                      className="w-full px-3 py-2 border border-input rounded-md focus:ring-2 focus:ring-ring focus:border-transparent bg-background"
                      data-testid="select-job-category"
                    >
                      <option value="all">Semua Kategori</option>
                      {uniqueCategories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  {/* AI Risk Filter */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">AI Risk Level</label>
                    <select
                      value={selectedRiskLevel}
                      onChange={(e) => setSelectedRiskLevel(e.target.value as 'all' | 'low' | 'medium' | 'high')}
                      className="w-full px-3 py-2 border border-input rounded-md focus:ring-2 focus:ring-ring focus:border-transparent bg-background"
                      data-testid="select-ai-risk"
                    >
                      <option value="all">Semua Risk Level</option>
                      <option value="low">Rendah (maksimal 20%)</option>
                      <option value="medium">Sedang (21-50%)</option>
                      <option value="high">Tinggi (lebih dari 50%)</option>
                    </select>
                  </div>

                  {/* Job Type Filter - NEW: Pisahkan pekerjaan yang akan hilang vs masa depan */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Jenis Pekerjaan</label>
                    <select
                      value={jobTypeFilter}
                      onChange={(e) => setJobTypeFilter(e.target.value as 'all' | 'disappearing' | 'future')}
                      className="w-full p-2 border border-input rounded-md focus:ring-2 focus:ring-ring focus:border-ring bg-background"
                      data-testid="select-job-type"
                    >
                      <option value="all">🔍 Semua Pekerjaan</option>
                      <option value="disappearing">⚠️ Pekerjaan yang Akan Hilang</option>
                      <option value="future">🚀 Pekerjaan Masa Depan</option>
                    </select>
                    {/* Keep the new jobs toggle as additional filter */}
                    <div className="mt-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={showNewJobs}
                          onChange={(e) => setShowNewJobs(e.target.checked)}
                          className="rounded border-input text-primary focus:ring-ring"
                          data-testid="checkbox-new-jobs"
                        />
                        <span className="text-sm">Hanya Profesi Baru</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Active filters count */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Menampilkan {filteredJobs.length} dari {allJobsForExploration.length} pekerjaan
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedRiskLevel('all');
                      setSearchQuery('');
                      setShowNewJobs(false);
                      setJobTypeFilter('all'); // Reset job type filter
                    }}
                    data-testid="button-clear-filters"
                  >
                    Reset Filter
                  </Button>
                </div>
              </Card>

              {/* Jobs Grid */}
              {filteredJobs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredJobs.map((job) => (
                    <Card key={job.id} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="text-xs">
                            {job.category}
                          </Badge>
                          {job.isNewProfession && (
                            <Badge variant="default" className="text-xs">
                              Profesi Baru
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold mb-2" data-testid={`job-card-title-${job.id}`}>
                          {job.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {job.description}
                        </p>
                      </div>

                      {/* Key metrics */}
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">Gaji (per tahun)</span>
                          <span className="text-sm font-medium text-green-600">
                            Rp {Math.round(job.salaryRange.min / 1000000)}-{Math.round(job.salaryRange.max / 1000000)}jt
                          </span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">AI Risk</span>
                          <div className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full ${
                              job.aiReplacementRisk <= 20 ? 'bg-green-500' :
                              job.aiReplacementRisk <= 50 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}></div>
                            <span className="text-sm font-medium">{job.aiReplacementRisk}%</span>
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">Pertumbuhan</span>
                          <span className="text-sm font-medium text-blue-600">{job.growthProjection}</span>
                        </div>
                      </div>

                      {/* Skills preview */}
                      {job.requiredSkills && job.requiredSkills.length > 0 && (
                        <div className="mb-4">
                          <div className="text-xs text-muted-foreground mb-2">Top Skills:</div>
                          <div className="flex flex-wrap gap-1">
                            {job.requiredSkills.slice(0, 3).map((skill) => (
                              <Badge key={skill.id} variant="secondary" className="text-xs">
                                {skill.name}
                              </Badge>
                            ))}
                            {job.requiredSkills.length > 3 && (
                              <Badge variant="secondary" className="text-xs">
                                +{job.requiredSkills.length - 3}
                              </Badge>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          onClick={() => {
                            setSelectedJobs([job]);
                            setCurrentView('roadmap-view');
                          }}
                          className="flex-1"
                          data-testid={`button-view-roadmap-${job.id}`}
                        >
                          Lihat Roadmap
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setJobMatches([{
                              job,
                              matchScore: 0.8,
                              reasoning: ['Dipilih dari eksplorasi langsung', 'Profesi dengan prospek bagus']
                            }]);
                            setCurrentView('job-results');
                          }}
                          data-testid={`button-view-details-${job.id}`}
                        >
                          Detail
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold mb-2">Tidak ada pekerjaan ditemukan</h3>
                  <p className="text-muted-foreground mb-4">
                    Coba ubah filter atau kata kunci pencarian Anda
                  </p>
                  <Button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedRiskLevel('all');
                      setSearchQuery('');
                      setShowNewJobs(false);
                      setJobTypeFilter('all'); // Reset job type filter
                    }}
                    data-testid="button-reset-search"
                  >
                    Reset Semua Filter
                  </Button>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-center mt-12">
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentView('selection')}
                    data-testid="button-back-to-selection"
                  >
                    Kembali ke Pilihan
                  </Button>
                  <Button
                    onClick={() => setCurrentView('personal-assessment')}
                    data-testid="button-try-assessment"
                  >
                    Coba Personal Assessment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (currentView === 'roadmap-view') {
    const selectedJob = selectedJobForRoadmap;
    if (!selectedJob) {
      return (
        <div className="min-h-screen">
          <Header />
          <main className="pt-20">
            <div className="py-24 text-center">
              <h2 className="text-3xl font-bold mb-4">Roadmap tidak tersedia</h2>
              <p className="text-muted-foreground mb-8">
                Maaf, roadmap untuk pekerjaan ini belum tersedia.
              </p>
              <Button onClick={() => setCurrentView('job-results')} data-testid="button-back-to-results">
                Kembali ke Hasil
              </Button>
            </div>
          </main>
          <Footer />
        </div>
      );
    }

    const roadmap = selectedJob.roadmap;
    const totalDuration = roadmap.totalDuration;
    const difficulty = roadmap.difficulty;

    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="py-12">
            <div className="max-w-6xl mx-auto px-4">
              {/* Header */}
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4">
                  {selectedJob.category}
                </Badge>
                <h1 className="text-4xl font-bold mb-4" data-testid="roadmap-job-title">
                  Learning Roadmap: {selectedJob.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  {selectedJob.description}
                </p>
                
                {/* Key metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card className="p-4">
                    <div className="text-sm text-muted-foreground">Total Durasi</div>
                    <div className="text-2xl font-bold text-primary">{totalDuration}</div>
                  </Card>
                  <Card className="p-4">
                    <div className="text-sm text-muted-foreground">Tingkat Kesulitan</div>
                    <div className={`text-2xl font-bold ${
                      difficulty === 'Pemula' ? 'text-secondary' :
                      difficulty === 'Menengah' ? 'text-orange-500' : 'text-destructive'
                    }`}>
                      {difficulty}
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="text-sm text-muted-foreground">Jumlah Phase</div>
                    <div className="text-2xl font-bold text-accent">{roadmap.phases.length} Fase</div>
                  </Card>
                </div>

                {/* Salary and AI Risk */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">Prediksi Gaji (per tahun)</div>
                    <div className="text-3xl font-bold text-secondary mb-2">
                      Rp {Math.round(selectedJob.salaryRange.min / 1000000)}-{Math.round(selectedJob.salaryRange.max / 1000000)} juta
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Proyeksi: {selectedJob.growthProjection}
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">AI Replacement Risk</div>
                    <div className="flex items-center space-x-4 mb-2">
                      <div className={`w-6 h-6 rounded-full ${
                        selectedJob.aiReplacementRisk <= 20 ? 'bg-secondary' :
                        selectedJob.aiReplacementRisk <= 50 ? 'bg-orange-500' : 'bg-destructive'
                      }`}></div>
                      <span className="text-3xl font-bold">
                        {selectedJob.aiReplacementRisk}%
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {selectedJob.aiReplacementRisk <= 20 ? 'Risiko Rendah - Aman untuk masa depan' :
                       selectedJob.aiReplacementRisk <= 50 ? 'Risiko Sedang - Butuh adaptasi' : 
                       'Risiko Tinggi - Perlu strategi khusus'}
                    </div>
                  </Card>
                </div>
              </div>

              {/* Gamified Interactive Roadmap Timeline */}
              <div className="mb-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">🗺️ Interactive Learning Journey</h2>
                  <p className="text-muted-foreground mb-6">
                    Klik setiap fase untuk melihat detail pembelajaran dan materials lengkap
                  </p>
                  
                  {/* Progress Overview */}
                  <div className="max-w-2xl mx-auto mb-8">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Progress Keseluruhan</span>
                      <span className="text-sm text-muted-foreground">
                        {completedPhases.size} dari {roadmap.phases.length} fase selesai
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div 
                        className="bg-gradient-hero h-3 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${(completedPhases.size / roadmap.phases.length) * 100}%` }}
                      />
                    </div>
                    {completedPhases.size > 0 && (
                      <div className="flex items-center justify-center mt-2 space-x-2">
                        <Trophy className="w-4 h-4 text-orange-500" />
                        <span className="text-sm font-medium text-orange-600">
                          Great progress! Keep learning! 🎉
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Strategic CTA - Not sure where to start */}
                  <div className="max-w-lg mx-auto p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border-2 border-dashed border-blue-200 dark:border-blue-800 mb-8">
                    <div className="text-center">
                      <Brain className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                      <h3 className="font-semibold mb-2">Tidak yakin mulai dari mana?</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Dapatkan rekomendasi jalur pembelajaran yang dipersonalisasi berdasarkan skill dan minat Anda saat ini
                      </p>
                      <Button 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium"
                        onClick={() => setCurrentView('personal-assessment')}
                        data-testid="cta-personal-assessment-roadmap"
                      >
                        <Target className="w-4 h-4 mr-2" />
                        Analisis Skill Saya Gratis
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Interactive Phase Timeline */}
                <div className="space-y-6">
                  {roadmap.phases
                    .sort((a, b) => a.order - b.order)
                    .map((phase, index) => {
                      const isCompleted = completedPhases.has(phase.id);
                      const isExpanded = expandedPhases.has(phase.id);
                      const isHovered = hoveredPhase === phase.id;
                      const canStart = phase.prerequisites.length === 0 || 
                        phase.prerequisites.every(req => completedPhases.has(req));
                      
                      return (
                        <Card 
                          key={phase.id} 
                          className={`transition-all duration-300 cursor-pointer ${
                            isHovered ? 'shadow-lg scale-102' : 'hover:shadow-md'
                          } ${isCompleted ? 'bg-secondary/10 border-secondary/30' : ''}`}
                          onMouseEnter={() => setHoveredPhase(phase.id)}
                          onMouseLeave={() => setHoveredPhase(null)}
                          onClick={() => {
                            setExpandedPhases(prev => {
                              const newSet = new Set(prev);
                              if (newSet.has(phase.id)) {
                                newSet.delete(phase.id);
                              } else {
                                newSet.add(phase.id);
                              }
                              return newSet;
                            });
                          }}
                          data-testid={`phase-card-${phase.id}`}
                        >
                          <div className="p-6">
                            <div className="flex items-start space-x-6">
                              {/* Enhanced Phase indicator */}
                              <div className="flex-shrink-0">
                                <div className={`relative w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-300 ${
                                  isCompleted 
                                    ? 'bg-gradient-success' 
                                    : canStart 
                                      ? 'bg-gradient-hero' 
                                      : 'bg-muted'
                                }`}>
                                  {isCompleted ? (
                                    <CheckCircle className="w-8 h-8" />
                                  ) : (
                                    <span>{phase.order}</span>
                                  )}
                                  
                                  {/* Completion badge */}
                                  {isCompleted && (
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                                      <Star className="w-3 h-3 text-white" />
                                    </div>
                                  )}
                                </div>
                                
                                {/* Connection line */}
                                {index < roadmap.phases.length - 1 && (
                                  <div className={`w-1 h-12 mx-auto mt-4 transition-colors duration-300 ${
                                    isCompleted ? 'bg-secondary' : 'bg-muted'
                                  }`}></div>
                                )}
                              </div>

                              {/* Phase content */}
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-3">
                                  <div className="flex items-center space-x-3">
                                    <h3 className="text-xl font-semibold" data-testid={`phase-title-${phase.id}`}>
                                      {phase.title}
                                    </h3>
                                    {isCompleted && (
                                      <Badge variant="default" className="bg-secondary/20 text-secondary border-secondary/30">
                                        ✓ Selesai
                                      </Badge>
                                    )}
                                    {!canStart && (
                                      <Badge variant="outline" className="border-orange-500/30 text-orange-600">
                                        <Clock className="w-3 h-3 mr-1" />
                                        Terkunci
                                      </Badge>
                                    )}
                                  </div>
                                  
                                  <div className="flex items-center space-x-3">
                                    <Badge variant="outline">{phase.duration}</Badge>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="p-1"
                                      data-testid={`toggle-phase-${phase.id}`}
                                    >
                                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                    </Button>
                                  </div>
                                </div>
                                
                                <p className="text-muted-foreground mb-4">{phase.description}</p>

                                {/* Phase action buttons */}
                                <div className="flex items-center space-x-3 mb-4">
                                  {!isCompleted && canStart && (
                                    <Button 
                                      size="sm" 
                                      className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        // Mark as completed for demo
                                        setCompletedPhases(prev => new Set([...prev, phase.id]));
                                      }}
                                      data-testid={`start-phase-${phase.id}`}
                                    >
                                      <PlayCircle className="w-4 h-4 mr-2" />
                                      Mulai Fase Ini
                                    </Button>
                                  )}
                                  
                                  {canStart && (
                                    <Button 
                                      variant="outline" 
                                      size="sm"
                                      className="border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentView('personal-assessment');
                                      }}
                                      data-testid={`analisis-skill-${phase.id}`}
                                    >
                                      <Brain className="w-4 h-4 mr-2" />
                                      Analisis Skill Saya Gratis
                                    </Button>
                                  )}
                                </div>

                                {/* Expandable content */}
                                {isExpanded && (
                                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-6 animate-in slide-in-from-top-2 duration-300">
                                    {/* Skills in this phase */}
                                    {phase.skills && phase.skills.length > 0 && (
                                      <div>
                                        <div className="text-sm font-medium mb-3 flex items-center">
                                          <Target className="w-4 h-4 mr-2 text-blue-600" />
                                          Skills yang akan Anda kuasai:
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                          {phase.skills.map((skill) => (
                                            <Badge key={skill.id} variant="secondary" className="text-xs">
                                              {skill.name}
                                            </Badge>
                                          ))}
                                        </div>
                                      </div>
                                    )}

                                    {/* Learning materials */}
                                    {phase.materials && phase.materials.length > 0 && (
                                      <div>
                                        <div className="text-sm font-medium mb-3 flex items-center">
                                          <Zap className="w-4 h-4 mr-2 text-purple-600" />
                                          Materi pembelajaran tersedia:
                                        </div>
                                        <div className="grid gap-3">
                                          {phase.materials.map((material) => (
                                            <div 
                                              key={material.id} 
                                              className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                            >
                                              <div className="flex items-center space-x-3">
                                                <Badge variant="outline" className="text-xs">
                                                  {material.type}
                                                </Badge>
                                                <div>
                                                  <div className="font-medium text-sm">{material.title}</div>
                                                  <div className="text-xs text-muted-foreground">
                                                    {material.provider} • {material.duration} • {material.difficulty}
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="flex items-center space-x-3">
                                                {material.rating && (
                                                  <div className="text-xs text-yellow-600 flex items-center">
                                                    <Star className="w-3 h-3 mr-1" />
                                                    {material.rating}
                                                  </div>
                                                )}
                                                <div className="text-xs font-medium">
                                                  {material.price?.isFree ? 'Gratis' : `$${material.price?.amount}`}
                                                </div>
                                                <Button size="sm" variant="outline">
                                                  Akses
                                                </Button>
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    )}

                                    {/* Prerequisites */}
                                    {phase.prerequisites && phase.prerequisites.length > 0 && (
                                      <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                                        <div className="text-sm font-medium text-orange-800 dark:text-orange-200 mb-2 flex items-center">
                                          <AlertTriangle className="w-4 h-4 mr-2" />
                                          Prerequisites:
                                        </div>
                                        <div className="text-sm text-orange-700 dark:text-orange-300">
                                          Selesaikan fase: {phase.prerequisites.join(', ')}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                </div>

                {/* Bottom CTA Section */}
                <div className="mt-12 text-center">
                  <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl border border-purple-200 dark:border-purple-800">
                    <Trophy className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                    <h3 className="text-2xl font-bold mb-3">Siap Memulai Journey Anda?</h3>
                    <p className="text-muted-foreground mb-6">
                      Roadmap ini dirancang khusus untuk {selectedJob.title}. Ingin path yang lebih personal?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        size="lg"
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium"
                        onClick={() => setCurrentView('personal-assessment')}
                        data-testid="cta-custom-assessment"
                      >
                        <Brain className="w-5 h-5 mr-2" />
                        Dapatkan Roadmap Personal Saya
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg"
                        onClick={() => setCurrentView('direct-exploration')}
                        data-testid="cta-explore-more"
                      >
                        <Search className="w-5 h-5 mr-2" />
                        Jelajahi Profesi Lain
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI-Proof Skills */}
              {selectedJob.aiProofSkills && selectedJob.aiProofSkills.length > 0 && (
                <Card className="mb-8 p-6">
                  <h3 className="text-xl font-semibold mb-4">🔮 Skills yang Aman dari AI</h3>
                  <p className="text-muted-foreground mb-4">
                    Skills ini sulit digantikan AI dan akan tetap bernilai tinggi:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedJob.aiProofSkills.map((skill, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                        <Shield className="w-5 h-5 text-green-600" />
                        <span className="font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {/* Interesting Facts */}
              {selectedJob.interestingFacts && selectedJob.interestingFacts.length > 0 && (
                <Card className="mb-8 p-6">
                  <h3 className="text-xl font-semibold mb-4">💡 Fakta Menarik</h3>
                  <div className="space-y-3">
                    {selectedJob.interestingFacts.map((fact, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                        <span className="text-muted-foreground">{fact}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {/* Sticky Floating CTA - Strategic placement for conversion */}
              <div className="fixed bottom-6 right-6 z-50">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl shadow-2xl p-4 max-w-sm border border-purple-300">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">
                        Butuh roadmap yang lebih personal?
                      </p>
                      <p className="text-xs text-white/80">
                        Disesuaikan dengan skill Anda
                      </p>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-3 bg-white text-purple-600 hover:bg-white/90 font-medium text-sm"
                    onClick={() => setCurrentView('personal-assessment')}
                    data-testid="sticky-cta-analisis-skill"
                  >
                    <Target className="w-4 h-4 mr-2" />
                    Analisis Skill Saya Gratis
                  </Button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-center space-x-4">
                <Button
                  variant="outline"
                  onClick={() => setCurrentView('job-results')}
                  data-testid="button-back-to-results"
                >
                  Kembali ke Hasil
                </Button>
                <Button
                  onClick={() => setCurrentView('direct-exploration')}
                  data-testid="button-explore-more-jobs"
                >
                  Jelajahi Pekerjaan Lain
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setCurrentView('selection')}
                  data-testid="button-back-to-main-menu"
                >
                  Menu Utama
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-future">
      <Header />
      <main className="pt-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        
        {/* Hero Section */}
        <section className="py-32 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 animate-fade-in-up">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5 text-sm font-medium">
                    🚀 AI-Powered Technology
                  </Badge>
                </div>
                
                <div className="space-y-6">
                  <h1 className="text-display">
                    <span className="bg-gradient-hero bg-clip-text text-transparent">
                      AI-Powered
                    </span>
                    <br />
                    <span className="text-foreground">Skill Forecasting</span>
                  </h1>
                  <p className="text-body-large text-muted-foreground max-w-2xl leading-relaxed">
                    🎯 Teknologi AI terdepan yang memprediksi pekerjaan masa depan dengan akurasi <span className="font-semibold text-primary">95%+</span>. 
                    Berbasis analisis <span className="font-semibold text-secondary">50.000+</span> lowongan Indonesia dan tren global.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-hero hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-future text-base font-semibold px-8 py-6 h-auto"
                    onClick={handleStartForecasting}
                    data-testid="button-start-forecasting"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Coba Prediksi Gratis
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="hover-lift border-primary/20 hover:border-primary/40 text-base font-medium px-8 py-6 h-auto"
                  >
                    <PlayCircle className="w-5 h-5 mr-2" />
                    Lihat Demo
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-border/50">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    <span>100% Gratis</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="w-4 h-4 text-secondary" />
                    <span>Data Aman</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Bot className="w-4 h-4 text-secondary" />
                    <span>AI Terbaru</span>
                  </div>
                </div>
              </div>
              
              <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                {/* Floating background elements */}
                <div className="absolute -inset-4 bg-gradient-hero opacity-5 rounded-3xl blur-2xl"></div>
                
                <Card className="relative glass-effect border-primary/10 shadow-future hover-lift">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center">
                          <Brain className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-bold">🔮 AI Impact Analysis</CardTitle>
                          <CardDescription className="text-sm">
                            Risiko tergantikan AI per profesi
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-primary/10 text-primary border-primary/20 text-xs font-medium">
                        Live Data
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {aiImpactData.map((item, index) => (
                      <div key={index} className="group p-3 rounded-lg hover:bg-primary/5 transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium group-hover:text-primary transition-colors">
                            {item.profession}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className={`text-sm font-bold ${item.color}`}>
                              {item.risk}%
                            </span>
                            {item.risk > 70 ? (
                              <AlertTriangle className="w-4 h-4 text-destructive" />
                            ) : item.risk > 40 ? (
                              <Clock className="w-4 h-4 text-orange-500" />
                            ) : (
                              <Shield className="w-4 h-4 text-secondary" />
                            )}
                          </div>
                        </div>
                        <div className="relative">
                          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className={`h-full transition-all duration-1000 ${
                                item.risk > 70 ? 'bg-gradient-to-r from-destructive to-red-400' : 
                                item.risk > 40 ? 'bg-gradient-to-r from-orange-500 to-yellow-400' : 
                                'bg-gradient-to-r from-secondary to-green-400'
                              }`}
                              style={{ 
                                width: `${item.risk}%`,
                                animationDelay: `${index * 0.2}s`
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                      <div className="flex items-center gap-2 mb-2">
                        <Bot className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">AI Insight</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Data diperbarui real-time berdasarkan tren automation dan analisis 50.000+ job posting Indonesia.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-32 bg-muted/30 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20 animate-fade-in-up">
              <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 mb-6">
                🚀 Advanced Technology
              </Badge>
              <h2 className="text-heading-1 mb-8">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Teknologi Prediksi
                </span>
                <br />
                Masa Depan
              </h2>
              <p className="text-body-large text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                🤖 Kombinasi <span className="font-semibold text-primary">AI terdepan</span>, machine learning, dan big data untuk memberikan 
                insight yang akurat tentang masa depan karier Anda di era digital.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card 
                    key={index} 
                    className="group glass-effect border-primary/10 hover:border-primary/30 transition-all duration-500 hover-lift animate-fade-in-up"
                    style={{animationDelay: `${index * 0.2}s`}}
                  >
                    <CardHeader className="pb-6">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-future">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                            {feature.title}
                          </CardTitle>
                          <CardDescription className="text-muted-foreground leading-relaxed">
                            {feature.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {feature.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-hero mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground leading-relaxed">{detail}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Progress indicator for visual appeal */}
                      <div className="mt-6 pt-4 border-t border-border/50">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse-soft" />
                          <span>Aktif & Terupdate</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <Button 
                size="lg" 
                className="bg-gradient-hero hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-future font-semibold px-8 py-6 h-auto"
                onClick={handleStartForecasting}
              >
                <Target className="w-5 h-5 mr-2" />
                Mulai Analisis Sekarang
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
          <div className="absolute top-0 right-1/3 w-72 h-72 bg-primary/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent/3 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20 animate-fade-in-up">
              <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20 mb-6">
                🔬 AI Process
              </Badge>
              <h2 className="text-heading-1 mb-8">
                <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
                  Cara Kerja
                </span>
                <br />
                Teknologi AI
              </h2>
              <p className="text-body-large text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                ⚡ Proses berbasis AI yang menganalisis data real-time untuk memberikan prediksi akurat 
                tentang masa depan karier dan kebutuhan skill.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center group animate-fade-in-up" style={{animationDelay: '0s'}}>
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-future">
                    <Database className="w-10 h-10" />
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full p-0 flex items-center justify-center bg-gradient-hero text-white border-0 font-bold"
                  >
                    1
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  🗂️ Data Collection
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Mengumpulkan data dari <span className="font-semibold text-primary">50.000+</span> lowongan kerja Indonesia, 
                  trend global, dan laporan industri terpercaya.
                </p>
                <div className="mt-6 w-full h-1 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-hero progress-ai" style={{animationDelay: '0.5s'}} />
                </div>
              </div>
              
              <div className="text-center group animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-future">
                    <Brain className="w-10 h-10" />
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full p-0 flex items-center justify-center bg-gradient-hero text-white border-0 font-bold"
                  >
                    2
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  🧠 AI Analysis
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-secondary">LSTM neural networks</span> menganalisis pola dan memprediksi 
                  perubahan pasar kerja dalam 3-5 tahun ke depan.
                </p>
                <div className="mt-6 w-full h-1 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-hero progress-ai" style={{animationDelay: '0.7s'}} />
                </div>
              </div>
              
              <div className="text-center group animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-future">
                    <User className="w-10 h-10" />
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full p-0 flex items-center justify-center bg-gradient-hero text-white border-0 font-bold"
                  >
                    3
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  🎯 Personal Insights
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Memberikan rekomendasi personal berdasarkan skill, minat, 
                  dan <span className="font-semibold text-accent">goals karier</span> individu.
                </p>
                <div className="mt-6 w-full h-1 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-hero progress-ai" style={{animationDelay: '0.9s'}} />
                </div>
              </div>
            </div>

            {/* Bottom insight */}
            <div className="text-center mt-20 animate-fade-in-up" style={{animationDelay: '1s'}}>
              <div className="p-8 glass-effect rounded-2xl border border-primary/10 max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Bot className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold">🚀 AI-Powered Intelligence</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Sistem kami dilatih dengan <span className="font-semibold text-primary">machine learning</span> terdepan 
                  dan terus belajar dari data terbaru untuk memberikan prediksi yang semakin akurat.
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