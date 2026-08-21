/* ==========================================================================
   PRODUCTION READY JAVASCRIPT FOR MUSKAN KUMARI PORTFOLIO
   Category Filtering | Instant View-More Expansion | Smooth Navigation
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. FILTERING LOGIC
    const filterTabs = document.querySelectorAll(".filter-tab");
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    const viewMoreBtn = document.getElementById("view-more-btn");
    let isExpanded = false;

    function applyFilter(category) {
        portfolioItems.forEach(item => {
            const itemCat = item.getAttribute("data-category");
            const isExtra = item.classList.contains("extra-item");

            const matchesCategory = (category === "all" || itemCat === category);

            if (matchesCategory) {
                if (isExtra) {
                    item.style.display = isExpanded ? "block" : "none";
                } else {
                    item.style.display = "block";
                }
            } else {
                item.style.display = "none";
            }
        });
    }

    filterTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            filterTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const activeCategory = tab.getAttribute("data-filter");
            applyFilter(activeCategory);
        });
    });

    // 2. ONE-CLICK "VIEW MORE PROJECTS" EXPANSION
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener("click", () => {
            isExpanded = !isExpanded;
            const activeTab = document.querySelector(".filter-tab.active");
            const activeCategory = activeTab ? activeTab.getAttribute("data-filter") : "all";

            applyFilter(activeCategory);

            if (isExpanded) {
                viewMoreBtn.innerHTML = '<span class="btn-text">Show Less</span> <i class="fa-solid fa-angle-up"></i>';
            } else {
                viewMoreBtn.innerHTML = '<span class="btn-text">View More Projects</span> <i class="fa-solid fa-angle-down"></i>';
            }
        });
    }

    // 3. ACTIVE NAVIGATION LINK HIGHLIGHT ON SCROLL
    const sections = document.querySelectorAll("header, section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let currentSection = "";
        const scrollPosition = window.pageYOffset + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });

    // 4. MOBILE MENU TOGGLE
    const mobileToggle = document.getElementById("mobile-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener("click", () => {
            navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
            if (navMenu.style.display === "flex") {
                navMenu.style.flexDirection = "column";
                navMenu.style.position = "absolute";
                navMenu.style.top = "72px";
                navMenu.style.left = "0";
                navMenu.style.width = "100%";
                navMenu.style.background = "#ffffff";
                navMenu.style.padding = "20px";
                navMenu.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
            }
        });
    }
});
