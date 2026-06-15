let currentSlideIndex = 0;
const maxSlidesCount = 10;
let autoSliderTimer = null;

document.addEventListener("DOMContentLoaded", () => {
    generateGraphicGrid();
    setupWideSlider();
});

// Dynamic Card Builder for Exactly 100 items with Name & Price Tag
function generateGraphicGrid() {
    const targetGrid = document.getElementById("graphicDynamicGrid");
    if (!targetGrid) return;
    let htmlBuffer = "";

    for (let index = 1; index <= 100; index++) {
        htmlBuffer += `
            <div class="simple-product-card" onclick="openLightbox('g${index}.jpg')">
                <div class="card-media-wrapper">
                    <img src="g${index}.jpg" alt="Project G${index}" draggable="false" onerror="this.parentNode.style.backgroundColor='#e2e8f0'">
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

// Wide Slider Touch and Automations
function setupWideSlider() {
    const viewport = document.getElementById("burgerSliderViewport");
    const track = document.getElementById("burgerTrack");
    const dotsContainer = document.getElementById("sliderDotsContainer");
    if (!viewport || !track) return;

    for (let i = 0; i < maxSlidesCount; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot-node");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => shiftToSlide(i));
        dotsContainer.appendChild(dot);
    }

    let startX = 0;
    let isDragging = false;

    viewport.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.clientX;
        clearInterval(autoSliderTimer);
    });

    viewport.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        const currentX = e.clientX;
        const diffX = currentX - startX;
        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                shiftToSlide(currentSlideIndex - 1);
            } else {
                shiftToSlide(currentSlideIndex + 1);
            }
            isDragging = false;
        }
    });

    window.addEventListener("mouseup", () => {
        if (isDragging) {
            isDragging = false;
            runAutoCycle();
        }
    });

    // Touch Support for Mobile
    viewport.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
        clearInterval(autoSliderTimer);
    });

    viewport.addEventListener("touchmove", (e) => {
        const diffX = e.touches[0].clientX - startX;
        if (Math.abs(diffX) > 40) {
            if (diffX > 0) {
                shiftToSlide(currentSlideIndex - 1);
            } else {
                shiftToSlide(currentSlideIndex + 1);
            }
            startX = e.touches[0].clientX;
        }
    });

    viewport.addEventListener("touchend", () => {
        runAutoCycle();
    });

    runAutoCycle();
}

function shiftToSlide(targetIndex) {
    let index = targetIndex;
    if (index < 0) index = maxSlidesCount - 1;
    if (index >= maxSlidesCount) index = 0;

    currentSlideIndex = index;
    const track = document.getElementById("burgerTrack");
    if (track) {
        track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    }

    const dots = document.querySelectorAll(".dot-node");
    dots.forEach((dot, idx) => {
        if (idx === currentSlideIndex) dot.classList.add("active");
        else dot.classList.remove("active");
    });
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
