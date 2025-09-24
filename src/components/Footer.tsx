import { Brain, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg">Karir.AI</div>
                <div className="text-xs text-muted-foreground">Peta Karier Masa Depan</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Mempersiapkan 7,28 juta talenta muda Indonesia untuk era AI dengan roadmap skill, 
              CV yang lolos ATS, dan interview yang menang.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Surabaya, Indonesia
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                hello@karir.ai
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                +62 895 1786 8917
              </div>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold">Produk</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">AI Skill Forecasting</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Future-Proof CV Builder</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">AI Interview Coach</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Future Job Projects</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">AI Co-Pilot Guide</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Blog Karier Masa Depan</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Panduan AI Tools</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Webinar Gratis</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Research Reports</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold">Perusahaan</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tim</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Karier</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Partnership</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Kontak</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 Karir.AI. Mempersiapkan masa depan karier Indonesia.
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;