"use client"
/**
 * SEO METADATA (To be added in parent server layout/page):
 * 
 * title: "Iconic Brand Identity & Strategy | Visual Ecosystems | Liro Studios",
 * description: "Transform your vision into an iconic legacy with Liro Studios. We craft distinctive brand identities, visual communication systems, and high-prestige market positioning.",
 * keywords: ["Brand Identity Design", "Logo Design Agency", "Brand Strategy", "Visual Communication", "Prestige Branding"]
 */
import { fadeAnimation, portfolioItemPinAnimation } from '@/hooks/useGsapAnimation';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import BrandingServiceGalleryTwo from '@/components/gallery/BrandingServiceGalleryTwo';
import BrandingServicePortfolio from '@/components/service/BrandingService/BrandingServicePortfolio';
import BrandingServiceOverview from '@/components/service/BrandingService/BrandingServiceOverview';
import BrandingServiceGallery from '@/components/gallery/BrandingServiceGallery';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import HomeMainHeader from '@/layouts/headers/HomeMainHeader';
import MainFooter from '@/layouts/footers/MainFooter';
import BrandingFlipbook from '@/components/service/BrandingService/BrandingFlipbook';
 

const BrandingService = () => {
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
                        <BrandingServiceOverview />
                        <BrandingServiceGallery />
                        <BrandingServicePortfolio />
                        <BrandingServiceGalleryTwo />
                        <BrandingFlipbook />
                    </main>
                    <MainFooter />
                </div>
            </div>
        </>
    );
};

export default BrandingService;