"use client"

import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';

import BackToTop from '@/components/shared/BackToTop/BackToTop';
import HomeMainHeader from '@/layouts/headers/HomeMainHeader';
import MainFooter from '@/layouts/footers/MainFooter';
import { fadeAnimation } from '@/hooks/useGsapAnimation';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import FaqArea from '@/components/faq/FaqArea';

import { ArrowTwenty } from '@/svg/ArrowIcons';
import { useGSAP } from '@gsap/react';


const FaqMain = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#000" });

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
        }, 100)
        return () => clearTimeout(timer);
    });

    return (
        <div className="liro-dark">
            <div id="magic-cursor" className="cursor-bg-red-2">
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <HomeMainHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <div className="ar-hero-area p-relative">
                            <div className="tp-grid-bg"></div>
                            <div className="container container-1230">
                                <div className="ar-about-us-4-hero-ptb">
                                    <div className="row justify-content-center">
                                        <div className="col-xl-12">
                                            <div className="ar-hero-title-box tp_fade_anim" data-delay=".3">
                                                <div className="ar-about-us-4-title-box d-flex align-items-center mb-20">
                                                    <span className="tp-section-subtitle pre tp_fade_anim">Faq</span>
                                                    <div className="ar-about-us-4-icon">
                                                        <ArrowTwenty />
                                                    </div>
                                                </div>
                                                <h3 className="tp-career-title pb-30">Frequently <span className="shape-1"></span> <br />asked question!</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4"></div>
                                        <div className="col-lg-8">
                                            <div className="tp-faq-text  tp_fade_anim">
                                                <p>Liro Studios is a beacon of best innovation and the dynamic <br /> parent a company of wealcoder and many other subsidiaries.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* faq area */}
                        <FaqArea />

                    </main>
                    <MainFooter />
                </div>
            </div>
        </div>
    );
};

export default FaqMain;