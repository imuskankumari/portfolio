// Data Array Stores with Precise Filtering Framework Links
const portfolioAssets = {
    graphic: Array.from({length: 20}, (_, i) => ({ src: `g${i+1}.jpg`, name: `Graphic Project ${i+1}` })),
    web: [{ src: 'w1.png', name: 'Premium Live UI Platform Architecture' }],
    ai: Array.from({length: 11}, (_, i) => ({ src: `b${i+1}.png`, name: `AI Digital Visual ${i+1}` }))
};

let currentCategoryArray = [];
let activeIndex = 0;

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
        targetGrid.innerHTML = '<p style="grid-column: span 4; text-align:center; padding:30px; color:#999;">Web Modules Loading...</p>';
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

// Lightbox Slider Mechanics (Seamless Slide/भगाना Logic)
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

// Interactive Reels Control Overlay Popups
function openReelPopup(videoSrc) {
    const lightbox = document.getElementById('reelLightbox');
    const lightboxVideo = document.getElementById('lightboxVideo');
    if(lightbox && lightboxVideo) {
        lightboxVideo.src = videoSrc;
        lightbox.style.display = 'flex';
        lightboxVideo.play();
    }
}

function closeReelPopup() {
    const lightbox = document.getElementById('reelLightbox');
    const lightboxVideo = document.getElementById('lightboxVideo');
    if(lightbox && lightboxVideo) {
        lightbox.style.display = 'none';
        lightboxVideo.pause();
        lightboxVideo.src = '';
    }
}

function triggerUPIPayment() {
    window.location.href = "upi://pay?pa=8810682518@paytm&pn=Muskan%20Kumari&cu=INR";
}

document.addEventListener('DOMContentLoaded', () => {
    filterGallery('graphic', null); // Initialise default Graphics layout

    const reelsContainer = document.getElementById('reels-wrapper');
    if(reelsContainer) {
        for(let r = 1; r <= 12; r++) {
            const reelCard = document.createElement('div');
            reelCard.className = 'vertical-reel-wrapper';
            const autoPlayConfig = (r === 1) ? 'autoplay muted loop' : 'loop';
            
            reelCard.innerHTML = `
                <video ${autoPlayConfig} playsinline onclick="openReelPopup('r${r}.mp4')">
                    <source src="r${r}.mp4" type="video/mp4">
                </video>
                <button class="reel-audio-toggle" onclick="event.stopPropagation(); toggleLocalMute(this)">🔊 Mute</button>
            `;
            reelsContainer.appendChild(reelCard);
        }
    }
});

function toggleLocalMute(btnElement) {
    const videoNode = btnElement.parentElement.querySelector('video');
    if(videoNode) {
        videoNode.muted = !videoNode.muted;
        btnElement.innerText = videoNode.muted ? '🔇 Unmute' : '🔊 Mute';
        if(!videoNode.muted) videoNode.play();
    }
}
