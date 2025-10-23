import { Building2, GraduationCap, Shield, Zap } from "lucide-react";

const partners = [
  { name: "UI", logo: GraduationCap },
  { name: "ITB", logo: GraduationCap },
  { name: "UGM", logo: GraduationCap },
  { name: "Trusted", logo: Shield },
];

const stats = [
  { value: "12,470+", label: "Pengguna Terdaftar" },
  { value: "25,890+", label: "CV Dianalisa" },
  { value: "94%", label: "Satisfaction Rate" },
];

const TrustBand = () => {
  return (
    <section className="py-12 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4">
        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-8 mb-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-1">
              <div className="text-2xl md:text-3xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="text-center mb-6">
          <p className="text-sm text-muted-foreground mb-4">
            Dipercaya oleh mahasiswa & alumni dari
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {partners.map((partner, index) => {
              const Icon = partner.logo;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon className="w-6 h-6" />
                  <span className="font-semibold">{partner.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials Preview */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              name: "Rina Wijaya",
              role: "Fresh Graduate UI",
              text: "CV saya lolos ATS untuk pertama kalinya setelah pakai Karir.AI. Dapat panggilan interview dalam 2 minggu!",
              avatar: "👩‍💼"
            },
            {
              name: "Ahmad Fauzi",
              role: "Career Changer",
              text: "Roadmap AI-nya membantu saya pivot dari accounting ke data analyst dalam 6 bulan.",
              avatar: "👨‍💻"
            },
            {
              name: "Siti Nurhaliza",
              role: "Software Engineer",
              text: "Interview coach-nya sangat membantu. Skor interview saya naik dari 60% ke 92%!",
              avatar: "👩‍💻"
            }
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 space-y-4 hover:shadow-lg transition-shadow"
            >
              <p className="text-sm text-muted-foreground italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="text-2xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBand;
