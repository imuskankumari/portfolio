document.addEventListener("DOMContentLoaded", () => {
    initTouchFriendlySlider();
    renderAllVideosInline();
    renderFiftyGraphicCards();
});

// 1. एआई जनरेटेड विजुअल्स - स्मूथ टच और क्लिक रिस्पॉन्सिव स्लाइडर
function initTouchFriendlySlider() {
    const track = document.getElementById("sliderTrack");
    const slides = document.querySelectorAll(".touch-slide");
    const prevBtn = document.getElementById("slidePrevBtn");
    const nextBtn = document.getElementById("slideNextBtn");
    const indicatorNum = document.getElementById("slideIndicatorNum");

    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSliderPosition() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        if (indicatorNum) {
            indicatorNum.innerText = `${currentIndex + 1} / ${totalSlides}`;
        }
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSliderPosition();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSliderPosition();
        });
    }

    // मोबाइल/टैबलेट के लिए स्वाइप और टच इवेंट्स सपोर्ट
    let startX = 0;
    let endX = 0;

    track.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    }, { passive: true });

    track.addEventListener("touchend", (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipeGesture();
    }, { passive: true });

    function handleSwipeGesture() {
        const threshold = 50; // न्यूनतम स्वाइप दूरी
        if (startX - endX > threshold) {
            // लेफ्ट स्वाइप -> अगला स्लाइड
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSliderPosition();
        } else if (endX - startX > threshold) {
            // राइट स्वाइप -> पिछला स्लाइड
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSliderPosition();
        }
    }
}

// 2. मोशन ग्राफिक्स - v1.mp4 से v11.mp4 तक की सभी 11 रील्स को एक साथ लोड करना
function renderAllVideosInline() {
    const container = document.getElementById("motionGraphicsContainer");
    if (!container) return;
    
    let htmlBuffer = "";
    for (let i = 1; i <= 11; i++) {
        htmlBuffer += `
            <div class="motion-video-white-card">
                <video src="v${i}.mp4" autoplay loop muted playsinline controls preload="metadata"></video>
            </div>
        `;
    }
    container.innerHTML = htmlBuffer;
}

// 3. ग्राफिक डिजाइनिंग - g1.jpg से g50.jpg का डायनेमिक लूप
function renderFiftyGraphicCards() {
    const gridContainer = document.getElementById("graphicDynamicGrid");
    if (!gridContainer) return;
    
    let gridMarkup = "";
    for (let i = 1; i <= 50; i++) {
        gridMarkup += `
            <div class="original-portfolio-white-frame">
                <div class="grid-card-image-wrapper">
                    <img src="g${i}.jpg" alt="Graphic Artwork g${i}" loading="lazy">
                </div>
                <div class="grid-card-meta-bar">
                    <h4 class="grid-card-title">Graphic Project #${i}</h4>
                    <div class="grid-card-price">₹89</div>
                </div>
            </div>
        `;
    }
    gridContainer.innerHTML = gridMarkup;
}
