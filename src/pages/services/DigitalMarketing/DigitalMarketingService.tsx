"use client"
import { fadeAnimation, portfolioItemPinAnimation } from '@/hooks/useGsapAnimation';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import DigitalMarketingServiceGalleryTwo from '@/components/gallery/DigitalMarketingServiceGalleryTwo';
import DigitalMarketingServicePortfolio from '@/components/service/DigitalMarketingService/DigitalMarketingServicePortfolio';
import DigitalMarketingServiceOverview from '@/components/service/DigitalMarketingService/DigitalMarketingServiceOverview';
import DigitalMarketingServiceGallery from '@/components/gallery/DigitalMarketingServiceGallery';
import PortfolioCoverflowMain from '@/pages/portfolios/portfolio-coverflow/PortfolioCoverflowMain';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import HomeMainHeader from '@/layouts/headers/HomeMainHeader';
import MainFooter from '@/layouts/footers/MainFooter';


const DigitalMarketingService = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ customClass: "tp-magic-cursor" });

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const loadAnimations = () => {
            const timer = setTimeout(() => {
                portfolioItemPinAnimation();
                fadeAnimation();
            }, 100);
            return () => clearTimeout(timer);
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
    });

    return (
        <>
            <div id="magic-cursor" className="cursor-bg-red">
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <HomeMainHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <PortfolioCoverflowMain />
                        <DigitalMarketingServiceOverview />
                        <DigitalMarketingServiceGallery />
                        <DigitalMarketingServicePortfolio />
                        <DigitalMarketingServiceGalleryTwo />
                    </main>
                    <MainFooter />
                </div>
            </div>
        </>
    );
};

export default DigitalMarketingService;