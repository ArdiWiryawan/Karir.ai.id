import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, FileText, MessageSquare, TrendingUp, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Skill Forecasting",
    description: "Prediksi pekerjaan yang akan muncul dan hilang dalam 3-5 tahun di Indonesia",
    benefits: ["Analisis AI Impact Score", "Roadmap 5 tahun ke depan", "AI-Proof Skills"],
    color: "text-primary",
    bgColor: "bg-primary/10",
    link: "/features/skill-forecasting"
  },
  {
    icon: FileText,
    title: "Future-Proof CV Builder",
    description: "CV yang lolos ATS sekaligus menunjukkan kesiapan untuk era AI",
    benefits: ["Template masa depan", "Optimasi ATS 90%+", "Prediksi skill relevan"],
    color: "text-accent",
    bgColor: "bg-accent/10",
    link: "/features/cv-builder"
  },
  {
    icon: MessageSquare,
    title: "AI Interview Coach",
    description: "Simulasi interview berbasis pekerjaan masa depan dengan feedback real-time",
    benefits: ["500+ pertanyaan masa depan", "Analisis AI-Proof Traits", "Budaya kerja Indonesia"],
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    link: "/features/interview-coach"
  },
  {
    icon: TrendingUp,
    title: "Future Job Projects",
    description: "Proyek mini berbasis pekerjaan masa depan untuk membangun portofolio",
    benefits: ["Portofolio masa depan", "Pengalaman nyata", "Networking dengan UMKM"],
    color: "text-primary",
    bgColor: "bg-primary/10",
    link: "/features/future-job-projects"
  },
  {
    icon: Shield,
    title: "AI Co-Pilot Guide",
    description: "Strategi memanfaatkan AI sebagai alat pendukung karier, bukan ancaman",
    benefits: ["200+ AI tools", "Panduan praktis", "Strategi AI-Proof"],
    color: "text-accent",
    bgColor: "bg-accent/10",
    link: "/features/ai-copilot"
  },
  {
    icon: Zap,
    title: "Transition Paths",
    description: "Jalur transisi dari pekerjaan berisiko ke pekerjaan masa depan",
    benefits: ["Roadmap adaptif", "Milestone mikro", "Validasi sosial"],
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    link: "/features/transition-paths"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            4 Pilar UVP yang Tak Tertandingi
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold">
            Bukan Sekadar Platform -{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Ecosystem Masa Depan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Karir.AI adalah satu-satunya platform di Indonesia yang menggabungkan prediksi masa depan, 
            roadmap adaptif, dan persiapan interview dalam satu ekosistem yang memberdayakan.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Link to={feature.link} key={index}>
                <Card 
                  className="group hover:shadow-future transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/30 cursor-pointer h-full"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${feature.color.replace('text-', 'bg-')}`} />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Dengan PRD ini, Karir.AI tidak hanya akan menjadi platform karier terbaik di Indonesia—
            <br />
            <strong className="text-primary">tapi juga contoh global bagaimana teknologi bisa mempersiapkan talenta muda menghadapi revolusi AI.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;