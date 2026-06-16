document.addEventListener("DOMContentLoaded", () => {
    buildPortfolioGrid();
});

// g1.jpg से g50.jpg तक इमेज लोड करने के लिए फंक्शन
function buildPortfolioGrid() {
    const gridContainer = document.getElementById("graphicDynamicGrid");
    if (!gridContainer) return;
    let domBuffer = "";

    // g1 से g50 तक 50 आइटम
    for (let i = 1; i <= 50; i++) {
        domBuffer += `
            <div class="original-portfolio-dark-frame">
                <div class="grid-card-image-wrapper">
                    <img src="g${i}.jpg" alt="Graphic Design g${i}" onerror="this.src='default_graphic.jpg'">
                </div>
                <h4 class="grid-card-title">Graphic Design g${i}</h4>
                <div class="grid-card-price">₹89</div>
            </div>
        `;
    }
    gridContainer.innerHTML = domBuffer;
}
