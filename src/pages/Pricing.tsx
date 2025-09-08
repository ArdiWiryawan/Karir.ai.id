import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "Gratis",
    description: "Untuk memulai perjalanan karier masa depan",
    features: [
      "Analisis AI Impact Score dasar",
      "3 rekomendasi kursus masa depan",
      "1 future job project/bulan",
      "Akses dasar Future Job Explorer",
      "CV Builder dasar (1 template)",
      "1 simulasi interview/bulan"
    ],
    cta: "Mulai Gratis",
    popular: false
  },
  {
    name: "Pro",
    price: "Rp29.000",
    period: "/bulan",
    description: "Untuk serious career changers",
    features: [
      "Analisis AI Impact Score mendalam",
      "Unlimited future job projects",
      "AI Co-Pilot Guide premium",
      "Future Salary Forecasting",
      "1 sesi mentor/bulan",
      "CV Builder premium (semua template + optimasi ATS)",
      "Unlimited simulasi interview + feedback detail",
      "Priority support"
    ],
    cta: "Coba 7 Hari Gratis",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Untuk universitas dan perusahaan",
    features: [
      "Dashboard analitik untuk universitas",
      "Integrasi kurikulum dengan prediksi pekerjaan masa depan",
      "Program magang virtual untuk mahasiswa",
      "CV Builder untuk seluruh mahasiswa",
      "Interview Coach untuk program karir",
      "Custom AI training dengan data institusi",
      "Dedicated support manager"
    ],
    cta: "Hubungi Sales",
    popular: false
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-6">
              Investasi Masa Depan
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Pilih Paket{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Future-Proof
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Investasi terbaik adalah pada diri sendiri. Pilih paket yang sesuai dengan goals 
              karier Anda di era AI.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`relative ${plan.popular ? 'border-primary shadow-future scale-105' : 'border-border/50'} transition-all duration-300 hover:shadow-lg`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground border-primary">
                        <Star className="w-3 h-3 mr-1" />
                        Paling Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                    </div>
                    <CardDescription className="mt-2">{plan.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-gradient-hero hover:opacity-90' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Return on Investment
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Rata-rata pengguna Pro meningkatkan gaji 35% dalam 6 bulan setelah mengikuti roadmap kami.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">35%</div>
                <div className="text-lg font-semibold mb-2">Peningkatan Gaji</div>
                <p className="text-muted-foreground">
                  Rata-rata dalam 6 bulan
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-secondary mb-2">78%</div>
                <div className="text-lg font-semibold mb-2">AI-Proof Score</div>
                <p className="text-muted-foreground">
                  Peningkatan kesiapan era AI
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-accent mb-2">2.5x</div>
                <div className="text-lg font-semibold mb-2">Interview Success</div>
                <p className="text-muted-foreground">
                  Lebih banyak dipanggil interview
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: "Apakah bisa upgrade/downgrade paket kapan saja?",
                  a: "Ya, Anda bisa upgrade atau downgrade paket kapan saja. Billing akan disesuaikan secara pro-rata."
                },
                {
                  q: "Bagaimana akurasi prediksi pekerjaan masa depan?",
                  a: "Prediksi kami memiliki akurasi >75% berdasarkan validasi dengan 50.000+ lowongan Indonesia dan tren global."
                },
                {
                  q: "Apakah ada garansi uang kembali?",
                  a: "Ya, kami memberikan garansi 30 hari uang kembali jika Anda tidak puas dengan hasilnya."
                }
              ].map((faq, index) => (
                <Card key={index} className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;