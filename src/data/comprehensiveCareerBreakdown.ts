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
    salaryRange: "Rp 10 - 25 Juta",
    growth: "Sangat Tinggi",
    timeline: "18-24 minggu",
    summary: "Jadilah arsitek data di era AI. Data Scientist adalah salah satu profesi paling dicari di abad ke-21, yang menggabungkan keahlian statistika, pemrograman, dan wawasan bisnis untuk mengubah data mentah menjadi keputusan strategis. Dengan roadmap yang telah disempurnakan ini, Anda akan dibimbing dari dasar hingga mahir, menguasai teknologi Big Data, Cloud, dan Machine Learning untuk menjadi talenta yang siap menghadapi masa depan dan memimpin industri.",
    phases: [
      {
        phase: "FASE 1: FONDASI KUANTITATIF & ANALITIS",
        title: "Fondasi Kuantitatif & Analitis",
        duration: "4-6 minggu",
        objective: "Membangun fondasi matematis dan pola pikir analitis yang kokoh, yang merupakan tulang punggung dari setiap keputusan berbasis data.",
        skills: [
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Statistika Terapan & Probabilitas",
            importance: 9,
            timeToMaster: "4-6 minggu",
            description: "Statistika deskriptif vs inferensial, teori probabilitas & distribusi, uji hipotesis (A/B Testing), regresi & korelasi untuk analisis data dan pemodelan prediktif",
            concepts: ["Statistika Deskriptif vs Inferensial", "Teori Probabilitas & Distribusi", "Uji Hipotesis (A/B Testing)", "Regresi & Korelasi"],
            coreConcepts: [
              {
                title: "Statistika Deskriptif vs Inferensial",
                description: "Deskriptif merangkum data yang ada (mean, median), sementara Inferensial menggunakan sampel untuk membuat kesimpulan tentang populasi yang lebih besar (uji hipotesis)"
              },
              {
                title: "Teori Probabilitas & Distribusi",
                description: "Memahami kemungkinan terjadinya suatu peristiwa dan bagaimana data tersebar (misalnya, Distribusi Normal), yang menjadi dasar pemodelan prediktif"
              },
              {
                title: "Uji Hipotesis (A/B Testing)",
                description: "Kerangka kerja formal untuk menguji apakah suatu hipotesis (misalnya, 'desain baru meningkatkan konversi') benar secara statistik, bukan karena kebetulan semata"
              },
              {
                title: "Regresi & Korelasi",
                description: "Memahami dan mengukur kekuatan hubungan antara dua variabel atau lebih (korelasi) serta memodelkan hubungan tersebut untuk prediksi (regresi)"
              }
            ],
            masteryGoals: [
              {
                id: "beginner-stats",
                description: "Hitung ukuran tendensi sentral (mean, median, modus) dan sebaran (standar deviasi, rentang) menggunakan Python/Excel"
              },
              {
                id: "intermediate-stats",
                description: "Terapkan uji hipotesis (uji-t) pada dataset nyata untuk membandingkan dua kelompok, misalnya, efektivitas dua kampanye iklan yang berbeda"
              },
              {
                id: "advanced-stats",
                description: "Rancang dan analisis eksperimen A/B testing dari awal hingga akhir, termasuk penentuan ukuran sampel dan analisis power"
              }
            ],
            practicalProjects: [
              {
                title: "Analisis Signifikansi Statistik pada A/B Test Website",
                description: "Diberikan dataset hasil A/B test perubahan warna tombol di situs e-commerce, gunakan uji-t untuk menentukan apakah perubahan desain tersebut memiliki dampak yang signifikan secara statistik terhadap tingkat konversi. Tulis laporan singkat yang menjelaskan hasilnya untuk manajer produk."
              },
              {
                title: "Analisis Korelasi Harga Properti",
                description: "Gunakan dataset properti untuk menganalisis korelasi antara berbagai fitur (luas bangunan, jumlah kamar tidur, jarak ke pusat kota) dan harga jual. Buat visualisasi scatter plot untuk menunjukkan hubungan yang paling kuat dan jelaskan temuan Anda."
              }
            ],
            aiProofLevel: 85
          },
          {
            icon: "🧠",
            type: "Soft Skill",
            name: "Analytical Thinking",
            importance: 10,
            timeToMaster: "Berkelanjutan",
            description: "Dekomposisi masalah, identifikasi pola, berpikir kritis, inferensi logis untuk memecahkan masalah bisnis dengan data",
            concepts: ["Dekomposisi Masalah", "Identifikasi Pola", "Berpikir Kritis", "Inferensi Logis"],
            coreConcepts: [
              {
                title: "Dekomposisi Masalah",
                description: "Kemampuan memecah masalah bisnis yang besar dan ambigu menjadi pertanyaan-pertanyaan yang lebih kecil dan dapat diuji dengan data"
              },
              {
                title: "Identifikasi Pola",
                description: "Melihat melampaui angka mentah untuk mengenali tren, anomali, atau hubungan tersembunyi di dalam data yang tidak terlihat secara kasat mata"
              },
              {
                title: "Berpikir Kritis",
                description: "Mengevaluasi validitas data dan asumsi secara kritis, serta mempertanyakan hasil analisis untuk menghindari kesimpulan yang salah atau bias"
              },
              {
                title: "Inferensi Logis",
                description: "Menarik kesimpulan yang beralasan dan dapat dipertahankan dari bukti data yang ada, serta mengkomunikasikan keterbatasan dari kesimpulan tersebut"
              }
            ],
            masteryGoals: [
              {
                id: "beginner-analytical",
                description: "Ambil sebuah masalah (misalnya, 'Mengapa penjualan turun bulan lalu?') dan tuliskan 5 pertanyaan spesifik yang dapat dijawab dengan data"
              },
              {
                id: "intermediate-analytical",
                description: "Diberikan sebuah dataset, identifikasi potensi bias (misalnya, bias seleksi, data yang tidak lengkap) yang dapat memengaruhi analisis"
              },
              {
                id: "advanced-analytical",
                description: "Evaluasi sebuah studi kasus analisis data dan identifikasi kekuatan serta kelemahan metodologinya"
              }
            ],
            practicalProjects: [
              {
                title: "Analisis Penurunan Keterlibatan Pengguna",
                description: "Anda adalah seorang analis di sebuah aplikasi media sosial yang melihat penurunan waktu rata-rata pengguna sebesar 15%. Dekomposisi masalah ini menjadi beberapa hipotesis (misalnya, bug teknis, pembaruan UI yang buruk, kampanye kompetitor). Buatlah rencana analisis untuk memvalidasi setiap hipotesis."
              },
              {
                title: "Studi Kasus Kritis dari Berita",
                description: "Cari sebuah artikel berita yang menggunakan data untuk mendukung klaimnya. Lakukan analisis kritis terhadap visualisasi dan interpretasi data yang disajikan. Tulis sebuah ulasan singkat yang menyoroti apakah kesimpulan yang ditarik valid dan apa saja potensi bias yang mungkin ada."
              }
            ],
            aiProofLevel: 95
          }
        ]
      },
      {
        phase: "FASE 2: PEMROGRAMAN & MANIPULASI DATA",
        title: "Pemrograman & Manipulasi Data",
        duration: "4 minggu",
        objective: "Menguasai alat fundamental—Python dan SQL—untuk mengambil, membersihkan, dan mengubah data mentah menjadi format yang siap dianalisis.",
        skills: [
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Python untuk Analisis Data",
            importance: 10,
            timeToMaster: "4 minggu",
            description: "Struktur data Pandas, data wrangling/munging, operasi join & merge, otomatisasi dengan fungsi untuk manipulasi dan analisis data",
            concepts: ["Struktur Data Pandas", "Data Wrangling/Munging", "Operasi Join & Merge", "Otomatisasi dengan Fungsi"],
            coreConcepts: [
              {
                title: "Struktur Data Pandas",
                description: "Menguasai DataFrame sebagai struktur data utama untuk data tabular, memungkinkan operasi pemfilteran, pengurutan, dan agregasi yang efisien"
              },
              {
                title: "Data Wrangling/Munging",
                description: "Proses membersihkan dan mengubah data mentah yang tidak terstruktur atau berantakan menjadi format yang bersih dan terorganisir untuk analisis"
              },
              {
                title: "Operasi Join & Merge",
                description: "Menggabungkan beberapa dataset menjadi satu berdasarkan kolom atau kunci yang sama, sebuah tugas fundamental dalam analisis data dunia nyata"
              },
              {
                title: "Otomatisasi dengan Fungsi",
                description: "Menulis fungsi kustom untuk melakukan tugas-tugas yang berulang, membuat alur kerja analisis Anda menjadi efisien, dapat direproduksi, dan bebas dari kesalahan"
              }
            ],
            masteryGoals: [
              {
                id: "beginner-python",
                description: "Lakukan operasi dasar pada DataFrame Pandas: memilih kolom, memfilter baris berdasarkan kondisi, dan menangani nilai yang hilang (dropna, fillna)"
              },
              {
                id: "intermediate-python",
                description: "Lakukan agregasi data menggunakan groupby() untuk menghitung statistik ringkasan (misalnya, total penjualan per kategori produk)"
              },
              {
                id: "advanced-python",
                description: "Terapkan fungsi kustom pada kolom DataFrame menggunakan metode .apply() dan lakukan operasi time series dasar"
              }
            ],
            practicalProjects: [
              {
                title: "Analisis dan Pembersihan Data Transaksi E-commerce",
                description: "Gunakan Pandas untuk membersihkan dataset transaksi yang berisi data duplikat, nilai yang hilang, dan format yang tidak konsisten. Setelah pembersihan, hitung metrik bisnis utama seperti total pendapatan, jumlah pelanggan unik, dan produk terlaris."
              },
              {
                title: "Analisis Data Cuaca Historis",
                description: "Ambil dataset cuaca historis dan gunakan Pandas untuk menjawab pertanyaan seperti 'Bulan apa yang rata-rata paling panas?' dan 'Berapa jumlah hari hujan dalam setahun?'. Lakukan operasi groupby dan agregasi untuk menemukan jawabannya."
              }
            ],
            aiProofLevel: 70
          },
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "SQL (Advanced)",
            importance: 10,
            timeToMaster: "3 minggu",
            description: "Advanced JOINs, subqueries & CTEs, window functions, agregasi & grouping untuk query data skala besar",
            concepts: ["Advanced JOINs", "Subqueries & CTEs", "Window Functions", "Agregasi & Grouping"],
            coreConcepts: [
              {
                title: "Advanced JOINs",
                description: "Menguasai berbagai jenis JOIN (INNER, LEFT, RIGHT, FULL OUTER) untuk menggabungkan data dari beberapa tabel secara akurat"
              },
              {
                title: "Subqueries & CTEs",
                description: "Menggunakan subquery atau CTE untuk memecah kueri yang kompleks menjadi langkah-langkah logis yang lebih kecil dan mudah dibaca"
              },
              {
                title: "Window Functions",
                description: "Melakukan perhitungan pada sekelompok baris yang terkait dengan baris saat ini (misalnya, menghitung rata-rata bergerak atau peringkat)"
              },
              {
                title: "Agregasi & Grouping",
                description: "Menggunakan fungsi agregat (COUNT, SUM, AVG) dengan klausa GROUP BY dan HAVING untuk merangkum data dan menjawab pertanyaan bisnis"
              }
            ],
            masteryGoals: [
              {
                id: "beginner-sql",
                description: "Tulis kueri SELECT dengan klausa WHERE, GROUP BY, dan ORDER BY pada satu tabel"
              },
              {
                id: "intermediate-sql",
                description: "Tulis kueri yang menggunakan subquery di dalam klausa WHERE atau FROM dan gunakan CTE (WITH clause)"
              },
              {
                id: "advanced-sql",
                description: "Terapkan window functions seperti ROW_NUMBER(), RANK(), LEAD(), dan LAG() untuk analisis peringkat dan perbandingan"
              }
            ],
            practicalProjects: [
              {
                title: "Analisis Perilaku Pengguna di Platform Musik",
                description: "Dengan menggunakan database skema bintang (tabel fakta dan dimensi), tulis kueri SQL untuk menemukan 10 artis yang paling sering didengarkan dan identifikasi pengguna yang paling aktif berdasarkan jumlah lagu yang diputar dalam sebulan terakhir."
              },
              {
                title: "Menghitung Pertumbuhan Pendapatan Bulanan",
                description: "Gunakan dataset transaksi untuk menulis kueri SQL dengan CTE dan window functions untuk menghitung pertumbuhan pendapatan dari bulan ke bulan (Month-over-Month growth). Visualisasikan hasilnya untuk menunjukkan tren pertumbuhan bisnis."
              }
            ],
            aiProofLevel: 75
          },
          {
            icon: "🧠",
            type: "Soft Skill",
            name: "Attention to Detail",
            importance: 9,
            timeToMaster: "2-4 bulan",
            description: "Ketelitian dalam data analysis dan model validation untuk memastikan accuracy",
            concepts: ["Data Validation", "Error Detection", "Quality Assurance", "Precision Focus"],
            aiProofLevel: 90
          }
        ]
      },
      {
        phase: "FASE 3: ANALISIS EKSPLORATIF & KOMUNIKASI WAWASAN",
        title: "Analisis Eksploratif & Komunikasi Wawasan",
        duration: "3 minggu",
        objective: "Mengubah data yang telah dibersihkan menjadi wawasan yang dapat dipahami dan mengkomunikasikannya secara efektif melalui visualisasi dan narasi.",
        skills: [
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Visualisasi & Penceritaan Data (Storytelling)",
            importance: 9,
            timeToMaster: "3 minggu",
            description: "Memilih visualisasi yang tepat, prinsip desain visual, struktur narasi data, dashboard interaktif untuk komunikasi wawasan bisnis",
            concepts: ["Memilih Visualisasi yang Tepat", "Prinsip Desain Visual", "Struktur Narasi Data", "Dashboard Interaktif"],
            coreConcepts: [
              {
                title: "Memilih Visualisasi yang Tepat",
                description: "Mengetahui kapan harus menggunakan grafik batang (perbandingan), grafik garis (tren waktu), diagram sebar (hubungan), atau peta panas (kepadatan)"
              },
              {
                title: "Prinsip Desain Visual",
                description: "Menerapkan prinsip-prinsip seperti memaksimalkan data-ink ratio dan mengurangi chart junk untuk menciptakan visualisasi yang bersih dan efektif"
              },
              {
                title: "Struktur Narasi Data",
                description: "Membangun cerita yang memiliki awal (konteks masalah), tengah (analisis dan temuan), dan akhir (kesimpulan dan rekomendasi)"
              },
              {
                title: "Dashboard Interaktif",
                description: "Menggunakan alat seperti Tableau atau Power BI untuk membuat dasbor yang memungkinkan pemangku kepentingan menjelajahi data sendiri"
              }
            ],
            masteryGoals: [
              {
                id: "beginner-viz",
                description: "Buat grafik statis yang jelas dan berlabel baik (diagram batang, garis, sebar) menggunakan Matplotlib & Seaborn di Python"
              },
              {
                id: "intermediate-viz",
                description: "Bangun sebuah dashboard interaktif sederhana di Tableau Public atau Power BI yang terdiri dari 2-3 visualisasi yang saling terhubung"
              },
              {
                id: "advanced-viz",
                description: "Rancang sebuah 'data story' yang lengkap, dari identifikasi masalah bisnis hingga presentasi akhir yang meyakinkan"
              }
            ],
            practicalProjects: [
              {
                title: "Dashboard Penjualan E-commerce Global",
                description: "Gunakan dataset penjualan global untuk membuat dashboard interaktif di Tableau Public. Dashboard harus menampilkan total penjualan berdasarkan negara (peta), tren penjualan dari waktu ke waktu (grafik garis), dan performa kategori produk (grafik batang)."
              },
              {
                title: "Presentasi 'Storytelling' tentang Faktor Kesuksesan Film",
                description: "Analisis dataset film (misalnya, dari IMDb) dan buat presentasi naratif 5 slide yang menjawab pertanyaan: 'Apa faktor yang paling berkorelasi dengan rating film yang tinggi?'. Gunakan visualisasi untuk mendukung argumen Anda."
              }
            ],
            aiProofLevel: 80
          },
          {
            icon: "🧠",
            type: "Soft Skill",
            name: "Data Storytelling",
            importance: 10,
            timeToMaster: "Berkelanjutan",
            description: "Struktur narasi data, komunikasi untuk audiens non-teknis, mengelola ekspektasi, empati terhadap pemangku kepentingan, mempengaruhi keputusan dengan data",
            concepts: ["Struktur Narasi Data", "Komunikasi untuk Audiens Non-Teknis", "Mengelola Ekspektasi", "Mempengaruhi Keputusan dengan Data"],
            aiProofLevel: 95
          }
        ]
      },
      {
        phase: "FASE 4: DASAR-DASAR MACHINE LEARNING",
        title: "Dasar-Dasar Machine Learning",
        duration: "4 minggu",
        objective: "Masuk ke inti ilmu data dengan membangun dan mengevaluasi model prediktif untuk memecahkan masalah klasifikasi dan regresi.",
        skills: [
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Supervised Learning",
            importance: 10,
            timeToMaster: "4 minggu",
            description: "Klasifikasi vs regresi, proses training-validation-test, metrik evaluasi, overfitting & underfitting untuk model prediktif",
            concepts: ["Klasifikasi vs Regresi", "Proses Training-Validation-Test", "Metrik Evaluasi", "Overfitting & Underfitting"],
            coreConcepts: [
              {
                title: "Klasifikasi vs Regresi",
                description: "Klasifikasi memprediksi label kategori (misalnya, 'kucing' atau 'anjing'), sementara regresi memprediksi nilai numerik kontinu (misalnya, harga rumah)"
              },
              {
                title: "Proses Training-Validation-Test",
                description: "Membagi data menjadi tiga set: untuk melatih model (training), untuk menyetel parameter model (validation), dan untuk menguji performa akhir (test)"
              },
              {
                title: "Metrik Evaluasi",
                description: "Memilih metrik yang tepat untuk mengevaluasi model, seperti Akurasi dan F1-Score untuk klasifikasi, atau Mean Absolute Error (MAE) untuk regresi"
              },
              {
                title: "Overfitting & Underfitting",
                description: "Memahami masalah umum di mana model terlalu menghafal data training (overfitting) atau terlalu sederhana untuk menangkap pola (underfitting)"
              }
            ],
            masteryGoals: [
              {
                id: "beginner-ml",
                description: "Latih model regresi linear dan regresi logistik sederhana menggunakan scikit-learn"
              },
              {
                id: "intermediate-ml",
                description: "Terapkan algoritma yang lebih canggih seperti Decision Trees, Random Forests, dan Support Vector Machines (SVM)"
              },
              {
                id: "advanced-ml",
                description: "Lakukan penyetelan hyperparameter (misalnya, menggunakan GridSearchCV) untuk menemukan konfigurasi model yang optimal"
              }
            ],
            practicalProjects: [
              {
                title: "Prediksi Kelangsungan Hidup Penumpang Titanic",
                description: "Gunakan dataset Titanic yang terkenal untuk membangun model klasifikasi biner yang memprediksi apakah seorang penumpang akan selamat atau tidak berdasarkan fitur seperti usia, jenis kelamin, dan kelas tiket. Bandingkan performa setidaknya dua algoritma yang berbeda."
              },
              {
                title: "Model Prediksi Harga Rumah",
                description: "Bangun sebuah model regresi menggunakan dataset properti untuk memprediksi harga jual rumah. Lakukan feature engineering sederhana (misalnya, membuat fitur baru dari yang sudah ada) dan evaluasi model Anda menggunakan metrik R-squared."
              }
            ],
            aiProofLevel: 60
          },
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Unsupervised Learning",
            importance: 7,
            timeToMaster: "2 minggu",
            description: "Clustering (pengelompokan), algoritma K-Means, dimensionality reduction (PCA), association rule mining untuk pola data tersembunyi",
            concepts: ["Clustering (Pengelompokan)", "Algoritma K-Means", "Dimensionality Reduction (PCA)", "Association Rule Mining"],
            coreConcepts: [
              {
                title: "Clustering (Pengelompokan)",
                description: "Teknik untuk mengelompokkan titik data yang serupa ke dalam cluster-cluster berdasarkan karakteristiknya, tanpa menggunakan label yang sudah ada"
              },
              {
                title: "Algoritma K-Means",
                description: "Salah satu algoritma clustering yang paling populer, yang bertujuan untuk mempartisi data ke dalam 'K' jumlah cluster yang telah ditentukan"
              },
              {
                title: "Dimensionality Reduction (PCA)",
                description: "Teknik seperti Principal Component Analysis (PCA) yang digunakan untuk mengurangi jumlah variabel dalam dataset sambil mempertahankan informasi"
              },
              {
                title: "Association Rule Mining",
                description: "Menemukan aturan asosiasi yang menarik antar item dalam dataset besar, seperti 'pelanggan yang membeli roti juga cenderung membeli susu'"
              }
            ],
            masteryGoals: [
              {
                id: "beginner-unsupervised",
                description: "Pahami konsep dasar clustering dan kapan harus menggunakannya, serta terapkan algoritma K-Means pada dataset 2D sederhana"
              },
              {
                id: "intermediate-unsupervised",
                description: "Gunakan 'metode siku' (elbow method) untuk menentukan jumlah cluster (K) yang optimal untuk K-Means"
              },
              {
                id: "advanced-unsupervised",
                description: "Terapkan algoritma clustering yang lebih canggih seperti DBSCAN dan interpretasikan hasil clustering dalam konteks bisnis"
              }
            ],
            practicalProjects: [
              {
                title: "Segmentasi Pelanggan Mall",
                description: "Gunakan dataset pelanggan mall yang berisi usia, pendapatan tahunan, dan skor pengeluaran untuk menerapkan K-Means clustering. Identifikasi dan visualisasikan segmen pelanggan yang berbeda (misalnya, 'hemat tapi sering', 'boros tapi jarang')."
              },
              {
                title: "Pengurangan Dimensi untuk Visualisasi Gambar Tulisan Tangan",
                description: "Ambil dataset gambar tulisan tangan MNIST, yang memiliki 784 dimensi (piksel). Terapkan PCA untuk mengurangi dimensinya menjadi hanya 2 komponen utama. Buat scatter plot dari 2 komponen ini dengan warna berdasarkan label angka aslinya."
              }
            ],
            aiProofLevel: 65
          },
          {
            icon: "🧠",
            type: "Soft Skill",
            name: "Critical Thinking",
            importance: 9,
            timeToMaster: "6-12 bulan",
            description: "Evaluasi objektif terhadap informasi dan asumsi dalam data analysis",
            concepts: ["Evaluasi Validitas Data", "Pertanyaan Asumsi", "Analisis Kritis", "Pengecekan Bias"],
            aiProofLevel: 95
          }
        ]
      },
      {
        phase: "FASE 5: BIG DATA & TEKNOLOGI CLOUD",
        title: "Big Data & Teknologi Cloud",
        duration: "3 minggu",
        objective: "Meningkatkan skala kemampuan Anda dengan belajar mengolah data yang terlalu besar untuk satu mesin menggunakan alat Big Data dan platform cloud.",
        skills: [
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Big Data Processing",
            importance: 7,
            timeToMaster: "3 minggu",
            description: "Tiga V (Volume, Velocity, Variety), pemrosesan terdistribusi, ekosistem Hadoop & Spark, querying data di skala besar",
            concepts: ["Tiga V (Volume, Velocity, Variety)", "Pemrosesan Terdistribusi", "Ekosistem Hadoop & Spark", "Querying Data di Skala Besar"],
            coreConcepts: [
              {
                title: "Tiga V (Volume, Velocity, Variety)",
                description: "Karakteristik utama Big Data: Volume (jumlah data yang sangat besar), Velocity (kecepatan data dihasilkan), dan Variety (berbagai jenis data)"
              },
              {
                title: "Pemrosesan Terdistribusi",
                description: "Konsep memecah tugas komputasi besar menjadi bagian-bagian kecil dan mendistribusikannya ke banyak komputer (cluster) untuk diproses secara paralel"
              },
              {
                title: "Ekosistem Hadoop & Spark",
                description: "Hadoop adalah kerangka kerja asli untuk penyimpanan terdistribusi (HDFS) dan pemrosesan (MapReduce). Spark adalah evolusi yang lebih cepat dan fleksibel"
              },
              {
                title: "Querying Data di Skala Besar",
                description: "Menggunakan alat seperti Hive atau Spark SQL untuk menulis kueri mirip SQL yang dapat dieksekusi pada dataset berukuran terabyte atau petabyte"
              }
            ],
            masteryGoals: [
              {
                id: "beginner-bigdata",
                description: "Pahami perbedaan arsitektur antara komputasi mesin tunggal dan komputasi terdistribusi"
              },
              {
                id: "intermediate-bigdata",
                description: "Gunakan PySpark (antarmuka Python untuk Spark) untuk melakukan operasi manipulasi data pada file besar secara lokal"
              },
              {
                id: "advanced-bigdata",
                description: "Rancang sebuah pipeline data batch sederhana di Spark yang membaca data mentah, melakukan transformasi, dan menulis hasilnya"
              }
            ],
            practicalProjects: [
              {
                title: "Analisis Log Web Server dengan PySpark",
                description: "Diberikan file log web server berukuran besar, gunakan PySpark untuk memproses data ini dan mengekstrak wawasan. Jawab pertanyaan seperti 'Alamat IP mana yang paling sering mengunjungi situs?' dan 'Halaman mana yang paling populer?'."
              },
              {
                title: "Querying Dataset Penerbangan Skala Besar",
                description: "Gunakan dataset publik tentang data penerbangan (jutaan baris) yang disimpan dalam format Parquet. Gunakan Spark SQL di lingkungan seperti Databricks Community Edition untuk menemukan bandara tersibuk dan maskapai dengan penundaan rata-rata terlama."
              }
            ],
            aiProofLevel: 50
          },
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Cloud Computing",
            importance: 8,
            timeToMaster: "2 minggu",
            description: "IaaS, PaaS, SaaS, penyimpanan cloud (Object Storage), komputasi sesuai permintaan, managed AI/ML services",
            concepts: ["IaaS, PaaS, SaaS", "Penyimpanan Cloud (Object Storage)", "Komputasi Sesuai Permintaan", "Managed AI/ML Services"],
            coreConcepts: [
              {
                title: "IaaS, PaaS, SaaS",
                description: "Tiga model layanan cloud utama. IaaS (Infrastructure as a Service) menyediakan komputasi dasar (misalnya, AWS EC2). PaaS (Platform as a Service) menyediakan platform untuk membangun aplikasi (misalnya, Heroku). SaaS (Software as a Service) menyediakan aplikasi siap pakai (misalnya, Gmail)"
              },
              {
                title: "Penyimpanan Cloud (Object Storage)",
                description: "Memahami layanan seperti Amazon S3 atau Google Cloud Storage sebagai cara yang skalabel dan hemat biaya untuk menyimpan data dalam jumlah besar"
              },
              {
                title: "Komputasi Sesuai Permintaan",
                description: "Kemampuan untuk menyewa dan menjalankan mesin virtual (server) dengan berbagai ukuran dan kekuatan dalam hitungan menit, dan hanya membayar untuk apa yang digunakan"
              },
              {
                title: "Managed AI/ML Services",
                description: "Memanfaatkan layanan AI/ML yang dikelola oleh penyedia cloud (misalnya, Google AI Platform, Amazon SageMaker) untuk melatih dan men-deploy model machine learning"
              }
            ],
            masteryGoals: [
              {
                id: "beginner-cloud",
                description: "Buat akun gratis di salah satu penyedia cloud utama (AWS, GCP, atau Azure) dan unggah file menggunakan layanan object storage"
              },
              {
                id: "intermediate-cloud",
                description: "Luncurkan dan konfigurasikan sebuah mesin virtual Linux sederhana (misalnya, t2.micro di AWS EC2)"
              },
              {
                id: "advanced-cloud",
                description: "Gunakan platform notebook yang dikelola cloud seperti Google Colab atau Amazon SageMaker Studio Lab untuk melatih model machine learning"
              }
            ],
            practicalProjects: [
              {
                title: "Hosting Dataset di Cloud Storage",
                description: "Ambil dataset berukuran sedang (misalnya, 1-2 GB) dan unggah ke bucket Amazon S3 atau Google Cloud Storage. Konfigurasikan izin aksesnya agar dapat diakses secara publik (hanya baca) dan bagikan tautan untuk mengunduhnya."
              },
              {
                title: "Melatih Model di Google Colab dengan GPU",
                description: "Gunakan Google Colab untuk melatih sebuah model klasifikasi gambar sederhana pada dataset seperti CIFAR-10. Manfaatkan fitur akselerator GPU gratis yang disediakan Colab untuk mempercepat proses pelatihan secara signifikan."
              }
            ],
            aiProofLevel: 55
          }
        ]
      },
      {
        phase: "FASE 6: MACHINE LEARNING LANJUTAN & AI",
        title: "Machine Learning Lanjutan & AI",
        duration: "4 minggu",
        objective: "Menyelami teknik-teknik canggih yang menjadi ujung tombak inovasi AI saat ini, dari Deep Learning hingga praktik operasionalisasi model.",
        skills: [
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Deep Learning",
            importance: 8,
            timeToMaster: "4 minggu",
            description: "Artificial Neural Networks (ANN), Convolutional Neural Networks (CNN), Recurrent Neural Networks (RNN) & Transformers, transfer learning",
            concepts: ["Artificial Neural Networks (ANN)", "Convolutional Neural Networks (CNN)", "Recurrent Neural Networks (RNN) & Transformers", "Transfer Learning"],
            coreConcepts: [
              {
                title: "Artificial Neural Networks (ANN)",
                description: "Model yang terinspirasi dari otak manusia, terdiri dari lapisan-lapisan neuron yang saling terhubung untuk mempelajari pola yang kompleks dari data"
              },
              {
                title: "Convolutional Neural Networks (CNN)",
                description: "Arsitektur khusus untuk data gambar, yang menggunakan filter convolutional untuk secara otomatis mendeteksi fitur seperti tepi, bentuk, dan objek"
              },
              {
                title: "Recurrent Neural Networks (RNN) & Transformers",
                description: "Arsitektur untuk data sekuensial seperti teks atau time series. RNN memproses data secara berurutan, sementara arsitektur Transformer menggunakan mekanisme self-attention"
              },
              {
                title: "Transfer Learning",
                description: "Teknik yang sangat kuat di mana sebuah model yang telah dilatih pada dataset raksasa diadaptasi (fine-tuned) untuk tugas spesifik dengan data yang jauh lebih sedikit"
              }
            ],
            masteryGoals: [
              {
                id: "beginner-deeplearning",
                description: "Bangun dan latih sebuah Jaringan Saraf Tiruan sederhana untuk data tabular menggunakan Keras"
              },
              {
                id: "intermediate-deeplearning",
                description: "Terapkan model CNN yang telah dilatih sebelumnya (pre-trained model) seperti VGG16 atau ResNet menggunakan transfer learning"
              },
              {
                id: "advanced-deeplearning",
                description: "Bangun model CNN dari awal untuk masalah klasifikasi gambar yang lebih kompleks dan terapkan arsitektur Transformer untuk tugas NLP"
              }
            ],
            practicalProjects: [
              {
                title: "Klasifikasi Gambar Anjing vs. Kucing",
                description: "Gunakan teknik transfer learning dengan model CNN yang sudah ada (misalnya, MobileNetV2) untuk membangun pengklasifikasi gambar yang sangat akurat untuk membedakan antara gambar anjing dan kucing. Latih model pada dataset kustom yang Anda kumpulkan atau unduh."
              },
              {
                title: "Analisis Sentimen Ulasan Produk dengan Transformer",
                description: "Manfaatkan model Transformer yang telah dilatih sebelumnya dari Hugging Face (seperti BERT) untuk melakukan analisis sentimen pada dataset ulasan produk Amazon. Bandingkan hasilnya dengan model machine learning klasik dan tunjukkan peningkatan akurasi yang signifikan."
              }
            ],
            aiProofLevel: 40
          },
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "MLOps (Machine Learning Operations)",
            importance: 7,
            timeToMaster: "3 minggu",
            description: "Siklus hidup ML, deployment model, version control untuk data & model, pemantauan & retraining untuk operationalisasi model",
            concepts: ["Siklus Hidup ML", "Deployment Model", "Version Control untuk Data & Model", "Pemantauan & Retraining"],
            coreConcepts: [
              {
                title: "Siklus Hidup ML",
                description: "Memahami bahwa proyek ML bukan hanya tentang melatih model, tetapi seluruh siklus hidup dari pengumpulan data, pelatihan, evaluasi, deployment, hingga pemantauan"
              },
              {
                title: "Deployment Model",
                description: "Proses mengambil model ML yang telah dilatih dan membuatnya tersedia untuk digunakan oleh aplikasi lain, biasanya melalui REST API"
              },
              {
                title: "Version Control untuk Data & Model",
                description: "Menggunakan alat seperti DVC (Data Version Control) dan Git untuk melacak perubahan pada data dan model, sama seperti melacak perubahan pada kode"
              },
              {
                title: "Pemantauan & Retraining",
                description: "Memantau performa model di produksi untuk mendeteksi model drift (penurunan performa seiring waktu) dan memiliki strategi untuk melatih ulang model"
              }
            ],
            masteryGoals: [
              {
                id: "beginner-mlops",
                description: "Simpan dan muat kembali model scikit-learn yang telah dilatih menggunakan pickle atau joblib"
              },
              {
                id: "intermediate-mlops",
                description: "Bangun sebuah API web sederhana menggunakan Flask atau FastAPI untuk men-deploy model scikit-learn Anda secara lokal"
              },
              {
                id: "advanced-mlops",
                description: "Gunakan alat experiment tracking seperti MLflow atau Weights & Biases untuk mencatat parameter, metrik, dan artefak dari berbagai proses pelatihan"
              }
            ],
            practicalProjects: [
              {
                title: "Deploy Model Prediksi Harga Rumah sebagai API",
                description: "Ambil model regresi harga rumah yang telah Anda buat sebelumnya. Bungkus model tersebut dalam sebuah API web menggunakan Flask atau FastAPI. Buat endpoint /predict yang menerima fitur rumah dalam format JSON dan mengembalikan prediksi harga."
              },
              {
                title: "Menggunakan MLflow untuk Melacak Eksperimen",
                description: "Latih beberapa versi model klasifikasi (misalnya, dengan hyperparameter yang berbeda). Gunakan MLflow untuk secara otomatis mencatat parameter, metrik performa (akurasi, F1-score), dan model yang telah dilatih untuk setiap eksperimen. Bandingkan hasilnya menggunakan UI MLflow."
              }
            ],
            aiProofLevel: 45
          }
        ]
      },
      {
        phase: "FASE 7: APLIKASI BISNIS & KOMUNIKASI",
        title: "Aplikasi Bisnis & Komunikasi",
        duration: "3 minggu",
        objective: "Menjembatani kesenjangan antara analisis teknis dan dampak bisnis nyata dengan mengasah ketajaman bisnis dan kemampuan mempengaruhi pemangku kepentingan.",
        skills: [
          {
            icon: "🛠️",
            type: "Hard Skill",
            name: "Business Acumen",
            importance: 9,
            timeToMaster: "Berkelanjutan",
            description: "Menerjemahkan masalah bisnis ke masalah data, fokus pada ROI, pemahaman metrik bisnis kunci, pengetahuan domain industri",
            concepts: ["Menerjemahkan Masalah Bisnis ke Masalah Data", "Fokus pada ROI", "Pemahaman Metrik Bisnis Kunci", "Pengetahuan Domain"],
            coreConcepts: [
              {
                title: "Menerjemahkan Masalah Bisnis ke Masalah Data",
                description: "Kemampuan untuk mengambil tujuan bisnis yang luas (misalnya, 'tingkatkan retensi pelanggan') dan menerjemahkannya menjadi masalah machine learning yang terdefinisi dengan baik"
              },
              {
                title: "Fokus pada ROI",
                description: "Memahami bahwa keberhasilan proyek data tidak diukur oleh akurasi model, tetapi oleh dampak bisnis yang dihasilkannya (peningkatan pendapatan, pengurangan biaya)"
              },
              {
                title: "Pemahaman Metrik Bisnis Kunci",
                description: "Mengetahui dan memahami metrik yang penting bagi bisnis, seperti Customer Lifetime Value (CLV), Customer Acquisition Cost (CAC), dan Churn Rate"
              },
              {
                title: "Pengetahuan Domain",
                description: "Memiliki pemahaman dasar tentang industri tempat Anda bekerja (misalnya, e-commerce, keuangan, kesehatan) untuk memberikan konteks pada analisis Anda"
              }
            ],
            masteryGoals: [
              {
                id: "beginner-business",
                description: "Pilih sebuah perusahaan publik dan baca laporan tahunannya. Identifikasi metrik utama yang mereka gunakan untuk mengukur kesuksesan"
              },
              {
                id: "intermediate-business",
                description: "Buat sebuah 'pohon metrik' (metric tree) untuk sebuah tujuan bisnis, memecahnya menjadi metrik-metrik pendorong yang dapat diukur"
              },
              {
                id: "advanced-business",
                description: "Kembangkan sebuah proposal proyek data lengkap yang mencakup definisi masalah, metrik keberhasilan, data yang dibutuhkan, dan estimasi dampak bisnis"
              }
            ],
            practicalProjects: [
              {
                title: "Proposal Proyek untuk Mengurangi Churn Pelanggan",
                description: "Bayangkan Anda adalah Data Scientist di sebuah perusahaan telekomunikasi. Tulis proposal 1 halaman yang menguraikan proyek untuk membangun model prediksi churn. Jelaskan masalah bisnisnya, bagaimana model ML dapat membantu, data apa yang dibutuhkan, dan bagaimana Anda akan mengukur keberhasilan proyek."
              },
              {
                title: "Analisis Bisnis dari Studi Kasus Publik",
                description: "Pilih studi kasus bisnis yang terkenal (misalnya, kebangkitan Netflix, kejatuhan Blockbuster). Identifikasi metrik-metrik kunci yang relevan dan jelaskan bagaimana keputusan berbasis data (atau ketiadaannya) memainkan peran penting dalam hasil akhir perusahaan tersebut."
              }
            ],
            aiProofLevel: 85
          },
          {
            icon: "🧠",
            type: "Soft Skill",
            name: "Stakeholder Management",
            importance: 10,
            timeToMaster: "Berkelanjutan",
            description: "Komunikasi untuk audiens non-teknis, mengelola ekspektasi, empati terhadap pemangku kepentingan, mempengaruhi keputusan dengan data",
            concepts: ["Komunikasi untuk Audiens Non-Teknis", "Mengelola Ekspektasi", "Empati terhadap Pemangku Kepentingan", "Mempengaruhi Keputusan dengan Data"],
            coreConcepts: [
              {
                title: "Komunikasi untuk Audiens Non-Teknis",
                description: "Kemampuan untuk menjelaskan temuan teknis yang kompleks dalam bahasa yang sederhana dan berorientasi pada bisnis, fokus pada 'apa artinya ini bagi kita'"
              },
              {
                title: "Mengelola Ekspektasi",
                description: "Secara proaktif berkomunikasi tentang kemajuan, tantangan, dan keterbatasan proyek data untuk membangun kepercayaan dan menghindari kesalahpahaman"
              },
              {
                title: "Empati terhadap Pemangku Kepentingan",
                description: "Memahami tujuan, kebutuhan, dan kekhawatiran dari berbagai pemangku kepentingan (misalnya, tim pemasaran, produk, eksekutif) dan menyesuaikan komunikasi"
              },
              {
                title: "Mempengaruhi Keputusan dengan Data",
                description: "Menggunakan data dan visualisasi tidak hanya untuk melaporkan, tetapi untuk membangun argumen yang meyakinkan dan mendorong pengambilan keputusan"
              }
            ],
            masteryGoals: [
              {
                id: "beginner-stakeholder",
                description: "Ambil sebuah analisis teknis dan tulis ringkasan email satu paragraf yang ditujukan untuk manajer non-teknis, fokus pada wawasan utama dan implikasinya"
              },
              {
                id: "intermediate-stakeholder",
                description: "Buat sebuah presentasi singkat (3-5 slide) dari hasil proyek data, yang dirancang khusus untuk audiens eksekutif yang sibuk"
              },
              {
                id: "advanced-stakeholder",
                description: "Pimpin sebuah pertemuan mock-up di mana Anda mempresentasikan temuan proyek dan memfasilitasi diskusi untuk mencapai konsensus"
              }
            ],
            practicalProjects: [
              {
                title: "Presentasi Hasil A/B Test untuk Tim Pemasaran",
                description: "Berdasarkan hasil proyek A/B test Anda sebelumnya, buat sebuah dek presentasi 5 slide yang ditujukan untuk Kepala Pemasaran. Hindari jargon statistik; sebaliknya, fokus pada cerita: 'Apa yang kita uji, apa yang kita pelajari, dan apa rekomendasi kita selanjutnya?'."
              },
              {
                title: "Simulasi Negosiasi Proyek",
                description: "Tulis sebuah skrip dialog singkat atau rekam video bermain peran di mana seorang Data Scientist bernegosiasi dengan seorang Manajer Produk mengenai ruang lingkup proyek. Tunjukkan bagaimana Data Scientist mengelola ekspektasi Manajer Produk mengenai apa yang mungkin dan tidak mungkin dilakukan."
              }
            ],
            aiProofLevel: 95
          }
        ]
      }
    ],
    keyInsights: [
      "Data Scientist adalah salah satu profesi paling dicari di abad ke-21, yang menggabungkan keahlian statistika, pemrograman, dan wawasan bisnis untuk mengubah data mentah menjadi keputusan strategis.",
      "Dengan roadmap yang telah disempurnakan ini, Anda akan dibimbing dari dasar hingga mahir, menguasai teknologi Big Data, Cloud, dan Machine Learning untuk menjadi talenta yang siap menghadapi masa depan.",
      "Peran Data Scientist tidak tergantikan oleh AI, melainkan diaugmentasi. AI menjadi alat bantu (co-pilot) yang kuat, sehingga fokus pekerjaan bergeser ke pemecahan masalah yang kompleks, pemikiran kritis, dan komunikasi strategis.",
      "Gaji berkisar antara Rp 10 - 25 Juta per bulan dengan prospek karir yang sangat tinggi dan risiko otomatisasi AI yang rendah."
    ],
    marketDrivers: [
      "Pengambilan keputusan berbasis data menjadi standar di semua industri",
      "Ledakan Big Data di era digital transformation",
      "Kebutuhan akan etika AI dan AI yang dapat dijelaskan (explainable AI)",
      "Integrasi AI sebagai co-pilot untuk meningkatkan produktivitas Data Scientist"
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