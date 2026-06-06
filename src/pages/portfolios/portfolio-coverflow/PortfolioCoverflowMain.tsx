"use client";
import { EffectCoverflow, Keyboard, Mousewheel, Autoplay, Navigation, Controller, Pagination } from 'swiper/modules';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import { useRef, useEffect, useState } from 'react';
import { ArrowNextPrevIcon } from '@/svg/ArrowIcons';
import gsap from 'gsap';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { projectsData } from '@/data/projectData';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioCoverflowMain = () => {
    const mainSwiperRef = useRef<SwiperType | null>(null);
    const [isClient, setIsClient] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const titleRef = useRef<HTMLHeadingElement | null>(null);

    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#000" });

    // Text animation on slide change
    const animateTitle = () => {
        if (titleRef.current) {
            gsap.fromTo(titleRef.current, 
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
            );
        }
    };

    const coverflowParams = {
        modules: [EffectCoverflow, Keyboard, Mousewheel, Autoplay, Navigation, Controller, Pagination],
        className: "coverflow-slider-active fix",
        loop: true,
        effect: "coverflow",
        autoHeight: false,
        speed: 1500,
        spaceBetween: 0,
        centeredSlides: true,
        grabCursor: true,
        keyboard: { 
            enabled: true,
        },
        mousewheel: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
            waitForTransition: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.coverflow-slider-next',
            prevEl: '.coverflow-slider-prev',
        },
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        breakpoints: {
            600: {
                slidesPerView: 2,
                coverflowEffect: {
                    scale: 0.7,
                    rotate: 40,
                }
            },
            991: {
                slidesPerView: 3,
                coverflowEffect: {
                    scale: 0.8,
                    rotate: 45,
                }
            },
            1400: {
                slidesPerView: 4,
                coverflowEffect: {
                    scale: 0.95,
                    rotate: 50,
                }
            },
        },
        onSwiper: (swiper: SwiperType) => {
            mainSwiperRef.current = swiper;
        },
        onSlideChange: (swiper: SwiperType) => {
            setActiveIndex(swiper.realIndex);
            animateTitle();
        }
    };
    
    // Set isClient to prevent hydration mismatch
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Display portfolio items for the coverflow slider
    const displayPortfolioItems = projectsData.slice(0, Math.min(12, projectsData.length));

    if (!isClient) return null;

    return (
        <>
            <div id="magic-cursor" className="cursor-white-bg">
                <div id="ball"></div>
            </div>
            {/* Global Components */}
          
            

            <main style={{ backgroundColor: "#000" }}>
                {/* -- project slider area start -- */}
                <div className="coverflow-slider-main fix">
                    <div className="coverflow-slider-wrap">
                        <Swiper {...coverflowParams}>
                            {displayPortfolioItems.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="coverflow-slider-item">
                                        <Image 
                                            src={item.image} 
                                            width={600}
                                            height={400}
                                            style={{ width: "100%", height: "auto" }} 
                                            priority 
                                            alt={item.title}
                                            quality={85}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    
                    <div className="coverflow-slider-text-wrap">
                        <div className="coverflow-slider-text-inner">
                            <div className="coverflow-slider-content text-center">
                                <h4 className="coverflow-slider-title-sm" ref={titleRef}>
                                    <Link className="tp-line-white" href={displayPortfolioItems[activeIndex]?.link || '#'}>
                                        {displayPortfolioItems[activeIndex]?.title}
                                    </Link>
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="coverflow-slider-arrow">
                        <button 
                            className="coverflow-slider-prev pl-100"
                            onClick={() => mainSwiperRef.current?.slidePrev()}
                            aria-label="Previous slide"
                        >
                            <span><ArrowNextPrevIcon direction="left" strokeColor='currentcolor'/></span>
                            <span>Prev</span>
                        </button>
                        <button 
                            className="coverflow-slider-next pr-100"
                            onClick={() => mainSwiperRef.current?.slideNext()}
                            aria-label="Next slide"
                        >
                            <span>Next</span>
                            <span><ArrowNextPrevIcon direction="right" strokeColor='currentcolor'/></span>
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
};

export default PortfolioCoverflowMain;

