import { Button } from "@/components/ui/button";
import { Brain, Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-xl">Karir.AI</div>
              <div className="text-xs text-muted-foreground">Peta Karier Masa Depan</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`transition-colors ${location.pathname === '/' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className={`transition-colors ${location.pathname === '/features' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
            >
              Fitur
            </Link>
            <Link 
              to="/how-it-works" 
              className={`transition-colors ${location.pathname === '/how-it-works' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
            >
              Cara Kerja
            </Link>
            <Link 
              to="/pricing" 
              className={`transition-colors ${location.pathname === '/pricing' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
            >
              Harga
            </Link>
            <Link 
              to="/success-stories" 
              className={`transition-colors ${location.pathname === '/success-stories' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
            >
              Success Stories
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">
              Masuk
            </Button>
            <Button variant="hero">
              Mulai Gratis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              <Link 
                to="/" 
                className={`transition-colors ${location.pathname === '/' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/features" 
                className={`transition-colors ${location.pathname === '/features' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Fitur
              </Link>
              <Link 
                to="/how-it-works" 
                className={`transition-colors ${location.pathname === '/how-it-works' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Cara Kerja
              </Link>
              <Link 
                to="/pricing" 
                className={`transition-colors ${location.pathname === '/pricing' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Harga
              </Link>
              <Link 
                to="/success-stories" 
                className={`transition-colors ${location.pathname === '/success-stories' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Success Stories
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                <Button variant="ghost" className="justify-start">
                  Masuk
                </Button>
                <Button variant="hero" className="justify-start">
                  Mulai Gratis
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;