// MULTI-FUNCTION PROTOCOL INTEGRATION ENGINE
document.addEventListener("DOMContentLoaded", () => {
    initScrollSystem();
    buildAmazonTrueGrid();
    initAutoSliderEngine();
    armSystemSecurity();
});

// 1. NAVIGATION HIGHLIGHT AND SCROLL MONITOR
function initScrollSystem() {
    const links = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".page-section");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetHash = link.getAttribute("href");
            const targetSection = document.querySelector(targetHash);
            
            if(targetSection) {
                const navBarHeight = 70;
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navBarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    window.addEventListener("scroll", () => {
        let activeId = "home";
        sections.forEach(sec => {
            const topOffset = sec.offsetTop - 85;
            if(window.pageYOffset >= topOffset) {
                activeId = sec.getAttribute("id");
            }
        });

        links.forEach(l => {
            l.classList.remove("active");
            if(l.getAttribute("href") === `#${activeId}`) {
                l.classList.add("active");
            }
        });
    });
}

// 2. GENERATE 100 CARD MODULES IN THE SERVICES GRID
function buildAmazonTrueGrid() {
    const gridContainer = document.getElementById("amazonGridEngine");
    let domBuffer = "";

    for (let count = 1; count <= 100; count++) {
        domBuffer += `
            <div class="amazon-product-card-node" id="card-item-${count}" onclick="openLightbox('g${count}.jpg', 'Graphic Production Layout Template #${count}')">
                <div class="card-image-box-frame">
                    <img src="g${count}.jpg" alt="Graphic Design Showcase Item ${count}" draggable="false" onerror="this.parentNode.style.backgroundColor='#1a1f2c'">
                </div>
                <div class="card-title-string">Graphic Production Layout Template #${count}</div>
                <div class="card-badge-row">
                    <span>Identity Suite</span>
                    <span class="verified-tag"><i class="fas fa-circle-check"></i> Active</span>
                </div>
            </div>
        `;
    }
    gridContainer.innerHTML = domBuffer;
}

// 3. HD LIGHTBOX INTERACTION CONTROLLER (Click to show full image)
function openLightbox(imgSrc, captionText) {
    const modal = document.getElementById("imageLightboxModal");
    const modalImg = document.getElementById("lightboxMainImage");
    const modalCaption = document.getElementById("lightboxCaption");

    modal.style.display = "flex";
    modalImg.src = imgSrc;
    modalCaption.innerText = captionText;
}

function closeLightbox() {
    document.getElementById("imageLightboxModal").style.display = "none";
}

// 4. BALANCED AUTO PLAY INTERVAL THREADS (3000ms loop Cycles)
const trackerIndices = { graphicTrack: 0, aiTrack: 0 };
let threadIntervals = [];

function initAutoSliderEngine() {
    const graphicTrack = document.getElementById("graphicTrack");
    const aiTrack = document.getElementById("aiTrack");

    let gStreamHTML = "";
    let aStreamHTML = "";

    for (let i = 1; i <= 10; i++) {
        gStreamHTML += `
            <div class="stream-slide">
                <img src="g${i}.jpg" alt="Graphic Artwork Slide ${i}" draggable="false">
            </div>
        `;
        aStreamHTML += `
            <div class="stream-slide">
                <img src="ai${i}.png" alt="AI Generated Visual Slide ${i}" draggable="false">
            </div>
        `;
    }
    graphicTrack.innerHTML = gStreamHTML;
    aiTrack.innerHTML = aStreamHTML;

    threadIntervals.push(setInterval(() => { performCycleShift('graphicTrack'); }, 3000));
    threadIntervals.push(setInterval(() => { performCycleShift('aiTrack'); }, 3000));
}

function performCycleShift(trackId) {
    shiftTrackPosition(trackId, 1);
}

function manualShift(trackId, vector) {
    threadIntervals.forEach(clearInterval);
    threadIntervals = [];

    shiftTrackPosition(trackId, vector);

    threadIntervals.push(setInterval(() => { performCycleShift('graphicTrack'); }, 3000));
    threadIntervals.push(setInterval(() => { performCycleShift('aiTrack'); }, 3000));
}

function shiftTrackPosition(trackId, vector) {
    const targetTrackDOM = document.getElementById(trackId);
    let pointer = trackerIndices[trackId];
    
    pointer += vector;

    if (pointer >= 10) { pointer = 0; }
    else if (pointer < 0) { pointer = 9; }

    trackerIndices[trackId] = pointer;
    targetTrackDOM.style.transform = `translateX(-${pointer * 100}%)`;
}

// 5. GLOBAL SEARCH ENGINE CONTROL
function searchAndFocusGallery() {
    const userQuery = document.getElementById("gallerySearch").value.toLowerCase();
    const cards = document.querySelectorAll(".amazon-product-card-node");
    const targetSection = document.getElementById("services");

    if(userQuery !== "") {
        const navOffset = 70;
        const targetCoords = targetSection.getBoundingClientRect().top + window.pageYOffset - navOffset;
        window.scrollTo({ top: targetCoords, behavior: "smooth" });
    }

    cards.forEach((card, index) => {
        const indexNumber = index + 1;
        const contextMetaTags = `g${indexNumber} burger design layout project identity asset artwork visual frame cover element`;
        
        if(contextMetaTags.includes(userQuery) || userQuery === "") {
            card.classList.remove("filtered-out");
        } else {
            card.classList.add("filtered-out");
        }
    });
}

// 6. HOTKEY SECURITY MECHANISM
function armSystemSecurity() {
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
