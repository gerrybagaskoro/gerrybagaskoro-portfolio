<script lang="ts">
  import ThemeToggle from "./ThemeToggle.svelte";
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function closeMenu() {
    isMenuOpen = false;
  }
</script>

<header class="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
  <div class="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
    <a href="/" class="text-xl font-bold hover:text-gray-600 dark:hover:text-gray-300 transition-colors" on:click={closeMenu}>
      gerrybagaskoro
    </a>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex items-center gap-6">
      <a href="/#experience" class="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
        Work Experience
      </a>
      <a href="/#education" class="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
        Education
      </a>
      <a href="/#projects" class="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
        Projects
      </a>
      <a href="/about" class="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
        About
      </a>
      <ThemeToggle />
    </nav>

    <!-- Mobile Menu Toggle -->
    <div class="flex items-center gap-2 md:hidden">
      <ThemeToggle />
      <button 
        on:click={toggleMenu} 
        class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center"
        aria-label="Toggle Menu"
      >
        <span class="icon-[tabler--layout-grid] w-6 h-6 text-gray-600 dark:text-gray-400"></span>
      </button>
    </div>
  </div>

  <!-- Mobile Navigation Menu -->
  {#if isMenuOpen}
    <nav 
      transition:slide={{ duration: 300, easing: quintOut, axis: 'y' }}
      class="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
    >
      <div class="flex flex-col p-4 space-y-4">
        <a href="/#experience" on:click={closeMenu} class="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          Work Experience
        </a>
        <a href="/#education" on:click={closeMenu} class="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          Education
        </a>
        <a href="/#projects" on:click={closeMenu} class="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          Projects
        </a>
        <a href="/about" on:click={closeMenu} class="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          About
        </a>
      </div>
    </nav>
  {/if}
</header>
