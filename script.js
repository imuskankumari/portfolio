// SINGLE-PAGE PORTFOLIO SYSTEM CONTROL MATRIX
document.addEventListener("DOMContentLoaded", () => {
    buildAmazonTrueGrid();
    buildCombinedVideoSlider();
    startAutomatedIntervals();
    armSystemSecurity();
});

// 1. HARD TAB CONTEXT SWITCHING SYSTEM (True Separation Grid)
function switchTab(event, targetSectionId) {
    if (event) event.preventDefault();
    
    const allLinks = document.querySelectorAll(".nav-link");
    const allSections = document.querySelectorAll(".page-section");

    // Clear active states
    allLinks.forEach(link => link.classList.remove("active"));
    allSections.forEach(section => section.classList.remove("active-section"));

    // Sync active targets
    const selectedLink = document.querySelector(`.nav-link[href="#${targetSectionId}"]`);
    if (selectedLink) selectedLink.classList.add("active");

    const selectedSection = document.getElementById(targetSectionId);
    if (selectedSection) {
        selectedSection.classList.add("active-section");
    }

    // Instantly force layout coordinates straight to zero top window position
    window.scrollTo({ top: 0, behavior: "instant" });
}

// 2. GENERATE 100 AMAZON INDUSTRIAL GRID CARDS (g1.jpg to g100.jpg)
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

function closeLightbox() {
    document.getElementById("imageLightboxModal").style.display = "none";
}

// 3. COMBINED VIDEO LOOPER SYSTEM (b1-b11 + v1-v8 = 19 Slides Total)
let activeSlideIndex = 0;
const totalSlidesCount = 19;
let sliderThreadTimer = null;
let globalMuteState = true; // Audio is muted at layout initialization safely

function buildCombinedVideoSlider() {
    const track = document.getElementById("masterVideoTrack");
    let streamBuffer = "";

    // Stream Group A: Injects b1.mp4 to b11.mp4
    for (let b = 1; b <= 11; b++) {
        streamBuffer += `
            <div class="stream-slide">
                <video class="portfolio-video-node" src="b${b}.mp4" loop playsinline muted></video>
            </div>
        `;
    }

    // Stream Group B: Injects v1.mp4 to v8.mp4
    for (let v = 1; v <= 8; v++) {
        streamBuffer += `
            <div class="stream-slide">
                <video class="portfolio-video-node" src="v${v}.mp4" loop playsinline muted></video>
            </div>
        `;
    }

    track.innerHTML = streamBuffer;
    
    // Play initial video frame instantly
    setTimeout(() => { playVideoAtCurrentIndex(); }, 200);
}

function startAutomatedIntervals() {
    sliderThreadTimer = setInterval(() => {
        activeSlideIndex++;
        if (activeSlideIndex >= totalSlidesCount) {
            activeSlideIndex = 0;
        }
        executeTrackShift();
    }, 4000); // Transitions automatically every 4 seconds
}

function executeTrackShift() {
    const track = document.getElementById("masterVideoTrack");
    track.style.transform = `translateX(-${activeSlideIndex * 100}%)`;
    playVideoAtCurrentIndex();
}

function playVideoAtCurrentIndex() {
    const allVideos = document.querySelectorAll(".portfolio-video-node");
    
    // Pause all video instances to conserve memory buffers
    allVideos.forEach(video => {
        video.pause();
        video.currentTime = 0;
    });

    // Fire current view element index channel
    const currentVideo = allVideos[activeSlideIndex];
    if (currentVideo) {
        currentVideo.muted = globalMuteState;
        currentVideo.play().catch(err => console.log("Auto-play trigger waiting user action link..."));
    }
}

// GLOBAL AUDIO VOLUME OVERLAY MANAGER
function toggleGlobalAudio() {
    globalMuteState = !globalMuteState;
    const allVideos = document.querySelectorAll(".portfolio-video-node");
    const soundIcon = document.getElementById("soundIcon");

    allVideos.forEach(video => {
        video.muted = globalMuteState;
    });

    if (globalMuteState) {
        soundIcon.className = "fas fa-volume-mute";
        alert("Audio Muted.");
    } else {
        soundIcon.className = "fas fa-volume-up";
        alert("Audio Unmuted. Media channels open.");
    }
}

// 4. NAVBAR REAL-TIME LIVE SEARCH FILTER PROTOCOL
function searchAndFocusGallery() {
    const inputQuery = document.getElementById("gallerySearch").value.toLowerCase();
    const cards = document.querySelectorAll(".amazon-product-card-node");

    // If search active, instantly switch tab grid viewport context to Services view page area!
    if(inputQuery !== "") {
        switchTab(null, 'services');
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

// 5. ENCRYPTED SYSTEM HOTKEY SHIELDS
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
