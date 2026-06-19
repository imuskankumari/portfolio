document.addEventListener("DOMContentLoaded", () => {
    // 11 रील्स का रेंडरर
    const reelContainer = document.getElementById("reelContainer");
    for(let i=1; i<=11; i++) {
        reelContainer.innerHTML += `<video src="v${i}.mp4" muted autoplay loop></video>`;
    }
    
    // 50 पोर्टफोलियो कार्ड्स
    const portfolioGrid = document.getElementById("portfolioGrid");
    for(let i=1; i<=50; i++) {
        portfolioGrid.innerHTML += `<div class="card"><img src="g${i}.jpg"><h4>Graphic Design #${i}</h4><p>₹89</p></div>`;
    }
});
