document.addEventListener("DOMContentLoaded", () => {
    buildBehanceStyleGrid();
    startAutomatedIntervals();
});

function buildBehanceStyleGrid() {
    const gridContainer = document.getElementById("graphicDynamicGrid");
    if (!gridContainer) return;
    let domBuffer = "";

    // Automatically structures 100 slots dynamically maps g1.jpg to g100.jpg with pricing
    for (let count = 1; count <= 100; count++) {
        domBuffer += `
            <div class="simple-product-card" id="card-node-${count}" onclick="openLightbox('g${count}.jpg')">
                <div class="card-media-wrapper">
                    <img src="g${count}.jpg" alt="Art Unit G${count}" draggable="false" onerror="this.parentNode.style.backgroundColor='#f1f5f9'">
                </div>
                <div class="card-info-pane">
                    <div class="card-title-text">Project G${count}</div>
                    <div class="card-price-tag">₹89</div>
                </div>
            </div>
        `;
    }
    gridContainer.innerHTML = domBuffer;
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

let activePhotoIndex = 0;
const totalPhotosCount = 10;

function startAutomatedIntervals() {
    // Automated Engine for wide AI generated visuals (Carousel, b1-b10)
    setInterval(() => {
        activePhotoIndex++;
        if (activePhotoIndex >= totalPhotosCount) {
            activePhotoIndex = 0;
        }
        const photoTrack = document.getElementById("burgerPhotoTrack");
        if (photoTrack) {
            photoTrack.style.transform = `translateX(-${activePhotoIndex * 100}%)`;
        }
    }, 4000);
}
