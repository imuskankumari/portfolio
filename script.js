// Verification and Interactions UI
document.addEventListener('DOMContentLoaded', () => {
    console.log("Muskan Kumari's Portfolio Interface initialized.");

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Message received! Muskan will look into your request.');
            contactForm.reset();
        });
    }
});

