document.addEventListener("DOMContentLoaded", () => {
    buildAIVisualsGrid();
    buildMotionGraphicsGrid();
    buildPortfolioGrid();
});

// 1. AI Generated Visuals (b1.png से b10.png) लोड करने के लिए फंक्शन
function buildAIVisualsGrid() {
    const aiContainer = document.getElementById("aiVisualsGrid");
    if (!aiContainer) return;
    let htmlBuffer = "";

    for (let i = 1; i <= 10; i++) {
        htmlBuffer += `
            <div class="original-portfolio-dark-frame">
                <div class="grid-card-image-wrapper">
                    <img src="b${i}.png" alt="AI Visual b${i}" onerror="this.src='default_graphic.jpg'">
                </div>
                <h4 class="grid-card-title">Delicious Burger b${i}</h4>
                <div class="grid-card-price">₹89</div>
            </div>
        `;
    }
    aiContainer.innerHTML = htmlBuffer;
}

// 2. Motion Graphics (v1.mp4 से v11.mp4) लोड करने के लिए फंक्शन
function buildMotionGraphicsGrid() {
    const motionContainer = document.getElementById("motionGraphicsGrid");
    if (!motionContainer) return;
    let htmlBuffer = "";

    for (let i = 1; i <= 11; i++) {
        htmlBuffer += `
            <div class="motion-card">
                <video src="v${i}.mp4" autoplay loop muted playsinline></video>
            </div>
        `;
    }
    motionContainer.innerHTML = htmlBuffer;
}

// 3. Graphic Designing Grid (g1.jpg से g50.jpg) लोड करने के लिए फंक्शन
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
