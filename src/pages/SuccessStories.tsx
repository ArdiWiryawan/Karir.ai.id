import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const successStories = [
  {
    name: "Rani Sari",
    role: "AI Content Strategist",
    company: "TechCorp Indonesia",
    image: "/api/placeholder/64/64",
    story: "Setelah 8 bulan menganggur, Karir.AI membantu saya transisi dari Content Writer biasa menjadi AI Content Strategist. Gaji naik 150% dan saya bekerja di startup tech terbaik!",
    before: "Lulusan Ilkom, menganggur 8 bulan",
    after: "AI Content Strategist, Rp 15 juta/bulan",
    aiProofScore: "78%",
    duration: "3 bulan"
  },
  {
    name: "Budi Santoso", 
    role: "Data Scientist",
    company: "Gojek",
    image: "/api/placeholder/64/64",
    story: "Dari admin kantor biasa, sekarang saya jadi Data Scientist di unicorn Indonesia. Roadmap Karir.AI sangat jelas dan step-by-step mudah diikuti.",
    before: "Admin kantoran, Rp 4 juta/bulan",
    after: "Data Scientist, Rp 18 juta/bulan",
    aiProofScore: "85%",
    duration: "6 bulan"
  },
  {
    name: "Siti Nurhaliza",
    role: "Prompt Engineer",
    company: "AI Startup",
    image: "/api/placeholder/64/64", 
    story: "Pekerjaan Prompt Engineer bahkan belum ada di LinkedIn ketika saya mulai belajar. Thanks to Karir.AI yang memprediksi pekerjaan ini 2 tahun yang lalu!",
    before: "Fresh graduate Marketing",
    after: "Prompt Engineer, Rp 12 juta/bulan",
    aiProofScore: "92%",
    duration: "4 bulan"
  },
  {
    name: "Ahmad Rizki",
    role: "Sustainability Analyst", 
    company: "Pertamina",
    image: "/api/placeholder/64/64",
    story: "Sebagai lulusan Teknik Kimia, saya khawatir industri oil & gas akan menurun. Karir.AI membantu saya pivot ke sustainability analyst di perusahaan yang sama!",
    before: "Process Engineer",
    after: "Sustainability Analyst, Rp 16 juta/bulan",
    aiProofScore: "82%",
    duration: "5 bulan"
  }
];

const companyLogos = [
  "Gojek", "Tokopedia", "Bukalapak", "Traveloka", "Shopee", "OVO", "Dana", "LinkAja"
];

const SuccessStories = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-6">
              Success Stories
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Mereka Sudah{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Future-Proof
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Ribuan talenta muda Indonesia sudah berhasil meningkatkan karier mereka 
              menggunakan roadmap AI kami. Sekarang giliran Anda!
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5,247</div>
                <div className="text-lg font-semibold mb-2">Career Transitions</div>
                <p className="text-muted-foreground">Sukses beralih ke pekerjaan masa depan</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">78%</div>
                <div className="text-lg font-semibold mb-2">Avg AI-Proof Score</div>
                <p className="text-muted-foreground">Peningkatan kesiapan era AI</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">150%</div>
                <div className="text-lg font-semibold mb-2">Avg Salary Increase</div>
                <p className="text-muted-foreground">Peningkatan gaji rata-rata</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4.2</div>
                <div className="text-lg font-semibold mb-2">Months Avg</div>
                <p className="text-muted-foreground">Waktu rata-rata transisi karier</p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Real Stories, Real Results
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {successStories.map((story, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/30 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={story.image} alt={story.name} />
                        <AvatarFallback>{story.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold">{story.name}</h3>
                        <p className="text-muted-foreground">{story.role} at {story.company}</p>
                        <div className="flex items-center gap-1 mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <Quote className="w-8 h-8 text-primary/20" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground italic">"{story.story}"</p>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                      <div>
                        <div className="text-sm text-muted-foreground">Before</div>
                        <div className="font-semibold">{story.before}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">After</div>
                        <div className="font-semibold">{story.after}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">AI-Proof Score</div>
                        <div className="font-semibold text-primary">{story.aiProofScore}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Duration</div>
                        <div className="font-semibold">{story.duration}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Partners */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-semibold mb-12 text-muted-foreground">
              Alumni kami bekerja di perusahaan terbaik Indonesia
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {companyLogos.map((company, index) => (
                <div key={index} className="text-xl font-bold text-muted-foreground">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Your Success Story Starts Here
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Bergabunglah dengan ribuan talenta yang sudah future-proof. 
              Mulai roadmap masa depan Anda hari ini.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                Mulai Gratis Sekarang
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Lihat Demo
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SuccessStories;