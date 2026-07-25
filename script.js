document.addEventListener("DOMContentLoaded", function () {

    // 1. Mobile Hamburger Menu Toggle
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

    // 3. MASTER REPOSITORY PROJECT DATA MAPPING
    const allProjectsData = [];

    // Graphic Design: g1.jpg to g50.jpg
    for (let i = 1; i <= 50; i++) {
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

    // Web Layouts: w1.png to w10.png
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

    // AI Visuals: v1.png to v10.png
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

    // AI Animation Videos / Reels: r1.mp4 to r12.mp4
    for (let i = 1; i <= 12; i++) {
        allProjectsData.push({
            id: `r_${i}`,
            category: "ai-animation",
            tag: "AI Animation Videos",
            title: `AI Motion Reel #${i}`,
            author: "MK Designs",
            type: "video",
            src: `r${i}.mp4`
        });
    }

    // STATE VARIABLES FOR PAGINATION & FILTERING
    let currentFilter = "all";
    let displayedCount = 6;
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
        const itemsToRender = filtered.slice(0, displayedCount);

        projectsGrid.innerHTML = "";

        itemsToRender.forEach(item => {
            const card = document.createElement("div");
            card.className = "project-card";

            let mediaHTML = "";
            if (item.type === "image") {
                mediaHTML = `<img src="${item.src}" alt="${item.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80'">`;
            } else if (item.type === "video") {
                mediaHTML = `<video controls preload="metadata"><source src="${item.src}" type="video/mp4">Your browser does not support video.</video>`;
            }

            card.innerHTML = `
                <div class="project-media-box">
                    ${mediaHTML}
                </div>
                <div class="project-info">
                    <span class="project-tag">${item.tag}</span>
                    <h3 class="project-title">${item.title}</h3>
                    <p class="project-author">By <strong>${item.author}</strong></p>
                </div>
            `;

            // Open Fullscreen Lightbox on click (unless clicking video controls)
            card.addEventListener("click", (e) => {
                if (e.target.tagName !== "VIDEO") {
                    openLightbox(item);
                }
            });

            projectsGrid.appendChild(card);
        });

        // Toggle 'View More' Button Visibility
        if (displayedCount >= filtered.length) {
            loadMoreBtn.style.display = "none";
        } else {
            loadMoreBtn.style.display = "inline-block";
        }
    }

    // Initial Render
    renderProjects();

    // Filter Button Click Handler
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            currentFilter = button.getAttribute("data-filter");
            displayedCount = INITIAL_LIMIT; // Reset to 6 on category switch
            renderProjects();
        });
    });

    // View More Button Click Handler
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", () => {
            displayedCount += 6;
            renderProjects();
        });
    }

    // 4. FULLSCREEN LIGHTBOX POPUP MODAL LOGIC
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

    // 5. VISIT COUNTER
    const counterElement = document.getElementById("visitCounter");
    if (counterElement) {
        let visits = localStorage.getItem("pageVisitsCount");
        if (!visits) {
            visits = 151;
        } else {
            visits = parseInt(visits) + 1;
        }
        localStorage.setItem("pageVisitsCount", visits);
        counterElement.textContent = visits + "+";
    }

});
