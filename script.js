// DOCUMENT READY CONTROLLER
document.addEventListener("DOMContentLoaded", () => {
    initFastNavigation();
    buildAmazonGallery();
    initSliders();
    applyStrictAntiTheft();
});

// 1. FAST SINGLE-PAGE SECTION SWITCHING (Instant & Accurate)
function initFastNavigation() {
    const links = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".page-section");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            
            // Remove active status from all links
            links.forEach(l => l.classList.remove("active"));
            // Add active to current clicked link
            link.classList.add("active");

            const targetSectionId = link.getAttribute("href").substring(1);

            // Instant switch without breaking coordinates
            sections.forEach(section => {
                if(section.id === targetSectionId) {
                    section.classList.add("active-section");
                } else {
                    section.classList.remove("active-section");
                }
            });

            // Instantly viewport scroll setup straight to top zero position
            window.scrollTo({
                top: 0,
                behavior: "instant"
            });
        });
    });
}

// 2. GENERATE AMAZON STYLE GALLERY THUMBNAILS (g1.jpg to g100.jpg)
function buildAmazonGallery() {
    const grid = document.getElementById("thumbnailsGrid");
    let htmlContent = "";

    for (let i = 1; i <= 100; i++) {
        // Active class only on first item by default
        const isActive = (i === 1) ? "active-thumb" : "";
        htmlContent += `
            <div class="thumb-item ${isActive}" id="thumb-${i}" onclick="switchMainImage('g${i}.jpg', 'Graphic Design Project ${i}', ${i})">
                <img src="g${i}.jpg" alt="Design ${i}" draggable="false">
            </div>
        `;
    }
    grid.innerHTML = htmlContent;
}

// SWITCH MAIN IMAGE (AMAZON STYLE LOGIC)
function switchMainImage(imgSrc, captionText, index) {
    const mainImg = document.getElementById("amazonMainView");
    const caption = document.getElementById("imageCaption");
    
    mainImg.style.opacity = "0.3";
    
    setTimeout(() => {
        mainImg.src = imgSrc;
        caption.innerText = captionText;
        mainImg.style.opacity = "1";
    }, 150);

    // Update active border style on thumbnails
    document.querySelectorAll(".thumb-item").forEach(item => {
        item.classList.remove("active-thumb");
    });
    const selectedThumb = document.getElementById(`thumb-${index}`);
    if(selectedThumb) {
        selectedThumb.classList.add("active-thumb");
    }
}

// 3. CAROUSEL SLIDERS GENERATION & LOGIC (Graphic 1-10 vs AI 1-10)
const sliderPositions = {
    graphicSlider: 0,
    aiSlider: 0
};

function initSliders() {
    const graphicSlider = document.getElementById("graphicSlider");
    const aiSlider = document.getElementById("aiSlider");

    let graphicSlidesHTML = "";
    let aiSlidesHTML = "";

    // Generate exactly 10 slides for both sliders side-by-side
    for (let i = 1; i <= 10; i++) {
        graphicSlidesHTML += `
            <div class="slide">
                <div class="secure-image-layer"></div>
                <img src="g${i}.jpg" alt="Graphic Design Slide ${i}" draggable="false">
            </div>
        `;
        aiSlidesHTML += `
            <div class="slide">
                <div class="secure-image-layer"></div>
                <img src="ai${i}.png" alt="AI Visual Slide ${i}" draggable="false">
            </div>
        `;
    }

    graphicSlider.innerHTML = graphicSlidesHTML;
    aiSlider.innerHTML = aiSlidesHTML;
}

function moveSlide(sliderId, direction) {
    const slider = document.getElementById(sliderId);
    const totalSlides = 10;
    
    let currentPos = sliderPositions[sliderId];
    currentPos += direction;

    // Loop sliders around infinitely
    if (currentPos >= totalSlides) {
        currentPos = 0;
    } else if (currentPos < 0) {
        currentPos = totalSlides - 1;
    }

    sliderPositions[sliderId] = currentPos;
    slider.style.transform = `translateX(-${currentPos * 100}%)`;
}

// 4. AMAZON SEARCH SYSTEM LOGIC
function searchGallery() {
    const input = document.getElementById("gallerySearch").value.toLowerCase();
    const thumbs = document.querySelectorAll(".thumb-item");

    thumbs.forEach((thumb, idx) => {
        const indexNum = idx + 1;
        // Search matches based on item number or custom keywords
        const itemKeyword = `g${indexNum} project design burger work art item`;
        
        if (itemKeyword.includes(input) || input === "") {
            thumb.classList.remove("hidden-thumb");
        } else {
            thumb.classList.add("hidden-thumb");
        }
    });
}

// 5. MAXIMUM 100% SECURITY & ANTI-DOWNLOAD CODES
function applyStrictAntiTheft() {
    // Block standard keyboard shortcut hacks
    document.addEventListener("keydown", (e) => {
        if (
            e.keyCode === 123 || // F12 Key
            (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I (Inspect)
            (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J (Console)
            (e.ctrlKey && e.keyCode === 85) || // Ctrl+U (View Source)
            (e.ctrlKey && e.keyCode === 83)    // Ctrl+S (Save Webpage)
        ) {
            e.preventDefault();
            return false;
        }
    });

    // Disable dragging elements
    document.addEventListener("dragstart", (e) => {
        if (e.target.nodeName === "IMG") {
            e.preventDefault();
        }
    });
}
