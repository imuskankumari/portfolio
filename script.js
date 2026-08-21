document.addEventListener('DOMContentLoaded', () => {
  // Category Filtering for Projects
  const filterButtons = document.querySelectorAll('.f-pill');
  const projectCards = document.querySelectorAll('#projectsGrid .item-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-cat');
        if (filterValue === 'all' || filterValue === cardCategory) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Contact Form Submission Handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you, Muskan! Your message has been sent successfully.');
      contactForm.reset();
    });
  }
});
