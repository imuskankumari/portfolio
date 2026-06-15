document.addEventListener("DOMContentLoaded", () => {
    buildBehanceStyleGrid();
    startAutomatedIntervals();
});

function buildBehanceStyleGrid() {
    const gridContainer = document.getElementById("graphicDynamicGrid");
    if (!gridContainer) return;
    let domBuffer = "";

    // Safely injects exactly 100 items from g1.jpg to g100.jpg with name and requested Price TAG
    for (let count = 1; count <= 100; count++) {
        domBuffer += `
            <div class="amazon-product-card-node" id="card-node-${count}" onclick="openLightbox('g${count}.jpg')">
                <div class="card-image-box-frame">
                    <img src="g${count}.jpg" alt="Graphic Design Project G${count}" draggable="false" onerror="this.parentNode.style.backgroundColor='#f1f5f9'">
                </div>
                <div class="card-details-area">
                    <div class="product-title-string">Project G${count}</div>
                    <div class="product-price-string">₹89</div>
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
    // Automated Engine for 4:5 Portrait AI Carousel Viewport Track (Moves seamlessly every 4 seconds)
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
