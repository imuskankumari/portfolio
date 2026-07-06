const portfolioAssets = {
    graphic: Array.from({length: 50}, (_, i) => ({ id: `g_${i}`, type: 'image', src: `g${i+1}.jpg`, name: `Graphic Design Asset ${i+1}`, likes: 144, views: "3.6k" })),
    web: Array.from({length: 10}, (_, i) => ({ id: `w_${i}`, type: 'image', src: `w${i+1}.png`, name: `Premium Web Design Concept ${i+1}`, likes: 98, views: "1.2k" })),
    ai: Array.from({length: 11}, (_, i) => ({ id: `ai_${i}`, type: 'image', src: `b${i+1}.png`, name: `AI Generated Visual Element ${i+1}`, likes: 200, views: "3.3k" })),
    motion: Array.from({length: 10}, (_, i) => ({ id: `m_${i}`, type: 'video', src: `r${i+1}.mp4`, name: `Motion Graphic Reel Clip ${i+1}`, likes: 172, views: "4.9k" }))
};

const userLikedItems = new Set();
let currentCategoryArray = [];
let activeIndex = 0;
let visibleCount = 6;
let activeTabGlobal = 'graphic';

document.addEventListener('DOMContentLoaded', () => {
    const menuToggleBtn = document.getElementById('menuToggleBtn');
    const mainNavigation = document.getElementById('mainNavigation');

    if(menuToggleBtn && mainNavigation) {
        menuToggleBtn.addEventListener('click', () => {
            menuToggleBtn.classList.toggle('open');
            mainNavigation.classList.toggle('mobile-active');
        });
    }

    switchTab('graphic');
});

function closeMobileMenu() {
    const menuToggleBtn = document.getElementById('menuToggleBtn');
    const mainNavigation = document.getElementById('mainNavigation');
    if(menuToggleBtn && mainNavigation) {
        menuToggleBtn.classList.remove('open');
        mainNavigation.classList.remove('mobile-active');
    }
}

function filterGallery(category, event) {
    if(event) {
        const buttons = document.querySelectorAll('.tab-btn');
        buttons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
    }
    switchTab(category);
}

function switchTab(category) {
    activeTabGlobal = category;
    visibleCount = 6; 
    currentCategoryArray = portfolioAssets[category];
    renderGrid();
}

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
                    <span class="${heartStateClass}" onclick="executeRealLiking('${item.id}', ${idx}, event)">
                        <i class="${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart"></i> <span class="count-lbl">${item.likes}</span>
                    </span>
                    <span>👁️ ${item.views}</span>
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
    visibleCount += 6; 
    renderGrid();
}

function executeRealLiking(assetId, index, event) {
    event.stopPropagation();
    const targetItem = currentCategoryArray[index];
    const triggerBox = event.currentTarget;
    const valueLabel = triggerBox.querySelector('.count-lbl');
    const heartElement = triggerBox.querySelector('i');

    if(userLikedItems.has(assetId)) {
        userLikedItems.delete(assetId);
        targetItem.likes = parseInt(targetItem.likes) - 1;
        triggerBox.classList.remove('activated');
        heartElement.className = 'fa-regular fa-heart';
    } else {
        userLikedItems.add(assetId);
        targetItem.likes = parseInt(targetItem.likes) + 1;
        triggerBox.classList.add('activated');
        heartElement.className = 'fa-solid fa-heart';
    }
    valueLabel.textContent = targetItem.likes;
}

function openGallerySlider(index) {
    activeIndex = index;
    const lightbox = document.getElementById('galleryLightbox');
    if(lightbox) {
        renderLightboxActiveContent();
        lightbox.style.display = 'flex';
        setTimeout(() => {
            lightbox.classList.add('active-magic-box');
        }, 10);
    }
}

function renderLightboxActiveContent() {
    const contentWrap = document.getElementById('lightboxMediaContent');
    const currentAsset = currentCategoryArray[activeIndex];
    if(!contentWrap) return;
    
    contentWrap.innerHTML = '';

    if(currentAsset.type === 'video') {
        contentWrap.innerHTML = `
            <video id="lightboxVideoNode" src="${currentAsset.src}" controls autoplay style="width:100%; max-height:70vh; object-fit:contain; border-radius:12px;"></video>
            <p class="lightbox-caption">${currentAsset.name}</p>
        `;
    } else {
        contentWrap.innerHTML = `
            <img id="lightboxImageNode" src="${currentAsset.src}" alt="${currentAsset.name}">
            <p class="lightbox-caption">${currentAsset.name}</p>
        `;
    }
}

function changeSlide(direction) {
    activeIndex = (activeIndex + direction + currentCategoryArray.length) % currentCategoryArray.length;
    renderLightboxActiveContent();
}

function closeGallerySlider() {
    const lightbox = document.getElementById('galleryLightbox');
    if(lightbox) {
        lightbox.classList.remove('active-magic-box');
        setTimeout(() => {
            lightbox.style.display = 'none';
            const contentWrap = document.getElementById('lightboxMediaContent');
            if(contentWrap) contentWrap.innerHTML = ''; 
        }, 300);
    }
}

document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('galleryLightbox');
    if (lightbox && lightbox.style.display === 'flex') {
        if (e.key === 'ArrowRight') changeSlide(1);
        if (e.key === 'ArrowLeft') changeSlide(-1);
        if (e.key === 'Escape') closeGallerySlider();
    }
});

function triggerUPIPayment() {
    window.location.href = "upi://pay?pa=8810682518@paytm&pn=Muskan%20Kumari&cu=INR";
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('hub-action-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Your message was transferred securely!');
            form.reset();
        });
    }
});
