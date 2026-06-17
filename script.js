document.addEventListener("DOMContentLoaded", () => {
    initAutoBurgerSlider();
    buildMotionGraphics();
    buildPortfolioGrid();
    protectMyContent();
});

function initAutoBurgerSlider() {
    const totalSlides = 10;
    let currentSlide = 1;
    let autoPlayTimer;

    const imgElement = document.getElementById("sliderImage");
    const titleElement = document.getElementById("sliderTitle");
    const prevBtn = document.getElementById("prevSlide");
    const nextBtn = document.getElementById("nextSlide");

    if (!imgElement || !titleElement || !prevBtn || !nextBtn) return;

    function updateSlider(index) {
        imgElement.style.opacity = "0.3";
        imgElement.style.transform = "scale(0.98)";
        
        setTimeout(() => {
            imgElement.src = `b${index}.png`;
            titleElement.innerText = `Burger Advertisement (b${index}.png)`;
            imgElement.style.opacity = "1";
            imgElement.style.transform = "scale(1)";
        }, 120);
    }

    function startAutoPlay() {
        autoPlayTimer = setInterval(() => {
            currentSlide = currentSlide >= totalSlides ? 1 : currentSlide + 1;
            updateSlider(currentSlide);
        }, 3000);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayTimer);
        startAutoPlay();
    }

    nextBtn.addEventListener("click", () => {
        currentSlide = currentSlide >= totalSlides ? 1 : currentSlide + 1;
        updateSlider(currentSlide);
        resetAutoPlay();
    });

    prevBtn.addEventListener("click", () => {
        currentSlide = currentSlide <= 1 ? totalSlides : currentSlide - 1;
        updateSlider(currentSlide);
        resetAutoPlay();
    });

    startAutoPlay();
}

function buildMotionGraphics() {
    const motionContainer = document.getElementById("motionGraphicsContainer");
    if (!motionContainer) return;
    let htmlBuffer = "";

    for (let i = 1; i <= 10; i++) {
        htmlBuffer += `
            <div class="motion-video-frame">
                <video src="v${i}.mp4" autoplay loop muted playsinline controls preload="metadata"></video>
            </div>
        `;
    }
    motionContainer.innerHTML = htmlBuffer;
}

function buildPortfolioGrid() {
    const gridContainer = document.getElementById("graphicDynamicGrid");
    if (!gridContainer) return;
    let htmlBuffer = "";

    for (let i = 1; i <= 50; i++) {
        htmlBuffer += `
            <div class="original-portfolio-dark-frame">
                <div class="grid-card-image-wrapper">
                    <img src="g${i}.jpg" alt="Graphic Design g${i}">
                </div>
                <h4 class="grid-card-title">Graphic Design g${i}</h4>
                <div class="grid-card-price">₹89</div>
            </div>
        `;
    }
    gridContainer.innerHTML = htmlBuffer;
}

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
