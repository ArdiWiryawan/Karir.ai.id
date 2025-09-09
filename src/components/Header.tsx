import { Button } from "@/components/ui/button";
import { Brain, Menu, User, LogOut } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/components/ui/use-toast";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, signOut, loading } = useAuth();
  const { toast } = useToast();

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Signed out successfully",
        description: "You have been signed out of your account.",
      });
    }
  };

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
            {!loading && (
              user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {user.user_metadata?.full_name || user.email}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={handleSignOut} className="text-destructive">
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Button variant="ghost" asChild>
                    <Link to="/auth">Masuk</Link>
                  </Button>
                  <Button variant="hero" asChild>
                    <Link to="/auth">Mulai Gratis</Link>
                  </Button>
                </>
              )
            )}
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
                {!loading && (
                  user ? (
                    <div className="space-y-2">
                      <div className="px-2 py-1 text-sm text-muted-foreground">
                        {user.user_metadata?.full_name || user.email}
                      </div>
                      <Button 
                        variant="ghost" 
                        className="justify-start text-destructive hover:text-destructive"
                        onClick={handleSignOut}
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Sign Out
                      </Button>
                    </div>
                  ) : (
                    <>
                      <Button variant="ghost" className="justify-start" asChild>
                        <Link to="/auth" onClick={() => setIsMenuOpen(false)}>Masuk</Link>
                      </Button>
                      <Button variant="hero" className="justify-start" asChild>
                        <Link to="/auth" onClick={() => setIsMenuOpen(false)}>Mulai Gratis</Link>
                      </Button>
                    </>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;