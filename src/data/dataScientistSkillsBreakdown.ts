import { Skill, LearningMaterial, Roadmap, RoadmapPhase } from './skillForecastingTypes';

// =============================================
// DATA SCIENTIST SKILLS BREAKDOWN
// Berdasarkan AI and Data Scientist Roadmap
// =============================================

// HARD SKILLS untuk Data Scientist
export const dataScientistHardSkills: Skill[] = [
  // 1. MATHEMATICS & STATISTICS
  {
    id: 'ds-linear-algebra',
    name: 'Aljabar Linier',
    type: 'hard',
    category: 'Data & Analytics',
    description: 'Vektor, matriks, eigenvalue/eigenvector untuk machine learning algorithms',
    importance: 9,
    learnability: 'Sulit',
    timeToLearn: '4-6 bulan'
  },
  {
    id: 'ds-calculus',
    name: 'Kalkulus & Optimisasi',
    type: 'hard',
    category: 'Data & Analytics',
    description: 'Turunan, gradien descent, optimisasi untuk model training',
    importance: 8,
    learnability: 'Sulit',
    timeToLearn: '3-6 bulan'
  },
  {
    id: 'ds-statistics-inferential',
    name: 'Statistika Deskriptif & Inferensial',
    type: 'hard',
    category: 'Data & Analytics',
    description: 'Mean, median, distribusi, hypothesis testing, confidence intervals',
    importance: 10,
    learnability: 'Sedang',
    timeToLearn: '3-6 bulan'
  },
  {
    id: 'ds-probability-theory',
    name: 'Teori Probabilitas',
    type: 'hard',
    category: 'Data & Analytics',
    description: 'Probability distributions, Bayes theorem, sampling methods',
    importance: 9,
    learnability: 'Sulit',
    timeToLearn: '3-6 bulan'
  },
  {
    id: 'ds-ab-testing',
    name: 'A/B Testing & Experiment Design',
    type: 'hard',
    category: 'Data & Analytics',
    description: 'Statistical significance, power analysis, experiment design principles',
    importance: 8,
    learnability: 'Sedang',
    timeToLearn: '2-4 bulan'
  },

  // 2. PROGRAMMING & TOOLS
  {
    id: 'ds-python-advanced',
    name: 'Python untuk Data Science',
    type: 'hard',
    category: 'Programming & Development',
    description: 'Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn untuk data analysis',
    importance: 10,
    learnability: 'Sedang',
    timeToLearn: '3-6 bulan'
  },
  {
    id: 'ds-sql-advanced',
    name: 'SQL Advanced',
    type: 'hard',
    category: 'Data & Analytics',
    description: 'Complex queries, JOINs, window functions, CTEs untuk data manipulation',
    importance: 9,
    learnability: 'Sedang',
    timeToLearn: '2-4 bulan'
  },
  {
    id: 'ds-r-programming',
    name: 'R Programming (Optional)',
    type: 'hard',
    category: 'Programming & Development',
    description: 'dplyr, ggplot2, tidyverse untuk statistical analysis',
    importance: 6,
    learnability: 'Sedang',
    timeToLearn: '2-4 bulan'
  },
  {
    id: 'ds-git-version-control',
    name: 'Git & Version Control',
    type: 'hard',
    category: 'Programming & Development',
    description: 'Version control untuk data science projects dan collaboration',
    importance: 7,
    learnability: 'Mudah',
    timeToLearn: '1-2 bulan'
  },

  // 3. DATA PROCESSING & ANALYSIS
  {
    id: 'ds-data-cleaning',
    name: 'Data Cleaning & Preprocessing',
    type: 'hard',
    category: 'Data & Analytics',
    description: 'Missing values, outliers, feature engineering, data transformation',
    importance: 10,
    learnability: 'Sedang',
    timeToLearn: '2-4 bulan'
  },
  {
    id: 'ds-exploratory-data-analysis',
    name: 'Exploratory Data Analysis (EDA)',
    type: 'hard',
    category: 'Data & Analytics',
    description: 'Data understanding, pattern recognition, statistical summaries',
    importance: 9,
    learnability: 'Sedang',
    timeToLearn: '2-3 bulan'
  },
  {
    id: 'ds-data-visualization',
    name: 'Data Visualization',
    type: 'hard',
    category: 'Design & UX',
    description: 'Matplotlib, Seaborn, Plotly, Tableau untuk data storytelling',
    importance: 8,
    learnability: 'Sedang',
    timeToLearn: '2-4 bulan'
  },
  {
    id: 'ds-big-data-tools',
    name: 'Big Data Technologies',
    type: 'hard',
    category: 'Technical Skills',
    description: 'Apache Spark, Hadoop, cloud platforms (AWS, GCP, Azure)',
    importance: 7,
    learnability: 'Sulit',
    timeToLearn: '4-8 bulan'
  },

  // 4. MACHINE LEARNING
  {
    id: 'ds-supervised-learning',
    name: 'Supervised Machine Learning',
    type: 'hard',
    category: 'AI & Machine Learning',
    description: 'Regression, classification algorithms (linear, tree-based, ensemble)',
    importance: 10,
    learnability: 'Sulit',
    timeToLearn: '4-8 bulan'
  },
  {
    id: 'ds-unsupervised-learning',
    name: 'Unsupervised Learning',
    type: 'hard',
    category: 'AI & Machine Learning',
    description: 'Clustering, dimensionality reduction, anomaly detection',
    importance: 8,
    learnability: 'Sulit',
    timeToLearn: '3-6 bulan'
  },
  {
    id: 'ds-feature-engineering',
    name: 'Feature Engineering',
    type: 'hard',
    category: 'AI & Machine Learning',
    description: 'Feature selection, creation, transformation untuk model performance',
    importance: 9,
    learnability: 'Sulit',
    timeToLearn: '3-6 bulan'
  },
  {
    id: 'ds-model-evaluation',
    name: 'Model Evaluation & Validation',
    type: 'hard',
    category: 'AI & Machine Learning',
    description: 'Cross-validation, metrics, overfitting prevention, hyperparameter tuning',
    importance: 9,
    learnability: 'Sedang',
    timeToLearn: '2-4 bulan'
  },

  // 5. DEEP LEARNING (Advanced)
  {
    id: 'ds-neural-networks',
    name: 'Neural Networks',
    type: 'hard',
    category: 'AI & Machine Learning',
    description: 'Fully connected networks, backpropagation, activation functions',
    importance: 7,
    learnability: 'Sulit',
    timeToLearn: '4-8 bulan'
  },
  {
    id: 'ds-deep-learning-frameworks',
    name: 'Deep Learning Frameworks',
    type: 'hard',
    category: 'AI & Machine Learning',
    description: 'TensorFlow, PyTorch, Keras untuk deep learning models',
    importance: 6,
    learnability: 'Sulit',
    timeToLearn: '4-8 bulan'
  },

  // 6. MLOps & DEPLOYMENT
  {
    id: 'ds-model-deployment',
    name: 'Model Deployment',
    type: 'hard',
    category: 'AI & Machine Learning',
    description: 'Model serving, APIs, containerization, cloud deployment',
    importance: 8,
    learnability: 'Sulit',
    timeToLearn: '3-6 bulan'
  },
  {
    id: 'ds-mlops-pipeline',
    name: 'MLOps & CI/CD',
    type: 'hard',
    category: 'AI & Machine Learning',
    description: 'MLFlow, model versioning, automated training pipelines',
    importance: 7,
    learnability: 'Sulit',
    timeToLearn: '3-6 bulan'
  },

  // 7. DOMAIN EXPERTISE
  {
    id: 'ds-business-intelligence',
    name: 'Business Intelligence',
    type: 'hard',
    category: 'Business Skills',
    description: 'KPI understanding, business metrics, dashboard creation',
    importance: 8,
    learnability: 'Sedang',
    timeToLearn: '2-4 bulan'
  }
];

// SOFT SKILLS untuk Data Scientist
export const dataScientistSoftSkills: Skill[] = [
  // 1. PROBLEM SOLVING & ANALYTICAL THINKING
  {
    id: 'ds-analytical-thinking',
    name: 'Analytical Thinking',
    type: 'soft',
    category: 'Problem Solving',
    description: 'Kemampuan memecah masalah kompleks menjadi komponen yang dapat dianalisis',
    importance: 10,
    learnability: 'Sedang',
    timeToLearn: '6-12 bulan'
  },
  {
    id: 'ds-critical-thinking',
    name: 'Critical Thinking',
    type: 'soft',
    category: 'Problem Solving',
    description: 'Evaluasi objektif terhadap informasi dan asumsi dalam data analysis',
    importance: 9,
    learnability: 'Sedang',
    timeToLearn: '6-12 bulan'
  },
  {
    id: 'ds-structured-problem-solving',
    name: 'Structured Problem Solving',
    type: 'soft',
    category: 'Problem Solving',
    description: 'Pendekatan sistematis untuk memecahkan business problems dengan data',
    importance: 9,
    learnability: 'Sedang',
    timeToLearn: '6-12 bulan'
  },

  // 2. COMMUNICATION & COLLABORATION
  {
    id: 'ds-data-storytelling',
    name: 'Data Storytelling',
    type: 'soft',
    category: 'Communication',
    description: 'Menyampaikan insights data dalam narasi yang compelling dan actionable',
    importance: 10,
    learnability: 'Sedang',
    timeToLearn: '4-8 bulan'
  },
  {
    id: 'ds-technical-communication',
    name: 'Technical Communication',
    type: 'soft',
    category: 'Communication',
    description: 'Menjelaskan konsep data science kepada stakeholder non-teknis',
    importance: 9,
    learnability: 'Sedang',
    timeToLearn: '3-6 bulan'
  },
  {
    id: 'ds-presentation-skills',
    name: 'Presentation Skills',
    type: 'soft',
    category: 'Communication',
    description: 'Mempresentasikan findings dan recommendations dengan efektif',
    importance: 8,
    learnability: 'Sedang',
    timeToLearn: '3-6 bulan'
  },
  {
    id: 'ds-cross-functional-collaboration',
    name: 'Cross-functional Collaboration',
    type: 'soft',
    category: 'Soft Skills',
    description: 'Bekerja efektif dengan product, engineering, dan business teams',
    importance: 8,
    learnability: 'Sedang',
    timeToLearn: '3-6 bulan'
  },

  // 3. BUSINESS ACUMEN
  {
    id: 'ds-business-acumen',
    name: 'Business Acumen',
    type: 'soft',
    category: 'Business Skills',
    description: 'Memahami konteks bisnis dan impact dari data-driven decisions',
    importance: 9,
    learnability: 'Sedang',
    timeToLearn: '6-12 bulan'
  },
  {
    id: 'ds-strategic-thinking',
    name: 'Strategic Thinking',
    type: 'soft',
    category: 'Business Skills',
    description: 'Menghubungkan data insights dengan strategic business objectives',
    importance: 8,
    learnability: 'Sulit',
    timeToLearn: '8-15 bulan'
  },
  {
    id: 'ds-stakeholder-management',
    name: 'Stakeholder Management',
    type: 'soft',
    category: 'Business Skills',
    description: 'Mengelola ekspektasi dan requirements dari berbagai stakeholder',
    importance: 8,
    learnability: 'Sedang',
    timeToLearn: '4-8 bulan'
  },

  // 4. ADAPTABILITY & LEARNING
  {
    id: 'ds-intellectual-curiosity',
    name: 'Intellectual Curiosity',
    type: 'soft',
    category: 'Soft Skills',
    description: 'Dorongan untuk mengeksplorasi data dan menemukan patterns tersembunyi',
    importance: 9,
    learnability: 'Mudah',
    timeToLearn: '1-3 bulan'
  },
  {
    id: 'ds-continuous-learning',
    name: 'Continuous Learning',
    type: 'soft',
    category: 'Soft Skills',
    description: 'Kemampuan terus mengikuti perkembangan tools dan techniques terbaru',
    importance: 10,
    learnability: 'Sedang',
    timeToLearn: '6-12 bulan'
  },
  {
    id: 'ds-adaptability',
    name: 'Adaptability',
    type: 'soft',
    category: 'Soft Skills',
    description: 'Fleksibilitas dalam menghadapi changing requirements dan new technologies',
    importance: 8,
    learnability: 'Sedang',
    timeToLearn: '6-12 bulan'
  },

  // 5. PROJECT MANAGEMENT & EXECUTION
  {
    id: 'ds-project-management',
    name: 'Project Management',
    type: 'soft',
    category: 'Leadership & Management',
    description: 'Mengelola data science projects dari conception hingga delivery',
    importance: 7,
    learnability: 'Sedang',
    timeToLearn: '3-6 bulan'
  },
  {
    id: 'ds-attention-to-detail',
    name: 'Attention to Detail',
    type: 'soft',
    category: 'Soft Skills',
    description: 'Ketelitian dalam data analysis dan model validation untuk accuracy',
    importance: 9,
    learnability: 'Mudah',
    timeToLearn: '2-4 bulan'
  },
  {
    id: 'ds-time-management',
    name: 'Time Management',
    type: 'soft',
    category: 'Soft Skills',
    description: 'Prioritizing tasks dan managing multiple projects dengan deadline',
    importance: 7,
    learnability: 'Sedang',
    timeToLearn: '3-6 bulan'
  },

  // 6. ETHICAL & PROFESSIONAL
  {
    id: 'ds-ethical-reasoning',
    name: 'Ethical Reasoning',
    type: 'soft',
    category: 'Problem Solving',
    description: 'Mempertimbangkan implikasi etika dalam penggunaan data dan AI',
    importance: 8,
    learnability: 'Sedang',
    timeToLearn: '4-8 bulan'
  },
  {
    id: 'ds-data-privacy-awareness',
    name: 'Data Privacy Awareness',
    type: 'soft',
    category: 'Business Skills',
    description: 'Pemahaman tentang privacy regulations dan responsible data usage',
    importance: 8,
    learnability: 'Sedang',
    timeToLearn: '2-4 bulan'
  }
];

// Gabungan semua skills Data Scientist
export const allDataScientistSkills: Skill[] = [
  ...dataScientistHardSkills,
  ...dataScientistSoftSkills
];

// Learning Materials untuk Data Scientist
export const dataScientistLearningMaterials: LearningMaterial[] = [
  // MATHEMATICS & STATISTICS
  {
    id: 'khan-academy-statistics',
    title: 'Statistics and Probability - Khan Academy',
    type: 'course',
    provider: 'Khan Academy',
    url: 'https://khanacademy.org/math/statistics-probability',
    description: 'Kursus gratis comprehensive untuk statistika dan probabilitas',
    duration: '8-12 minggu',
    difficulty: 'Pemula',
    price: { amount: 0, currency: 'IDR', isFree: true },
    rating: 4.7
  },
  {
    id: 'mathematics-for-ml',
    title: 'Mathematics for Machine Learning Specialization',
    type: 'course',
    provider: 'Coursera (Imperial College London)',
    url: 'https://coursera.org/specializations/mathematics-machine-learning',
    description: 'Linear algebra, calculus, dan PCA untuk machine learning',
    duration: '12-16 minggu',
    difficulty: 'Menengah',
    price: { amount: 1470000, currency: 'IDR', isFree: false },
    rating: 4.6
  },

  // PROGRAMMING
  {
    id: 'python-for-data-science',
    title: 'Python for Data Science and Machine Learning',
    type: 'course',
    provider: 'Udemy',
    description: 'Comprehensive Python course dengan Pandas, NumPy, Matplotlib',
    duration: '25 jam video',
    difficulty: 'Pemula',
    price: { amount: 1200000, currency: 'IDR', isFree: false },
    rating: 4.5
  },
  {
    id: 'sql-for-data-science',
    title: 'SQL for Data Science',
    type: 'course',
    provider: 'Coursera (UC Davis)',
    description: 'SQL fundamentals untuk data analysis dan manipulation',
    duration: '4 minggu',
    difficulty: 'Pemula',
    price: { amount: 490000, currency: 'IDR', isFree: false },
    rating: 4.6
  },

  // MACHINE LEARNING
  {
    id: 'andrew-ng-ml-course',
    title: 'Machine Learning Course by Andrew Ng',
    type: 'course',
    provider: 'Coursera',
    url: 'https://coursera.org/learn/machine-learning',
    description: 'Course fundamental machine learning yang paling populer',
    duration: '11 minggu',
    difficulty: 'Menengah',
    price: { amount: 490000, currency: 'IDR', isFree: false },
    rating: 4.9
  },
  {
    id: 'scikit-learn-tutorial',
    title: 'Scikit-learn Tutorial',
    type: 'tutorial',
    provider: 'Scikit-learn.org',
    url: 'https://scikit-learn.org/stable/tutorial/',
    description: 'Tutorial resmi Scikit-learn untuk machine learning',
    duration: '4-6 minggu',
    difficulty: 'Menengah',
    price: { amount: 0, currency: 'IDR', isFree: true },
    rating: 4.5
  },

  // DATA VISUALIZATION
  {
    id: 'tableau-fundamentals',
    title: 'Tableau Desktop Specialist',
    type: 'certification',
    provider: 'Tableau',
    description: 'Sertifikasi Tableau untuk data visualization dan business intelligence',
    duration: '6-8 minggu',
    difficulty: 'Menengah',
    price: { amount: 1500000, currency: 'IDR', isFree: false },
    rating: 4.4
  },

  // BUSINESS SKILLS
  {
    id: 'data-storytelling-course',
    title: 'Data Storytelling',
    type: 'course',
    provider: 'Storytelling with Data',
    description: 'Komunikasi efektif dengan data dan visualization best practices',
    duration: '4-6 minggu',
    difficulty: 'Menengah',
    price: { amount: 2000000, currency: 'IDR', isFree: false },
    rating: 4.7
  }
];

// Roadmap lengkap untuk Data Scientist
export const comprehensiveDataScientistRoadmap: Roadmap = {
  id: 'comprehensive-data-scientist-roadmap',
  jobId: 'data-scientist',
  totalDuration: '12-18 bulan',
  difficulty: 'Lanjutan',
  phases: [
    {
      id: 'ds-phase-1-foundations',
      title: 'Mathematics & Statistics Foundations',
      description: 'Membangun fondasi matematis yang kuat untuk data science',
      duration: '3-4 bulan',
      order: 1,
      skills: [
        dataScientistHardSkills.find(s => s.id === 'ds-statistics-inferential')!,
        dataScientistHardSkills.find(s => s.id === 'ds-probability-theory')!,
        dataScientistHardSkills.find(s => s.id === 'ds-linear-algebra')!,
        dataScientistSoftSkills.find(s => s.id === 'ds-analytical-thinking')!
      ],
      materials: [
        dataScientistLearningMaterials.find(m => m.id === 'khan-academy-statistics')!,
        dataScientistLearningMaterials.find(m => m.id === 'mathematics-for-ml')!
      ],
      prerequisites: []
    },
    {
      id: 'ds-phase-2-programming',
      title: 'Programming & Data Manipulation',
      description: 'Menguasai Python dan SQL untuk data analysis',
      duration: '2-3 bulan',
      order: 2,
      skills: [
        dataScientistHardSkills.find(s => s.id === 'ds-python-advanced')!,
        dataScientistHardSkills.find(s => s.id === 'ds-sql-advanced')!,
        dataScientistHardSkills.find(s => s.id === 'ds-data-cleaning')!,
        dataScientistSoftSkills.find(s => s.id === 'ds-attention-to-detail')!
      ],
      materials: [
        dataScientistLearningMaterials.find(m => m.id === 'python-for-data-science')!,
        dataScientistLearningMaterials.find(m => m.id === 'sql-for-data-science')!
      ],
      prerequisites: ['ds-phase-1-foundations']
    },
    {
      id: 'ds-phase-3-analysis',
      title: 'Exploratory Data Analysis & Visualization',
      description: 'Teknik analisis data dan storytelling dengan visualisasi',
      duration: '2-3 bulan',
      order: 3,
      skills: [
        dataScientistHardSkills.find(s => s.id === 'ds-exploratory-data-analysis')!,
        dataScientistHardSkills.find(s => s.id === 'ds-data-visualization')!,
        dataScientistHardSkills.find(s => s.id === 'ds-ab-testing')!,
        dataScientistSoftSkills.find(s => s.id === 'ds-data-storytelling')!
      ],
      materials: [
        dataScientistLearningMaterials.find(m => m.id === 'tableau-fundamentals')!,
        dataScientistLearningMaterials.find(m => m.id === 'data-storytelling-course')!
      ],
      prerequisites: ['ds-phase-2-programming']
    },
    {
      id: 'ds-phase-4-machine-learning',
      title: 'Machine Learning & Model Building',
      description: 'Supervised dan unsupervised learning algorithms',
      duration: '3-4 bulan',
      order: 4,
      skills: [
        dataScientistHardSkills.find(s => s.id === 'ds-supervised-learning')!,
        dataScientistHardSkills.find(s => s.id === 'ds-unsupervised-learning')!,
        dataScientistHardSkills.find(s => s.id === 'ds-feature-engineering')!,
        dataScientistHardSkills.find(s => s.id === 'ds-model-evaluation')!,
        dataScientistSoftSkills.find(s => s.id === 'ds-critical-thinking')!
      ],
      materials: [
        dataScientistLearningMaterials.find(m => m.id === 'andrew-ng-ml-course')!,
        dataScientistLearningMaterials.find(m => m.id === 'scikit-learn-tutorial')!
      ],
      prerequisites: ['ds-phase-3-analysis']
    },
    {
      id: 'ds-phase-5-business-application',
      title: 'Business Application & Communication',
      description: 'Mengaplikasikan data science untuk business problems',
      duration: '2-4 bulan',
      order: 5,
      skills: [
        dataScientistHardSkills.find(s => s.id === 'ds-business-intelligence')!,
        dataScientistHardSkills.find(s => s.id === 'ds-model-deployment')!,
        dataScientistSoftSkills.find(s => s.id === 'ds-business-acumen')!,
        dataScientistSoftSkills.find(s => s.id === 'ds-technical-communication')!,
        dataScientistSoftSkills.find(s => s.id === 'ds-stakeholder-management')!
      ],
      materials: [],
      prerequisites: ['ds-phase-4-machine-learning']
    }
  ]
};

// Summary statistik untuk dashboard
export const dataScientistSkillsSummary = {
  totalSkills: allDataScientistSkills.length,
  hardSkills: dataScientistHardSkills.length,
  softSkills: dataScientistSoftSkills.length,
  averageTimeToLearnHard: '4-6 bulan',
  averageTimeToLearnSoft: '6-8 bulan',
  mostImportantHardSkills: dataScientistHardSkills
    .filter(skill => skill.importance >= 9)
    .map(skill => skill.name),
  mostImportantSoftSkills: dataScientistSoftSkills
    .filter(skill => skill.importance >= 9)
    .map(skill => skill.name),
  skillsByCategory: {
    'Data & Analytics': dataScientistHardSkills.filter(s => s.category === 'Data & Analytics').length,
    'Programming & Development': dataScientistHardSkills.filter(s => s.category === 'Programming & Development').length,
    'AI & Machine Learning': dataScientistHardSkills.filter(s => s.category === 'AI & Machine Learning').length,
    'Communication': dataScientistSoftSkills.filter(s => s.category === 'Communication').length,
    'Problem Solving': dataScientistSoftSkills.filter(s => s.category === 'Problem Solving').length,
    'Business Skills': allDataScientistSkills.filter(s => s.category === 'Business Skills').length
  }
};

export default {
  hardSkills: dataScientistHardSkills,
  softSkills: dataScientistSoftSkills,
  allSkills: allDataScientistSkills,
  learningMaterials: dataScientistLearningMaterials,
  roadmap: comprehensiveDataScientistRoadmap,
  summary: dataScientistSkillsSummary
};