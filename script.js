// Local Repositories Configurations Mapped Directly
const portfolioAssets = {
    graphic: Array.from({length: 20}, (_, i) => ({ src: `g${i+1}.jpg`, name: `Graphic Design Asset ${i+1}` })),
    web: [{ src: 'w1.png', name: 'Premium Live UI Platform Architecture' }],
    ai: Array.from({length: 11}, (_, i) => ({ src: `b${i+1}.png`, name: `AI Digital Visual Item ${i+1}` }))
};

let currentCategoryArray = [];
let activeIndex = 0;

// About Tab Switching Mechanism
function switchAboutTab(tabId, event) {
    const panels = document.querySelectorAll('.about-panel');
    panels.forEach(p => p.classList.remove('active'));

    const buttons = document.querySelectorAll('.about-menu-btn');
    buttons.forEach(b => b.classList.remove('active'));

    const targetedPanel = document.getElementById(`tab-${tabId}`);
    if (targetedPanel) targetedPanel.classList.add('active');
    if (event) event.target.classList.add('active');
}

// Image Gallery Filtering Framework
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
        targetGrid.innerHTML = '<p style="grid-column: span 4; text-align:center; padding:30px; color:#999;">Web Projects Loading...</p>';
        return;
    }

    currentCategoryArray.forEach((item, idx) => {
        const itemNode = document.createElement('div');
        itemNode.className = 'gallery-item';
        itemNode.onclick = () => openGallerySlider(idx);
        itemNode.innerHTML = `
            <img src="${item.src}" alt="${item.name}" onerror="this.src='placeholder.png'">
            <p>${item.name}</p>
        `;
        targetGrid.appendChild(itemNode);
    });
}

// Lightbox Image Overlay Slider Controls (ഭगाना Mechanisms)
function openGallerySlider(index) {
    activeIndex = index;
    const lightbox = document.getElementById('galleryLightbox');
    const activeImg = document.getElementById('lightboxActiveImg');
    const caption = document.getElementById('lightboxImgCaption');

    if(lightbox && activeImg && caption) {
        activeImg.src = currentCategoryArray[activeIndex].src;
        caption.innerText = currentCategoryArray[activeIndex].name;
        lightbox.style.display = 'flex';
    }
}

function changeSlide(direction) {
    activeIndex += direction;
    if (activeIndex >= currentCategoryArray.length) activeIndex = 0;
    if (activeIndex < 0) activeIndex = currentCategoryArray.length - 1;

    const activeImg = document.getElementById('lightboxActiveImg');
    const caption = document.getElementById('lightboxImgCaption');
    
    if(activeImg && caption) {
        activeImg.src = currentCategoryArray[activeIndex].src;
        caption.innerText = currentCategoryArray[activeIndex].name;
    }
}

function closeGallerySlider() {
    document.getElementById('galleryLightbox').style.display = 'none';
}

// Elementor Playback Video Timer Sliders Logic
let currentVideoIndex = 1;
const totalVideosCount = 12;

function initializeVideoSliderSystem() {
    const tabsContainer = document.getElementById('reels-tabs-list');
    if (!tabsContainer) return;

    tabsContainer.innerHTML = '';
    for (let index = 1; index <= totalVideosCount; index++) {
        const tabButton = document.createElement('div');
        tabButton.className = `video-tab-item ${index === 1 ? 'active-tab' : ''}`;
        tabButton.id = `video-tab-node-${index}`;
        tabButton.innerText = `Motion Reel #${index}`;
        tabButton.onclick = () => jumpToSpecificVideo(index);
        tabsContainer.appendChild(tabButton);
    }
    loadVideoSourceTrack(currentVideoIndex);
}

function loadVideoSourceTrack(index) {
    currentVideoIndex = index;
    const player = document.getElementById('sliderVideoPlayer');
    if (!player) return;

    const allTabs = document.querySelectorAll('.video-tab-item');
    allTabs.forEach(t => t.classList.remove('active-tab'));
    
    const activeTab = document.getElementById(`video-tab-node-${index}`);
    if(activeTab) activeTab.classList.add('active-tab');

    player.src = `r${index}.mp4`;
    player.load();

    player.onloadedmetadata = () => {
        player.onended = () => {
            let nextIndex = currentVideoIndex + 1;
            if (nextIndex > totalVideosCount) nextIndex = 1;
            loadVideoSourceTrack(nextIndex);
        };
    };
}

function jumpToSpecificVideo(index) {
    loadVideoSourceTrack(index);
}

function triggerUPIPayment() {
    window.location.href = "upi://pay?pa=8810682518@paytm&pn=Muskan%20Kumari&cu=INR";
}

document.addEventListener('DOMContentLoaded', () => {
    filterGallery('graphic', null); // Initialise default graphics grids
    initializeVideoSliderSystem();  // Initialise timed elementor reels
    
    const form = document.getElementById('hub-action-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Form submitted successfully!');
            form.reset();
        });
    }
});
