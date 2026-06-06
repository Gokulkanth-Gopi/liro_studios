"use client"
import imgBranding from "../../../public/assets/img/services/gen_matte_branding.png";
import imgDigital from "../../../public/assets/img/services/gen_matte_digital.png";
import imgSocial from "../../../public/assets/img/services/gen_matte_social.png";
import imgContent from "../../../public/assets/img/services/gen_matte_content.png";
import imgWeb from "../../../public/assets/img/services/gen_matte_web.png";
import servicesData from "@/data/serviceData";
import { ArrowSvg, ButtonBlurFilter } from "@/svg";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Column image sets (duplicated for seamless loop)
// Map matte images directly to the first 5 core services from serviceData
const getMatteImage = (index: number) => {
    switch (index) {
        case 0: return imgDigital;
        case 1: return imgBranding;
        case 2: return imgSocial;
        case 3: return imgContent;
        case 4: return imgWeb;
        default: return imgBranding;
    }
};

const allServices = servicesData.slice(0, 5).map((service, index) => ({
    id: `service-item-${service.id}`,
    src: getMatteImage(index),
    label: service.title
}));

const col1 = [
    ...allServices.map(item => ({ ...item, uniqueId: `col1-1-${item.id}` })),
    ...allServices.map(item => ({ ...item, uniqueId: `col1-2-${item.id}` }))
];
const col2 = [
    ...allServices.slice(2).map(item => ({ ...item, uniqueId: `col2-1-${item.id}` })),
    ...allServices.slice(0, 2).map(item => ({ ...item, uniqueId: `col2-2-${item.id}` })),
    ...allServices.slice(2).map(item => ({ ...item, uniqueId: `col2-3-${item.id}` })),
    ...allServices.slice(0, 2).map(item => ({ ...item, uniqueId: `col2-4-${item.id}` }))
];
const col3 = [
    ...allServices.slice(4).map(item => ({ ...item, uniqueId: `col3-1-${item.id}` })),
    ...allServices.slice(0, 4).map(item => ({ ...item, uniqueId: `col3-2-${item.id}` })),
    ...allServices.slice(4).map(item => ({ ...item, uniqueId: `col3-3-${item.id}` })),
    ...allServices.slice(0, 4).map(item => ({ ...item, uniqueId: `col3-4-${item.id}` }))
];

const HomeMainHero = () => {
    const col1Ref = useRef<HTMLDivElement>(null);
    const col2Ref = useRef<HTMLDivElement>(null);
    const col3Ref = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLElement>(null);
    const eyebrowRef = useRef<HTMLParagraphElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const imgPanelRef = useRef<HTMLDivElement>(null);

    // GSAP entrance animations
    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(eyebrowRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8 }
        );

        const titleLines = titleRef.current?.querySelectorAll('span, em');
        if (titleLines) {
            tl.fromTo(titleLines,
                { opacity: 0, y: 60, skewX: -8 },
                { opacity: 1, y: 0, skewX: 0, duration: 1.1, stagger: 0.15 },
                '-=0.4'
            );
        }

        tl.fromTo(ctaRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.9 },
            '-=0.5'
        );

        // Image panel slides in from right on page load
        tl.fromTo(imgPanelRef.current,
            { opacity: 0, x: 60 },
            { opacity: 1, x: 0, duration: 1.2, ease: 'power2.out' },
            '-=1.0'
        );
    }, { scope: heroRef });

    // Vertical/Horizontal infinite scroll per column (RAF loop)
    useEffect(() => {
        const makeLoop = (el: HTMLDivElement | null, speed: number, dir: 1 | -1) => {
            if (!el) return () => { };

            let pos = 0;
            let raf: number;

            const tick = () => {
                const isMobile = globalThis.innerWidth <= 991;
                pos += speed * dir;

                const size = isMobile ? el.scrollWidth : el.scrollHeight;
                const half = size / 2;

                if (dir === -1 && Math.abs(pos) >= half) pos = 0;
                if (dir === 1 && pos >= 0) pos = -half;

                if (isMobile) {
                    el.style.transform = `translate3d(${pos}px, 0, 0)`;
                } else {
                    el.style.transform = `translate3d(0, ${pos}px, 0)`;
                }
                raf = requestAnimationFrame(tick);
            };

            // Set initial position to avoid flash
            const isMobile = globalThis.innerWidth <= 991;
            const size = isMobile ? el.scrollWidth : el.scrollHeight;
            pos = dir === -1 ? 0 : -(size / 2);

            raf = requestAnimationFrame(tick);
            return () => cancelAnimationFrame(raf);
        };

        const c1 = makeLoop(col1Ref.current, 0.5, -1); // up/left
        const c2 = makeLoop(col2Ref.current, 0.8, 1); // down/right
        const c3 = makeLoop(col3Ref.current, 0.6, -1); // up/left

        return () => { c1(); c2(); c3(); };
    }, []);

    return (
        <section
            ref={heroRef}
            className="tp-hero-area p-relative fix z-index-1"
            style={{
                backgroundColor: '#060608',
                overflow: 'hidden',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'stretch',
            }}
        >
            {/* ── Atmospheric glow blobs ── */}
            <div style={{
                position: 'absolute', top: '-10%', left: '-5%',
                width: '45vw', height: '45vw',
                background: 'radial-gradient(circle, rgba(63,84,147,0.30) 0%, transparent 70%)',
                borderRadius: '50%', pointerEvents: 'none', zIndex: 0,
            }} />
            <div style={{
                position: 'absolute', top: '5%', right: '0%',
                width: '40vw', height: '40vw',
                background: 'radial-gradient(circle, rgba(112,198,225,0.18) 0%, transparent 70%)',
                borderRadius: '50%', pointerEvents: 'none', zIndex: 0,
            }} />
            <div style={{
                position: 'absolute', bottom: '10%', left: '30%',
                width: '30vw', height: '30vw',
                background: 'radial-gradient(circle, rgba(105,196,91,0.12) 0%, transparent 70%)',
                borderRadius: '50%', pointerEvents: 'none', zIndex: 0,
            }} />

            {/* ── Split layout: TEXT LEFT | IMAGE COLUMNS RIGHT ── */}
            <div className="hero-split-layout">
                {/* ── LEFT PANEL: text content ── */}
                <div className="hero-text-panel">
                    {/* Eyebrow */}
                    <p ref={eyebrowRef} style={{
                        fontSize: '0.78rem',
                        letterSpacing: '3.5px',
                        textTransform: 'uppercase',
                        color: 'rgba(112,198,225,0.8)',
                        marginBottom: '22px',
                        fontFamily: 'var(--font-inter), sans-serif',
                        display: 'flex', alignItems: 'center', gap: '12px',
                        opacity: 0,
                    }}>
                        <span style={{ display: 'inline-block', width: '36px', height: '1px', background: 'linear-gradient(to right, #69c45b, #70c6e1)', verticalAlign: 'middle' }} /> Creative Digital Agency
                    </p>

                    {/* Main headline */}
                    <h1 ref={titleRef}>
                        <span style={{ display: 'block' }}>360°</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4em', flexWrap: 'wrap' }}>
                            <em className="hero-title-gradient">Degree</em>
                            <span>Marketing</span>
                        </span>
                    </h1>

                    {/* Description + CTAs */}
                    <div ref={ctaRef} style={{ opacity: 0 }}>
                        <p style={{
                            color: 'rgba(255,255,255,0.6)',
                            fontSize: '1rem',
                            lineHeight: 1.75,
                            marginBottom: '32px',
                            fontFamily: 'var(--font-inter), sans-serif',
                            fontWeight: 300,
                            maxWidth: '480px',
                        }}>
                            Liro Studios is the ultimate creative partner for ambitious brands — blending strategy, design &amp; performance.
                        </p>

                        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                            <Link href="/service" className="tp-btn-black btn-red-bg" style={{ textDecoration: 'none', position: 'relative' }}>
                                <span className="tp-btn-black-filter-blur">
                                    <ButtonBlurFilter filterId="heroBtn1" />
                                </span>
                                <span className="tp-btn-black-filter d-inline-flex align-items-center" style={{ filter: "url(#heroBtn1)" }}>
                                    <span className="tp-btn-black-text">Our Services</span>
                                    <span className="tp-btn-black-circle">
                                        <ArrowSvg width="14" height="14" strokeWidth="2" />
                                    </span>
                                </span>
                            </Link>

                            <Link href="/contact" className="tp-btn-black btn-transparent-bg" style={{ textDecoration: 'none', position: 'relative' }}>
                                <span className="tp-btn-black-filter-blur">
                                    <ButtonBlurFilter filterId="heroBtn2" />
                                </span>
                                <span className="tp-btn-black-filter d-inline-flex align-items-center" style={{ filter: "url(#heroBtn2)" }}>
                                    <span className="tp-btn-black-text">Let's Talk</span>
                                    <span className="tp-btn-black-circle">
                                        <ArrowSvg width="14" height="14" strokeWidth="2" />
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ── RIGHT PANEL: 3 vertical scrolling image columns ── */}
                <div ref={imgPanelRef} className="hero-image-panel" style={{ opacity: 0 }}>
                    {/* Top & bottom fades */}
                    <div className="hero-fade-1" />
                    <div className="hero-fade-2" />

                    {/* Column 1 — scrolls UP slowly */}
                    <div className="hero-col-wrapper">
                        <div ref={col1Ref} className="hero-scroll-col">
                            {col1.map((item, index) => (
                                <div key={item.uniqueId} className="hero-img-item hero-img-item-1">
                                    <Image src={typeof item.src === 'string' ? item.src : item.src.src} alt={item.label} fill sizes="(max-width: 991px) 40vw, 15vw" style={{ objectFit: 'cover' }} priority={index < 2} />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)' }} />
                                    <span style={{
                                        position: 'absolute', bottom: '10px', left: '12px',
                                        color: '#69c45b', fontSize: '0.62rem',
                                        letterSpacing: '1.5px', textTransform: 'uppercase',
                                        fontFamily: 'var(--font-inter), sans-serif',
                                    }}>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column 2 — scrolls DOWN faster */}
                    <div className="hero-col-wrapper mobile-hide">
                        <div ref={col2Ref} className="hero-scroll-col">
                            {col2.map((item, index) => (
                                <div key={item.uniqueId} className="hero-img-item hero-img-item-2">
                                    <Image src={typeof item.src === 'string' ? item.src : item.src.src} alt={item.label} fill sizes="(max-width: 991px) 40vw, 15vw" style={{ objectFit: 'cover' }} priority={index < 2} />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)' }} />
                                    <span style={{
                                        position: 'absolute', bottom: '10px', left: '12px',
                                        color: '#70c6e1', fontSize: '0.62rem',
                                        letterSpacing: '1.5px', textTransform: 'uppercase',
                                        fontFamily: 'var(--font-poppins)',
                                    }}>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column 3 — scrolls UP medium */}
                    <div className="hero-col-wrapper mobile-hide">
                        <div ref={col3Ref} className="hero-scroll-col">
                            {col3.map((item, index) => (
                                <div key={item.uniqueId} className="hero-img-item hero-img-item-3">
                                    <Image src={typeof item.src === 'string' ? item.src : item.src.src} alt={item.label} fill sizes="(max-width: 991px) 40vw, 15vw" style={{ objectFit: 'cover' }} priority={index < 2} />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)' }} />
                                    <span style={{
                                        position: 'absolute', bottom: '10px', left: '12px',
                                        color: 'rgba(255,255,255,0.7)', fontSize: '0.62rem',
                                        letterSpacing: '1.5px', textTransform: 'uppercase',
                                        fontFamily: 'var(--font-poppins)',
                                    }}>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeMainHero;