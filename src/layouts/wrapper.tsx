"use client";
import {useEffect } from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {

  useEffect(() => {
    if (globalThis.window === undefined) return;

    // Defer Bootstrap loading until after page is interactive
    const loadBootstrap = () => {
      import("bootstrap/dist/js/bootstrap.bundle.min")
        .catch((err) => console.error("Bootstrap failed to load", err));
    };

    // Defer non-critical CSS loading
    const loadDeferredCSS = () => {
      // Load slick carousel CSS
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

      // Load react-photo-view CSS
      if (!document.querySelector('link[href*="react-photo-view"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/react-photo-view@1.2.7/dist/react-photo-view.css';
        document.head.appendChild(link);
      }
    };

    // Use requestIdleCallback for better performance
    if ('requestIdleCallback' in globalThis.window) {
      requestIdleCallback(() => {
        loadBootstrap();
        loadDeferredCSS();
      }, { timeout: 2000 });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(() => {
        loadBootstrap();
        loadDeferredCSS();
      }, 1);
    }
  }, []);

  return children;
};

export default Wrapper;

