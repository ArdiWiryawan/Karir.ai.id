import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, Award, ChevronRight, Target, Lightbulb } from "lucide-react";
import { Roadmap, RoadmapPhase } from "@/data/skillForecastingTypes";
import { getCompleteJobData } from "@/data/completeJobsData";

interface RoadmapDetailProps {
  jobId: string;
  jobTitle: string;
}

const RoadmapDetail = ({ jobId, jobTitle }: RoadmapDetailProps) => {
  const { skills, roadmap, learningMaterials } = getCompleteJobData(jobId);

  if (!roadmap) {
    return (
      <div className="text-center py-12">
        <Target className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Roadmap Sedang Dikembangkan</h3>
        <p className="text-muted-foreground">
          Roadmap detail untuk {jobTitle} sedang dalam tahap pengembangan.
        </p>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Pemula': return 'bg-green-100 text-green-800 border-green-200';
      case 'Menengah': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Lanjutan': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getSkillTypeColor = (type: 'hard' | 'soft') => {
    return type === 'hard' 
      ? 'bg-blue-100 text-blue-800 border-blue-200'
      : 'bg-purple-100 text-purple-800 border-purple-200';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl md:text-3xl font-bold">
                🗺️ Roadmap {jobTitle}
              </CardTitle>
              <CardDescription className="text-lg mt-2">
                Panduan lengkap untuk menjadi {jobTitle} profesional
              </CardDescription>
            </div>
            <div className="text-right space-y-2">
              <Badge className={getDifficultyColor(roadmap.difficulty)}>
                {roadmap.difficulty}
              </Badge>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{roadmap.totalDuration}</span>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Overview Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Total Phases
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">{roadmap.phases.length}</div>
            <p className="text-sm text-muted-foreground">fase pembelajaran</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-secondary" />
              Total Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-secondary">{skills.length}</div>
            <p className="text-sm text-muted-foreground">
              {skills.filter(s => s.type === 'hard').length} hard skills, {skills.filter(s => s.type === 'soft').length} soft skills
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-accent" />
              Learning Materials
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-accent">{learningMaterials.length}</div>
            <p className="text-sm text-muted-foreground">kursus dan materi</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Phases */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">📚 Fase Pembelajaran Detail</h2>
        
        {roadmap.phases.map((phase, index) => (
          <Card key={phase.id} className="relative overflow-hidden">
            {/* Phase Number */}
            <div className="absolute top-4 left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
              {phase.order}
            </div>

            <CardHeader className="pl-16">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">{phase.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {phase.description}
                  </CardDescription>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="mb-2">
                    <Clock className="w-3 h-3 mr-1" />
                    {phase.duration}
                  </Badge>
                  {phase.prerequisites.length > 0 && (
                    <div className="text-xs text-muted-foreground">
                      Prasyarat: {phase.prerequisites.length} fase
                    </div>
                  )}
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Skills to Learn */}
              {phase.skills.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" />
                    Skills yang Dipelajari ({phase.skills.length})
                  </h4>
                  <div className="grid gap-3">
                    {phase.skills.map((skill) => (
                      <div key={skill.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium">{skill.name}</span>
                            <Badge variant="outline" className={getSkillTypeColor(skill.type)}>
                              {skill.type === 'hard' ? '🔧 Hard Skill' : '🤝 Soft Skill'}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{skill.description}</p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                            <span>Tingkat: {skill.learnability}</span>
                            <span>Waktu: {skill.timeToLearn}</span>
                            <span>Importance: {skill.importance}/10</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Learning Materials */}
              {phase.materials.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Materi Pembelajaran ({phase.materials.length})
                  </h4>
                  <div className="grid gap-3">
                    {phase.materials.map((material) => (
                      <div key={material.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium">{material.title}</span>
                            <Badge variant="outline">
                              {material.type}
                            </Badge>
                            <Badge className={getDifficultyColor(material.difficulty)}>
                              {material.difficulty}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{material.description}</p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>📅 {material.duration}</span>
                            <span>👨‍🏫 {material.provider}</span>
                            <span>
                              💰 {material.price.isFree 
                                ? 'Gratis' 
                                : `${material.price.amount.toLocaleString('id-ID')} ${material.price.currency}`
                              }
                            </span>
                            {material.rating && (
                              <span>⭐ {material.rating}/5</span>
                            )}
                          </div>
                        </div>
                        {material.url && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={material.url} target="_blank" rel="noopener noreferrer">
                              Lihat <ChevronRight className="w-4 h-4 ml-1" />
                            </a>
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">🚀 Siap Memulai Journey Anda?</CardTitle>
          <CardDescription>
            Roadmap ini dirancang khusus untuk membantu Anda menjadi {jobTitle} profesional. 
            Mulai dari fase pertama dan ikuti setiap langkah dengan konsisten.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Button size="lg" className="bg-gradient-hero">
            <Award className="w-5 h-5 mr-2" />
            Mulai Phase 1: {roadmap.phases[0]?.title}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoadmapDetail;