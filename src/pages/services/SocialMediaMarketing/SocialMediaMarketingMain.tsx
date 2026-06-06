"use client"
import { fadeAnimation, heroAnimation, portfolioAnimation, scrollMovingText, textInvertAnim3 } from '@/hooks/useGsapAnimation';
import SocialMediaMarketingTextAreaTwo from '@/components/text-slider/SocialMediaMarketingTextAreaTwo';
import SocialMediaMarketingPortfolio from '@/components/portfolio/SocialMediaMarketingPortfolio';
import SocialMediaMarketingTextArea from '@/components/text-slider/SocialMediaMarketingTextArea';
import SocialMediaMarketingProject from '@/components/project/SocialMediaMarketingProject';
import SocialMediaMarketingHero from '@/components/hero-banner/SocialMediaMarketingHero';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import SocialMediaMarketingAbout from '@/components/about/SocialMediaMarketingAbout';
import MainFooter from '@/layouts/footers/MainFooter';

import BackToTop from '@/components/shared/BackToTop/BackToTop';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import HomeMainHeader from '@/layouts/headers/HomeMainHeader';
import { useGSAP } from '@gsap/react';

import gsap from 'gsap';
import LiquidEther from '@/components/shared/LiquidEther/LiquidEther';

const SocialMediaMarketingMain = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#000" });

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const timer = setTimeout(() => {
                heroAnimation();
                fadeAnimation();
                scrollMovingText();
                portfolioAnimation();
                textInvertAnim3();
            }, 300);

            return () => clearTimeout(timer);
        });

        return () => ctx.revert();
    });

    return (
        <div className="liro-dark">
            <div id="magic-cursor">
                <div id="ball"></div>
            </div>

            {/* Interactive Liquid Ether Background */}
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
                <LiquidEther
                    colors={['#00ff7f', '#00d2ff', '#111013']}
                    mouseForce={20}
                    cursorSize={100}
                    autoDemo={true}
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    resolution={0.5}
                />
            </div>

            {/* Global Components */}
            <BackToTop />
            <HomeMainHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <SocialMediaMarketingHero />
                        <SocialMediaMarketingTextArea />
                        <SocialMediaMarketingAbout />
                        <SocialMediaMarketingPortfolio />
                        <SocialMediaMarketingTextAreaTwo />
                        <SocialMediaMarketingProject />
                    </main>
                    <MainFooter />
                </div>
            </div>
        </div>
    );
};

export default SocialMediaMarketingMain;
