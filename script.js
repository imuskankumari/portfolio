// Data Repositories for 2026 Latest Standard Framework Execution
const portfolioAssets = {
    ai: Array.from({length: 11}, (_, index) => ({ src: `b${index+1}.png`, name: `AI Digital Visual ${index+1}` })),
    graphic: Array.from({length: 20}, (_, index) => ({ src: `g${index+1}.jpg`, name: `Graphic Asset Design ${index+1}` })),
    web: [
        { src: 'w1.png', name: 'Premium UI Web Framework Layout' }
    ]
};

// 1. Dynamic Gallery Filter and Name Label Injector
function filterGallery(category, event) {
    const targetGrid = document.getElementById('main-portfolio-gallery');
    if (!targetGrid) return;
    
    targetGrid.innerHTML = '';

    // Update Tab Selection CSS
    if(event) {
        const buttons = document.querySelectorAll('.tab-btn');
        buttons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
    }

    const matchedItems = portfolioAssets[category];
    if(matchedItems.length === 0) {
        targetGrid.innerHTML = '<p style="grid-column: span 4; text-align:center; padding:30px; color:#999;">Web Engineering Modules Loading...</p>';
        return;
    }

    // Render Exactly 4 Columns Grid Structure with Titles at Bottom
    matchedItems.forEach(item => {
        const structuralNode = document.createElement('div');
        structuralNode.className = 'gallery-item';
        structuralNode.innerHTML = `
            <img src="${item.src}" alt="${item.name}" onerror="this.src='placeholder.png'">
            <p>${item.name}</p>
        `;
        targetGrid.appendChild(structuralNode);
    });
}

// 2. Full-Screen Interactive Lightbox Pop-up for Vertical Videos
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

// 3. Smart UPI Redirection Intent Trigger
function triggerUPIPayment() {
    const upiIntentUrl = "upi://pay?pa=8810682518@paytm&pn=Muskan%20Kumari&cu=INR";
    window.location.href = upiIntentUrl;
}

// 4. Dom Load Execution Hooks
document.addEventListener('DOMContentLoaded', () => {
    // Render default AI Tab
    filterGallery('ai', null);

    // Render 12 Reels with Sound Configurations & Pop-up Handlers
    const reelsContainer = document.getElementById('reels-wrapper');
    if(reelsContainer) {
        for(let r = 1; r <= 12; r++) {
            const reelCard = document.createElement('div');
            reelCard.className = 'vertical-reel-wrapper';
            
            // First reel plays muted automatically as context master setup
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

    // Single-Page Form Handler
    const formElement = document.getElementById('portfolio-action-form');
    if(formElement) {
        formElement.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Your creative vision has been submitted! Muskan Kumari will connect with you shortly.');
            formElement.reset();
        });
    }
});

// Inline Sound Control Logic Helper
function toggleLocalMute(btnElement) {
    const videoNode = btnElement.parentElement.querySelector('video');
    if(videoNode) {
        videoNode.muted = !videoNode.muted;
        btnElement.innerText = videoNode.muted ? '🔇 Unmute' : '🔊 Mute';
        if(!videoNode.muted) {
            videoNode.play();
        }
    }
}
