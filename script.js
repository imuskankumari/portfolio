document.addEventListener("DOMContentLoaded", () => {
    buildFreeMarqueeVisuals();
    buildMotionAccordionReels();
    buildFiftyGraphicGrid();
    protectContentTheft();
});

function buildFreeMarqueeVisuals() {
    const track = document.getElementById("aiVisualsTrack");
    if (!track) return;
    
    let contentMarkup = "";
    const maxVisuals = 10;

    for (let loopCount = 0; loopCount < 2; loopCount++) {
        for (let i = 1; i <= maxVisuals; i++) {
            contentMarkup += `
                <div class="marquee-img-card">
                    <img src="b${i}.png" alt="Ai Visual Art ${i}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=400&auto=format&fit=crop&q=60'">
                </div>
            `;
        }
    }
    track.innerHTML = contentMarkup;
}

function buildMotionAccordionReels() {
    const track = document.getElementById("reelsAccordionTrack");
    if (!track) return;
    
    let contentMarkup = "";
    const maxReels = 12;

    for (let i = 1; i <= maxReels; i++) {
        contentMarkup += `
            <div class="reel-item-frame">
                <video src="r${i}.mp4" loop muted playsinline poster="b${i <= 10 ? i : 1}.png"></video>
                <button class="reel-audio-control-btn"><i class="fas fa-volume-mute"></i></button>
            </div>
        `;
    }
    track.innerHTML = contentMarkup;

    document.querySelectorAll('.reel-item-frame').forEach(frame => {
        const video = frame.querySelector('video');
        const audioBtn = frame.querySelector('.reel-audio-control-btn');
        const audioIcon = audioBtn.querySelector('i');
        
        frame.addEventListener('mouseenter', () => {
            if (video) {
                video.play().catch(() => {});
            }
        });

        frame.addEventListener('mouseleave', () => {
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        });

        audioBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (video.muted) {
                video.muted = false;
                audioIcon.className = "fas fa-volume-up";
            } else {
                video.muted = true;
                audioIcon.className = "fas fa-volume-mute";
            }
        });
    });
}

function buildFiftyGraphicGrid() {
    const grid = document.getElementById("graphicPortfolioGrid");
    if (!grid) return;
    let gridMarkup = "";

    for (let i = 1; i <= 50; i++) {
        gridMarkup += `
            <div class="behance-portfolio-card">
                <div class="portfolio-img-bound">
                    <img src="g${i}.jpg" alt="Graphic Design Project ${i}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=60'">
                </div>
                <div class="portfolio-meta-row">
                    <strong>Project #${i}</strong>
                    <span>₹89</span>
                </div>
            </div>
        `;
    }
    grid.innerHTML = gridMarkup;
}

function protectContentTheft() {
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('dragstart', e => {
        if (e.target.nodeName === 'IMG' || e.target.nodeName === 'VIDEO') e.preventDefault();
    });
}
