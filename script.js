document.addEventListener("DOMContentLoaded", function () {

    // 1. Mobile Hamburger Menu
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });

        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
            });
        });
    }

    // 2. Active Header Navigation Link on Scroll
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });

    // 3. MASTER REPOSITORY FILE MAPPING
    const allProjectsData = [];

    // Graphic Design (g1.jpg - g20.jpg)
    for (let i = 1; i <= 20; i++) {
        allProjectsData.push({
            id: `g_${i}`,
            category: "graphic",
            tag: "Graphic Design",
            title: `Graphic Artwork #${i}`,
            author: "MK Designs",
            type: "image",
            src: `g${i}.jpg`
        });
    }

    // Web Layouts (w1.png - w10.png)
    for (let i = 1; i <= 10; i++) {
        allProjectsData.push({
            id: `w_${i}`,
            category: "web",
            tag: "Web Layout",
            title: `Web UI Layout #${i}`,
            author: "MK Designs",
            type: "image",
            src: `w${i}.png`
        });
    }

    // AI Visuals (v1.png - v10.png & b1.png - b10.png)
    for (let i = 1; i <= 10; i++) {
        allProjectsData.push({
            id: `v_${i}`,
            category: "ai-visuals",
            tag: "AI Visuals",
            title: `AI Concept Visual #${i}`,
            author: "MK Designs",
            type: "image",
            src: `v${i}.png`
        });
    }
    for (let i = 1; i <= 10; i++) {
        allProjectsData.push({
            id: `b_${i}`,
            category: "ai-visuals",
            tag: "AI Visuals",
            title: `AI Visual Artwork #${i}`,
            author: "MK Designs",
            type: "image",
            src: `b${i}.png`
        });
    }

    // AI Animation Videos / Reels (r1.mp4 - r12.mp4)
    for (let i = 1; i <= 12; i++) {
        allProjectsData.push({
            id: `r_${i}`,
            category: "ai-animation",
            tag: "AI Animation Videos",
            title: `Vertical Reel #${i}`,
            author: "MK Designs",
            type: "video",
            src: `r${i}.mp4`
        });
    }

    // STATE VARIABLES FOR ONE-CLICK FULL LOAD
    let currentFilter = "all";
    let isExpanded = false;
    const INITIAL_LIMIT = 6;

    const projectsGrid = document.getElementById("projectsGrid");
    const loadMoreBtn = document.getElementById("loadMoreBtn");

    function getFilteredProjects() {
        if (currentFilter === "all") {
            return allProjectsData;
        }
        return allProjectsData.filter(item => item.category === currentFilter);
    }

    function renderProjects() {
        const filtered = getFilteredProjects();
        const itemsToRender = isExpanded ? filtered : filtered.slice(0, INITIAL_LIMIT);

        projectsGrid.innerHTML = "";

        itemsToRender.forEach(item => {
            const card = document.createElement("div");
            
            if (item.type === "video") {
                card.className = "behance-card reel-card";
            } else {
                card.className = "behance-card";
            }

            let mediaHTML = "";
            if (item.type === "image") {
                mediaHTML = `<img src="${item.src}" alt="${item.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80'">`;
            } else if (item.type === "video") {
                mediaHTML = `<video controls playsinline preload="metadata"><source src="${item.src}" type="video/mp4"></video>`;
            }

            card.innerHTML = `
                <div class="behance-media-box">
                    ${mediaHTML}
                </div>
                <div class="behance-info">
                    <div class="behance-title-box">
                        <span class="behance-tag">${item.tag}</span>
                        <h3 class="behance-title">${item.title}</h3>
                    </div>
                    <span class="behance-author">By <strong>${item.author}</strong></span>
                </div>
            `;

            card.addEventListener("click", (e) => {
                if (e.target.tagName !== "VIDEO") {
                    openLightbox(item);
                }
            });

            projectsGrid.appendChild(card);
        });

        if (isExpanded || filtered.length <= INITIAL_LIMIT) {
            loadMoreBtn.style.display = "none";
        } else {
            loadMoreBtn.style.display = "inline-block";
        }
    }

    renderProjects();

    // Filter Buttons Handler
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            currentFilter = button.getAttribute("data-filter");
            isExpanded = false;
            renderProjects();
        });
    });

    // ONE-CLICK VIEW MORE BUTTON HANDLER
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", () => {
            isExpanded = true;
            renderProjects();
        });
    }

    // LIGHTBOX POPUP LOGIC
    const lightboxModal = document.getElementById("lightboxModal");
    const lightboxContent = document.getElementById("lightboxContent");
    const lightboxClose = document.getElementById("lightboxClose");

    function openLightbox(item) {
        lightboxContent.innerHTML = "";
        if (item.type === "image") {
            const img = document.createElement("img");
            img.src = item.src;
            img.alt = item.title;
            lightboxContent.appendChild(img);
        } else if (item.type === "video") {
            const video = document.createElement("video");
            video.src = item.src;
            video.controls = true;
            video.autoplay = true;
            lightboxContent.appendChild(video);
        }
        lightboxModal.classList.add("active");
    }

    if (lightboxClose) {
        lightboxClose.addEventListener("click", () => {
            lightboxModal.classList.remove("active");
            lightboxContent.innerHTML = "";
        });
    }

    if (lightboxModal) {
        lightboxModal.addEventListener("click", (e) => {
            if (e.target === lightboxModal) {
                lightboxModal.classList.remove("active");
                lightboxContent.innerHTML = "";
            }
        });
    }

    // SMART ADMIN-EXCLUDED VISITOR COUNTER
    const counterElement = document.getElementById("visitCounter");
    
    function handleVisitorCounter() {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get("admin") === "true") {
            localStorage.setItem("portfolio_admin", "true");
        }

        const isAdmin = localStorage.getItem("portfolio_admin") === "true";
        let storedVisits = parseInt(localStorage.getItem("total_unique_visits") || "0", 10);

        if (isAdmin) {
            if (counterElement) counterElement.textContent = storedVisits;
            return;
        }

        const lastVisitTime = localStorage.getItem("last_visit_timestamp");
        const now = new Date().getTime();
        const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;

        if (!lastVisitTime || (now - parseInt(lastVisitTime, 10)) > TWENTY_FOUR_HOURS) {
            storedVisits += 1;
            localStorage.setItem("total_unique_visits", storedVisits.toString());
            localStorage.setItem("last_visit_timestamp", now.toString());
        }

        if (counterElement) {
            counterElement.textContent = storedVisits;
        }
    }

    handleVisitorCounter();

});

