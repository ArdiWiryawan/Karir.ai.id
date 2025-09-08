import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Briefcase, Users, Award, Clock, DollarSign } from "lucide-react";

const projects = [
  {
    title: "AI Content Strategy untuk UMKM Lokal",
    description: "Bantu UMKM lokal menggunakan AI tools untuk strategi konten yang efektif",
    duration: "2 minggu",
    payment: "Rp 750.000",
    skills: ["AI Tools", "Content Strategy", "UMKM Understanding"],
    difficulty: "Beginner",
    participants: 24,
    type: "Remote"
  },
  {
    title: "Sustainability Data Analysis",
    description: "Analisis data emisi karbon untuk startup green-tech Indonesia",
    duration: "3 minggu", 
    payment: "Rp 1.200.000",
    skills: ["Data Analysis", "Sustainability", "Visualization"],
    difficulty: "Intermediate",
    participants: 12,
    type: "Hybrid"
  },
  {
    title: "Prompt Engineering untuk E-commerce",
    description: "Optimasi AI prompts untuk customer service otomatis e-commerce",
    duration: "1 minggu",
    payment: "Rp 500.000",
    skills: ["Prompt Engineering", "AI/ML", "Customer Service"],
    difficulty: "Beginner",
    participants: 18,
    type: "Remote"
  },
  {
    title: "Digital Twin Modeling",
    description: "Buat model digital twin untuk manufaktur kecil di Jawa Timur",
    duration: "4 minggu",
    payment: "Rp 2.000.000",
    skills: ["3D Modeling", "IoT", "Manufacturing"],
    difficulty: "Advanced",
    participants: 6,
    type: "On-site"
  }
];

const categories = [
  {
    icon: TrendingUp,
    title: "AI & Machine Learning",
    count: "127 projects",
    description: "Proyek yang memanfaatkan kekuatan AI untuk berbagai industri"
  },
  {
    icon: Briefcase,
    title: "Future Business",
    count: "89 projects", 
    description: "Model bisnis masa depan dan digital transformation"
  },
  {
    icon: Users,
    title: "UMKM Digitalization",
    count: "156 projects",
    description: "Membantu UMKM Indonesia beradaptasi dengan teknologi baru"
  },
  {
    icon: Award,
    title: "Sustainability Tech",
    count: "73 projects",
    description: "Teknologi ramah lingkungan dan sustainable development"
  }
];

const FutureJobProjects = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-6">
                Real-World Experience
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Future Job
                </span>{" "}
                Projects
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Proyek mini berbasis pekerjaan masa depan untuk membangun portofolio yang relevan. 
                Dapatkan pengalaman nyata sambil mendapat bayaran dan networking dengan UMKM.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-hero">
                  Jelajahi Proyek
                </Button>
                <Button size="lg" variant="outline">
                  Cara Kerja
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Kategori Proyek Masa Depan
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Pilih kategori yang sesuai dengan minat dan skill Anda. 
                Semua proyek dirancang untuk mempersiapkan karier masa depan.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card key={index} className="border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer">
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                      <CardDescription>{category.count}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Proyek Unggulan
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Proyek dengan demand tinggi dan memberikan pengalaman berharga 
                untuk pekerjaan masa depan.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/30 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                        <CardDescription className="text-base">{project.description}</CardDescription>
                      </div>
                      <Badge className={`ml-4 ${
                        project.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                        project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {project.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Skills */}
                    <div>
                      <div className="text-sm font-medium mb-2">Skills yang dibutuhkan:</div>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-semibold text-green-600">{project.payment}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{project.participants} peserta</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{project.type}</span>
                      </div>
                    </div>

                    <Button className="w-full" variant="outline">
                      Daftar Proyek
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Mengapa Future Job Projects?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-border/50 text-center">
                <CardHeader>
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Portofolio Masa Depan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Selesaikan 1 proyek ini untuk portofolio yang lebih kuat dari 2 tahun pengalaman biasa. 
                    Proyek berbasis teknologi masa depan.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 text-center">
                <CardHeader>
                  <DollarSign className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <CardTitle>Penghasilan Sambil Belajar</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Dapatkan bayaran Rp 500K - 2M per proyek sambil membangun skill masa depan. 
                    Win-win solution untuk karier dan finansial.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 text-center">
                <CardHeader>
                  <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <CardTitle>Networking Premium</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Bekerja langsung dengan founder startup, UMKM progresif, dan professional berpengalaman. 
                    Networking yang berharga.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Cara Kerja
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-4">Browse & Apply</h3>
                <p className="text-muted-foreground text-sm">
                  Pilih proyek yang sesuai skill dan minat, submit proposal singkat
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-4">Get Selected</h3>
                <p className="text-muted-foreground text-sm">
                  Tim Karir.AI akan match Anda dengan klien yang tepat
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-4">Execute Project</h3>
                <p className="text-muted-foreground text-sm">
                  Kerjakan proyek dengan mentoring dari professional berpengalaman
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-4">Get Paid & Review</h3>
                <p className="text-muted-foreground text-sm">
                  Terima bayaran, review positif, dan tambahkan ke portofolio
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-16">
              Impact Numbers
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">2,247</div>
                <div className="text-lg font-semibold mb-2">Proyek Selesai</div>
                <p className="text-muted-foreground">
                  Total proyek yang berhasil dikerjakan alumni
                </p>
              </div>
              
              <div className="p-6">
                <div className="text-4xl font-bold text-green-500 mb-2">89%</div>
                <div className="text-lg font-semibold mb-2">Success Rate</div>
                <p className="text-muted-foreground">
                  Proyek yang selesai dengan rating &gt;4.5/5
                </p>
              </div>
              
              <div className="p-6">
                <div className="text-4xl font-bold text-secondary mb-2">856</div>
                <div className="text-lg font-semibold mb-2">UMKM Partners</div>
                <p className="text-muted-foreground">
                  UMKM yang sudah merasakan transformasi digital
                </p>
              </div>
              
              <div className="p-6">
                <div className="text-4xl font-bold text-accent mb-2">67%</div>
                <div className="text-lg font-semibold mb-2">Job Offer Rate</div>
                <p className="text-muted-foreground">
                  Alumni yang dapat job offer dalam 3 bulan
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Mulai Proyek Masa Depan Anda
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Dapatkan pengalaman nyata, bayaran menarik, dan portofolio yang memukau. 
              Semua dalam satu platform yang mempersiapkan Anda untuk masa depan.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Jelajahi Proyek Sekarang
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FutureJobProjects;