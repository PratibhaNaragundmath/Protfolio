

document.addEventListener('DOMContentLoaded', () => {

  initThemeToggle();

  initTypingEffect();

  initNavbarScroll();

  initProjectFilters();

  initBackToTop();

  initContactForm();

  initCopyButtons();
});


function initThemeToggle() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');

  const savedTheme = localStorage.getItem('portfolio-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const initialTheme = savedTheme ? savedTheme : (prefersDark ? 'dark' : 'light');
  applyTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-bs-theme', theme);
    if (themeIcon) {
      if (theme === 'dark') {
        themeIcon.className = 'bi bi-sun-fill';
        if (themeToggleBtn) themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
      } else {
        themeIcon.className = 'bi bi-moon-stars-fill';
        if (themeToggleBtn) themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
      }
    }
  }
}


function initTypingEffect() {
  const typedTarget = document.getElementById('typedText');
  if (!typedTarget) return;

  const roles = [
    'AI Engineer',
    'Web Developer',
    'Frontend Enthusiast',
    
    'Python & Java Explorer',
    'Clean Code & UI Specialist'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseEnd = 1800;
  const pauseStart = 400;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typedTarget.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedTarget.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentRole.length) {
      speed = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      speed = pauseStart;
    }

    setTimeout(type, speed);
  }

  type();
}


function initNavbarScroll() {
  const navbar = document.querySelector('.navbar-custom');
  const navLinks = document.querySelectorAll('.nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    });
  });
}


function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  const projectItems = document.querySelectorAll('.project-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active', 'btn-primary-custom'));
      filterBtns.forEach(b => b.classList.add('btn-outline-custom'));
      
      btn.classList.remove('btn-outline-custom');
      btn.classList.add('active', 'btn-primary-custom');

      const filterValue = btn.getAttribute('data-filter');

      projectItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue || category?.includes(filterValue)) {
          item.style.display = 'block';
          item.classList.add('animate__fadeIn');
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}


function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 450) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}


function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  const successToastEl = document.getElementById('formSuccessToast');
  
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!contactForm.checkValidity()) {
      e.stopPropagation();
      contactForm.classList.add('was-validated');
      return;
    }

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Sending...`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      if (successToastEl) {
        successToastEl.classList.add('show');
        setTimeout(() => {
          successToastEl.classList.remove('show');
        }, 4000);
      } else {
        alert('Thank you! Your message has been sent successfully.');
      }

      contactForm.reset();
      contactForm.classList.remove('was-validated');
    }, 1200);
  });
}


function initCopyButtons() {
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          const originalHTML = btn.innerHTML;
          btn.innerHTML = `<i class="bi bi-check2 text-success"></i> Copied!`;
          setTimeout(() => {
            btn.innerHTML = originalHTML;
          }, 2000);
        }).catch(err => {
          console.error('Could not copy text: ', err);
        });
      }
    });
  });
}


function printResume() {
  window.print();
}
window.printResume = printResume;
