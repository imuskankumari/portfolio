document.addEventListener("DOMContentLoaded", () => {
    initInfiniteVideoMarquee();
    initTouchVisualsSlider();
    renderFiftyGraphicCards();
    applyPortfolioSecurity();
});

// 1. मोशन ग्राफिक्स - इन्फिनिट मारकी स्क्रॉल (v1.mp4 से v12.mp4)
function initInfiniteVideoMarquee() {
    const track = document.getElementById("marqueeTrack1");
    if (!track) return;
    
    let htmlBuffer = "";
    // कतार को लगातार चलाने के लिए 1 से 12 तक के वीडियो का डबल सेट (Loop Clone) बनाएंगे
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

// 2. एआई विजुअल्स - हाथ से टच/स्वाइप करने पर आगे-पीछे होने वाला स्लाइडर
function initTouchVisualsSlider() {
    const track = document.getElementById("visualsTrack");
    const slides = document.querySelectorAll(".touch-slide-item");
    const leftBtn = document.getElementById("slideLeftBtn");
    const rightBtn = document.getElementById("slideRightBtn");
    const displayNum = document.getElementById("slideCounterDisplay");

    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    const totalSlides = slides.length;

    function moveSlider() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        if (displayNum) {
            displayNum.innerText = `${currentIndex + 1} / ${totalSlides}`;
        }
    }

    if (rightBtn) {
        rightBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            moveSlider();
        });
    }

    if (leftBtn) {
        leftBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            moveSlider();
        });
    }

    // मोबाइल स्वाइप जेस्चर डिटेक्शन
    let startX = 0;
    let endX = 0;

    track.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    }, { passive: true });

    track.addEventListener("touchend", (e) => {
        endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                currentIndex = (currentIndex + 1) % totalSlides;
            } else {
                currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            }
            moveSlider();
        }
    }, { passive: true });
}

// 3. ग्राफिक डिजाइनिंग 50 ओरिजिनल फ्रेम्स
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
