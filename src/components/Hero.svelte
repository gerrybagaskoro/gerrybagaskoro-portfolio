<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";

  let heroSection: HTMLElement;

  onMount(() => {
    gsap.from(heroSection, {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power2.out",
    });
  });
</script>

<section bind:this={heroSection} class="py-20 flex flex-col md:flex-row items-center justify-between gap-10">
  <div class="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-800 shadow-xl">
    <img
      src="/assets/profile.jpg"
      alt="Gerry Bagaskoro Putro"
      class="w-full h-full object-cover"
    />
  </div>

  <div class="flex-1 text-center md:text-right">
    <h1 class="text-4xl md:text-6xl font-bold mb-4">
      Hi there, I'm <span class="text-blue-600 dark:text-blue-400">Gerry</span>
    </h1>
    <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 max-w-2xl ml-auto">
      I'm a Junior Mobile Developer and IT Support Specialist, and Interested in Open Source Things
    </p>
    
    <div class="flex items-center justify-center md:justify-end gap-4">
      <a href="mailto:gerrybagaskoro@proton.me" class="hover:scale-110 transition-transform" aria-label="Email">
        <span class="icon-[logos--google-gmail] w-6 h-6"></span>
      </a>
      <a href="https://github.com/gerrybagaskoro" target="_blank" class="hover:scale-110 transition-transform" aria-label="GitHub">
        <span class="icon-[logos--github-icon] w-6 h-6"></span>
      </a>
      <a href="https://linkedin.com/in/gerrybagaskoro" target="_blank" class="hover:scale-110 transition-transform" aria-label="LinkedIn">
        <span class="icon-[logos--linkedin-icon] w-6 h-6"></span>
      </a>
    </div>
  </div>
</section>

