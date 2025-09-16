export interface Resource {
  title: string;
  url: string;
}

export interface CoreConcept {
  title: string;
  description: string;
}

export interface MasteryGoal {
  id: string;
  description: string;
}

export interface PracticalProject {
  title: string;
  description: string;
  link?: string;
}

export interface Skill {
  id: string;
  type: 'hard' | 'soft';
  title: string;
  coreConcepts: CoreConcept[];
  masteryGoals: MasteryGoal[];
  practicalProjects: PracticalProject[];
  description?: string;
  status?: 'required' | 'recommended' | 'optional';
  prerequisites?: string[];
  resources?: Resource[];
  subSkills?: Skill[];
}

export interface Phase {
  id: string;
  title: string;
  description?: string;
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