"use client"
import avaterImg from "../../../public/assets/img/home-02/hero/avater.png";
import heroImg1 from "../../../public/assets/img/home-02/hero/hero-1.jpg";
import heroImg2 from "../../../public/assets/img/home-02/hero/hero-2.jpg";
import heroImg3 from "../../../public/assets/img/home-02/hero/hero-3.png";
import heroImg4 from "../../../public/assets/img/home-02/hero/hero-4.jpg";
import heroImg5 from "../../../public/assets/img/home-02/hero/hero-5.jpg";
import heroImg6 from "../../../public/assets/img/home-02/hero/hero-6.jpg";
import heroImg7 from "../../../public/assets/img/home-02/hero/hero-7.jpg";
import { ArrowTwentyEight } from "@/svg/ArrowIcons";
import Image from "next/image";
import Link from "next/link";

const heroImages = [
    {
        id: "hero-box-1",
        boxClass: "mb-150",
        images: [
            { id: "hero-img-1-1", className: "tp-heo-2-img tp-hero-2-img-1", src: heroImg1 },
            { id: "hero-img-1-2", className: "tp-heo-2-img tp-hero-2-img-2 text-end", src: heroImg2 },
            { id: "hero-img-1-3", className: "tp-heo-2-img tp-hero-2-img-3 text-end", src: heroImg3 },
        ],
    },
    {
        id: "hero-box-2",
        boxClass: "mb-150",
        images: [
            { id: "hero-img-2-1", className: "tp-heo-2-img tp-hero-2-img-1", src: heroImg4 },
            { id: "hero-img-2-2", className: "tp-heo-2-img tp-hero-2-img-2 text-end", src: heroImg5 },
            { id: "hero-img-2-3", className: "tp-heo-2-img tp-hero-2-img-3 text-end", src: heroImg3 },
        ],
    },
    {
        id: "hero-box-3",
        boxClass: "last-item",
        images: [
            { id: "hero-img-3-1", className: "tp-heo-2-img tp-hero-2-img-1", src: heroImg6 },
            { id: "hero-img-3-2", className: "tp-heo-2-img tp-hero-2-img-2 text-end", src: heroImg7 },
        ],
    },
];

const SocialMediaMarketingHero = () => {
    return (
        <div className="tp-hero-2-wrapper">
            <div className="tp-hero-2-area include-bg pt-180 pb-160">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-hero-2-content text-center mb-25">
                                <span className="tp-hero-2-subtitle tp_fade_anim" data-delay=".3">Elevating Brands with <br /> Strategic Marketing</span>
                                <h1 className="tp-hero-2-title tp_fade_anim" data-delay=".5">Social Media Marketing</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="tp-hero-2-avater-box d-flex align-items-center justify-content-center justify-content-md-start tp_fade_anim" data-delay=".7" data-on-scroll="3">
                                <div className="tp-hero-2-avater">
                                    <Image src={avaterImg} alt="avater-image" />
                                </div>
                                <div className="tp-hero-2-avater-content">
                                    <h4>2500+</h4>
                                    <span>Engaged and counting</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="tp-hero-2-btn-box tp-light-bg-btn text-center text-md-end tp_fade_anim" data-delay=".7" data-on-scroll="3">
                                <Link className="tp-btn-border" href="/portfolio-details-creative-slider-light">
                                    Explore Our Campaigns {" "}
                                    <span><ArrowTwentyEight /></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tp-hero-2-img-wrap d-none d-md-block">
                <div className="container container-1230">
                    {heroImages.map((box) => (
                        <div key={box.id} className={`tp-hero-2-img-box ${box.boxClass}`}>
                            <div className="row">
                                {box.images.map((img) => (
                                    <div key={img.id} className="col-12">
                                        <div className={img.className}>
                                            <Image src={img.src} alt="hero-image" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SocialMediaMarketingHero;
