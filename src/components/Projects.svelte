<script lang="ts">
  // Import project images here
  // Example: import waliImg from "../assets/projects/wali.jpg";
  import placeholderImg1 from "../assets/projects/wali.jpg";
  import placeholderImg2 from "../assets/projects/presensi-kita.jpg";

  const projects = [
    {
      title: "Wali (Warga Peduli)",
      description:
        "A Flutter-based mobile app that encourages residents to report waste in their surroundings. Users earn points for each report, which can be exchanged for tokens or mobile credit, promoting community engagement and environmental awareness.",
      tech: ["Flutter", "Dart", "SQFLite"],
      github: "https://github.com/gerrybagaskoro/wali",
      demo: "https://github.com/gerrybagaskoro/wali",
      image: placeholderImg1,
    },
    {
      title: "Presensi Kita",
      description:
        "An attendance app for trainees at PPKDJP, designed to simplify daily check-ins, track attendance records, and improve training program management efficiently.",
      tech: ["Flutter", "Dart", "Rest API"],
      github: "https://github.com/gerrybagaskoro/absensi_ppkdjp_b3",
      demo: "https://github.com/gerrybagaskoro/absensi_ppkdjp_b3",
      playstore:
        "https://play.google.com/store/apps/details?id=com.ppkd.presensikita",
      image: placeholderImg2,
    },
  ];
</script>

<section class="py-10 scroll-mt-24" id="projects">
  <h2 class="text-2xl font-bold mb-8">Projects</h2>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each projects as project}
      <div
        class="group border rounded-xl overflow-hidden hover:border-[color:var(--accent-color)]"
        style="border-color: var(--border-color);"
      >
        <!-- Project Image Banner -->
        {#if project.image}
          <div class="w-full h-48 overflow-hidden">
            <img
              src={project.image.src}
              alt={project.title}
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        {/if}

        <div class="p-6">
          <div class="flex justify-between items-start mb-4">
            <h3
              class="text-xl font-bold group-hover:text-[color:var(--accent-color)] transition-colors"
            >
              {project.title}
            </h3>
            <div class="flex gap-3">
              {#if project.playstore}
                <a
                  href={project.playstore}
                  target="_blank"
                  class="transition-colors hover:opacity-100"
                  style="color: var(--text-secondary);"
                  aria-label="View on Play Store"
                >
                  <span class="icon-[tabler--brand-google-play] w-5 h-5"></span>
                </a>
              {/if}
              <a
                href={project.github}
                target="_blank"
                class="transition-colors hover:opacity-100"
                style="color: var(--text-secondary);"
                aria-label="View on GitHub"
              >
                <span class="icon-[tabler--brand-github] w-5 h-5"></span>
              </a>
              <a
                href={project.demo}
                target="_blank"
                class="transition-colors hover:opacity-100"
                style="color: var(--text-secondary);"
                aria-label="View demo"
              >
                <span class="icon-[tabler--external-link] w-5 h-5"></span>
              </a>
            </div>
          </div>

          <p
            class="text-sm mb-4 line-clamp-3"
            style="color: var(--text-secondary);"
          >
            {project.description}
          </p>

          <div class="flex flex-wrap gap-2 mt-auto">
            {#each project.tech as t}
              <span
                class="px-2 py-1 text-xs font-medium rounded"
                style="background-color: var(--bg-secondary); color: var(--text-secondary);"
              >
                {t}
              </span>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
