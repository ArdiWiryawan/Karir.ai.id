import { Job, Skill, Roadmap, RoadmapPhase, LearningMaterial } from './skillForecastingTypes';
import { 
  allDataScientistSkills, 
  dataScientistLearningMaterials, 
  comprehensiveDataScientistRoadmap 
} from './dataScientistSkillsBreakdown';

// =============================================
// COMPREHENSIVE SKILLS DATABASE
// =============================================

export const comprehensiveSkills: Skill[] = [
  // AI/ML Specialist Skills
  {
    id: 'deep-learning',
    name: 'Deep Learning',
    type: 'hard',
    category: 'AI & Machine Learning',
    description: 'Teknik neural networks dengan multiple layers untuk pattern recognition kompleks',
    importance: 10,
    learnability: 'Sangat Sulit',
    timeToLearn: '6-12 bulan'
  },
  {
    id: 'python-advanced',
    name: 'Python Programming (Advanced)',
    type: 'hard',
    category: 'Programming & Development',
    description: 'Kemampuan Python tingkat lanjut untuk AI/ML dengan libraries seperti TensorFlow, PyTorch',
    importance: 9,
    learnability: 'Sulit',
    timeToLearn: '4-8 bulan'
  },
  {
    id: 'mathematical-modeling',
    name: 'Mathematical Modeling',
    type: 'hard',
    category: 'AI & Machine Learning',
    description: 'Statistik, aljabar linear, kalkulus untuk pemahaman algoritma ML',
    importance: 9,
    learnability: 'Sulit',
    timeToLearn: '6-12 bulan'
  },
  {
    id: 'mlops',
    name: 'MLOps & Model Deployment',
    type: 'hard',
    category: 'AI & Machine Learning',
    description: 'Praktik DevOps untuk machine learning lifecycle management',
    importance: 8,
    learnability: 'Sulit',
    timeToLearn: '3-6 bulan'
  },

  // Data Scientist Skills (sesuai contoh user)
  {
    id: 'statistics-inferential',
    name: 'Statistika Deskriptif & Inferensial',
    type: 'hard',
    category: 'Data & Analytics',
    description: 'Mean, median, modus, varians, distribusi probabilitas, A/B testing',
    importance: 9,
    learnability: 'Sedang',
    timeToLearn: '3-6 bulan'
  },
  {
    id: 'linear-algebra',
    name: 'Aljabar Linier',
    type: 'hard',
    category: 'Data & Analytics',
    description: 'Vektor, matriks, dekomposisi nilai eigen untuk ML algorithms',
    importance: 8,
    learnability: 'Sulit',
    timeToLearn: '4-6 bulan'
  },
  {
    id: 'calculus-optimization',
    name: 'Kalkulus & Optimisasi',
    type: 'hard',
    category: 'Data & Analytics',
    description: 'Turunan, gradien untuk optimisasi model machine learning',
    importance: 7,
    learnability: 'Sulit',
    timeToLearn: '3-6 bulan'
  },
  {
    id: 'python-data-science',
    name: 'Python untuk Data Science',
    type: 'hard',
    category: 'Programming & Development',
    description: 'Pandas, NumPy, Scikit-learn, Matplotlib untuk data analysis',
    importance: 10,
    learnability: 'Sedang',
    timeToLearn: '3-6 bulan'
  },
  {
    id: 'sql-advanced',
    name: 'SQL Advanced',
    type: 'hard',
    category: 'Data & Analytics',
    description: 'SELECT, JOIN, GROUP BY, window functions untuk data manipulation',
    importance: 9,
    learnability: 'Sedang',
    timeToLearn: '2-4 bulan'
  },
  {
    id: 'data-visualization',
    name: 'Data Visualization',
    type: 'hard',
    category: 'Design & UX',
    description: 'Matplotlib, Seaborn, Plotly, Tableau untuk storytelling dengan data',
    importance: 8,
    learnability: 'Sedang',
    timeToLearn: '2-4 bulan'
  },
  {
    id: 'machine-learning-algorithms',
    name: 'Machine Learning Algorithms',
    type: 'hard',
    category: 'AI & Machine Learning',
    description: 'Supervised/Unsupervised learning, regresi, klasifikasi, clustering',
    importance: 10,
    learnability: 'Sulit',
    timeToLearn: '6-12 bulan'
  },
  {
    id: 'big-data-technologies',
    name: 'Big Data Technologies',
    type: 'hard',
    category: 'Technical Skills',
    description: 'Apache Spark, Hadoop, cloud platforms (AWS, GCP, Azure)',
    importance: 7,
    learnability: 'Sulit',
    timeToLearn: '4-8 bulan'
  },

  // Cybersecurity Analyst Skills
  {
    id: 'network-security',
    name: 'Network Security',
    type: 'hard',
    category: 'Technical Skills',
    description: 'Protokol keamanan jaringan, firewall, intrusion detection systems',
    importance: 9,
    learnability: 'Sulit',
    timeToLearn: '4-8 bulan'
  },
  {
    id: 'penetration-testing',
    name: 'Penetration Testing',
    type: 'hard',
    category: 'Technical Skills',
    description: 'Ethical hacking untuk mengidentifikasi vulnerability dalam sistem',
    importance: 9,
    learnability: 'Sulit',
    timeToLearn: '6-12 bulan'
  },
  {
    id: 'incident-response',
    name: 'Incident Response',
    type: 'hard',
    category: 'Technical Skills',
    description: 'Prosedur tanggap darurat untuk serangan cyber dan breach',
    importance: 8,
    learnability: 'Sedang',
    timeToLearn: '3-6 bulan'
  },
  {
    id: 'security-frameworks',
    name: 'Security Frameworks',
    type: 'hard',
    category: 'Technical Skills',
    description: 'NIST, ISO 27001, COBIT untuk governance keamanan informasi',
    importance: 7,
    learnability: 'Sedang',
    timeToLearn: '2-4 bulan'
  },

  // Web3 Developer Skills
  {
    id: 'blockchain-fundamentals',
    name: 'Blockchain Fundamentals',
    type: 'hard',
    category: 'Programming & Development',
    description: 'Consensus mechanisms, cryptography, distributed ledger technology',
    importance: 10,
    learnability: 'Sulit',
    timeToLearn: '3-6 bulan'
  },
  {
    id: 'smart-contracts',
    name: 'Smart Contract Development',
    type: 'hard',
    category: 'Programming & Development',
    description: 'Solidity, Ethereum, DApp development untuk blockchain applications',
    importance: 9,
    learnability: 'Sulit',
    timeToLearn: '4-8 bulan'
  },
  {
    id: 'defi-protocols',
    name: 'DeFi Protocols',
    type: 'hard',
    category: 'Programming & Development',
    description: 'Decentralized Finance protocols, liquidity pools, yield farming',
    importance: 8,
    learnability: 'Sulit',
    timeToLearn: '3-6 bulan'
  },

  // AI Ethics Officer Skills
  {
    id: 'ethical-reasoning',
    name: 'Ethical Reasoning',
    type: 'soft',
    category: 'Problem Solving',
    description: 'Kemampuan menganalisis dilema etika dalam pengembangan AI',
    importance: 10,
    learnability: 'Sedang',
    timeToLearn: '6-12 bulan'
  },
  {
    id: 'ai-bias-detection',
    name: 'AI Bias Detection',
    type: 'hard',
    category: 'AI & Machine Learning',
    description: 'Teknik mengidentifikasi dan mitigasi bias dalam algoritma AI',
    importance: 9,
    learnability: 'Sulit',
    timeToLearn: '4-8 bulan'
  },
  {
    id: 'policy-development',
    name: 'Policy Development',
    type: 'soft',
    category: 'Business Skills',
    description: 'Merancang kebijakan dan framework etika AI untuk organisasi',
    importance: 9,
    learnability: 'Sedang',
    timeToLearn: '3-6 bulan'
  },

  // Renewable Energy Skills
  {
    id: 'electrical-systems',
    name: 'Electrical Systems',
    type: 'hard',
    category: 'Technical Skills',
    description: 'Pemahaman sistem kelistrikan untuk instalasi energi terbarukan',
    importance: 9,
    learnability: 'Sedang',
    timeToLearn: '3-6 bulan'
  },
  {
    id: 'safety-protocols',
    name: 'Safety Protocols',
    type: 'hard',
    category: 'Technical Skills',
    description: 'Prosedur keselamatan kerja untuk instalasi di ketinggian dan elektriks',
    importance: 10,
    learnability: 'Sedang',
    timeToLearn: '2-3 bulan'
  },
  {
    id: 'renewable-energy-systems',
    name: 'Renewable Energy Systems',
    type: 'hard',
    category: 'Technical Skills',
    description: 'Teknologi solar panel, wind turbine, dan sistem penyimpanan energi',
    importance: 9,
    learnability: 'Sedang',
    timeToLearn: '4-6 bulan'
  },

  // Geriatric Tech Specialist Skills
  {
    id: 'healthcare-technology',
    name: 'Healthcare Technology',
    type: 'hard',
    category: 'Technical Skills',
    description: 'Teknologi medis, telemedicine, health monitoring devices',
    importance: 9,
    learnability: 'Sedang',
    timeToLearn: '4-6 bulan'
  },
  {
    id: 'accessibility-design',
    name: 'Accessibility Design',
    type: 'hard',
    category: 'Design & UX',
    description: 'UI/UX design untuk lansia dengan keterbatasan fisik dan kognitif',
    importance: 9,
    learnability: 'Sedang',
    timeToLearn: '3-6 bulan'
  },
  {
    id: 'empathy-elderly-care',
    name: 'Empathy & Elderly Care',
    type: 'soft',
    category: 'Soft Skills',
    description: 'Pemahaman mendalam tentang kebutuhan dan tantangan lansia',
    importance: 10,
    learnability: 'Sedang',
    timeToLearn: '6-12 bulan'
  },

  // Future Work Strategist Skills
  {
    id: 'strategic-thinking',
    name: 'Strategic Thinking',
    type: 'soft',
    category: 'Leadership & Management',
    description: 'Kemampuan berpikir jangka panjang dan mengantisipasi tren masa depan',
    importance: 10,
    learnability: 'Sulit',
    timeToLearn: '12-24 bulan'
  },
  {
    id: 'change-management',
    name: 'Change Management',
    type: 'soft',
    category: 'Leadership & Management',
    description: 'Mengelola transformasi organisasi dan adaptasi teknologi',
    importance: 9,
    learnability: 'Sulit',
    timeToLearn: '6-12 bulan'
  },
  {
    id: 'future-forecasting',
    name: 'Future Forecasting',
    type: 'soft',
    category: 'Problem Solving',
    description: 'Analisis tren teknologi dan prediksi perubahan dunia kerja',
    importance: 9,
    learnability: 'Sulit',
    timeToLearn: '8-15 bulan'
  },

  // Ecosystem Restoration Specialist Skills
  {
    id: 'environmental-science',
    name: 'Environmental Science',
    type: 'hard',
    category: 'Technical Skills',
    description: 'Ekologi, biologi konservasi, dan ilmu lingkungan untuk restorasi',
    importance: 10,
    learnability: 'Sulit',
    timeToLearn: '12-24 bulan'
  },
  {
    id: 'gis-remote-sensing',
    name: 'GIS & Remote Sensing',
    type: 'hard',
    category: 'Technical Skills',
    description: 'Geographic Information Systems untuk monitoring lingkungan',
    importance: 8,
    learnability: 'Sedang',
    timeToLearn: '3-6 bulan'
  },
  {
    id: 'project-management-environmental',
    name: 'Environmental Project Management',
    type: 'soft',
    category: 'Leadership & Management',
    description: 'Mengelola proyek restorasi skala besar dengan stakeholder beragam',
    importance: 8,
    learnability: 'Sedang',
    timeToLearn: '4-8 bulan'
  },

  // Future Skills 2030 Core Skills
  {
    id: 'futures-thinking',
    name: 'Futures Thinking',
    type: 'soft',
    category: 'Problem Solving',
    description: 'Kemampuan mengeksplorasi berbagai kemungkinan masa depan dan mengantisipasi perubahan',
    importance: 10,
    learnability: 'Sedang',
    timeToLearn: '6-12 bulan'
  },
  {
    id: 'growth-mindset',
    name: 'Growth Mindset',
    type: 'soft',
    category: 'Soft Skills',
    description: 'Keyakinan bahwa kemampuan dan keterampilan dapat dikembangkan melalui usaha dan dedikasi',
    importance: 10,
    learnability: 'Sedang',
    timeToLearn: '3-6 bulan'
  },
  {
    id: 'ai-literacy',
    name: 'AI Literacy',
    type: 'hard',
    category: 'AI & Machine Learning',
    description: 'Pemahaman tentang kapabilitas, batasan, dan implikasi etis AI dalam kehidupan sehari-hari',
    importance: 10,
    learnability: 'Sedang',
    timeToLearn: '3-6 bulan'
  },
  {
    id: 'systems-thinking',
    name: 'Systems Thinking',
    type: 'soft',
    category: 'Problem Solving',
    description: 'Kemampuan memahami bagaimana berbagai sistem saling terkait dan memengaruhi satu sama lain',
    importance: 9,
    learnability: 'Sulit',
    timeToLearn: '6-12 bulan'
  },
  {
    id: 'adaptability-resilience',
    name: 'Adaptability & Resilience',
    type: 'soft',
    category: 'Soft Skills',
    description: 'Kemampuan merespons dan menyesuaikan diri dengan cepat terhadap perubahan dengan ketahanan mental',
    importance: 10,
    learnability: 'Sedang',
    timeToLearn: '6-12 bulan'
  },
  {
    id: 'creative-thinking-innovation',
    name: 'Creative Thinking & Innovation',
    type: 'soft',
    category: 'Problem Solving',
    description: 'Kemampuan berpikir di luar kotak dan menciptakan solusi inovatif untuk masalah kompleks',
    importance: 9,
    learnability: 'Sulit',
    timeToLearn: '8-15 bulan'
  },
  {
    id: 'human-ai-collaboration',
    name: 'Human-AI Collaboration',
    type: 'hard',
    category: 'AI & Machine Learning',
    description: 'Kemampuan bekerja efektif dengan sistem AI untuk meningkatkan produktivitas dan kreativitas',
    importance: 9,
    learnability: 'Sedang',
    timeToLearn: '4-8 bulan'
  },

  // Universal Soft Skills
  {
    id: 'problem-solving-structured',
    name: 'Structured Problem Solving',
    type: 'soft',
    category: 'Problem Solving',
    description: 'Pendekatan sistematis untuk memecahkan masalah kompleks',
    importance: 9,
    learnability: 'Sedang',
    timeToLearn: '6-12 bulan'
  },
  {
    id: 'communication-technical',
    name: 'Technical Communication',
    type: 'soft',
    category: 'Communication',
    description: 'Menyampaikan konsep teknis kepada audience non-teknis',
    importance: 9,
    learnability: 'Sedang',
    timeToLearn: '3-6 bulan'
  },
  {
    id: 'lifelong-learning',
    name: 'Lifelong Learning',
    type: 'soft',
    category: 'Soft Skills',
    description: 'Kemampuan terus belajar dan beradaptasi dengan teknologi baru',
    importance: 10,
    learnability: 'Sedang',
    timeToLearn: '6-12 bulan'
  },
  {
    id: 'collaboration-cross-functional',
    name: 'Cross-functional Collaboration',
    type: 'soft',
    category: 'Soft Skills',
    description: 'Bekerja efektif dengan tim lintas disiplin dan departemen',
    importance: 8,
    learnability: 'Sedang',
    timeToLearn: '3-6 bulan'
  },
  {
    id: 'business-acumen',
    name: 'Business Acumen',
    type: 'soft',
    category: 'Business Skills',
    description: 'Pemahaman konteks bisnis dan dampak keputusan terhadap organisasi',
    importance: 8,
    learnability: 'Sedang',
    timeToLearn: '6-12 bulan'
  },

  // Data Entry Clerk Skills
  {
    id: 'microsoft-office-suite',
    name: 'Microsoft Office/Google Suite',
    type: 'hard',
    category: 'Technical Skills',
    description: 'Kemampuan menggunakan Word, Excel, dan software pengolah data dasar',
    importance: 9,
    learnability: 'Mudah',
    timeToLearn: '1-3 bulan'
  },
  {
    id: 'data-management-basics',
    name: 'Data Management Basics',
    type: 'hard',
    category: 'Technical Skills',
    description: 'Teknik pengaturan dan penyimpanan data secara terstruktur',
    importance: 8,
    learnability: 'Mudah',
    timeToLearn: '1-2 bulan'
  },
  {
    id: 'accuracy-attention-detail',
    name: 'Accuracy & Attention to Detail',
    type: 'soft',
    category: 'Soft Skills',
    description: 'Fokus pada detail untuk memastikan data yang dimasukkan benar',
    importance: 10,
    learnability: 'Sedang',
    timeToLearn: '3-6 bulan'
  },
  {
    id: 'basic-automation',
    name: 'Basic Automation',
    type: 'hard',
    category: 'Technical Skills',
    description: 'Menggunakan macro di Excel dan tools otomasi sederhana',
    importance: 7,
    learnability: 'Sedang',
    timeToLearn: '2-4 bulan'
  },
  {
    id: 'erp-systems-basics',
    name: 'ERP Systems Basics',
    type: 'hard',
    category: 'Technical Skills',
    description: 'Dasar penggunaan sistem Enterprise Resource Planning',
    importance: 6,
    learnability: 'Sedang',
    timeToLearn: '3-6 bulan'
  },

  // Telemarketer Skills
  {
    id: 'sales-techniques',
    name: 'Sales Techniques',
    type: 'hard',
    category: 'Business Skills',
    description: 'Teknik penjualan, skrip penjualan, dan komunikasi persuasif',
    importance: 9,
    learnability: 'Sedang',
    timeToLearn: '2-4 bulan'
  },
  {
    id: 'crm-software',
    name: 'CRM Software',
    type: 'hard',
    category: 'Technical Skills',
    description: 'Penggunaan perangkat lunak CRM untuk pelacakan prospek dan follow-up',
    importance: 8,
    learnability: 'Mudah',
    timeToLearn: '1-2 bulan'
  },
  {
    id: 'communication-skills-telemarketing',
    name: 'Communication Skills',
    type: 'soft',
    category: 'Communication',
    description: 'Keterampilan komunikasi lisan, mendengar aktif, dan negosiasi',
    importance: 10,
    learnability: 'Sedang',
    timeToLearn: '3-6 bulan'
  },
  {
    id: 'customer-relationship-management',
    name: 'Customer Relationship Management',
    type: 'soft',
    category: 'Soft Skills',
    description: 'Membangun dan memelihara hubungan dengan pelanggan',
    importance: 9,
    learnability: 'Sedang',
    timeToLearn: '3-6 bulan'
  },
  {
    id: 'negotiation-skills',
    name: 'Negotiation Skills',
    type: 'soft',
    category: 'Soft Skills',
    description: 'Kemampuan negosiasi dan mengelola penolakan',
    importance: 8,
    learnability: 'Sedang',
    timeToLearn: '2-4 bulan'
  },

  // Bank Teller Skills
  {
    id: 'financial-transactions',
    name: 'Financial Transactions',
    type: 'hard',
    category: 'Business Skills',
    description: 'Prosedur transaksi tunai, cek, dan transfer',
    importance: 10,
    learnability: 'Sedang',
    timeToLearn: '2-4 bulan'
  },
  {
    id: 'banking-software',
    name: 'Banking Software',
    type: 'hard',
    category: 'Technical Skills',
    description: 'Penggunaan software perbankan dan ATMs',
    importance: 9,
    learnability: 'Sedang',
    timeToLearn: '1-3 bulan'
  },
  {
    id: 'customer-service-banking',
    name: 'Customer Service',
    type: 'soft',
    category: 'Soft Skills',
    description: 'Membangun hubungan dengan nasabah dan menyelesaikan masalah',
    importance: 10,
    learnability: 'Sedang',
    timeToLearn: '3-6 bulan'
  },
  {
    id: 'cash-handling',
    name: 'Cash Handling',
    type: 'hard',
    category: 'Technical Skills',
    description: 'Prosedur penanganan uang tunai dengan akurat',
    importance: 9,
    learnability: 'Mudah',
    timeToLearn: '1-2 bulan'
  },
  {
    id: 'regulatory-compliance-banking',
    name: 'Regulatory Compliance',
    type: 'hard',
    category: 'Business Skills',
    description: 'Pemahaman regulasi perbankan dan kepatuhan operasional',
    importance: 8,
    learnability: 'Sedang',
    timeToLearn: '3-6 bulan'
  },

  // Content Writer (Entry Level) Skills
  {
    id: 'writing-skills',
    name: 'Writing Skills',
    type: 'hard',
    category: 'Communication',
    description: 'Teknik menulis, tata bahasa, dan storytelling',
    importance: 10,
    learnability: 'Sedang',
    timeToLearn: '3-6 bulan'
  },
  {
    id: 'seo-basics',
    name: 'SEO Basics',
    type: 'hard',
    category: 'Digital Marketing',
    description: 'Pengenalan kata kunci, optimasi konten, dan meta descriptions',
    importance: 8,
    learnability: 'Sedang',
    timeToLearn: '2-4 bulan'
  },
  {
    id: 'research-skills',
    name: 'Research Skills',
    type: 'soft',
    category: 'Problem Solving',
    description: 'Kemampuan riset pasar dan tren untuk menyusun konten',
    importance: 9,
    learnability: 'Sedang',
    timeToLearn: '2-4 bulan'
  },
  {
    id: 'content-management-systems',
    name: 'Content Management Systems',
    type: 'hard',
    category: 'Technical Skills',
    description: 'Penggunaan CMS seperti WordPress dan kalender editorial',
    importance: 7,
    learnability: 'Mudah',
    timeToLearn: '1-2 bulan'
  },
  {
    id: 'grammar-editing',
    name: 'Grammar & Editing',
    type: 'hard',
    category: 'Communication',
    description: 'Teknik proofreading dan penggunaan tools grammar',
    importance: 9,
    learnability: 'Sedang',
    timeToLearn: '2-4 bulan'
  }
];

// =============================================
// COMPREHENSIVE LEARNING MATERIALS
// =============================================

export const comprehensiveLearningMaterials: LearningMaterial[] = [
  // Include Data Scientist learning materials first
  ...dataScientistLearningMaterials,
  // Data Science Learning Materials
  {
    id: 'andrew-ng-ml-course',
    title: 'Machine Learning Course by Andrew Ng',
    type: 'course',
    provider: 'Coursera',
    url: 'https://coursera.org/learn/machine-learning',
    description: 'Kursus fundamental machine learning yang paling populer di dunia',
    duration: '11 minggu',
    difficulty: 'Menengah',
    price: { amount: 490000, currency: 'IDR', isFree: false },
    rating: 4.9
  },
  {
    id: 'python-data-science-handbook',
    title: 'Python Data Science Handbook',
    type: 'book',
    provider: 'Jake VanderPlas',
    description: 'Panduan komprehensif Python untuk data science dengan Pandas, NumPy, Matplotlib',
    duration: '6-8 minggu',
    difficulty: 'Menengah',
    price: { amount: 350000, currency: 'IDR', isFree: false },
    rating: 4.7
  },
  {
    id: 'kaggle-learn',
    title: 'Kaggle Learn - Data Science Courses',
    type: 'course',
    provider: 'Kaggle',
    url: 'https://kaggle.com/learn',
    description: 'Kursus gratis praktis untuk data science dengan real datasets',
    duration: '4-6 minggu',
    difficulty: 'Pemula',
    price: { amount: 0, currency: 'IDR', isFree: true },
    rating: 4.5
  },
  {
    id: 'statistics-khan-academy',
    title: 'Statistics and Probability',
    type: 'course',
    provider: 'Khan Academy',
    url: 'https://khanacademy.org/math/statistics-probability',
    description: 'Dasar-dasar statistika dan probabilitas untuk data science',
    duration: '8-12 minggu',
    difficulty: 'Pemula',
    price: { amount: 0, currency: 'IDR', isFree: true },
    rating: 4.6
  },

  // AI/ML Learning Materials
  {
    id: 'deep-learning-specialization',
    title: 'Deep Learning Specialization',
    type: 'course',
    provider: 'Coursera (Andrew Ng)',
    url: 'https://coursera.org/specializations/deep-learning',
    description: 'Spesialisasi deep learning komprehensif dari basic hingga advanced',
    duration: '16 minggu',
    difficulty: 'Lanjutan',
    price: { amount: 1470000, currency: 'IDR', isFree: false },
    rating: 4.8
  },
  {
    id: 'tensorflow-certification',
    title: 'TensorFlow Developer Certification',
    type: 'certification',
    provider: 'Google',
    url: 'https://tensorflow.org/certificate',
    description: 'Sertifikasi resmi Google untuk TensorFlow development',
    duration: '12-16 minggu',
    difficulty: 'Lanjutan',
    price: { amount: 1500000, currency: 'IDR', isFree: false },
    rating: 4.7
  },
  {
    id: 'pytorch-tutorials',
    title: 'PyTorch Tutorials',
    type: 'tutorial',
    provider: 'PyTorch.org',
    url: 'https://pytorch.org/tutorials',
    description: 'Tutorial resmi PyTorch dari basic hingga advanced applications',
    duration: '8-12 minggu',
    difficulty: 'Menengah',
    price: { amount: 0, currency: 'IDR', isFree: true },
    rating: 4.6
  },

  // Cybersecurity Learning Materials
  {
    id: 'cissp-certification',
    title: 'CISSP Certification Prep',
    type: 'certification',
    provider: 'ISC2',
    description: 'Sertifikasi keamanan informasi tingkat profesional internasional',
    duration: '20-24 minggu',
    difficulty: 'Lanjutan',
    price: { amount: 8500000, currency: 'IDR', isFree: false },
    rating: 4.8
  },
  {
    id: 'ethical-hacking-course',
    title: 'Ethical Hacking Course',
    type: 'course',
    provider: 'EC-Council',
    description: 'Kursus certified ethical hacker untuk penetration testing',
    duration: '12-16 minggu',
    difficulty: 'Lanjutan',
    price: { amount: 6500000, currency: 'IDR', isFree: false },
    rating: 4.7
  },
  {
    id: 'cybrary-free-courses',
    title: 'Cybrary Free Cybersecurity Courses',
    type: 'course',
    provider: 'Cybrary',
    url: 'https://cybrary.it',
    description: 'Platform gratis untuk belajar cybersecurity dari dasar',
    duration: '6-12 minggu',
    difficulty: 'Pemula',
    price: { amount: 0, currency: 'IDR', isFree: true },
    rating: 4.4
  },

  // Web3 Development Learning Materials
  {
    id: 'solidity-documentation',
    title: 'Solidity Official Documentation',
    type: 'tutorial',
    provider: 'Ethereum Foundation',
    url: 'https://docs.soliditylang.org',
    description: 'Dokumentasi resmi Solidity untuk smart contract development',
    duration: '4-8 minggu',
    difficulty: 'Menengah',
    price: { amount: 0, currency: 'IDR', isFree: true },
    rating: 4.5
  },
  {
    id: 'consensys-academy',
    title: 'ConsenSys Academy Blockchain Developer Program',
    type: 'course',
    provider: 'ConsenSys',
    description: 'Program komprehensif untuk menjadi blockchain developer profesional',
    duration: '16-20 minggu',
    difficulty: 'Lanjutan',
    price: { amount: 12000000, currency: 'IDR', isFree: false },
    rating: 4.8
  },

  // Renewable Energy Learning Materials
  {
    id: 'solar-installation-certification',
    title: 'Solar Installation Certification',
    type: 'certification',
    provider: 'NABCEP',
    description: 'Sertifikasi internasional untuk instalasi sistem solar',
    duration: '8-12 minggu',
    difficulty: 'Menengah',
    price: { amount: 4500000, currency: 'IDR', isFree: false },
    rating: 4.6
  },
  {
    id: 'wind-energy-fundamentals',
    title: 'Wind Energy Fundamentals',
    type: 'course',
    provider: 'Technical University of Denmark',
    url: 'https://coursera.org/learn/wind-energy',
    description: 'Dasar-dasar teknologi energi angin dan turbine systems',
    duration: '6-8 minggu',
    difficulty: 'Menengah',
    price: { amount: 650000, currency: 'IDR', isFree: false },
    rating: 4.5
  },

  // Healthcare Technology Learning Materials
  {
    id: 'healthcare-informatics',
    title: 'Healthcare Informatics',
    type: 'course',
    provider: 'Johns Hopkins University',
    description: 'Teknologi informasi dalam layanan kesehatan dan elderly care',
    duration: '10-12 minggu',
    difficulty: 'Menengah',
    price: { amount: 980000, currency: 'IDR', isFree: false },
    rating: 4.7
  },
  {
    id: 'ux-accessibility',
    title: 'UX Design for Accessibility',
    type: 'course',
    provider: 'Google UX Design',
    description: 'Desain user experience yang accessible untuk semua usia',
    duration: '6-8 minggu',
    difficulty: 'Menengah',
    price: { amount: 730000, currency: 'IDR', isFree: false },
    rating: 4.6
  },

  // Environmental Science Learning Materials
  {
    id: 'environmental-science-yale',
    title: 'Environmental Science and Sustainability',
    type: 'course',
    provider: 'Yale University',
    description: 'Dasar ilmu lingkungan dan praktik sustainability',
    duration: '12-16 minggu',
    difficulty: 'Menengah',
    price: { amount: 1200000, currency: 'IDR', isFree: false },
    rating: 4.8
  },
  {
    id: 'gis-arcgis-course',
    title: 'GIS and Remote Sensing with ArcGIS',
    type: 'course',
    provider: 'ESRI',
    description: 'Geographic Information Systems untuk environmental monitoring',
    duration: '8-10 minggu',
    difficulty: 'Menengah',
    price: { amount: 850000, currency: 'IDR', isFree: false },
    rating: 4.7
  },

  // Business and Management Learning Materials
  {
    id: 'strategic-thinking-course',
    title: 'Strategic Thinking and Decision Making',
    type: 'course',
    provider: 'Stanford Graduate School of Business',
    description: 'Pengembangan kemampuan berpikir strategis untuk leadership',
    duration: '8-12 minggu',
    difficulty: 'Lanjutan',
    price: { amount: 1500000, currency: 'IDR', isFree: false },
    rating: 4.8
  },
  {
    id: 'change-management-kotter',
    title: 'Leading Change by John Kotter',
    type: 'book',
    provider: 'Harvard Business Review Press',
    description: 'Framework 8-step untuk mengelola perubahan organisational',
    duration: '4-6 minggu',
    difficulty: 'Menengah',
    price: { amount: 300000, currency: 'IDR', isFree: false },
    rating: 4.7
  },

  // Future Skills 2030 Learning Materials
  {
    id: 'future-skills-2030-course',
    title: 'Future Skills 2030 by Thomas Karl PhD',
    type: 'course',
    provider: 'Udemy',
    description: 'Kursus komprehensif tentang keterampilan masa depan dan revolusi industri 4.0',
    duration: '12-16 minggu',
    difficulty: 'Menengah',
    price: { amount: 650000, currency: 'IDR', isFree: false },
    rating: 4.8
  },
  {
    id: 'futures-thinking-workshop',
    title: 'Futures Thinking Workshop',
    type: 'course',
    provider: 'Institute for the Future',
    url: 'https://iftf.org',
    description: 'Workshop praktis untuk mengembangkan kemampuan futures thinking dan scenario planning',
    duration: '4-6 minggu',
    difficulty: 'Menengah',
    price: { amount: 850000, currency: 'IDR', isFree: false },
    rating: 4.7
  },
  {
    id: 'ai-literacy-course',
    title: 'AI for Everyone',
    type: 'course',
    provider: 'Coursera (Andrew Ng)',
    url: 'https://coursera.org/learn/ai-for-everyone',
    description: 'Pemahaman dasar AI untuk profesional non-teknis',
    duration: '4 minggu',
    difficulty: 'Pemula',
    price: { amount: 390000, currency: 'IDR', isFree: false },
    rating: 4.8
  },
  {
    id: 'growth-mindset-book',
    title: 'Mindset: The New Psychology of Success',
    type: 'book',
    provider: 'Carol Dweck',
    description: 'Buku fundamental tentang growth mindset dan fixed mindset',
    duration: '2-3 minggu',
    difficulty: 'Pemula',
    price: { amount: 250000, currency: 'IDR', isFree: false },
    rating: 4.6
  },

  // Universal Skills Learning Materials
  {
    id: 'critical-thinking-course',
    title: 'Critical Thinking Skills',
    type: 'course',
    provider: 'University of Edinburgh',
    description: 'Pengembangan kemampuan berpikir kritis dan analitis',
    duration: '6-8 minggu',
    difficulty: 'Menengah',
    price: { amount: 450000, currency: 'IDR', isFree: false },
    rating: 4.6
  },
  {
    id: 'technical-communication',
    title: 'Technical Communication for Engineers',
    type: 'course',
    provider: 'MIT OpenCourseWare',
    url: 'https://ocw.mit.edu',
    description: 'Komunikasi teknis yang efektif untuk professional',
    duration: '6-8 minggu',
    difficulty: 'Menengah',
    price: { amount: 0, currency: 'IDR', isFree: true },
    rating: 4.5
  },
  {
    id: 'project-management-pmp',
    title: 'Project Management Professional (PMP)',
    type: 'certification',
    provider: 'Project Management Institute',
    description: 'Sertifikasi project management internasional',
    duration: '12-16 minggu',
    difficulty: 'Lanjutan',
    price: { amount: 7500000, currency: 'IDR', isFree: false },
    rating: 4.8
  }
];

// =============================================
// DETAILED ROADMAPS FOR EACH PROFESSION
// =============================================

// Data Scientist Roadmap - menggunakan breakdown komprehensif
export const dataScientistRoadmap: Roadmap = comprehensiveDataScientistRoadmap;

// AI/ML Specialist Roadmap
export const aiMLSpecialistRoadmap: Roadmap = {
  id: 'ai-ml-specialist-roadmap',
  jobId: 'ai-ml-specialist',
  difficulty: 'Lanjutan',
  totalDuration: '12-18 bulan',
  phases: [
    {
      id: 'ai-ml-foundation',
      title: '🔬 Fondasi AI & Machine Learning',
      description: 'Membangun pemahaman mendalam tentang algoritma dan teori ML',
      duration: '4-6 bulan',
      order: 1,
      prerequisites: [],
      skills: [
        comprehensiveSkills.find(s => s.id === 'mathematical-modeling')!,
        comprehensiveSkills.find(s => s.id === 'python-advanced')!,
        comprehensiveSkills.find(s => s.id === 'machine-learning-algorithms')!
      ],
      materials: [
        comprehensiveLearningMaterials.find(m => m.id === 'andrew-ng-ml-course')!,
        comprehensiveLearningMaterials.find(m => m.id === 'python-data-science-handbook')!
      ]
    },
    {
      id: 'deep-learning-advanced',
      title: '🧠 Deep Learning Lanjutan',
      description: 'Spesialisasi dalam neural networks dan deep learning frameworks',
      duration: '4-6 bulan',
      order: 2,
      prerequisites: ['ai-ml-foundation'],
      skills: [
        comprehensiveSkills.find(s => s.id === 'deep-learning')!
      ],
      materials: [
        comprehensiveLearningMaterials.find(m => m.id === 'deep-learning-specialization')!,
        comprehensiveLearningMaterials.find(m => m.id === 'tensorflow-certification')!,
        comprehensiveLearningMaterials.find(m => m.id === 'pytorch-tutorials')!
      ]
    },
    {
      id: 'mlops-deployment',
      title: '🚀 MLOps & Production Deployment',
      description: 'Mengimplementasikan model ML dalam production environment',
      duration: '3-4 bulan',
      order: 3,
      prerequisites: ['deep-learning-advanced'],
      skills: [
        comprehensiveSkills.find(s => s.id === 'mlops')!
      ],
      materials: []
    },
    {
      id: 'ai-leadership-skills',
      title: '👥 Leadership & Innovation Skills',
      description: 'Kemampuan memimpin proyek AI dan berinovasi',
      duration: '2-3 bulan (paralel)',
      order: 4,
      prerequisites: [],
      skills: [
        comprehensiveSkills.find(s => s.id === 'problem-solving-structured')!,
        comprehensiveSkills.find(s => s.id === 'communication-technical')!,
        comprehensiveSkills.find(s => s.id === 'lifelong-learning')!
      ],
      materials: [
        comprehensiveLearningMaterials.find(m => m.id === 'technical-communication')!
      ]
    }
  ]
};

// Cybersecurity Analyst Roadmap
export const cybersecurityAnalystRoadmap: Roadmap = {
  id: 'cybersecurity-analyst-roadmap',
  jobId: 'cybersecurity-analyst',
  difficulty: 'Menengah',
  totalDuration: '12-18 bulan',
  phases: [
    {
      id: 'security-fundamentals',
      title: '🔒 Dasar-dasar Keamanan Informasi',
      description: 'Memahami konsep fundamental cybersecurity, ethical hacking, dan manajemen risiko',
      duration: '2-3 bulan',
      order: 1,
      prerequisites: [],
      skills: [
        comprehensiveSkills.find(s => s.id === 'network-security')!,
        comprehensiveSkills.find(s => s.id === 'security-frameworks')!,
        comprehensiveSkills.find(s => s.id === 'operating-system-security')!,
        comprehensiveSkills.find(s => s.id === 'risk-management')!
      ],
      materials: [
        {
          id: 'cybersecurity-fundamentals-course',
          title: 'Cybersecurity Fundamentals',
          type: 'course',
          provider: 'Coursera',
          description: 'Pengantar komprehensif tentang konsep keamanan siber',
          duration: '4 minggu',
          difficulty: 'Pemula',
          price: { amount: 0, currency: 'IDR', isFree: true },
          rating: 4.7
        },
        comprehensiveLearningMaterials.find(m => m.id === 'cybrary-free-courses')!
      ]
    },
    {
      id: 'threat-analysis-response',
      title: '🚨 Analisis Ancaman & Manajemen Insiden',
      description: 'Mengidentifikasi, menganalisis, dan merespons insiden keamanan siber',
      duration: '3-4 bulan',
      order: 2,
      prerequisites: ['security-fundamentals'],
      skills: [
        comprehensiveSkills.find(s => s.id === 'incident-response')!,
        comprehensiveSkills.find(s => s.id === 'penetration-testing')!,
        comprehensiveSkills.find(s => s.id === 'threat-hunting')!,
        comprehensiveSkills.find(s => s.id === 'forensic-analysis')!
      ],
      materials: [
        comprehensiveLearningMaterials.find(m => m.id === 'ethical-hacking-course')!,
        {
          id: 'incident-response-handbook',
          title: 'Incident Response & Computer Forensics',
          type: 'book',
          provider: 'McGraw-Hill',
          description: 'Panduan praktis untuk menangani insiden keamanan siber',
          duration: '4-6 minggu',
          difficulty: 'Menengah',
          price: { amount: 750000, currency: 'IDR', isFree: false },
          rating: 4.6
        }
      ]
    },
    {
      id: 'cloud-security',
      title: '☁️ Keamanan Cloud & Jaringan',
      description: 'Mengamankan infrastruktur cloud dan jaringan perusahaan',
      duration: '2-3 bulan',
      order: 3,
      prerequisites: ['threat-analysis-response'],
      skills: [
        comprehensiveSkills.find(s => s.id === 'cloud-security')!,
        comprehensiveSkills.find(s => s.id === 'network-architecture')!,
        comprehensiveSkills.find(s => s.id === 'identity-access-management')!
      ],
      materials: [
        {
          id: 'aws-security-fundamentals',
          title: 'AWS Security Fundamentals',
          type: 'course',
          provider: 'AWS Training',
          description: 'Dasar-dasar keamanan di lingkungan AWS Cloud',
          duration: '3 minggu',
          difficulty: 'Menengah',
          price: { amount: 0, currency: 'IDR', isFree: true },
          rating: 4.5
        },
        {
          id: 'azure-security-engineer',
          title: 'Microsoft Certified: Azure Security Engineer Associate',
          type: 'certification',
          provider: 'Microsoft',
          description: 'Sertifikasi keamanan untuk profesional Azure',
          duration: '2-3 bulan',
          difficulty: 'Menengah',
          price: { amount: 4500000, currency: 'IDR', isFree: false },
          rating: 4.7
        }
      ]
    },
    {
      id: 'security-governance',
      title: '📜 Tata Kelola & Kepatuhan Keamanan',
      description: 'Menerapkan kerangka kerja tata kelola dan kepatuhan keamanan',
      duration: '2-3 bulan',
      order: 4,
      prerequisites: ['cloud-security'],
      skills: [
        comprehensiveSkills.find(s => s.id === 'security-audit')!,
        comprehensiveSkills.find(s => s.id === 'compliance-management')!,
        comprehensiveSkills.find(s => s.id === 'risk-assessment')!
      ],
      materials: [
        {
          id: 'iso27001-foundation',
          title: 'ISO 27001 Foundation',
          type: 'certification',
          provider: 'PECB',
          description: 'Pemahaman mendalam tentang standar keamanan informasi ISO 27001',
          duration: '2 bulan',
          difficulty: 'Menengah',
          price: { amount: 8500000, currency: 'IDR', isFree: false },
          rating: 4.6
        },
        {
          id: 'gdpr-compliance-guide',
          title: 'GDPR Compliance Guide',
          type: 'tutorial',
          provider: 'EU GDPR',
          description: 'Panduan komprehensif tentang kepatuhan GDPR',
          duration: '2-3 minggu',
          difficulty: 'Menengah',
          price: { amount: 0, currency: 'IDR', isFree: true },
          rating: 4.5
        }
      ]
    },
    {
      id: 'emerging-technologies',
      title: '🚀 Teknologi Keamanan Masa Depan',
      description: 'Menguasai teknologi keamanan terkini seperti AI, IoT, dan blockchain',
      duration: '2-3 bulan',
      order: 5,
      prerequisites: ['security-governance'],
      skills: [
        comprehensiveSkills.find(s => s.id === 'ai-security')!,
        comprehensiveSkills.find(s => s.id === 'iot-security')!,
        comprehensiveSkills.find(s => s.id === 'blockchain-security')!
      ],
      materials: [
        {
          id: 'ai-cybersecurity',
          title: 'AI for Cybersecurity',
          type: 'course',
          provider: 'edX',
          description: 'Penerapan AI dalam mendeteksi dan mencegah ancaman siber',
          duration: '6 minggu',
          difficulty: 'Lanjutan',
          price: { amount: 1200000, currency: 'IDR', isFree: false },
          rating: 4.7
        },
        {
          id: 'iot-security-essentials',
          title: 'IoT Security Essentials',
          type: 'course',
          provider: 'Cisco Networking Academy',
          description: 'Keamanan untuk perangkat Internet of Things',
          duration: '4 minggu',
          difficulty: 'Menengah',
          price: { amount: 0, currency: 'IDR', isFree: true },
          rating: 4.4
        }
      ]
    },
    {
      id: 'advanced-certification',
      title: '🏆 Sertifikasi Profesional',
      description: 'Mendapatkan sertifikasi profesional untuk validasi keahlian',
      duration: '2-3 bulan',
      order: 6,
      prerequisites: ['emerging-technologies'],
      skills: [],
      materials: [
        {
          id: 'cissp-cert',
          title: 'Certified Information Systems Security Professional (CISSP)',
          type: 'certification',
          provider: '(ISC)²',
          description: 'Sertifikasi keamanan informasi tingkat lanjut yang diakui global',
          duration: '3-6 bulan',
          difficulty: 'Lanjutan',
          price: { amount: 12000000, currency: 'IDR', isFree: false },
          rating: 4.8
        },
        {
          id: 'ceh-cert',
          title: 'Certified Ethical Hacker (CEH)',
          type: 'certification',
          provider: 'EC-Council',
          description: 'Sertifikasi untuk profesional keamanan yang ingin memahami teknik peretasan etis',
          duration: '2-4 bulan',
          difficulty: 'Menengah',
          price: { amount: 8500000, currency: 'IDR', isFree: false },
          rating: 4.6
        },
        comprehensiveLearningMaterials.find(m => m.id === 'cissp-certification')!
      ]
    }
  ]
};

// Web3 Developer Roadmap
export const web3DeveloperRoadmap: Roadmap = {
  id: 'web3-developer-roadmap',
  jobId: 'web3-developer',
  difficulty: 'Lanjutan',
  totalDuration: '6-12 bulan',
  phases: [
    {
      id: 'blockchain-fundamentals',
      title: '⛓️ Fundamentals Blockchain',
      description: 'Memahami konsep dasar blockchain, cryptocurrency, dan decentralization',
      duration: '2-3 bulan',
      order: 1,
      prerequisites: [],
      skills: [
        comprehensiveSkills.find(s => s.id === 'blockchain-fundamentals')!
      ],
      materials: [
        comprehensiveLearningMaterials.find(m => m.id === 'solidity-documentation')!
      ]
    },
    {
      id: 'smart-contract-development',
      title: '📄 Smart Contract Development',
      description: 'Mengembangkan smart contracts menggunakan Solidity dan frameworks',
      duration: '3-4 bulan',
      order: 2,
      prerequisites: ['blockchain-fundamentals'],
      skills: [
        comprehensiveSkills.find(s => s.id === 'smart-contracts')!
      ],
      materials: [
        comprehensiveLearningMaterials.find(m => m.id === 'consensys-academy')!
      ]
    },
    {
      id: 'defi-dapp-development',
      title: '🏦 DeFi & DApp Development',
      description: 'Membangun aplikasi terdesentralisasi dan protokol DeFi',
      duration: '2-4 bulan',
      order: 3,
      prerequisites: ['smart-contract-development'],
      skills: [
        comprehensiveSkills.find(s => s.id === 'defi-protocols')!
      ],
      materials: []
    }
  ]
};

// AI Ethics Officer Roadmap
export const aiEthicsOfficerRoadmap: Roadmap = {
  id: 'ai-ethics-officer-roadmap',
  jobId: 'ai-ethics-officer',
  difficulty: 'Lanjutan',
  totalDuration: '12-18 bulan',
  phases: [
    {
      id: 'ai-ethics-foundation',
      title: '🧠 Dasar-dasar Etika AI',
      description: 'Memahami prinsip-prinsip etika dalam pengembangan dan penerapan AI',
      duration: '3-4 bulan',
      order: 1,
      prerequisites: [],
      skills: [
        comprehensiveSkills.find(s => s.id === 'ethical-reasoning')!,
        comprehensiveSkills.find(s => s.id === 'critical-thinking')!
      ],
      materials: [
        comprehensiveLearningMaterials.find(m => m.id === 'critical-thinking-course')!
      ]
    },
    {
      id: 'ai-bias-governance',
      title: '⚖️ AI Bias & Governance',
      description: 'Mengidentifikasi bias dalam AI dan mengembangkan framework governance',
      duration: '3-4 bulan',
      order: 2,
      prerequisites: ['ethics-philosophy-foundation'],
      skills: [
        comprehensiveSkills.find(s => s.id === 'ai-bias-detection')!,
        comprehensiveSkills.find(s => s.id === 'policy-development')!
      ],
      materials: []
    },
    {
      id: 'stakeholder-communication',
      title: '🗣️ Komunikasi Stakeholder',
      description: 'Komunikasi efektif dengan technical teams dan business stakeholders',
      duration: '2-4 bulan',
      order: 3,
      prerequisites: [],
      skills: [
        comprehensiveSkills.find(s => s.id === 'communication-technical')!,
        comprehensiveSkills.find(s => s.id === 'collaboration-cross-functional')!
      ],
      materials: [
        comprehensiveLearningMaterials.find(m => m.id === 'technical-communication')!
      ]
    }
  ]
};

// Wind Turbine Technician Roadmap
export const windTurbineTechnicianRoadmap: Roadmap = {
  id: 'wind-turbine-technician-roadmap',
  jobId: 'wind-turbine-technician',
  difficulty: 'Menengah',
  totalDuration: '6-9 bulan',
  phases: [
    {
      id: 'electrical-mechanical-basics',
      title: '⚡ Dasar Elektrikal & Mekanikal',
      description: 'Fundamental sistem elektrikal dan mekanikal untuk wind energy',
      duration: '2-3 bulan',
      order: 1,
      prerequisites: [],
      skills: [
        comprehensiveSkills.find(s => s.id === 'electrical-systems')!,
        comprehensiveSkills.find(s => s.id === 'safety-protocols')!
      ],
      materials: [
        comprehensiveLearningMaterials.find(m => m.id === 'wind-energy-fundamentals')!
      ]
    },
    {
      id: 'wind-energy-specialization',
      title: '🌪️ Spesialisasi Wind Energy',
      description: 'Teknologi wind turbine, maintenance, dan troubleshooting',
      duration: '3-4 bulan',
      order: 2,
      prerequisites: ['electrical-mechanical-basics'],
      skills: [
        comprehensiveSkills.find(s => s.id === 'renewable-energy-systems')!
      ],
      materials: [
        comprehensiveLearningMaterials.find(m => m.id === 'wind-energy-fundamentals')!
      ]
    },
    {
      id: 'safety-certification',
      title: '🦺 Sertifikasi Keselamatan',
      description: 'Sertifikasi safety untuk bekerja di ketinggian dan dengan high voltage',
      duration: '1-2 bulan',
      order: 3,
      prerequisites: ['wind-energy-specialization'],
      skills: [],
      materials: []
    }
  ]
};

// Solar Panel Installer Roadmap
export const solarPanelInstallerRoadmap: Roadmap = {
  id: 'solar-panel-installer-roadmap',
  jobId: 'solar-panel-installer',
  difficulty: 'Menengah',
  totalDuration: '3-6 bulan',
  phases: [
    {
      id: 'solar-fundamentals',
      title: '☀️ Fundamentals Solar Energy',
      description: 'Dasar-dasar teknologi photovoltaic dan sistem solar',
      duration: '1-2 bulan',
      order: 1,
      prerequisites: [],
      skills: [
        comprehensiveSkills.find(s => s.id === 'electrical-systems')!,
        comprehensiveSkills.find(s => s.id === 'renewable-energy-systems')!
      ],
      materials: []
    },
    {
      id: 'installation-techniques',
      title: '🔧 Teknik Instalasi',
      description: 'Praktik instalasi solar panel dan sistem inverter',
      duration: '2-3 bulan',
      order: 2,
      prerequisites: ['solar-fundamentals'],
      skills: [
        comprehensiveSkills.find(s => s.id === 'safety-protocols')!
      ],
      materials: [
        comprehensiveLearningMaterials.find(m => m.id === 'solar-installation-certification')!
      ]
    },
    {
      id: 'certification-customer-service',
      title: '🏆 Sertifikasi & Customer Service',
      description: 'Mendapatkan sertifikasi dan kemampuan customer interaction',
      duration: '1-2 bulan',
      order: 3,
      prerequisites: ['installation-techniques'],
      skills: [],
      materials: [
        comprehensiveLearningMaterials.find(m => m.id === 'solar-installation-certification')!
      ]
    }
  ]
};

// Geriatric Tech Specialist Roadmap
export const geriatricTechSpecialistRoadmap: Roadmap = {
  id: 'geriatric-tech-specialist-roadmap',
  jobId: 'geriatric-tech-specialist',
  difficulty: 'Menengah',
  totalDuration: '9-12 bulan',
  phases: [
    {
      id: 'healthcare-tech-foundation',
      title: '🏥 Fondasi Healthcare Technology',
      description: 'Memahami teknologi kesehatan dan sistem informasi medis',
      duration: '3-4 bulan',
      order: 1,
      prerequisites: [],
      skills: [
        comprehensiveSkills.find(s => s.id === 'healthcare-technology')!
      ],
      materials: [
        comprehensiveLearningMaterials.find(m => m.id === 'healthcare-informatics')!
      ]
    },
    {
      id: 'accessibility-ux-design',
      title: '♿ Accessibility & UX Design',
      description: 'Merancang teknologi yang accessible untuk lansia',
      duration: '3-4 bulan',
      order: 2,
      prerequisites: ['healthcare-tech-foundation'],
      skills: [
        comprehensiveSkills.find(s => s.id === 'accessibility-design')!
      ],
      materials: [
        comprehensiveLearningMaterials.find(m => m.id === 'ux-accessibility')!
      ]
    },
    {
      id: 'empathy-elderly-care',
      title: '❤️ Empathy & Elderly Care',
      description: 'Pengembangan soft skills untuk bekerja dengan lansia',
      duration: '3-4 bulan (paralel)',
      order: 3,
      prerequisites: [],
      skills: [
        comprehensiveSkills.find(s => s.id === 'empathy-elderly-care')!,
        comprehensiveSkills.find(s => s.id === 'communication-technical')!
      ],
      materials: []
    }
  ]
};

// Future Work Strategist Roadmap
export const futureWorkStrategistRoadmap: Roadmap = {
  id: 'future-work-strategist-roadmap',
  jobId: 'future-work-strategist',
  difficulty: 'Lanjutan',
  totalDuration: '12-18 bulan',
  phases: [
    {
      id: 'strategic-thinking-development',
      title: '🎯 Strategic Thinking Development',
      description: 'Mengembangkan kemampuan berpikir strategis dan future forecasting',
      duration: '4-6 bulan',
      order: 1,
      prerequisites: [],
      skills: [
        comprehensiveSkills.find(s => s.id === 'strategic-thinking')!,
        comprehensiveSkills.find(s => s.id === 'future-forecasting')!
      ],
      materials: [
        comprehensiveLearningMaterials.find(m => m.id === 'strategic-thinking-course')!
      ]
    },
    {
      id: 'change-management-mastery',
      title: '🔄 Change Management Mastery',
      description: 'Menguasai teknik mengelola transformasi organisational',
      duration: '4-6 bulan',
      order: 2,
      prerequisites: ['strategic-thinking-development'],
      skills: [
        comprehensiveSkills.find(s => s.id === 'change-management')!
      ],
      materials: [
        comprehensiveLearningMaterials.find(m => m.id === 'change-management-kotter')!
      ]
    },
    {
      id: 'leadership-communication',
      title: '👥 Leadership & Communication',
      description: 'Kepemimpinan dan komunikasi untuk mempengaruhi stakeholder',
      duration: '4-6 bulan (paralel)',
      order: 3,
      prerequisites: [],
      skills: [
        comprehensiveSkills.find(s => s.id === 'communication-technical')!,
        comprehensiveSkills.find(s => s.id === 'collaboration-cross-functional')!
      ],
      materials: [
        comprehensiveLearningMaterials.find(m => m.id === 'technical-communication')!
      ]
    }
  ]
};

// Ecosystem Restoration Specialist Roadmap
export const ecosystemRestorationSpecialistRoadmap: Roadmap = {
  id: 'ecosystem-restoration-specialist-roadmap',
  jobId: 'ecosystem-restoration-specialist',
  difficulty: 'Menengah',
  totalDuration: '12-18 bulan',
  phases: [
    {
      id: 'environmental-science-foundation',
      title: '🌱 Fondasi Environmental Science',
      description: 'Dasar ilmu lingkungan, ekologi, dan biologi konservasi',
      duration: '6-8 bulan',
      order: 1,
      prerequisites: [],
      skills: [
        comprehensiveSkills.find(s => s.id === 'environmental-science')!
      ],
      materials: [
        comprehensiveLearningMaterials.find(m => m.id === 'environmental-science-yale')!
      ]
    },
    {
      id: 'gis-monitoring-tools',
      title: '🗺️ GIS & Monitoring Tools',
      description: 'Geographic Information Systems untuk environmental monitoring',
      duration: '3-4 bulan',
      order: 2,
      prerequisites: ['environmental-science-foundation'],
      skills: [
        comprehensiveSkills.find(s => s.id === 'gis-remote-sensing')!
      ],
      materials: [
        comprehensiveLearningMaterials.find(m => m.id === 'gis-arcgis-course')!
      ]
    },
    {
      id: 'project-management-environmental',
      title: '📊 Environmental Project Management',
      description: 'Mengelola proyek restorasi dengan stakeholder dan communities',
      duration: '3-6 bulan',
      order: 3,
      prerequisites: ['gis-monitoring-tools'],
      skills: [
        comprehensiveSkills.find(s => s.id === 'project-management-environmental')!
      ],
      materials: [
        comprehensiveLearningMaterials.find(m => m.id === 'project-management-pmp')!
      ]
    }
  ]
};

// Data Entry Clerk Roadmap
export const dataEntryClerkRoadmap: Roadmap = {
  id: 'data-entry-clerk-roadmap',
  jobId: 'data-entry-clerk',
  difficulty: 'Pemula',
  totalDuration: '3-6 bulan',
  phases: [
    {
      id: 'office-software-basics',
      title: '🖥️ Dasar Software Perkantoran',
      description: 'Mempelajari penggunaan Microsoft Office dan Google Suite untuk pengolahan data',
      duration: '1-2 bulan',
      order: 1,
      prerequisites: [],
      skills: [
        comprehensiveSkills.find(s => s.id === 'microsoft-office-suite')!,
        comprehensiveSkills.find(s => s.id === 'data-management-basics')!
      ],
      materials: []
    },
    {
      id: 'data-accuracy-efficiency',
      title: '📊 Akurasi dan Efisiensi Data',
      description: 'Mengembangkan kemampuan ketelitian dan teknik efisiensi dalam entry data',
      duration: '1-2 bulan',
      order: 2,
      prerequisites: ['office-software-basics'],
      skills: [
        comprehensiveSkills.find(s => s.id === 'accuracy-attention-detail')!,
        comprehensiveSkills.find(s => s.id === 'basic-automation')!
      ],
      materials: []
    },
    {
      id: 'advanced-systems-integration',
      title: '🔗 Integrasi Sistem Lanjutan',
      description: 'Mengenal ERP systems dan integrasi data dalam operasional perusahaan',
      duration: '1-2 bulan',
      order: 3,
      prerequisites: ['data-accuracy-efficiency'],
      skills: [
        comprehensiveSkills.find(s => s.id === 'erp-systems-basics')!
      ],
      materials: []
    }
  ]
};

// Telemarketer Roadmap
export const telemarketerRoadmap: Roadmap = {
  id: 'telemarketer-roadmap',
  jobId: 'telemarketer',
  difficulty: 'Pemula',
  totalDuration: '3-6 bulan',
  phases: [
    {
      id: 'sales-communication-basics',
      title: '📞 Dasar Komunikasi dan Penjualan',
      description: 'Mempelajari teknik penjualan dasar dan komunikasi persuasif melalui telepon',
      duration: '1-2 bulan',
      order: 1,
      prerequisites: [],
      skills: [
        comprehensiveSkills.find(s => s.id === 'sales-techniques')!,
        comprehensiveSkills.find(s => s.id === 'communication-skills-telemarketing')!
      ],
      materials: []
    },
    {
      id: 'crm-customer-relationship',
      title: '👥 Manajemen Hubungan Pelanggan',
      description: 'Menggunakan CRM software dan membangun hubungan jangka panjang dengan pelanggan',
      duration: '1-2 bulan',
      order: 2,
      prerequisites: ['sales-communication-basics'],
      skills: [
        comprehensiveSkills.find(s => s.id === 'crm-software')!,
        comprehensiveSkills.find(s => s.id === 'customer-relationship-management')!
      ],
      materials: []
    },
    {
      id: 'negotiation-closure',
      title: '🤝 Negosiasi dan Penutupan',
      description: 'Teknik negosiasi lanjutan dan mengelola penolakan untuk meningkatkan konversi',
      duration: '1-2 bulan',
      order: 3,
      prerequisites: ['crm-customer-relationship'],
      skills: [
        comprehensiveSkills.find(s => s.id === 'negotiation-skills')!
      ],
      materials: []
    }
  ]
};

// Bank Teller Roadmap
export const bankTellerRoadmap: Roadmap = {
  id: 'bank-teller-roadmap',
  jobId: 'bank-teller',
  difficulty: 'Pemula',
  totalDuration: '3-6 bulan',
  phases: [
    {
      id: 'banking-operations-basics',
      title: '🏦 Dasar Operasional Perbankan',
      description: 'Mempelajari transaksi keuangan dasar dan penggunaan software perbankan',
      duration: '1-2 bulan',
      order: 1,
      prerequisites: [],
      skills: [
        comprehensiveSkills.find(s => s.id === 'financial-transactions')!,
        comprehensiveSkills.find(s => s.id === 'banking-software')!
      ],
      materials: []
    },
    {
      id: 'customer-service-cash-handling',
      title: '💰 Layanan Pelanggan dan Penanganan Uang',
      description: 'Mengembangkan kemampuan customer service dan penanganan uang tunai yang akurat',
      duration: '1-2 bulan',
      order: 2,
      prerequisites: ['banking-operations-basics'],
      skills: [
        comprehensiveSkills.find(s => s.id === 'customer-service-banking')!,
        comprehensiveSkills.find(s => s.id === 'cash-handling')!
      ],
      materials: []
    },
    {
      id: 'compliance-professionalism',
      title: '⚖️ Kepatuhan dan Profesionalisme',
      description: 'Pemahaman regulasi perbankan dan etika kerja dalam layanan keuangan',
      duration: '1-2 bulan',
      order: 3,
      prerequisites: ['customer-service-cash-handling'],
      skills: [
        comprehensiveSkills.find(s => s.id === 'regulatory-compliance-banking')!
      ],
      materials: []
    }
  ]
};

// Content Writer (Entry Level) Roadmap
export const contentWriterEntryLevelRoadmap: Roadmap = {
  id: 'content-writer-entry-level-roadmap',
  jobId: 'content-writer-entry-level',
  difficulty: 'Pemula',
  totalDuration: '4-8 bulan',
  phases: [
    {
      id: 'writing-fundamentals',
      title: '✍️ Dasar-dasar Penulisan',
      description: 'Mempelajari teknik menulis, tata bahasa, dan storytelling dasar',
      duration: '2-3 bulan',
      order: 1,
      prerequisites: [],
      skills: [
        comprehensiveSkills.find(s => s.id === 'writing-skills')!,
        comprehensiveSkills.find(s => s.id === 'grammar-editing')!
      ],
      materials: []
    },
    {
      id: 'seo-content-optimization',
      title: '🔍 SEO dan Optimasi Konten',
      description: 'Pengenalan SEO, riset pasar, dan optimasi konten untuk digital platforms',
      duration: '1-2 bulan',
      order: 2,
      prerequisites: ['writing-fundamentals'],
      skills: [
        comprehensiveSkills.find(s => s.id === 'seo-basics')!,
        comprehensiveSkills.find(s => s.id === 'research-skills')!
      ],
      materials: []
    },
    {
      id: 'content-management-publishing',
      title: '📝 Manajemen dan Publikasi Konten',
      description: 'Menggunakan CMS dan strategi distribusi konten untuk berbagai platform',
      duration: '1-3 bulan',
      order: 3,
      prerequisites: ['seo-content-optimization'],
      skills: [
        comprehensiveSkills.find(s => s.id === 'content-management-systems')!
      ],
      materials: []
    }
  ]
};

// AI Workforce Trainer Roadmap (Berdasarkan dokumen Future Skills 2030)
export const aiWorkforceTrainerRoadmap: Roadmap = {
  id: 'ai-workforce-trainer-roadmap',
  jobId: 'ai-workforce-trainer',
  difficulty: 'Menengah',
  totalDuration: '8-12 bulan',
  phases: [
    {
      id: 'ai-literacy-foundation',
      title: '🤖 Fondasi AI Literacy',
      description: 'Memahami dasar-dasar AI, kemampuan, dan batasan untuk dapat mengajar orang lain',
      duration: '3-4 bulan',
      order: 1,
      prerequisites: [],
      skills: [
        comprehensiveSkills.find(s => s.id === 'ai-literacy')!,
        comprehensiveSkills.find(s => s.id === 'human-ai-collaboration')!
      ],
      materials: [
        comprehensiveLearningMaterials.find(m => m.id === 'ai-literacy-course')!,
        comprehensiveLearningMaterials.find(m => m.id === 'future-skills-2030-course')!
      ]
    },
    {
      id: 'training-pedagogy',
      title: '👨‍🏫 Pedagogi & Metodologi Pelatihan',
      description: 'Mengembangkan kemampuan mengajar dan merancang kurikulum pelatihan AI',
      duration: '2-3 bulan',
      order: 2,
      prerequisites: ['ai-literacy-foundation'],
      skills: [
        comprehensiveSkills.find(s => s.id === 'communication-technical')!,
        comprehensiveSkills.find(s => s.id === 'lifelong-learning')!
      ],
      materials: [
        comprehensiveLearningMaterials.find(m => m.id === 'technical-communication')!
      ]
    },
    {
      id: 'change-management-skills',
      title: '🔄 Change Management untuk AI Adoption',
      description: 'Membantu organisasi mengatasi resistensi dan mengadopsi AI secara efektif',
      duration: '3-5 bulan',
      order: 3,
      prerequisites: ['training-pedagogy'],
      skills: [
        comprehensiveSkills.find(s => s.id === 'change-management')!,
        comprehensiveSkills.find(s => s.id === 'adaptability-resilience')!
      ],
      materials: [
        comprehensiveLearningMaterials.find(m => m.id === 'change-management-kotter')!
      ]
    }
  ]
};

// Human-Machine Team Manager Roadmap (Berdasarkan dokumen Future Skills 2030)
export const humanMachineTeamManagerRoadmap: Roadmap = {
  id: 'human-machine-team-manager-roadmap',
  jobId: 'human-machine-team-manager',
  difficulty: 'Lanjutan',
  totalDuration: '10-15 bulan',
  phases: [
    {
      id: 'futures-thinking-systems',
      title: '🔮 Futures Thinking & Systems Thinking',
      description: 'Mengembangkan kemampuan berpikir strategis tentang masa depan kerja dan sistem yang kompleks',
      duration: '3-4 bulan',
      order: 1,
      prerequisites: [],
      skills: [
        comprehensiveSkills.find(s => s.id === 'futures-thinking')!,
        comprehensiveSkills.find(s => s.id === 'systems-thinking')!,
        comprehensiveSkills.find(s => s.id === 'strategic-thinking')!
      ],
      materials: [
        comprehensiveLearningMaterials.find(m => m.id === 'futures-thinking-workshop')!,
        comprehensiveLearningMaterials.find(m => m.id === 'strategic-thinking-course')!
      ]
    },
    {
      id: 'ai-human-collaboration',
      title: '🤝 AI-Human Collaboration Design',
      description: 'Merancang workflow yang optimal antara manusia dan AI dalam team environment',
      duration: '3-4 bulan',
      order: 2,
      prerequisites: ['futures-thinking-systems'],
      skills: [
        comprehensiveSkills.find(s => s.id === 'human-ai-collaboration')!,
        comprehensiveSkills.find(s => s.id === 'ai-literacy')!
      ],
      materials: [
        comprehensiveLearningMaterials.find(m => m.id === 'ai-literacy-course')!
      ]
    },
    {
      id: 'team-leadership-innovation',
      title: '👥 Team Leadership & Innovation Management',
      description: 'Memimpin tim hybrid manusia-AI dan mendorong inovasi berkelanjutan',
      duration: '4-7 bulan',
      order: 3,
      prerequisites: ['ai-human-collaboration'],
      skills: [
        comprehensiveSkills.find(s => s.id === 'creative-thinking-innovation')!,
        comprehensiveSkills.find(s => s.id === 'collaboration-cross-functional')!,
        comprehensiveSkills.find(s => s.id === 'adaptability-resilience')!
      ],
      materials: [
        comprehensiveLearningMaterials.find(m => m.id === 'change-management-kotter')!,
        comprehensiveLearningMaterials.find(m => m.id === 'project-management-pmp')!
      ]
    }
  ]
};

// Export comprehensive roadmaps
export const comprehensiveRoadmaps: Record<string, Roadmap> = {
  'data-scientist': dataScientistRoadmap,
  'ai-ml-specialist': aiMLSpecialistRoadmap,
  'cybersecurity-analyst': cybersecurityAnalystRoadmap,
  'data-entry-clerk': dataEntryClerkRoadmap,
  'telemarketer': telemarketerRoadmap,
  'bank-teller': bankTellerRoadmap,
  'content-writer-entry-level': contentWriterEntryLevelRoadmap,
  'web3-developer': web3DeveloperRoadmap,
  'ai-ethics-officer': aiEthicsOfficerRoadmap,
  'wind-turbine-technician': windTurbineTechnicianRoadmap,
  'solar-panel-installer': solarPanelInstallerRoadmap,
  'geriatric-tech-specialist': geriatricTechSpecialistRoadmap,
  'future-work-strategist': futureWorkStrategistRoadmap,
  'ecosystem-restoration-specialist': ecosystemRestorationSpecialistRoadmap,
  'ai-workforce-trainer': aiWorkforceTrainerRoadmap,
  'human-machine-team-manager': humanMachineTeamManagerRoadmap
};