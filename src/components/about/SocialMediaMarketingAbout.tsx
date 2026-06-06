"use client"
import Link from 'next/link';
import { ArrowSvg, ButtonBlurFilter } from '@/svg';

const SocialMediaMarketingAbout = () => {
    return (
        <div className="des-about-area pb-200">
            <div className="container container-1230">
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <div className="des-about-text text-center">
                            <p className="tp_text_invert_3 mb-45">
                                With over 10 years of experience as a versatile Social Media Marketing
                                Agency, we excel in crafting a wide range of solutions, from dynamic content
                                strategies and engaging campaigns to robust community management, ensuring
                                innovative and effective growth for your brand.
                            </p>
                            <Link href="/contact" className="tp-btn-black btn-red-bg" style={{ textDecoration: 'none', position: 'relative' }}>
                                <span className="tp-btn-black-filter-blur">
                                    <ButtonBlurFilter filterId="aboutContactBtn" />
                                </span>
                                <span className="tp-btn-black-filter d-inline-flex align-items-center" style={{ filter: "url(#aboutContactBtn)" }}>
                                    <span className="tp-btn-black-text">Let's Talk</span>
                                    <span className="tp-btn-black-circle">
                                        <ArrowSvg width="14" height="14" strokeWidth="2" />
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialMediaMarketingAbout;
