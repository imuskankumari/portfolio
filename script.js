// Dribbble System Data Mapping Modules
const portfolioAssets = {
    graphic: Array.from({length: 20}, (_, i) => ({ type: 'image', src: `g${i+1}.jpg`, name: `Graphic Design Project ${i+1}`, likes: "154", views: "3.6k" })),
    web: [{ type: 'image', src: 'w1.png', name: 'Premium Live UI Platform Architecture', likes: "98", views: "1.2k" }],
    ai: Array.from({length: 11}, (_, i) => ({ type: 'image', src: `b${i+1}.png`, name: `AI Digital Artwork Visual ${i+1}`, likes: "210", views: "5.4k" })),
    motion: Array.from({length: 12}, (_, i) => ({ type: 'video', src: `r${i+1}.mp4`, name: `Motion Graphics Reel ${i+1}`, likes: "320", views: "8.9k" }))
};

let currentCategoryArray = [];
let activeIndex = 0;

// Dynamic Image/Video Filter Engine for Dribbble 3-Column Grid
function filterGallery(category, event) {
    const targetGrid = document.getElementById('main-portfolio-gallery');
    if (!targetGrid) return;
    
    targetGrid.innerHTML = '';

    if(event) {
        const buttons = document.querySelectorAll('.tab-btn');
        buttons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
    }

    currentCategoryArray = portfolioAssets[category];
    if(currentCategoryArray.length === 0) {
        targetGrid.innerHTML = '<p style="grid-column: span 3; text-align:center; padding:30px; color:#999;">Web Layout Modules Loading...</p>';
        return;
    }

    currentCategoryArray.forEach((item, idx) => {
        const itemNode = document.createElement('div');
        itemNode.className = 'dribbble-item-card';
        itemNode.onclick = () => openGallerySlider(idx);
        
        // Conditional indicator rules for horizontal video thumbnails
        const mediaTag = item.type === 'video' ? `<video src="${item.src}" muted></video><span class="video-reel-indicator">▶ Reel</span>` : `<img src="${item.src}" onerror="this.src='placeholder.png'">`;

        itemNode.innerHTML = `
            <div class="dribbble-img-frame">
                ${mediaTag}
            </div>
            <div class="dribbble-meta-row">
                <div class="dribbble-user">
                    <span class="dribbble-avatar">MK</span>
                    <span class="dribbble-username">Muskan</span>
                </div>
                <div class="dribbble-stats">
                    <span>❤️ ${item.likes}</span>
                    <span>👁️ ${item.views}</span>
                </div>
            </div>
        `;
        targetGrid.appendChild(itemNode);
    });
}

// Universal Image & Video Lightbox Slider Mechanics (Click to Slide Sequence)
function openGallerySlider(index) {
    activeIndex = index;
    const lightbox = document.getElementById('galleryLightbox');
    const contentWrap = document.getElementById('lightboxMediaContent');

    if(lightbox && contentWrap) {
        renderLightboxActiveTrack();
        lightbox.style.display = 'flex';
    }
}

function renderLightboxActiveTrack() {
    const contentWrap = document.getElementById('lightboxMediaContent');
    const currentAsset = currentCategoryArray[activeIndex];
    
    contentWrap.innerHTML = '';

    if(currentAsset.type === 'video') {
        contentWrap.innerHTML = `
            <video id="lightboxActiveImg" src="${currentAsset.src}" controls autoplay style="width:100%; max-height:70vh; object-fit:contain;"></video>
            <p class="lightbox-caption">${currentAsset.name}</p>
        `;
    } else {
        contentWrap.innerHTML = `
            <img id="lightboxActiveImg" src="${currentAsset.src}" alt="${currentAsset.name}">
            <p class="lightbox-caption">${currentAsset.name}</p>
        `;
    }
}

function changeSlide(direction) {
    activeIndex += direction;
    if (activeIndex >= currentCategoryArray.length) activeIndex = 0;
    if (activeIndex < 0) activeIndex = currentCategoryArray.length - 1;
    renderLightboxActiveTrack();
}

document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('galleryLightbox');
    if (lightbox && lightbox.style.display === 'flex') {
        if (e.key === 'ArrowRight') changeSlide(1);
        if (e.key === 'ArrowLeft') changeSlide(-1);
        if (e.key === 'Escape') closeGallerySlider();
    }
});

function closeGallerySlider() {
    const lightbox = document.getElementById('galleryLightbox');
    if(lightbox) lightbox.style.display = 'none';
    const contentWrap = document.getElementById('lightboxMediaContent');
    if(contentWrap) contentWrap.innerHTML = ''; // Safely teardown streams
}

function triggerUPIPayment() {
    window.location.href = "upi://pay?pa=8810682518@paytm&pn=Muskan%20Kumari&cu=INR";
}

document.addEventListener('DOMContentLoaded', () => {
    filterGallery('graphic', null); // Default Tab Hook Initialisation
    
    const form = document.getElementById('hub-action-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Your inquiry was processed securely! Thank you.');
            form.reset();
        });
    }
});

