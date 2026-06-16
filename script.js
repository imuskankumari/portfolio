let activeVisualIndex = 0;
const totalVisualsCount = 10;
let visualSliderTimer = null;

document.addEventListener("DOMContentLoaded", () => {
    buildBehanceStyleGrid();
    initInteractiveSlider();
});

// ग्रिड को हूबहू g1.jpg से g50.jpg (स्मॉल लेटर और .jpg एक्सटेंशन) में रेंडर करना बिना किसी फालतू टेक्स्ट के
function buildBehanceStyleGrid() {
    const gridContainer = document.getElementById("graphicDynamicGrid");
    if (!gridContainer) return;
    let domBuffer = "";

    for (let count = 1; count <= 50; count++) {
        domBuffer += `
            <div class="simple-product-card" id="card-node-${count}" onclick="openLightbox('g${count}.jpg')">
                <div class="original-portfolio-dark-frame">
                    <div class="grid-card-image-inner-wrapper">
                        <img src="g${count}.jpg" alt="Art G${count}" style="width:100%; height:100%; object-fit:cover;" draggable="false" onerror="this.style.display='none'">
                    </div>
                    <div class="grid-card-bottom-metadata-pane">
                        <h4 class="grid-card-title-text-heading">Graphic Design</h4>
                        <div class="grid-card-price-value-tag">₹89</div>
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
