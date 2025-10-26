import { Skill, LearningMaterial, Roadmap, RoadmapPhase } from './skillForecastingTypes';

// =============================================
// DATA SCIENTIST SKILLS BREAKDOWN
// Revisi & Improvisasi Roadmap Data Scientist
// Berdasarkan Klasifikasi Hard Skill vs Soft Skill
// =============================================

// HARD SKILLS untuk Data Scientist
export const dataScientistHardSkills: Skill[] = [
  // 1. MATHEMATICS & STATISTICS
  {
    id: 'ds-statistics-applied',
    name: 'Statistika Terapan & Probabilitas',
    type: 'hard',
    category: 'Data & Analytics',
    description: 'Statistika deskriptif vs inferensial, teori probabilitas & distribusi, uji hipotesis (A/B Testing), regresi & korelasi untuk analisis data dan pemodelan prediktif',
    importance: 9,
    learnability: 'Sedang',
    timeToLearn: '4-6 minggu'
  },
  {
    id: 'ds-python-data-science',
    name: 'Python untuk Analisis Data',
    type: 'hard',
    category: 'Programming & Development',
    description: 'Struktur data Pandas, data wrangling/munging, operasi join & merge, otomatisasi dengan fungsi untuk manipulasi dan analisis data',
    importance: 10,
    learnability: 'Sedang',
    timeToLearn: '4 minggu'
  },
  {
    id: 'ds-sql-advanced',
    name: 'SQL (Advanced)',
    type: 'hard',
    category: 'Data & Analytics',
    description: 'Advanced JOINs, subqueries & CTEs, window functions, agregasi & grouping untuk query data skala besar',
    importance: 10,
    learnability: 'Sedang',
    timeToLearn: '3 minggu'
  },
  {
    id: 'ds-data-visualization',
    name: 'Visualisasi & Penceritaan Data (Storytelling)',
    type: 'hard',
    category: 'Design & UX',
    description: 'Memilih visualisasi yang tepat, prinsip desain visual, struktur narasi data, dashboard interaktif untuk komunikasi wawasan bisnis',
    importance: 9,
    learnability: 'Sedang',
    timeToLearn: '3 minggu'
  },
  {
    id: 'ds-supervised-learning',
    name: 'Supervised Learning',
    type: 'hard',
    category: 'AI & Machine Learning',
    description: 'Klasifikasi vs regresi, proses training-validation-test, metrik evaluasi, overfitting & underfitting untuk model prediktif',
    importance: 10,
    learnability: 'Sulit',
    timeToLearn: '4 minggu'
  },
  {
    id: 'ds-unsupervised-learning',
    name: 'Unsupervised Learning',
    type: 'hard',
    category: 'AI & Machine Learning',
    description: 'Clustering (pengelompokan), algoritma K-Means, dimensionality reduction (PCA), association rule mining untuk pola data tersembunyi',
    importance: 7,
    learnability: 'Sulit',
    timeToLearn: '2 minggu'
  },
  {
    id: 'ds-big-data-processing',
    name: 'Big Data Processing',
    type: 'hard',
    category: 'Technical Skills',
    description: 'Tiga V (Volume, Velocity, Variety), pemrosesan terdistribusi, ekosistem Hadoop & Spark, querying data di skala besar',
    importance: 7,
    learnability: 'Sulit',
    timeToLearn: '3 minggu'
  },
  {
    id: 'ds-cloud-computing',
    name: 'Cloud Computing',
    type: 'hard',
    category: 'Technical Skills',
    description: 'IaaS, PaaS, SaaS, penyimpanan cloud (Object Storage), komputasi sesuai permintaan, managed AI/ML services',
    importance: 8,
    learnability: 'Sedang',
    timeToLearn: '2 minggu'
  },
  {
    id: 'ds-deep-learning',
    name: 'Deep Learning',
    type: 'hard',
    category: 'AI & Machine Learning',
    description: 'Artificial Neural Networks (ANN), Convolutional Neural Networks (CNN), Recurrent Neural Networks (RNN) & Transformers, transfer learning',
    importance: 8,
    learnability: 'Sulit',
    timeToLearn: '4 minggu'
  },
  {
    id: 'ds-mlops',
    name: 'MLOps (Machine Learning Operations)',
    type: 'hard',
    category: 'AI & Machine Learning',
    description: 'Siklus hidup ML, deployment model, version control untuk data & model, pemantauan & retraining untuk operationalisasi model',
    importance: 7,
    learnability: 'Sulit',
    timeToLearn: '3 minggu'
  },
  {
    id: 'ds-business-intelligence',
    name: 'Business Acumen',
    type: 'hard',
    category: 'Business Skills',
    description: 'Menerjemahkan masalah bisnis ke masalah data, fokus pada ROI, pemahaman metrik bisnis kunci, pengetahuan domain industri',
    importance: 9,
    learnability: 'Sedang',
    timeToLearn: 'Berkelanjutan'
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
    description: 'Dekomposisi masalah, identifikasi pola, berpikir kritis, inferensi logis untuk memecahkan masalah bisnis dengan data',
    importance: 10,
    learnability: 'Sedang',
    timeToLearn: 'Berkelanjutan'
  },

  // 2. COMMUNICATION & COLLABORATION
  {
    id: 'ds-data-storytelling',
    name: 'Data Storytelling',
    type: 'soft',
    category: 'Communication',
    description: 'Struktur narasi data, komunikasi untuk audiens non-teknis, mengelola ekspektasi, empati terhadap pemangku kepentingan, mempengaruhi keputusan dengan data',
    importance: 10,
    learnability: 'Sedang',
    timeToLearn: 'Berkelanjutan'
  },

  // 3. BUSINESS ACUMEN
  {
    id: 'ds-business-acumen',
    name: 'Business Acumen',
    type: 'soft',
    category: 'Business Skills',
    description: 'Menerjemahkan masalah bisnis ke masalah data, fokus pada ROI, pemahaman metrik bisnis kunci, pengetahuan domain untuk wawasan relevan',
    importance: 9,
    learnability: 'Sedang',
    timeToLearn: 'Berkelanjutan'
  },

  // 4. ADAPTABILITY & LEARNING
  {
    id: 'ds-intellectual-curiosity',
    name: 'Intellectual Curiosity',
    type: 'soft',
    category: 'Soft Skills',
    description: 'Dorongan untuk mengeksplorasi data dan menemukan patterns tersembunyi dalam analisis',
    importance: 9,
    learnability: 'Mudah',
    timeToLearn: '1-3 bulan'
  },
  {
    id: 'ds-continuous-learning',
    name: 'Continuous Learning',
    type: 'soft',
    category: 'Soft Skills',
    description: 'Kemampuan terus mengikuti perkembangan tools dan techniques terbaru dalam data science',
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
    description: 'Mengelola data science projects dari conception hingga delivery dengan efektif',
    importance: 7,
    learnability: 'Sedang',
    timeToLearn: '3-6 bulan'
  },
  {
    id: 'ds-attention-to-detail',
    name: 'Attention to Detail',
    type: 'soft',
    category: 'Soft Skills',
    description: 'Ketelitian dalam data analysis dan model validation untuk memastikan accuracy',
    importance: 9,
    learnability: 'Mudah',
    timeToLearn: '2-4 bulan'
  },
  {
    id: 'ds-time-management',
    name: 'Time Management',
    type: 'soft',
    category: 'Soft Skills',
    description: 'Prioritizing tasks dan managing multiple projects dengan deadline yang ketat',
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
    description: 'Mempertimbangkan implikasi etika dalam penggunaan data dan AI untuk keputusan yang bertanggung jawab',
    importance: 8,
    learnability: 'Sedang',
    timeToLearn: '4-8 bulan'
  },
  {
    id: 'ds-data-privacy-awareness',
    name: 'Data Privacy Awareness',
    type: 'soft',
    category: 'Business Skills',
    description: 'Pemahaman tentang privacy regulations dan responsible data usage dalam praktik data science',
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
    price: { amount: 450000, currency: 'IDR', isFree: false },
    rating: 4.5
  },

  // BIG DATA & CLOUD
  {
    id: 'apache-spark-guide',
    title: 'Learning Spark',
    type: 'book',
    provider: 'O\'Reilly',
    description: 'Panduan komprehensif untuk Apache Spark dan big data processing',
    duration: '4-6 minggu',
    difficulty: 'Menengah',
    price: { amount: 500000, currency: 'IDR', isFree: false },
    rating: 4.6
  },
  {
    id: 'aws-big-data-specialty',
    title: 'AWS Certified Data Analytics - Specialty',
    type: 'certification',
    provider: 'AWS',
    description: 'Sertifikasi untuk profesional big data di AWS',
    duration: '3-4 bulan',
    difficulty: 'Lanjutan',
    price: { amount: 300, currency: 'USD', isFree: false },
    rating: 4.7
  },

  // DEEP LEARNING
  {
    id: 'deep-learning-specialization',
    title: 'Deep Learning Specialization',
    type: 'course',
    provider: 'deeplearning.ai',
    description: 'Kursus komprehensif tentang deep learning oleh Andrew Ng',
    duration: '4 bulan',
    difficulty: 'Lanjutan',
    price: { amount: 2000000, currency: 'IDR', isFree: false },
    rating: 4.8
  },
  {
    id: 'nlp-with-transformers',
    title: 'Natural Language Processing with Transformers',
    type: 'book',
    provider: 'O\'Reilly',
    description: 'Panduan praktis untuk NLP dengan arsitektur transformer',
    duration: '6-8 minggu',
    difficulty: 'Lanjutan',
    price: { amount: 650000, currency: 'IDR', isFree: false },
    rating: 4.7
  },

  // BUSINESS APPLICATION
  {
    id: 'data-science-for-business',
    title: 'Data Science for Business',
    type: 'book',
    provider: 'O\'Reilly',
    description: 'Memahami bagaimana menerapkan data science dalam konteks bisnis',
    duration: '4-6 minggu',
    difficulty: 'Menengah',
    price: { amount: 450000, currency: 'IDR', isFree: false },
    rating: 4.5
  },
  {
    id: 'mlops-fundamentals',
    title: 'MLOps Fundamentals',
    type: 'course',
    provider: 'Coursera',
    description: 'Mempelajari praktik terbaik untuk mengoperasionalkan model ML',
    duration: '1 bulan',
    difficulty: 'Menengah',
    price: { amount: 0, currency: 'IDR', isFree: true },
    rating: 4.6
  }
];

// Roadmap lengkap untuk Data Scientist
export const comprehensiveDataScientistRoadmap: Roadmap = {
  id: 'data-scientist-roadmap',
  jobId: 'data-scientist',
  totalDuration: '18-24 bulan',
  difficulty: 'Lanjutan',
  phases: [
    {
      id: 'ds-phase-1-foundations',
      title: 'Fondasi Kuantitatif & Analitis',
      description: 'Membangun fondasi matematis dan pola pikir analitis yang kokoh, yang merupakan tulang punggung dari setiap keputusan berbasis data.',
      duration: '4-6 minggu',
      order: 1,
      skills: [
        dataScientistHardSkills.find(s => s.id === 'ds-statistics-applied')!,
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
      title: 'Pemrograman & Manipulasi Data',
      description: 'Menguasai alat fundamental—Python dan SQL—untuk mengambil, membersihkan, dan mengubah data mentah menjadi format yang siap dianalisis.',
      duration: '4-7 minggu',
      order: 2,
      skills: [
        dataScientistHardSkills.find(s => s.id === 'ds-python-data-science')!,
        dataScientistHardSkills.find(s => s.id === 'ds-sql-advanced')!,
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
      title: 'Analisis Eksploratif & Komunikasi Wawasan',
      description: 'Mengubah data yang telah dibersihkan menjadi wawasan yang dapat dipahami dan mengkomunikasikannya secara efektif melalui visualisasi dan narasi.',
      duration: '3-5 minggu',
      order: 3,
      skills: [
        dataScientistHardSkills.find(s => s.id === 'ds-data-visualization')!,
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
      title: 'Dasar-Dasar Machine Learning',
      description: 'Masuk ke inti ilmu data dengan membangun dan mengevaluasi model prediktif untuk memecahkan masalah klasifikasi dan regresi.',
      duration: '4-6 minggu',
      order: 4,
      skills: [
        dataScientistHardSkills.find(s => s.id === 'ds-supervised-learning')!,
        dataScientistHardSkills.find(s => s.id === 'ds-unsupervised-learning')!,
        dataScientistSoftSkills.find(s => s.id === 'ds-critical-thinking')!
      ],
      materials: [
        dataScientistLearningMaterials.find(m => m.id === 'andrew-ng-ml-course')!,
        dataScientistLearningMaterials.find(m => m.id === 'scikit-learn-tutorial')!
      ],
      prerequisites: ['ds-phase-3-analysis']
    },
    {
      id: 'ds-phase-5-big-data',
      title: 'Big Data & Teknologi Cloud',
      description: 'Meningkatkan skala kemampuan Anda dengan belajar mengolah data yang terlalu besar untuk satu mesin menggunakan alat Big Data dan platform cloud.',
      duration: '3-5 minggu',
      order: 5,
      skills: [
        dataScientistHardSkills.find(s => s.id === 'ds-big-data-processing')!,
        dataScientistHardSkills.find(s => s.id === 'ds-cloud-computing')!
      ],
      materials: [
        dataScientistLearningMaterials.find(m => m.id === 'aws-big-data-specialty')!,
        dataScientistLearningMaterials.find(m => m.id === 'apache-spark-guide')!
      ],
      prerequisites: ['ds-phase-4-machine-learning']
    },
    {
      id: 'ds-phase-6-advanced-ml',
      title: 'Machine Learning Lanjutan & AI',
      description: 'Menyelami teknik-teknik canggih yang menjadi ujung tombak inovasi AI saat ini, dari Deep Learning hingga praktik operasionalisasi model.',
      duration: '4-7 minggu',
      order: 6,
      skills: [
        dataScientistHardSkills.find(s => s.id === 'ds-deep-learning')!,
        dataScientistHardSkills.find(s => s.id === 'ds-mlops')!
      ],
      materials: [
        dataScientistLearningMaterials.find(m => m.id === 'deep-learning-specialization')!,
        dataScientistLearningMaterials.find(m => m.id === 'nlp-with-transformers')!
      ],
      prerequisites: ['ds-phase-5-big-data']
    },
    {
      id: 'ds-phase-7-business-application',
      title: 'Aplikasi Bisnis & Komunikasi',
      description: 'Menjembatani kesenjangan antara analisis teknis dan dampak bisnis nyata dengan mengasah ketajaman bisnis dan kemampuan mempengaruhi pemangku kepentingan.',
      duration: '3-5 minggu',
      order: 7,
      skills: [
        dataScientistHardSkills.find(s => s.id === 'ds-business-intelligence')!,
        dataScientistSoftSkills.find(s => s.id === 'ds-business-acumen')!,
        dataScientistSoftSkills.find(s => s.id === 'ds-stakeholder-management')!
      ],
      materials: [
        dataScientistLearningMaterials.find(m => m.id === 'data-science-for-business')!,
        dataScientistLearningMaterials.find(m => m.id === 'mlops-fundamentals')!
      ],
      prerequisites: ['ds-phase-6-advanced-ml']
    }
  ]
};

// Summary statistik untuk dashboard
export const dataScientistSkillsSummary = {
  totalSkills: allDataScientistSkills.length,
  hardSkills: dataScientistHardSkills.length,
  softSkills: dataScientistSoftSkills.length,
  averageTimeToLearnHard: '3-6 minggu',
  averageTimeToLearnSoft: '6-12 bulan',
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
    'Technical Skills': dataScientistHardSkills.filter(s => s.category === 'Technical Skills').length,
    'Design & UX': dataScientistHardSkills.filter(s => s.category === 'Design & UX').length,
    'Business Skills': dataScientistHardSkills.filter(s => s.category === 'Business Skills').length,
    'Problem Solving': dataScientistSoftSkills.filter(s => s.category === 'Problem Solving').length,
    'Communication': dataScientistSoftSkills.filter(s => s.category === 'Communication').length,
    'Soft Skills': dataScientistSoftSkills.filter(s => s.category === 'Soft Skills').length,
    'Leadership & Management': dataScientistSoftSkills.filter(s => s.category === 'Leadership & Management').length
  }
};

// Detailed Skills Breakdown dengan Konsep Inti, Jalur Penguasaan, dan Proyek Portofolio
export const dataScientistDetailedBreakdown = {
  // Fase 1: Fondasi Kuantitatif & Analitis
  'ds-statistics-applied': {
    konsepInti: [
      'Statistika Deskriptif vs. Inferensial: Deskriptif merangkum data yang ada (mean, median), sementara Inferensial menggunakan sampel untuk membuat kesimpulan tentang populasi yang lebih besar (uji hipotesis).',
      'Teori Probabilitas & Distribusi: Memahami kemungkinan terjadinya suatu peristiwa dan bagaimana data tersebar (misalnya, Distribusi Normal), yang menjadi dasar pemodelan prediktif.',
      'Uji Hipotesis (A/B Testing): Kerangka kerja formal untuk menguji apakah suatu hipotesis (misalnya, "desain baru meningkatkan konversi") benar secara statistik, bukan karena kebetulan semata.',
      'Regresi & Korelasi: Memahami dan mengukur kekuatan hubungan antara dua variabel atau lebih (korelasi) serta memodelkan hubungan tersebut untuk prediksi (regresi).'
    ],
    jalurPenguasaan: {
      pemula: [
        'Hitung ukuran tendensi sentral (mean, median, modus) dan sebaran (standar deviasi, rentang) menggunakan Python/Excel.',
        'Pahami konsep dasar probabilitas, seperti probabilitas bersyarat dan Teorema Bayes.'
      ],
      menengah: [
        'Terapkan uji hipotesis (uji-t) pada dataset nyata untuk membandingkan dua kelompok, misalnya, efektivitas dua kampanye iklan yang berbeda.',
        'Bangun model regresi linear sederhana untuk memprediksi suatu nilai dan interpretasikan koefisien serta nilai R-squared.'
      ],
      mahir: [
        'Rancang dan analisis eksperimen A/B testing dari awal hingga akhir, termasuk penentuan ukuran sampel dan analisis power.',
        'Gunakan teknik statistik non-parametrik ketika asumsi distribusi data normal tidak terpenuhi.'
      ]
    },
    proyekPortofolio: [
      {
        id: 'ab-testing-significance',
        title: 'Analisis Signifikansi Statistik pada A/B Test Website',
        description: 'Diberikan dataset hasil A/B test perubahan warna tombol di situs e-commerce, gunakan uji-t untuk menentukan apakah perubahan desain tersebut memiliki dampak yang signifikan secara statistik terhadap tingkat konversi. Tulis laporan singkat yang menjelaskan hasilnya untuk manajer produk.',
        difficulty: 'Pemula',
        duration: '1-2 minggu',
        technologies: ['Python', 'Pandas', 'SciPy', 'Matplotlib'],
        deliverables: ['Laporan analisis statistik', 'Visualisasi hasil', 'Rekomendasi bisnis']
      },
      {
        id: 'property-correlation-analysis',
        title: 'Analisis Korelasi Harga Properti',
        description: 'Gunakan dataset properti untuk menganalisis korelasi antara berbagai fitur (luas bangunan, jumlah kamar tidur, jarak ke pusat kota) dan harga jual. Buat visualisasi scatter plot untuk menunjukkan hubungan yang paling kuat dan jelaskan temuan Anda.',
        difficulty: 'Pemula',
        duration: '1-2 minggu',
        technologies: ['Python', 'Pandas', 'Seaborn', 'Matplotlib'],
        deliverables: ['Analisis korelasi', 'Visualisasi data', 'Laporan insights']
      }
    ]
  },
  'ds-analytical-thinking': {
    konsepInti: [
      'Dekomposisi Masalah: Kemampuan memecah masalah bisnis yang besar dan ambigu menjadi pertanyaan-pertanyaan yang lebih kecil dan dapat diuji dengan data.',
      'Identifikasi Pola: Melihat melampaui angka mentah untuk mengenali tren, anomali, atau hubungan tersembunyi di dalam data yang tidak terlihat secara kasat mata.',
      'Berpikir Kritis: Mengevaluasi validitas data dan asumsi secara kritis, serta mempertanyakan hasil analisis untuk menghindari kesimpulan yang salah atau bias.',
      'Inferensi Logis: Menarik kesimpulan yang beralasan dan dapat dipertahankan dari bukti data yang ada, serta mengkomunikasikan keterbatasan dari kesimpulan tersebut.'
    ],
    jalurPenguasaan: {
      pemula: [
        'Ambil sebuah masalah (misalnya, "Mengapa penjualan turun bulan lalu?") dan tuliskan 5 pertanyaan spesifik yang dapat dijawab dengan data.',
        'Latih kemampuan observasi dengan melihat sebuah visualisasi data dan menuliskan tiga wawasan utama yang Anda temukan.'
      ],
      menengah: [
        'Diberikan sebuah dataset, identifikasi potensi bias (misalnya, bias seleksi, data yang tidak lengkap) yang dapat memengaruhi analisis.',
        'Lakukan analisis akar masalah (root cause analysis) sederhana menggunakan kerangka 5 Whys pada sebuah masalah bisnis.'
      ],
      mahir: [
        'Evaluasi sebuah studi kasus analisis data dan identifikasi kekuatan serta kelemahan metodologinya.',
        'Kembangkan beberapa hipotesis alternatif untuk menjelaskan sebuah fenomena dalam data dan rancang cara untuk mengujinya.'
      ]
    },
    proyekPortofolio: [
      {
        id: 'user-engagement-analysis',
        title: 'Analisis Penurunan Keterlibatan Pengguna',
        description: 'Anda adalah seorang analis di sebuah aplikasi media sosial yang melihat penurunan waktu rata-rata pengguna sebesar 15%. Dekomposisi masalah ini menjadi beberapa hipotesis (misalnya, bug teknis, pembaruan UI yang buruk, kampanye kompetitor). Buatlah rencana analisis untuk memvalidasi setiap hipotesis.',
        difficulty: 'Menengah',
        duration: '1-2 minggu',
        technologies: ['Analytical Thinking', 'Problem Decomposition', 'Hypothesis Testing'],
        deliverables: ['Problem decomposition', 'Analysis plan', 'Hypothesis validation framework']
      },
      {
        id: 'critical-news-analysis',
        title: 'Studi Kasus Kritis dari Berita',
        description: 'Cari sebuah artikel berita yang menggunakan data untuk mendukung klaimnya. Lakukan analisis kritis terhadap visualisasi dan interpretasi data yang disajikan. Tulis sebuah ulasan singkat yang menyoroti apakah kesimpulan yang ditarik valid dan apa saja potensi bias yang mungkin ada.',
        difficulty: 'Menengah',
        duration: '1-2 minggu',
        technologies: ['Critical Analysis', 'Bias Detection', 'Data Interpretation'],
        deliverables: ['Critical review', 'Bias analysis', 'Validity assessment']
      }
    ]
  },

  // Fase 2: Pemrograman & Manipulasi Data
  'ds-python-data-science': {
    konsepInti: [
      'Struktur Data Pandas: Menguasai DataFrame sebagai struktur data utama untuk data tabular, memungkinkan operasi pemfilteran, pengurutan, dan agregasi yang efisien.',
      'Data Wrangling/Munging: Proses membersihkan dan mengubah data mentah yang tidak terstruktur atau berantakan menjadi format yang bersih dan terorganisir untuk analisis.',
      'Operasi Join & Merge: Menggabungkan beberapa dataset menjadi satu berdasarkan kolom atau kunci yang sama, sebuah tugas fundamental dalam analisis data dunia nyata.',
      'Otomatisasi dengan Fungsi: Menulis fungsi kustom untuk melakukan tugas-tugas yang berulang, membuat alur kerja analisis Anda menjadi efisien, dapat direproduksi, dan bebas dari kesalahan.'
    ],
    jalurPenguasaan: {
      pemula: [
        'Lakukan operasi dasar pada DataFrame Pandas: memilih kolom, memfilter baris berdasarkan kondisi, dan menangani nilai yang hilang (dropna, fillna).',
        'Impor data dari file CSV dan ekspor hasilnya kembali ke file CSV baru setelah pembersihan.'
      ],
      menengah: [
        'Lakukan agregasi data menggunakan groupby() untuk menghitung statistik ringkasan (misalnya, total penjualan per kategori produk).',
        'Gabungkan dua DataFrame yang berbeda menggunakan fungsi merge() atau join().'
      ],
      mahir: [
        'Terapkan fungsi kustom pada kolom DataFrame menggunakan metode .apply().',
        'Lakukan operasi time series dasar, seperti resampling data harian menjadi data mingguan atau bulanan.'
      ]
    },
    proyekPortofolio: [
      {
        id: 'ecommerce-data-cleaning',
        title: 'Analisis dan Pembersihan Data Transaksi E-commerce',
        description: 'Gunakan Pandas untuk membersihkan dataset transaksi yang berisi data duplikat, nilai yang hilang, dan format yang tidak konsisten. Setelah pembersihan, hitung metrik bisnis utama seperti total pendapatan, jumlah pelanggan unik, dan produk terlaris.',
        difficulty: 'Pemula',
        duration: '1-2 minggu',
        technologies: ['Python', 'Pandas', 'NumPy'],
        deliverables: ['Dataset bersih', 'Laporan metrik bisnis', 'Kode pembersihan data']
      },
      {
        id: 'weather-data-analysis',
        title: 'Analisis Data Cuaca Historis',
        description: 'Ambil dataset cuaca historis dan gunakan Pandas untuk menjawab pertanyaan seperti "Bulan apa yang rata-rata paling panas?" dan "Berapa jumlah hari hujan dalam setahun?". Lakukan operasi groupby dan agregasi untuk menemukan jawabannya.',
        difficulty: 'Pemula',
        duration: '1-2 minggu',
        technologies: ['Python', 'Pandas', 'Matplotlib'],
        deliverables: ['Analisis statistik cuaca', 'Visualisasi tren', 'Dashboard sederhana']
      }
    ]
  },
  'ds-sql-advanced': {
    konsepInti: [
      'Advanced JOINs: Menguasai berbagai jenis JOIN (INNER, LEFT, RIGHT, FULL OUTER) untuk menggabungkan data dari beberapa tabel secara akurat.',
      'Subqueries & CTEs (Common Table Expressions): Menggunakan subquery atau CTE untuk memecah kueri yang kompleks menjadi langkah-langkah logis yang lebih kecil dan mudah dibaca, meningkatkan keterbacaan dan pemeliharaan kode.',
      'Window Functions: Melakukan perhitungan pada sekelompok baris yang terkait dengan baris saat ini (misalnya, menghitung rata-rata bergerak atau peringkat) tanpa harus mengagregasi seluruh dataset.',
      'Agregasi & Grouping: Menggunakan fungsi agregat (COUNT, SUM, AVG) dengan klausa GROUP BY dan HAVING untuk merangkum data dan menjawab pertanyaan bisnis yang kompleks.'
    ],
    jalurPenguasaan: {
      pemula: [
        'Tulis kueri SELECT dengan klausa WHERE, GROUP BY, dan ORDER BY pada satu tabel.',
        'Lakukan INNER JOIN dan LEFT JOIN sederhana untuk menggabungkan dua tabel.'
      ],
      menengah: [
        'Tulis kueri yang menggunakan subquery di dalam klausa WHERE atau FROM.',
        'Gunakan CTE (WITH clause) untuk menyederhanakan kueri yang melibatkan beberapa langkah logis.'
      ],
      mahir: [
        'Terapkan window functions seperti ROW_NUMBER(), RANK(), LEAD(), dan LAG() untuk melakukan analisis peringkat dan perbandingan antar baris.',
        'Lakukan optimisasi kueri sederhana dengan memastikan penggunaan indeks yang tepat pada tabel besar.'
      ]
    },
    proyekPortofolio: [
      {
        id: 'music-platform-analysis',
        title: 'Analisis Perilaku Pengguna di Platform Musik',
        description: 'Dengan menggunakan database skema bintang (tabel fakta dan dimensi), tulis kueri SQL untuk menemukan 10 artis yang paling sering didengarkan dan identifikasi pengguna yang paling aktif berdasarkan jumlah lagu yang diputar dalam sebulan terakhir.',
        difficulty: 'Menengah',
        duration: '2-3 minggu',
        technologies: ['SQL', 'Database Design', 'Query Optimization'],
        deliverables: ['Complex SQL queries', 'User behavior analysis', 'Performance insights']
      },
      {
        id: 'monthly-revenue-growth',
        title: 'Menghitung Pertumbuhan Pendapatan Bulanan',
        description: 'Gunakan dataset transaksi untuk menulis kueri SQL dengan CTE dan window functions untuk menghitung pertumbuhan pendapatan dari bulan ke bulan (Month-over-Month growth). Visualisasikan hasilnya untuk menunjukkan tren pertumbuhan bisnis.',
        difficulty: 'Menengah',
        duration: '2-3 minggu',
        technologies: ['SQL', 'Window Functions', 'Business Intelligence'],
        deliverables: ['Growth analysis queries', 'Trend visualization', 'Business insights']
      }
    ]
  },

  // Fase 3: Analisis Eksploratif & Komunikasi Wawasan
  'ds-data-visualization': {
    konsepInti: [
      'Memilih Visualisasi yang Tepat: Mengetahui kapan harus menggunakan grafik batang (perbandingan), grafik garis (tren waktu), diagram sebar (hubungan), atau peta panas (kepadatan) untuk menjawab pertanyaan spesifik.',
      'Prinsip Desain Visual: Menerapkan prinsip-prinsip seperti memaksimalkan data-ink ratio dan mengurangi chart junk untuk menciptakan visualisasi yang bersih, efektif, dan tidak menyesatkan.',
      'Struktur Narasi Data: Membangun cerita yang memiliki awal (konteks masalah), tengah (analisis dan temuan), dan akhir (kesimpulan dan rekomendasi yang dapat ditindaklanjuti).',
      'Dashboard Interaktif: Menggunakan alat seperti Tableau atau Power BI untuk membuat dasbor yang memungkinkan pemangku kepentingan menjelajahi data sendiri dan menjawab pertanyaan mereka sendiri.'
    ],
    jalurPenguasaan: {
      pemula: [
        'Buat grafik statis yang jelas dan berlabel baik (diagram batang, garis, sebar) menggunakan Matplotlib & Seaborn di Python.',
        'Terapkan prinsip dasar desain dengan memilih judul yang informatif dan menggunakan warna untuk menyoroti wawasan penting.'
      ],
      menengah: [
        'Bangun sebuah dashboard interaktif sederhana di Tableau Public atau Power BI yang terdiri dari 2-3 visualisasi yang saling terhubung.',
        'Buat presentasi singkat (3 slide) yang menggunakan visualisasi untuk menceritakan sebuah wawasan dari dataset.'
      ],
      mahir: [
        'Rancang sebuah "data story" yang lengkap, dari identifikasi masalah bisnis hingga presentasi akhir yang meyakinkan dengan rekomendasi yang kuat.',
        'Buat visualisasi yang lebih canggih seperti treemap atau peta geografis (choropleth map) untuk menampilkan data multidimensi.'
      ]
    },
    proyekPortofolio: [
      {
        id: 'global-sales-dashboard',
        title: 'Dashboard Penjualan E-commerce Global',
        description: 'Gunakan dataset penjualan global untuk membuat dashboard interaktif di Tableau Public. Dashboard harus menampilkan total penjualan berdasarkan negara (peta), tren penjualan dari waktu ke waktu (grafik garis), dan performa kategori produk (grafik batang).',
        difficulty: 'Menengah',
        duration: '2-3 minggu',
        technologies: ['Tableau Public', 'Excel', 'Data Visualization'],
        deliverables: ['Dashboard interaktif', 'Laporan insights', 'Presentasi findings']
      },
      {
        id: 'movie-success-factors',
        title: 'Presentasi "Storytelling" tentang Faktor Kesuksesan Film',
        description: 'Analisis dataset film (misalnya, dari IMDb) dan buat presentasi naratif 5 slide yang menjawab pertanyaan: "Apa faktor yang paling berkorelasi dengan rating film yang tinggi?". Gunakan visualisasi untuk mendukung argumen Anda (misalnya, hubungan antara anggaran dan rating).',
        difficulty: 'Menengah',
        duration: '2-3 minggu',
        technologies: ['Python', 'Pandas', 'Matplotlib', 'PowerPoint'],
        deliverables: ['Presentasi data storytelling', 'Analisis faktor kesuksesan', 'Rekomendasi strategi']
      }
    ]
  },

  // Fase 4: Dasar-Dasar Machine Learning
  'ds-supervised-learning': {
    konsepInti: [
      'Klasifikasi vs. Regresi: Klasifikasi memprediksi label kategori (misalnya, "kucing" atau "anjing"), sementara regresi memprediksi nilai numerik kontinu (misalnya, harga rumah).',
      'Proses Training-Validation-Test: Membagi data menjadi tiga set: untuk melatih model (training), untuk menyetel parameter model (validation), dan untuk menguji performa akhir pada data yang benar-benar baru (test).',
      'Metrik Evaluasi: Memilih metrik yang tepat untuk mengevaluasi model, seperti Akurasi dan F1-Score untuk klasifikasi, atau Mean Absolute Error (MAE) dan R-squared untuk regresi.',
      'Overfitting & Underfitting: Memahami masalah umum di mana model terlalu menghafal data training (overfitting) atau terlalu sederhana untuk menangkap pola (underfitting), dan cara mengatasinya.'
    ],
    jalurPenguasaan: {
      pemula: [
        'Latih model regresi linear dan regresi logistik sederhana menggunakan scikit-learn.',
        'Pahami dan hitung metrik evaluasi dasar seperti akurasi untuk klasifikasi dan MAE untuk regresi.'
      ],
      menengah: [
        'Terapkan algoritma yang lebih canggih seperti Decision Trees, Random Forests, dan Support Vector Machines (SVM).',
        'Implementasikan cross-validation untuk mendapatkan estimasi performa model yang lebih andal dan menghindari overfitting.'
      ],
      mahir: [
        'Lakukan penyetelan hyperparameter (misalnya, menggunakan GridSearchCV) untuk menemukan konfigurasi model yang optimal.',
        'Terapkan model ensemble seperti Gradient Boosting (XGBoost, LightGBM) yang sering memenangkan kompetisi Kaggle.'
      ]
    },
    proyekPortofolio: [
      {
        id: 'titanic-survival-prediction',
        title: 'Prediksi Kelangsungan Hidup Penumpang Titanic',
        description: 'Gunakan dataset Titanic yang terkenal untuk membangun model klasifikasi biner yang memprediksi apakah seorang penumpang akan selamat atau tidak berdasarkan fitur seperti usia, jenis kelamin, dan kelas tiket. Bandingkan performa setidaknya dua algoritma yang berbeda.',
        difficulty: 'Menengah',
        duration: '2-3 minggu',
        technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
        deliverables: ['Model machine learning', 'Evaluasi performa', 'Laporan perbandingan algoritma']
      },
      {
        id: 'house-price-prediction',
        title: 'Model Prediksi Harga Rumah',
        description: 'Bangun sebuah model regresi menggunakan dataset properti untuk memprediksi harga jual rumah. Lakukan feature engineering sederhana (misalnya, membuat fitur baru dari yang sudah ada) dan evaluasi model Anda menggunakan metrik R-squared untuk melihat seberapa baik model Anda menjelaskan variasi harga.',
        difficulty: 'Menengah',
        duration: '2-3 minggu',
        technologies: ['Python', 'Scikit-learn', 'Pandas', 'Feature Engineering'],
        deliverables: ['Model regresi', 'Feature engineering', 'Evaluasi model']
      }
    ]
  },
  'ds-unsupervised-learning': {
    konsepInti: [
      'Clustering (Pengelompokan): Teknik untuk mengelompokkan titik data yang serupa ke dalam cluster-cluster berdasarkan karakteristiknya, tanpa menggunakan label yang sudah ada sebelumnya.',
      'Algoritma K-Means: Salah satu algoritma clustering yang paling populer, yang bertujuan untuk mempartisi data ke dalam "K" jumlah cluster yang telah ditentukan sebelumnya.',
      'Dimensionality Reduction (Pengurangan Dimensi): Teknik seperti Principal Component Analysis (PCA) yang digunakan untuk mengurangi jumlah variabel dalam dataset sambil mempertahankan informasi sebanyak mungkin, berguna untuk visualisasi dan efisiensi model.',
      'Association Rule Mining: Menemukan aturan asosiasi yang menarik antar item dalam dataset besar, seperti "pelanggan yang membeli roti juga cenderung membeli susu".'
    ],
    jalurPenguasaan: {
      pemula: [
        'Pahami konsep dasar clustering dan kapan harus menggunakannya.',
        'Terapkan algoritma K-Means pada dataset 2D sederhana dan visualisasikan clusternya.'
      ],
      menengah: [
        'Gunakan "metode siku" (elbow method) untuk menentukan jumlah cluster (K) yang optimal untuk K-Means.',
        'Terapkan PCA untuk mengurangi dimensi dataset menjadi dua komponen utama dan visualisasikan hasilnya.'
      ],
      mahir: [
        'Terapkan algoritma clustering yang lebih canggih seperti DBSCAN, yang dapat menemukan cluster dengan bentuk yang tidak teratur.',
        'Interpretasikan hasil clustering dalam konteks bisnis dan berikan nama atau persona untuk setiap cluster yang ditemukan.'
      ]
    },
    proyekPortofolio: [
      {
        id: 'mall-customer-segmentation',
        title: 'Segmentasi Pelanggan Mall',
        description: 'Gunakan dataset pelanggan mall yang berisi usia, pendapatan tahunan, dan skor pengeluaran untuk menerapkan K-Means clustering. Identifikasi dan visualisasikan segmen pelanggan yang berbeda (misalnya, "hemat tapi sering", "boros tapi jarang") untuk membantu tim pemasaran merancang kampanye yang tertarget.',
        difficulty: 'Menengah',
        duration: '2-3 minggu',
        technologies: ['Python', 'Scikit-learn', 'Clustering', 'Data Visualization'],
        deliverables: ['Customer segments', 'Clustering analysis', 'Marketing recommendations']
      },
      {
        id: 'mnist-dimensionality-reduction',
        title: 'Pengurangan Dimensi untuk Visualisasi Gambar Tulisan Tangan',
        description: 'Ambil dataset gambar tulisan tangan MNIST, yang memiliki 784 dimensi (piksel). Terapkan PCA untuk mengurangi dimensinya menjadi hanya 2 komponen utama. Buat scatter plot dari 2 komponen ini, beri warna berdasarkan label angka aslinya, dan tunjukkan bagaimana PCA berhasil memisahkan angka-angka yang berbeda.',
        difficulty: 'Lanjutan',
        duration: '2-3 minggu',
        technologies: ['Python', 'PCA', 'Dimensionality Reduction', 'Data Visualization'],
        deliverables: ['PCA implementation', '2D visualization', 'Analysis report']
      }
    ]
  },

  // Fase 5: Big Data & Teknologi Cloud
  'ds-big-data-processing': {
    konsepInti: [
      'Tiga V (Volume, Velocity, Variety): Karakteristik utama Big Data: Volume (jumlah data yang sangat besar), Velocity (kecepatan data dihasilkan), dan Variety (berbagai jenis data, terstruktur dan tidak terstruktur).',
      'Pemrosesan Terdistribusi: Konsep memecah tugas komputasi besar menjadi bagian-bagian kecil dan mendistribusikannya ke banyak komputer (cluster) untuk diproses secara paralel.',
      'Ekosistem Hadoop & Spark: Hadoop adalah kerangka kerja asli untuk penyimpanan terdistribusi (HDFS) dan pemrosesan (MapReduce). Spark adalah evolusi yang lebih cepat dan fleksibel yang kini menjadi standar industri untuk pemrosesan Big Data.',
      'Querying Data di Skala Besar: Menggunakan alat seperti Hive atau Spark SQL untuk menulis kueri mirip SQL yang dapat dieksekusi pada dataset berukuran terabyte atau petabyte yang disimpan di sistem terdistribusi.'
    ],
    jalurPenguasaan: {
      pemula: [
        'Pahami perbedaan arsitektur antara komputasi mesin tunggal dan komputasi terdistribusi.',
        'Jalankan operasi MapReduce sederhana secara konseptual atau pada dataset kecil.'
      ],
      menengah: [
        'Gunakan PySpark (antarmuka Python untuk Spark) untuk melakukan operasi manipulasi data (mirip Pandas) pada file besar secara lokal.',
        'Tulis dan jalankan kueri sederhana menggunakan Spark SQL untuk membaca dan memfilter data dari file Parquet.'
      ],
      mahir: [
        'Rancang sebuah pipeline data batch sederhana di Spark yang membaca data mentah, melakukan transformasi, dan menulis hasilnya ke lokasi baru.',
        'Latih model machine learning sederhana menggunakan library MLlib Spark pada dataset yang terdistribusi.'
      ]
    },
    proyekPortofolio: [
      {
        id: 'web-server-log-analysis',
        title: 'Analisis Log Web Server dengan PySpark',
        description: 'Diberikan file log web server berukuran besar, gunakan PySpark untuk memproses data ini dan mengekstrak wawasan. Jawab pertanyaan seperti "Alamat IP mana yang paling sering mengunjungi situs?" dan "Halaman mana yang paling populer?".',
        difficulty: 'Lanjutan',
        duration: '3-4 minggu',
        technologies: ['PySpark', 'Apache Spark', 'Big Data Processing'],
        deliverables: ['Pipeline data processing', 'Analisis big data', 'Laporan insights']
      },
      {
        id: 'flight-dataset-querying',
        title: 'Querying Dataset Penerbangan Skala Besar',
        description: 'Gunakan dataset publik tentang data penerbangan (jutaan baris) yang disimpan dalam format Parquet. Gunakan Spark SQL di lingkungan seperti Databricks Community Edition atau Google Colab untuk menemukan bandara tersibuk dan maskapai dengan penundaan rata-rata terlama.',
        difficulty: 'Lanjutan',
        duration: '3-4 minggu',
        technologies: ['Spark SQL', 'Apache Spark', 'Cloud Computing'],
        deliverables: ['Query optimization', 'Performance analysis', 'Business insights']
      }
    ]
  },
  'ds-cloud-computing': {
    konsepInti: [
      'IaaS, PaaS, SaaS: Tiga model layanan cloud utama. IaaS (Infrastructure as a Service) menyediakan komputasi dasar (misalnya, AWS EC2). PaaS (Platform as a Service) menyediakan platform untuk membangun aplikasi (misalnya, Heroku). SaaS (Software as a Service) menyediakan aplikasi siap pakai (misalnya, Gmail).',
      'Penyimpanan Cloud (Object Storage): Memahami layanan seperti Amazon S3 atau Google Cloud Storage sebagai cara yang skalabel dan hemat biaya untuk menyimpan data dalam jumlah besar, baik terstruktur maupun tidak terstruktur.',
      'Komputasi Sesuai Permintaan (On-Demand Compute): Kemampuan untuk menyewa dan menjalankan mesin virtual (server) dengan berbagai ukuran dan kekuatan dalam hitungan menit, dan hanya membayar untuk apa yang digunakan.',
      'Managed AI/ML Services: Memanfaatkan layanan AI/ML yang dikelola oleh penyedia cloud (misalnya, Google AI Platform, Amazon SageMaker) untuk melatih dan men-deploy model machine learning tanpa harus mengelola infrastruktur dasarnya.'
    ],
    jalurPenguasaan: {
      pemula: [
        'Buat akun gratis di salah satu penyedia cloud utama (AWS, GCP, atau Azure).',
        'Unggah dan kelola file menggunakan layanan object storage seperti Amazon S3.'
      ],
      menengah: [
        'Luncurkan dan konfigurasikan sebuah mesin virtual Linux sederhana (misalnya, t2.micro di AWS EC2).',
        'Jalankan skrip Python sederhana di mesin virtual tersebut.'
      ],
      mahir: [
        'Gunakan platform notebook yang dikelola cloud seperti Google Colab atau Amazon SageMaker Studio Lab untuk melatih model machine learning.',
        'Latih dan deploy model sederhana sebagai API endpoint menggunakan layanan cloud yang dikelola.'
      ]
    },
    proyekPortofolio: [
      {
        id: 'cloud-storage-dataset',
        title: 'Hosting Dataset di Cloud Storage',
        description: 'Ambil dataset berukuran sedang (misalnya, 1-2 GB) dan unggah ke bucket Amazon S3 atau Google Cloud Storage. Konfigurasikan izin aksesnya agar dapat diakses secara publik (hanya baca) dan bagikan tautan untuk mengunduhnya.',
        difficulty: 'Pemula',
        duration: '1-2 minggu',
        technologies: ['AWS S3', 'Google Cloud Storage', 'Cloud Computing'],
        deliverables: ['Cloud storage setup', 'Access configuration', 'Public dataset hosting']
      },
      {
        id: 'gpu-model-training-colab',
        title: 'Melatih Model di Google Colab dengan GPU',
        description: 'Gunakan Google Colab untuk melatih sebuah model klasifikasi gambar sederhana pada dataset seperti CIFAR-10. Manfaatkan fitur akselerator GPU gratis yang disediakan Colab untuk mempercepat proses pelatihan secara signifikan dibandingkan dengan menjalankannya di CPU lokal.',
        difficulty: 'Menengah',
        duration: '2-3 minggu',
        technologies: ['Google Colab', 'GPU Computing', 'Deep Learning'],
        deliverables: ['GPU-accelerated training', 'Model performance analysis', 'Training optimization']
      }
    ]
  },

  // Fase 6: Machine Learning Lanjutan & AI
  'ds-deep-learning': {
    konsepInti: [
      'Artificial Neural Networks (ANN): Model yang terinspirasi dari otak manusia, terdiri dari lapisan-lapisan neuron yang saling terhubung untuk mempelajari pola yang kompleks dari data.',
      'Convolutional Neural Networks (CNN): Arsitektur khusus untuk data gambar, yang menggunakan filter convolutional untuk secara otomatis mendeteksi fitur seperti tepi, bentuk, dan objek.',
      'Recurrent Neural Networks (RNN) & Transformers: Arsitektur untuk data sekuensial seperti teks atau time series. RNN memproses data secara berurutan, sementara arsitektur Transformer yang lebih baru menggunakan mekanisme self-attention dan menjadi dasar bagi model seperti ChatGPT.',
      'Transfer Learning: Teknik yang sangat kuat di mana sebuah model yang telah dilatih pada dataset raksasa (misalnya, jutaan gambar dari ImageNet) diadaptasi (fine-tuned) untuk tugas spesifik dengan data yang jauh lebih sedikit, menghemat waktu dan sumber daya komputasi secara dramatis.'
    ],
    jalurPenguasaan: {
      pemula: [
        'Bangun dan latih sebuah Jaringan Saraf Tiruan sederhana untuk data tabular menggunakan Keras.',
        'Pahami peran fungsi aktivasi (seperti ReLU) dan optimizer (seperti Adam).'
      ],
      menengah: [
        'Terapkan model CNN yang telah dilatih sebelumnya (pre-trained model) seperti VGG16 atau ResNet menggunakan transfer learning untuk melakukan klasifikasi gambar pada dataset kustom Anda.',
        'Lakukan klasifikasi teks sederhana menggunakan arsitektur RNN (misalnya, LSTM).'
      ],
      mahir: [
        'Bangun model CNN dari awal untuk masalah klasifikasi gambar yang lebih kompleks.',
        'Terapkan arsitektur Transformer (misalnya, dari library Hugging Face) untuk tugas NLP seperti analisis sentimen atau ringkasan teks.'
      ]
    },
    proyekPortofolio: [
      {
        id: 'dog-cat-classification',
        title: 'Klasifikasi Gambar Anjing vs. Kucing',
        description: 'Gunakan teknik transfer learning dengan model CNN yang sudah ada (misalnya, MobileNetV2) untuk membangun pengklasifikasi gambar yang sangat akurat untuk membedakan antara gambar anjing dan kucing. Latih model pada dataset kustom yang Anda kumpulkan atau unduh.',
        difficulty: 'Lanjutan',
        duration: '3-4 minggu',
        technologies: ['TensorFlow', 'Keras', 'Transfer Learning', 'CNN'],
        deliverables: ['Model deep learning', 'Transfer learning implementation', 'Model evaluation']
      },
      {
        id: 'sentiment-analysis-transformer',
        title: 'Analisis Sentimen Ulasan Produk dengan Transformer',
        description: 'Manfaatkan model Transformer yang telah dilatih sebelumnya dari Hugging Face (seperti BERT) untuk melakukan analisis sentimen pada dataset ulasan produk Amazon. Bandingkan hasilnya dengan model machine learning klasik dan tunjukkan peningkatan akurasi yang signifikan.',
        difficulty: 'Lanjutan',
        duration: '3-4 minggu',
        technologies: ['Hugging Face', 'Transformers', 'BERT', 'NLP'],
        deliverables: ['Model NLP', 'Sentiment analysis', 'Performance comparison']
      }
    ]
  },
  'ds-mlops': {
    konsepInti: [
      'Siklus Hidup ML (ML Lifecycle): Memahami bahwa proyek ML bukan hanya tentang melatih model, tetapi seluruh siklus hidup dari pengumpulan data, pelatihan, evaluasi, deployment, hingga pemantauan di lingkungan produksi.',
      'Deployment Model: Proses mengambil model ML yang telah dilatih dan membuatnya tersedia untuk digunakan oleh aplikasi lain, biasanya melalui REST API.',
      'Version Control untuk Data & Model: Menggunakan alat seperti DVC (Data Version Control) dan Git untuk melacak perubahan pada data dan model, sama seperti melacak perubahan pada kode, untuk memastikan reproduktifitas.',
      'Pemantauan & Retraining: Memantau performa model di produksi untuk mendeteksi model drift (penurunan performa seiring waktu karena perubahan data) dan memiliki strategi untuk melatih ulang model secara berkala.'
    ],
    jalurPenguasaan: {
      pemula: [
        'Simpan dan muat kembali model scikit-learn yang telah dilatih menggunakan pickle atau joblib.',
        'Gunakan Git untuk melakukan version control pada kode pelatihan model Anda.'
      ],
      menengah: [
        'Bangun sebuah API web sederhana menggunakan Flask atau FastAPI untuk men-deploy model scikit-learn Anda secara lokal.',
        'Gunakan Docker untuk membungkus aplikasi API model Anda ke dalam sebuah kontainer yang portabel.'
      ],
      mahir: [
        'Gunakan alat experiment tracking seperti MLflow atau Weights & Biases untuk mencatat parameter, metrik, dan artefak dari berbagai proses pelatihan model.',
        'Rancang sebuah pipeline CI/CD (Continuous Integration/Continuous Deployment) sederhana untuk ML menggunakan GitHub Actions yang secara otomatis melatih dan menguji ulang model setiap kali ada perubahan kode.'
      ]
    },
    proyekPortofolio: [
      {
        id: 'house-price-api-deployment',
        title: 'Deploy Model Prediksi Harga Rumah sebagai API',
        description: 'Ambil model regresi harga rumah yang telah Anda buat sebelumnya. Bungkus model tersebut dalam sebuah API web menggunakan Flask atau FastAPI. Buat endpoint /predict yang menerima fitur rumah dalam format JSON dan mengembalikan prediksi harga.',
        difficulty: 'Menengah',
        duration: '2-3 minggu',
        technologies: ['Flask', 'FastAPI', 'Model Deployment', 'REST API'],
        deliverables: ['Deployed API', 'Model serving', 'API documentation']
      },
      {
        id: 'mlflow-experiment-tracking',
        title: 'Menggunakan MLflow untuk Melacak Eksperimen',
        description: 'Latih beberapa versi model klasifikasi (misalnya, dengan hyperparameter yang berbeda). Gunakan MLflow untuk secara otomatis mencatat parameter, metrik performa (akurasi, F1-score), dan model yang telah dilatih untuk setiap eksperimen. Bandingkan hasilnya menggunakan UI MLflow.',
        difficulty: 'Lanjutan',
        duration: '2-3 minggu',
        technologies: ['MLflow', 'Experiment Tracking', 'Model Versioning'],
        deliverables: ['Experiment tracking setup', 'Model comparison', 'Performance analysis']
      }
    ]
  },

  // Fase 7: Aplikasi Bisnis & Komunikasi
  'ds-business-intelligence': {
    konsepInti: [
      'Menerjemahkan Masalah Bisnis ke Masalah Data: Kemampuan untuk mengambil tujuan bisnis yang luas (misalnya, "tingkatkan retensi pelanggan") dan menerjemahkannya menjadi masalah machine learning yang terdefinisi dengan baik (misalnya, "bangun model klasifikasi untuk memprediksi churn").',
      'Fokus pada ROI (Return on Investment): Memahami bahwa keberhasilan proyek data tidak diukur oleh akurasi model, tetapi oleh dampak bisnis yang dihasilkannya (peningkatan pendapatan, pengurangan biaya).',
      'Pemahaman Metrik Bisnis Kunci: Mengetahui dan memahami metrik yang penting bagi bisnis, seperti Customer Lifetime Value (CLV), Customer Acquisition Cost (CAC), dan Churn Rate.',
      'Pengetahuan Domain: Memiliki pemahaman dasar tentang industri tempat Anda bekerja (misalnya, e-commerce, keuangan, kesehatan) untuk memberikan konteks pada analisis Anda dan menghasilkan wawasan yang relevan.'
    ],
    jalurPenguasaan: {
      pemula: [
        'Pilih sebuah perusahaan publik dan baca laporan tahunannya. Identifikasi metrik utama yang mereka gunakan untuk mengukur kesuksesan.',
        'Untuk sebuah masalah bisnis, definisikan metrik keberhasilan (success metric) yang jelas.'
      ],
      menengah: [
        'Buat sebuah "pohon metrik" (metric tree) untuk sebuah tujuan bisnis, memecahnya menjadi metrik-metrik pendorong yang dapat diukur.',
        'Lakukan analisis kompetitif sederhana berdasarkan data publik untuk membandingkan performa dua perusahaan di industri yang sama.'
      ],
      mahir: [
        'Kembangkan sebuah proposal proyek data lengkap yang mencakup definisi masalah, metrik keberhasilan, data yang dibutuhkan, dan estimasi dampak bisnis (ROI).',
        'Lakukan analisis "what-if" untuk memodelkan dampak potensial dari berbagai keputusan bisnis terhadap metrik utama.'
      ]
    },
    proyekPortofolio: [
      {
        id: 'churn-reduction-proposal',
        title: 'Proposal Proyek untuk Mengurangi Churn Pelanggan',
        description: 'Bayangkan Anda adalah Data Scientist di sebuah perusahaan telekomunikasi. Tulis proposal 1 halaman yang menguraikan proyek untuk membangun model prediksi churn. Jelaskan masalah bisnisnya, bagaimana model ML dapat membantu, data apa yang dibutuhkan, dan bagaimana Anda akan mengukur keberhasilan proyek dalam hal pengurangan churn dan ROI.',
        difficulty: 'Menengah',
        duration: '1-2 minggu',
        technologies: ['Business Analysis', 'ROI Calculation', 'Project Planning'],
        deliverables: ['Business proposal', 'ROI analysis', 'Project roadmap']
      },
      {
        id: 'business-case-study-analysis',
        title: 'Analisis Bisnis dari Studi Kasus Publik',
        description: 'Pilih studi kasus bisnis yang terkenal (misalnya, kebangkitan Netflix, kejatuhan Blockbuster). Identifikasi metrik-metrik kunci yang relevan dan jelaskan bagaimana keputusan berbasis data (atau ketiadaannya) memainkan peran penting dalam hasil akhir perusahaan tersebut.',
        difficulty: 'Menengah',
        duration: '1-2 minggu',
        technologies: ['Business Analysis', 'Case Study', 'Strategic Analysis'],
        deliverables: ['Business case analysis', 'Strategic insights', 'Lessons learned']
      }
    ]
  }
};

// Project Portfolios untuk setiap fase
export const dataScientistProjectPortfolios = {
  'ds-phase-1-foundations': [
    {
      id: 'ab-testing-significance',
      title: 'Analisis Signifikansi Statistik pada A/B Test Website',
      description: 'Diberikan dataset hasil A/B test perubahan warna tombol di situs e-commerce, gunakan uji-t untuk menentukan apakah perubahan desain tersebut memiliki dampak yang signifikan secara statistik terhadap tingkat konversi. Tulis laporan singkat yang menjelaskan hasilnya untuk manajer produk.',
      difficulty: 'Pemula',
      duration: '1-2 minggu',
      technologies: ['Python', 'Pandas', 'SciPy', 'Matplotlib'],
      deliverables: ['Laporan analisis statistik', 'Visualisasi hasil', 'Rekomendasi bisnis']
    },
    {
      id: 'property-correlation-analysis',
      title: 'Analisis Korelasi Harga Properti',
      description: 'Gunakan dataset properti untuk menganalisis korelasi antara berbagai fitur (luas bangunan, jumlah kamar tidur, jarak ke pusat kota) dan harga jual. Buat visualisasi scatter plot untuk menunjukkan hubungan yang paling kuat dan jelaskan temuan Anda.',
      difficulty: 'Pemula',
      duration: '1-2 minggu',
      technologies: ['Python', 'Pandas', 'Seaborn', 'Matplotlib'],
      deliverables: ['Analisis korelasi', 'Visualisasi data', 'Laporan insights']
    }
  ],
  'ds-phase-2-programming': [
    {
      id: 'ecommerce-data-cleaning',
      title: 'Analisis dan Pembersihan Data Transaksi E-commerce',
      description: 'Gunakan Pandas untuk membersihkan dataset transaksi yang berisi data duplikat, nilai yang hilang, dan format yang tidak konsisten. Setelah pembersihan, hitung metrik bisnis utama seperti total pendapatan, jumlah pelanggan unik, dan produk terlaris.',
      difficulty: 'Pemula',
      duration: '1-2 minggu',
      technologies: ['Python', 'Pandas', 'NumPy'],
      deliverables: ['Dataset bersih', 'Laporan metrik bisnis', 'Kode pembersihan data']
    },
    {
      id: 'weather-data-analysis',
      title: 'Analisis Data Cuaca Historis',
      description: 'Ambil dataset cuaca historis dan gunakan Pandas untuk menjawab pertanyaan seperti "Bulan apa yang rata-rata paling panas?" dan "Berapa jumlah hari hujan dalam setahun?". Lakukan operasi groupby dan agregasi untuk menemukan jawabannya.',
      difficulty: 'Pemula',
      duration: '1-2 minggu',
      technologies: ['Python', 'Pandas', 'Matplotlib'],
      deliverables: ['Analisis statistik cuaca', 'Visualisasi tren', 'Dashboard sederhana']
    }
  ],
  'ds-phase-3-analysis': [
    {
      id: 'global-sales-dashboard',
      title: 'Dashboard Penjualan E-commerce Global',
      description: 'Gunakan dataset penjualan global untuk membuat dashboard interaktif di Tableau Public. Dashboard harus menampilkan total penjualan berdasarkan negara (peta), tren penjualan dari waktu ke waktu (grafik garis), dan performa kategori produk (grafik batang).',
      difficulty: 'Menengah',
      duration: '2-3 minggu',
      technologies: ['Tableau Public', 'Excel', 'Data Visualization'],
      deliverables: ['Dashboard interaktif', 'Laporan insights', 'Presentasi findings']
    },
    {
      id: 'movie-success-factors',
      title: 'Presentasi "Storytelling" tentang Faktor Kesuksesan Film',
      description: 'Analisis dataset film (misalnya, dari IMDb) dan buat presentasi naratif 5 slide yang menjawab pertanyaan: "Apa faktor yang paling berkorelasi dengan rating film yang tinggi?". Gunakan visualisasi untuk mendukung argumen Anda (misalnya, hubungan antara anggaran dan rating).',
      difficulty: 'Menengah',
      duration: '2-3 minggu',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'PowerPoint'],
      deliverables: ['Presentasi data storytelling', 'Analisis faktor kesuksesan', 'Rekomendasi strategi']
    }
  ],
  'ds-phase-4-machine-learning': [
    {
      id: 'titanic-survival-prediction',
      title: 'Prediksi Kelangsungan Hidup Penumpang Titanic',
      description: 'Gunakan dataset Titanic yang terkenal untuk membangun model klasifikasi biner yang memprediksi apakah seorang penumpang akan selamat atau tidak berdasarkan fitur seperti usia, jenis kelamin, dan kelas tiket. Bandingkan performa setidaknya dua algoritma yang berbeda.',
      difficulty: 'Menengah',
      duration: '2-3 minggu',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
      deliverables: ['Model machine learning', 'Evaluasi performa', 'Laporan perbandingan algoritma']
    },
    {
      id: 'house-price-prediction',
      title: 'Model Prediksi Harga Rumah',
      description: 'Bangun sebuah model regresi menggunakan dataset properti untuk memprediksi harga jual rumah. Lakukan feature engineering sederhana (misalnya, membuat fitur baru dari yang sudah ada) dan evaluasi model Anda menggunakan metrik R-squared untuk melihat seberapa baik model Anda menjelaskan variasi harga.',
      difficulty: 'Menengah',
      duration: '2-3 minggu',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Feature Engineering'],
      deliverables: ['Model regresi', 'Feature engineering', 'Evaluasi model']
    }
  ],
  'ds-phase-5-big-data': [
    {
      id: 'web-server-log-analysis',
      title: 'Analisis Log Web Server dengan PySpark',
      description: 'Diberikan file log web server berukuran besar, gunakan PySpark untuk memproses data ini dan mengekstrak wawasan. Jawab pertanyaan seperti "Alamat IP mana yang paling sering mengunjungi situs?" dan "Halaman mana yang paling populer?".',
      difficulty: 'Lanjutan',
      duration: '3-4 minggu',
      technologies: ['PySpark', 'Apache Spark', 'Big Data Processing'],
      deliverables: ['Pipeline data processing', 'Analisis big data', 'Laporan insights']
    },
    {
      id: 'flight-dataset-querying',
      title: 'Querying Dataset Penerbangan Skala Besar',
      description: 'Gunakan dataset publik tentang data penerbangan (jutaan baris) yang disimpan dalam format Parquet. Gunakan Spark SQL di lingkungan seperti Databricks Community Edition atau Google Colab untuk menemukan bandara tersibuk dan maskapai dengan penundaan rata-rata terlama.',
      difficulty: 'Lanjutan',
      duration: '3-4 minggu',
      technologies: ['Spark SQL', 'Apache Spark', 'Cloud Computing'],
      deliverables: ['Query optimization', 'Performance analysis', 'Business insights']
    }
  ],
  'ds-phase-6-advanced-ml': [
    {
      id: 'dog-cat-classification',
      title: 'Klasifikasi Gambar Anjing vs. Kucing',
      description: 'Gunakan teknik transfer learning dengan model CNN yang sudah ada (misalnya, MobileNetV2) untuk membangun pengklasifikasi gambar yang sangat akurat untuk membedakan antara gambar anjing dan kucing. Latih model pada dataset kustom yang Anda kumpulkan atau unduh.',
      difficulty: 'Lanjutan',
      duration: '3-4 minggu',
      technologies: ['TensorFlow', 'Keras', 'Transfer Learning', 'CNN'],
      deliverables: ['Model deep learning', 'Transfer learning implementation', 'Model evaluation']
    },
    {
      id: 'sentiment-analysis-transformer',
      title: 'Analisis Sentimen Ulasan Produk dengan Transformer',
      description: 'Manfaatkan model Transformer yang telah dilatih sebelumnya dari Hugging Face (seperti BERT) untuk melakukan analisis sentimen pada dataset ulasan produk Amazon. Bandingkan hasilnya dengan model machine learning klasik dan tunjukkan peningkatan akurasi yang signifikan.',
      difficulty: 'Lanjutan',
      duration: '3-4 minggu',
      technologies: ['Hugging Face', 'Transformers', 'BERT', 'NLP'],
      deliverables: ['Model NLP', 'Sentiment analysis', 'Performance comparison']
    }
  ],
  'ds-phase-7-business-application': [
    {
      id: 'churn-reduction-proposal',
      title: 'Proposal Proyek untuk Mengurangi Churn Pelanggan',
      description: 'Bayangkan Anda adalah Data Scientist di sebuah perusahaan telekomunikasi. Tulis proposal 1 halaman yang menguraikan proyek untuk membangun model prediksi churn. Jelaskan masalah bisnisnya, bagaimana model ML dapat membantu, data apa yang dibutuhkan, dan bagaimana Anda akan mengukur keberhasilan proyek dalam hal pengurangan churn dan ROI.',
      difficulty: 'Menengah',
      duration: '1-2 minggu',
      technologies: ['Business Analysis', 'ROI Calculation', 'Project Planning'],
      deliverables: ['Business proposal', 'ROI analysis', 'Project roadmap']
    },
    {
      id: 'business-case-study-analysis',
      title: 'Analisis Bisnis dari Studi Kasus Publik',
      description: 'Pilih studi kasus bisnis yang terkenal (misalnya, kebangkitan Netflix, kejatuhan Blockbuster). Identifikasi metrik-metrik kunci yang relevan dan jelaskan bagaimana keputusan berbasis data (atau ketiadaannya) memainkan peran penting dalam hasil akhir perusahaan tersebut.',
      difficulty: 'Menengah',
      duration: '1-2 minggu',
      technologies: ['Business Analysis', 'Case Study', 'Strategic Analysis'],
      deliverables: ['Business case analysis', 'Strategic insights', 'Lessons learned']
    }
  ]
};

export const dataScientistBreakdown = {
  hardSkills: dataScientistHardSkills,
  softSkills: dataScientistSoftSkills,
  allSkills: allDataScientistSkills,
  learningMaterials: dataScientistLearningMaterials,
  roadmap: comprehensiveDataScientistRoadmap,
  projectPortfolios: dataScientistProjectPortfolios,
  detailedBreakdown: dataScientistDetailedBreakdown,
  summary: dataScientistSkillsSummary
};

export default dataScientistBreakdown;
