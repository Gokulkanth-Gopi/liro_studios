'use client';
import whiteLogo from "../../../public/assets/img/logo/logo.png";
import OffCanvasPanel from "@/components/offcanvas/OffCanvasPanel";
import useStickyHeader from "../../hooks/useStickyHeader"
import { ArrowSvg, ButtonBlurFilter } from "@/svg";
import NavMenus from "../subComponents/NavMenus";
import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

const HomeMainHeader = ({ containerCls = "container-1250" }: { containerCls?: string }) => {
    const [openOffCanvas, setOpenOffCanvas] = useState(false);
    const isSticky = useStickyHeader(20);
    // Always use white logo and menu for dark mode
    const logoSrc = whiteLogo;
    const menuColor = 'white';

    return (
        <>
            <div className={`tp-header-area tp-header-ptb tp-header-blur
         header-transparent border-style-line tp-header-border ${isSticky ? 'header-sticky' : ''}`} style={{ padding: '10px 0', height: '90px', display: 'flex', alignItems: 'center' }}>
                <div className={`container ${containerCls}`} style={{ width: '100%' }}>
                    <div className="row align-items-center" style={{ height: '100%' }}>
                        <div className="col-xl-2 col-lg-6 col-6" style={{ display: 'flex', alignItems: 'center' }}>
                            <div className="tp-header-logo" style={{ display: 'flex', alignItems: 'center' }}>
                                <Link href="/" aria-label="Liro Studios Home">
                                    <Image width={150} height={40} src={logoSrc} alt="Liro Studios - Creative Digital Agency Logo" style={{ height: 'auto' }} />
                                </Link>
                            </div>

                        </div>
                        <div className="col-xl-7 d-none d-xl-block" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div className="tp-header-box text-center" style={{ width: '100%' }}>
                                <div className={`tp-header-menu tp-header-dropdown dropdown-white-bg`}>
                                    <nav className="tp-mobile-menu-active">
                                        <NavMenus menuColor={menuColor} />
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <div className="tp-header-right d-flex align-items-center justify-content-end" style={{ height: '100%' }}>
                                <div className="tp-header-btn-box ml-25 d-none d-md-flex">
                                    <Link href="/contact" className="tp-btn-black btn-red-bg" aria-label="Contact Us for a Free Consultation">
                                        <span className="tp-btn-black-filter-blur">
                                            <ButtonBlurFilter filterId="buttonFilter" />
                                        </span>
                                        <span className="tp-btn-black-filter d-inline-flex align-items-center" style={{ filter: "url(#buttonFilter)" }}>
                                            <span className="tp-btn-black-text">Get a Free Consultation</span>
                                            <span className="tp-btn-black-circle">
                                                <ArrowSvg />
                                            </span>
                                        </span>
                                    </Link>
                                </div>
                                <div className="tp-header-bar ml-20 d-xl-none">
                                    <button onClick={() => setOpenOffCanvas(true)} className="tp-offcanvas-open-btn" aria-label="Open Navigation Menu">
                                        <i></i>
                                        <i></i>
                                        <i></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* off canvas */}
            <OffCanvasPanel openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffCanvas} />
            {/* off canvas */}
        </>
    );
};

export default HomeMainHeader;
