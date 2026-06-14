document.addEventListener("DOMContentLoaded", () => {
    buildBehanceStyleGrid();
    startAutomatedIntervals();
});

function buildBehanceStyleGrid() {
    const gridContainer = document.getElementById("amazonGridEngine");
    let domBuffer = "";

    // Dynamic generation of 50 portfolio gallery items underneath
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
const totalPhotosCount = 10;

function startAutomatedIntervals() {
    // Top Photo Carousel Auto Slide (4:5 Ratio Box) Loop Engine Every 4 seconds
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
}
