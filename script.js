document.addEventListener("DOMContentLoaded", () => {
    // चारों कोर फंक्शन्स को बिना किसी रुकावट के एक साथ एक्टिवेट करें
    startAutomaticVisualsSlider();
    generateHorizontalReels();
    generateFiftyPortfolioCards();
    activateAntiTheftProtection();
});

// 1. AI Visuals (b1.png से b10.png) ऑटोमैटिक स्लाइडर इंजन
function startAutomaticVisualsSlider() {
    const totalImages = 10;
    let activeIndex = 1;
    let intervalTimer;

    const imgNode = document.getElementById("sliderImage");
    const titleNode = document.getElementById("sliderTitle");
    const prevControl = document.getElementById("prevSlide");
    const nextControl = document.getElementById("nextSlide");

    if (!imgNode || !titleNode || !prevControl || !nextControl) return;

    function renderSlide(slideNum) {
        imgNode.style.opacity = "0.2";
        imgNode.style.transform = "scale(0.97)";
        
        setTimeout(() => {
            imgNode.src = `b${slideNum}.png`;
            titleNode.innerText = `Burger Advertisement (b${slideNum}.png)`;
            imgNode.style.opacity = "1";
            imgNode.style.transform = "scale(1)";
        }, 150);
    }

    function triggerAutoPlay() {
        intervalTimer = setInterval(() => {
            activeIndex = activeIndex >= totalImages ? 1 : activeIndex + 1;
            renderSlide(activeIndex);
        }, 3000); // हर 3 सेकंड में इमेज ऑटोमैटिक बदलेगी
    }

    function clearAndRestartClock() {
        clearInterval(intervalTimer);
        triggerAutoPlay();
    }

    nextControl.addEventListener("click", () => {
        activeIndex = activeIndex >= totalImages ? 1 : activeIndex + 1;
        renderSlide(activeIndex);
        clearAndRestartClock();
    });

    prevControl.addEventListener("click", () => {
        activeIndex = activeIndex <= 1 ? totalImages : activeIndex - 1;
        renderSlide(activeIndex);
        clearAndRestartClock();
    });

    // टाइमर चालू करें
    triggerAutoPlay();
}

// 2. मोशन ग्राफिक्स रील्स (v1.mp4 से v10.mp4) हॉरिजॉन्टल रेंडरर
function generateHorizontalReels() {
    const reelWrapper = document.getElementById("motionGraphicsContainer");
    if (!reelWrapper) return;
    let listMarkup = "";

    for (let i = 1; i <= 10; i++) {
        listMarkup += `
            <div class="motion-video-frame">
                <video src="v${i}.mp4" autoplay loop muted playsinline controls preload="metadata"></video>
            </div>
        `;
    }
    reelWrapper.innerHTML = listMarkup;
}

// 3. ग्राफिक डिजाइनिंग 50 इमेजेस (g1.jpg से g50.jpg) का कम्प्लीट लूप ग्रिड
function generateFiftyPortfolioCards() {
    const gridWrapper = document.getElementById("graphicDynamicGrid");
    if (!gridWrapper) return;
    let gridMarkup = "";

    for (let i = 1; i <= 50; i++) {
        gridMarkup += `
            <div class="original-portfolio-dark-frame">
                <div class="grid-card-image-wrapper">
                    <img src="g${i}.jpg" alt="Graphic Artwork g${i}" loading="lazy">
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

// 4. एंटी-कॉपी एंटी-राइटक्लिक प्रोटेक्शन सिस्टम (ताकि कोई आपकी इमेजेस या कोड चुरा न सके)
function activateAntiTheftProtection() {
    // राइट-क्लिक ब्लॉक करें
    document.addEventListener('contextmenu', e => e.preventDefault());
    
    // इमेजेस को ड्रैग करके सेव करना ब्लॉक करें
    document.addEventListener('dragstart', (e) => {
        if (e.target.nodeName === 'IMG') e.preventDefault();
    });
}

