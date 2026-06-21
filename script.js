document.addEventListener("DOMContentLoaded", () => {
    initMarqueeVisualBelt();
    initAccordionMotionReels();
    initThreeThreeGridProjects();
    preventAssetTheft();
});

// ऑटो-स्क्रॉल विज़ुअल्स बेल्ट फ़ंक्शन
function initMarqueeVisualBelt() {
    const track = document.getElementById("aiVisualsTrack");
    if (!track) return;
    
    let itemsMarkup = "";
    const totalVisuals = 10; // कुल 10 तस्वीरें लूप में चलेंगी

    for (let loop = 0; loop < 2; loop++) {
        for (let i = 1; i <= totalVisuals; i++) {
            itemsMarkup += `
                <div class="marquee-img-card">
                    <img src="b${i}.png" alt="AI Generated Visual ${i}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=300&auto=format&fit=crop&q=60'">
                </div>
            `;
        }
    }
    track.innerHTML = itemsMarkup;
}

// रील एकॉर्डियन मैकेनिज्म: माउस ले जाते ही चलेगी, हटाते ही बंद
function initAccordionMotionReels() {
    const track = document.getElementById("reelsAccordionTrack");
    if (!track) return;
    
    let reelsMarkup = "";
    const totalReels = 12; // कुल 12 शानदार रील्स

    for (let i = 1; i <= totalReels; i++) {
        reelsMarkup += `
            <div class="reel-item-frame">
                <video src="r${i}.mp4" loop muted playsinline poster="b${i <= 10 ? i : 1}.png"></video>
                <div class="reel-static-badge">Reel ${i < 10 ? '0' + i : i}</div>
            </div>
        `;
    }
    track.innerHTML = reelsMarkup;

    // माउस इंटरेक्शन इवेंट्स
    document.querySelectorAll('.reel-item-frame').forEach(frame => {
        const video = frame.querySelector('video');
        
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
    });
}

// लेटेस्ट प्रोजेक्ट्स के लिए 3-3 का साफ सुथरा ग्रिड मैकेनिज्म (कुल 50 आइटम)
function initThreeThreeGridProjects() {
    const grid = document.getElementById("graphicPortfolioGrid");
    if (!grid) return;
    let gridMarkup = "";

    for (let i = 1; i <= 50; i++) {
        gridMarkup += `
            <div class="behance-portfolio-card">
                <div class="portfolio-img-bound">
                    <img src="g${i}.jpg" alt="Muskan Project ${i}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop&q=60'">
                </div>
                <div class="portfolio-meta-row">
                    <strong>Creative Asset Design #${i}</strong>
                    <span>₹89</span>
                </div>
            </div>
        `;
    }
    grid.innerHTML = gridMarkup;
}

// राइट क्लिक और ड्रैग प्रोटेक्शन ताकि कोई चोरी न कर सके
function preventAssetTheft() {
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('dragstart', e => {
        if (e.target.nodeName === 'IMG' || e.target.nodeName === 'VIDEO') e.preventDefault();
    });
}
