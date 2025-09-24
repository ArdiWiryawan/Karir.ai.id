import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import { Badge } from "@/components/ui/badge";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Features Section */}
        <Features />

        {/* Why Choose Us */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Mengapa Pilih Karir.AI?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">75%+</div>
                <div className="text-lg font-semibold mb-2">Akurasi Prediksi</div>
                <p className="text-muted-foreground">
                  Berbasis 50.000+ lowongan kerja Indonesia dan analisis tren global
                </p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-secondary mb-2">200+</div>
                <div className="text-lg font-semibold mb-2">AI Tools Database</div>
                <p className="text-muted-foreground">
                  Panduan lengkap menggunakan AI untuk setiap profesi
                </p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-accent mb-2">90%+</div>
                <div className="text-lg font-semibold mb-2">ATS Success Rate</div>
                <p className="text-muted-foreground">
                  CV yang dihasilkan lolos sistem ATS perusahaan
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;