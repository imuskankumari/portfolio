document.addEventListener("DOMContentLoaded", () => {
    initPerfectAIVisualsSlider();
    renderStaticVideosGrid();
    renderFiftyGraphicCards();
    applyPortfolioSecurity();
});

// 1. AI Generated Visuals कैरोसल इंजन (परफेक्ट आस्पेक्ट रेशियो के साथ)
function initPerfectAIVisualsSlider() {
    const maxSlides = 10;
    let activeIndex = 1;
    let autoRotateTimer;

    const imgElement = document.getElementById("sliderImage");
    const titleElement = document.getElementById("sliderTitle");
    const prevElement = document.getElementById("prevSlide");
    const nextElement = document.getElementById("nextSlide");

    if (!imgElement || !titleElement || !prevElement || !nextElement) return;

    function changeSlide(targetIndex) {
        imgElement.style.opacity = "0.2";
        
        setTimeout(() => {
            imgElement.src = `b${targetIndex}.png`;
            titleElement.innerText = `Burger Advertisement (b${targetIndex}.png)`;
            imgElement.style.opacity = "1";
        }, 150);
    }

    function startTimer() {
        autoRotateTimer = setInterval(() => {
            activeIndex = activeIndex >= maxSlides ? 1 : activeIndex + 1;
            changeSlide(activeIndex);
        }, 3500);
    }

    function resetTimer() {
        clearInterval(autoRotateTimer);
        startTimer();
    }

    nextElement.addEventListener("click", () => {
        activeIndex = activeIndex >= maxSlides ? 1 : activeIndex + 1;
        changeSlide(activeIndex);
        resetTimer();
    });

    prevElement.addEventListener("click", () => {
        activeIndex = activeIndex <= 1 ? maxSlides : activeIndex - 1;
        changeSlide(activeIndex);
        resetTimer();
    });

    startTimer();
}

// 2. मोशन ग्राफिक्स - v1.mp4 से v11.mp4 तक सभी 11 रील्स को एक साथ ग्रिड में लोड करना
function renderStaticVideosGrid() {
    const container = document.getElementById("motionGraphicsContainer");
    if (!container) return;
    let markupBuffer = "";

    // बिना स्क्रॉल के आपके स्क्रीन पर सभी 11 रील्स एक साथ लाइव चलेंगी
    for (let i = 1; i <= 11; i++) {
        markupBuffer += `
            <div class="motion-video-frame">
                <video src="v${i}.mp4" autoplay loop muted playsinline controls preload="metadata"></video>
            </div>
        `;
    }
    container.innerHTML = markupBuffer;
}

// 3. ग्राफिक डिजाइनिंग - g1 से g50 इमेजेस का लूप
function renderFiftyGraphicCards() {
    const gridContainer = document.getElementById("graphicDynamicGrid");
    if (!gridContainer) return;
    let gridMarkup = "";

    for (let i = 1; i <= 50; i++) {
        gridMarkup += `
            <div class="original-portfolio-dark-frame">
                <div class="grid-card-image-wrapper">
                    <img src="g${i}.jpg" alt="Graphic Design Artwork g${i}" loading="lazy">
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

// 4. सिक्योर कंटेंट प्रोटेक्शन सिस्टम
function applyPortfolioSecurity() {
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('dragstart', (e) => {
        if (e.target.nodeName === 'IMG') e.preventDefault();
    });
}

