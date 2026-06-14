document.addEventListener("DOMContentLoaded", () => {
    buildBehanceStyleGrid();
    startAutomatedIntervals();
});

function buildBehanceStyleGrid() {
    const gridContainer = document.getElementById("amazonGridEngine");
    let domBuffer = "";

    // Dynamic generation of 50 portfolio slots
    for (let count = 1; count <= 50; count++) {
        domBuffer += `
            <div class="amazon-product-card-node" id="card-node-${count}" onclick="openLightbox('g${count}.jpg')">
                <div class="card-image-box-frame">
                    <img src="g${count}.jpg" alt="" draggable="false" onerror="this.parentNode.style.backgroundColor='#1a2333'">
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

let activePhotoIndex = 0;
let activeVideoIndex = 0;
const totalPhotosCount = 10;
const totalVideosCount = 10;

function startAutomatedIntervals() {
    // 1. Top Panoramic Burger Photo Slider Auto Play (Every 4 seconds)
    setInterval(() => {
        activePhotoIndex++;
        if (activePhotoIndex >= totalPhotosCount) {
            activePhotoIndex = 0;
        }
        const photoTrack = document.getElementById("burgerPhotoTrack");
        if(photoTrack) {
            photoTrack.style.transform = `translateX(-${activePhotoIndex * 100}%)`;
        }
    }, 4000);

    // 2. Motion Graphics Video Slider Auto Play - Swipes Left to Right perfectly!
    setInterval(() => {
        activeVideoIndex++;
        if (activeVideoIndex >= totalVideosCount) {
            activeVideoIndex = 0;
        }
        const videoTrack = document.getElementById("videoTrackEngine");
        if(videoTrack) {
            videoTrack.style.transform = `translateX(-${activeVideoIndex * 100}%)`;
        }
    }, 4500);
}
