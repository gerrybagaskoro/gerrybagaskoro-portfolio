const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Tema toggle
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// Navigation and Smooth Scroll
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

// Function to update active navigation link
function updateActiveNav() {
  const scrollPos = window.scrollY + 100;
  
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      currentSection = sectionId;
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

// Smooth scroll with fade animation
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      // Smooth scroll to target
      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: 'smooth'
      });
      
      // Update active nav link
      navLinks.forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    }
  });
});

// Intersection Observer for animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.classList.add('active');
      
      // Animate skill bars when they become visible
      if (entry.target.classList.contains('skill-category')) {
        const fills = entry.target.querySelectorAll('.fill');
        fills.forEach(fill => {
          const width = fill.style.width;
          fill.style.width = '0%';
          setTimeout(() => {
            fill.style.width = width;
          }, 300);
        });
      }
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".fade-in, .slide-in, .skill-category, .section").forEach(el => observer.observe(el));

// Update active nav on scroll
window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);

// ===== INTRO LANDING PAGE =====
window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  const enterBtn = document.getElementById("enter-btn");

  // Tahan scroll sebelum masuk
  document.body.style.overflow = "hidden";

  enterBtn.addEventListener("click", () => {
    // Aktifkan efek blur-to-clear
    intro.classList.add("hidden");

    // Aktifkan scroll dan sembunyikan intro setelah animasi selesai
    setTimeout(() => {
      document.body.style.overflow = "auto";
      intro.style.display = "none";
    }, 1200);
  });
});

// Back to top button
const backToTop = document.createElement('button');
backToTop.innerHTML = '↑';
backToTop.className = 'back-to-top';
backToTop.setAttribute('aria-label', 'Back to top');
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Mengirim...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      alert(`Terima kasih ${name}! Pesan Anda telah dikirim. Saya akan membalas ke ${email} segera.`);
      contactForm.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 2000);
  });
}

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('load', function() {
      this.style.opacity = '1';
    });
    img.style.transition = 'opacity 0.3s ease';
    if (img.complete) {
      img.style.opacity = '1';
    } else {
      img.style.opacity = '0';
    }
  });
});