/**
 * 2026 Core Portfolio JavaScript - Muskan Kumari
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. MOBILE NAVIGATION MENU TOGGLE
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

  // 2. PROJECTS 4-TAB SWITCHING (ALL 10 ITEMS DIRECTLY VISIBLE)
  const tabButtons = document.querySelectorAll('.tab-button');
  const projectItems = Array.from(document.querySelectorAll('.project-item'));

  let activeTab = 'graphic';

  function filterProjects() {
    projectItems.forEach(item => {
      if (item.dataset.category === activeTab) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      activeTab = btn.dataset.tab;
      filterProjects();
    });
  });

  // Initial tab filter execution
  filterProjects();

  // 3. VERTICAL AI VIDEO HOVER / TOUCH CONTROLS
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

  // 4. CONTACT FORM SUBMISSION
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your message has been sent successfully.');
      contactForm.reset();
    });
  }

  // 5. NAVBAR ACTIVE STATE ON SCROLL
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
