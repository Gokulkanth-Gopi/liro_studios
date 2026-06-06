"use client";

import { Autoplay, Pagination, Keyboard } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperRef } from 'swiper/react';
import { ArrowTwentyOne } from '@/svg/ArrowIcons';
import { ServicesDT } from '@/types/service-d-t';
import servicesData from '@/data/serviceData';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const ServiceCard = ({ service }: { service: ServicesDT }) => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    return (
        <div style={{ height: '100%' }}>
            <div className="tp-service-4-solution-item mb-30" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className="tp-service-4-solution-item-icon">
                    <span>{service.svgIcon && <service.svgIcon />}</span>
                </div>
                <div className="tp-service-4-solution-item-content" style={{ flex: 1 }}>
                    <h3 className="tp-service-4-solution-item-title">
                        <Link href={service.link}>
                            {service.title}
                        </Link>
                    </h3>
                    <p>{isMounted ? service.description : ''}</p>
                </div>
                <div className="tp-service-4-solution-item-btn" style={{ marginTop: 'auto' }}>
                    <Link href={service.link} aria-label={`View full details of our ${service.title} specialized solutions`}>
                        View Service <span><ArrowTwentyOne /></span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const ServiceSolution = () => {
    const swiperRef = useRef<SwiperRef>(null);

    const handleMouseEnter = () => {
        if (swiperRef.current?.swiper) {
            swiperRef.current.swiper.autoplay.stop();
        }
    };

    const handleMouseLeave = () => {
        if (swiperRef.current?.swiper) {
            swiperRef.current.swiper.autoplay.start();
        }
    };

    // Custom Keyboard Navigation (Global listener with viewport check)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!swiperRef.current?.swiper) return;

            // Check if the slider is in the viewport
            const rect = swiperRef.current.swiper.el.getBoundingClientRect();
            const isVisible = (
                rect.top < globalThis.innerHeight &&
                rect.bottom > 0
            );

            if (!isVisible) return;

            if (e.key === 'ArrowRight') {
                swiperRef.current.swiper.slideNext();
                swiperRef.current.swiper.autoplay.stop();
            } else if (e.key === 'ArrowLeft') {
                swiperRef.current.swiper.slidePrev();
                swiperRef.current.swiper.autoplay.stop();
            }
        };

        globalThis.addEventListener('keydown', handleKeyDown);
        return () => globalThis.removeEventListener('keydown', handleKeyDown);
    }, []);


    return (
        <section className="tp-service-4-solution-area pt-100 pb-100">
            <div className="container container-1320">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="tp-service-4-solution-subtitle pb-50 tp_fade_anim">
                            <p>Holistic Digital Growth Strategies</p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="tp-service-4-solution-heading pb-100 tp_fade_anim">
                            <h2 className="tp-service-4-solution-title">
                                Comprehensive digital services <br /> engineered to build brands, <br /> drive traffic, and secure <br /> long-term market leadership.
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <section className="tp-service-4-solution-slider" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} aria-label="Service Solutions Carousel">
                        <Swiper
                            ref={swiperRef}
                            className='tp-service-4-solution-active swiper'
                            modules={[Autoplay, Pagination, Keyboard]}
                            loop={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            keyboard={{
                                enabled: true,
                                onlyInViewport: true,
                            }}
                            spaceBetween={20}
                            pagination={{
                                el: ".tp-service-4-dot",
                                clickable: true,
                            }}

                            breakpoints={{
                                '1600': { slidesPerView: 3 },
                                '1400': { slidesPerView: 3 },
                                '1200': { slidesPerView: 2 },
                                '992': { slidesPerView: 2 },
                                '768': { slidesPerView: 1.5 },
                                '576': { slidesPerView: 1 },
                                '0': { slidesPerView: 1 }
                            }}
                        >
                            {servicesData.slice(10, 15).map((service) => (
                                <SwiperSlide key={service.id} style={{ height: 'auto' }}>
                                    <ServiceCard key={service.id} service={service} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </section>
                    <div className="tp-service-4-dot text-center" style={{ marginTop: '30px' }}></div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSolution;
