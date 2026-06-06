"use client";
import shape1 from "../../../public/assets/img/home-02/text-slider/shape-1.png";
import shape2 from "../../../public/assets/img/home-02/text-slider/shape-3.png";
import shape3 from "../../../public/assets/img/home-02/text-slider/shape-2.png";
import shape4 from "../../../public/assets/img/home-02/text-slider/shape-4.png";
import Image from 'next/image';
import React from 'react';

const SocialMediaMarketingTextAreaTwo = ({ spacingCls = "pt-200" }) => {
    const services = [
        {
            id: 1,
            title: "Content Strategy",
            shape: shape1,
            colorClass: "gradient-bulet",
            repeatCount: 4
        },
        {
            id: 2,
            title: "Social Campaigns",
            shape: shape2,
            colorClass: "paste-bulet",
            repeatCount: 4
        },
        {
            id: 3,
            title: "Community Management",
            shape: shape3,
            colorClass: "yellow-bulet",
            repeatCount: 4
        },
        {
            id: 4,
            title: "Influencer Marketing",
            shape: shape4,
            colorClass: "pink-bulet",
            repeatCount: 3
        }
    ];

    return (
        <div className={`des-text-moving-2-area ${spacingCls} pb-60 z-index-1`}>
            <div className="des-text-moving-wrap">
                <div className="des-text-title-box text-center">
                    <div className="des-text-title-wrap">
                        <h4 className="des-text-title">We can help you with</h4>
                    </div>
                    <p>Check out some of our campaigns by area of expertise</p>
                </div>

                {services.map((service, index) => (
                    <React.Fragment key={service.id}>
                        <div className="des-text-moving-top active moving-text">
                            <div className={`des-text-item hover-reveal-item ${service.colorClass} sm wrapper-text`}>
                                <div className="d-flex align-items-center">
                                    {[1, 2, 3, 4].slice(0, service.repeatCount).map((num) => (
                                        <span key={`${service.id}-rep-${num}`}>{service.title}</span>
                                    ))}
                                </div>
                                <div className="des-text-reveal-img" >
                                    <Image style={{ width: "100%", height: "auto" }} src={service.shape} alt={`${service.title} shape`} />
                                </div>
                            </div>
                        </div>

                        {index < services.length - 1 && (
                            <div className="des-text-title-box text-center">
                                <div className="des-text-title-wrap">
                                    <h4 className="des-text-title sm">Click to view Services</h4>
                                </div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default SocialMediaMarketingTextAreaTwo;
