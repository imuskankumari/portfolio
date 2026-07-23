// Strict Media Asset Configuration
const portfolioAssets = {
    // Graphic Design: g1.jpg to g50.jpg
    graphic: Array.from({length: 50}, (_, i) => ({ 
        id: `g_${i}`, 
        type: 'image', 
        src: `g${i+1}.jpg`,
        aspectClass: 'aspect-square',
        likes: 0
    })),
    // Web Design: w1.png to w10.png
    web: Array.from({length: 10}, (_, i) => ({ 
        id: `w_${i}`, 
        type: 'image', 
        src: `w${i+1}.png`,
        aspectClass: 'aspect-square',
        likes: 0
    })),
    // AI Visuals: b1.png to b10.png
    ai: Array.from({length: 10}, (_, i) => ({ 
        id: `b_${i}`, 
        type: 'image', 
        src: `b${i+1}.png`,
        aspectClass: 'aspect-square',
        likes: 0
    })),
    // AI Animation Videos: r1.mp4 to r12.mp4
    motion: Array.from({length: 12}, (_, i) => ({ 
        id: `m_${i}`, 
        type: 'video', 
        src: `r${i+1}.mp4`,
        aspectClass: 'aspect-vertical',
        likes: 0
    }))
};

const userLikedItems = new Set();
let currentCategoryArray = [];
let activeIndex = 0;
let visibleCount = 10;
let activeTabGlobal = 'graphic';
let isHeroLightboxMode = false;

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Menu Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Hero Banner Interactive Lightbox Trigger
    initHeroLightboxMagic();

    // Render Initial Gallery
    switchTab('graphic');
});

function closeMenu() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.classList.remove('active');
    }
}

/* Hero Banner Click Lightbox Trigger */
function initHeroLightboxMagic() {
    const heroWrap = document.getElementById('heroBannerWrap');
    if (!heroWrap) return;

    heroWrap.addEventListener('click', () => {
        isHeroLightboxMode = true;
        const lightbox = document.getElementById('galleryLightbox');
        const contentWrap = document.getElementById('lightboxMediaContent');
        const prevBtn = document.getElementById('lightboxPrev');
        const nextBtn = document.getElementById('lightboxNext');

        if (lightbox && contentWrap) {
            contentWrap.innerHTML = `<img src="hero.png" alt="Hero Lightbox Zoom" style="max-width:100%; max-height:80vh; object-fit:contain; border-radius:12px; box-shadow: 0 0 30px rgba(255,107,0,0.5);">`;
            
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';

            lightbox.style.display = 'flex';
        }
    });
}

/* Filter Tab Switching */
function filterGallery(category, event) {
    if (event) {
        const buttons = document.querySelectorAll('.tab-btn');
        buttons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
    }
    switchTab(category);
}

function switchTab(category) {
    activeTabGlobal = category;
    visibleCount = 10;
    currentCategoryArray = portfolioAssets[category] || [];
    renderGrid();
}

/* Render Gallery Items */
function renderGrid() {
    const targetGrid = document.getElementById('main-portfolio-gallery');
    const viewMoreBtn = document.getElementById('galleryViewMoreTrigger');
    if (!targetGrid) return;
    
    targetGrid.innerHTML = '';
    const sliceItems = currentCategoryArray.slice(0, visibleCount);

    sliceItems.forEach((item, idx) => {
        const itemNode = document.createElement('div');
        itemNode.className = 'dribbble-item-card';
        
        const isLiked = userLikedItems.has(item.id);
        const heartStateClass = isLiked ? 'like-click-node activated' : 'like-click-node';

        const mediaContent = item.type === 'video' 
            ? `<video src="${item.src}" muted loop autoplay playsinline preload="metadata"></video>` 
            : `<img src="${item.src}" loading="lazy" onerror="this.src='placeholder.png'">`;

        // Strictly author name "MK Designs"
        itemNode.innerHTML = `
            <div class="dribbble-img-frame ${item.aspectClass}" onclick="openGallerySlider(${idx})">
                ${mediaContent}
            </div>
            <div class="dribbble-meta-row">
                <div class="dribbble-user">
                    <span class="dribbble-avatar">MK</span>
                    <span class="dribbble-username">MK Designs</span>
                </div>
                <div class="dribbble-stats">
                    <span class="${heartStateClass}" onclick="executeRealLiking('${item.id}', ${idx}, event)">
                        <i class="${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart"></i> <span class="count-lbl">${item.likes}</span>
                    </span>
                </div>
            </div>
        `;
        targetGrid.appendChild(itemNode);
    });

    if (viewMoreBtn) {
        if (visibleCount >= currentCategoryArray.length) {
            viewMoreBtn.style.display = 'none';
        } else {
            viewMoreBtn.style.display = 'inline-block';
        }
    }
}

function handleViewMoreAction() {
    visibleCount += 10;
    renderGrid();
}

function executeRealLiking(assetId, index, event) {
    event.stopPropagation();
    const targetItem = currentCategoryArray[index];
    const triggerBox = event.currentTarget;
    const valueLabel = triggerBox.querySelector('.count-lbl');
    const heartElement = triggerBox.querySelector('i');

    if (userLikedItems.has(assetId)) {
        userLikedItems.delete(assetId);
        targetItem.likes = Math.max(0, targetItem.likes - 1);
        triggerBox.classList.remove('activated');
        heartElement.className = 'fa-regular fa-heart';
    } else {
        userLikedItems.add(assetId);
        targetItem.likes += 1;
        triggerBox.classList.add('activated');
        heartElement.className = 'fa-solid fa-heart';
    }
    valueLabel.textContent = targetItem.likes;
}

/* Lightbox Modal Slider */
function openGallerySlider(index) {
    isHeroLightboxMode = false;
    activeIndex = index;
    const lightbox = document.getElementById('galleryLightbox');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');

    if (lightbox) {
        if (prevBtn) prevBtn.style.display = 'block';
        if (nextBtn) nextBtn.style.display = 'block';
        renderLightboxActiveContent();
        lightbox.style.display = 'flex';
    }
}

function renderLightboxActiveContent() {
    const contentWrap = document.getElementById('lightboxMediaContent');
    const currentAsset = currentCategoryArray[activeIndex];
    if (!contentWrap || !currentAsset) return;
    
    contentWrap.innerHTML = '';
    if (currentAsset.type === 'video') {
        contentWrap.innerHTML = `<video src="${currentAsset.src}" controls autoplay style="width:100%; max-height:80vh; object-fit:contain; border-radius:12px;"></video>`;
    } else {
        contentWrap.innerHTML = `<img src="${currentAsset.src}" alt="Visual" style="max-width:100%; max-height:80vh; object-fit:contain; border-radius:12px;">`;
    }
}

function changeSlide(direction) {
    if (isHeroLightboxMode) return;
    activeIndex = (activeIndex + direction + currentCategoryArray.length) % currentCategoryArray.length;
    renderLightboxActiveContent();
}

function closeGallerySlider() {
    const lightbox = document.getElementById('galleryLightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
    }
}

function handleFormSubmit(event) {
    alert('Thank you for your message! It has been received successfully.');
}

