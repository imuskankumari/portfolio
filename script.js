document.addEventListener("DOMContentLoaded", () => {
    buildBehanceStyleGrid();
    startAutomatedIntervals();
});

function buildBehanceStyleGrid() {
    const gridContainer = document.getElementById("amazonGridEngine");
    if (!gridContainer) return;
    let domBuffer = "";

    // Automatically structures 50 slots dynamically maps g1.jpg to g50.jpg
    for (let count = 1; count <= 50; count++) {
        domBuffer += `
            <div class="amazon-product-card-node" id="card-node-${count}" onclick="openLightbox('g${count}.jpg')">
                <div class="card-image-box-frame">
                    <img src="g${count}.jpg" alt="" draggable="false" onerror="this.parentNode.style.backgroundColor='#f8f9fa'">
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
    // Automated Engine for wide AI Project Image Loop Slider (Every 4 seconds auto changes)
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
