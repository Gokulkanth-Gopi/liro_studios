"use client"
/**
 * SEO METADATA (To be added in parent server layout/page):
 * 
 * title: "Top Digital Marketing & Branding Agency | Liro Studios",
 * description: "Liro Studios is a premier digital agency offering expert branding, web design, and data-driven marketing services to scale your business and accelerate revenue.",
 * keywords: ["Digital Marketing Agency", "Branding Services", "Web Design Company", "SEO Services", "Liro Studios"]
 */
import { fadeAnimation, imageRevealAnimation } from '@/hooks/useGsapAnimation';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import ServiceProcessArea from '@/components/process/ServiceProcessArea';
import ServiceMainBanner from '@/components/hero-banner/ServiceMain';
import ServiceBanner from '@/components/banner/ServiceBanner';
import InnerServiceMain from '@/components/service/InnerServiceMain';
import ServiceSolution from '@/components/service/ServiceSolution';
import ServiceMainBrand from '@/components/brand/ServiceMainBrand';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import InnerPageHeader from '@/layouts/headers/HomeMainHeader';
import DigitalMarketingFooter from '@/layouts/footers/MainFooter';
import dynamic from 'next/dynamic';
const Clients = dynamic(() => import('@/components/banner/Clients'), { ssr: false });
 

const ServiceMain = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground();

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const loadAnimations = () => {
            const timer = setTimeout(() => {
                imageRevealAnimation();
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
            <div id="magic-cursor" className="cursor-bg-red-2">
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <InnerPageHeader />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <ServiceMainBanner />
                        <ServiceBanner />
                        <ServiceSolution />
                        <div className="tp-service-4-padding-area">
                            <InnerServiceMain />
                            <ServiceMainBrand />
                        </div>
                        <ServiceProcessArea />
                        <Clients />
                    </main>
                    <DigitalMarketingFooter />
                </div>
            </div>
        </>
    );
};

export default ServiceMain;