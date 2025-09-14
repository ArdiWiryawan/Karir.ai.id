import { Job, JobCategory } from './skillForecastingTypes';

// PEKERJAAN YANG AKAN HILANG - Pekerjaan yang berisiko tinggi tergantikan AI
export const disappearingJobs: Job[] = [
  {
    id: 'data-entry-clerk',
    title: 'Data Entry Clerk',
    category: 'Bisnis & Manajemen',
    description: 'Operator entri data yang bertanggung jawab memasukkan informasi ke dalam sistem komputer.',
    aiReplacementRisk: 92,
    salaryRange: { min: 3000000, max: 5000000, currency: 'IDR' },
    growthProjection: 'Menurun',
    isNewProfession: false,
    requiredSkills: [],
    roadmap: { id: '', jobId: '', phases: [], totalDuration: '', difficulty: 'Pemula' },
    interestingFacts: ['92% kemungkinan tergantikan oleh AI dan RPA', 'Salah satu pekerjaan dengan risiko tertinggi'],
    aiProofSkills: [],
    timeline: '2024-2026'
  },
  {
    id: 'telemarketer',
    title: 'Telemarketer',
    category: 'Bisnis & Manajemen',
    description: 'Petugas pemasaran melalui telepon untuk mempromosikan produk atau layanan.',
    aiReplacementRisk: 85,
    salaryRange: { min: 3500000, max: 6000000, currency: 'IDR' },
    growthProjection: 'Menurun',
    isNewProfession: false,
    requiredSkills: [],
    roadmap: { id: '', jobId: '', phases: [], totalDuration: '', difficulty: 'Pemula' },
    interestingFacts: ['85% kemungkinan tergantikan oleh AI Voice Agents', 'Dapat digantikan dengan sistem telepon pintar'],
    aiProofSkills: [],
    timeline: '2024-2027'
  },
  {
    id: 'bank-teller',
    title: 'Bank Teller',
    category: 'Keuangan & Fintech',
    description: 'Petugas bank yang melayani transaksi keuangan nasabah di konter.',
    aiReplacementRisk: 70,
    salaryRange: { min: 4500000, max: 8000000, currency: 'IDR' },
    growthProjection: 'Menurun',
    isNewProfession: false,
    requiredSkills: [],
    roadmap: { id: '', jobId: '', phases: [], totalDuration: '', difficulty: 'Pemula' },
    interestingFacts: ['Mobile banking dan AI customer service menggantikan fungsi ini', '70% transaksi sudah digital'],
    aiProofSkills: [],
    timeline: '2024-2028'
  },
  {
    id: 'basic-content-writer',
    title: 'Content Writer (Entry Level)',
    category: 'Kreatif & Media',
    description: 'Penulis konten dasar untuk SEO dan media digital.',
    aiReplacementRisk: 78,
    salaryRange: { min: 4000000, max: 7000000, currency: 'IDR' },
    growthProjection: 'Menurun',
    isNewProfession: false,
    requiredSkills: [],
    roadmap: { id: '', jobId: '', phases: [], totalDuration: '', difficulty: 'Pemula' },
    interestingFacts: ['AI dapat menghasilkan konten SEO dasar dengan kualitas sama', 'Writer kreatif masih aman'],
    aiProofSkills: ['Storytelling', 'Creative thinking', 'Brand understanding'],
    timeline: '2024-2026'
  }
];

// PEKERJAAN MASA DEPAN - Pekerjaan baru yang akan muncul dan berkembang
export const futureJobs: Job[] = [
  {
    id: 'ai-ml-specialist',
    title: 'AI/Machine Learning Specialist',
    category: 'Teknologi & AI',
    description: 'Merancang, membangun, dan menerapkan model machine learning yang menjadi inti dari produk dan layanan berbasis AI.',
    aiReplacementRisk: 5,
    salaryRange: { min: 120000000, max: 250000000, currency: 'IDR' },
    growthProjection: 'Sangat Tinggi',
    isNewProfession: true,
    requiredSkills: [],
    roadmap: { id: '', jobId: '', phases: [], totalDuration: '12-18 bulan', difficulty: 'Lanjutan' },
    interestingFacts: [
      'Pertumbuhan permintaan 26% per tahun',
      'Talenta papan atas bisa mencapai $500,000-$2,000,000',
      'Menjadi arsitek ekonomi berbasis kecerdasan'
    ],
    aiProofSkills: ['Deep Learning', 'Python Programming', 'Statistical Analysis', 'Problem Solving'],
    timeline: '2025-2040'
  },
  {
    id: 'ai-ethics-officer',
    title: 'AI Ethics Officer',
    category: 'Teknologi & AI',
    description: 'Mengembangkan kerangka kerja, kebijakan, dan proses audit untuk memastikan sistem AI dikembangkan secara bertanggung jawab dan etis.',
    aiReplacementRisk: 3,
    salaryRange: { min: 105000000, max: 300000000, currency: 'IDR' },
    growthProjection: 'Sangat Tinggi',
    isNewProfession: true,
    requiredSkills: [],
    roadmap: { id: '', jobId: '', phases: [], totalDuration: '8-12 bulan', difficulty: 'Menengah' },
    interestingFacts: [
      'Respons langsung terhadap risiko bias AI',
      '75% eksekutif memandang etika sebagai keunggulan kompetitif',
      'Menjembatani teknologi, hukum, dan filosofi'
    ],
    aiProofSkills: ['Ethical Reasoning', 'Critical Thinking', 'Communication', 'Legal Knowledge'],
    timeline: '2025-2040'
  },
  {
    id: 'wind-turbine-technician',
    title: 'Teknisi Turbin Angin',
    category: 'Energi & Lingkungan',
    description: 'Melakukan instalasi, pemeliharaan, dan perbaikan turbin angin untuk pembangkit listrik tenaga angin.',
    aiReplacementRisk: 15,
    salaryRange: { min: 55000000, max: 90000000, currency: 'IDR' },
    growthProjection: 'Sangat Tinggi',
    isNewProfession: true,
    requiredSkills: [],
    roadmap: { id: '', jobId: '', phases: [], totalDuration: '6-9 bulan', difficulty: 'Menengah' },
    interestingFacts: [
      'Pekerjaan dengan pertumbuhan tercepat menurut BLS',
      'Didorong oleh transisi energi hijau global',
      'Memerlukan keahlian teknis dan fisik'
    ],
    aiProofSkills: ['Technical Skills', 'Problem Solving', 'Safety Awareness', 'Physical Fitness'],
    timeline: '2025-2040'
  },
  {
    id: 'solar-panel-installer',
    title: 'Pemasang Panel Surya',
    category: 'Energi & Lingkungan',
    description: 'Memasang dan memelihara sistem panel surya fotovoltaik untuk rumah dan bisnis.',
    aiReplacementRisk: 18,
    salaryRange: { min: 45000000, max: 70000000, currency: 'IDR' },
    growthProjection: 'Sangat Tinggi',
    isNewProfession: true,
    requiredSkills: [],
    roadmap: { id: '', jobId: '', phases: [], totalDuration: '3-6 bulan', difficulty: 'Menengah' },
    interestingFacts: [
      'Pertumbuhan sangat tinggi seiring adopsi energi terbarukan',
      'Membutuhkan sertifikasi keselamatan khusus',
      'Gabungan keterampilan teknis dan fisik'
    ],
    aiProofSkills: ['Technical Installation', 'Electrical Knowledge', 'Safety Protocols', 'Customer Service'],
    timeline: '2025-2040'
  },
  {
    id: 'geriatric-tech-specialist',
    title: 'Spesialis Teknologi Geriatri',
    category: 'Kesehatan & Medis',
    description: 'Mengembangkan dan menerapkan teknologi khusus untuk membantu lansia dalam kehidupan sehari-hari.',
    aiReplacementRisk: 8,
    salaryRange: { min: 65000000, max: 110000000, currency: 'IDR' },
    growthProjection: 'Sangat Tinggi',
    isNewProfession: true,
    requiredSkills: [],
    roadmap: { id: '', jobId: '', phases: [], totalDuration: '9-12 bulan', difficulty: 'Menengah' },
    interestingFacts: [
      'Didorong oleh populasi lansia yang bertambah',
      'Menggabungkan teknologi dengan empati',
      'Fokus pada accessibility dan user experience'
    ],
    aiProofSkills: ['Empathy', 'User Experience Design', 'Healthcare Technology', 'Communication'],
    timeline: '2025-2040'
  },
  {
    id: 'future-work-strategist',
    title: 'Ahli Strategi Masa Depan Kerja',
    category: 'Bisnis & Manajemen',
    description: 'Membantu organisasi merencanakan dan mengimplementasikan transformasi tenaga kerja untuk masa depan.',
    aiReplacementRisk: 4,
    salaryRange: { min: 150000000, max: 250000000, currency: 'IDR' },
    growthProjection: 'Tinggi',
    isNewProfession: true,
    requiredSkills: [],
    roadmap: { id: '', jobId: '', phases: [], totalDuration: '12-18 bulan', difficulty: 'Lanjutan' },
    interestingFacts: [
      'Membantu perusahaan navigasi transformasi digital',
      'Menggabungkan strategi bisnis dengan psikologi kerja',
      'Salary range tertinggi di kategori hybrid'
    ],
    aiProofSkills: ['Strategic Thinking', 'Change Management', 'Leadership', 'Future Thinking'],
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
    requiredSkills: [],
    roadmap: { id: '', jobId: '', phases: [], totalDuration: '9-15 bulan', difficulty: 'Lanjutan' },
    interestingFacts: [
      'Disebut sebagai "Sexiest Job of 21st Century"',
      'Pertumbuhan permintaan konsisten tinggi',
      'Menggabungkan matematika, programming, dan bisnis'
    ],
    aiProofSkills: ['Statistical Analysis', 'Machine Learning', 'Data Visualization', 'Business Acumen'],
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
    requiredSkills: [],
    roadmap: { id: '', jobId: '', phases: [], totalDuration: '6-12 bulan', difficulty: 'Menengah' },
    interestingFacts: [
      'Pertumbuhan 31% per tahun (jauh di atas rata-rata)',
      'Kekurangan talenta global mencapai 3.5 juta',
      'Semakin penting dengan digitalisasi bisnis'
    ],
    aiProofSkills: ['Threat Analysis', 'Network Security', 'Incident Response', 'Risk Assessment'],
    timeline: '2025-2040'
  },
  {
    id: 'ecosystem-restoration-specialist',
    title: 'Spesialis Restorasi Ekosistem',
    category: 'Energi & Lingkungan',
    description: 'Merancang dan mengimplementasikan program restorasi lingkungan dan konservasi biodiversitas.',
    aiReplacementRisk: 6,
    salaryRange: { min: 60000000, max: 100000000, currency: 'IDR' },
    growthProjection: 'Tinggi',
    isNewProfession: true,
    requiredSkills: [],
    roadmap: { id: '', jobId: '', phases: [], totalDuration: '12-18 bulan', difficulty: 'Menengah' },
    interestingFacts: [
      'Didorong oleh komitmen net-zero global',
      'Menggabungkan sains lingkungan dengan manajemen proyek',
      'Peran kunci dalam mitigasi perubahan iklim'
    ],
    aiProofSkills: ['Environmental Science', 'Project Management', 'Fieldwork', 'Scientific Research'],
    timeline: '2025-2040'
  },
  {
    id: 'web3-developer',
    title: 'Web3 Developer',
    category: 'Teknologi & AI',
    description: 'Mengembangkan aplikasi terdesentralisasi (DApps) dan smart contracts untuk blockchain.',
    aiReplacementRisk: 8,
    salaryRange: { min: 120000000, max: 250000000, currency: 'IDR' },
    growthProjection: 'Tinggi',
    isNewProfession: true,
    requiredSkills: [],
    roadmap: { id: '', jobId: '', phases: [], totalDuration: '6-12 bulan', difficulty: 'Lanjutan' },
    interestingFacts: [
      'Pertumbuhan pesat ekosistem blockchain',
      'Gaji kompetitif setara dengan AI specialists',
      'Membutuhkan pemahaman cryptography dan decentralization'
    ],
    aiProofSkills: ['Blockchain Development', 'Smart Contracts', 'Cryptography', 'DeFi Protocols'],
    timeline: '2025-2040'
  },
  {
    id: 'ai-workforce-trainer',
    title: 'AI Workforce Trainer',
    category: 'Teknologi & AI',
    description: 'Melatih karyawan dan organisasi untuk mengadopsi dan menggunakan AI secara efektif dalam pekerjaan mereka.',
    aiReplacementRisk: 8,
    salaryRange: { min: 85000000, max: 150000000, currency: 'IDR' },
    growthProjection: 'Sangat Tinggi',
    isNewProfession: true,
    requiredSkills: [],
    roadmap: { id: '', jobId: '', phases: [], totalDuration: '8-12 bulan', difficulty: 'Menengah' },
    interestingFacts: [
      '75% pekerja menggunakan AI tanpa pelatihan formal',
      'Kesenjangan antara adopsi AI (75%) dan pelatihan (39%)',
      'Menjembatani teknologi dan human resources'
    ],
    aiProofSkills: ['AI Literacy', 'Training Design', 'Change Management', 'Communication'],
    timeline: '2025-2035'
  },
  {
    id: 'human-machine-team-manager',
    title: 'Human-Machine Team Manager',
    category: 'Teknologi & AI',
    description: 'Memimpin tim hybrid yang terdiri dari manusia dan AI, mengoptimalkan kolaborasi untuk produktivitas maksimal.',
    aiReplacementRisk: 5,
    salaryRange: { min: 130000000, max: 220000000, currency: 'IDR' },
    growthProjection: 'Tinggi',
    isNewProfession: true,
    requiredSkills: [],
    roadmap: { id: '', jobId: '', phases: [], totalDuration: '10-15 bulan', difficulty: 'Lanjutan' },
    interestingFacts: [
      'Masa depan kerja adalah kolaborasi manusia-AI',
      'Memadukan kepemimpinan tradisional dengan AI literacy',
      'Mengoptimalkan kekuatan unik manusia dan mesin'
    ],
    aiProofSkills: ['Leadership', 'Systems Thinking', 'Human-AI Collaboration', 'Innovation Management'],
    timeline: '2025-2040'
  }
];

// Gabungkan semua jobs
export const allJobs: Job[] = [...disappearingJobs, ...futureJobs];

// EXPORTS DENGAN NAMA YANG LEBIH JELAS
// Untuk backward compatibility, export dengan nama lama juga
export const riskJobs: Job[] = disappearingJobs;
export const emergingJobs: Job[] = futureJobs;

// Kategorisasi jobs berdasarkan tingkat risiko AI
export const jobsByRiskLevel = {
  high: allJobs.filter(job => job.aiReplacementRisk >= 70),
  medium: allJobs.filter(job => job.aiReplacementRisk >= 30 && job.aiReplacementRisk < 70),
  low: allJobs.filter(job => job.aiReplacementRisk < 30)
};

// Kategorisasi jobs berdasarkan kategori
export const jobsByCategory = allJobs.reduce((acc, job) => {
  if (!acc[job.category]) {
    acc[job.category] = [];
  }
  acc[job.category].push(job);
  return acc;
}, {} as Record<JobCategory, Job[]>);

// Jobs dengan pertumbuhan tinggi
export const highGrowthJobs = allJobs.filter(job => 
  job.growthProjection === 'Sangat Tinggi' || job.growthProjection === 'Tinggi'
);

// KATEGORISASI UTAMA - PEKERJAAN YANG AKAN HILANG VS MASA DEPAN
export const jobSeparation = {
  disappearing: disappearingJobs, // Pekerjaan yang akan hilang/tergantikan AI
  future: futureJobs, // Pekerjaan masa depan yang akan berkembang
  // Filter berdasarkan status
  byStatus: {
    willDisappear: disappearingJobs.filter(job => job.growthProjection === 'Menurun'),
    willEmerge: futureJobs.filter(job => job.isNewProfession === true),
    willGrow: futureJobs.filter(job => job.growthProjection === 'Sangat Tinggi' || job.growthProjection === 'Tinggi')
  }
};