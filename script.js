document.addEventListener("DOMContentLoaded", () => {
  // 1. BEHANCE PORTFOLIO TAB SWITCHER
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      tabButtons.forEach((b) => b.classList.remove("active"));
      // Add active class to clicked button
      btn.classList.add("active");

      // Hide all tab grids
      tabContents.forEach((content) => content.classList.remove("active"));

      // Target active grid
      const category = btn.getAttribute("data-category");
      const targetGrid = document.getElementById(`tab-${category}`);
      if (targetGrid) {
        targetGrid.classList.add("active");
      }
    });
  });

  // 2. SMOOTH SCROLL OFFSET FOR FIXED HEADER
  const header = document.querySelector(".top-header");
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerHeight = header.offsetHeight || 70;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});
