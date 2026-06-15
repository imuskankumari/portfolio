document.addEventListener("DOMContentLoaded", () => {
    buildBehanceStyleGrid();
    startAutomatedIntervals();
});

function buildBehanceStyleGrid() {
    const gridContainer = document.getElementById("amazonGridEngine");
    if (!gridContainer) return;
    let domBuffer = "";

    // Strictly builds 50 items using small letters extensions 'g1.jpg' to 'g50.jpg'
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
    // Large Wide AI Project Photo Slider Loop Engine (Auto transitions every 4 seconds)
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
