document.addEventListener("DOMContentLoaded", () => {
    buildAmazonTrueGrid();
    startAutomatedIntervals();
});

function buildAmazonTrueGrid() {
    const gridContainer = document.getElementById("amazonGridEngine");
    let domBuffer = "";

    for (let count = 1; count <= 50; count++) {
        domBuffer += `
            <div class="amazon-product-card-node" id="card-node-${count}" onclick="openLightbox('g${count}.jpg')">
                <div class="card-image-box-frame">
                    <img src="g${count}.jpg" alt="Item ${count}" draggable="false" onerror="this.parentNode.style.backgroundColor='#f1f5f9'">
                </div>
            </div>
        `;
    }
    gridContainer.innerHTML = domBuffer;
}

function openLightbox(imgSrc) {
    const modal = document.getElementById("imageLightboxModal");
    const modalImg = document.getElementById("lightboxMainImage");

    modal.style.display = "flex";
    modalImg.src = imgSrc;
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
        if(video.currentTime > 0) video.currentTime = 0;
    });

    const currentVideo = allVideos[activeSlideIndex];
    if (currentVideo) {
        currentVideo.muted = globalMuteState;
        currentVideo.play().catch(() => console.log("Media initialized..."));
    }
}

function toggleGlobalAudio() {
    globalMuteState = !globalMuteState;
    const allVideos = document.querySelectorAll(".portfolio-video-node");
    
    allVideos.forEach(video => {
        video.muted = globalMuteState;
    });
}
