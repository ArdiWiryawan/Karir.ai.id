export interface Resource {
  title: string;
  url: string;
}

export interface Skill {
  id: string;
  type: 'hard' | 'soft';
  title: string;
  details: string;
  prerequisites?: string[];
  resources?: string[];
}

export interface Phase {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

export interface CareerMeta {
  summary: string;
  salary: {
    junior: string;
    senior: string;
  };
  growth: string;
  aiRisk: {
    percentage: number;
    level: string;
    description: string;
  };
}

export interface SkillBlueprint {
  profession: string;
  meta: CareerMeta;
  phases: Phase[];
}

// New interfaces for blueprint data model
export interface Blueprint {
  profession: string;
  summary: string;
  salaryRange: string;
  growth: string;
  aiRisk: string;
  phases: Phase[];
}

// Export types for component props
export interface RoadmapSectionProps {
  section: Phase;
  isExpanded: boolean;
  onToggle: () => void;
  progress: Record<string, boolean>;
  onToggleComplete: (id: string) => void;
  filterItems: (items: Skill[]) => Skill[];
}