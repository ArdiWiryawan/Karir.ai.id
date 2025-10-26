import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import { HeroSection } from "@/components/skill-forecasting/HeroSection";
import { ForecastLoadingState } from "@/components/skill-forecasting/ForecastLoadingState";
import { AccessibleChart } from "@/components/skill-forecasting/AccessibleChart";
import { ActionableInsights } from "@/components/skill-forecasting/ActionableInsights";
import { InlineExplainer, ConfidenceIntervalExplainer, AIImpactScoreExplainer } from "@/components/skill-forecasting/InlineExplainer";
import { InteractiveDemoSection } from "@/components/skill-forecasting/InteractiveDemoSection";
import { MethodologySection } from "@/components/skill-forecasting/MethodologySection";
import { UseCaseCards } from "@/components/skill-forecasting/UseCaseCards";

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
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState<'landing' | 'selection' | 'personal-assessment' | 'job-results' | 'direct-exploration'>('landing');
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
                          onClick={() => navigate(`/roadmap/${match.job.id}`)}
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
                          onClick={() => navigate(`/roadmap/${job.id}`)}
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


  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <HeroSection onStartForecasting={handleStartForecasting} />
        
        {/* Interactive Demo Section */}
        <InteractiveDemoSection />
        
        {/* Use Case Cards */}
        <UseCaseCards />
        
        {/* Methodology Section */}
        <MethodologySection />

        {/* Features Section - keeping existing but improving spacing */}
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