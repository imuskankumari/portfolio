// EXECUTION MATRIX CONTROL ENGINE
document.addEventListener("DOMContentLoaded", () => {
    initScrollSpyEngine();
    buildAmazonShowcaseGrid();
    startAutomaticCarousels();
    lockSecurityShields();
});

// 1. SMART SCROLL NAVIGATION ENGINE (Makkhan Scrolling & Sync Highlight)
function initScrollSpyEngine() {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".page-section");

    // Click to scroll setup smooth
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const destinationId = link.getAttribute("href");
            const destinationSection = document.querySelector(destinationId);
            
            if(destinationSection) {
                const navHeight = 75;
                const elementPosition = destinationSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Auto update Nav links state based on scroll coordinates
    window.addEventListener("scroll", () => {
        let currentActiveSectionId = "";
        sections.forEach(sec => {
            const sectionTop = sec.offsetTop - 90;
            if (window.pageYOffset >= sectionTop) {
                currentActiveSectionId = sec.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentActiveSectionId}`) {
                link.classList.add("active");
            }
        });
    });
}

// 2. GENERATE 100 AMAZON THUMBNAILS (g1.jpg to g100.jpg)
function buildAmazonShowcaseGrid() {
    const stripContainer = document.getElementById("thumbnailsStrip");
    let htmlBuffer = "";

    for (let count = 1; count <= 100; count++) {
        const structuralClass = (count === 1) ? "box-thumb-node active-selected" : "box-thumb-node";
        htmlBuffer += `
            <div class="${structuralClass}" id="node-thumb-${count}" onclick="swapStageDisplay('g${count}.jpg', 'Graphic Design Project ${count}', ${count})">
                <img src="g${count}.jpg" alt="Asset Unit ${count}" draggable="false">
            </div>
        `;
    }
    stripContainer.innerHTML = htmlBuffer;
}

function swapStageDisplay(imgSource, textTitle, serialID) {
    const stageImage = document.getElementById("mainStageImage");
    const stageCaption = document.getElementById("stageCaption");
    
    stageImage.style.opacity = "0.2";
    
    setTimeout(() => {
        stageImage.src = imgSource;
        stageCaption.innerText = textTitle;
        stageImage.style.opacity = "1";
    }, 100);

    document.querySelectorAll(".box-thumb-node").forEach(box => {
        box.classList.remove("active-selected");
    });
    
    const targetedBox = document.getElementById(`node-thumb-${serialID}`);
    if(targetedBox) {
        targetedBox.classList.add("active-selected");
    }
}

// 3. AUTOMATIC TIMED CAROUSELS (Auto-runs 10 images continuously)
const carouselIndices = { graphicTrack: 0, aiTrack: 0 };
let automatedIntervals = [];

function startAutomaticCarousels() {
    const graphicTrack = document.getElementById("graphicTrack");
    const aiTrack = document.getElementById("aiTrack");

    let gBuffer = "";
    let aBuffer = "";

    // Load precisely 10 items into the tracks
    for (let index = 1; index <= 10; index++) {
        gBuffer += `
            <div class="stream-slide">
                <div class="security-transparent-shield"></div>
                <img src="g${index}.jpg" alt="Production Work ${index}" draggable="false">
            </div>
        `;
        aBuffer += `
            <div class="stream-slide">
                <div class="security-transparent-shield"></div>
                <img src="ai${index}.png" alt="AI Visual Concept ${index}" draggable="false">
            </div>
        `;
    }
    graphicTrack.innerHTML = gBuffer;
    aiTrack.innerHTML = aBuffer;

    // Set Up Auto Play loops ticking every 3 seconds instantly
    automatedIntervals.push(setInterval(() => { automaticShiftLoop('graphicTrack'); }, 3000));
    automatedIntervals.push(setInterval(() => { automaticShiftLoop('aiTrack'); }, 3000));
}

function automaticShiftLoop(trackId) {
    executeShift(trackId, 1);
}

function manualShift(trackId, direction) {
    // Reset timers on click to avoid double skipping jumps
    automatedIntervals.forEach(clearInterval);
    automatedIntervals = [];
    
    executeShift(trackId, direction);
    
    // Resume background automatic rolling cycles
    automatedIntervals.push(setInterval(() => { automaticShiftLoop('graphicTrack'); }, 3000));
    automatedIntervals.push(setInterval(() => { automaticShiftLoop('aiTrack'); }, 3000));
}

function executeShift(trackId, vector) {
    const trackDOM = document.getElementById(trackId);
    let pointer = carouselIndices[trackId];
    
    pointer += vector;

    if (pointer >= 10) { pointer = 0; }
    else if (pointer < 0) { pointer = 9; }

    carouselIndices[trackId] = pointer;
    trackDOM.style.transform = `translateX(-${pointer * 100}%)`;
}

// 4. NAVBAR LIVE ACTION GLOBAL SEARCH PROTOCOL (Fixed & Working)
function searchAndFocusGallery() {
    const searchString = document.getElementById("gallerySearch").value.toLowerCase();
    const portfolioNodes = document.querySelectorAll(".box-thumb-node");
    const servicesSection = document.getElementById("services");

    // CRITICAL FIX: Instantly scrolls viewport down to Services Section so user can see search results live!
    if(searchString !== "") {
        const navOffsetY = 75;
        const targetCoords = servicesSection.getBoundingClientRect().top + window.pageYOffset - navOffsetY;
        window.scrollTo({ top: targetCoords, behavior: "smooth" });
    }

    portfolioNodes.forEach((node, idx) => {
        const itemNumber = idx + 1;
        // Matches input keyword strings
        const evaluationMeta = `g${itemNumber} burger logo design website project asset artwork frame element work production`;
        
        if (evaluationMeta.includes(searchString) || searchString === "") {
            node.classList.remove("search-filtered-out");
        } else {
            node.classList.add("search-filtered-out");
        }
    });
}

// 5. SECURE SYSTEM LOCKS (Disable hotkeys inspect element triggers)
function lockSecurityShields() {
    document.addEventListener("keydown", (e) => {
        if (
            e.keyCode === 123 || 
            (e.ctrlKey && e.shiftKey && e.keyCode === 73) || 
            (e.ctrlKey && e.keyCode === 85) || 
            (e.ctrlKey && e.keyCode === 83)
        ) {
            e.preventDefault();
            return false;
        }
    });

    document.addEventListener("dragstart", (e) => {
        if (e.target.nodeName === "IMG") { e.preventDefault(); }
    });
}
