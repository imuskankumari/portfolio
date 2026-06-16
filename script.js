let activeVisualIndex = 0;
const totalVisualsCount = 10;
let visualSliderTimer = null;

document.addEventListener("DOMContentLoaded", () => {
    buildBehanceStyleGrid();
    initInteractiveSlider();
});

// structures 50 slots dynamically maps g1.png to g50.png (all small letters) with pure white border
function buildBehanceStyleGrid() {
    const gridContainer = document.getElementById("graphicDynamicGrid");
    if (!gridContainer) return;
    let domBuffer = "";

    for (let count = 1; count <= 50; count++) {
        domBuffer += `
            <div class="simple-product-card" id="card-node-${count}" onclick="openLightbox('g${count}.png')">
                <div class="card-media-wrapper">
                    <img src="g${count}.png" alt="Art G${count}" draggable="false" onerror="this.parentNode.style.backgroundColor='transparent'">
                </div>
                <div class="card-info-pane">
                    <div class="card-title-text">Project g${count}</div>
                    <div class="card-price-tag">₹89</div>
                </div>
            </div>
        `;
    }
    gridContainer.innerHTML = domBuffer;
}

function initInteractiveSlider() {
    runSliderAutoCycle();
}

function renderSliderTransform() {
    const track = document.getElementById("burgerPhotoTrack");
    if (track) {
        track.style.transform = `translateX(-${activeVisualIndex * 100}%)`;
    }
}

function shiftSliderLeft() {
    clearInterval(visualSliderTimer);
    activeVisualIndex--;
    if (activeVisualIndex < 0) {
        activeVisualIndex = totalVisualsCount - 1;
    }
    renderSliderTransform();
    runSliderAutoCycle();
}

function shiftSliderRight() {
    clearInterval(visualSliderTimer);
    activeVisualIndex++;
    if (activeVisualIndex >= totalVisualsCount) {
        activeVisualIndex = 0;
    }
    renderSliderTransform();
    runSliderAutoCycle();
}

function runSliderAutoCycle() {
    visualSliderTimer = setInterval(() => {
        activeVisualIndex++;
        if (activeVisualIndex >= totalVisualsCount) {
            activeVisualIndex = 0;
        }
        renderSliderTransform();
    }, 4000); 
}

function openLightbox(imgSrc) {
    const modal = document.getElementById("imageLightboxModal");
    const modalImg = document.getElementById("lightboxMainImage");

    if (modal && modalImg) {
        modal.style.display = "flex";
        modalImg.src = imgSrc;
    }
}

function closeLightbox() {
    const modal = document.getElementById("imageLightboxModal");
    if (modal) {
        modal.style.display = "none";
    }
}
