import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
import { SkillBlueprint } from '@/types/blueprint';
import CareerRoadmap from '@/components/CareerRoadmap';

const SkillBlueprintPage = () => {
  const [blueprint, setBlueprint] = useState<SkillBlueprint | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showRoadmap, setShowRoadmap] = useState(false);
  const navigate = useNavigate();
  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const profession = searchParams.get('profession') || 'Data Scientist';

  const fetchBlueprint = async (professionName: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/.netlify/functions/forecast', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userQuery: professionName }),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to fetch blueprint: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      setBlueprint(data.prediction);
    } catch (err) {
      console.error('Error fetching blueprint:', err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlueprint(profession);
  }, [profession]);

  if (isLoading) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-between mb-6">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-10 w-32" />
        </div>
        
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-8">
        <Card className="border-destructive">
          <CardHeader>
            <CardTitle className="text-destructive">Error Loading Blueprint</CardTitle>
            <CardDescription>
              {error}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => fetchBlueprint(profession)}>Retry</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!blueprint) {
    return null;
  }

  const handleRoadmapClick = () => {
    if (blueprint) {
      navigate('/roadmap', { state: { blueprint } });
    } else {
      alert('Blueprint belum tersedia.');
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Career Blueprint: {profession}</h1>
          <div className="flex items-center gap-4">
            <Badge variant="outline">AI Risk Level: {blueprint.meta.aiRisk.level}</Badge>
            <Badge variant="outline" className="text-primary">
              Growth: {blueprint.meta.growth}
            </Badge>
          </div>
        </div>
        <Button onClick={handleRoadmapClick}>
          View Interactive Roadmap
        </Button>
      </div>
      
      <div className="grid gap-6">
        {/* Overview Card */}
        <Card>
          <CardHeader>
            <CardTitle>Career Overview</CardTitle>
            <CardDescription>{blueprint.meta.summary}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* AI Risk */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">AI Impact Risk</span>
                  <span className="text-sm text-muted-foreground">
                    {blueprint.meta.aiRisk.percentage}%
                  </span>
                </div>
                <Progress value={blueprint.meta.aiRisk.percentage} />
                <p className="text-sm text-muted-foreground">
                  {blueprint.meta.aiRisk.description}
                </p>
              </div>

              {/* Salary Range */}
              <div className="grid gap-2">
                <h4 className="font-medium">Salary Range</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-muted-foreground">Junior Level</span>
                    <p className="text-lg font-semibold">{blueprint.meta.salary.junior}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Senior Level</span>
                    <p className="text-lg font-semibold">{blueprint.meta.salary.senior}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Learning Timeline</CardTitle>
            <CardDescription>Phase-based skill development roadmap</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {blueprint.phases.map((phase, index) => (
                <div key={phase.id} className="relative">
                  {index !== blueprint.phases.length - 1 && (
                    <div className="absolute left-2.5 top-10 bottom-0 w-px bg-muted-foreground/20" />
                  )}
                  <div className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{phase.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">{phase.description}</p>
                      <div className="flex gap-2 flex-wrap">
                        {phase.skills.map(skill => (
                          <Badge
                            key={skill.id}
                            variant={skill.type === 'hard' ? 'default' : 'secondary'}
                          >
                            {skill.title}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SkillBlueprintPage;