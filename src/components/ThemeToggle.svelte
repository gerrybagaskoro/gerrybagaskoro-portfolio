<script lang="ts">
  import { setMode, mode } from "mode-watcher";
  import { onMount } from "svelte";

  let mounted = false;

  onMount(() => {
    mounted = true;
  });

  function cycleMode() {
    if ($mode === "light") {
      setMode("dark");
    } else if ($mode === "dark") {
      setMode("system");
    } else {
      setMode("light");
    }
  }
</script>

<button
  on:click={cycleMode}
  class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400"
  aria-label="Toggle Theme"
  title="Toggle Theme"
>
  {#if mounted}
    {#if $mode === "light"}
      <span class="icon-[tabler--sun] w-5 h-5"></span>
    {:else if $mode === "dark"}
      <span class="icon-[tabler--moon] w-5 h-5"></span>
    {:else}
      <span class="icon-[tabler--device-desktop] w-5 h-5"></span>
    {/if}
  {:else}
    <div class="w-5 h-5"></div>
  {/if}
</button>
