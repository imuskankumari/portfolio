document.addEventListener("DOMContentLoaded", () => {
    buildWordPressFilterableGallery();
    buildInteractiveAudioReels();
    applyStrictAssetProtection();
});

// گیلری آئٹمز رینڈر کرنے کا فنکشن (3 کالم گرڈ)
function buildWordPressFilterableGallery() {
    const targetGrid = document.getElementById("wordpressFilterGrid");
    if (!targetGrid) return;

    let totalGridHTML = "";

    // 1. Graphic Designing (g1.jpg سے g50.jpg)
    for (let i = 1; i <= 50; i++) {
        totalGridHTML += generateItemCardMarkup('graphic', `g${i}.jpg`, `Graphic Project ${i}`);
    }

    // 2. Website Designing (w1.jpg سے w10.jpg)
    for (let i = 1; i <= 10; i++) {
        totalGridHTML += generateItemCardMarkup('web', `w${i}.jpg`, `Website Design ${i}`);
    }

    // 3. Social Media Post (s1.jpg سے s10.jpg)
    for (let i = 1; i <= 10; i++) {
        totalGridHTML += generateItemCardMarkup('social', `s${i}.jpg`, `Social Graphics ${i}`);
    }

    // 4. AI Generated Visuals (a1.jpg سے a10.jpg)
    for (let i = 1; i <= 10; i++) {
        totalGridHTML += generateItemCardMarkup('ai', `a${i}.jpg`, `AI Digital Art ${i}`);
    }

    targetGrid.innerHTML = totalGridHTML;

    const filterTabs = document.querySelectorAll(".filter-tab-btn");
    const structuralCards = document.querySelectorAll(".gallery-card-unit");

    filterTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            filterTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const targetedCategory = tab.getAttribute("data-filter");

            structuralCards.forEach(card => {
                if (targetedCategory === "all" || card.getAttribute("data-category") === targetedCategory) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });
        });
    });
}

function generateItemCardMarkup(categoryKey, imagePath, displayTitle) {
    let tagText = categoryKey;
    if (categoryKey === 'graphic') tagText = 'Graphic';
    if (categoryKey === 'web') tagText = 'Web Design';
    if (categoryKey === 'social') tagText = 'Social Post';
    if (categoryKey === 'ai') tagText = 'AI Visual';

    return `
        <div class="gallery-card-unit" data-category="${categoryKey}">
            <div class="portfolio-img-bound">
                <img src="${imagePath}" alt="${displayTitle}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop&q=60'">
            </div>
            <div class="portfolio-meta-row">
                <strong>${displayTitle}</strong>
                <span>${tagText}</span>
            </div>
        </div>
    `;
}

// 12 ویڈیوز کے لیے انٹرایکٹو ایکورڈین ٹریک
function buildInteractiveAudioReels() {
    const accordionContainer = document.getElementById("reelsAccordionTrack");
    if (!accordionContainer) return;

    let accordionMarkup = "";
    const activeReelsTotal = 12;

    for (let i = 1; i <= activeReelsTotal; i++) {
        accordionMarkup += `
            <div class="reel-item-frame ${i === 1 ? 'expanded' : ''}">
                <video src="r${i}.mp4" loop muted playsinline></video>
                <button class="reel-audio-control-btn"><i class="fas fa-volume-mute"></i></button>
            </div>
        `;
    }
    accordionContainer.innerHTML = accordionMarkup;

    const allActiveFrames = document.querySelectorAll('.reel-item-frame');

    allActiveFrames.forEach(frame => {
        const structuralVideo = frame.querySelector('video');
        const muteTrigger = frame.querySelector('.reel-audio-control-btn');
        const controlIcon = muteTrigger.querySelector('i');

        if (frame.classList.contains('expanded') && structuralVideo) {
            structuralVideo.play().catch(() => {});
        }

        frame.addEventListener('mouseenter', () => {
            allActiveFrames.forEach(f => {
                f.classList.remove('expanded');
                const v = f.querySelector('video');
                if (v) {
                    v.pause();
                    v.currentTime = 0;
                }
            });

            frame.classList.add('expanded');
            if (structuralVideo) {
                structuralVideo.play().catch(() => {});
            }
        });

        muteTrigger.addEventListener('click', (clickEvent) => {
            clickEvent.stopPropagation();
            if (!structuralVideo) return;

            if (structuralVideo.muted) {
                structuralVideo.muted = false;
                controlIcon.className = "fas fa-volume-up";
            } else {
                structuralVideo.muted = true;
                controlIcon.className = "fas fa-volume-mute";
            }
        });
    });
}

// پروٹیکشن لیئر (رائٹ کلک بلاک)
function applyStrictAssetProtection() {
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('dragstart', e => {
        if (e.target.nodeName === 'IMG' || e.target.nodeName === 'VIDEO') e.preventDefault();
    });
}

