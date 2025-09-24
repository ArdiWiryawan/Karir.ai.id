import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Briefcase, TrendingUp, Shield } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "7,28 Juta",
    label: "Pengangguran di Indonesia",
    description: "BPS, Februari 2024",
    color: "text-destructive"
  },
  {
    icon: Briefcase,
    value: "87%",
    label: "Lulusan Baru",
    description: "Kirim 50+ lamaran tanpa respons",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    value: "75%",
    label: "CV Ditolak ATS",
    description: "Sebelum dilihat manusia",
    color: "text-accent"
  },
  {
    icon: Shield,
    value: "37%",
    label: "Pekerjaan Terancam AI",
    description: "Entry-level dalam 3-5 tahun",
    color: "text-secondary"
  }
];

const Stats = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="destructive" className="bg-destructive/10 text-destructive border-destructive/20">
            Fakta Kritis yang Harus Dipecahkan
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold">
            Mengapa Solusi Saat Ini{" "}
            <span className="bg-gradient-to-r from-destructive to-accent bg-clip-text text-transparent">
              Gagal?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Platform pencari kerja tradisional hanya fokus pada lowongan saat ini—bukan persiapan untuk masa depan. 
            Lulusan baru kebingungan: "Bagaimana membuat CV yang lolos ATS sekaligus menunjukkan kesiapan untuk era AI?"
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <Icon className={`w-8 h-8 mx-auto ${stat.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Solution Statement */}
        <div className="bg-gradient-future rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            The Karir.AI Difference
          </h3>
          <blockquote className="text-lg md:text-xl italic text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            "Kami bukan sekadar membantu Anda mencari pekerjaan—kami membangun{" "}
            <strong className="text-primary">jembatan antara talenta muda dan pekerjaan masa depan</strong>, 
            dengan prediksi skill yang relevan, roadmap pembelajaran adaptif, CV yang lolos ATS sekaligus 
            menunjukkan kesiapan era AI, dan simulasi interview yang mempersiapkan Anda untuk tantangan nyata—
            dirancang khusus untuk menghadapi revolusi AI di Indonesia."
          </blockquote>
          <div className="mt-6 text-sm text-muted-foreground">
            — Seluruh tim Karir AI
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;