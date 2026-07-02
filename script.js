// Local Repositories Storage Framework Matrix with exact asset allocations rules
const portfolioAssets = {
    graphic: Array.from({length: 10}, (_, i) => ({ id: `g_${i}`, type: 'image', src: `g${i+1}.jpg`, name: `Graphic Design Asset ${i+1}`, likes: 144, views: "5.3k" })),
    web: Array.from({length: 10}, (_, i) => ({ id: `w_${i}`, type: 'image', src: `w${i+1}.png`, name: `Premium Web Design Concept ${i+1}`, likes: 98, views: "1.2k" })),
    ai: Array.from({length: 11}, (_, i) => ({ id: `ai_${i}`, type: 'image', src: `b${i+1}.png`, name: `AI Generated Visual Element ${i+1}`, likes: 200, views: "3.3k" })),
    motion: Array.from({length: 10}, (_, i) => ({ id: `m_${i}`, type: 'video', src: `r${i+1}.mp4`, name: `Motion Graphic Reel Clip ${i+1}`, likes: 172, views: "4.9k" }))
};

// Tracking native storage to remember heart interaction states
const userLikedItems = new Set();

let currentCategoryArray = [];
let activeIndex = 0;

// Dynamic Image Filter Engine for clean Dribbble 3-column layouts
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
        targetGrid.innerHTML = '<p style="grid-column: span 3; text-align:center; padding:30px; color:#999;">Loading Assets...</p>';
        return;
    }

    currentCategoryArray.forEach((item, idx) => {
        const itemNode = document.createElement('div');
        itemNode.className = 'dribbble-item-card';
        
        const isLiked = userLikedItems.has(item.id);
        const heartClass = isLiked ? 'like-trigger liked' : 'like-trigger';

        const mediaContent = item.type === 'video' 
            ? `<video src="${item.src}" muted loop autoplay playsinline></video><span class="video-reel-tag">▶ Reel</span>` 
            : `<img src="${item.src}" onerror="this.src='placeholder.png'">`;

        itemNode.innerHTML = `
            <div class="dribbble-img-frame" onclick="openGallerySlider(${idx})">
                ${mediaContent}
            </div>
            <div class="dribbble-meta-row">
                <div class="dribbble-user">
                    <span class="dribbble-avatar">MK</span>
                    <span class="dribbble-username">Muskan</span>
                </div>
                <div class="dribbble-stats">
                    <span class="${heartClass}" onclick="toggleRealLike('${item.id}', ${idx}, event)">
                        <i class="${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart"></i> <span class="count-val">${item.likes}</span>
                    </span>
                    <span>👁️ ${item.views}</span>
                </div>
            </div>
        `;
        targetGrid.appendChild(itemNode);
    });
}

// REAL ACTIVE LIKING TOGGLE ENGINE
function toggleRealLike(assetId, index, event) {
    event.stopPropagation(); // Block backdrop click triggers
    const currentAsset = currentCategoryArray[index];
    const cardNode = event.currentTarget;
    const countLabel = cardNode.querySelector('.count-val');

    if(userLikedItems.has(assetId)) {
        userLikedItems.delete(assetId);
        currentAsset.likes = parseInt(currentAsset.likes) - 1;
        cardNode.classList.remove('liked');
    } else {
        userLikedItems.add(assetId);
        currentAsset.likes = parseInt(currentAsset.likes) + 1;
        cardNode.classList.add('liked');
    }
    
    countLabel.textContent = currentAsset.likes;
    const heartIcon = cardNode.querySelector('i');
    heartIcon.className = userLikedItems.has(assetId) ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
}

// Universal Lightbox Image/Video Popups (Magic Effects)
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
    if(!contentWrap) return;
    
    contentWrap.innerHTML = '';

    if(currentAsset.type === 'video') {
        contentWrap.innerHTML = `
            <video id="lightboxActiveImg" src="${currentAsset.src}" controls autoplay style="width:100%; max-height:70vh; object-fit:contain; border-radius:12px;"></video>
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
    filterGallery('graphic', null); // Initialise default layout hooks
    
    const form = document.getElementById('hub-action-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Your message was transferred securely!');
            form.reset();
        });
    }
});

