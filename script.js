document.addEventListener("DOMContentLoaded", () => {
    buildAIVisuals();
    buildMotionGraphics();
    buildPortfolioGrid();
    protectMyContent();
});

// 1. AI Generated Visuals - 10 इमेजेस (b1.png से b10.png) कैरोज़ल लोड करना
function buildAIVisuals() {
    const aiContainer = document.getElementById("aiVisualsContainer");
    if (!aiContainer) return;
    let htmlBuffer = "";

    for (let i = 1; i <= 10; i++) {
        htmlBuffer += `
            <div class="ai-card-frame">
                <img src="b${i}.png" alt="AI Visual b${i}" onerror="this.src='default_graphic.jpg'">
                <h4 class="grid-card-title" style="margin-top:10px;">Delicious Burger b${i}</h4>
                <div class="grid-card-price">₹89</div>
            </div>
        `;
    }
    aiContainer.innerHTML = htmlBuffer;
}

// 2. Motion Graphics - 11 वीडियोज़ (v1.mp4 से v11.mp4) हॉरिजॉन्टल रो लोड करना
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

// 3. Graphic Designing - 50 फ्रेम्स ग्रिड (g1.jpg से g50.jpg)
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

// 4. इमेज प्रोटेक्शन कोड (कोई डाउनलोड/सेव न कर पाए)
function protectMyContent() {
    // राइट-क्लिक पूरी वेबसाइट पर ब्लॉक
    document.addEventListener('contextmenu', event => event.preventDefault());

    // इमेजेस पर ड्रैगिंग रोकना
    document.addEventListener('dragstart', (e) => {
        if (e.target.nodeName === 'IMG') {
            e.preventDefault();
        }
    });

    // मोबाइल पर लॉन्ग-प्रेस (दबाकर रखने पर इमेज सेव का ऑप्शन आना) ब्लॉक करना
    window.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        return false;
    }, { passive: false });
}
