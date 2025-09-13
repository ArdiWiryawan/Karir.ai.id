import { AssessmentQuestion, JobCategory } from './skillForecastingTypes';

export const assessmentQuestions: AssessmentQuestion[] = [
  // Interests & Preferences
  {
    id: 'q1',
    question: 'Apa yang paling menarik bagi Anda dalam bekerja?',
    type: 'single-choice',
    category: 'interests',
    weight: 8,
    options: [
      {
        id: 'q1-a',
        text: 'Memecahkan masalah teknis dan mengembangkan solusi inovatif',
        value: 'problem_solving_tech',
        jobCategories: ['Teknologi & AI', 'Data & Analytics']
      },
      {
        id: 'q1-b',
        text: 'Membantu orang dan memberikan dampak positif pada masyarakat',
        value: 'helping_people',
        jobCategories: ['Kesehatan & Medis', 'Pendidikan & Pelatihan', 'Pemerintahan & Publik']
      },
      {
        id: 'q1-c',
        text: 'Menciptakan konten, desain, atau karya seni',
        value: 'creative_work',
        jobCategories: ['Kreatif & Media']
      },
      {
        id: 'q1-d',
        text: 'Mengelola bisnis, tim, dan strategi organisasi',
        value: 'business_management',
        jobCategories: ['Bisnis & Manajemen', 'Keuangan & Fintech']
      },
      {
        id: 'q1-e',
        text: 'Berkontribusi pada lingkungan dan keberlanjutan',
        value: 'environmental_work',
        jobCategories: ['Energi & Lingkungan']
      }
    ]
  },
  {
    id: 'q2',
    question: 'Bagaimana gaya kerja yang Anda sukai?',
    type: 'single-choice',
    category: 'work_style',
    weight: 6,
    options: [
      {
        id: 'q2-a',
        text: 'Bekerja mandiri dengan fokus mendalam',
        value: 'independent_deep',
        jobCategories: ['Teknologi & AI', 'Data & Analytics', 'Penelitian & Sains']
      },
      {
        id: 'q2-b',
        text: 'Kolaborasi tim dan interaksi sosial',
        value: 'collaborative_social',
        jobCategories: ['Bisnis & Manajemen', 'Pendidikan & Pelatihan', 'Kesehatan & Medis']
      },
      {
        id: 'q2-c',
        text: 'Kombinasi kerja mandiri dan tim',
        value: 'hybrid_work',
        jobCategories: ['Kreatif & Media', 'Keuangan & Fintech']
      },
      {
        id: 'q2-d',
        text: 'Kerja lapangan dan hands-on',
        value: 'fieldwork_handson',
        jobCategories: ['Energi & Lingkungan', 'Manufaktur & Produksi']
      }
    ]
  },
  {
    id: 'q3',
    question: 'Seberapa tertarik Anda dengan teknologi dan AI?',
    type: 'scale',
    category: 'interests',
    weight: 9,
    options: [
      { id: 'q3-1', text: 'Sangat tidak tertarik', value: 1, jobCategories: ['Layanan & Hospitality', 'Kreatif & Media'] },
      { id: 'q3-2', text: 'Tidak tertarik', value: 2, jobCategories: ['Layanan & Hospitality'] },
      { id: 'q3-3', text: 'Netral', value: 3, jobCategories: ['Bisnis & Manajemen', 'Keuangan & Fintech'] },
      { id: 'q3-4', text: 'Tertarik', value: 4, jobCategories: ['Data & Analytics', 'Keuangan & Fintech'] },
      { id: 'q3-5', text: 'Sangat tertarik', value: 5, jobCategories: ['Teknologi & AI', 'Data & Analytics'] }
    ]
  },
  {
    id: 'q4',
    question: 'Pengalaman pendidikan terakhir Anda?',
    type: 'single-choice',
    category: 'experience',
    weight: 5,
    options: [
      {
        id: 'q4-a',
        text: 'SMA/SMK',
        value: 'high_school',
        jobCategories: ['Layanan & Hospitality', 'Manufaktur & Produksi', 'Energi & Lingkungan']
      },
      {
        id: 'q4-b',
        text: 'Diploma/D3',
        value: 'diploma',
        jobCategories: ['Teknologi & AI', 'Kesehatan & Medis', 'Bisnis & Manajemen']
      },
      {
        id: 'q4-c',
        text: 'Sarjana (S1)',
        value: 'bachelor',
        jobCategories: ['Teknologi & AI', 'Data & Analytics', 'Bisnis & Manajemen', 'Keuangan & Fintech']
      },
      {
        id: 'q4-d',
        text: 'Magister (S2) atau lebih tinggi',
        value: 'master_plus',
        jobCategories: ['Penelitian & Sains', 'Kesehatan & Medis', 'Pendidikan & Pelatihan']
      }
    ]
  },
  {
    id: 'q5',
    question: 'Keterampilan mana yang paling Anda kuasai saat ini?',
    type: 'multiple-choice',
    category: 'skills',
    weight: 7,
    options: [
      {
        id: 'q5-a',
        text: 'Programming & Development',
        value: 'programming',
        jobCategories: ['Teknologi & AI', 'Data & Analytics']
      },
      {
        id: 'q5-b',
        text: 'Analisis Data & Statistik',
        value: 'data_analysis',
        jobCategories: ['Data & Analytics', 'Penelitian & Sains']
      },
      {
        id: 'q5-c',
        text: 'Komunikasi & Presentasi',
        value: 'communication',
        jobCategories: ['Bisnis & Manajemen', 'Pendidikan & Pelatihan', 'Kreatif & Media']
      },
      {
        id: 'q5-d',
        text: 'Desain & Kreativitas',
        value: 'design_creativity',
        jobCategories: ['Kreatif & Media']
      },
      {
        id: 'q5-e',
        text: 'Manajemen & Leadership',
        value: 'management',
        jobCategories: ['Bisnis & Manajemen']
      },
      {
        id: 'q5-f',
        text: 'Keterampilan Teknis (Engineering)',
        value: 'technical_engineering',
        jobCategories: ['Energi & Lingkungan', 'Manufaktur & Produksi']
      },
      {
        id: 'q5-g',
        text: 'Keuangan & Akuntansi',
        value: 'finance',
        jobCategories: ['Keuangan & Fintech']
      }
    ]
  },
  {
    id: 'q6',
    question: 'Apa goals karier utama Anda dalam 5 tahun ke depan?',
    type: 'single-choice',
    category: 'career_goals',
    weight: 8,
    options: [
      {
        id: 'q6-a',
        text: 'Menjadi expert di bidang teknologi cutting-edge',
        value: 'tech_expert',
        jobCategories: ['Teknologi & AI', 'Data & Analytics']
      },
      {
        id: 'q6-b',
        text: 'Memimpin tim dan mengelola proyek besar',
        value: 'leadership_management',
        jobCategories: ['Bisnis & Manajemen']
      },
      {
        id: 'q6-c',
        text: 'Membuat dampak positif untuk lingkungan/masyarakat',
        value: 'social_impact',
        jobCategories: ['Energi & Lingkungan', 'Kesehatan & Medis', 'Pendidikan & Pelatihan']
      },
      {
        id: 'q6-d',
        text: 'Membangun bisnis atau menjadi entrepreneur',
        value: 'entrepreneurship',
        jobCategories: ['Bisnis & Manajemen', 'Teknologi & AI']
      },
      {
        id: 'q6-e',
        text: 'Mengembangkan karya kreatif dan inovatif',
        value: 'creative_innovation',
        jobCategories: ['Kreatif & Media']
      }
    ]
  },
  {
    id: 'q7',
    question: 'Seberapa nyaman Anda dengan pembelajaran berkelanjutan dan adaptasi cepat?',
    type: 'scale',
    category: 'personality',
    weight: 7,
    options: [
      { id: 'q7-1', text: 'Sangat tidak nyaman', value: 1, jobCategories: ['Layanan & Hospitality'] },
      { id: 'q7-2', text: 'Tidak nyaman', value: 2, jobCategories: ['Layanan & Hospitality', 'Manufaktur & Produksi'] },
      { id: 'q7-3', text: 'Netral', value: 3, jobCategories: ['Bisnis & Manajemen', 'Kesehatan & Medis'] },
      { id: 'q7-4', text: 'Nyaman', value: 4, jobCategories: ['Keuangan & Fintech', 'Data & Analytics'] },
      { id: 'q7-5', text: 'Sangat nyaman', value: 5, jobCategories: ['Teknologi & AI', 'Data & Analytics'] }
    ]
  },
  {
    id: 'q8',
    question: 'Pengalaman kerja Anda saat ini?',
    type: 'single-choice',
    category: 'experience',
    weight: 4,
    options: [
      {
        id: 'q8-a',
        text: 'Fresh graduate / belum bekerja',
        value: 'fresh_graduate',
        jobCategories: ['Teknologi & AI', 'Data & Analytics', 'Kreatif & Media']
      },
      {
        id: 'q8-b',
        text: '1-3 tahun pengalaman',
        value: 'junior_level',
        jobCategories: ['Teknologi & AI', 'Bisnis & Manajemen', 'Keuangan & Fintech']
      },
      {
        id: 'q8-c',
        text: '3-7 tahun pengalaman',
        value: 'mid_level',
        jobCategories: ['Bisnis & Manajemen', 'Data & Analytics', 'Kesehatan & Medis']
      },
      {
        id: 'q8-d',
        text: '7+ tahun pengalaman',
        value: 'senior_level',
        jobCategories: ['Bisnis & Manajemen', 'Pendidikan & Pelatihan']
      }
    ]
  },
  {
    id: 'q9',
    question: 'Industri mana yang paling sesuai dengan minat Anda?',
    type: 'multiple-choice',
    category: 'interests',
    weight: 6,
    options: [
      {
        id: 'q9-a',
        text: 'Teknologi & Software',
        value: 'tech_software',
        jobCategories: ['Teknologi & AI', 'Data & Analytics']
      },
      {
        id: 'q9-b',
        text: 'Healthcare & Life Sciences',
        value: 'healthcare',
        jobCategories: ['Kesehatan & Medis']
      },
      {
        id: 'q9-c',
        text: 'Finansial & Banking',
        value: 'finance_banking',
        jobCategories: ['Keuangan & Fintech']
      },
      {
        id: 'q9-d',
        text: 'Media & Entertainment',
        value: 'media_entertainment',
        jobCategories: ['Kreatif & Media']
      },
      {
        id: 'q9-e',
        text: 'Energy & Environment',
        value: 'energy_environment',
        jobCategories: ['Energi & Lingkungan']
      },
      {
        id: 'q9-f',
        text: 'Education & Training',
        value: 'education',
        jobCategories: ['Pendidikan & Pelatihan']
      },
      {
        id: 'q9-g',
        text: 'Consulting & Business Services',
        value: 'consulting',
        jobCategories: ['Bisnis & Manajemen']
      }
    ]
  },
  {
    id: 'q10',
    question: 'Apakah Anda lebih suka bekerja dengan:',
    type: 'single-choice',
    category: 'work_style',
    weight: 5,
    options: [
      {
        id: 'q10-a',
        text: 'Data, angka, dan analisis kuantitatif',
        value: 'data_quantitative',
        jobCategories: ['Data & Analytics', 'Keuangan & Fintech', 'Penelitian & Sains']
      },
      {
        id: 'q10-b',
        text: 'Orang, komunikasi, dan hubungan interpersonal',
        value: 'people_interpersonal',
        jobCategories: ['Bisnis & Manajemen', 'Kesehatan & Medis', 'Pendidikan & Pelatihan']
      },
      {
        id: 'q10-c',
        text: 'Sistem, teknologi, dan infrastruktur',
        value: 'systems_technology',
        jobCategories: ['Teknologi & AI', 'Energi & Lingkungan']
      },
      {
        id: 'q10-d',
        text: 'Ide kreatif, desain, dan inovasi',
        value: 'creative_ideas',
        jobCategories: ['Kreatif & Media']
      }
    ]
  }
];

// Mapping untuk scoring algorithm
export const categoryWeights: Record<string, number> = {
  'interests': 0.35,
  'skills': 0.25,
  'career_goals': 0.20,
  'experience': 0.10,
  'work_style': 0.07,
  'personality': 0.03
};