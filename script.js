document.addEventListener("DOMContentLoaded", () => {
  // Mobile Hamburger Toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  // Project Filtering & View More State Management
  const tabButtons = document.querySelectorAll(".tab-btn");
  const projectCards = Array.from(document.querySelectorAll(".projects-grid .project-card"));
  const viewMoreBtn = document.getElementById("viewMoreBtn");

  let currentCategory = "all";
  let isExpanded = false;
  const INITIAL_LIMIT = 6;

  function updateProjectVisibility() {
    // Filter by active category
    const matchingCards = projectCards.filter((card) => {
      const category = card.getAttribute("data-category");
      return currentCategory === "all" || category === currentCategory;
    });

    // Hide all cards first
    projectCards.forEach((card) => {
      card.classList.add("is-hidden");
    });

    // Display appropriate cards based on expansion state
    matchingCards.forEach((card, index) => {
      if (isExpanded || index < INITIAL_LIMIT) {
        card.classList.remove("is-hidden");
      }
    });

    // Manage 'View More' Button Visibility & Text
    if (matchingCards.length <= INITIAL_LIMIT) {
      viewMoreBtn.style.display = "none";
    } else {
      viewMoreBtn.style.display = "inline-flex";
      viewMoreBtn.innerHTML = isExpanded
        ? 'Show Less Projects &uarr;'
        : 'View More Projects &darr;';
    }
  }

  // Handle Tab Click
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      isExpanded = false; // Reset to collapsed on category change
      updateProjectVisibility();
    });
  });

  // Handle View More Click
  if (viewMoreBtn) {
    viewMoreBtn.addEventListener("click", () => {
      isExpanded = !isExpanded;
      updateProjectVisibility();
    });
  }

  // Initialize Visibility
  updateProjectVisibility();

  // Video Autoplay/Pause On Hover for Video Reels
  const videoCards = document.querySelectorAll(".video-card");
  videoCards.forEach((card) => {
    const video = card.querySelector("video");
    if (video) {
      card.addEventListener("mouseenter", () => {
        video.play().catch(() => {});
      });
      card.addEventListener("mouseleave", () => {
        video.pause();
      });
    }
  });

  // Contact Form Submission Mock
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! Your message has been sent successfully.");
      contactForm.reset();
    });
  }
});
