import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  GraduationCap, 
  Building2, 
  TrendingUp,
  Target,
  BookOpen,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

interface UseCase {
  icon: any;
  title: string;
  role: string;
  description: string;
  problems: string[];
  solutions: string[];
  outcome: string;
  ctaText: string;
  gradient: string;
}

const useCases: UseCase[] = [
  {
    icon: Users,
    title: "Strategic Hiring Planning",
    role: "HR & Talent Acquisition",
    description: "Rencanakan rekrutmen 6-12 bulan ke depan dengan data prediktif",
    problems: [
      "Sulit memprediksi skill apa yang dibutuhkan tim",
      "Budget hiring terbatas, perlu prioritas yang tepat",
      "Kompetisi talent pool semakin ketat"
    ],
    solutions: [
      "Identifikasi top 5 skills yang akan high-demand",
      "Prioritas hiring berdasarkan urgency & impact",
      "Job description optimization untuk attract right talent"
    ],
    outcome: "Kurangi time-to-hire 30% dan hiring mis-match 45%",
    ctaText: "Lihat Hiring Plan Template",
    gradient: "from-primary/10 to-primary/5"
  },
  {
    icon: BookOpen,
    title: "Data-Driven Upskilling",
    role: "L&D Professional",
    description: "Rancang program training yang ROI-focused dan future-proof",
    problems: [
      "Training budget terbatas",
      "Tidak tahu skill mana yang prioritas",
      "Employee retention rendah karena skill gap"
    ],
    solutions: [
      "Skill gap analysis dengan forecast data",
      "Prioritized learning paths untuk setiap role",
      "Track upskilling progress vs market demand"
    ],
    outcome: "ROI training program naik 2-3x, retention meningkat 25%",
    ctaText: "Download Upskilling Framework",
    gradient: "from-secondary/10 to-secondary/5"
  },
  {
    icon: GraduationCap,
    title: "Career Future-Proofing",
    role: "Fresh Graduate / Job Seeker",
    description: "Fokus belajar skill yang akan dicari perusahaan saat kamu siap kerja",
    problems: [
      "Bingung skill apa yang harus dipelajari",
      "Takut skill yang dipelajari cepat usang",
      "Sulit bersaing dengan kandidat lain"
    ],
    solutions: [
      "Personalized skill roadmap berdasarkan target role",
      "Prioritas high-demand & AI-proof skills",
      "Rekomendasi kursus & project portfolio"
    ],
    outcome: "Callback rate naik 60%, dapat job offer 2x lebih cepat",
    ctaText: "Buat Career Roadmap Gratis",
    gradient: "from-accent/10 to-accent/5"
  }
];

export const UseCaseCards = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">
            <Target className="w-3 h-3 mr-1" />
            Real-World Applications
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            Siapa yang <span className="bg-gradient-hero bg-clip-text text-transparent">Menggunakan</span> Ini?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dari HR director hingga fresh graduate — semua mendapat value berbeda dari skill forecasting
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-future transition-all duration-500 border-2 hover:border-primary/20 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${useCase.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <CardHeader className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-2">
                          {useCase.role}
                        </Badge>
                        <CardTitle className="text-2xl mb-2">{useCase.title}</CardTitle>
                        <CardDescription className="text-base">
                          {useCase.description}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative">
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    {/* Problems */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-destructive flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center text-xs">❌</span>
                        Challenges
                      </h4>
                      <ul className="space-y-2">
                        {useCase.problems.map((problem, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-destructive mt-0.5">•</span>
                            <span>{problem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-secondary flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-xs">✓</span>
                        Solutions
                      </h4>
                      <ul className="space-y-2">
                        {useCase.solutions.map((solution, idx) => (
                          <li key={idx} className="text-sm flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcome & CTA */}
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="w-4 h-4 text-secondary" />
                          <span className="text-xs font-semibold text-secondary uppercase tracking-wide">Expected Outcome</span>
                        </div>
                        <p className="text-sm font-semibold">{useCase.outcome}</p>
                      </div>
                      <Button className="w-full group" size="lg">
                        {useCase.ctaText}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">
                Siap Mulai Prediksi Skill untuk Organisasi Anda?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Dapatkan analisis lengkap gratis — no credit card required, hasil dalam 2 menit
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group">
                  Jalankan Analisis Gratis
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  Jadwalkan Demo dengan Tim
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
