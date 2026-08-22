/**
 * Muskan Kumari - Portfolio 2026 Production Scripts
 */
document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------------
     1. RESPONSIVE MOBILE NAVIGATION TOGGLE
     ------------------------------------------------------------------------ */
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('is-active');
      hamburgerBtn.classList.toggle('open');
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-active');
        hamburgerBtn.classList.remove('open');
      });
    });
  }

  /* ------------------------------------------------------------------------
     2. SOFTWARE MARQUEE INFINITE LOOP CONTROLLER
     ------------------------------------------------------------------------ */
  const marqueeTrack = document.getElementById('marqueeTrack');
  if (marqueeTrack) {
    let position = 0;
    const speed = 0.75; // Pixels per frame
    let isPaused = false;

    // Hover pause controls
    marqueeTrack.addEventListener('mouseenter', () => { isPaused = true; });
    marqueeTrack.addEventListener('mouseleave', () => { isPaused = false; });
    marqueeTrack.addEventListener('touchstart', () => { isPaused = true; }, { passive: true });
    marqueeTrack.addEventListener('touchend', () => { isPaused = false; });

    function animateMarquee() {
      if (!isPaused) {
        position -= speed;
        // Total half scroll width check for seamless restart
        if (Math.abs(position) >= marqueeTrack.scrollWidth / 2) {
          position = 0;
        }
        marqueeTrack.style.transform = `translateX(${position}px)`;
      }
      requestAnimationFrame(animateMarquee);
    }
    requestAnimationFrame(animateMarquee);
  }

  /* ------------------------------------------------------------------------
     3. PROJECT CATEGORY FILTER & SINGLE-CLICK EXPANSION
     ------------------------------------------------------------------------ */
  const filterTabs = document.querySelectorAll('.filter-tab');
  const projectCards = document.querySelectorAll('.project-card');
  const viewMoreBtn = document.getElementById('viewMoreBtn');
  const viewMoreContainer = document.getElementById('viewMoreContainer');

  let currentCategory = 'all';
  let isExpanded = false;

  function updateProjectVisibility() {
    projectCards.forEach((card) => {
      const cardCategory = card.getAttribute('data-cat');
      const matchesCategory = (currentCategory === 'all' || cardCategory === currentCategory);

      if (!matchesCategory) {
        card.classList.add('filtered-out');
      } else {
        card.classList.remove('filtered-out');
        
        // If not expanded, keep items with .is-hidden hidden
        if (!isExpanded && card.dataset.defaultHidden === 'true') {
          card.classList.add('is-hidden');
        } else {
          card.classList.remove('is-hidden');
        }
      }
    });

    // Toggle button visibility if all visible items are shown
    if (isExpanded) {
      if (viewMoreContainer) viewMoreContainer.style.display = 'none';
    } else {
      if (viewMoreContainer) viewMoreContainer.style.display = 'block';
    }
  }

  // Mark initially hidden cards
  projectCards.forEach((card) => {
    if (card.classList.contains('is-hidden')) {
      card.dataset.defaultHidden = 'true';
    }
  });

  // Filter Tab Switching
  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      filterTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.getAttribute('data-category');
      updateProjectVisibility();
    });
  });

  // Single-Click View More
  if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', () => {
      isExpanded = true;
      projectCards.forEach((card) => {
        card.classList.remove('is-hidden');
      });
      if (viewMoreContainer) {
        viewMoreContainer.style.display = 'none';
      }
    });
  }

  /* ------------------------------------------------------------------------
     4. SMOOTH SCROLL OFFSET FOR FIXED HEADER
     ------------------------------------------------------------------------ */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerHeight = document.getElementById('navbar')?.offsetHeight || 70;
        const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

});
