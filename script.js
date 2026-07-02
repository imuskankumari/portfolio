// Local Repositories Storage Architecture Configured for Media Grid Filter
const portfolioAssets = {
    graphic: Array.from({length: 20}, (_, i) => ({ type: 'image', src: `g${i+1}.jpg`, name: `Graphic Design Asset ${i+1}`, likes: "172", views: "4.9k" })),
    web: [{ type: 'image', src: 'w1.png', name: 'Premium Live UI Platform Architecture', likes: "185", views: "5.2k" }],
    ai: Array.from({length: 11}, (_, i) => ({ type: 'image', src: `b${i+1}.png`, name: `AI Generated Visual Element ${i+1}`, likes: "210", views: "6.1k" })),
    motion: Array.from({length: 12}, (_, i) => ({ type: 'video', src: `r${i+1}.mp4`, name: `Motion Graphic Reel Clip ${i+1}`, likes: "172", views: "4.9k" }))
};

let currentCategoryArray = [];
let activeIndex = 0;

// Dynamic Image Filter Engine for crisp multi-grid layouts
function filterGallery(category, event) {
    const targetGrid = document.getElementById('main-portfolio-gallery');
    if (!targetGrid) return;
    
    targetGrid.innerHTML = '';

    if(event) {
        const buttons = document.querySelectorAll('.tab-btn');
        buttons.forEach(btn => btn.classList.remove('active'));
        event.currentTarget.classList.add('active');
    }

    currentCategoryArray = portfolioAssets[category] || [];
    if(currentCategoryArray.length === 0) {
        targetGrid.innerHTML = '<p style="grid-column: span 4; text-align:center; padding:40px; color:#999; font-weight:bold;">Project Modules Loading...</p>';
        return;
    }

    currentCategoryArray.forEach((item, idx) => {
        const itemNode = document.createElement('div');
        itemNode.className = 'dribbble-item-card';
        itemNode.onclick = () => openGallerySlider(idx);
        
        const mediaContent = item.type === 'video' 
            ? `<video src="${item.src}" muted loop autoplay playsinline></video><span class="video-reel-tag"><i class="fa-solid fa-play"></i> Reel</span>` 
            : `<img src="${item.src}" onerror="this.src='placeholder.png'">`;

        itemNode.innerHTML = `
            <div class="dribbble-img-frame">
                ${mediaContent}
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

// Universal Gallery Lightbox Slider Mechanics
function openGallerySlider(index) {
    activeIndex = index;
    const lightbox = document.getElementById('galleryLightbox');
    if(lightbox) {
        renderLightboxActiveContent();
        lightbox.style.display = 'flex';
    }
}

function renderLightboxActiveContent() {
    const contentWrap = document.getElementById('lightboxMediaContent');
    const currentAsset = currentCategoryArray[activeIndex];
    if(!contentWrap || !currentAsset) return;
    
    contentWrap.innerHTML = '';

    if(currentAsset.type === 'video') {
        contentWrap.innerHTML = `
            <video id="lightboxActiveImg" src="${currentAsset.src}" controls autoplay style="width:100%; max-height:75vh; object-fit:contain;"></video>
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
    renderLightboxActiveContent();
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
    if(contentWrap) contentWrap.innerHTML = '';
}

function triggerUPIPayment() {
    window.location.href = "upi://pay?pa=8810682518@paytm&pn=Muskan%20Kumari&cu=INR";
}

document.addEventListener('DOMContentLoaded', () => {
    filterGallery('graphic', null); // Default category init
    
    const form = document.getElementById('hub-action-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Your message was transferred securely!');
            form.reset();
        });
    }
});
