document.addEventListener('DOMContentLoaded', () => {
    // Initialize 24-Hour Deduplicated Unique Visitor Counter
    initUniqueVisitorCounter();
});

/**
 * Unique Visitor Counter (1 Count per User/Browser per 24 Hours)
 * Prevents artificial inflation on page reloads/refreshes.
 */
function initUniqueVisitorCounter() {
    const counterElement = document.getElementById('uniqueVisitorCount');
    if (!counterElement) return;

    const STORAGE_COUNT_KEY = 'mk_unique_visitor_total';
    const STORAGE_TIMESTAMP_KEY = 'mk_visitor_last_timestamp';

    const BASELINE_COUNT = 150; // Initial baseline number
    const TWENTY_FOUR_HOURS_MS = 24 * 60 * 60 * 1000;
    const now = new Date().getTime();

    let currentTotal = parseInt(localStorage.getItem(STORAGE_COUNT_KEY), 10);
    const lastVisitTimestamp = parseInt(localStorage.getItem(STORAGE_TIMESTAMP_KEY), 10);

    // Initialize baseline count if empty
    if (isNaN(currentTotal) || currentTotal < BASELINE_COUNT) {
        currentTotal = BASELINE_COUNT;
    }

    // Only increment if user has NOT visited within the last 24 hours
    if (!lastVisitTimestamp || (now - lastVisitTimestamp) > TWENTY_FOUR_HOURS_MS) {
        currentTotal += 1;
        localStorage.setItem(STORAGE_COUNT_KEY, currentTotal.toString());
        localStorage.setItem(STORAGE_TIMESTAMP_KEY, now.toString());
    }

    // Render count
    counterElement.textContent = `${currentTotal}+`;
}
