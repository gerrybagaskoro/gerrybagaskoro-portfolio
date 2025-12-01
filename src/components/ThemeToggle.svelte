<script lang="ts">
  import { setMode, mode } from "mode-watcher";

  function cycleMode() {
    // Toggle between light and dark modes
    // System preference is detected automatically on initial load
    if (mode.current === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  }
</script>

<button
  on:click={cycleMode}
  class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400 flex items-center justify-center"
  aria-label="Toggle Theme"
  title="Toggle Theme (Light/Dark)"
>
  {#if mode.current === "dark"}
    <!-- Moon Icon for Dark Mode -->
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
    </svg>
  {:else}
    <!-- Sun Icon for Light Mode -->
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2"></path>
      <path d="M12 20v2"></path>
      <path d="m4.93 4.93 1.41 1.41"></path>
      <path d="m17.66 17.66 1.41 1.41"></path>
      <path d="M2 12h2"></path>
      <path d="M20 12h2"></path>
      <path d="m6.34 17.66-1.41 1.41"></path>
      <path d="m19.07 4.93-1.41 1.41"></path>
    </svg>
  {/if}
</button>
