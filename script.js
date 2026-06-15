let currentSlideIndex = 0;
const maxSlidesCount = 10;
let autoSliderTimer = null;

document.addEventListener("DOMContentLoaded", () => {
    generateGraphicGrid();
    setupWideSlider();
});

// Dynamic Card Grid Builder Core Engine (G1 to G100)
function generateGraphicGrid() {
    const targetGrid = document.getElementById("graphicDynamicGrid");
    if (!targetGrid) return;
    let htmlBuffer = "";

    for (let index = 1; index <= 100; index++) {
        htmlBuffer += `
            <div class="simple-product-card" onclick="openLightbox('g${index}.jpg')">
                <div class="card-media-wrapper">
                    <img src="g${index}.jpg" alt="Artwork Unit G${index}" draggable="false" onerror="this.parentNode.style.backgroundColor='#e2e8f0'">
                </div>
                <div class="card-info-pane">
                    <div class="card-title-text">Project G${index}</div>
                    <div class="card-price-tag">₹89</div>
                </div>
            </div>
        `;
    }
    targetGrid.innerHTML = htmlBuffer;
}

function setupWideSlider() {
    runAutoCycle();
}

function shiftToSlide(targetIndex) {
    let index = targetIndex;
    if (index < 0) index = maxSlidesCount - 1;
    if (index >= maxSlidesCount) index = 0;

    currentSlideIndex = index;
    const track = document.getElementById("burgerPhotoTrack");
    if (track) {
        track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    }
}

function runAutoCycle() {
    clearInterval(autoSliderTimer);
    autoSliderTimer = setInterval(() => {
        shiftToSlide(currentSlideIndex + 1);
    }, 4000);
}

function openLightbox(source) {
    const modal = document.getElementById("imageLightboxModal");
    const targetImg = document.getElementById("lightboxMainImage");
    if (modal && targetImg) {
        modal.style.display = "flex";
        targetImg.src = source;
    }
}

function closeLightbox() {
    const modal = document.getElementById("imageLightboxModal");
    if (modal) modal.style.display = "none";
}
