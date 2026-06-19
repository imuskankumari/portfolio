document.addEventListener("DOMContentLoaded", () => {
    startVisualsSlider();
    renderVideosHorizontal();
    renderFiftyGraphicCards();
});

// 1. AI Visuals - ऑटो स्लाइडर (b1.png से b10.png)
function startVisualsSlider() {
    const totalSlides = 10;
    let currentIndex = 1;
    let autoInterval;

    const imgElement = document.getElementById("sliderImage");
    const titleElement = document.getElementById("sliderTitle");
    const prevBtn = document.getElementById("prevSlide");
    const nextBtn = document.getElementById("nextSlide");

    if (!imgElement) return;

    function renderSlide(index) {
        // फेड-इन इफेक्ट
        imgElement.style.opacity = "0.2";
        imgElement.style.transform = "scale(0.98)";
        
        setTimeout(() => {
            imgElement.src = `b${index}.png`;
            if (titleElement) titleElement.innerText = `Burger Advertisement (b${index}.png)`;
            imgElement.style.opacity = "1";
            imgElement.style.transform = "scale(1)";
        }, 150);
    }

    function startAutoSlide() {
        autoInterval = setInterval(() => {
            currentIndex = currentIndex >= totalSlides ? 1 : currentIndex + 1;
            renderSlide(currentIndex);
        }, 3000); // हर 3 सेकंड में बदलेगा
    }

    function clearTimer() {
        clearInterval(autoInterval);
        startAutoSlide();
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            currentIndex = currentIndex >= totalSlides ? 1 : currentIndex + 1;
            renderSlide(currentIndex);
            clearTimer();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            currentIndex = currentIndex <= 1 ? totalSlides : currentIndex - 1;
            renderSlide(currentIndex);
            clearTimer();
        });
    }

    // ऑटो-प्ले चालू करें
    startAutoSlide();
}

// 2. मोशन ग्राफिक्स रील्स (v1.mp4 से v11.mp4) - हॉरिजॉन्टल रेंडरर
function renderVideosHorizontal() {
    const reelWrapper = document.getElementById("motionGraphicsContainer");
    if (!reelWrapper) return;
    
    let listMarkup = "";
    // v1.mp4 से v11.mp4 तक रील्स आड़ी कतार में लगेंगी
    for (let i = 1; i <= 11; i++) {
        listMarkup += `
            <video src="v${i}.mp4" muted loop autoplay preload="metadata"></video>
        `;
    }
    reelWrapper.innerHTML = listMarkup;
}

// 3. ग्राफिक डिजाइनिंग 50 इमेजेस (g1.jpg से g50.jpg) का लूप ग्रिड
function renderFiftyGraphicCards() {
    const gridWrapper = document.getElementById("graphicDynamicGrid");
    if (!gridWrapper) return;
    
    let gridMarkup = "";
    for (let i = 1; i <= 50; i++) {
        gridMarkup += `
            <div class="portfolio-white-frame">
                <div class="grid-card-image-wrapper">
                    <img src="g${i}.jpg" alt="Graphic artwork g${i}" loading="lazy">
                </div>
                <div class="grid-card-meta-bar">
                    <h4 class="grid-card-title">Graphic Design Project #${i}</h4>
                    <div class="grid-card-price">₹89</div>
                </div>
            </div>
        `;
    }
    gridWrapper.innerHTML = gridMarkup;
}
