"use client"
import { contactBgAnimation, fadeAnimation } from '@/hooks/useGsapAnimation';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import ContactFormArea from '@/components/contacts/ContactFormArea';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import HomeMainHeader from '@/layouts/headers/HomeMainHeader';  
import HomeMainFooter from '@/layouts/footers/MainFooter';
import ContactHero1 from '@/components/contacts/ContactHero';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';

const ContactMain = () => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#3F5493" });

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const loadAnimations = () => {
            const timer = setTimeout(() => {
                fadeAnimation();
                contactBgAnimation();
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
            <HomeMainHeader />
    
            <div id="smooth-wrapper" style={{ backgroundColor: '#0E0F11' }}>
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <ContactHero1 />
                        <div className="pt-100"></div>
                        <ContactFormArea />
                    </main>
                    <HomeMainFooter />
                </div>
            </div>
        </>
    );
};

export default ContactMain;