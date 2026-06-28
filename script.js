document.addEventListener("DOMContentLoaded", () => {
    initializeWordpressGallery();
    initializeMotionReels();
    preventContentTheft();
});

function initializeWordpressGallery() {
    const gridContainer = document.getElementById("wordpressFilterGrid");
    if (!gridContainer) return;

    let galleryHTML = "";

    // 1. Photoshop Category Assets (10 Files)
    for (let i = 1; i <= 10; i++) {
        galleryHTML += createGalleryItemHTML('photoshop', `p${i}.jpg`, `Photoshop Artwork ${i}`);
    }

    // 2. Illustrator Category Assets (10 Files)
    for (let i = 1; i <= 10; i++) {
        galleryHTML += createGalleryItemHTML('illustrator', `i${i}.jpg`, `Vector Asset ${i}`);
    }

    // 3. InDesign Category Assets (10 Files)
    for (let i = 1; i <= 10; i++) {
        galleryHTML += createGalleryItemHTML('indesign', `id${i}.jpg`, `Layout Print ${i}`);
    }

    // 4. CorelDraw Category Assets (10 Files)
    for (let i = 1; i <= 10; i++) {
        galleryHTML += createGalleryItemHTML('coreldraw', `c${i}.jpg`, `Corel Artwork ${i}`);
    }

    // 5. Canva Category Assets (10 Files)
    for (let i = 1; i <= 10; i++) {
        galleryHTML += createGalleryItemHTML('canva', `ca${i}.jpg`, `Canva Graphics ${i}`);
    }

    // 6. AI Generated Category Assets (10 Files, Extension: .png)
    for (let i = 1; i <= 10; i++) {
        galleryHTML += createGalleryItemHTML('ai', `g${i}.png`, `AI Generated Visual ${i}`);
    }

    gridContainer.innerHTML = galleryHTML;

    // Filter Buttons Logics
    const filterButtons = document.querySelectorAll(".filter-tab-btn");
    const galleryCards = document.querySelectorAll(".gallery-card-unit");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const targetedFilter = button.getAttribute("data-filter");

            galleryCards.forEach(card => {
                if (targetedFilter === "all" || card.getAttribute("data-category") === targetedFilter) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });
        });
    });
}

function createGalleryItemHTML(category, sourceFile, titleText) {
    return `
        <div class="gallery-card-unit" data-category="${category}">
            <div class="portfolio-img-bound">
                <img src="${sourceFile}" alt="${titleText}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop&q=60'">
            </div>
            <div class="portfolio-meta-row">
                <strong>${titleText}</strong>
                <span>${category}</span>
            </div>
        </div>
    `;
}

function initializeMotionReels() {
    const track = document.getElementById("reelsAccordionTrack");
    if (!track) return;

    let accordionHTML = "";
    const totalReelsCount = 12;

    for (let i = 1; i <= totalReelsCount; i++) {
        accordionHTML += `
            <div class="reel-item-frame ${i === 1 ? 'expanded' : ''}">
                <video src="r${i}.mp4" loop muted playsinline></video>
                <button class="reel-audio-control-btn"><i class="fas fa-volume-mute"></i></button>
            </div>
        `;
    }
    track.innerHTML = accordionHTML;

    const allReelFrames = document.querySelectorAll('.reel-item-frame');

    allReelFrames.forEach(frame => {
        const videoElement = frame.querySelector('video');
        const muteButton = frame.querySelector('.reel-audio-control-btn');
        const muteIcon = muteButton.querySelector('i');

        // Auto play first frame video initially
        if (frame.classList.contains('expanded') && videoElement) {
            videoElement.play().catch(() => {});
        }

        frame.addEventListener('mouseenter', () => {
            allReelFrames.forEach(f => {
                f.classList.remove('expanded');
                const v = f.querySelector('video');
                if (v) {
                    v.pause();
                    v.currentTime = 0;
                }
            });

            frame.classList.add('expanded');
            if (videoElement) {
                videoElement.play().catch(() => {});
            }
        });

        muteButton.addEventListener('click', (event) => {
            event.stopPropagation();
            if (!videoElement) return;

            if (videoElement.muted) {
                videoElement.muted = false;
                muteIcon.className = "fas fa-volume-up";
            } else {
                videoElement.muted = true;
                muteIcon.className = "fas fa-volume-mute";
            }
        });
    });
}

function preventContentTheft() {
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('dragstart', e => {
        if (e.target.nodeName === 'IMG' || e.target.nodeName === 'VIDEO') e.preventDefault();
    });
}
