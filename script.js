const portfolioAssets = {
    graphic: Array.from({length: 10}, (_, i) => ({ type: 'image', src: `g${i+1}.jpg` })),
    web: Array.from({length: 10}, (_, i) => ({ type: 'image', src: `w${i+1}.png` })),
    ai: Array.from({length: 11}, (_, i) => ({ type: 'image', src: `b${i+1}.png` })),
    motion: Array.from({length: 10}, (_, i) => ({ type: 'video', src: `r${i+1}.mp4` }))
};

function renderProjects() {
    const grid = document.getElementById('main-portfolio-gallery');
    // Using graphic as default
    portfolioAssets.graphic.forEach(item => {
        const div = document.createElement('div');
        div.className = 'dribbble-item';
        div.innerHTML = `<img src="${item.src}" alt="Project">`;
        grid.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', renderProjects);

