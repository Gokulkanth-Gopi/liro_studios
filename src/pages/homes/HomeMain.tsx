'use client';
import { Suspense, useEffect, useState } from 'react';
import { animationParagraph, buttonBounceAnimation, charAnimation, fadeAnimation, funfactPanelAnimation, panelAnimation, servicePanelAnimation, textInvertAnim1, videoAnimation } from '@/hooks/useGsapAnimation';
import { bounceAnimation, textBounceAnimation } from '@/utils/titleAnimation';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import HomeMainProject from '@/components/project/HomeMainProject';
import HomeMainVideo from '@/components/video-area/HomeMainVideo';
import HomeMainHero from '@/components/hero-banner/HomeMainHero';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import HomeMainHeader from '@/layouts/headers/HomeMainHeader';
import HomeMainWork from '@/components/work/HomeMainWork';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import dynamic from 'next/dynamic';
// Lazy load DesignStudioBrand component
const DesignStudioBrand = dynamic(() => import('@/components/banner/Clients'), {
    loading: () => <div style={{ height: '300px' }} />,
});
const HomeMainService = dynamic(() => import('@/components/service/HomeMainService'), {
    ssr: false,
    loading: () => <div style={{ height: '1200px' }} />,
});
// Lazy load GlobalMap component
const GlobalMap = dynamic(() => import('@/components/map/GlobalMap'), {
    ssr: false,
    loading: () => <div style={{ height: '600px' }} />,
});
const HomeMainFooter = dynamic(() => import('@/layouts/footers/MainFooter'), {
    ssr: false,
    loading: () => <div style={{ height: '320px' }} />,
});
const HomeMain = () => {
    const [isHydrated, setIsHydrated] = useState(false);
    
    // Initialize custom cursor and optional background styles
    useCursorAndBackground()
    // Enable smooth scroll animations
    useScrollSmooth();
    
    // Mark hydration as complete after first render
    useEffect(() => {
        setIsHydrated(true);
    }, []);
    
    useGSAP(() => {
        // Skip animations during hydration
        if (!isHydrated) return;
        
        // Defer animations until browser is idle
        const loadAnimations = () => {
            funfactPanelAnimation();
            buttonBounceAnimation();
            servicePanelAnimation();
            textBounceAnimation();
            animationParagraph();
            bounceAnimation();
            charAnimation();
            videoAnimation();
            panelAnimation();
            fadeAnimation();
            textInvertAnim1();
        };
        if ('requestIdleCallback' in globalThis) {
            requestIdleCallback(() => {
                loadAnimations();
            }, { timeout: 2000 });
        } else {
            setTimeout(() => {
                loadAnimations();
            }, 100);
        }
    }, { dependencies: [isHydrated] });
    return (
        <>
            <div id="magic-cursor" className="cursor-white-bg">
                <div id="ball"></div>
            </div>
            {/* Global Components */}
            <BackToTop />
            <HomeMainHeader />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <HomeMainHero />
                        <HomeMainService />                        
                        <HomeMainVideo />
                        <HomeMainProject />
                        <Suspense fallback={<div style={{ height: '300px' }} />}>
                            <DesignStudioBrand />
                        </Suspense>
                        <HomeMainWork />
                        <Suspense fallback={<div style={{ height: '600px' }} />}>
                            <GlobalMap />
                        </Suspense>
                      </main>
                    <HomeMainFooter />
                </div>
            </div>
        </>
    );
};
export default HomeMain;
