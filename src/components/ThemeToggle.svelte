<script lang="ts">
  import { setMode, mode } from "mode-watcher";
  import { onMount } from "svelte";

  // State to track the user's preference: 'light' | 'dark' | 'system'
  let currentSetting = "system";
  let isHovered = false;

  onMount(() => {
    // Initialize from localStorage or default to system
    currentSetting = localStorage.getItem("mode-watcher-theme") || "system";
  });

  function getNextMode(current: string) {
    if (current === "system") return "light";
    if (current === "light") return "dark";
    return "system"; // dark -> system
  }

  function handleClick() {
    const next = getNextMode(currentSetting);
    setMode(next);
    currentSetting = next;
  }
</script>

<button
  on:click={handleClick}
  on:mouseenter={() => (isHovered = true)}
  on:mouseleave={() => (isHovered = false)}
  class="p-2 rounded-lg transition-all duration-300 flex items-center justify-center"
  style="color: var(--text-secondary); background-color: {isHovered
    ? 'var(--bg-secondary)'
    : 'transparent'};"
  aria-label="Toggle Theme"
  title="Toggle Theme (Auto/Light/Dark)"
>
  {#if currentSetting === "light"}
    <!-- Sun Icon -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
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
  {:else if currentSetting === "dark"}
    <!-- Moon Icon -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
    </svg>
  {:else}
    <!-- System/Auto Icon (Monitor/Screen) -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <rect width="20" height="14" x="2" y="3" rx="2"></rect>
      <line x1="8" x2="16" y1="21" y2="21"></line>
      <line x1="12" x2="12" y1="17" y2="21"></line>
    </svg>
  {/if}
</button>
