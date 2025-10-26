import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CareerBlueprintCard from "@/components/CareerBlueprintCard";
import CareerBlueprintDetail from "@/components/CareerBlueprintDetail";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CareerBlueprint } from "@/data/comprehensiveCareerBreakdown";
import { Search, Filter, TrendingUp, AlertTriangle, Loader2 } from "lucide-react";

const CareerBlueprints = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRiskLevel, setSelectedRiskLevel] = useState("all");
  const [selectedBlueprint, setSelectedBlueprint] = useState<CareerBlueprint | null>(null);
  const [showDetail, setShowDetail] = useState(false);
  const [blueprints, setBlueprints] = useState<CareerBlueprint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch blueprints from API
  useEffect(() => {
    const fetchBlueprints = async () => {
      try {
        setLoading(true);
        const response = await fetch('/.netlify/functions/forecast', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userQuery: 'all' }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch blueprints');
        }

        const data = await response.json();
        // Handle both single blueprint and array of blueprints
        const blueprintData = Array.isArray(data.prediction) ? data.prediction : [data.prediction];
        setBlueprints(blueprintData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching blueprints:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlueprints();
  }, []);

  // Get unique categories and risk levels
  const categories = Array.from(new Set(blueprints.map(b => b.category)));
  const riskLevels = Array.from(new Set(blueprints.map(b => b.riskLevel)));

  // Filter blueprints
  const filteredBlueprints = blueprints.filter(blueprint => {
    const matchesSearch = blueprint.profession.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blueprint.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || blueprint.category === selectedCategory;
    const matchesRisk = selectedRiskLevel === "all" || blueprint.riskLevel === selectedRiskLevel;
    
    return matchesSearch && matchesCategory && matchesRisk;
  });

  // Separate high-risk and future jobs
  const highRiskJobs = filteredBlueprints.filter(b => b.aiRisk >= 70);
  const futureJobs = filteredBlueprints.filter(b => b.aiRisk < 70);

  const handleViewDetails = (blueprint: CareerBlueprint) => {
    setSelectedBlueprint(blueprint);
    setShowDetail(true);
  };

  const handleStartLearning = () => {
    // Navigate to assessment or learning platform
    console.log("Starting learning path for:", selectedBlueprint?.profession);
  };

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-24 text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">Loading career blueprints...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-24 text-center">
            <AlertTriangle className="w-8 h-8 text-red-500 mx-auto mb-4" />
            <p className="text-lg text-red-500 mb-4">Error: {error}</p>
            <Button onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-6">
              Comprehensive Career Analysis
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Career Blueprints
              </span>{" "}
              Database
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Breakdown lengkap Hard Skills dan Soft Skills untuk semua karir masa depan. 
              Berdasarkan analisis 500+ profesi dengan 50,000+ data lowongan Indonesia.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Cari profesi atau kategori..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Pilih Kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Kategori</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedRiskLevel} onValueChange={setSelectedRiskLevel}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Tingkat Risiko" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Risiko</SelectItem>
                  {riskLevels.map(level => (
                    <SelectItem key={level} value={level}>{level}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* High-Risk Jobs Section */}
        {highRiskJobs.length > 0 && (
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                  <h2 className="text-3xl font-bold text-red-500">Pekerjaan Berisiko Tinggi</h2>
                </div>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Pekerjaan dengan risiko tinggi tergantikan AI. Lihat transition paths untuk mengamankan masa depan karier.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {highRiskJobs.map((blueprint, index) => (
                  <CareerBlueprintCard
                    key={index}
                    blueprint={blueprint}
                    onViewDetails={() => handleViewDetails(blueprint)}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Future Jobs Section */}
        {futureJobs.length > 0 && (
          <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                  <h2 className="text-3xl font-bold text-green-500">Pekerjaan Masa Depan</h2>
                </div>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Karir dengan pertumbuhan tinggi dan risiko rendah dari AI. Investasi terbaik untuk masa depan.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {futureJobs.map((blueprint, index) => (
                  <CareerBlueprintCard
                    key={index}
                    blueprint={blueprint}
                    onViewDetails={() => handleViewDetails(blueprint)}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Stats Summary */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Database Overview</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">
                  {blueprints.length}
                </div>
                <div className="text-lg font-semibold mb-2">Total Profesi</div>
                <p className="text-muted-foreground">Dianalisis secara komprehensif</p>
              </div>
              
              <div className="p-6">
                <div className="text-4xl font-bold text-red-500 mb-2">
                  {highRiskJobs.length}
                </div>
                <div className="text-lg font-semibold mb-2">High-Risk Jobs</div>
                <p className="text-muted-foreground">Perlu transition planning</p>
              </div>
              
              <div className="p-6">
                <div className="text-4xl font-bold text-green-500 mb-2">
                  {futureJobs.length}
                </div>
                <div className="text-lg font-semibold mb-2">Future-Proof Jobs</div>
                <p className="text-muted-foreground">Aman dari AI replacement</p>
              </div>
              
              <div className="p-6">
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-lg font-semibold mb-2">Skills Mapped</div>
                <p className="text-muted-foreground">Hard & soft skills analyzed</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Detail Modal */}
      <Dialog open={showDetail} onOpenChange={setShowDetail}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {selectedBlueprint?.profession} - Detailed Blueprint
            </DialogTitle>
          </DialogHeader>
          {selectedBlueprint && (
            <CareerBlueprintDetail
              blueprint={selectedBlueprint}
              onStartLearning={handleStartLearning}
            />
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default CareerBlueprints;