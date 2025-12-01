<script lang="ts">
  const projects = [
    {
      title: "Wali (Warga Peduli)",
      description:
        "A Flutter-based mobile app that encourages residents to report waste in their surroundings. Users earn points for each report, which can be exchanged for tokens or mobile credit, promoting community engagement and environmental awareness.",
      tech: ["Flutter", "Dart", "SQFLite"],
      github: "https://github.com/gerrybagaskoro/wali",
      demo: "https://github.com/gerrybagaskoro/wali",
      icon: "📱",
    },
    {
      title: "Presensi Kita",
      description:
        "An attendance app for trainees at PPKDJP, designed to simplify daily check-ins, track attendance records, and improve training program management efficiently.",
      tech: ["Flutter", "Dart", "Rest API"],
      github: "https://github.com/gerrybagaskoro/absensi_ppkdjp_b3",
      demo: "https://github.com/gerrybagaskoro/absensi_ppkdjp_b3",
      icon: "🌐",
    },
  ];
</script>

<section class="py-10 scroll-mt-24" id="projects">
  <h2 class="text-2xl font-bold mb-8">Projects</h2>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each projects as project}
      <div
        class="group border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
      >
        <div class="flex justify-between items-start mb-4">
          <div class="text-4xl">{project.icon}</div>
          <div class="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="View on GitHub"
            >
              <span class="icon-[tabler--brand-github] w-5 h-5"></span>
            </a>
            <a
              href={project.demo}
              target="_blank"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="View demo"
            >
              <span class="icon-[tabler--external-link] w-5 h-5"></span>
            </a>
          </div>
        </div>

        <h3
          class="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
        >
          {project.title}
        </h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        <div class="flex flex-wrap gap-2 mt-auto">
          {#each project.tech as t}
            <span
              class="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 rounded text-gray-600 dark:text-gray-300"
            >
              {t}
            </span>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
