// Lightweight Media Asset Mapping Configuration
const portfolioAssets = {
    graphic: Array.from({length: 50}, (_, i) => ({ 
        id: `g_${i}`, 
        type: 'image', 
        src: `g${i+1}.jpg`,
        aspectClass: 'aspect-square',
        likes: 0
    })),
    web: Array.from({length: 10}, (_, i) => ({ 
        id: `w_${i}`, 
        type: 'image', 
        src: `w${i+1}.png`,
        aspectClass: 'aspect-square',
        likes: 0
    })),
    ai: Array.from({length: 10}, (_, i) => ({ 
        id: `b_${i}`, 
        type: 'image', 
        src: `b${i+1}.png`,
        aspectClass: 'aspect-square',
        likes: 0
    })),
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

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Initialize Contained Skills Carousel
    initSkillsCarousel();

    // Initialize Fixed Visitor Counter
    initVisitorCounter();

    // Render Initial Gallery
    switchTab('graphic');
});

function closeMenu() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.classList.remove('active');
    }
}

/* Contained Carousel Engine */
function initSkillsCarousel() {
    const track = document.getElementById('skillsTrack');
    const prevBtn = document.getElementById('skillsPrev');
    const nextBtn = document.getElementById('skillsNext');
    if (!track || !prevBtn || !nextBtn) return;

    let currentIndex = 0;

    const updateCarousel = () => {
        const card = track.querySelector('.skill-card-box');
        if (!card) return;
        const cardWidth = card.offsetWidth + 20; // Width + gap
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    };

    nextBtn.addEventListener('click', () => {
        const totalCards = track.children.length;
        const visibleCards = window.innerWidth > 992 ? 4 : window.innerWidth > 768 ? 3 : window.innerWidth > 480 ? 2 : 1;
        if (currentIndex < totalCards - visibleCards) {
            currentIndex++;
            updateCarousel();
        } else {
            currentIndex = 0; // Loop back
            updateCarousel();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    window.addEventListener('resize', updateCarousel);
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
    activeIndex = index;
    const lightbox = document.getElementById('galleryLightbox');
    if (lightbox) {
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

/* VISITOR COUNTER BUG FIX: LocalStorage Check Prevents Refresh Incredmentation */
function initVisitorCounter() {
    const counterElement = document.getElementById('uniqueVisitorCount');
    if (!counterElement) return;

    const STORAGE_KEY = 'mk_visited_unique_session';
    const BASE_COUNT = 151;

    let totalVisits = parseInt(localStorage.getItem('mk_total_visitor_num')) || BASE_COUNT;

    // Check if this specific user has visited before
    if (!localStorage.getItem(STORAGE_KEY)) {
        totalVisits += 1;
        localStorage.setItem(STORAGE_KEY, 'true'); // Flag session as counted
        localStorage.setItem('mk_total_visitor_num', totalVisits);
    }

    counterElement.textContent = `${totalVisits}+`;
}
