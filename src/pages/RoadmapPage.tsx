import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BlueprintView from '@/components/BlueprintView';
import { futureJobsBlueprints, disappearingJobsBlueprints } from '@/data/comprehensiveCareerBreakdown';
import { CareerBlueprint } from '@/data/comprehensiveCareerBreakdown';
import { SkillBlueprint } from '@/types/blueprint';
import { comprehensiveRoadmaps } from '@/data/comprehensiveRoadmaps';
import type { Roadmap } from '@/data/skillForecastingTypes';

export default function RoadmapPage() {
  const { profession } = useParams<{ profession: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [blueprint, setBlueprint] = useState<SkillBlueprint | null>(null);

  // helper: slugify profession string
  const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  // map CareerBlueprint (data source) -> SkillBlueprint (UI component)
  const toSkillBlueprint = (bp: CareerBlueprint): SkillBlueprint => {
    return {
      profession: bp.profession,
      meta: {
        summary: bp.summary,
        salary: {
          // Since CareerBlueprint has a single range string, duplicate it as both for display
          junior: bp.salaryRange,
          senior: bp.salaryRange
        },
        growth: bp.growth,
        aiRisk: {
          percentage: bp.aiRisk || 0,
          level: bp.riskLevel || 'Unknown',
          description: `Risk level: ${bp.riskLevel}. Timeline: ${bp.timeline}`
        }
      },
      phases: (bp.phases || []).map((phase, idx) => ({
        id: slugify(phase.title || phase.phase || `phase-${idx+1}`),
        title: phase.title || phase.phase || `Phase ${idx+1}`,
        description: phase.objective,
        skills: (phase.skills || []).map((s, i) => ({
          id: slugify(`${s.name}-${i}`),
          type: (s.type.toLowerCase().includes('hard') ? 'hard' : 'soft') as 'hard' | 'soft',
          title: s.name,
          details: s.description || (s.concepts && s.concepts.length ? s.concepts.join(', ') : ''),
          prerequisites: [],
          resources: s.learningPath ? [{ title: s.learningPath, url: '#' }] : undefined
        }))
      }))
    };
  }

  // map Roadmap (from comprehensiveRoadmaps) -> SkillBlueprint
  const toSkillBlueprintFromRoadmap = (rm: Roadmap, slug: string): SkillBlueprint => {
    const toTitle = (s: string) => s.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    return {
      profession: toTitle(slug),
      meta: {
        summary: `Roadmap pembelajaran untuk ${toTitle(slug)}`,
        salary: { junior: 'N/A', senior: 'N/A' },
        growth: 'N/A',
        aiRisk: { percentage: 0, level: 'Unknown', description: '' }
      },
      phases: (rm.phases || []).map((phase, idx) => ({
        id: phase.id || `phase-${idx+1}`,
        title: phase.title,
        description: phase.description,
        skills: (phase.skills || []).map((s, i) => ({
          id: s.id || `${i}-${s.name}`,
          type: (s.type === 'hard' ? 'hard' : 'soft'),
          title: s.name,
          details: s.description || ''
        }))
      }))
    };
  };

  useEffect(() => {
    if (profession) {
      const allBlueprints = [...futureJobsBlueprints, ...disappearingJobsBlueprints];
      const foundBlueprint = allBlueprints.find(
        (bp) => slugify(bp.profession) === profession
      );

      if (foundBlueprint) {
        const mapped = toSkillBlueprint(foundBlueprint as CareerBlueprint);
        setBlueprint(mapped);
      } else {
        // Fallback: use comprehensiveRoadmaps (keyed by jobId/slug)
        const rm: Roadmap | undefined = (comprehensiveRoadmaps as any)[profession];
        if (rm) {
          const mapped = toSkillBlueprintFromRoadmap(rm, profession);
          setBlueprint(mapped);
        } else {
          setError(`Roadmap for '${profession}' not found.`);
        }
      }
      setIsLoading(false);
    }
  }, [profession]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4 mx-auto"></div>
          <p className="text-lg font-medium">Loading Career Roadmap...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center text-red-600">
          <h2 className="text-xl font-bold mb-2">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!blueprint) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Roadmap Not Found</h2>
          <p>We couldn't find a career blueprint for the requested profession.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <BlueprintView blueprint={blueprint} />
    </div>
  );
}