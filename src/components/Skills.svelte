<script lang="ts">
  import { onMount } from "svelte";
  import AOS from "aos";

  onMount(() => {
    AOS.init();
  });

  const skills = {
    "Hard Skills": [
      "Junior Mobile Developer (2025) - PPKD Jakarta Pusat",
      "Pemasangan Jaringan (Non Boarding) (2019) - BBPLK Bekasi (Cevest)",
      "Integrasi Mikrotik Router dan Zimbra Mail Server (2019) - Universitas Bani Saleh Bekasi"
    ],
    "Soft Skills": [
      "Time Management, Self-Learning, Adaptability, Continuous Improvement (2023)",
      "Problem Solving, Analytical Thinking, Teamwork, Collaboration, Communication (2021)",
      "Kepemimpinan (OSIS & PMR) (2017)"
    ],
    "Events & Competitions": [
      "Event Attended (2019): Google's annual public tech event at Ciputra Artpreneur Jakarta",
      "Competition (2018): Juara 2 Lomba Debat bertema 'Memahami hakekat bangsa dan unsur-unsur terbentuknya negara'"
    ]
  };
</script>

<section class="py-10">
  <h2 class="text-2xl font-bold mb-8" data-aos="fade-up">Skills & Achievements</h2>

  <div class="grid grid-cols-1 gap-8">
    {#each Object.entries(skills) as [category, skillList]}
      <div class="space-y-4" data-aos="fade-up">
        <h3 class="font-semibold text-lg text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-800 pb-2">{category}</h3>
        <ul class="space-y-3">
          {#each skillList as skill}
            <li class="flex items-start gap-2 text-gray-600 dark:text-gray-400">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
              <span>{skill}</span>
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</section>
