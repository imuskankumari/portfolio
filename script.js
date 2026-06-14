document.addEventListener("DOMContentLoaded", () => {
    buildAmazonTrueGrid();
    startAutomatedIntervals();
});

// GENERATES 50 CLEAN IMAGES WITHIN SQUARISH BLOCKS (NO TEXT METADATA ATTACHED)
function buildAmazonTrueGrid() {
    const gridContainer = document.getElementById("amazonGridEngine");
    let domBuffer = "";

    for (let count = 1; count <= 50; count++) {
        domBuffer += `
            <div class="amazon-product-card-node" id="card-node-${count}" onclick="openLightbox('g${count}.jpg')">
                <div class="card-image-box-frame">
                    <img src="g${count}.jpg" alt="Artwork Unit ${count}" draggable="false" onerror="this.parentNode.style.backgroundColor='#f1f5f9'">
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

let activeSlideIndex = 0;
const totalSlidesCount = 12; 
let sliderThreadTimer = null;
let globalMuteState = true; 

function startAutomatedIntervals
