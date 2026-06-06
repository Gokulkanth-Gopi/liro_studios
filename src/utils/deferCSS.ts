/**
 * Defer non-critical CSS loading to improve initial page load performance.
 */
export const initializeDeferredCSS = () => {
  if (globalThis.window !== undefined) {
    // Load slick carousel CSS only when needed
    const loadSlickCSS = () => {
      if (!document.querySelector('link[href*="slick.css"]')) {
        const link1 = document.createElement('link');
        link1.rel = 'stylesheet';
        link1.href = 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css';
        document.head.appendChild(link1);

        const link2 = document.createElement('link');
        link2.rel = 'stylesheet';
        link2.href = 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css';
        document.head.appendChild(link2);
      }
    };

    // Load react-photo-view CSS only when needed
    const loadPhotoViewCSS = () => {
      if (!document.querySelector('link[href*="react-photo-view"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/react-photo-view@1.2.7/dist/react-photo-view.css';
        document.head.appendChild(link);
      }
    };

    // Load after page is interactive
    if (document.readyState === 'complete') {
      loadSlickCSS();
      loadPhotoViewCSS();
    } else {
      globalThis.window.addEventListener('load', () => {
        setTimeout(() => {
          loadSlickCSS();
          loadPhotoViewCSS();
        }, 100);
      });
    }
  }
};

// Initialize the defer logic
if (globalThis.window !== undefined) {
  initializeDeferredCSS();
}
