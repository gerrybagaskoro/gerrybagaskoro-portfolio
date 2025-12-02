<script lang="ts">
  import ThemeToggle from "./ThemeToggle.svelte";
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  let isMenuOpen = false;
  let isMenuButtonHovered = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function closeMenu() {
    isMenuOpen = false;
  }
</script>

<header
  class="fixed top-0 w-full z-50"
  style="background-color: var(--bg-primary);"
>
  <div class="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
    <a
      href="/"
      class="text-xl font-bold hover:opacity-70 transition-opacity"
      on:click={closeMenu}
    >
      gerrybagaskoro
    </a>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex items-center gap-6">
      <a
        href="/#experience"
        class="text-sm font-medium hover:opacity-70 transition-opacity"
      >
        Work Experience
      </a>
      <a
        href="/#education"
        class="text-sm font-medium hover:opacity-70 transition-opacity"
      >
        Education
      </a>
      <a
        href="/#projects"
        class="text-sm font-medium hover:opacity-70 transition-opacity"
      >
        Projects
      </a>
      <a
        href="/#skills"
        class="text-sm font-medium hover:opacity-70 transition-opacity"
      >
        Skills & Achievements
      </a>
      <a
        href="/about"
        class="text-sm font-medium hover:opacity-70 transition-opacity"
      >
        About
      </a>
      <a
        href="/blog"
        class="text-sm font-medium hover:opacity-70 transition-opacity"
      >
        Blog
      </a>
      <ThemeToggle />
    </nav>

    <div class="flex items-center gap-2 md:hidden">
      <ThemeToggle />
      <button
        on:click={toggleMenu}
        on:mouseenter={() => (isMenuButtonHovered = true)}
        on:mouseleave={() => (isMenuButtonHovered = false)}
        class="p-2 rounded-lg transition-colors flex items-center justify-center"
        style="background-color: {isMenuButtonHovered
          ? 'var(--bg-secondary)'
          : 'transparent'};"
        aria-label="Toggle Menu"
      >
        <span
          class="icon-[tabler--layout-grid] w-6 h-6"
          style="color: var(--text-secondary);"
        ></span>
      </button>
    </div>
  </div>

  <!-- Mobile Navigation Menu -->
  {#if isMenuOpen}
    <nav
      transition:slide={{ duration: 300, easing: quintOut, axis: "y" }}
      class="md:hidden absolute top-16 right-4 w-56 rounded-xl shadow-lg border"
      style="border-color: var(--border-color); background-color: var(--bg-primary);"
    >
      <div class="flex flex-col p-4 space-y-4">
        <a
          href="/#experience"
          on:click={closeMenu}
          class="text-sm font-medium hover:opacity-70 transition-opacity"
        >
          Work Experience
        </a>
        <a
          href="/#education"
          on:click={closeMenu}
          class="text-sm font-medium hover:opacity-70 transition-opacity"
        >
          Education
        </a>
        <a
          href="/#projects"
          on:click={closeMenu}
          class="text-sm font-medium hover:opacity-70 transition-opacity"
        >
          Projects
        </a>
        <a
          href="/#skills"
          on:click={closeMenu}
          class="text-sm font-medium hover:opacity-70 transition-opacity"
        >
          Skills & Achievements
        </a>
        <a
          href="/about"
          on:click={closeMenu}
          class="text-sm font-medium hover:opacity-70 transition-opacity"
        >
          About
        </a>
        <a
          href="/blog"
          on:click={closeMenu}
          class="text-sm font-medium hover:opacity-70 transition-opacity"
        >
          Blog
        </a>
      </div>
    </nav>
  {/if}
</header>
