(function() {
    'use strict';

    // Redirect YouTube home to Subscriptions
    if (window.location.pathname === '/' || 
        window.location.pathname === '/feed/home' || 
        window.location.pathname === '/feed/trending') {
        window.location.replace('https://www.youtube.com/feed/subscriptions');
    }

    function enhancePage() {
        if (!window.location.pathname.includes('/feed/subscriptions')) return;

        // Make search bar big and focused
        const searchInput = document.querySelector('input#search');
        if (searchInput) {
            searchInput.style.width = '680px';
            searchInput.style.padding = '16px 24px';
            searchInput.style.fontSize = '19px';
            searchInput.style.borderRadius = '9999px';
            searchInput.focus();
        }

        // Hide unwanted elements
        const hideSelectors = [
            'ytd-reel-shelf-renderer',     // Shorts
            '#chips-wrapper',              // Category chips
            'ytd-shelf-renderer',          // Other recommendation shelves
            'ytd-guide-entry-renderer[href*="shorts"]'
        ];

        hideSelectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                el.style.display = 'none';
            });
        });
    }

    // Run now and keep watching for YouTube's dynamic loading
    window.addEventListener('load', enhancePage);
    new MutationObserver(enhancePage).observe(document.body, { 
        childList: true, 
        subtree: true 
    });
})();
