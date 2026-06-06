"use client";
import brand1 from "../../../public/assets/img/brands/Liro Studios-1.webp";
import brand2 from "../../../public/assets/img/brands/Liro Studios-2.webp";
import brand3 from "../../../public/assets/img/brands/Liro Studios-3.webp";
import brand4 from "../../../public/assets/img/brands/Liro Studios-4.webp";
import brand5 from "../../../public/assets/img/brands/Liro Studios-5.webp";
import brand6 from "../../../public/assets/img/brands/Liro Studios-6.webp";
import brand7 from "../../../public/assets/img/brands/Liro Studios-7.webp";
import brand8 from "../../../public/assets/img/brands/Liro Studios-8.webp";
import brand9 from "../../../public/assets/img/brands/Liro Studios-9.webp";
import brand10 from "../../../public/assets/img/brands/Liro Studios-10.webp";
import brand11 from "../../../public/assets/img/brands/Liro Studios-11.webp";
import brand12 from "../../../public/assets/img/brands/Liro Studios-12.webp";
import brand13 from "../../../public/assets/img/brands/Liro Studios-13.webp";
import brand14 from "../../../public/assets/img/brands/Liro Studios-14.webp";
import brand15 from "../../../public/assets/img/brands/Liro Studios-15.webp";
import brand16 from "../../../public/assets/img/brands/Liro Studios-16.webp";
import brand17 from "../../../public/assets/img/brands/Liro Studios-17.webp";
import brand18 from "../../../public/assets/img/brands/Liro Studios-18.webp";
import brand19 from "../../../public/assets/img/brands/Liro Studios-19.webp";
import brand20 from "../../../public/assets/img/brands/Liro Studios-20.webp";
import brand21 from "../../../public/assets/img/brands/Liro Studios-21.webp";
import brand22 from "../../../public/assets/img/brands/Liro Studios-22.webp";
import brand23 from "../../../public/assets/img/brands/Liro Studios-23.webp";
import brand24 from "../../../public/assets/img/brands/Liro Studios-24.webp";
import brand25 from "../../../public/assets/img/brands/Liro Studios-25.webp";
import brand26 from "../../../public/assets/img/brands/Liro Studios-26.webp";
import brand27 from "../../../public/assets/img/brands/Liro Studios-27.webp";
import brand28 from "../../../public/assets/img/brands/Liro Studios-28.webp";
import brand29 from "../../../public/assets/img/brands/Liro Studios-29.webp";
import brand30 from "../../../public/assets/img/brands/Liro Studios-30.webp";
import brand31 from "../../../public/assets/img/brands/Liro Studios-31.webp";
import brand32 from "../../../public/assets/img/brands/Liro Studios-32.webp";
import brand33 from "../../../public/assets/img/brands/Liro Studios-33.webp";
import brand34 from "../../../public/assets/img/brands/Liro Studios-34.webp";
import brand35 from "../../../public/assets/img/brands/Liro Studios-35.webp";
import brand36 from "../../../public/assets/img/brands/Liro Studios-36.webp";
import brand37 from "../../../public/assets/img/brands/Liro Studios-37.webp";
import brand38 from "../../../public/assets/img/brands/Liro Studios-38.webp";
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Keyboard } from 'swiper/modules';
import type { SwiperRef } from 'swiper/react';
import Image, { StaticImageData } from 'next/image';

const DesignStudioBrand = () => {
    // All brand logos
    const allBrands = [
        brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10,
        brand11, brand12, brand13, brand14, brand15, brand16, brand17, brand18, brand19, brand20,
        brand21, brand22, brand23, brand24, brand25, brand26, brand27, brand28, brand29, brand30,
        brand31, brand32, brand33, brand34, brand35, brand36, brand37, brand38
    ];

    // Distribute logos across 4 rows evenly (10, 10, 9, 9)
    const row1Logos = allBrands.slice(0, 10);
    const row2Logos = allBrands.slice(10, 20);
    const row3Logos = allBrands.slice(20, 29);
    const row4Logos = allBrands.slice(29, 38);

    return (
        <div className="des-brand-area pb-100">
            <div className="container container-1510">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="des-brand-title-box mb-40">
                            <h2 className="tp-section-title mb-0">Trusted by Innovative Brands Worldwide</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="des-brand-moving-wrap">
                <BrandRow logos={row1Logos} />
                <BrandRow logos={row2Logos} reverse={true} />
                <BrandRow logos={row3Logos} />
                <BrandRow logos={row4Logos} reverse={true} />
            </div>

        </div>
    );
};

const BrandRow = ({ logos, reverse = false }: { logos: StaticImageData[], reverse?: boolean }) => {
    const swiperRef = useRef<SwiperRef>(null);

    return (
        <div className="des-brand-moving-wrap-row pb-10">
            <Swiper
                ref={swiperRef}
                modules={[Autoplay, FreeMode, Keyboard]}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    reverseDirection: reverse,
                }}

                speed={1000}
                freeMode={false}
                simulateTouch={true}
                keyboard={{ enabled: true, onlyInViewport: true }}

                slidesPerView="auto"
spaceBetween={10}
                className="des-brand-carousel"
                style={{ width: '100%' }}
            >
                {logos.map((logo, index) => (
                    <SwiperSlide key={`${index}-${logo.src}`} style={{ width: 'auto' }}>
                        <div className="des-brand-item-inner">
                            <Image
                                src={logo}
                                alt="brand-logo"
                                sizes="100px"
                                quality={80}
                                style={{ width: '100px', height: 'auto' }}
                            />
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default DesignStudioBrand;
