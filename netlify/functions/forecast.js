// Netlify function to simulate the AI career blueprint API
exports.handler = async (event) => {
  // Parse the incoming request
  const body = JSON.parse(event.body);
  const { userQuery } = body;

  // Simulate API processing delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Generate a simulated markdown response based on the user query
  const generateBlueprint = (profession) => {
    // Helper function to create a unique ID
    const createId = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-');

    // Data Scientist detailed content
    const dataScientistContent = {
      profession: "Data Scientist",
      category: "Teknologi & AI",
      aiRisk: 12,
      riskLevel: "Risiko Sangat Rendah",
      salaryRange: "Rp 10 - 25 Juta",
      growth: "Sangat Tinggi",
      timeline: "12-18 bulan",
      summary: "Jadilah arsitek data di era AI. Data Scientist adalah salah satu profesi paling dicari di abad ke-21, yang menggabungkan keahlian statistika, pemrograman, dan wawasan bisnis untuk mengubah data mentah menjadi keputusan strategis.",
      phases: [
        {
          phase: "FASE 1: FONDASI KUANTITATIF & ANALITIS",
          title: "Fondasi Kuantitatif & Analitis",
          duration: "4-6 minggu",
          objective: "Membangun fondasi matematis dan pola pikir analitis yang kokoh, yang merupakan tulang punggung dari setiap keputusan berbasis data.",
          skills: [
            {
              icon: "📊",
              type: "Hard Skill",
              name: "Statistika Terapan & Probabilitas",
              importance: 9,
              timeToMaster: "4-6 minggu",
              description: "Statistika deskriptif vs inferensial, teori probabilitas & distribusi, uji hipotesis (A/B Testing), regresi & korelasi",
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
              ]
            },
            {
              icon: "🧠",
              type: "Soft Skill",
              name: "Analytical Thinking",
              importance: 10,
              timeToMaster: "Berkelanjutan",
              description: "Dekomposisi masalah, identifikasi pola, berpikir kritis, inferensi logis untuk memecahkan masalah bisnis dengan data",
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
                  description: "Mengevaluasi validitas data dan asumsi secara kritis, serta mempertanyaan hasil analisis untuk menghindari kesimpulan yang salah atau bias"
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
              ]
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
              icon: "🐍",
              type: "Hard Skill",
              name: "Python untuk Analisis Data",
              importance: 10,
              timeToMaster: "4 minggu",
              description: "Struktur data Pandas, data wrangling/munging, operasi join & merge, otomatisasi dengan fungsi",
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
              ]
            },
            {
              icon: "🗄️",
              type: "Hard Skill",
              name: "SQL (Advanced)",
              importance: 10,
              timeToMaster: "3 minggu",
              description: "Advanced JOINs, subqueries & CTEs, window functions, agregasi & grouping",
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
              ]
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
              icon: "📈",
              type: "Hard Skill",
              name: "Visualisasi & Penceritaan Data (Storytelling)",
              importance: 9,
              timeToMaster: "3 minggu",
              description: "Memilih visualisasi yang tepat, prinsip desain visual, struktur narasi data, dashboard interaktif",
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
              ]
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
              icon: "🤖",
              type: "Hard Skill",
              name: "Supervised Learning",
              importance: 10,
              timeToMaster: "4 minggu",
              description: "Klasifikasi vs regresi, proses training-validation-test, metrik evaluasi, overfitting & underfitting",
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
              ]
            },
            {
              icon: "🔍",
              type: "Hard Skill",
              name: "Unsupervised Learning",
              importance: 7,
              timeToMaster: "2 minggu",
              description: "Clustering (pengelompokan), algoritma K-Means, dimensionality reduction (PCA), association rule mining",
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
              ]
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
              icon: "⚡",
              type: "Hard Skill",
              name: "Big Data Processing",
              importance: 7,
              timeToMaster: "3 minggu",
              description: "Tiga V (Volume, Velocity, Variety), pemrosesan terdistribusi, ekosistem Hadoop & Spark",
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
                  description: "Gunakan PySpark (antarmuka Python untuk Spark) untuk melakukan operasi manipulasi data (mirip Pandas) pada file besar secara lokal"
                },
                {
                  id: "advanced-bigdata",
                  description: "Rancang sebuah pipeline data batch sederhana di Spark yang membaca data mentah, melakukan transformasi, dan menulis hasilnya ke lokasi baru"
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
              ]
            },
            {
              icon: "☁️",
              type: "Hard Skill",
              name: "Cloud Computing",
              importance: 8,
              timeToMaster: "2 minggu",
              description: "IaaS, PaaS, SaaS, penyimpanan cloud (Object Storage), komputasi sesuai permintaan",
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
                  description: "Buat akun gratis di salah satu penyedia cloud utama (AWS, GCP, atau Azure)"
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
              ]
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
              icon: "🧠",
              type: "Hard Skill",
              name: "Deep Learning",
              importance: 8,
              timeToMaster: "4 minggu",
              description: "Artificial Neural Networks (ANN), Convolutional Neural Networks (CNN), Recurrent Neural Networks (RNN) & Transformers",
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
                  description: "Terapkan model CNN yang telah dilatih sebelumnya (pre-trained model) seperti VGG16 atau ResNet menggunakan transfer learning untuk melakukan klasifikasi gambar"
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
              ]
            },
            {
              icon: "🔧",
              type: "Hard Skill",
              name: "MLOps (Machine Learning Operations)",
              importance: 7,
              timeToMaster: "3 minggu",
              description: "Siklus hidup ML, deployment model, version control untuk data & model, pemantauan & retraining",
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
                  description: "Gunakan alat experiment tracking seperti MLflow atau Weights & Biases untuk mencatat parameter, metrik, dan artefak dari berbagai proses pelatihan model"
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
              ]
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
              icon: "💼",
              type: "Soft Skill",
              name: "Business Acumen",
              importance: 9,
              timeToMaster: "Berkelanjutan",
              description: "Menerjemahkan masalah bisnis ke masalah data, fokus pada ROI, pemahaman metrik bisnis kunci",
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
                  description: "Kembangkan sebuah proposal proyek data lengkap yang mencakup definisi masalah, metrik keberhasilan, data yang dibutuhkan, dan estimasi dampak bisnis (ROI)"
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
              ]
            },
            {
              icon: "🤝",
              type: "Soft Skill",
              name: "Stakeholder Management",
              importance: 10,
              timeToMaster: "Berkelanjutan",
              description: "Komunikasi untuk audiens non-teknis, mengelola ekspektasi, empati terhadap pemangku kepentingan",
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
                  description: "Pimpin sebuah pertemuan mock-up di mana Anda mempresentasikan temuan proyek dan memfasilitasi diskusi untuk mencapai konsensus tentang langkah selanjutnya"
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
              ]
            }
          ]
        }
      ],
      keyInsights: [
        "Pertumbuhan permintaan 26% per tahun hingga 2033",
        "Talenta papan atas bisa mencapai $500,000-$2,000,000 per tahun",
        "AI menjadi co-pilot yang memperkuat kemampuan Data Scientist"
      ],
      marketDrivers: [
        "AI adoption across all industries",
        "Massive investment in AI research and development",
        "Data-driven decision making menjadi standar bisnis"
      ]
    };

    // Default blueprint for other professions
    const defaultBlueprint = {
      profession,
      meta: {
        summary: `A comprehensive career path for becoming a ${profession}`,
        salary: {
          junior: "Rp 90jt",
          senior: "Rp 300jt+",
        },
        growth: "High",
        aiRisk: {
          percentage: 28,
          level: "Low",
          description: "This role is relatively safe from AI automation in the near future.",
        },
      },
      phases: [
        {
          id: createId("foundation"),
          title: "Foundation Phase",
          description: "Build your fundamental knowledge and skills",
          duration: "1-2 years",
          skills: [
            {
              id: createId("theoretical-foundations"),
              title: "Theoretical Foundations",
              type: "hard",
              status: "required",
              description: "Core concepts and principles of the field",
              details: profession === "Data Scientist" ? [
                "Statistics and Probability",
                "Linear Algebra",
                "Python Programming",
                "SQL and Database Concepts"
              ] : [
                "HTML5 & CSS3",
                "JavaScript Fundamentals",
                "Web Technologies",
                "Browser APIs"
              ],
              resources: [
                {
                  title: "Official Documentation",
                  url: "https://example.com/docs",
                }
              ]
            },
            {
              id: createId("problem-solving"),
              title: "Problem Solving",
              type: "soft",
              status: "required",
              description: "Analytical thinking and problem-solving abilities",
              details: [
                "Critical Thinking",
                "Analytical Reasoning",
                "Systematic Approach to Problems",
                "Debugging Methodology"
              ]
            }
          ]
        },
        {
          id: createId("advanced-concepts"),
          title: "Advanced Concepts",
          description: "Master professional tools and techniques",
          duration: "2-3 years",
          skills: [
            {
              id: createId("professional-tools"),
              title: "Professional Tools & Frameworks",
              type: "hard",
              status: "required",
              description: "Industry-standard tools and frameworks",
              details: profession === "Data Scientist" ? [
                "Machine Learning Libraries (scikit-learn, TensorFlow)",
                "Data Processing Tools (Pandas, NumPy)",
                "Visualization Libraries (Matplotlib, Seaborn)",
                "Version Control (Git)"
              ] : [
                "Modern JavaScript Frameworks (React, Vue)",
                "Build Tools (Webpack, Vite)",
                "Version Control (Git)",
                "CSS Frameworks (Tailwind, Bootstrap)"
              ],
              resources: [
                {
                  title: "Tools Overview",
                  url: "https://example.com/tools",
                }
              ]
            },
            {
              id: createId("team-collaboration"),
              title: "Team Collaboration",
              type: "soft",
              status: "recommended",
              description: "Working effectively in teams",
              details: [
                "Communication Skills",
                "Project Management",
                "Code Review Practices",
                "Documentation"
              ]
            }
          ]
        },
        {
          id: createId("specialization"),
          title: "Specialization",
          description: "Develop expertise in specific areas",
          duration: "3-5 years",
          skills: [
            {
              id: createId("advanced-techniques"),
              title: "Advanced Techniques",
              type: "hard",
              status: "optional",
              description: "Specialized technical skills",
              details: profession === "Data Scientist" ? [
                "Deep Learning",
                "Natural Language Processing",
                "Computer Vision",
                "MLOps and Model Deployment"
              ] : [
                "Performance Optimization",
                "Security Best Practices",
                "Microfrontends",
                "Web Assembly"
              ],
              resources: [
                {
                  title: "Advanced Topics",
                  url: "https://example.com/advanced",
                }
              ]
            },
            {
              id: createId("leadership"),
              title: "Leadership & Mentoring",
              type: "soft",
              status: "recommended",
              description: "Leading teams and mentoring others",
              details: [
                "Team Leadership",
                "Strategic Planning",
                "Mentoring Junior Developers",
                "Project Planning"
              ]
            }
          ]
        }
      ]
    };

    // Return all blueprints if requested
    if (profession === "all") {
      return [
        dataScientistContent,
        // Add other blueprints here as needed
        {
          profession: "AI/Machine Learning Specialist",
          category: "Teknologi & AI",
          aiRisk: 5,
          riskLevel: "Risiko Sangat Rendah",
          salaryRange: "Rp 120-250 juta",
          growth: "Sangat Tinggi",
          timeline: "12-18 bulan",
          summary: "Arsitek ekonomi berbasis kecerdasan buatan. Merancang, membangun, dan menerapkan model ML yang menjadi inti produk dan layanan.",
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
                  coreConcepts: [
                    {
                      title: "Linear Algebra",
                      description: "Matriks, vektor, dan operasi linear untuk machine learning"
                    },
                    {
                      title: "Calculus",
                      description: "Turunan dan integral untuk optimisasi model"
                    },
                    {
                      title: "Statistics",
                      description: "Statistika inferensial dan probabilitas"
                    }
                  ],
                  masteryGoals: [
                    {
                      id: "beginner-math",
                      description: "Kuasi operasi matriks dasar dan aljabar linear"
                    },
                    {
                      id: "intermediate-math",
                      description: "Terapkan kalkulus dalam optimisasi model ML"
                    },
                    {
                      id: "advanced-math",
                      description: "Implementasikan statistik inferensial dalam evaluasi model"
                    }
                  ],
                  practicalProjects: [
                    {
                      title: "Implementasi Linear Regression dari Scratch",
                      description: "Bangun model regresi linear menggunakan NumPy tanpa library ML"
                    }
                  ]
                }
              ]
            }
          ],
          keyInsights: [
            "Pertumbuhan permintaan 26% per tahun hingga 2033",
            "Talenta papan atas bisa mencapai $500,000-$2,000,000 per tahun"
          ],
          marketDrivers: [
            "AI adoption across all industries",
            "Massive investment in AI research and development"
          ]
        }
      ];
    }

    return profession === "Data Scientist" ? dataScientistContent : defaultBlueprint;
  };

  // Return the response
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prediction: generateBlueprint(userQuery || 'Data Scientist'),
      timestamp: new Date().toISOString()
    }),
  };
};