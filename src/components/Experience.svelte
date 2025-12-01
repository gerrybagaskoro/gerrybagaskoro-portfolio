<script lang="ts">
  const experiences = [
    {
      company: "GBK Computer - Jakarta, Indonesia",
      role: "IT Technician (Freelance)",
      period: "Present",
      responsibilities: [
        "Melayani perbaikan perangkat HP, laptop, dan PC, mencakup troubleshooting software maupun penggantian komponen hardware.",
        "Menyediakan jasa instalasi ulang Windows / Linux, termasuk konfigurasi awal, driver, partisi, dan optimasi performa.",
        "Melakukan flashing firmware OS Android, debloating sistem, serta optimasi sistem.",
        "Melakukan optimisasi perangkat (system tuning, cleaning, dan peningkatan performa) sesuai kebutuhan pengguna.",
        "Memberikan layanan panggilan onsite service (door-to-door) ke rumah pelanggan dengan respon cepat dan komunikasi profesional.",
        "Melakukan konsultasi diagnosa awal, estimasi biaya, dan memberikan rekomendasi solusi atau upgrade perangkat.",
        "Mengelola layanan secara mandiri, termasuk penjadwalan, dokumentasi servis, dan follow-up pelanggan.",
        "Menyediakan layanan remote support untuk troubleshooting laptop/PC jika memungkinkan, termasuk analisa error, perbaikan software, dan konfigurasi sistem jarak jauh.",
      ],
      tech: [
        "Hardware Repair",
        "OS Installation",
        "Android Flashing",
        "System Tuning",
        "Remote Support",
      ],
    },
    {
      company:
        "PT Jakarta Central Asia Steel (JCAS) - Jakarta Timur, Indonesia",
      role: "IT Helpdesk Internship",
      period: "Jan 2024 - Jun 2024",
      responsibilities: [
        "Menangani dukungan teknis level 1 & 2 untuk seluruh user pabrik dan kantor (hardware, software, jaringan).",
        "Monitoring server lokal, database, CCTV, dan perangkat networking.",
        "Menangani masalah printer sharing, akses sistem produksi, dan troubleshooting aplikasi operasional.",
        "Melakukan instalasi, upgrade, dan patching OS Windows & software kerja.",
        "Membuat dokumentasi teknis dan laporan insiden harian/mingguan.",
      ],
      tech: [
        "Technical Support",
        "Network Monitoring",
        "Hardware/Software Troubleshooting",
        "Documentation",
      ],
    },
    {
      company: "PT. Arkon Prima Indonesia - Jakarta Timur, Indonesia",
      role: "IT Support Internship",
      period: "Nov 2017 - Jan 2018",
      responsibilities: [
        "Menangani support harian terkait hardware, software, internet, dan jaringan kantor.",
        "Melakukan setup workstation untuk karyawan baru (OS, aplikasi kerja, akses jaringan).",
        "Monitoring server lokal, database, CCTV, dan perangkat networking.",
        "Troubleshooting aplikasi internal dan sistem ERP perusahaan.",
        "Melakukan preventive maintenance komputer produksi dan kantor.",
      ],
      tech: [
        "IT Support",
        "Workstation Setup",
        "ERP Troubleshooting",
        "Maintenance",
      ],
    },
    {
      company: "PT. PLN Persero - Jakarta Timur, Indonesia",
      role: "IT Support Internship",
      period: "Sep 2017 - Nov 2017",
      responsibilities: [
        "Menangani instalasi, konfigurasi, dan troubleshooting perangkat komputer, printer, dan perangkat jaringan.",
        "Melakukan maintenance rutin pada perangkat IT kantor termasuk update OS, patching, dan monitoring performa perangkat.",
        "Mendukung user dalam penggunaan aplikasi internal PLN serta menyelesaikan tiket teknis harian.",
        "Membantu dokumentasi aset IT dan memastikan inventory selalu ter-update.",
      ],
      tech: [
        "IT Support",
        "Device Maintenance",
        "User Support",
        "Asset Management",
      ],
    },
  ];

  const education = [
    {
      institution: "Universitas Negeri Jakarta - Jakarta Timur, Indonesia",
      program:
        "Bachelor of Pendidikan Teknik Informasi dan Komputer (3.20/4.00)",
      period: "Jul 2019 - Jul 2020",
    },
    {
      institution: "SMKS Teratai Putih Jakarta - Jakarta Timur, Indonesia",
      program: "Senior High School, Teknik Komputer dan Jaringan",
      period: "Jun 2016 - Jun 2019",
      details: [
        "Lulus dengan sertifikat kompetensi LSP Teknik Komputer dan Jaringan",
        "Mengikuti Lomba Mikrotik Regional LKS – IT Network Systems Administration",
        "Anggota OSIS aktif, menjabat sebagai Koordinator Seksi Teknologi & Infrastruktur Jaringan",
        "Anggota aktif Palang Merah Remaja (PMR)",
      ],
    },
  ];

  const organizations = [
    {
      name: "Badan Perwakilan Mahasiswa Prodi - Jakarta Timur, Indonesia",
      role: "Komisi IV Mikat (Minat & Bakat)",
      period: "Sep 2019 - Apr 2020",
      responsibilities: [
        "Mendukung dan memfasilitasi kegiatan olahraga, seni, serta lomba di tingkat program studi.",
        "Menampung dan menyalurkan aspirasi mahasiswa terkait kegiatan non-akademik sesuai minat dan bakat.",
        "Menjalin koordinasi dengan Himpunan Mahasiswa dan dosen pembina untuk kelancaran kegiatan kemahasiswaan.",
        "Menyusun kajian dan rekomendasi kepada BPM terkait pengembangan minat dan bakat mahasiswa di lingkungan prodi.",
      ],
    },
  ];
</script>

<section class="py-10 scroll-mt-24" id="experience">
  <h2 class="text-2xl font-bold mb-8">Work Experience</h2>

  <div class="space-y-12 mb-16">
    {#each experiences as exp}
      <div class="relative">
        <div
          class="flex flex-col md:flex-row md:items-center justify-between mb-2"
        >
          <h3 class="text-xl font-bold">{exp.company}</h3>
          <span class="text-sm text-gray-500 dark:text-gray-400"
            >{exp.period}</span
          >
        </div>

        <div class="mb-4">
          <span
            class="inline-block px-2 py-1 text-xs font-medium border border-gray-300 dark:border-gray-700 rounded bg-gray-100 dark:bg-gray-900"
          >
            {exp.role}
          </span>
        </div>

        <div class="mb-4">
          <h4 class="font-semibold mb-2">Responsibilities</h4>
          <ul
            class="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 text-sm"
          >
            {#each exp.responsibilities as resp}
              <li>{resp}</li>
            {/each}
          </ul>
        </div>

        <div>
          <h4 class="font-semibold mb-2">Technologies used</h4>
          <div class="flex flex-wrap gap-2">
            {#each exp.tech as t}
              <span
                class="px-3 py-1 text-xs font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-md shadow-sm"
              >
                {t}
              </span>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>

  <div id="education" class="scroll-mt-32">
    <h2 class="text-2xl font-bold mb-8">Education</h2>
    <div class="space-y-12 mb-16">
      {#each education as edu}
        <div class="relative">
          <div
            class="flex flex-col md:flex-row md:items-center justify-between mb-2"
          >
            <h3 class="text-xl font-bold">{edu.institution}</h3>
            <span class="text-sm text-gray-500 dark:text-gray-400"
              >{edu.period}</span
            >
          </div>

          <div class="mb-4">
            <p class="text-gray-700 dark:text-gray-300 font-medium">
              {edu.program}
            </p>
            {#if edu.details}
              <ul
                class="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 text-sm mt-2"
              >
                {#each edu.details as detail}
                  <li>{detail}</li>
                {/each}
              </ul>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>

  <h2 class="text-2xl font-bold mb-8">Organizational Experience</h2>
  <div class="space-y-12">
    {#each organizations as org}
      <div class="relative">
        <div
          class="flex flex-col md:flex-row md:items-center justify-between mb-2"
        >
          <h3 class="text-xl font-bold">{org.name}</h3>
          <span class="text-sm text-gray-500 dark:text-gray-400"
            >{org.period}</span
          >
        </div>

        <div class="mb-4">
          <span
            class="inline-block px-2 py-1 text-xs font-medium border border-gray-300 dark:border-gray-700 rounded bg-gray-100 dark:bg-gray-900"
          >
            {org.role}
          </span>
        </div>

        <div class="mb-4">
          <h4 class="font-semibold mb-2">Responsibilities</h4>
          <ul
            class="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 text-sm"
          >
            {#each org.responsibilities as resp}
              <li>{resp}</li>
            {/each}
          </ul>
        </div>
      </div>
    {/each}
  </div>
</section>
