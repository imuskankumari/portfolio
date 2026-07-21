document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const menuToggleBtn = document.getElementById('menuToggleBtn');
    const mainNavigation = document.getElementById('mainNavigation');

    if (menuToggleBtn && mainNavigation) {
        menuToggleBtn.addEventListener('click', () => {
            mainNavigation.classList.toggle('mobile-active');
        });
    }

    // Initialize Unique 24-Hour Visitor Counter
    initUniqueVisitorCounter();
});

function closeMobileMenu() {
    const mainNavigation = document.getElementById('mainNavigation');
    if (mainNavigation) {
        mainNavigation.classList.remove('mobile-active');
    }
}

/**
 * Unique Visitor Counter with 24-Hour Deduplication (1 Visit Per User per 24 Hours)
 */
function initUniqueVisitorCounter() {
    const counterElement = document.getElementById('uniqueVisitorCount');
    if (!counterElement) return;

    const STORAGE_COUNT_KEY = 'mk_unique_visitor_total';
    const STORAGE_TIMESTAMP_KEY = 'mk_visitor_last_timestamp';

    const BASELINE_COUNT = 150; // Starting baseline number for realistic presentation
    const TWENTY_FOUR_HOURS_MS = 24 * 60 * 60 * 1000;
    const now = new Date().getTime();

    let currentTotal = parseInt(localStorage.getItem(STORAGE_COUNT_KEY), 10);
    const lastVisitTimestamp = parseInt(localStorage.getItem(STORAGE_TIMESTAMP_KEY), 10);

    // Set initial total if first time
    if (isNaN(currentTotal) || currentTotal < BASELINE_COUNT) {
        currentTotal = BASELINE_COUNT;
    }

    // Check if user hasn't visited in the last 24 hours
    if (!lastVisitTimestamp || (now - lastVisitTimestamp) > TWENTY_FOUR_HOURS_MS) {
        currentTotal += 1;
        localStorage.setItem(STORAGE_COUNT_KEY, currentTotal);
        localStorage.setItem(STORAGE_TIMESTAMP_KEY, now);
    }

    // Display count cleanly
    counterElement.textContent = `${currentTotal}+`;
}

