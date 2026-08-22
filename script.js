/**
 * 2026 Core Portfolio JavaScript - Muskan Kumari
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. MOBILE NAVBAR TOGGLE
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('navbar')?.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // 2. AUTO-SLIDING SOFTWARE CAROUSEL (13 TOOLS ONLY)
  const carouselTrack = document.getElementById('carouselTrack');
  const slides = document.querySelectorAll('.software-card');
  const dotsContainer = document.getElementById('carouselDots');

  if (carouselTrack && slides.length > 0) {
    let currentIndex = 0;
    let autoSlideTimer = null;

    function getVisibleCount() {
      if (window.innerWidth <= 480) return 1;
      if (window.innerWidth <= 992) return 2;
      if (window.innerWidth <= 1200) return 3;
      return 4;
    }

    function renderDots() {
      const visibleCount = getVisibleCount();
      const totalSteps = Math.max(1, slides.length - visibleCount + 1);
      
      dotsContainer.innerHTML = '';
      for (let i = 0; i < totalSteps; i++) {
        const dot = document.createElement('span');
        dot.classList.add('carousel-dot');
        if (i === currentIndex) dot.classList.add('active');
        dot.addEventListener('click', () => {
          currentIndex = i;
          updateCarousel();
          resetTimer();
        });
        dotsContainer.appendChild(dot);
      }
    }

    function updateCarousel() {
      const visibleCount = getVisibleCount();
      const maxIndex = Math.max(0, slides.length - visibleCount);
      if (currentIndex > maxIndex) currentIndex = 0;

      const slideWidth = slides[0].offsetWidth + 20; // card width + gap
      carouselTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

      const dots = document.querySelectorAll('.carousel-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentIndex);
      });
    }

    function startTimer() {
      autoSlideTimer = setInterval(() => {
        const visibleCount = getVisibleCount();
        const maxIndex = Math.max(0, slides.length - visibleCount);
        currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
        updateCarousel();
      }, 3000);
    }

    function resetTimer() {
      clearInterval(autoSlideTimer);
      startTimer();
    }

    carouselTrack.addEventListener('mouseenter', () => clearInterval(autoSlideTimer));
    carouselTrack.addEventListener('mouseleave', () => startTimer());

    window.addEventListener('resize', () => {
      renderDots();
      updateCarousel();
    });

    renderDots();
    startTimer();
  }

  // 3. PROJECTS 4-TAB SWITCHING & VIEW MORE EXPANSION
  const tabButtons = document.querySelectorAll('.tab-button');
  const projectItems = Array.from(document.querySelectorAll('.project-item'));
  const viewMoreBtn = document.getElementById('viewMoreBtn');

  let activeTab = 'graphic';
  let isExpanded = false;
  const INITIAL_VISIBLE_COUNT = 4; // Show initial 4 items per tab

  function filterProjects() {
    const filtered = projectItems.filter(item => item.dataset.category === activeTab);
    const limit = isExpanded ? filtered.length : Math.min(INITIAL_VISIBLE_COUNT, filtered.length);

    projectItems.forEach(item => {
      item.style.display = 'none';
    });

    filtered.slice(0, limit).forEach(item => {
      item.style.display = 'flex';
    });

    // Handle "View More Projects" Button
    if (viewMoreBtn) {
      if (filtered.length <= INITIAL_VISIBLE_COUNT || isExpanded) {
        viewMoreBtn.style.display = 'none';
      } else {
        viewMoreBtn.style.display = 'inline-flex';
        viewMoreBtn.innerHTML = `View More Projects &darr; (${filtered.length - INITIAL_VISIBLE_COUNT} more)`;
      }
    }
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      activeTab = btn.dataset.tab;
      isExpanded = false;
      filterProjects();
    });
  });

  if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', () => {
      isExpanded = true;
      filterProjects();
    });
  }

  // Initial Run
  filterProjects();

  // 4. VERTICAL AI VIDEO HOVER / TOUCH CONTROLS
  const videoFrames = document.querySelectorAll('.video-smartphone-frame');
  videoFrames.forEach(frame => {
    const video = frame.querySelector('video');
    const playHint = frame.querySelector('.video-play-hint');

    if (video) {
      frame.addEventListener('mouseenter', () => {
        video.play().catch(() => {});
        if (playHint) playHint.style.opacity = '0';
      });

      frame.addEventListener('mouseleave', () => {
        video.pause();
        if (playHint) playHint.style.opacity = '1';
      });

      frame.addEventListener('click', () => {
        if (video.paused) {
          video.play().catch(() => {});
          if (playHint) playHint.style.opacity = '0';
        } else {
          video.pause();
          if (playHint) playHint.style.opacity = '1';
        }
      });
    }
  });

  // 5. CONTACT FORM SUBMISSION
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your message has been sent successfully.');
      contactForm.reset();
    });
  }

  // 6. ACTIVE NAVBAR LINK ON SCROLL
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        if (navLink) navLink.classList.add('active');
      }
    });
  });
});
