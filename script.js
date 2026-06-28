// Dynamic Repository Media Rendering
const galleryData = {
    ai: Array.from({length: 11}, (_, i) => `b${i+1}.png`),
    graphic: Array.from({length: 20}, (_, i) => `g${i+1}.jpg`),
    web: [] // Add your website screenshots here if any
};

function filterGallery(category) {
    const grid = document.getElementById('gallery-grid');
    grid.innerHTML = '';
    
    // Update active state tab buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const items = galleryData[category];
    if(items.length === 0) {
        grid.innerHTML = '<p style="grid-column: span 4; text-align:center; padding:20px;">Coming Soon!</p>';
        return;
    }

    items.forEach((src, idx) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
            <img src="${src}" alt="${category} visual" onerror="this.src='placeholder.png'">
            <p>${category.toUpperCase()} Asset ${idx + 1}</p>
        `;
        grid.appendChild(item);
    });
}

// Render Initial Reels & Gallery Items
document.addEventListener('DOMContentLoaded', () => {
    filterGallery('ai'); // Default Tab Initialization

    const reelsContainer = document.getElementById('reels-container');
    for(let i = 1; i <= 12; i++) {
        const reel = document.createElement('div');
        reel.className = 'video-reel-card';
        reel.innerHTML = `
            <video width="100%" height="100%" style="border-radius:8px;" controls>
                <source src="r${i}.mp4" type="video/mp4">
                Reel ${i}
            </video>
        `;
        reelsContainer.appendChild(reel);
    }
});
