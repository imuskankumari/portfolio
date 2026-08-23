document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navbar Toggle
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const icon = navToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    // Close menu when navigation link is clicked
    const links = navLinks.querySelectorAll('a');
    links.forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        const icon = navToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // Project Filter Tabs Switching Logic
  const tabs = document.querySelectorAll('.filter-tab');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs & panes
      tabs.forEach((t) => t.classList.remove('active'));
      tabPanes.forEach((pane) => pane.classList.remove('active'));

      // Activate clicked tab and target pane
      tab.classList.add('active');
      const targetId = tab.getAttribute('data-target');
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });

  // Contact Form Submission Handler
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('name');
      const senderName = nameInput ? nameInput.value.trim() : 'there';

      alert(`Thank you, ${senderName}! Your message has been sent successfully. Muskan will reach out to you soon.`);
      contactForm.reset();
    });
  }
});
