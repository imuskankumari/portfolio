/* प्रीमियम ट्रेंडिंग ग्रेडिएंट बैकग्राउंड कॉन्फ़िगरेशन */
html { scroll-behavior: smooth; }
body { 
    background: linear-gradient(135deg, #08090c 0%, #0e1118 50%, #141924 100%);
    background-attachment: fixed;
    color: #ffffff; 
    font-family: 'Plus Jakarta Sans', sans-serif; 
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

/* मुख्य कंटेनर एलाइनमेंट */
.main-wrapper { 
    margin: 140px auto 0 auto; 
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
    margin: 60px auto; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    box-sizing: border-box; 
}

/* हेडिंग्स के लिए मोटा + पतला (Bold + Thin) कॉम्बिनेशन */
.section-main-heading { 
    margin: 0 0 40px 0; 
    font-family: 'League Spartan', sans-serif;
    font-size: 2.3rem; 
    font-weight: 900; /* पहला हिस्सा अत्यधिक मोटा */
    color: #ffffff !important; 
    text-align: left; 
    text-transform: uppercase; 
    letter-spacing: 1px; 
    width: 100%;
}
.thin-green-text { 
    color: #bfff00 !important; 
    font-weight: 300 !important; /* ग्रीन वाला हिस्सा बिल्कुल पतला (Thinn) */
    letter-spacing: 2px;
}

/* नया सिमेट्रिकल पिरामिड हीरो लेआउट */
.pyramid-hero-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    margin: 20px auto 70px auto;
    box-sizing: border-box;
}

.mega-bold-title {
    font-family: 'League Spartan', sans-serif;
    font-size: 6.2rem;
    line-height: 0.9;
    font-weight: 900;
    color: #ffffff !important;
    margin: 0 0 15px 0;
    letter-spacing: -2px;
}

.italic-serif-sub {
    font-family: 'Playfair Display', serif;
    font-size: 2.3rem;
    font-style: italic;
    color: #bfff00 !important;
    margin: 0 0 35px 0;
}

/* पैराग्राफ को परफेक्ट पिरामिड शेप देने के लिए सेटिंग्स */
.pyramid-bio-container {
    max-width: 780px;
    margin: 0 auto 35px auto;
    padding: 0 20px;
}

.pyramid-bio-text {
    color: #cbd5e1 !important;
    font-size: 1.25rem;
    line-height: 1.8;
    margin: 0;
    text-align: center;
    text-justify: inter-word;
}

/* हीरो के नीचे सुंदर होरिज़ॉन्टल कांटेक्ट बार */
.hero-contact-details-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 35px;
    margin-top: 15px;
    background: rgba(255, 255, 255, 0.03);
    padding: 12px 30px;
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0.05);
}
.hero-contact-details-bar span {
    font-size: 0.98rem;
    color: #94a3b8;
    display: flex;
    align-items: center;
    gap: 8px;
}
.hero-contact-details-bar i {
    color: #bfff00;
}

/* हेडर और ब्रैंड लोगो */
.navbar { 
    background: rgba(8, 9, 12, 0.85); 
    backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.04); 
    position: fixed; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 90px; 
    z-index: 1000; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
}
.nav-container { display: flex; justify-content: space-between; align-items: center; width: 100%; max-width: 1200px; padding: 0 40px; box-sizing: border-box; }
.brand-logo-text { font-family: 'League Spartan', sans-serif; font-weight: 900; font-size: 1.4rem; color: #bfff00; letter-spacing: 1px; }
.nav-menus { display: flex; gap: 40px; }
.nav-menus a { color: #94a3b8; text-decoration: none; font-weight: 600; font-size: 1rem; transition: 0.2s ease; }
.nav-menus a:hover { color: #bfff00; }

/* एजुकेशन आर्किटेक्चर */
.edu-two-column-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 45px; width: 100%; }
.edu-left-pane, .edu-right-pane { border-left: 3px solid #bfff00; padding-left: 20px; }
.edu-two-column-layout h3 { margin: 0 0 10px 0; font-size: 1.1rem; color: #bfff00 !important; font-weight: 700; text-transform: uppercase; }
.inst-desc { color: #e2e8f0 !important; font-size: 0.98rem; margin: 0; line-height: 1.65; }

/* स्किल्स चिप्स लेआउट */
.skills-category-wrapper { display: flex; flex-direction: column; gap: 30px; width: 100%; }
.skill-group-row h4 { margin: 0 0 12px 0; font-size: 1.05rem; color: #bfff00 !important; font-weight: 700; text-transform: uppercase; }
.chips-horizontal-flow { display: flex; flex-wrap: wrap; gap: 12px; }
.skill-chip { background-color: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06); padding: 12px 18px; border-radius: 8px; font-size: 0.95rem; color: #ffffff !important; display: inline-flex; align-items: center; gap: 8px; font-weight: 500; }
.skill-chip i { color: #bfff00 !important; }
.expertise-highlight-row { border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 25px; }

/* AI Generated Visuals - परफेक्ट आस्पेक्ट रेशियो बॉक्स (कोई कटिंग नहीं) */
.trending-modern-slider-container {
    width: 100%;
    max-width: 680px; /* आनुपातिक रूप से नियंत्रित चौड़ाई */
    margin: 0 auto;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 30px 70px rgba(0,0,0,0.7);
    border: 1px solid rgba(255, 255, 255, 0.06);
}
.slider-image-view {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1; /* वर्टिकल और स्क्वायर आर्टवर्क्स को पूरा दिखाने के लिए 1:1 रेशियो */
    background-color: #040508;
}
.slider-image-view img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* इमेज कभी भी कट नहीं होगी, पूरी फ्रेम दिखेगी */
    display: block;
    transition: opacity 0.3s ease;
}

/* स्लाइडर कंट्रोल्स */
.floating-slider-controls {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(10, 12, 18, 0.75);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 8px 16px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    gap: 12px;
    z-index: 20;
    width: max-content;
}
.nav-arrow-pill {
    background: rgba(255, 255, 255, 0.08);
    border: none;
    color: #bfff00;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
}
.nav-arrow-pill:hover { background: #bfff00; color: #000; }
.floating-title-pill { color: #ffffff; font-size: 0.9rem; font-weight: 600; text-align: center; min-width: 180px; }

/* मोशन ग्राफिक्स - सभी 11 रील्स स्क्रीन पर एक साथ बिना स्क्रॉल के */
.reels-static-grid-layout {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* बड़ी स्क्रीन पर 4 कॉलम लेआउट */
    gap: 20px;
    width: 100%;
    box-sizing: border-box;
}
.motion-video-frame {
    background-color: #030406;
    border: 2px solid #1a1f2c;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0,0,0,0.5);
    transition: border-color 0.3s ease;
}
.motion-video-frame:hover { border-color: #bfff00; }
.motion-video-frame video {
    width: 100%;
    aspect-ratio: 9 / 16; /* परफेक्ट रील्स आस्पेक्ट रेशियो */
    object-fit: cover;
    display: block;
}

/* ग्राफिक डिजाइनिंग - ओरिजिनल पसंदीदा थिक डार्क फ्रेम्स (g1 से g50) */
.behance-style-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 35px; width: 100%; box-sizing: border-box; }
.original-portfolio-dark-frame { 
    background-color: rgba(10, 12, 18, 0.6); 
    backdrop-filter: blur(12px);
    border-radius: 16px; 
    padding: 24px; 
    border: 6px solid #1a1e29; /* आपका पसंदीदा थिक बॉर्डर लुक */
    display: flex; 
    flex-direction: column; 
    box-sizing: border-box; 
}
.grid-card-image-wrapper { width: 100%; border-radius: 10px; overflow: hidden; background-color: #020304; }
.grid-card-image-wrapper img { width: 100%; height: auto; display: block; }
.grid-card-meta-bar { display: flex; justify-content: space-between; align-items: center; margin-top: 18px; border-top: 1px solid rgba(255, 255, 255, 0.06); padding-top: 14px; }
.grid-card-title { font-size: 1rem; color: #ffffff !important; margin: 0; font-weight: 700; }
.grid-card-price { font-size: 1.2rem; color: #bfff00; font-weight: 800; margin: 0; }

/* कांटेक्ट कंटेनर (सबसे लास्ट में स्थित) */
.contact-container { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; width: 100%; box-sizing: border-box; margin-bottom: 30px; }
.contact-card-table.original-box-style { 
    background-color: rgba(10, 12, 18, 0.7); 
    border: 1px solid rgba(255, 255, 255, 0.06); 
    padding: 40px; 
    border-radius: 16px; 
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    box-sizing: border-box; 
    width: 100%; 
}

/* इनपुट फ़ील्ड्स और यूपीआई */
.form-input { width: 100%; background: #040508; border: 1px solid #1a1e29; color: #fff; padding: 16px; margin-bottom: 16px; border-radius: 8px; box-sizing: border-box; font-size: 1rem; transition: all 0.2s ease; font-family: Arial, sans-serif; }
.glowing-input:focus { outline: none; border-color: #bfff00 !important; box-shadow: 0 0 12px rgba(191, 255, 0, 0.25); }
.submit-btn { background-color: #bfff00; color: #020304; border: none; width: 100%; padding: 16px; font-weight: 900; border-radius: 8px; cursor: pointer; font-size: 1.05rem; text-transform: uppercase; letter-spacing: 0.5px; transition: 0.2s; }
.submit-btn:hover { background-color: #ffffff; }

.upi-secure-box { background: #040508; border: 1px solid #1a1e29; padding: 22px; border-radius: 10px; width: 100%; box-sizing: border-box; }
.upi-header { display: flex; align-items: center; gap: 15px; }
.secure-icon { color: #bfff00; font-size: 2rem; }
.upi-text-left { text-align: left; }
.bhim-title { font-size: 1.05rem; color: #fff; font-weight: 700; display: block; }
.upi-id { margin: 4px 0 0 0; color: #94a3b8; font-size: 0.9rem; }
.pay-btn { background-color: #10b981; color: white; border: none; width: 100%; padding: 14px; font-weight: bold; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 20px; font-size: 1rem; }

.corporate-footer { background: #050608; padding: 35px; border-top: 1px solid rgba(255, 255, 255, 0.04); font-size: 0.95rem; color: #64748b; width: 100%; box-sizing: border-box; text-align: center; }

/* रिस्पॉन्सिव मीडिया क्वेरीज़ */
@media (max-width: 1024px) {
    .reels-static-grid-layout { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 768px) {
    .main-wrapper { padding: 0 20px; margin-top: 120px; }
    .mega-bold-title { font-size: 3.8rem; }
    .italic-serif-sub { font-size: 1.8rem; }
    .hero-contact-details-bar { flex-direction: column; gap: 12px; border-radius: 16px; width: 100%; }
    .edu-two-column-layout, .contact-container, .behance-style-grid { grid-template-columns: 1fr; gap: 30px; }
    .reels-static-grid-layout { grid-template-columns: repeat(2, 1fr); }
}
