<script lang="ts">
  const skills = {
    "Hard Skills": [
      "Junior Mobile Developer (2025) - PPKD Jakarta Pusat",
      "Pemasangan Jaringan (Non Boarding) (2019) - BBPLK Bekasi (Cevest)",
      "Integrasi Mikrotik Router dan Zimbra Mail Server (2019) - Universitas Bani Saleh Bekasi",
    ],
    "Soft Skills": [
      "Time Management, Self-Learning, Adaptability, Continuous Improvement (2023)",
      "Problem Solving, Analytical Thinking, Teamwork, Collaboration, Communication (2021)",
      "Kepemimpinan (OSIS & PMR) (2017)",
    ],
    "Events & Competitions": [
      "Event Attended (2019): Google's annual public tech event at Ciputra Artpreneur Jakarta",
      "Competition (2018): Juara 2 Lomba Debat bertema 'Memahami hakekat bangsa dan unsur-unsur terbentuknya negara'",
    ],
  };
</script>

<section class="py-10 scroll-mt-24" id="skills">
  <h2 class="text-2xl font-bold mb-8">Skills & Achievements</h2>

  <div class="grid grid-cols-1 gap-8">
    {#each Object.entries(skills) as [category, skillList]}
      <div class="space-y-4">
        <h3
          class="font-semibold text-lg border-b pb-2"
          style="color: var(--text-primary); border-color: var(--border-color);"
        >
          {category}
        </h3>
        <ul class="space-y-3">
          {#each skillList as skill}
            <li
              class="flex items-start gap-2"
              style="color: var(--text-secondary);"
            >
              <span
                class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style="background-color: var(--accent-color);"
              ></span>
              <span>{skill}</span>
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</section>
