document.addEventListener("DOMContentLoaded", () => {
    renderInfiniteVisualsMarquee();
    renderInfiniteVideoMarquee();
    renderFiftyGraphicCards();
    applyPortfolioSecurity();
});

// 1. AI Generated Visuals - मारकी लूप इंजन (b1.png से b10.png)
function renderInfiniteVisualsMarquee() {
    const track = document.getElementById("visualsMarqueeTrack");
    if (!track) return;
    
    let htmlBuffer = "";
    const totalVisuals = 10;

    for (let currentLoop = 0; currentLoop < 2; currentLoop++) {
        for (let i = 1; i <= totalVisuals; i++) {
            htmlBuffer += `
                <div class="marquee-img-card">
                    <img src="b${i}.png" alt="Ai Visual ${i}" loading="lazy">
                </div>
            `;
        }
    }
    track.innerHTML = htmlBuffer;
}

// 2. मोशन ग्राफिक्स रील्स - मारकी लूप इंजन (v1.mp4 से v12.mp4)
function renderInfiniteVideoMarquee() {
    const track = document.getElementById("motionMarqueeTrack");
    if (!track) return;
    
    let htmlBuffer = "";
    const totalVideos = 12;

    for (let currentLoop = 0; currentLoop < 2; currentLoop++) {
        for (let i = 1; i <= totalVideos; i++) {
            htmlBuffer += `
                <div class="marquee-video-card">
                    <video src="v${i}.mp4" autoplay loop muted playsinline preload="metadata"></video>
                </div>
            `;
        }
    }
    track.innerHTML = htmlBuffer;
}

// 3. ग्राफिक डिजाइनिंग 50 फाइल्स का ग्रिड लूप
function renderFiftyGraphicCards() {
    const gridContainer = document.getElementById("graphicDynamicGrid");
    if (!gridContainer) return;
    let gridMarkup = "";

    for (let i = 1; i <= 50; i++) {
        gridMarkup += `
            <div class="original-portfolio-dark-frame">
                <div class="grid-card-image-wrapper">
                    <img src="g${i}.jpg" alt="Artwork g${i}" loading="lazy">
                </div>
                <div class="grid-card-meta-bar">
                    <h4 class="grid-card-title">Graphic Design Project #${i}</h4>
                    <div class="grid-card-price">₹89</div>
                </div>
            </div>
        `;
    }
    gridContainer.innerHTML = gridMarkup;
}

function applyPortfolioSecurity() {
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('dragstart', (e) => {
        if (e.target.nodeName === 'IMG') e.preventDefault();
    });
}

