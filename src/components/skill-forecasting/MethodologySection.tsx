import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Brain, TrendingUp, CheckCircle, ShieldCheck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const MethodologySection = () => {
  const steps = [
    {
      icon: Database,
      title: "Data Collection",
      description: "Agregasi 50.000+ lowongan kerja dari job boards Indonesia",
      details: [
        "Real-time scraping dari JobStreet, LinkedIn, Glints, Kalibrr",
        "Update data setiap bulan untuk akurasi maksimal",
        "Validasi dan cleaning otomatis untuk quality assurance"
      ]
    },
    {
      icon: Brain,
      title: "AI Model Training",
      description: "Machine learning model yang dilatih khusus untuk pasar Indonesia",
      details: [
        "Time-series forecasting dengan ARIMA dan Prophet",
        "Natural Language Processing untuk skill extraction",
        "Confidence interval 75% untuk prediksi 6-12 bulan"
      ]
    },
    {
      icon: TrendingUp,
      title: "Trend Analysis",
      description: "Identifikasi pola pertumbuhan dan penurunan skill demand",
      details: [
        "Analisis historical trend 3 tahun terakhir",
        "Faktor eksternal: teknologi baru, regulasi, industri shifts",
        "Seasonal adjustment untuk akurasi prediksi"
      ]
    },
    {
      icon: CheckCircle,
      title: "Validation & Output",
      description: "Validasi hasil dengan expert review dan market research",
      details: [
        "Cross-validation dengan data industri",
        "Expert review dari HR professionals",
        "Actionable insights dengan prioritized recommendations"
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4 animate-fade-in-up">
          <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
            <ShieldCheck className="w-3 h-3 mr-1" />
            Metodologi Transparan
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            Bagaimana Kami <span className="bg-gradient-hero bg-clip-text text-transparent">Memprediksi</span> Skill
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Proses 4-langkah berbasis data science dan machine learning untuk memberikan prediksi yang akurat dan actionable
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index} 
                className="relative border-2 hover:border-primary/30 hover:shadow-future transition-all duration-300 group"
              >
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-lg">
                  {index + 1}
                </div>
                <CardHeader className="pt-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs">
                        <div className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="accuracy" className="border border-border/50 rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Seberapa akurat prediksi yang diberikan?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Model kami mencapai akurasi ~75% untuk prediksi 6 bulan dan ~68% untuk prediksi 12 bulan. 
                Kami menggunakan confidence interval untuk menunjukkan range ketidakpastian. Akurasi terus ditingkatkan 
                dengan update data bulanan dan retraining model.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="data-source" className="border border-border/50 rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Dari mana sumber data lowongan kerja?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Data dikumpulkan dari 50.000+ lowongan kerja di Indonesia melalui agregasi dari JobStreet, LinkedIn, 
                Glints, Kalibrr, dan platform lainnya. Data diperbarui setiap bulan dan divalidasi untuk memastikan 
                kualitas dan relevansi.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="industries" className="border border-border/50 rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Apakah mencakup semua industri?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Ya, analisis kami mencakup 12+ kategori industri utama termasuk Teknologi, Finance, Healthcare, 
                Manufacturing, dan lainnya. Anda bisa filter berdasarkan industri spesifik untuk mendapatkan 
                insight yang lebih relevan.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="update" className="border border-border/50 rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Seberapa sering data diperbarui?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Data corpus diperbarui setiap bulan dengan lowongan terbaru. Model di-retrain setiap quarter 
                untuk memastikan prediksi tetap akurat mengikuti perubahan pasar. Tanggal update terakhir 
                selalu ditampilkan di dashboard.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
