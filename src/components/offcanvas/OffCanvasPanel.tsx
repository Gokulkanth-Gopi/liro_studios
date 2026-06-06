import logo from '../../../public/assets/img/logo/logo.png';
import { CrossIconTwo, EmailSvg, FacebookSvg, InstagramSvg, LinkedinSvg, WhatsAppSvg } from '@/svg';
import MainMobileMenu from "../../layouts/subComponents/MainMobileMenu";
import Image from 'next/image';
import Link from 'next/link';
 

type IProps = {
    openOffcanvas: boolean;
    setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

const OffCanvasPanel: React.FC<IProps> = ({ openOffcanvas, setOpenOffcanvas }) => {
    return (
        <>
            <div className={`tp-offcanvas-area ${openOffcanvas ? "opened" : ""}`}>
                <div className="tp-offcanvas-wrapper offcanvas-black-bg">
                    <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
                        <div className="tp-offcanvas-logo">
                            <Link href="/" aria-label="Liro Studios Home Page">
                                <Image 
                                    width={140} 
                                    src={logo} 
                                    alt="Liro Studios Logo - Creative Digital Media Agency in Salem" 
                                    priority 
                                />
                            </Link>
                        </div>
                        <div className="tp-offcanvas-close">
                                <button 
                                    type="button" 
                                    onClick={() => setOpenOffcanvas(false)} 
                                    className="tp-offcanvas-close-btn" 
                                    aria-label="Close Navigation Menu"
                                    title="Close Menu"
                                >
                                <CrossIconTwo />
                            </button>
                        </div>
                    </div>

                    <div className="tp-offcanvas-main">
                        <div className="tp-offcanvas-content d-none d-xl-block mb-20">
                            <h2 className="tp-offcanvas-title">Liro Studios</h2>
                            <p>
                                Liro Studios is a premier digital media agency in Salem, Tamil Nadu, 
                                specializing in professional video production, creative marketing, 
                                and comprehensive branding solutions.
                            </p>
                        </div>

                        <div className="tp-offcanvas-menu d-xl-none mb-20">
                            <nav aria-label="Main Mobile Navigation">
                                <MainMobileMenu />
                            </nav>
                        </div>

                        <div className="tp-offcanvas-contact mb-20">
                            <h2 className="tp-offcanvas-title sm">Contact Details</h2>
                            <ul>
                                <li>
                                    <Link href="tel:+918778796477" title="Call Liro Studios" aria-label="Call Liro Studios directly at +91 87787 96477">
                                        +91 87787 96477
                                    </Link>
                                </li>
                                <li>
                                    <Link href="mailto:contact@lirostudios.com" title="Email Liro Studios" aria-label="Email Liro Studios at contact@lirostudios.com">
                                        contact@lirostudios.com
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="https://www.google.com/maps/place/Salem,+Tamil+Nadu,+India/@11.9227225,76.3227225,12z" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        title="Visit Liro Studios in Salem, Tamilnadu"
                                        aria-label="View Liro Studios Salem location on Google Maps"
                                    >
                                        Salem, Tamilnadu, India.
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="tp-offcanvas-social">
                            <h2 className="tp-offcanvas-title sm">Follow Our Journey</h2>
                            <ul>
                                <li>
                                    <Link 
                                        href="https://instagram.com/liro_studios" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        title="Liro Studios on Instagram"
                                        aria-label="Follow Liro Studios on Instagram"
                                    >
                                        <InstagramSvg />
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="https://www.linkedin.com/company/liro-medias" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        title="Liro Studios on LinkedIn"
                                        aria-label="Connect with Liro Studios on LinkedIn"
                                    >
                                        <LinkedinSvg />
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="https://www.facebook.com/profile.php?id=61577393215357" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        title="Liro Studios on Facebook"
                                        aria-label="Follow Liro Studios on Facebook"
                                    >
                                        <FacebookSvg />
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="https://wa.me/918778796477" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        title="Chat with Liro Studios on WhatsApp"
                                        aria-label="Message Liro Studios on WhatsApp"
                                    >
                                        <WhatsAppSvg />
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="mailto:contact@lirostudios.com" 
                                        title="Email Liro Studios Support"
                                        aria-label="Send an inquiry email to Liro Studios"
                                    >
                                        <EmailSvg />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <button 
                onClick={() => setOpenOffcanvas(false)} 
                className={`body-overlay ${openOffcanvas ? "opened" : ""}`} 
                aria-label="Close offcanvas overlay" 
                type="button" 
                tabIndex={0}
            />
        </>
    );
};

export default OffCanvasPanel;
