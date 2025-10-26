import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Users, CheckCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          {/* Badge */}
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Bergabung dengan 100,000+ Talenta Masa Depan
          </Badge>
          
          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Siap Jadi Bagian dari{" "}
            <span className="text-yellow-300">
              Revolusi Karier AI
            </span>{" "}
            Indonesia?
          </h2>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            Jangan biarkan AI menggantikan posisimu. Bersiaplah untuk masa depan dengan roadmap yang jelas, 
            CV yang lolos ATS, dan interview yang percaya diri.
          </p>
          
          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 py-8">
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="text-lg">Gratis untuk Memulai</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="text-lg">97% Meningkatkan AI-Proof Score</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="text-lg">Roadmap 5 Tahun</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg group shadow-xl min-h-[48px] min-w-[160px]"
            >
              Mulai Roadmap Masa Depan Sekarang
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg min-h-[48px] min-w-[160px]"
            >
              <Users className="w-5 h-5 mr-2" />
              Lihat Success Stories
            </Button>
          </div>
          
          {/* Social Proof */}
          <div className="pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/30 backdrop-blur-sm"
                    />
                  ))}
                </div>
                <div className="text-left">
                  <div className="font-semibold">1.247+ pengguna hari ini</div>
                  <div className="text-white/70 text-sm">meningkatkan kesiapan AI</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold">4.9/5</span>
                <span className="text-white/70">(2.847 reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;