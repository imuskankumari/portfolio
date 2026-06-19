html { scroll-behavior: smooth; }
body { 
    background-color: #0d0e12; 
    background-image: linear-gradient(rgba(13, 14, 18, 0.95), rgba(13, 14, 18, 0.95)), url('bg-texture.jpg'); 
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    color: #fff; 
    font-family: Arial, sans-serif; 
    margin: 0; 
    padding: 0; 
    -webkit-user-select: none; 
    user-select: none; 
    width: 100%; 
    overflow-x: hidden; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
}

/* 100% सेंटर अलाइनमेंट ग्रिड आर्किटेक्चर (नो साइड शिफ्टिंग एरर) */
.main-wrapper { 
    margin: 160px auto 0 auto; 
    width: 100%; 
    max-width: 1200px; 
    padding: 0 40px; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    box-sizing: border-box; 
}

.page-section { 
    width: 100%; 
    margin: 45px auto; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    box-sizing: border-box; 
}

.neon-green-text { color: #bfff00 !important; }
.text-white { color: #ffffff !important; }

/* एक्स्ट्रा चौड़ा लॉन्ग हेडर नैवबार व्यू */
.navbar { 
    background: #090a0d; 
    border-bottom: 1px solid #1a1c23; 
    position: fixed; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 140px; 
    box-sizing: border-box; 
    z-index: 1000; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
}
.nav-container { display: flex; justify-content: space-between; align-items: center; width: 100%; max-width: 1200px; padding: 0 40px; box-sizing: border-box; }
.logo-area { display: flex; align-items: center; }
.nav-logo-circle { height: 58px; width: 58px; border-radius: 50%; object-fit: cover; border: 2.5px solid #bfff00; box-shadow: 0 0 15px rgba(191, 255, 0, 0.4); }
.nav-menus { display: flex; gap: 40px; }
.nav-menus a { color: #94a3b8; text-decoration: none; font-weight: 700; font-size: 1.1rem; transition: 0.2s ease; letter-spacing: 0.5px; }
.nav-menus a:hover { color: #bfff00; }

/* बिहान्स स्टाइल स्प्लिट हीरो टाइपोग्राफी (नो अंडरलाइन्स) */
.behance-hero-split { display: grid; grid-template-columns: 1.2fr 1fr; gap: 40px; width: 100%; text-align: left; align-items: flex-start; margin-bottom: 20px; }
.be-massive-headline-white { font-size: 6rem; line-height: 0.85; font-weight: 900; color: #ffffff !important; margin: 0; letter-spacing: -2px; }
.be-sub-headline-green { font-size: 1.6rem; font-weight: 800; color: #bfff00 !important; margin: 20px 0 0 0; letter-spacing: 1px; text-transform: uppercase; }

.behance-para-right-block { display: flex; flex-direction: column; gap: 20px; height: 100%; justify-content: space-between; }
.bio-text-clean-white { color: #ffffff !important; font-size: 1.15rem; line-height: 1.6; margin: 0; font-weight: 500; }

/* इनलाइन होम डिटेल्स */
.home-inline-contact-details { display: flex; flex-direction: column; gap: 10px; background: #11131a; padding: 20px; border-radius: 12px; border: 1px solid #1a1c23; }
.contact-detail-pill { font-size: 0.95rem; color: #94a3b8; display: flex; align-items: center; gap: 10px; font-weight: 600; }
.contact-detail-pill i { color: #bfff00; width: 20px; }

/* खुला बिहान्स टाइटल्स विदाउट डिब्बा लाइन्स */
.be-section-title { font-size: 2.2rem; font-weight: 900; color: #ffffff !important; text-align: left; text-transform: uppercase; letter-spacing: -0.5px; margin: 0 0 25px 0; width: 100%; }
.be-section-title-centered { font-size: 2.2rem; font-weight: 900; color: #ffffff !important; text-align: center; text-transform: uppercase; letter-spacing: -0.5px; margin: 0 0 30px 0; width: 100%; }

/* बिना बॉक्स स्टाइल्स के खुले अनुभाग */
.unified-education-card, .master-skills-pyramid-box { width: 100%; text-align: left; margin-bottom: 20px; }

.edu-two-column-layout { display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; width: 100%; }
.edu-left-pane, .edu-right-pane { border-left: 3px solid #bfff00; padding-left: 20px; }
.edu-two-column-layout h3 { margin: 0 0 10px 0; font-size: 1.1rem; color: #bfff00 !important; font-weight: 700; text-transform: uppercase; }
.inst-desc { color: #ffffff !important; font-size: 1rem; margin: 0; line-height: 1.6; font-weight: 500; }

.skills-category-wrapper { display: flex; flex-direction: column; gap: 25px; width: 100%; }
.skill-group-row h4 { margin: 0 0 10px 0; font-size: 1.05rem; color: #bfff00 !important; font-weight: 700; text-transform: uppercase; }
.chips-horizontal-flow { display: flex; flex-wrap: wrap; gap: 12px; justify-content: flex-start; }
.skill-chip { background-color: #11131a; border: 1px solid #1a1c23; padding: 11px 18px; border-radius: 8px; font-size: 0.9rem; color: #ffffff !important; display: inline-flex; align-items: center; gap: 8px; font-weight: 500; }
.skill-chip i { color: #bfff00 !important; font-size: 0.95rem; }
.expertise-highlight-row { border-top: 1px solid #1a1c23; padding-top: 25px; }

/* इंस्टाग्राम आइकॉन कस्टमाइज्ड कैरोसेल फ्रेम (परफेक्ट सेंटर फिक्स) */
.trending-carousel-outer { display: flex; justify-content: center; width: 100%; box-sizing: border-box; }
.trending-instagram-frame {
    position: relative;
    background-color: #11131a;
    border-radius: 50px;
    border: 1px solid #1a1c23;
    width: 100%;
    max-width: 860px;
    padding: 120px 160px 0px 160px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 25px 50px rgba(0,0,0,0.7);
}
.carousel-inner-graphics-box { width: 100%; aspect-ratio: 1 / 1; display: flex; align-items: center; justify-content: center; background-color: #11131a; }
.carousel-inner-graphics-box img { width: 100%; height: 100%; object-fit: cover; border-radius: 0px; display: block; }

.desktop-slider-full-strip {
    background-color: #090a0f;
    border-top: 1px solid #1a1c23;
    padding: 18px 20px;
    text-align: center;
    width: calc(100% + 320px);
    margin-left: -160px;
    margin-right: -160px;
    box-sizing: border-box;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
}
.desktop-slider-full-strip span { font-size: 0.95rem; color: #94a3b8; font-weight: 600; letter-spacing: 0.5px; }

.original-arrow-btn {
    background: #090a0f;
    border: 1px solid #1a1c23;
    color: #bfff00;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    position: absolute;
    top: calc(50% - 22px);
    transform: translateY(-50%);
    z-index: 15;
}
.positioning-left { left: 58px; }
.positioning-right { right: 58px; }

/* मोशन ग्राफिक्स और गैलरी ग्रिड */
.full-viewport-section { width: 100%; display: flex; flex-direction: column; align-items: center; }
.master-reel-cover-container { background-color: #11131a; border: 1px solid #1a1c23; border-radius: 16px; padding: 20px; width: 100%; box-sizing: border-box; }
.horizontal-reel-container { display: flex; gap: 15px; overflow-x: auto; padding: 15px; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; box-sizing: border-box; }
.horizontal-reel-container::-webkit-scrollbar { height: 6px; }
.horizontal-reel-container::-webkit-scrollbar-thumb { background: #1a1c23; border-radius: 10px; }
.motion-video-frame { flex: 0 0 165px; background-color: #090a0f; border: 1px solid #bfff00 !important; box-shadow: 0 0 8px rgba(191, 255, 0, 0.25); border-radius: 10px; overflow: hidden; scroll-snap-align: start; box-sizing: border-box; }
.motion-video-frame video { width: 100%; aspect-ratio: 9 / 16; object-fit: cover; display: block; }

.behance-style-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 30px; width: 100%; box-sizing: border-box; }
.original-portfolio-dark-frame { background-color: #11131a; border-radius: 20px; padding: 20px; border: 6px solid #1a1c23; display: flex; flex-direction: column; text-align: left; box-sizing: border-box; }
.grid-card-image-wrapper { width: 100%; border-radius: 12px; overflow: hidden; background-color: #090a0f; }
.grid-card-image-wrapper img { width: 100%; height: auto; max-height: 100%; object-fit: contain; display: block; }
.grid-card-meta-bar { display: flex; justify-content: space-between; align-items: center; margin-top: 15px; border-top: 1px solid #1a1c23; padding-top: 12px; }
.grid-card-title { font-size: 0.95rem; color: #ffffff !important; margin: 0; font-weight: 700; }
.grid-card-price { font-size: 1.15rem; color: #bfff00; font-weight: 800; margin: 0; }

/* ओरिजिनल पुराना कांटेक्ट लेआउट (री-स्टोर फिक्स) */
.behance-split-contact-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; width: 100%; text-align: left; box-sizing: border-box; }
.original-contact-card-table { background-color: #11131a; padding: 25px; border-radius: 12px; border: 1px solid #1a1c23; display: flex; flex-direction: column; justify-content: center; box-sizing: border-box; width: 100%; }
.form-input { width: 100%; background: #090a0f; border: 1px solid #1a1c23; color: #fff; padding: 12px; margin-bottom: 12px; border-radius: 6px; box-sizing: border-box; font-size: 0.95rem; transition: all 0.2s ease; font-family: Arial, sans-serif; }
.glowing-input:focus { outline: none; border-color: #bfff00 !important; box-shadow: 0 0 8px rgba(191, 255, 0, 0.4); }
.submit-btn { background-color: #bfff00; color: #090a0f; border: none; width: 100%; padding: 14px; font-weight: bold; border-radius: 6px; cursor: pointer; font-size: 1rem; text-transform: uppercase; }

.info-title-upi { margin: 0 0 15px 0; font-size: 1.1rem; color: #ffffff !important; font-weight: 700; letter-spacing: 0.5px; }
.upi-secure-box-wrapper { width: 100%; }
.upi-secure-box { background: #090a0f; border: 1px solid #1a1c23; padding: 14px; border-radius: 8px; margin-top: 5px; }
.upi-header { display: flex; align-items: center; gap: 12px; }
.secure-icon { color: #bfff00; font-size: 1.6rem; }
.upi-text-left { text-align: left; }
.bhim-title { font-size: 0.9rem; color: #fff; display: block; }
.upi-id { margin: 1px 0 0 0; color: #94a3b8; font-size: 0.8rem; }
.pay-btn { background-color: #10b981; color: white; border: none; width: 100%; padding: 11px; font-weight: bold; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; margin-top: 12px; }

.corporate-footer { background: #11131a; padding: 25px; border-top: 1px solid #1a1c23; font-size: 0.85rem; color: #94a3b8; margin-top: 40px; width: 100%; box-sizing: border-box; text-align: center; }

@media (max-width: 768px) {
    .main-wrapper { padding: 0 20px; margin-top: 140px; }
    .behance-hero-split, .edu-two-column-layout, .behance-split-contact-grid, .behance-style-grid { grid-template-columns: 1fr; gap: 20px; }
    .be-massive-headline-white { font-size: 3.8rem; }
    .trending-instagram-frame { padding: 40px 45px 0 45px; border-radius: 20px; }
    .desktop-slider-full-strip { width: calc(100% + 90px); margin-left: -45px; margin-right: -45px; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; }
    .original-arrow-btn { top: calc(50% - 20px); width: 36px; height: 46px; }
    .positioning-left { left: 5px; }
    .positioning-right { right: 5px; }
    .navbar { padding: 12px 20px; height: 100px; }
    .nav-menus { gap: 18px; }
    .nav-menus a { font-size: 0.95rem; }
    .motion-video-frame { flex: 0 0 100%; }
}
