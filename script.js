// MULTI-STREAM DYNAMIC ENGINE ENGINE
document.addEventListener("DOMContentLoaded", () => {
    initScrollSpySystem();
    buildAmazonTrueGrid();
    initVideoSlidersEngine();
    armAntiTheftShields();
});

// 1. DYNAMIC ROUTING NAVIGATION PROTOCOL
function initScrollSpySystem() {
    const links = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".page-section");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetHash = link.getAttribute("href");
            const targetSection = document.querySelector(targetHash);
            
            if(targetSection) {
                const navBarHeight = 70;
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navBarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    window.addEventListener("scroll", () => {
        let activeId = "home";
        sections.forEach(sec => {
            const topOffset = sec.offsetTop - 85;
            if(window.pageYOffset >= topOffset) {
                activeId = sec.getAttribute("id");
            }
        });

        links.forEach(l => {
            l.classList.remove("active");
            if(l.getAttribute("href") === `#${activeId}`) {
                l.classList.add("active");
            }
        });
    });
}

// 2. BUILD SERVICES PORTFOLIO CARD GRIDS (g1.jpg to g100.jpg)
function buildAmazonTrueGrid() {
    const gridContainer = document.getElementById("amazonGridEngine");
    let domBuffer = "";

    for (let count = 1; count <= 100; count++) {
        domBuffer += `
            <div class="amazon-product-card-node" id="card-item-${count}" onclick="openLightbox('g${count}.jpg', 'Graphic Production Layout Template #${count}')">
                <div class="card-image-box-frame">
                    <img src="g${count}.jpg" alt="Graphic Design Showcase Item ${count}" draggable="false" onerror="this.parentNode.style.backgroundColor='#1a1f2c'">
                </div>
                <div class="card-title-string">Graphic Production Layout Template #${count}</div>
                <div class="card-badge-row">
                    <span>Identity Suite</span>
                    <span class="verified-tag"><i class="fas fa-circle-check"></i> Active</span>
                </div>
            </div>
        `;
    }
    gridContainer.innerHTML = domBuffer;
}

function openLightbox(imgSrc, captionText) {
    const modal = document.getElementById("imageLightboxModal");
    const modalImg = document.getElementById("lightboxMainImage");
    const modalCaption = document.getElementById("lightboxCaption");

    modal.style.display = "flex";
    modalImg.src = imgSrc;
    modalCaption.innerText = captionText;
}

function closeLightbox() {
    document.getElementById("imageLightboxModal").style.display = "none";
}

// 3. 9:16 REEL AUTOMATIC CYCLES SYSTEM (Left: 8 Slides vs Right: 2 Slides)
const trackerIndices = { aiTrack: 0, brandTrack: 0 };
const sliderTotalCount = { aiTrack: 8, brandTrack: 2 }; // Sets counts boundaries dynamically
let automaticIntervalThreads = [];

function initVideoSlidersEngine() {
    const aiTrack = document.getElementById("aiTrack");
    const brandTrack = document.getElementById("brandTrack");

    let aiHTMLBuffer = "";
    let brandHTMLBuffer = "";

    // Loop 1: Injects 8 AI Video Files (v1.mp4 to v8.mp4)
    for (let i = 1; i <= 8; i++) {
        aiHTMLBuffer += `
            <div class="stream-slide">
                <video src="v${i}.mp4" autoplay muted loop playsinline></video>
            </div>
        `;
    }

    // Loop 2: Injects 2 Brand Identity Video Files (b1.mp4 to b2.mp4)
    for (let j = 1; j <= 2; j++) {
        brandHTMLBuffer += `
            <div class="stream-slide">
                <video src="b${j}.mp4" autoplay muted loop playsinline></video>
            </div>
        `;
    }

    aiTrack.innerHTML = aiHTMLBuffer;
    brandTrack.innerHTML = brandHTMLBuffer;

    // Run loops ticking independently every 3.5 seconds
    automaticIntervalThreads.push(setInterval(() => { performTrackCycle('aiTrack'); }, 3500));
    automaticIntervalThreads.
