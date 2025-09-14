import { Job, Skill, Roadmap, RoadmapPhase, LearningMaterial } from './skillForecastingTypes';
import { 
  comprehensiveSkills, 
  comprehensiveLearningMaterials, 
  comprehensiveRoadmaps,
  dataScientistRoadmap,
  aiMLSpecialistRoadmap,
  cybersecurityAnalystRoadmap,
  web3DeveloperRoadmap,
  aiEthicsOfficerRoadmap,
  windTurbineTechnicianRoadmap,
  solarPanelInstallerRoadmap,
  geriatricTechSpecialistRoadmap,
  futureWorkStrategistRoadmap,
  ecosystemRestorationSpecialistRoadmap,
  aiWorkforceTrainerRoadmap,
  humanMachineTeamManagerRoadmap
} from './comprehensiveRoadmaps';
import { allDataScientistSkills } from './dataScientistSkillsBreakdown';

// Complete job data with detailed roadmaps, skills, and learning materials

// Function to get skills for a specific job
export function getJobSkills(jobId: string): Skill[] {
  const roadmap = comprehensiveRoadmaps[jobId];
  if (!roadmap) return [];
  
  const allSkills: Skill[] = [];
  roadmap.phases.forEach(phase => {
    allSkills.push(...phase.skills);
  });
  
  return allSkills;
}

// Function to get complete job data with comprehensive roadmaps
export function getCompleteJobData(jobId: string): {
  skills: Skill[];
  roadmap: Roadmap | null;
  learningMaterials: LearningMaterial[];
} {
  const skills = getJobSkills(jobId);
  const roadmap = comprehensiveRoadmaps[jobId] || null;
  
  // Get all learning materials for this job
  const learningMaterials: LearningMaterial[] = [];
  if (roadmap) {
    roadmap.phases.forEach(phase => {
      learningMaterials.push(...phase.materials);
    });
  }
  
  return {
    skills,
    roadmap,
    learningMaterials: learningMaterials.filter((material, index, self) => 
      index === self.findIndex(m => m.id === material.id)
    ) // Remove duplicates
  };
}

// Export all comprehensive data
export { 
  comprehensiveSkills as allSkills, 
  comprehensiveLearningMaterials as allLearningMaterials,
  comprehensiveRoadmaps as allRoadmaps
};

// Legacy compatibility - keeping original structure but using comprehensive data
const skills: Skill[] = comprehensiveSkills.slice(0, 6); // First 6 for backward compatibility

// Learning materials
const learningMaterials: LearningMaterial[] = [
  {
    id: 'ml-coursera',
    title: 'Machine Learning Course by Andrew Ng',
    type: 'course',
    provider: 'Coursera',
    url: 'https://coursera.org/learn/machine-learning',
    description: 'Course fundamental machine learning dari Stanford University',
    duration: '11 minggu',
    difficulty: 'Menengah',
    price: { amount: 59, currency: 'USD', isFree: false },
    rating: 4.9
  },
  {
    id: 'python-basics',
    title: 'Python for Everybody',
    type: 'course',
    provider: 'Coursera',
    url: 'https://coursera.org/specializations/python',
    description: 'Belajar Python dari dasar hingga aplikasi data science',
    duration: '8 minggu',
    difficulty: 'Pemula',
    price: { amount: 49, currency: 'USD', isFree: false },
    rating: 4.8
  },
  {
    id: 'deep-learning-book',
    title: 'Deep Learning by Ian Goodfellow',
    type: 'book',
    provider: 'MIT Press',
    description: 'Textbook komprehensif tentang deep learning dan neural networks',
    duration: '6-12 bulan',
    difficulty: 'Lanjutan',
    price: { amount: 75, currency: 'USD', isFree: false }
  },
  {
    id: 'tensorflow-tutorial',
    title: 'TensorFlow Developer Certificate',
    type: 'certification',
    provider: 'TensorFlow',
    url: 'https://tensorflow.org/certificate',
    description: 'Sertifikasi resmi untuk pengembang TensorFlow',
    duration: '3-6 bulan',
    difficulty: 'Menengah',
    price: { amount: 100, currency: 'USD', isFree: false },
    rating: 4.6
  },
  {
    id: 'kaggle-practice',
    title: 'Kaggle Learn',
    type: 'practice',
    provider: 'Kaggle',
    url: 'https://kaggle.com/learn',
    description: 'Micro-courses gratis dan kompetisi untuk praktik machine learning',
    duration: '2-4 minggu per course',
    difficulty: 'Pemula',
    price: { amount: 0, currency: 'USD', isFree: true },
    rating: 4.7
  }
];

// Complete roadmaps
const aiMlSpecialistRoadmap: Roadmap = {
  id: 'ai-ml-specialist-roadmap',
  jobId: 'ai-ml-specialist',
  totalDuration: '12-18 bulan',
  difficulty: 'Lanjutan',
  phases: [
    {
      id: 'phase-1-foundations',
      title: 'Foundations & Programming',
      description: 'Membangun fondasi programming dan matematika yang kuat',
      duration: '3-4 bulan',
      order: 1,
      skills: [skills[0], skills[5]], // Python Programming, Communication
      materials: [learningMaterials[1]], // Python for Everybody
      prerequisites: []
    },
    {
      id: 'phase-2-data-skills',
      title: 'Data Analysis & Statistics',
      description: 'Menguasai analisis data dan statistik untuk machine learning',
      duration: '2-3 bulan',
      order: 2,
      skills: [skills[2], skills[4]], // Data Analysis, Critical Thinking
      materials: [learningMaterials[4]], // Kaggle Learn
      prerequisites: ['phase-1-foundations']
    },
    {
      id: 'phase-3-ml-fundamentals',
      title: 'Machine Learning Fundamentals',
      description: 'Belajar algoritma dan teknik machine learning core',
      duration: '3-4 bulan',
      order: 3,
      skills: [skills[1]], // Machine Learning
      materials: [learningMaterials[0]], // ML Course by Andrew Ng
      prerequisites: ['phase-2-data-skills']
    },
    {
      id: 'phase-4-deep-learning',
      title: 'Deep Learning & Frameworks',
      description: 'Menguasai deep learning dan framework modern',
      duration: '3-4 bulan',
      order: 4,
      skills: [skills[3]], // TensorFlow/PyTorch
      materials: [learningMaterials[2], learningMaterials[3]], // Deep Learning book, TensorFlow cert
      prerequisites: ['phase-3-ml-fundamentals']
    },
    {
      id: 'phase-5-specialization',
      title: 'Specialization & Projects',
      description: 'Spesialisasi di area tertentu dan membangun portfolio',
      duration: '3-6 bulan',
      order: 5,
      skills: [skills[4]], // Critical Thinking
      materials: [learningMaterials[4]], // Kaggle practice
      prerequisites: ['phase-4-deep-learning']
    }
  ]
};

// Complete job data with full details
export const completeJobs: Job[] = [
  {
    id: 'ai-ml-specialist',
    title: 'AI/Machine Learning Specialist',
    category: 'Teknologi & AI',
    description: 'Merancang, membangun, dan menerapkan model machine learning yang menjadi inti dari produk dan layanan berbasis AI.',
    aiReplacementRisk: 5,
    salaryRange: { min: 120000000, max: 250000000, currency: 'IDR' },
    growthProjection: 'Sangat Tinggi',
    isNewProfession: true,
    requiredSkills: [
      skills[0], // Python Programming
      skills[1], // Machine Learning
      skills[2], // Data Analysis
      skills[3], // TensorFlow/PyTorch
      skills[4], // Critical Thinking
      skills[5]  // Communication
    ],
    roadmap: aiMlSpecialistRoadmap,
    interestingFacts: [
      'Pertumbuhan permintaan 26% per tahun hingga 2033',
      'Talenta papan atas bisa mencapai $500,000-$2,000,000 per tahun',
      'Menjadi arsitek ekonomi berbasis kecerdasan buatan',
      'Dibutuhkan di hampir semua industri: finance, healthcare, e-commerce, gaming'
    ],
    aiProofSkills: [
      'Deep Learning Architecture Design',
      'Creative Problem Solving',
      'Cross-domain Knowledge Integration',
      'Ethical AI Implementation',
      'Human-AI Collaboration'
    ],
    timeline: '2025-2040'
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    category: 'Data & Analytics',
    description: 'Menganalisis data kompleks untuk menghasilkan insights bisnis menggunakan machine learning dan statistik.',
    aiReplacementRisk: 12,
    salaryRange: { min: 110000000, max: 180000000, currency: 'IDR' },
    growthProjection: 'Sangat Tinggi',
    isNewProfession: false,
    requiredSkills: [
      // Mengambil skills dari comprehensive roadmap
      ...allDataScientistSkills.slice(0, 6) // Top 6 most important skills
    ],
    roadmap: dataScientistRoadmap,
    interestingFacts: [
      'Disebut sebagai "Sexiest Job of 21st Century" oleh Harvard Business Review',
      'Median salary $126,830 di US (2023)',
      'Pertumbuhan job 22% dari 2020-2030 (jauh lebih cepat dari rata-rata)',
      'Dibutuhkan untuk AI ethics, bias detection, dan explainable AI'
    ],
    aiProofSkills: [
      'Business Domain Expertise',
      'Statistical Reasoning',
      'Data Storytelling',
      'Experimental Design',
      'Strategic Thinking'
    ],
    timeline: '2025-2040'
  },
  {
    id: 'cybersecurity-analyst',
    title: 'Analis Keamanan Siber',
    category: 'Teknologi & AI',
    description: 'Melindungi sistem informasi dari ancaman cyber dan menganalisis kerentanan keamanan.',
    aiReplacementRisk: 10,
    salaryRange: { min: 95000000, max: 160000000, currency: 'IDR' },
    growthProjection: 'Sangat Tinggi',
    isNewProfession: false,
    requiredSkills: [
      {
        id: 'network-security',
        name: 'Network Security',
        type: 'hard',
        category: 'Technical Skills',
        description: 'Pemahaman protokol jaringan, firewall, dan infrastruktur keamanan',
        importance: 9,
        learnability: 'Sulit',
        timeToLearn: '6-12 bulan'
      },
      {
        id: 'incident-response',
        name: 'Incident Response',
        type: 'hard',
        category: 'Technical Skills',
        description: 'Kemampuan merespons dan menganalisis insiden keamanan',
        importance: 8,
        learnability: 'Sedang',
        timeToLearn: '3-6 bulan'
      },
      skills[4], // Critical Thinking
      skills[5]  // Communication
    ],
    roadmap: {
      id: 'cybersecurity-roadmap',
      jobId: 'cybersecurity-analyst',
      totalDuration: '6-12 bulan',
      difficulty: 'Menengah',
      phases: [
        {
          id: 'cyber-phase-1',
          title: 'Security Fundamentals',
          description: 'Mempelajari dasar-dasar keamanan IT dan networking',
          duration: '2-3 bulan',
          order: 1,
          skills: [],
          materials: [],
          prerequisites: []
        },
        {
          id: 'cyber-phase-2',
          title: 'Threat Analysis',
          description: 'Menguasai analisis ancaman dan vulnerability assessment',
          duration: '2-3 bulan',
          order: 2,
          skills: [],
          materials: [],
          prerequisites: ['cyber-phase-1']
        },
        {
          id: 'cyber-phase-3',
          title: 'Incident Response',
          description: 'Praktik incident response dan forensik digital',
          duration: '2-6 bulan',
          order: 3,
          skills: [],
          materials: [],
          prerequisites: ['cyber-phase-2']
        }
      ]
    },
    interestingFacts: [
      'Pertumbuhan 31% per tahun hingga 2030 (5x lebih cepat dari rata-rata)',
      'Global cybersecurity workforce gap: 3.5 juta posisi kosong',
      'Average cost of data breach: $4.45 million (2023)',
      'Remote work meningkatkan permintaan cybersecurity 300%'
    ],
    aiProofSkills: [
      'Human Psychology Understanding',
      'Strategic Risk Assessment',
      'Crisis Communication',
      'Ethical Hacking Creativity',
      'Cross-functional Collaboration'
    ],
    timeline: '2025-2040'
  }
];

// Export all data
export { skills as completeSkills, learningMaterials as completeLearningMaterials };
export default completeJobs;