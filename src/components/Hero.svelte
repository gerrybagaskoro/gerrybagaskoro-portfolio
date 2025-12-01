<script lang="ts">
  export let profileImage = "/assets/profile.jpg"; // Fallback
</script>

<section
  class="py-12 flex flex-col md:flex-row items-start md:items-center gap-6"
>
  <div
    class="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 flex-shrink-0"
    style="border-color: var(--border-color); box-shadow: 0 10px 30px rgba(0,0,0,0.1);"
  >
    <img
      src={profileImage}
      alt="Gerry Bagaskoro Putro"
      class="w-full h-full object-cover"
    />
  </div>

  <div class="flex-1 text-left md:text-right">
    <h1 class="text-3xl md:text-5xl font-bold mb-4">
      Hi there, I'm <span style="color: var(--accent-color);">Gerry</span>
    </h1>
    <p
      class="text-base md:text-lg mb-6 max-w-2xl md:ml-auto"
      style="color: var(--text-secondary);"
    >
      I'm a Junior Mobile Developer and IT Support Specialist, and Interested in
      Open Source Things
    </p>

    <div class="flex items-center justify-start md:justify-end gap-4 mt-6">
      <a
        href="mailto:gerrybagaskoro@proton.me"
        class="hover:opacity-70 transition-opacity"
        aria-label="Email"
        title="Email me"
      >
        <span
          class="icon-[tabler--mail] w-6 h-6"
          style="color: var(--text-secondary);"
        ></span>
      </a>
      <a
        href="https://github.com/gerrybagaskoro"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:opacity-70 transition-opacity"
        aria-label="GitHub"
        title="GitHub"
      >
        <span
          class="icon-[tabler--brand-github] w-6 h-6"
          style="color: var(--text-secondary);"
        ></span>
      </a>
      <a
        href="https://linkedin.com/in/gerrybagaskoro"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:opacity-70 transition-opacity"
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <span
          class="icon-[tabler--brand-linkedin] w-6 h-6"
          style="color: var(--text-secondary);"
        ></span>
      </a>
      <a
        href="https://facebook.com/gerrybagaskoro"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:opacity-70 transition-opacity"
        aria-label="Facebook"
        title="Facebook"
      >
        <span
          class="icon-[tabler--brand-facebook] w-6 h-6"
          style="color: var(--text-secondary);"
        ></span>
      </a>
      <a
        href="https://instagram.com/gerrybagaskoro_"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:opacity-70 transition-opacity"
        aria-label="Instagram"
        title="Instagram"
      >
        <span
          class="icon-[tabler--brand-instagram] w-6 h-6"
          style="color: var(--text-secondary);"
        ></span>
      </a>
      <a
        href="https://x.com/gerrybagaskoro"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:opacity-70 transition-opacity"
        aria-label="X / Twitter"
        title="X / Twitter"
      >
        <span
          class="icon-[tabler--brand-x] w-6 h-6"
          style="color: var(--text-secondary);"
        ></span>
      </a>
    </div>
  </div>
</section>
