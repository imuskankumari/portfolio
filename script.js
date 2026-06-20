document.addEventListener("DOMContentLoaded", () => {
    generatePortfolioGrid();
    generateReelsAccordion();
    generateAIMarquee();
    applyProtection();
});

// 1. g1 से g50 तक ग्राफिक डिज़ाइन कार्ड्स बनाना
function generatePortfolioGrid() {
    const container = document.getElementById("portfolioGridContainer");
    if (!container) return;
    
    let html = "";
    for (let i = 1; i <= 50; i++) {
        html += `
            <div class="portfolio-card">
                <div class="portfolio-img-box">
                    <img src="g${i}.jpg" alt="Design ${i}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=60'">
                </div>
                <div class="portfolio-meta">
                    <span class="project-title">Project ${i < 10 ? '0' + i : i}</span>
                    <span class="project-price">₹89</span>
                </div>
            </div>
        `;
    }
    container.innerHTML = html;
}

// 2. v1 से v12 तक की 12 मोशन रील्स एकॉर्डियन बनाना
function generateReelsAccordion() {
    const container = document.getElementById("reelsAccordionContainer");
    if (!container) return;
    
    let html = "";
    for (let i = 1; i <= 12; i++) {
        html += `
            <div class="reel-accordion-item">
                <video src="v${i}.mp4" loop muted playsinline preload="none"></video>
                <div class="reel-placeholder-thumb"><span>R${i}</span></div>
                <div class="reel-overlay-badge">Reel ${i < 10 ? '0' + i : i}</div>
            </div>
        `;
    }
    container.innerHTML = html;

    // एकॉर्डियन इंटरैक्शन इवेंट्स
    document.querySelectorAll('.reel-accordion-item').forEach(item => {
        const video = item.querySelector('video');
        
        item.addEventListener('mouseenter', () => {
            if(video) {
                video.removeAttribute('preload');
                video.play().catch(() => {});
            }
        });

        item.addEventListener('mouseleave', () => {
            if(video) {
                video.pause();
                video.currentTime = 0;
            }
        });
    });
}

// 3. b1 से b10 तक की AI इमेजेस मारकी बनाना (डबल सेट लूप क्लोनिंग के साथ)
function generateAIMarquee() {
    const track = document.getElementById("aiMarqueeTrack");
    if (!track) return;
    
    let html = "";
    // अनंत लूप के लिए 2 बार इमेजेस का सेट रेंडर होगा
    for (let loop = 0; loop < 2; loop++) {
        for (let i = 1; i <= 10; i++) {
            html += `
                <div class="ai-image-item">
                    <img src="b${i}.png" alt="AI Visual ${i}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=400&auto=format&fit=crop&q=60'">
                </div>
            `;
        }
    }
    track.innerHTML = html;
}

// 4. राइट क्लिक और इमेज ड्रैगिंग लॉक प्रोटेक्शन
function applyProtection() {
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('dragstart', e => {
        if (e.target.nodeName === 'IMG' || e.target.nodeName === 'VIDEO') e.preventDefault();
    });
}
