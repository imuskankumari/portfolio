// MULTI-STREAM DYNAMIC INTEL INTEGRATOR
document.addEventListener("DOMContentLoaded", () => {
    initSmoothScrollSpy();
    buildAmazonTrueGrid();
    buildCombinedWideSlider();
    startAutomatedIntervals();
    armSystemSecurity();
});

function initSmoothScrollSpy() {
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

function buildAmazonTrueGrid() {
    const gridContainer = document.getElementById("amazonGridEngine");
    let domBuffer = "";

    for (let count = 1; count <= 100; count++) {
        domBuffer += `
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

let activeSlideIndex = 0;
const totalSlidesCount = 20; // Corrected total bound count configuration for 12 videos
let sliderThreadTimer = null;
let globalMuteState = true; 

function buildCombinedWideSlider() {
    const track = document.getElementById("masterVideoTrack");
    let streamBuffer = "";

    // Load v1.mp4 to v12.mp4 securely into the stream track
    for (let v = 1; v <= 12; v++) {
        streamBuffer += `
            <div class="stream-slide">
                <video class="portfolio-video-node" src="v${v}.mp4" loop playsinline muted></video>
            </div>
        `;
    }

    // Load fallbacks b1 to b8 securely into track bounds
    for (let b = 1; b <= 8; b++) {
        streamBuffer += `
            <div class="stream-slide">
                <video class="portfolio-video-node" src="b${b}.mp4" loop playsinline muted></video>
            </div>
        `;
    }

    track.innerHTML = streamBuffer;
    setTimeout(() => { playVideoAtCurrentIndex(); }, 250);
}

function startAutomatedIntervals() {
    sliderThreadTimer = setInterval(() => {
        activeSlideIndex++;
        if (activeSlideIndex >= totalSlidesCount) {
            activeSlideIndex = 0;
        }
        executeTrackShift();
    }, 4000);
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
        currentVideo.play().catch(() => console.log("Waiting for user interaction event..."));
    }
}

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
