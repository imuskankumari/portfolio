let activeVisualIndex = 0;
const totalVisualsCount = 10;
let visualSliderTimer = null;

document.addEventListener("DOMContentLoaded", () => {
    buildBehanceStyleGrid();
    initInteractiveSlider();
});

// 14347_3.jpg वाइट फ़ूड कार्ड डिज़ाइन के अनुसार 50 ग्राफिक डिज़ाइन कार्ड्स का डायनामिक रेंडरिंग
function buildBehanceStyleGrid() {
    const gridContainer = document.getElementById("graphicDynamicGrid");
    if (!gridContainer) return;
    let domBuffer = "";

    for (let count = 1; count <= 50; count++) {
        domBuffer += `
            <div class="simple-product-card" id="card-node-${count}" onclick="openLightbox('g${count}.png')">
                <div class="food-white-card-style">
                    <div class="carousel-image-frame-inner">
                        <img src="g${count}.png" alt="Art G${count}" style="width:100%; height:100%; object-fit:cover;" draggable="false" onerror="this.style.display='none'">
                    </div>
                    <div class="slider-card-bottom-metadata">
                        <span class="food-category-pill-span">🥦 Graphic Design</span>
                        <h4 class="food-item-title-heading">Graphic Design</h4>
                        <div class="food-price-action-row">
                            <span class="food-card-price-value">₹89</span>
                            <div class="food-card-plus-btn-node"><i class="fas fa-plus"></i></div>
                        </div>
                    </div>
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
