document.addEventListener("DOMContentLoaded", () => {
    initSmoothScrollSpy();
    buildAmazonTrueGrid();
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

// INJECTS DYNAMIC 50 IMAGES INTO THE 3-COLUMN GRID WITHOUT ANY TEXT STRINGS
function buildAmazonTrueGrid() {
    const gridContainer = document.getElementById("amazonGridEngine");
    let domBuffer = "";

    for (let count = 1; count <= 50; count++) {
        domBuffer += `
            <div class="amazon-product-card-node" id="card-node-${count}" onclick="openLightbox('g${count}.jpg', '')">
                <div class="card-image-box-frame">
                    <img src="g${count}.jpg" alt="Artwork Unit ${count}" draggable="false" onerror="this.parentNode.style.backgroundColor='#f1f5f9'">
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
const totalSlidesCount = 12; 
let sliderThreadTimer = null;
let globalMuteState = true; 

function startAutomatedIntervals() {
    setTimeout(() => { playVideoAtCurrentIndex(); }, 300);

    sliderThreadTimer = setInterval(() => {
        activeSlideIndex++;
        if (activeSlideIndex >= totalSlidesCount) {
            activeSlideIndex = 0;
        }
        executeTrackShift();
    }, 4000); // Transitions video sliders channels exactly every 4 seconds loop
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
        if(video.currentTime > 0) video.currentTime = 0;
    });

    const currentVideo = allVideos[activeSlideIndex];
    if (currentVideo) {
        currentVideo.muted = globalMuteState;
        currentVideo.play().catch(() => console.log("Awaiting core media stream layer..."));
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
