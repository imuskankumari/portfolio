// Data Assets matching file list perfectly
const portfolioAssets = {
    graphic: Array.from({length: 10}, (_, i) => ({ type: 'image', src: `g${i+1}.jpg`, likes: 120 })),
    web: Array.from({length: 10}, (_, i) => ({ type: 'image', src: `w${i+1}.png`, likes: 95 })),
    ai: Array.from({length: 11}, (_, i) => ({ type: 'image', src: `b${i+1}.png`, likes: 180 })),
    motion: Array.from({length: 10}, (_, i) => ({ type: 'video', src: `r${i+1}.mp4`, likes: 210 }))
};

let currentCategoryArray = [];
let activeIndex = 0;

function filterGallery(category, event) {
    const targetGrid = document.getElementById('main-portfolio-gallery');
    if (!targetGrid) return;
    targetGrid.innerHTML = '';

    if(event) {
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
    }

    currentCategoryArray = portfolioAssets[category];
    currentCategoryArray.forEach((item, idx) => {
        const itemNode = document.createElement('div');
        itemNode.className = 'dribbble-item-card';
        itemNode.onclick = () => openGallerySlider(idx);
        
        const media = item.type === 'video' 
            ? `<video src="${item.src}" muted loop autoplay playsinline></video>` 
            : `<img src="${item.src}" onerror="this.src='placeholder.png'">`;

        itemNode.innerHTML = `
            <div class="dribbble-img-frame">${media}</div>
        `;
        targetGrid.appendChild(itemNode);
    });
}

// Lightbox Engines
function openGallerySlider(index) {
    activeIndex = index;
    const lightbox = document.getElementById('galleryLightbox');
    renderLightboxContent();
    lightbox.style.display = 'flex';
}

function renderLightboxContent() {
    const wrap = document.getElementById('lightboxMediaContent');
    const asset = currentCategoryArray[activeIndex];
    wrap.innerHTML = asset.type === 'video' 
        ? `<video src="${asset.src}" controls autoplay></video>` 
        : `<img src="${asset.src}">`;
}

function closeGallerySlider() {
    document.getElementById('galleryLightbox').style.display = 'none';
}

// Mobile Responsive Trigger
document.getElementById('menuToggleBtn').onclick = function() {
    document.getElementById('mainNavigation').classList.toggle('mobile-active');
};

function closeMobileMenu() {
    document.getElementById('mainNavigation').classList.remove('mobile-active');
}

window.onload = () => filterGallery('graphic', null);

