// INTERACTIVE ENGINE CORE INITIALIZER
document.addEventListener("DOMContentLoaded", () => {
    initSPAEngine();
    generateAmazonGrid();
    setupDualCarousels();
    installSecurityShields();
});

// 1. FAST SINGLE PAGE APPLICATION CONTROLLER
function initSPAEngine() {
    const menus = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".page-section");

    menus.forEach(menu => {
        menu.addEventListener("click", (event) => {
            event.preventDefault();
            
            menus.forEach(m => m.classList.remove("active"));
            menu.classList.add("active");

            const hashTarget = menu.getAttribute("href").substring(1);
            
            sections.forEach(sec => {
                if(sec.id === hashTarget) {
                    sec.classList.add("active-section");
                } else {
                    sec.classList.remove("active-section");
                }
            });

            // Instant reset to standard viewport coordinates
            window.scrollTo({ top: 0, behavior: "instant" });
        });
    });
}

// ROUTING SHORTCUT FOR HOME BUTTONS
function switchSection(targetId) {
    const targetMenu = document.querySelector(`.nav-link[href="#${targetId}"]`);
    if(targetMenu) {
        targetMenu.click();
    }
}

// 2. AMAZON MATRIX GALLERY GENERATION (1 to 100 Iterations)
function generateAmazonGrid() {
    const rowContainer = document.getElementById("asyncThumbGrid");
    let domBuffer = "";

    for (let index = 1; index <= 100; index++) {
        const structuralClass = (index === 1) ? "box-thumb selected-border" : "box-thumb";
        domBuffer += `
            <div class="${structuralClass}" id="matrix-thumb-${index}" onclick="renderStageView('g${index}.jpg', 'Graphic Design Project ${index}', ${index})">
                <img src="g${index}.jpg" alt="Work Bundle ${index}" draggable="false">
            </div>
        `;
    }
    rowContainer.innerHTML = domBuffer;
}

// UPDATE BIG PICTURE DISPLAYS ON CLICK
function renderStageView(fileSrc, textTitle, referenceKey) {
    const viewImg = document.getElementById("mainStageImage");
    const textNode = document.getElementById("stageCaption");
    
    viewImg.style.opacity = "0.2";
    
    setTimeout(() => {
        viewImg.src = fileSrc;
        textNode.innerText = textTitle;
        viewImg.style.opacity = "1";
    }, 120);

    document.querySelectorAll(".box-thumb").forEach(element => {
        element.classList.remove("selected-border");
    });
    
    const targetThumb = document.getElementById(`matrix-thumb-${referenceKey}`);
    if(targetThumb) {
        targetThumb.classList.add("selected-border");
    }
}

// 3. GENERATE SIDE-BY-SIDE CAROUSEL SLIDES (10 Slides Each)
const globalTrackIndex = { graphicTrack: 0, aiTrack: 0 };

function setupDualCarousels() {
    const graphicTrack = document.getElementById("graphicTrack");
    const aiTrack = document.getElementById("aiTrack");

    let graphicBuffer = "";
    let aiBuffer = "";

    for (let currentItem = 1; currentItem <= 10; currentItem++) {
        graphicBuffer += `
            <div class="carousel-slide">
                <div class="anti-click-shield"></div>
                <img src="g${currentItem}.jpg" alt="Graphic Slide ${currentItem}" draggable="false">
            </div>
        `;
        aiBuffer += `
            <div class="carousel-slide">
                <div class="anti-click-shield"></div>
                <img src="ai${currentItem}.png" alt="AI Concept Slide ${currentItem}" draggable="false">
            </div>
        `;
    }

    graphicTrack.innerHTML = graphicBuffer;
    aiTrack.innerHTML = aiBuffer;
}

function shiftSlide(trackElementId, vectorDirection) {
    const trackDOM = document.getElementById(trackElementId);
    let indexPointer = globalTrackIndex[trackElementId];
    
    indexPointer += vectorDirection;

    if (indexPointer >= 10) { indexPointer = 0; }
    else if (indexPointer < 0) { indexPointer = 9; }

    globalTrackIndex[trackElementId] = indexPointer;
    trackDOM.style.transform = `translateX(-${indexPointer * 100}%)`;
}

// 4. NAVBAR REAL-TIME LIVE SEARCH FILTER SYSTEM
function searchGallery() {
    const queryInput = document.getElementById("gallerySearch").value.toLowerCase();
    const allThumbs = document.querySelectorAll(".box-thumb");

    allThumbs.forEach((thumbnailBox, serialIndex) => {
        const itemNumber = serialIndex + 1;
        // Build internal context for flexible strings evaluation
        const internalMetaString = `g${itemNumber} project design item banner art layout showcase work collection burger photo graphic`;
        
        if (internalMetaString.includes(queryInput) || queryInput === "") {
            thumbnailBox.classList.remove("filter-hide");
        } else {
            thumbnailBox.classList.add("filter-hide");
        }
    });
}

// 5. MAX STABILITY PROTECTION (BLOCK HARMFUL KEYS & DRAGS)
function installSecurityShields() {
    document.addEventListener("keydown", (event) => {
        if (
            event.keyCode === 123 || // F12 Key Close
            (event.ctrlKey && event.shiftKey && event.keyCode === 73) || // Inspect Element Window Close
            (event.ctrlKey && event.keyCode === 85) || // View Source Block
            (event.ctrlKey && event.keyCode === 83)    // Save Webpage Block
        ) {
            event.preventDefault();
            return false;
        }
    });

    document.addEventListener("dragstart", (event) => {
        if (event.target.nodeName === "IMG") {
            event.preventDefault();
        }
    });
}
