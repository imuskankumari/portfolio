// Strict script to block key inspect short-cuts (Anti-theft layer)
document.addEventListener("keydown", function(e) {
    if (e.keyCode == 123 || 
        (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74)) || 
        (e.ctrlKey && e.keyCode == 85)) {
        e.preventDefault();
        return false;
    }
});

// Simple form handle logic
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent successfully.");
    this.reset();
});
