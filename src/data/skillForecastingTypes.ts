// Data types untuk AI-Powered Skill Forecasting

export interface Job {
  id: string;
  title: string;
  category: JobCategory;
  description: string;
  aiReplacementRisk: number; // 0-100
  salaryRange: {
    min: number;
    max: number;
    currency: string;
  };
  growthProjection: 'Sangat Tinggi' | 'Tinggi' | 'Sedang' | 'Rendah' | 'Menurun';
  isNewProfession: boolean;
  requiredSkills: Skill[];
  roadmap: Roadmap;
  interestingFacts: string[];
  aiProofSkills: string[];
  timeline: string; // e.g., "2025-2030"
}

export interface Skill {
  id: string;
  name: string;
  type: 'hard' | 'soft';
  category: SkillCategory;
  description: string;
  importance: number; // 1-10
  learnability: 'Mudah' | 'Sedang' | 'Sulit' | 'Sangat Sulit';
  timeToLearn: string; // e.g., "3-6 bulan"
}

export interface Roadmap {
  id: string;
  jobId: string;
  phases: RoadmapPhase[];
  totalDuration: string;
  difficulty: 'Pemula' | 'Menengah' | 'Lanjutan';
}

export interface RoadmapPhase {
  id: string;
  title: string;
  description: string;
  duration: string;
  order: number;
  skills: Skill[];
  materials: LearningMaterial[];
  prerequisites: string[];
}

export interface LearningMaterial {
  id: string;
  title: string;
  type: 'course' | 'book' | 'tutorial' | 'certification' | 'practice';
  provider: string;
  url?: string;
  description: string;
  duration: string;
  difficulty: 'Pemula' | 'Menengah' | 'Lanjutan';
  price: {
    amount: number;
    currency: string;
    isFree: boolean;
  };
  rating?: number;
}

export type JobCategory = 
  | 'Teknologi & AI'
  | 'Data & Analytics' 
  | 'Kesehatan & Medis'
  | 'Keuangan & Fintech'
  | 'Energi & Lingkungan'
  | 'Pendidikan & Pelatihan'
  | 'Kreatif & Media'
  | 'Bisnis & Manajemen'
  | 'Manufaktur & Produksi'
  | 'Layanan & Hospitality'
  | 'Pemerintahan & Publik'
  | 'Penelitian & Sains';

export type SkillCategory =
  | 'Programming & Development'
  | 'Data & Analytics'
  | 'AI & Machine Learning'
  | 'Digital Marketing'
  | 'Design & UX'
  | 'Leadership & Management'
  | 'Communication'
  | 'Problem Solving'
  | 'Creativity'
  | 'Technical Skills'
  | 'Business Skills'
  | 'Soft Skills';

// Assessment questionnaire types
export interface AssessmentQuestion {
  id: string;
  question: string;
  type: 'single-choice' | 'multiple-choice' | 'scale' | 'text';
  options?: AssessmentOption[];
  category: AssessmentCategory;
  weight: number;
}

export interface AssessmentOption {
  id: string;
  text: string;
  value: string | number;
  jobCategories: JobCategory[];
}

export type AssessmentCategory =
  | 'interests'
  | 'skills'
  | 'experience'
  | 'personality'
  | 'career_goals'
  | 'work_style';

export interface AssessmentResult {
  userId?: string;
  answers: Record<string, any>;
  matchedJobs: JobMatch[];
  timestamp: Date;
}

export interface JobMatch {
  job: Job;
  matchScore: number; // 0-100
  reasoning: string[];
}

// AI Risk Analysis data
export interface RiskAnalysis {
  jobId: string;
  riskFactors: string[];
  protectiveFactors: string[];
  timeline: string;
  confidence: number; // 0-100
}