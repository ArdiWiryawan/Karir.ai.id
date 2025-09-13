import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Brain, TrendingUp, AlertTriangle, Shield, Target, Zap, User, Search, ArrowRight, Bot, Users } from "lucide-react";
import { allJobs, jobsByCategory, emergingJobs, riskJobs } from "@/data/jobDatabase";
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
  { profession: "Data Entry", risk: 95, color: "text-red-500" },
  { profession: "Kasir", risk: 87, color: "text-red-500" },
  { profession: "Content Writer", risk: 73, color: "text-orange-500" },
  { profession: "Graphic Designer", risk: 45, color: "text-yellow-500" },
  { profession: "Sales Representative", risk: 32, color: "text-green-500" },
  { profession: "Psychologist", risk: 12, color: "text-green-500" }
];

const SkillForecasting = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'selection' | 'personal-assessment' | 'job-results' | 'direct-exploration' | 'roadmap-view'>('landing');
  const [selectedJobs, setSelectedJobs] = useState<Job[]>([]);
  const [assessmentAnswers, setAssessmentAnswers] = useState<Record<string, string | number | string[]>>({});
  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

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
        matchReasons: [
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
        matchReasons: [
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
    <section className="py-24 bg-gradient-subtle min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Pilih Jalur
            </span>{" "}
            Prediksi Anda
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dapatkan rekomendasi karier yang tepat dengan dua cara berbeda
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Personal Assessment Path */}
          <Card 
            className="p-8 border-2 hover:border-primary/50 transition-all duration-300 cursor-pointer group"
            onClick={handlePersonalPath}
            data-testid="button-personal-path"
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <User className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI-Powered Personal Assessment</h3>
              <p className="text-muted-foreground mb-6">
                Jawab pertanyaan yang dipersonalisasi untuk mendapatkan rekomendasi pekerjaan yang paling sesuai dengan kepribadian, minat, dan keahlian Anda
              </p>
              <div className="space-y-2 text-sm text-left">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Analisis kepribadian & minat mendalam</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Matching dengan 500+ profesi masa depan</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Roadmap pembelajaran yang dipersonalisasi</span>
                </div>
              </div>
              <Button className="w-full mt-6 bg-gradient-hero group-hover:scale-105 transition-transform">
                Mulai Assessment <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>

          {/* Direct Job Exploration Path */}
          <Card 
            className="p-8 border-2 hover:border-secondary/50 transition-all duration-300 cursor-pointer group"
            onClick={handleDirectPath}
            data-testid="button-direct-path"
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Search className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Eksplorasi Pekerjaan Langsung</h3>
              <p className="text-muted-foreground mb-6">
                Jelajahi langsung database lengkap pekerjaan masa depan, lihat prediksi gaji, risiko AI, dan roadmap pembelajaran untuk setiap profesi
              </p>
              <div className="space-y-2 text-sm text-left">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>500+ pekerjaan dengan data lengkap</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Filter berdasarkan kategori & risiko AI</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Roadmap & rekomendasi kursus detail</span>
                </div>
              </div>
              <Button variant="secondary" className="w-full mt-6 group-hover:scale-105 transition-transform">
                Mulai Eksplorasi <Search className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="ghost" 
            onClick={() => setCurrentView('landing')}
            data-testid="button-back-to-landing"
          >
            ← Kembali ke Halaman Utama
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
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
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
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-950'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                        }`}
                        onClick={() => handleAnswerSelect(option.value || option.id)}
                        data-testid={`option-${option.id}`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-4 h-4 rounded-full border-2 ${
                            currentAnswer === option.value || currentAnswer === option.id
                              ? 'border-blue-500 bg-blue-500'
                              : 'border-gray-300'
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
                            {match.matchReasons.map((reason, idx) => (
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
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="py-24 min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Direct Job Exploration (Coming Soon)</h2>
              <p className="text-muted-foreground mb-8">
                Fitur eksplorasi pekerjaan langsung sedang dalam pengembangan
              </p>
              <Button onClick={() => setCurrentView('selection')}>
                Kembali ke Pilihan
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (currentView === 'roadmap-view') {
    const selectedJob = selectedJobs[0];
    if (!selectedJob || !selectedJob.roadmap) {
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
                    <div className="text-2xl font-bold text-blue-600">{totalDuration}</div>
                  </Card>
                  <Card className="p-4">
                    <div className="text-sm text-muted-foreground">Tingkat Kesulitan</div>
                    <div className={`text-2xl font-bold ${
                      difficulty === 'Pemula' ? 'text-green-600' :
                      difficulty === 'Menengah' ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {difficulty}
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="text-sm text-muted-foreground">Jumlah Phase</div>
                    <div className="text-2xl font-bold text-purple-600">{roadmap.phases.length} Fase</div>
                  </Card>
                </div>

                {/* Salary and AI Risk */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">Prediksi Gaji (per tahun)</div>
                    <div className="text-3xl font-bold text-green-600 mb-2">
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
                        selectedJob.aiReplacementRisk <= 20 ? 'bg-green-500' :
                        selectedJob.aiReplacementRisk <= 50 ? 'bg-yellow-500' : 'bg-red-500'
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

              {/* Roadmap Timeline */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-center">Learning Roadmap</h2>
                <div className="space-y-8">
                  {roadmap.phases
                    .sort((a, b) => a.order - b.order)
                    .map((phase, index) => (
                    <Card key={phase.id} className="p-6">
                      <div className="flex items-start space-x-6">
                        {/* Phase number */}
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            {phase.order}
                          </div>
                          {index < roadmap.phases.length - 1 && (
                            <div className="w-0.5 h-16 bg-gray-300 mx-auto mt-4"></div>
                          )}
                        </div>

                        {/* Phase content */}
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-semibold" data-testid={`phase-title-${phase.id}`}>
                              {phase.title}
                            </h3>
                            <Badge variant="outline">{phase.duration}</Badge>
                          </div>
                          
                          <p className="text-muted-foreground mb-4">{phase.description}</p>

                          {/* Skills in this phase */}
                          {phase.skills && phase.skills.length > 0 && (
                            <div className="mb-4">
                              <div className="text-sm font-medium mb-2">Skills yang akan dipelajari:</div>
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
                              <div className="text-sm font-medium mb-3">Materi pembelajaran:</div>
                              <div className="grid gap-3">
                                {phase.materials.map((material) => (
                                  <div 
                                    key={material.id} 
                                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
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
                                    <div className="flex items-center space-x-2">
                                      {material.rating && (
                                        <div className="text-xs text-yellow-600">★ {material.rating}</div>
                                      )}
                                      <div className="text-xs font-medium">
                                        {material.price?.isFree ? 'Gratis' : `$${material.price?.amount}`}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Prerequisites */}
                          {phase.prerequisites && phase.prerequisites.length > 0 && (
                            <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                              <div className="text-sm font-medium text-yellow-800 dark:text-yellow-200 mb-1">
                                Prerequisites:
                              </div>
                              <div className="text-xs text-yellow-700 dark:text-yellow-300">
                                Selesaikan phase: {phase.prerequisites.join(', ')}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
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
                  <Button 
                    size="lg" 
                    className="bg-gradient-hero"
                    onClick={handleStartForecasting}
                    data-testid="button-start-forecasting"
                  >
                    Coba Prediksi Gratis
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