
"use client"
import { brandMarqueeSwiperParams } from '@/constants/swiper';
import { Swiper, SwiperSlide } from "swiper/react";
 

const ServiceFourBrand = () => {
    const brandItems = [
        "Branding",
        "Digital marketing",
        "Social Media marketing",
        "Content Production",
        "Web Design",
        "Website Development",
        "Social Media Optimization",
        "Motion graphics",
        "Ad Marketing",
        "Photography & Videography",
        "Business Analytics",
        "Video Editing"
    ];

    return (
        <div className="tp-brand-area pt-100 pb-100">
            {/* First Brand Slider */}
            <div className="tp-brand-wrapper green-regular-bg z-index-1">
                <Swiper
                    {...brandMarqueeSwiperParams}
                    className="tp-brand-active fix"
                >
                    {brandItems.map((item) => (
                        <SwiperSlide key={item}>
                            <div className="tp-brand-item">
                                <span className="tp-brand-title">{item}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Second Brand Slider (RTL) */}
            <div className="tp-brand-wrapper white-bg tp-brand-style-2 mt-30">
                <Swiper
                    {...brandMarqueeSwiperParams}
                    className="tp-brand-active fix"
                    dir="rtl"
                >
                    {brandItems.map((item) => (
                        <SwiperSlide key={item}>
                            <div className="tp-brand-item">
                                <span className="tp-brand-title text-black">{item}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ServiceFourBrand;