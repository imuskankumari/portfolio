/**
 * Muskan Kumari Portfolio - Interactive Scripts
 * Handles:
 * 1. Mobile Menu Toggle
 * 2. Sticky Navbar & Section Active Link Highlight
 * 3. Portfolio Category Filtering Logic
 * 4. Contact Form Simulated Submission
 */

document.addEventListener('DOMContentLoaded', () => {

  // ================= 1. MOBILE NAVIGATION TOGGLE =================
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = navToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const icon = navToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // ================= 2. NAVBAR SCROLL & ACTIVE LINK HIGHLIGHT =================
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Sticky header shadow
    if (scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Dynamic active link highlighting on scroll
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 110;
      const sectionId = section.getAttribute('id');
      const currentLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        if (currentLink) {
          navLinks.forEach(link => link.classList.remove('active'));
          currentLink.classList.add('active');
        }
      }
    });
  });

  // ================= 3. PORTFOLIO FILTERING LOGIC =================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Set active state on button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      // Filter project cards matching category
      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (filterValue === 'all' || filterValue === cardCategory) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  // ================= 4. CONTACT FORM CLIENT SIMULATION =================
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        displayStatus('Please fill in all fields before sending.', 'error');
        return;
      }

      displayStatus('Sending message...', '');
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;

      // Mock network response delay
      setTimeout(() => {
        displayStatus('Thank you! Your message has been sent successfully.', 'success');
        contactForm.reset();
        submitBtn.disabled = false;

        setTimeout(() => {
          formStatus.textContent = '';
          formStatus.className = 'form-status-msg';
        }, 5000);
      }, 900);
    });
  }

  function displayStatus(msg, type) {
    if (!formStatus) return;
    formStatus.textContent = msg;
    formStatus.className = `form-status-msg ${type}`;
  }
});

