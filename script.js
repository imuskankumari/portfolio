// SINGLE-PAGE PORTFOLIO SYSTEM CONTROLLER
document.addEventListener("DOMContentLoaded", () => {
    initSmoothScrollNavigation();
    buildAmazonTrueGrid();
    buildCombinedWideSlider();
    startAutomatedIntervals();
    armSystemSecurity();
});

// 1. TRUE SINGLE PAGE LAYER SMOOTH SCROLL MONITOR
function initSmoothScrollNavigation() {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".page-section");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetHash = link.getAttribute("href");
            const targetSection = document.querySelector(targetHash);
            
            if (targetSection) {
                const navBarHeight = 70;
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navBarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Auto highlight navigation buttons based on user scroll positions
    window.addEventListener("scroll", () => {
        let activeSectionId = "home";
        sections.forEach(sec => {
            const topOffset = sec.offsetTop - 90;
            if (window.pageYOffset >= topOffset) {
                activeSectionId = sec.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${activeSectionId}`) {
                link.classList.add("active");
            }
        });
    });
}

// 2. GENERATE 100 AMAZON-STYLE SQUARISH GRID CARDS (g1.jpg to g100.jpg)
function buildAmazonTrueGrid() {
    const gridContainer = document.getElementById("amazonGridEngine");
    let htmlBuffer = "";

    for (let count = 1; count <= 100; count++) {
        htmlBuffer += `
            <div class="amazon-product-card-node" id="card-node-${count}" onclick="openLightbox('g${count}.jpg', 'Graphic Production Layout Template #${count}')">
                <div class="card-image-box-frame">
                    <img src="g${count}.jpg" alt="Production Artwork Item ${count}" draggable="false" onerror="this.parentNode.style.backgroundColor='#181c26'">
                </div>
                <div class="card-title-string">Graphic Production Layout Template #${count}</div>
                <div class="card-badge-row">
                    <span>Identity Suite</span>
                    <span class="verified-tag"><i class="fas fa-check-circle"></i> Active</span>
                </div>
            </div>
        `;
    }
    gridContainer.innerHTML = htmlBuffer;
}

function openLightbox(imgSrc, captionText) {
    const modal = document.getElementById("imageLightboxModal");
    const modalImg = document.getElementById("lightboxMainImage");
    const modalCaption = document.getElementById("lightboxCaption");

    modal.style.display = "flex";
    modalImg.src = imgSrc;
    modalCaption.innerText = captionText;
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
});

function closeLightbox() {
    document.getElementById("imageLightboxModal").style.display = "none";
}

// 3. COMBINED FULL WIDTH AMAZON VIDEO SLIDER ENGINE (b1-b11 + v1-v8 = 19 Streams)
let activeSlideIndex = 0;
const totalSlidesCount = 19;
let sliderThreadTimer = null;
let globalMuteState = true; 

function buildCombinedWideSlider() {
    const track = document.getElementById("masterVideoTrack");
    let streamBuffer = "";

    // Stream Group 1: Brand Videos b1.mp4 to b11.mp4 (All Lowercase Path)
    for (let b = 1; b <= 11; b++) {
        streamBuffer += `
            <div class="stream-slide">
                <video class="portfolio-video-node" src="b${b}.mp4" loop playsinline muted></video>
            </div>
        `;
    }

    // Stream Group 2: AI Videos v1.mp4 to v8.mp4 (All Lowercase Path)
    for (let v = 1; v <= 8; v++) {
        streamBuffer += `
            <div class="stream-slide">
                <video class="portfolio-video-node" src="v${v}.mp4" loop playsinline muted></video>
            </div>
        `;
    }

    track.innerHTML = streamBuffer;
    
    // Fire initial playback instantly
    setTimeout(() => { playVideoAtCurrentIndex(); }, 250);
}

function startAutomatedIntervals() {
    sliderThreadTimer = setInterval(() => {
        activeSlideIndex++;
        if (activeSlideIndex >= totalSlidesCount) {
            activeSlideIndex = 0;
        }
        executeTrackShift();
    }, 4000); // Swipes automatically every 4 seconds
}

function executeTrackShift() {
    const track = document.getElementById("masterVideoTrack");
    if(track) {
        track.style.transform = `translateX(-${activeSlideIndex * 100}%)`;
        playVideoAtCurrentIndex();
    }
}

function playVideoAtCurrentIndex() {
    const allVideos = document.querySelectorAll(".portfolio-video-node");
    
    allVideos.forEach(video => {
        video.pause();
        video.currentTime = 0;
    });

    const currentVideo = allVideos[activeSlideIndex];
    if (currentVideo) {
        currentVideo.muted = globalMuteState;
        currentVideo.play().catch(() => console.log("User gesture required for audio track initialization..."));
    }
}

// TOGGLE VOLUME OVERLAY CONTROLLER
function toggleGlobalAudio() {
    globalMuteState = !globalMuteState;
    const allVideos = document.querySelectorAll(".portfolio-video-node");
    const soundIcon = document.getElementById("soundIcon");

    allVideos.forEach(video => {
        video.muted = globalMuteState;
    });

    if (globalMuteState) {
        soundIcon.className = "fas fa-volume-mute";
    } else {
        soundIcon.className = "fas fa-volume-up";
    }
}

// 4. SEARCH INTERACTION PROTOCOL (Focus to Grid View and Filter views)
function searchAndFocusGallery() {
    const inputQuery = document.getElementById("gallerySearch").value.toLowerCase();
    const cards = document.querySelectorAll(".amazon-product-card-node");
    const servicesSection = document.getElementById("services");

    if(inputQuery !== "") {
        const navOffset = 70;
        const targetCoords = servicesSection.getBoundingClientRect().top + window.pageYOffset - navOffset;
        window.scrollTo({ top: targetCoords, behavior: "smooth" });
    }

    cards.forEach((card, index) => {
        const itemNum = index + 1;
        const metadataString = `g${itemNum} burger template post logo banner item design visual layout showcase product illustration identity production`;
        
        if (metadataString.includes(inputQuery) || inputQuery === "") {
            card.classList.remove("filtered-out");
        } else {
            card.classList.add("filtered-out");
        }
    });
}

// 5. SECURITY CONTROLS
function armSystemSecurity() {
    document.addEventListener("keydown", (e) => {
        if (
            e.keyCode === 123 || 
            (e.ctrlKey && e.shiftKey && e.keyCode === 73) || 
            (e.ctrlKey && e.keyCode === 85) || 
            (e.ctrlKey && e.keyCode === 83)
        ) {
            e.preventDefault();
            return false;
        }
    });

    document.addEventListener("dragstart", (e) => {
        if (e.target.nodeName === "IMG" || e.target.nodeName === "VIDEO") { e.preventDefault(); }
    });
}

