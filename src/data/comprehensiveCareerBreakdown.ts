import { Job, Skill, LearningMaterial } from './skillForecastingTypes';
import { CoreConcept, MasteryGoal, PracticalProject } from '@/types/blueprint';

// =============================================
// COMPREHENSIVE CAREER SKILLS BREAKDOWN
// Format: Blueprint Karir untuk setiap profesi
// =============================================

export interface CareerBlueprint {
  profession: string;
  category: string;
  aiRisk: number;
  riskLevel: string;
  salaryRange: string;
  growth: string;
  timeline: string;
  summary: string;
  phases: BlueprintPhase[];
  keyInsights: string[];
  marketDrivers: string[];
  transitionPaths?: string[];
}

export interface BlueprintPhase {
  phase: string;
  title: string;
  duration: string;
  objective: string;
  skills: BlueprintSkill[];
}

export interface BlueprintSkill {
  icon: string;
  type: 'Hard Skill' | 'Soft Skill';
  name: string;
  importance: number;
  timeToMaster: string;
  description?: string; // Made optional for transition
  concepts?: string[]; // Made optional for transition
  learningPath?: string;
  aiProofLevel?: number;
  coreConcepts?: CoreConcept[];
  masteryGoals?: MasteryGoal[];
  practicalProjects?: PracticalProject[];
}

// =============================================
// PEKERJAAN BERISIKO TINGGI (DISAPPEARING JOBS)
// =============================================

export const disappearingJobsBlueprints: CareerBlueprint[] = [
  {
    profession: "Data Entry Clerk",
    category: "Bisnis & Manajemen",
    aiRisk: 92,
    riskLevel: "Risiko Sangat Tinggi",
    salaryRange: "Rp 3-5 juta",
    growth: "Menurun",
    timeline: "2024-2026",
    summary: "Pekerjaan ini akan 92% tergantikan oleh RPA dan AI automation. Transisi ke Data Analyst atau Process Automation Specialist adalah jalur terbaik untuk survival.",
    phases: [
      {
        phase: "FASE 1: TRANSITION PREPARATION",
        title: "Persiapan Transisi ke Data Analysis",
        duration: "2-3 bulan",
        objective: "Membangun fondasi untuk beralih ke pekerjaan yang lebih aman dari AI",
        skills: [
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Excel Advanced",
            importance: 9,
            timeToMaster: "1-2 bulan",
            description: "Pivot tables, VLOOKUP, macros untuk data processing yang kompleks",
            concepts: ["Pivot Tables", "Advanced Formulas", "Data Validation", "Macros & VBA"]
          },
          {
            icon: "🛠️",
            type: "Hard Skill", 
            name: "SQL Fundamentals",
            importance: 10,
            timeToMaster: "2-3 bulan",
            description: "Database queries untuk mengambil dan menganalisis data",
            concepts: ["SELECT statements", "JOINs", "GROUP BY", "Basic functions"]
          },
          {
            icon: "🧠",
            type: "Soft Skill",
            name: "Analytical Thinking",
            importance: 8,
            timeToMaster: "3-6 bulan",
            description: "Kemampuan menganalisis pola dalam data dan mengambil insights",
            concepts: ["Pattern Recognition", "Logical Reasoning", "Data Interpretation"],
            aiProofLevel: 85
          }
        ]
      }
    ],
    keyInsights: [
      "92% kemungkinan tergantikan oleh AI dan RPA dalam 2-3 tahun",
      "Transisi ke Data Analyst dapat meningkatkan gaji 100-200%",
      "Skills yang sudah ada (attention to detail) tetap valuable"
    ],
    marketDrivers: [
      "Automation technology semakin murah dan accessible",
      "Companies prioritize cost reduction melalui automation"
    ],
    transitionPaths: ["Data Analyst", "Process Automation Specialist", "Quality Assurance Analyst"]
  },

  {
    profession: "Telemarketer",
    category: "Bisnis & Manajemen", 
    aiRisk: 85,
    riskLevel: "Risiko Sangat Tinggi",
    salaryRange: "Rp 3.5-6 juta",
    growth: "Menurun",
    timeline: "2024-2027",
    summary: "AI Voice Agents dan chatbots akan menggantikan 85% fungsi telemarketing. Transisi ke Digital Marketing atau Customer Success adalah jalur survival terbaik.",
    phases: [
      {
        phase: "FASE 1: DIGITAL MARKETING TRANSITION",
        title: "Beralih ke Digital Marketing",
        duration: "3-4 bulan",
        objective: "Menggunakan communication skills untuk digital channels",
        skills: [
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Digital Marketing Fundamentals",
            importance: 9,
            timeToMaster: "2-3 bulan", 
            description: "Social media marketing, email campaigns, content marketing basics",
            concepts: ["Social Media Strategy", "Email Marketing", "Content Creation", "Analytics"]
          },
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "CRM & Sales Tools",
            importance: 8,
            timeToMaster: "1-2 bulan",
            description: "HubSpot, Salesforce, customer relationship management",
            concepts: ["Lead Management", "Sales Funnels", "Customer Segmentation", "Automation"]
          },
          {
            icon: "🧠",
            type: "Soft Skill",
            name: "Persuasive Communication",
            importance: 10,
            timeToMaster: "Ongoing",
            description: "Kemampuan komunikasi persuasif yang sudah dimiliki, diterapkan ke digital",
            concepts: ["Digital Persuasion", "Copywriting", "Customer Psychology"],
            aiProofLevel: 90
          }
        ]
      }
    ],
    keyInsights: [
      "Communication skills tetap valuable di digital marketing",
      "Customer psychology understanding tidak bisa digantikan AI",
      "Transisi relatif mudah karena transferable skills"
    ],
    marketDrivers: [
      "AI voice agents semakin sophisticated",
      "Companies prefer automated customer outreach"
    ],
    transitionPaths: ["Digital Marketing Specialist", "Customer Success Manager", "Sales Development Representative"]
  }
];

// =============================================
// PEKERJAAN MASA DEPAN (FUTURE JOBS)
// =============================================

export const futureJobsBlueprints: CareerBlueprint[] = [
  {
    profession: "AI/Machine Learning Specialist",
    category: "Teknologi & AI",
    aiRisk: 5,
    riskLevel: "Risiko Sangat Rendah",
    salaryRange: "Rp 120-250 juta",
    growth: "Sangat Tinggi",
    timeline: "12-18 bulan",
    summary: "Arsitek ekonomi berbasis kecerdasan buatan. Merancang, membangun, dan menerapkan model ML yang menjadi inti produk dan layanan. Pertumbuhan demand 26% per tahun dengan salary premium hingga 300%.",
    phases: [
      {
        phase: "FASE 1: FONDASI MATEMATIKA & PEMROGRAMAN",
        title: "Fondasi Matematika & Pemrograman",
        duration: "3-4 bulan",
        objective: "Membangun fondasi matematika dan pemrograman yang kuat untuk AI/ML.",
        skills: [
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Mathematical Modeling",
            importance: 10,
            timeToMaster: "6-12 bulan",
            description: "Menguasai aljabar linear, kalkulus, dan statistik inferensial.",
            concepts: ["Linear Algebra", "Calculus", "Statistics"]
          },
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Python (Advanced)",
            importance: 10,
            timeToMaster: "4-8 bulan",
            description: "Menggunakan NumPy, Pandas, dan Scikit-learn untuk pengembangan AI.",
            concepts: ["NumPy", "Pandas", "Scikit-learn"]
          }
        ]
      },
      {
        phase: "FASE 2: MACHINE LEARNING & DEEP LEARNING",
        title: "Machine Learning & Deep Learning",
        duration: "4-6 bulan",
        objective: "Menguasai algoritma machine learning dan arsitektur deep learning.",
        skills: [
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Machine Learning Algorithms",
            importance: 10,
            timeToMaster: "6-12 bulan",
            description: "Menguasai supervised, unsupervised, dan reinforcement learning.",
            concepts: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning"]
          },
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Deep Learning",
            importance: 10,
            timeToMaster: "6-12 bulan",
            description: "Menggunakan TensorFlow atau PyTorch untuk membangun neural networks.",
            concepts: ["TensorFlow", "PyTorch", "Neural Networks"]
          }
        ]
      },
      {
        phase: "FASE 3: SPESIALISASI & MLOps",
        title: "Spesialisasi & MLOps",
        duration: "3-4 bulan",
        objective: "Menguasai spesialisasi seperti NLP atau Computer Vision dan praktik MLOps.",
        skills: [
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Natural Language Processing (NLP)",
            importance: 9,
            timeToMaster: "6-12 bulan",
            description: "Mengolah dan menganalisis data teks dengan model seperti Transformers.",
            concepts: ["NLP", "Transformers"]
          },
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "MLOps",
            importance: 8,
            timeToMaster: "4-6 bulan",
            description: "Mengelola siklus hidup model machine learning dari pengembangan hingga produksi.",
            concepts: ["Model Deployment", "CI/CD for ML"]
          }
        ]
      }
    ],
    keyInsights: [
      "Pertumbuhan permintaan 26% per tahun hingga 2033",
      "Talenta papan atas bisa mencapai $500,000-$2,000,000 per tahun",
      "Dibutuhkan di hampir semua industri: finance, healthcare, e-commerce",
      "Menjadi arsitek ekonomi berbasis kecerdasan buatan"
    ],
    marketDrivers: [
      "AI adoption across all industries",
      "Massive investment in AI research and development",
      "Critical shortage of qualified AI talent globally"
    ]
  },

  {
    profession: "Data Scientist",
    category: "Data & Analytics",
    aiRisk: 12,
    riskLevel: "Risiko Rendah",
    salaryRange: "Rp 120-200 juta",
    growth: "Sangat Tinggi",
    timeline: "18-24 bulan",
    summary: "Pekerjaan paling dicari di abad ke-21 yang menggabungkan keahlian matematika, pemrograman, dan bisnis. Dengan roadmap yang diperbarui, Anda akan menguasai teknologi Big Data, Cloud, dan AI tingkat lanjut untuk menjadi pemimpin di industri data.",
    phases: [
      {
        phase: "FASE 1: MATHEMATICS & STATISTICS FOUNDATIONS",
        title: "Fondasi Matematika & Statistik",
        duration: "3-4 bulan",
        objective: "Membangun fondasi matematis yang kuat untuk ilmu data.",
        skills: [
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Statistika Inferensial",
            importance: 10,
            timeToMaster: "3-6 bulan",
            coreConcepts: [
              {
                title: "Hypothesis Testing",
                description: "Kerangka kerja statistik untuk menguji asumsi (hipotesis) tentang suatu populasi berdasarkan data sampel."
              },
              {
                title: "A/B Testing",
                description: "Metode eksperimen untuk membandingkan dua versi (A dan B) untuk menentukan mana yang berkinerja lebih baik."
              },
              {
                title: "Confidence Intervals",
                description: "Rentang nilai yang kemungkinan besar berisi parameter populasi yang sebenarnya, memberikan ukuran ketidakpastian."
              }
            ],
            masteryGoals: [
              { id: "ds-si-1", description: "Mampu menjelaskan perbedaan antara hipotesis nol dan hipotesis alternatif." },
              { id: "ds-si-2", description: "Mampu menghitung dan menginterpretasikan p-value dalam konteks uji hipotesis." },
              { id: "ds-si-3", description: "Mampu merancang, menjalankan, dan menganalisis hasil A/B test sederhana." },
              { id: "ds-si-4", description: "Mampu membangun dan menjelaskan arti dari confidence interval 95% untuk mean populasi." }
            ],
            practicalProjects: [
              {
                title: "Analisis Kampanye Pemasaran",
                description: "Gunakan A/B testing pada dataset kampanye email untuk menentukan baris subjek mana yang menghasilkan open rate lebih tinggi secara signifikan.",
                link: "https://www.kaggle.com/datasets/faviovaz/marketing-ab-testing"
              }
            ]
          },
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Teori Probabilitas",
            importance: 9,
            timeToMaster: "3-6 bulan",
            description: "Memahami distribusi probabilitas dan teorema Bayes.",
            concepts: ["Probability Distributions", "Bayes' Theorem"]
          },
          {
            icon: "🧠",
            type: "Soft Skill",
            name: "Analytical Thinking",
            importance: 10,
            timeToMaster: "6-12 bulan",
            description: "Kemampuan memecah masalah kompleks menjadi komponen yang dapat dianalisis.",
            concepts: ["Problem Decomposition", "Pattern Recognition"]
          }
        ]
      },
      {
        phase: "FASE 2: PROGRAMMING & DATA MANIPULATION",
        title: "Pemrograman & Manipulasi Data",
        duration: "2-3 bulan",
        objective: "Menguasai Python dan SQL untuk analisis data.",
        skills: [
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Python (Advanced)",
            importance: 10,
            timeToMaster: "3-6 bulan",
            description: "Menggunakan Pandas, NumPy, dan Scikit-learn untuk analisis data.",
            concepts: ["Pandas", "NumPy", "Scikit-learn"]
          },
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "SQL (Advanced)",
            importance: 9,
            timeToMaster: "2-4 bulan",
            description: "Menguasai query kompleks dan window functions.",
            concepts: ["Complex Queries", "Window Functions"]
          }
        ]
      },
      {
        phase: "FASE 3: EXPLORATORY DATA ANALYSIS & VISUALIZATION",
        title: "Analisis Data Eksploratif & Visualisasi",
        duration: "2-3 bulan",
        objective: "Menguasai teknik analisis data dan storytelling dengan visualisasi.",
        skills: [
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Data Visualization",
            importance: 8,
            timeToMaster: "2-4 bulan",
            description: "Menggunakan Matplotlib, Seaborn, dan Tableau untuk visualisasi data.",
            concepts: ["Matplotlib", "Seaborn", "Tableau"]
          },
          {
            icon: "🧠",
            type: "Soft Skill",
            name: "Data Storytelling",
            importance: 10,
            timeToMaster: "4-8 bulan",
            description: "Menyampaikan wawasan data dalam narasi yang menarik.",
            concepts: ["Narrative Structure", "Visual Communication"]
          }
        ]
      },
      {
        phase: "FASE 4: MACHINE LEARNING & MODEL BUILDING",
        title: "Machine Learning & Pembuatan Model",
        duration: "3-4 bulan",
        objective: "Menguasai algoritma supervised dan unsupervised learning.",
        skills: [
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Supervised Learning",
            importance: 10,
            timeToMaster: "4-8 bulan",
            description: "Menguasai algoritma regresi, klasifikasi, dan ensemble.",
            concepts: ["Regression", "Classification", "Ensemble Methods"]
          },
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Unsupervised Learning",
            importance: 8,
            timeToMaster: "3-6 bulan",
            description: "Menguasai clustering dan dimensionality reduction.",
            concepts: ["Clustering", "Dimensionality Reduction"]
          }
        ]
      },
      {
        phase: "FASE 5: BIG DATA & CLOUD TECHNOLOGIES",
        title: "Big Data & Teknologi Cloud",
        duration: "3-4 bulan",
        objective: "Mengolah data dalam skala besar dengan teknologi cloud.",
        skills: [
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Big Data Processing",
            importance: 8,
            timeToMaster: "4-6 bulan",
            description: "Menggunakan Apache Spark untuk pemrosesan data terdistribusi.",
            concepts: ["Apache Spark", "Distributed Computing"]
          },
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Cloud Computing",
            importance: 8,
            timeToMaster: "3-5 bulan",
            description: "Menggunakan AWS atau GCP untuk pipeline data.",
            concepts: ["AWS", "GCP", "Data Pipelines"]
          }
        ]
      },
      {
        phase: "FASE 6: ADVANCED MACHINE LEARNING & AI",
        title: "Machine Learning Lanjutan & AI",
        duration: "4-5 bulan",
        objective: "Menguasai teknik machine learning lanjutan dan deep learning.",
        skills: [
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Deep Learning",
            importance: 9,
            timeToMaster: "6-12 bulan",
            description: "Menggunakan TensorFlow atau PyTorch untuk neural networks.",
            concepts: ["TensorFlow", "PyTorch", "Neural Networks"]
          },
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "MLOps",
            importance: 8,
            timeToMaster: "4-6 bulan",
            description: "Mengelola siklus hidup model machine learning.",
            concepts: ["Model Deployment", "CI/CD for ML"]
          }
        ]
      },
      {
        phase: "FASE 7: BUSINESS APPLICATION & COMMUNICATION",
        title: "Aplikasi Bisnis & Komunikasi",
        duration: "3-4 bulan",
        objective: "Mengaplikasikan ilmu data untuk menyelesaikan masalah bisnis nyata.",
        skills: [
          {
            icon: "🧠",
            type: "Soft Skill",
            name: "Business Acumen",
            importance: 9,
            timeToMaster: "6-12 bulan",
            description: "Memahami konteks bisnis dan dampak dari keputusan berbasis data.",
            concepts: ["Business Context", "ROI Analysis"]
          },
          {
            icon: "🧠",
            type: "Soft Skill",
            name: "Stakeholder Management",
            importance: 8,
            timeToMaster: "6-12 bulan",
            description: "Mengelola ekspektasi dan persyaratan dari berbagai pemangku kepentingan.",
            concepts: ["Expectation Management", "Cross-functional Communication"]
          }
        ]
      }
    ],
    keyInsights: [
      "Disebut 'Pekerjaan Paling Dicari Abad ke-21' oleh Harvard Business Review.",
      "Pertumbuhan pekerjaan 22% dari 2020-2030 (5x lebih cepat dari rata-rata).",
      "Menggabungkan keahlian matematika, pemrograman, dan bisnis.",
      "AI akan menjadi alat yang memperkuat, bukan menggantikan."
    ],
    marketDrivers: [
      "Pengambilan keputusan berbasis data menjadi standar.",
      "Ledakan Big Data di semua industri.",
      "Kebutuhan akan etika AI dan AI yang dapat dijelaskan."
    ]
  },

  {
    profession: "Cybersecurity Analyst",
    category: "Teknologi & AI",
    aiRisk: 10,
    riskLevel: "Risiko Rendah", 
    salaryRange: "Rp 95-160 juta",
    growth: "Sangat Tinggi",
    timeline: "2025-2040",
    summary: "Guardian digital era dengan pertumbuhan 31% per tahun. Menggabungkan technical expertise dengan human intuition untuk melindungi dari cyber threats yang semakin sophisticated.",
    phases: [
      {
        phase: "FASE 1: SECURITY FUNDAMENTALS",
        title: "Dasar-dasar Keamanan Informasi",
        duration: "2-3 bulan",
        objective: "Memahami threat landscape dan security principles",
        skills: [
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Network Security",
            importance: 9,
            timeToMaster: "4-8 bulan",
            description: "Firewall configuration, IDS/IPS, network protocols",
            concepts: ["Network Protocols", "Firewall Rules", "Intrusion Detection", "Traffic Analysis"],
            learningPath: "Cybrary Free Cybersecurity Courses"
          },
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Security Frameworks",
            importance: 7,
            timeToMaster: "2-4 bulan",
            description: "NIST, ISO 27001, COBIT untuk governance keamanan",
            concepts: ["Risk Assessment", "Compliance", "Security Policies", "Audit Procedures"]
          },
          {
            icon: "🧠",
            type: "Soft Skill",
            name: "Critical Thinking",
            importance: 10,
            timeToMaster: "6-12 bulan",
            description: "Analytical reasoning untuk threat assessment dan investigation",
            concepts: ["Threat Analysis", "Evidence Evaluation", "Risk Assessment"],
            aiProofLevel: 95
          }
        ]
      },
      {
        phase: "FASE 2: THREAT ANALYSIS & RESPONSE",
        title: "Advanced Security Operations",
        duration: "2-3 bulan",
        objective: "Kemampuan mengidentifikasi dan merespons cyber attacks",
        skills: [
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Penetration Testing",
            importance: 9,
            timeToMaster: "6-12 bulan",
            description: "Ethical hacking untuk mengidentifikasi vulnerabilities",
            concepts: ["Vulnerability Assessment", "Exploit Development", "Security Testing", "Report Writing"],
            learningPath: "Certified Ethical Hacker (CEH)"
          },
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Incident Response",
            importance: 8,
            timeToMaster: "3-6 bulan",
            description: "Forensic investigation dan crisis management protocols",
            concepts: ["Digital Forensics", "Incident Handling", "Evidence Collection", "Recovery Procedures"]
          },
          {
            icon: "🧠",
            type: "Soft Skill",
            name: "Crisis Management",
            importance: 9,
            timeToMaster: "6-12 bulan",
            description: "Decision making under pressure dan team coordination",
            concepts: ["Emergency Response", "Team Coordination", "Communication Under Pressure"],
            aiProofLevel: 90
          }
        ]
      }
    ],
    keyInsights: [
      "Pertumbuhan 31% per tahun (5x lebih cepat dari rata-rata)",
      "Global talent shortage: 3.5 juta positions kosong",
      "Remote work meningkatkan demand 300%",
      "Human intuition crucial untuk threat detection"
    ],
    marketDrivers: [
      "Increasing cyber threats dan sophisticated attacks",
      "Digital transformation acceleration",
      "Regulatory compliance requirements"
    ]
  },

  {
    profession: "Web3 Developer",
    category: "Teknologi & AI",
    aiRisk: 8,
    riskLevel: "Risiko Rendah",
    salaryRange: "Rp 120-250 juta", 
    growth: "Tinggi",
    timeline: "2025-2040",
    summary: "Arsitek ekonomi terdesentralisasi. Membangun aplikasi blockchain yang akan mendefinisikan internet masa depan dengan salary premium setara AI specialists.",
    phases: [
      {
        phase: "FASE 1: BLOCKCHAIN FUNDAMENTALS",
        title: "Dasar-dasar Teknologi Blockchain",
        duration: "2-3 bulan",
        objective: "Memahami konsep decentralization dan cryptocurrency",
        skills: [
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Blockchain Fundamentals",
            importance: 10,
            timeToMaster: "3-6 bulan",
            description: "Distributed ledgers, consensus mechanisms, cryptocurrency economics",
            concepts: ["Consensus Algorithms", "Cryptographic Hashing", "Decentralization", "Token Economics"],
            learningPath: "Blockchain Basics - Coursera"
          },
          {
            icon: "🧠",
            type: "Soft Skill",
            name: "Innovation Mindset",
            importance: 9,
            timeToMaster: "6-12 bulan",
            description: "Kemampuan berpikir di luar paradigma traditional finance",
            concepts: ["Disruptive Thinking", "Future Visioning", "Technology Adoption"],
            aiProofLevel: 85
          }
        ]
      },
      {
        phase: "FASE 2: SMART CONTRACT DEVELOPMENT",
        title: "Programming Blockchain Applications",
        duration: "3-4 bulan",
        objective: "Mengembangkan smart contracts dan DApps",
        skills: [
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Smart Contract Programming",
            importance: 10,
            timeToMaster: "4-8 bulan",
            description: "Solidity, Web3.js, Ethereum development ecosystem",
            concepts: ["Solidity Programming", "Gas Optimization", "Security Patterns", "Testing Frameworks"],
            learningPath: "ConsenSys Academy Blockchain Developer Program"
          },
          {
            icon: "🧠",
            type: "Soft Skill",
            name: "Security Consciousness",
            importance: 10,
            timeToMaster: "6-12 bulan",
            description: "Mindset keamanan untuk financial applications",
            concepts: ["Security First Thinking", "Risk Assessment", "Audit Mindset"],
            aiProofLevel: 90
          }
        ]
      }
    ],
    keyInsights: [
      "Pertumbuhan pesat ekosistem blockchain dan DeFi",
      "Salary kompetitif setara dengan AI specialists",
      "Membutuhkan pemahaman cryptography dan economics",
      "High demand untuk security-focused developers"
    ],
    marketDrivers: [
      "Institutional adoption of blockchain technology",
      "DeFi ecosystem expansion",
      "Web3 infrastructure development"
    ]
  },

  {
    profession: "AI Ethics Officer",
    category: "Teknologi & AI",
    aiRisk: 3,
    riskLevel: "Risiko Sangat Rendah",
    salaryRange: "Rp 105-300 juta",
    growth: "Sangat Tinggi",
    timeline: "2025-2040",
    summary: "Guardian moral AI development. Mengembangkan framework etika dan audit untuk memastikan AI dikembangkan secara bertanggung jawab. 75% eksekutif memandang etika sebagai competitive advantage.",
    phases: [
      {
        phase: "FASE 1: ETHICS & PHILOSOPHY FOUNDATION",
        title: "Fondasi Etika dan Filosofi",
        duration: "3-4 bulan",
        objective: "Memahami prinsip etika untuk AI development",
        skills: [
          {
            icon: "🧠",
            type: "Soft Skill",
            name: "Ethical Reasoning",
            importance: 10,
            timeToMaster: "6-12 bulan",
            description: "Kemampuan menganalisis dilema etika dalam AI development",
            concepts: ["Moral Philosophy", "Consequentialism", "Deontology", "Virtue Ethics"],
            aiProofLevel: 98
          },
          {
            icon: "🧠",
            type: "Soft Skill",
            name: "Critical Thinking",
            importance: 10,
            timeToMaster: "6-12 bulan",
            description: "Analytical reasoning untuk complex moral issues",
            concepts: ["Logical Analysis", "Bias Recognition", "Argument Evaluation"],
            aiProofLevel: 95
          }
        ]
      },
      {
        phase: "FASE 2: AI BIAS & GOVERNANCE",
        title: "AI Bias Detection & Policy",
        duration: "3-4 bulan",
        objective: "Mengidentifikasi bias dan mengembangkan governance framework",
        skills: [
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "AI Bias Detection",
            importance: 9,
            timeToMaster: "4-8 bulan",
            description: "Teknik mengidentifikasi dan mitigasi bias dalam algoritma",
            concepts: ["Algorithmic Fairness", "Bias Metrics", "Mitigation Strategies", "Audit Procedures"],
            learningPath: "Algorithmic Fairness - Berkeley"
          },
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Policy Development",
            importance: 8,
            timeToMaster: "3-6 bulan",
            description: "Merancang kebijakan dan framework etika AI",
            concepts: ["Policy Writing", "Regulatory Compliance", "Framework Design", "Implementation Planning"]
          }
        ]
      }
    ],
    keyInsights: [
      "Response langsung terhadap risiko bias AI",
      "75% eksekutif memandang etika sebagai competitive advantage",
      "Menjembatani teknologi, hukum, dan filosofi",
      "Critical untuk public trust dalam AI systems"
    ],
    marketDrivers: [
      "Increasing AI regulation dan compliance requirements",
      "Public concern about AI bias dan fairness",
      "Corporate responsibility initiatives"
    ]
  },

  {
    profession: "Wind Turbine Technician",
    category: "Energi & Lingkungan",
    aiRisk: 15,
    riskLevel: "Risiko Rendah",
    salaryRange: "Rp 55-90 juta",
    growth: "Sangat Tinggi",
    timeline: "2025-2040",
    summary: "Fastest growing job menurut BLS. Menggabungkan technical expertise dengan physical skills untuk green energy transition. Memerlukan keahlian yang tidak bisa digantikan AI.",
    phases: [
      {
        phase: "FASE 1: ELECTRICAL & MECHANICAL BASICS",
        title: "Fondasi Teknis Elektrikal",
        duration: "2-3 bulan",
        objective: "Memahami sistem elektrikal dan mekanikal untuk wind energy",
        skills: [
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Electrical Systems",
            importance: 9,
            timeToMaster: "4-8 bulan",
            description: "Power generation systems, electrical safety, grid connection",
            concepts: ["AC/DC Systems", "Power Electronics", "Grid Integration", "Electrical Safety"],
            learningPath: "Wind Energy Fundamentals - Technical University of Denmark"
          },
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Safety Protocols",
            importance: 10,
            timeToMaster: "2-3 bulan",
            description: "Working at heights, high voltage safety, emergency procedures",
            concepts: ["Height Safety", "Electrical Safety", "Emergency Response", "Risk Assessment"]
          },
          {
            icon: "🧠",
            type: "Soft Skill",
            name: "Physical Resilience",
            importance: 8,
            timeToMaster: "3-6 bulan",
            description: "Stamina untuk bekerja di outdoor conditions dan ketinggian",
            concepts: ["Physical Fitness", "Weather Adaptation", "Endurance"],
            aiProofLevel: 95
          }
        ]
      },
      {
        phase: "FASE 2: WIND ENERGY SPECIALIZATION",
        title: "Spesialisasi Teknologi Angin",
        duration: "3-4 bulan",
        objective: "Menguasai teknologi wind turbine dan maintenance",
        skills: [
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Renewable Energy Systems",
            importance: 9,
            timeToMaster: "4-6 bulan",
            description: "Wind turbine technology, maintenance procedures, troubleshooting",
            concepts: ["Turbine Mechanics", "Maintenance Scheduling", "Fault Diagnosis", "Performance Optimization"]
          },
          {
            icon: "🧠",
            type: "Soft Skill",
            name: "Problem Solving Under Pressure",
            importance: 9,
            timeToMaster: "6-12 bulan",
            description: "Troubleshooting equipment failures di kondisi challenging",
            concepts: ["Quick Diagnosis", "Emergency Repair", "Resource Management"],
            aiProofLevel: 90
          }
        ]
      }
    ],
    keyInsights: [
      "Fastest growing job according to Bureau of Labor Statistics",
      "Driven by global green energy transition",
      "Combines technical dan physical expertise",
      "Cannot be automated due to physical nature"
    ],
    marketDrivers: [
      "Global commitment to renewable energy",
      "Government incentives for wind power",
      "Climate change mitigation efforts"
    ]
  },

  {
    profession: "Geriatric Tech Specialist",
    category: "Kesehatan & Medis",
    aiRisk: 8,
    riskLevel: "Risiko Rendah",
    salaryRange: "Rp 65-110 juta",
    growth: "Sangat Tinggi",
    timeline: "2025-2040",
    summary: "Menggabungkan teknologi dengan empati untuk aging population. Mengembangkan dan menerapkan teknologi khusus untuk membantu lansia dalam kehidupan sehari-hari.",
    phases: [
      {
        phase: "FASE 1: HEALTHCARE TECHNOLOGY FOUNDATION",
        title: "Fondasi Teknologi Kesehatan",
        duration: "3-4 bulan",
        objective: "Memahami healthcare technology dan medical informatics",
        skills: [
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Healthcare Technology",
            importance: 10,
            timeToMaster: "6-12 bulan",
            description: "Medical devices, health apps, telemedicine platforms",
            concepts: ["Medical Devices", "Health Informatics", "Telemedicine", "Patient Data Systems"],
            learningPath: "Healthcare Informatics - Johns Hopkins"
          },
          {
            icon: "🧠",
            type: "Soft Skill",
            name: "Empathy & Compassion",
            importance: 10,
            timeToMaster: "Ongoing",
            description: "Understanding elderly needs dan challenges dengan deep empathy",
            concepts: ["Patient-Centered Care", "Emotional Support", "Cultural Sensitivity"],
            aiProofLevel: 98
          }
        ]
      },
      {
        phase: "FASE 2: ACCESSIBILITY & UX DESIGN",
        title: "Accessible Technology Design",
        duration: "3-4 bulan",
        objective: "Merancang teknologi yang accessible untuk lansia",
        skills: [
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Accessibility Design",
            importance: 9,
            timeToMaster: "3-6 bulan",
            description: "UI/UX design untuk users dengan keterbatasan fisik dan kognitif",
            concepts: ["WCAG Guidelines", "Assistive Technology", "Inclusive Design", "Usability Testing"],
            learningPath: "UX Design for Accessibility - Google"
          },
          {
            icon: "🧠",
            type: "Soft Skill",
            name: "Patience & Understanding",
            importance: 10,
            timeToMaster: "6-12 bulan",
            description: "Kesabaran dalam mengajar teknologi kepada elderly users",
            concepts: ["Adult Learning", "Technology Adoption", "Support Strategies"],
            aiProofLevel: 95
          }
        ]
      }
    ],
    keyInsights: [
      "Driven by aging population demographic shift",
      "Combines technology expertise dengan human empathy",
      "Focus on accessibility dan inclusive design",
      "High growth potential dengan social impact"
    ],
    marketDrivers: [
      "Aging population in developed countries",
      "Increased focus on elderly care technology",
      "Healthcare digitalization trends"
    ]
  },

  {
    profession: "Future Work Strategist",
    category: "Bisnis & Manajemen",
    aiRisk: 4,
    riskLevel: "Risiko Sangat Rendah",
    salaryRange: "Rp 150-250 juta",
    growth: "Tinggi",
    timeline: "2025-2040",
    summary: "Architect of organizational transformation. Membantu organisasi merencanakan dan mengimplementasikan future of work strategies dengan highest salary range di kategori hybrid.",
    phases: [
      {
        phase: "FASE 1: STRATEGIC THINKING DEVELOPMENT",
        title: "Pengembangan Pemikiran Strategis",
        duration: "4-6 bulan",
        objective: "Mengembangkan kemampuan berpikir strategis dan future forecasting",
        skills: [
          {
            icon: "🧠",
            type: "Soft Skill",
            name: "Strategic Thinking",
            importance: 10,
            timeToMaster: "12-24 bulan",
            description: "Long-term planning capabilities dan systems thinking approach",
            concepts: ["Systems Thinking", "Scenario Planning", "Strategic Analysis", "Future Forecasting"],
            learningPath: "Strategic Thinking - Stanford Graduate School",
            aiProofLevel: 95
          },
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Data Analytics & Forecasting",
            importance: 9,
            timeToMaster: "4-8 bulan",
            description: "Trend analysis, predictive modeling untuk workforce planning",
            concepts: ["Predictive Analytics", "Trend Analysis", "Workforce Metrics", "Business Intelligence"]
          }
        ]
      },
      {
        phase: "FASE 2: CHANGE MANAGEMENT MASTERY",
        title: "Penguasaan Manajemen Perubahan",
        duration: "4-6 bulan",
        objective: "Menguasai teknik mengelola organizational transformation",
        skills: [
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Change Management",
            importance: 8,
            timeToMaster: "3-6 bulan",
            description: "Organizational transformation methodologies dan process optimization",
            concepts: ["Change Models", "Stakeholder Analysis", "Communication Planning", "Resistance Management"],
            learningPath: "Leading Change - John Kotter"
          },
          {
            icon: "🧠",
            type: "Soft Skill",
            name: "Leadership & Influence",
            importance: 10,
            timeToMaster: "12-24 bulan",
            description: "Team motivation dan cross-functional collaboration",
            concepts: ["Influence Without Authority", "Team Motivation", "Vision Communication"],
            aiProofLevel: 95
          }
        ]
      }
    ],
    keyInsights: [
      "Helps companies navigate digital transformation",
      "Combines business strategy dengan work psychology", 
      "Highest salary range dalam hybrid categories",
      "Critical untuk organizational adaptation"
    ],
    marketDrivers: [
      "Rapid technological change requiring organizational adaptation",
      "Remote work transformation",
      "AI integration dalam workplace"
    ]
  },

  {
    profession: "Ecosystem Restoration Specialist",
    category: "Energi & Lingkungan",
    aiRisk: 6,
    riskLevel: "Risiko Rendah",
    salaryRange: "Rp 60-100 juta",
    growth: "Tinggi",
    timeline: "2025-2040",
    summary: "Environmental guardian untuk climate change mitigation. Merancang dan mengimplementasikan program restorasi lingkungan dengan scientific approach dan community engagement.",
    phases: [
      {
        phase: "FASE 1: ENVIRONMENTAL SCIENCE FOUNDATION",
        title: "Fondasi Ilmu Lingkungan",
        duration: "6-8 bulan",
        objective: "Memahami ecology principles dan conservation biology",
        skills: [
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Environmental Science",
            importance: 10,
            timeToMaster: "12-24 bulan",
            description: "Ecology, biodiversity conservation, restoration techniques",
            concepts: ["Ecosystem Dynamics", "Biodiversity Assessment", "Restoration Ecology", "Conservation Biology"],
            learningPath: "Environmental Science - Yale University"
          },
          {
            icon: "🧠",
            type: "Soft Skill",
            name: "Long-term Thinking",
            importance: 9,
            timeToMaster: "6-12 bulan",
            description: "Sustainability mindset dan ecosystem understanding",
            concepts: ["Sustainability Planning", "Ecosystem Thinking", "Intergenerational Responsibility"],
            aiProofLevel: 90
          }
        ]
      },
      {
        phase: "FASE 2: GIS & MONITORING TOOLS",
        title: "Geographic Information Systems",
        duration: "3-4 bulan",
        objective: "Menguasai tools untuk environmental monitoring",
        skills: [
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "GIS & Remote Sensing",
            importance: 8,
            timeToMaster: "3-6 bulan",
            description: "Geographic Information Systems untuk environmental monitoring",
            concepts: ["Spatial Analysis", "Remote Sensing", "GPS Technology", "Mapping Software"],
            learningPath: "GIS and Remote Sensing - ESRI"
          },
          {
            icon: "🧠",
            type: "Soft Skill",
            name: "Scientific Methodology",
            importance: 9,
            timeToMaster: "6-12 bulan",
            description: "Research design dan data collection untuk environmental studies",
            concepts: ["Research Design", "Data Collection", "Scientific Writing", "Peer Review"],
            aiProofLevel: 85
          }
        ]
      }
    ],
    keyInsights: [
      "Critical untuk net-zero commitments globally",
      "Combines environmental science dengan project management",
      "Key role dalam climate change mitigation",
      "Requires both scientific dan community engagement skills"
    ],
    marketDrivers: [
      "Global climate change commitments",
      "Corporate sustainability initiatives", 
      "Government environmental regulations"
    ]
  },

  {
    profession: "AI Workforce Trainer",
    category: "Pendidikan & Pelatihan",
    aiRisk: 8,
    riskLevel: "Risiko Rendah",
    salaryRange: "Rp 85-150 juta",
    growth: "Sangat Tinggi",
    timeline: "2025-2035",
    summary: "Bridge between AI technology dan human workforce. Melatih karyawan untuk mengadopsi AI secara efektif dengan gap 75% antara AI usage dan proper training.",
    phases: [
      {
        phase: "FASE 1: AI LITERACY FOUNDATION",
        title: "Fondasi Literasi AI",
        duration: "3-4 bulan",
        objective: "Memahami AI capabilities dan limitations untuk teaching",
        skills: [
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "AI Literacy",
            importance: 9,
            timeToMaster: "3-6 bulan",
            description: "Understanding AI capabilities, limitations, dan ethical implications",
            concepts: ["AI Fundamentals", "Machine Learning Basics", "AI Ethics", "Tool Evaluation"],
            learningPath: "AI for Everyone - Andrew Ng"
          },
          {
            icon: "🧠",
            type: "Soft Skill",
            name: "Teaching & Mentoring",
            importance: 10,
            timeToMaster: "6-12 bulan",
            description: "Knowledge transfer yang efektif untuk adult learners",
            concepts: ["Adult Learning Principles", "Instructional Design", "Assessment Methods"],
            aiProofLevel: 95
          }
        ]
      },
      {
        phase: "FASE 2: TRAINING METHODOLOGY",
        title: "Metodologi Pelatihan AI",
        duration: "2-3 bulan",
        objective: "Mengembangkan curriculum dan training programs",
        skills: [
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Instructional Design",
            importance: 8,
            timeToMaster: "3-6 bulan",
            description: "Curriculum development untuk AI adoption training",
            concepts: ["Learning Objectives", "Assessment Design", "Training Materials", "Learning Analytics"]
          },
          {
            icon: "🧠",
            type: "Soft Skill",
            name: "Change Management",
            importance: 9,
            timeToMaster: "6-12 bulan",
            description: "Helping organizations overcome resistance to AI adoption",
            concepts: ["Resistance Management", "Cultural Change", "Adoption Strategies"],
            aiProofLevel: 90
          }
        ]
      }
    ],
    keyInsights: [
      "75% pekerja menggunakan AI tanpa formal training",
      "Gap antara AI adoption (75%) dan proper training (39%)",
      "Menjembatani teknologi dan human resources",
      "Critical untuk successful AI transformation"
    ],
    marketDrivers: [
      "Rapid AI adoption across industries",
      "Need for workforce reskilling",
      "Organizational AI transformation initiatives"
    ]
  },

  {
    profession: "Human-Machine Team Manager",
    category: "Teknologi & AI",
    aiRisk: 5,
    riskLevel: "Risiko Sangat Rendah",
    salaryRange: "Rp 130-220 juta",
    growth: "Tinggi",
    timeline: "2025-2040",
    summary: "Leader of hybrid future. Memimpin tim yang terdiri dari manusia dan AI, mengoptimalkan kolaborasi untuk produktivitas maksimal dengan unique human leadership skills.",
    phases: [
      {
        phase: "FASE 1: AI COLLABORATION DESIGN",
        title: "Desain Kolaborasi AI-Human",
        duration: "3-4 bulan",
        objective: "Merancang workflow optimal antara manusia dan AI",
        skills: [
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "AI Integration Planning",
            importance: 9,
            timeToMaster: "4-8 bulan",
            description: "AI tool selection dan workflow optimization",
            concepts: ["AI Tool Evaluation", "Workflow Design", "Integration Strategy", "Performance Metrics"]
          },
          {
            icon: "🧠",
            type: "Soft Skill",
            name: "Systems Thinking",
            importance: 9,
            timeToMaster: "8-15 bulan",
            description: "Understanding complex interactions dalam hybrid teams",
            concepts: ["Complex Systems", "Interaction Patterns", "Feedback Loops", "Emergent Behavior"],
            aiProofLevel: 95
          }
        ]
      },
      {
        phase: "FASE 2: TEAM LEADERSHIP & INNOVATION",
        title: "Kepemimpinan Tim Hybrid",
        duration: "4-7 bulan",
        objective: "Memimpin tim hybrid dan mendorong innovation",
        skills: [
          {
            icon: "🧠",
            type: "Soft Skill",
            name: "Emotional Intelligence",
            importance: 10,
            timeToMaster: "12-24 bulan",
            description: "Managing human emotions dalam AI-augmented workplace",
            concepts: ["Emotional Awareness", "Team Dynamics", "Conflict Resolution", "Motivation"],
            aiProofLevel: 98
          },
          {
            icon: "🧠",
            type: "Soft Skill",
            name: "Innovation Management",
            importance: 9,
            timeToMaster: "8-15 bulan",
            description: "Fostering creativity dan innovation dalam hybrid environment",
            concepts: ["Creative Leadership", "Innovation Processes", "Idea Management"],
            aiProofLevel: 90
          }
        ]
      }
    ],
    keyInsights: [
      "Future of work adalah human-AI collaboration",
      "Combines traditional leadership dengan AI literacy",
      "Optimizes unique strengths dari humans dan machines",
      "Critical untuk organizational AI success"
    ],
    marketDrivers: [
      "Widespread AI adoption dalam workplace",
      "Need for human-AI collaboration optimization",
      "Organizational transformation requirements"
    ]
  }
];

// =============================================
// SKILL ANALYSIS & INSIGHTS
// =============================================

export const skillAnalysis = {
  // Hard Skills Ranking berdasarkan Demand 2025-2030
  hardSkillsRanking: [
    {
      skill: "AI/ML Programming",
      demandGrowth: 400,
      salaryImpact: "150-300%",
      criticalFor: ["AI Specialist", "Data Scientist", "ML Engineer"]
    },
    {
      skill: "Data Analysis & Statistics", 
      demandGrowth: 300,
      salaryImpact: "100-200%",
      criticalFor: ["Data Scientist", "Business Analyst", "Research roles"]
    },
    {
      skill: "Cybersecurity",
      demandGrowth: 200,
      salaryImpact: "120-180%",
      criticalFor: ["Security Analyst", "Ethical Hacker", "Security Architect"]
    },
    {
      skill: "Green Technology",
      demandGrowth: 350,
      salaryImpact: "60-120%", 
      criticalFor: ["Wind Technician", "Solar Installer", "Sustainability Specialist"]
    }
  ],

  // Soft Skills berdasarkan AI-Proof Level
  softSkillsRanking: [
    {
      skill: "Ethical Reasoning",
      aiProofLevel: 98,
      criticalFor: ["AI Ethics Officer", "Leadership roles"]
    },
    {
      skill: "Empathy & Emotional Intelligence",
      aiProofLevel: 95,
      criticalFor: ["Healthcare", "Education", "Management"]
    },
    {
      skill: "Creative Problem Solving",
      aiProofLevel: 95,
      criticalFor: ["Design", "Strategy", "Research roles"]
    },
    {
      skill: "Strategic Thinking",
      aiProofLevel: 95,
      criticalFor: ["Management", "Consulting", "Planning roles"]
    },
    {
      skill: "Complex Communication",
      aiProofLevel: 90,
      criticalFor: ["Leadership", "Client-facing roles"]
    }
  ],

  // Power Combinations - Skills yang powerful together
  powerCombinations: [
    {
      combination: "Tech + Communication",
      skills: ["Programming", "Presentation Skills"],
      salaryPremium: "40-80%",
      essentialFor: ["Technical Leadership", "Consulting"]
    },
    {
      combination: "Data + Business Acumen",
      skills: ["Analytics", "Domain Knowledge"],
      salaryPremium: "50-100%",
      essentialFor: ["Data Science", "Business Intelligence"]
    },
    {
      combination: "AI + Ethics",
      skills: ["Technical AI", "Moral Reasoning"],
      salaryPremium: "60-120%",
      essentialFor: ["AI Ethics", "Responsible AI Development"]
    },
    {
      combination: "Green + Tech",
      skills: ["Environmental", "Technical Skills"],
      salaryPremium: "30-70%",
      essentialFor: ["Sustainability Tech", "Clean Energy"]
    }
  ]
};

// =============================================
// PERSONALIZED LEARNING RECOMMENDATIONS
// =============================================

export const learningRecommendations = {
  freshGraduates: {
    priority: "Foundation Building",
    focus: ["1-2 core hard skills", "Communication skills", "Learning agility"],
    timeline: "12 bulan",
    expectedROI: "50-100% salary increase"
  },
  
  intermediateProfessionals: {
    priority: "Specialization + Leadership", 
    focus: ["2-3 related hard skills", "Leadership development", "Cross-functional expertise"],
    timeline: "18 bulan",
    expectedROI: "80-150% career advancement"
  },
  
  seniorProfessionals: {
    priority: "Innovation + Strategic Impact",
    focus: ["Domain mastery", "Strategic thinking", "Network building"],
    timeline: "Continuous",
    expectedROI: "C-level opportunities, consulting rates $200-500/hour"
  }
};

// Export all blueprints
export const allCareerBlueprints: CareerBlueprint[] = [
  ...disappearingJobsBlueprints,
  ...futureJobsBlueprints
];

// Helper functions
export const getCareerByProfession = (profession: string): CareerBlueprint | undefined => {
  return allCareerBlueprints.find(career => 
    career.profession.toLowerCase() === profession.toLowerCase()
  );
};

export const getCareersByCategory = (category: string): CareerBlueprint[] => {
  return allCareerBlueprints.filter(career => career.category === category);
};

export const getCareersByRiskLevel = (riskLevel: string): CareerBlueprint[] => {
  return allCareerBlueprints.filter(career => career.riskLevel === riskLevel);
};