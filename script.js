document.addEventListener("DOMContentLoaded", () => {
    initBurgerSlider();
    buildMotionGraphics();
    buildPortfolioGrid();
    protectMyContent();
});

// 1. डेस्कटॉप फ्लिप स्लाइडर लॉजिक (b1.png से b10.png)
function initBurgerSlider() {
    const totalSlides = 10;
    let currentSlide = 1;

    const imgElement = document.getElementById("sliderImage");
    const titleElement = document.getElementById("sliderTitle");
    const prevBtn = document.getElementById("prevSlide");
    const nextBtn = document.getElementById("nextSlide");

    if (!imgElement || !titleElement || !prevBtn || !nextBtn) return;

    function updateSlider(index) {
        imgElement.style.opacity = "0.2";
        imgElement.style.transform = "scale(0.97)";
        
        setTimeout(() => {
            imgElement.src = `b${index}.png`;
            titleElement.innerText = `Burger Advertisement (b${index}.png)`;
            imgElement.style.opacity = "1";
            imgElement.style.transform = "scale(1)";
        }, 120);
    }

    nextBtn.addEventListener("click", () => {
        currentSlide = currentSlide >= totalSlides ? 1 : currentSlide + 1;
        updateSlider(currentSlide);
    });

    prevBtn.addEventListener("click", () => {
        currentSlide = currentSlide <= 1 ? totalSlides : currentSlide - 1;
        updateSlider(currentSlide);
    });
}

// 2. Motion Graphics - 11 हॉरिजॉन्टल रील वीडियोज़ लोड करना
function buildMotionGraphics() {
    const motionContainer = document.getElementById("motionGraphicsContainer");
    if (!motionContainer) return;
    let htmlBuffer = "";

    for (let i = 1; i <= 11; i++) {
        htmlBuffer += `
            <div class="motion-video-frame">
                <video src="v${i}.mp4" autoplay loop muted playsinline preload="metadata"></video>
            </div>
        `;
    }
    motionContainer.innerHTML = htmlBuffer;
}

// 3. Graphic Designing - 50 ओरिजिनल फ्रेम्स ग्रिड (g1.jpg से g50.jpg)
function buildPortfolioGrid() {
    const gridContainer = document.getElementById("graphicDynamicGrid");
    if (!gridContainer) return;
    let htmlBuffer = "";

    for (let i = 1; i <= 50; i++) {
        htmlBuffer += `
            <div class="original-portfolio-dark-frame">
                <div class="grid-card-image-wrapper">
                    <img src="g${i}.jpg" alt="Graphic Design g${i}" onerror="this.src='default_graphic.jpg'">
                </div>
                <h4 class="grid-card-title">Graphic Design g${i}</h4>
                <div class="grid-card-price">₹89</div>
            </div>
        `;
    }
    gridContainer.innerHTML = htmlBuffer;
}

// 4. सिक्योर इमेज डाउनलोड लॉकिंग स्क्रिप्ट
function protectMyContent() {
    document.addEventListener('contextmenu', event => event.preventDefault());

    document.addEventListener('dragstart', (e) => {
        if (e.target.nodeName === 'IMG') e.preventDefault();
    });

    window.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        return false;
    }, { passive: false });
}
