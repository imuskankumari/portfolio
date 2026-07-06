/* SYMMETRIC CANVASES & BREATHING SPACE */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #ffffff;
    color: #222222;
    scroll-behavior: smooth;
    overflow-x: hidden;
}

/* Forces exactly 10-12% elegant margins spacing on both sides */
.container {
    width: 84%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 70px 0;
}

.container.compact-width {
    max-width: 1000px;
}

/* MK TALL HIGH-VISIBILITY HEADER (100px Size) */
.main-header {
    width: 100%;
    background: #ffffff;
    position: sticky;
    top: 0;
    z-index: 2500;
    border-bottom: 1px solid #f0f0f0;
}

.header-container {
    max-width: 1200px;
    width: 86%;
    margin: 0 auto;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}

.header-logo-group {
    display: flex;
    align-items: center;
}

.site-logo {
    height: 65px; /* Large professional size logo */
    width: auto;
    object-fit: contain;
    display: block;
}

.nav-links {
    display: flex;
    align-items: center;
}

.nav-links a {
    text-decoration: none;
    color: #111111;
    margin-left: 45px;
    font-size: 1.2rem;
    font-weight: 700;
    transition: color 0.2s ease;
}

.nav-links a:hover { color: #ff6600; }

.header-deco-line {
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, transparent, #ff6600, transparent);
}

/* MOBILE RESPONSIVE HAMBURGER NAVIGATION (☰ Layout Engine) */
.mobile-nav-toggle {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 2600;
}

.mobile-nav-toggle span {
    width: 100%;
    height: 3px;
    background-color: #111111;
    border-radius: 2px;
    transition: all 0.3s ease-in-out;
}

@media (max-width: 768px) {
    .mobile-nav-toggle {
        display: flex;
    }
    
    .nav-links {
        position: fixed;
        top: 100px;
        right: -100%;
        width: 100%;
        height: calc(100vh - 100px);
        background-color: rgba(255, 255, 255, 0.99);
        backdrop-filter: blur(15px);
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 60px;
        gap: 35px;
        transition: right 0.3s ease-in-out;
        box-shadow: 0 15px 20px rgba(0,0,0,0.05);
    }
    
    .nav-links.mobile-active {
        right: 0;
    }
    
    .nav-links a {
        margin-left: 0;
        font-size: 1.4rem;
    }

    .mobile-nav-toggle.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 6px); }
    .mobile-nav-toggle.open span:nth-child(2) { opacity: 0; }
    .mobile-nav-toggle.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -6px); }
}

/* HERO STRIP CONFIGS */
.hero-section {
    width: 100%;
    margin: 0;
    padding: 0;
    line-height: 0;
}

.hero-fluid-img {
    width: 100%;
    height: auto;
    max-height: 600px;
    object-fit: cover;
    display: block;
}

/* ORANGE THEME GRAPHICS DISPLAY HEADINGS */
.welcome-heading, .section-heading, .contact-main-title {
    text-align: center;
    font-size: 2.6rem;
    font-weight: 800;
    color: #ff6600;
}

.about-deco-separator, .contact-deco-separator {
    width: 100px;
    height: 3px;
    background: #ff6600;
    margin: 15px auto 45px auto;
}

/* ABOUT LAYOUT STRUCTURE: SPLIT COLUMN SENSING */
.about-section {
    background: #ffffff;
    padding: 40px 0;
}

.about-split-layout {
    display: flex;
    gap: 50px;
    align-items: center;
}

@media(max-width: 900px) {
    .about-split-layout { flex-direction: column; text-align: center; }
}

.about-left-content {
    flex: 1.4;
}

.pyramid-text-wrapper {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
}

.pyramid-text-wrapper p {
    line-height: 1.8;
    margin-bottom: 8px;
    color: #333333;
}

.pyramid-l1 { font-size: 1.35rem; font-weight: 700; }
.pyramid-l2 { font-size: 1.15rem; max-width: 850px; color: #555 !important; }
.pyramid-l3 { font-size: 1.25rem; font-weight: 700; margin-top: 6px; }
.pyramid-l4 { font-size: 1.15rem; }

/* CLEAN EDUCATION LAYOUT SYSTEM (No boxes borders) */
.academic-clean-text {
    border-top: 1px dashed #eaeaea;
    padding-top: 30px;
    text-align: left;
}

@media(max-width: 900px) { .academic-clean-text { text-align: center; } }

.academic-clean-text h3 {
    font-size: 1.4rem;
    margin-bottom: 15px;
    color: #111;
    font-weight: 700;
}

.edu-line {
    font-size: 1.05rem;
    line-height: 1.7;
    margin-bottom: 8px;
    color: #555;
    position: relative;
    padding-left: 20px;
}

@media(max-width: 900px) { .edu-line { padding-left: 0; } }

.edu-line::before {
    content: "➔";
    position: absolute;
    left: 0;
    color: #ff6600;
}

@media(max-width: 900px) { .edu-line::before { display: none; } }

.about-right-photo {
    flex: 1;
    display: flex;
    justify-content: center;
}

.profile-image-fluid {
    width: 100%;
    max-width: 360px;
    height: auto;
    border-radius: 12px;
}

/* FIXED DRIBBBLE STYLE 3-COLUMN IMAGE GALLERY GRIDS WITHOUT EXTRA SPACES */
.services-section { background: #ffffff; }
.filter-tabs { display: flex; justify-content: center; gap: 15px; margin-bottom: 45px; flex-wrap: wrap; }

.tab-btn {
    padding: 12px 24px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    cursor: pointer;
    font-weight: 700;
    font-size: 1rem;
    border-radius: 4px;
}
.tab-btn.active, .tab-btn:hover { background: #ff6600; color: #ffffff; border-color: #ff6600; }

.dribbble-grid-layout {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 Grid items column stream alignment */
    gap: 35px;
    width: 100%;
}

@media(max-width: 992px) { .dribbble-grid-layout { grid-template-columns: repeat(2, 1fr); } }
@media(max-width: 600px) { .dribbble-grid-layout { grid-template-columns: 1fr; gap: 25px; } }

.dribbble-item-card { background: transparent; cursor: pointer; }

/* REELS CORNER RADIUS MAPPING WITHOUT OUTSIDE EXTRANEOUS FLAPS */
.dribbble-img-frame { 
    width: 100%; 
    aspect-ratio: 4 / 3; 
    overflow: hidden; 
    background: #ffffff; 
    border-radius: 12px; /* Outside Rounded Framing */
    position: relative;
    border: 1px solid #eaeaea;
}

.dribbble-item-card img, .dribbble-item-card video { 
    width: 100%; 
    height: 100%; 
    object-fit: contain; /* Preserves entire graphic contents without container cropping */
    border-radius: 12px;
    transition: transform 0.25s ease;
    display: block;
}

.dribbble-item-card:hover img { transform: scale(1.03); }

.dribbble-meta-row { display: flex; justify-content: space-between; align-items: center; padding: 12px 4px; }
.dribbble-user { display: flex; align-items: center; gap: 8px; }
.dribbble-avatar { width: 24px; height: 24px; background: #ff6600; color: #fff; border-radius: 50%; font-size: 0.75rem; font-weight: 700; display: flex; align-items: center; justify-content: center; }
.dribbble-username { font-size: 0.95rem; font-weight: 700; color: #333; }
.dribbble-stats { display: flex; gap: 12px; font-size: 0.85rem; color: #666; font-weight: 600; }
.video-reel-tag { position: absolute; top: 12px; right: 12px; background: rgba(0,0,0,0.75); color: #fff; padding: 3px 8px; border-radius: 4px; font-size: 0.7rem; font-weight: 700; }

/* HEARTS REAL LIKING VALUES (Zero grey backgrounds color panels) */
.like-click-node { cursor: pointer; transition: color 0.15s ease; }
.like-click-node.activated i { color: #e74c3c !important; }

/* 17952.JPG EXACT REPLICATED "OUR CORE VALUES" LAYOUT FOR SKILLS BLOCK */
.skills-tech-stack-section {
    background: #ffffff;
    padding: 50px 0;
    border-top: 1px solid #fcfcfc;
}

.tech-cards-grid-layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); /* Clean modular mapping grid structure */
    gap: 25px;
    width: 100%;
}

/* White Box Card Model copy from Image 17952.jpg specs rules */
.value-card-item {
    background: #ffffff;
    border: 1px solid #eaeaea;
    padding: 30px 20px;
    border-radius: 8px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 20px rgba(0,0,0,0.01);
    transition: transform 0.2s, box-shadow 0.2s;
}

.value-card-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.04);
}

.value-card-item img {
    height: 48px; /* High fidelity software logo dimension */
    width: auto;
    object-fit: contain;
    margin-bottom: 15px;
    display: block;
}

.value-card-item h4 {
    font-size: 1.15rem;
    font-weight: 700;
    color: #111111;
    margin-bottom: 8px;
    font-family: 'Playfair Display', serif;
}

.value-card-item p {
    font-size: 0.85rem;
    line-height: 1.6;
    color: #666666;
    font-family: 'Segoe UI', Arial, sans-serif;
}

/* CONNECT WITH US HUB SECTION LAYOUT */
.contact-section { background: #ffffff; border-top: 1px solid #f5f5f5; padding: 60px 0; }
.contact-hub-grid { display: grid; grid-template-columns: 1fr 1.3fr; gap: 60px; }

@media(max-width: 850px) { .contact-hub-grid { grid-template-columns: 1fr; gap: 40px; } }

.hub-info-col h3, .hub-form-col h3 { font-size: 1.5rem; color: #111; margin-bottom: 25px; font-weight: 700; }
.hub-info-item { display: flex; gap: 20px; margin-bottom: 25px; align-items: flex-start; }
.hub-icon { font-size: 1.4rem; color: #ff6600; }
.hub-info-item h4 { font-size: 0.9rem; color: #777; text-transform: uppercase; margin-bottom: 3px; }
.hub-info-item p { font-size: 1.15rem; font-weight: 600; color: #222; }

.follow-us-block { margin: 30px 0; }
.follow-us-block h4 { font-size: 1.1rem; color: #111; margin-bottom: 12px; text-transform: uppercase; }
.follow-icons { display: flex; gap: 15px; }
.follow-icons a { display: inline-flex; align-items: center; justify-content: center; width: 42px; height: 42px; border: 1px solid #e0e0e0; border-radius: 50%; color: #444; font-size: 1.15rem; text-decoration: none; transition: all 0.2s; }
.follow-icons a:hover { background: #ff6600; color: #fff; border-color: #ff6600; }

.bhim-payment-node { display: flex; align-items: center; gap: 15px; background: #ffffff; padding: 15px; border-radius: 8px; border: 1px dashed #ff6600; cursor: pointer; }
.bhim-qr-thumbnail { width: 70px; height: 70px; }
.bhim-address { font-weight: 700; color: #27ae60; font-size: 1.05rem; display: block; }

#hub-action-form { display: flex; flex-direction: column; gap: 20px; }
.field-container { display: flex; align-items: center; border: 1px solid #e0e0e0; background: #ffffff; border-radius: 6px; padding: 4px 15px; }
.field-icon { color: #ff6600; margin-right: 12px; font-size: 1.1rem; }
.field-container input, .field-container textarea { width: 100%; border: none; outline: none; padding: 12px 0; font-size: 1rem; color: #333; background: transparent; }
.textarea-container { align-items: flex-start; padding-top: 10px; }
.hub-submit-btn { background: #ff6600; color: #ffffff; border: none; padding: 15px 35px; font-size: 1rem; font-weight: 700; border-radius: 6px; cursor: pointer; display: inline-flex; align-items: center; justify-content: space-between; width: 210px; }

/* CINEMATIC LIGHTBOX EFFECTS FOR PROFESSIONAL WEBSITES (FADE + SCALE ZOOM IN) */
.gallery-lightbox {
    display: none;
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(25px); /* Strong Magic blur factor */
    z-index: 5000;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.gallery-lightbox.active-magic-box {
    display: flex;
    opacity: 1;
}

.lightbox-img-wrap {
    max-width: 75%;
    text-align: center;
    transform: scale(0.9);
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.gallery-lightbox.active-magic-box .lightbox-img-wrap {
    transform: scale(1); /* Smooth scale zoom injection occurs here */
}

.lightbox-img-wrap img, .lightbox-img-wrap video {
    max-width: 100%;
    max-height: 72vh;
    object-fit: contain;
    border-radius: 12px;
    box-shadow: 0 25px 60px rgba(0,0,0,0.5);
}

.lightbox-caption { margin-top: 18px; font-size: 1.25rem; font-weight: 700; color: #ffffff; }
.slider-arrow { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.08); color: #fff; border: 1px solid rgba(255,255,255,0.15); width: 55px; height: 55px; border-radius: 50%; font-size: 1.6rem; cursor: pointer; display: flex; justify-content: center; align-items: center; z-index: 5100; transition: background 0.2s; }
.slider-arrow:hover { background: #ff6600; border-color: #ff6600; }
.prev-arrow { left: 40px; }
.next-arrow { right: 40px; }
.lightbox-close { position: absolute; top: 25px; right: 45px; font-size: 3.5rem; cursor: pointer; color: #ffffff; z-index: 5200; transition: color 0.2s; }
.lightbox-close:hover { color: #ff6600; }

/* PROFESSIONAL STRIP GRAY FOOTER LAYER */
.mk-spiritual-gray-footer {
    background: #1f252e;
    color: #abb3be;
    padding: 40px 7% 20px 7%;
    font-size: 0.9rem;
    border-top: 1px solid #2d3542;
}

.footer-top-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 40px;
    padding-bottom: 30px;
    border-bottom: 1px solid #2d3542;
}

.footer-quote-block {
    flex: 1.5;
    min-width: 320px;
    display: flex;
    align-items: center;
    gap: 20px;
}

.footer-site-logo {
    height: 52px;
    width: auto;
    object-fit: contain;
}

.vertical-divider {
    width: 1px;
    height: 40px;
    background: #444e5d;
}

.footer-pipe { color: #ff6600; font-weight: bold; }

.quote-text {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    color: #ffffff;
    font-size: 1.2rem;
}

.footer-stay-connected, .footer-subscribe-block { flex: 1; min-width: 240px; }
.footer-stay-connected h4, .footer-subscribe-block h4 { color: #ffffff; font-size: 1.05rem; margin-bottom: 15px; font-weight: 600; }
.connected-icons { display: flex; gap: 12px; }

.connected-icons a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    background: #2a3240;
    color: #ffffff;
    border-radius: 50%;
    text-decoration: none;
    font-size: 1rem;
    transition: background 0.2s;
}
.connected-icons a:hover { background: #ff6600; }

.subscribe-form { display: flex; background: #ffffff; border-radius: 4px; overflow: hidden; padding: 2px; }
.subscribe-form input { width: 100%; border: none; outline: none; padding: 10px 15px; font-size: 0.95rem; color: #333; }
.sub-send-btn { background: #ff6600; color: #ffffff; border: none; padding: 0 16px; cursor: pointer; font-size: 1rem; }
.sub-send-btn:hover { background: #e05500; }

.footer-bottom-copyright { text-align: center; padding-top: 20px; font-size: 0.85rem; color: #707b88; }

@media(max-width: 768px) {
    .footer-top-row { flex-direction: column; gap: 30px; }
    .footer-quote-block { flex-direction: column; text-align: center; }
    .vertical-divider { display: none; }
}

