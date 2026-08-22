/**
 * 2026 Core Portfolio JavaScript - Muskan Kumari
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. MOBILE MENU TOGGLE
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

  // 2. INFINITE CONTINUOUS MARQUEE CLONING
  const marqueeTrack = document.getElementById('marquee-track');
  if (marqueeTrack) {
    const clone = marqueeTrack.innerHTML;
    marqueeTrack.innerHTML += clone;
  }

  // 3. PROJECT FILTERING & NESTED AI SUB-TABS
  const tabButtons = document.querySelectorAll('.tab-btn');
  const subTabButtons = document.querySelectorAll('.subtab-btn');
  const aiSubtabsContainer = document.getElementById('aiSubtabs');
  const projectCards = Array.from(document.querySelectorAll('.project-card'));
  const viewMoreBtn = document.getElementById('viewMoreBtn');

  let currentCategory = 'all';
  let currentSubcategory = 'ai-visuals';
  let isExpanded = false;
  const INITIAL_LIMIT = 5;

  function filterProjects() {
    let filtered = [];

    if (currentCategory === 'all') {
      filtered = projectCards;
    } else if (currentCategory === 'ai') {
      filtered = projectCards.filter(card => {
        return (
          card.dataset.category === 'ai' &&
          card.dataset.subcategory === currentSubcategory
        );
      });
    } else {
      filtered = projectCards.filter(card => card.dataset.category === currentCategory);
    }

    const itemsToShow = isExpanded ? filtered.length : Math.min(INITIAL_LIMIT, filtered.length);

    projectCards.forEach(card => {
      card.style.display = 'none';
    });

    filtered.slice(0, itemsToShow).forEach(card => {
      card.style.display = 'flex';
    });

    // Handle "View More Projects" Button
    if (viewMoreBtn) {
      if (filtered.length <= INITIAL_LIMIT || isExpanded) {
        viewMoreBtn.style.display = 'none';
      } else {
        viewMoreBtn.style.display = 'inline-flex';
        viewMoreBtn.innerHTML = `View More Projects &darr; (${filtered.length - INITIAL_LIMIT} more)`;
      }
    }
  }

  // Main Category Tab Clicks
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      currentCategory = btn.dataset.tab;
      isExpanded = false;

      if (currentCategory === 'ai') {
        aiSubtabsContainer.style.display = 'flex';
      } else {
        aiSubtabsContainer.style.display = 'none';
      }

      filterProjects();
    });
  });

  // Nested AI Sub-Tab Clicks
  subTabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      subTabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      currentSubcategory = btn.dataset.subtab;
      isExpanded = false;
      filterProjects();
    });
  });

  // View More Expansion Click
  if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', () => {
      isExpanded = true;
      filterProjects();
    });
  }

  // Initial Run
  filterProjects();

  // 4. VERTICAL AI VIDEO HOVER / TOUCH CONTROLS
  const videoCards = document.querySelectorAll('.vertical-video-wrapper');
  videoCards.forEach(wrapper => {
    const video = wrapper.querySelector('video');
    const overlay = wrapper.querySelector('.video-play-overlay');

    if (video) {
      wrapper.addEventListener('mouseenter', () => {
        video.play().catch(() => {});
        if (overlay) overlay.style.opacity = '0';
      });

      wrapper.addEventListener('mouseleave', () => {
        video.pause();
        if (overlay) overlay.style.opacity = '1';
      });

      wrapper.addEventListener('click', () => {
        if (video.paused) {
          video.play().catch(() => {});
          if (overlay) overlay.style.opacity = '0';
        } else {
          video.pause();
          if (overlay) overlay.style.opacity = '1';
        }
      });
    }
  });

  // 5. NAVBAR ACTIVE STATE ON SCROLL
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        if (navLink) navLink.classList.add('active');
      }
    });
  });
});

