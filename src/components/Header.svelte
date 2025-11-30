<script lang="ts">
  import ThemeToggle from "./ThemeToggle.svelte";
</script>

<header class="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
  <div class="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
    <a href="/" class="text-xl font-bold hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
      gerrybagaskoro
    </a>

    <nav class="flex items-center gap-6">
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
  </div>
</header>
