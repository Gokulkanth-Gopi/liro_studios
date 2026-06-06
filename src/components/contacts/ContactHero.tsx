import shapeCircle from '../../../public/assets/img/shapes/funfact-circle-shape copy.png';
import bgShape from '../../../public/assets/img/shapes/funfact-bg-shape.png';
import { EmailIcon, MessageIcon, PhoneIcon } from '@/svg/ContactIcons';
import { ArrowTwenty } from '@/svg/ArrowIcons';
import Image from 'next/image';
import Link from 'next/link';
 

const ContactHero = () => {
    return (
        <div className="ar-hero-area p-relative" style={{ backgroundColor: '#0E0F11', backgroundImage: 'none', color: '#fff' }}>
            <div className="container container-1230">
                <div className="ar-about-us-4-hero-ptb">
                    <div className="row justify-content-center">
                        <div className="col-xl-12">
                            <div className="ar-hero-title-box tp_fade_anim" data-delay=".3">
                                <div className="ar-about-us-4-title-box d-flex align-items-center mb-20">
                                    <h1 className="tp-section-subtitle pre tp_fade_anim" style={{ color: '#fff', fontSize: '16px', fontWeight: '500', display: 'inline-block' }}>Contact Us</h1>
                                    <div className="ar-about-us-4-icon">
                                        <ArrowTwenty />
                                    </div>
                                </div>
                                <h2 className="tp-career-title pb-30" style={{ 
                                    background: 'linear-gradient(90deg, #69C45B 0%, #95E685 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    display: 'inline-block' 
                                }}>Any questions? <br />
                                    simply ask us this is <br />
                                    your home!</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tp-contact-main-bottom">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-9 col-lg-8"></div>

                        <div className="col-xl-3 col-lg-4">
                            <div className="tp-contact-main-funfact-wrap">
                                <div className="crp-hero-funfact-wrap crp-hero-funfact-bg z-index-1 p-relative tp_fade_anim ar-about-funfact-color" data-delay=".5"
                                    style={{ backgroundImage: `url(${bgShape.src})` }}>
                                    <div className="crp-hero-funfact-line d-none d-xl-inline-block"></div>
                                    <div className="crp-hero-funfact-img">
                                        <Image src={shapeCircle} alt="Liro Studios Contact Decoration" loading="lazy" />
                                    </div>
                                    <div className="ar-about-funfact-top-content" style={{ color: '#69C45B' }}>
                                        <h3 style={{ color: '#69C45B' }}>Get <br /> In Touch!</h3>
                                    </div>
                                    <div className="ar-about-funfact-item-box mb-35">
                                        <div className="ar-about-funfact-item d-flex align-items-center">
                                            <div className="ar-about-funfact-item-icon">
                                                <span><PhoneIcon /></span>
                                            </div>
                                            <div className="ar-about-funfact-item-content">
                                                <p style={{ color: '#69C45B' }}> Call Us Directly</p>
                                                <Link className="tp-line-white" href="tel:+918778796477" aria-label="Call Liro Studios at +91 87787 96477">+91 87787 96477</Link>
                                            </div>
                                        </div>
                                        <div className="ar-about-funfact-item d-flex align-items-center">
                                            <div className="ar-about-funfact-item-icon">
                                                <span><EmailIcon /></span>
                                            </div>
                                            <div className="ar-about-funfact-item-content">
                                                <p style={{ color: '#69C45B' }}>Need Support?</p>
                                                <Link className="tp-line-white" href="mailto:contact@lirostudios.com" aria-label="Email Liro Studios at contact@lirostudios.com">contact@lirostudios.com</Link>
                                            </div>
                                        </div>
                                        <div className="ar-about-funfact-item d-flex align-items-center">
                                            <div className="ar-about-funfact-item-icon">
                                                <span><MessageIcon /></span>
                                            </div>
                                            <div className="ar-about-funfact-item-content">
                                                <Link className="tp-line-white" href="https://wa.me/+918778796477" target="_blank" rel="noopener noreferrer" aria-label="Start a WhatsApp Chat with Liro Studios">Start Chat</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ar-about-funfact-item-bottom" style={{ color: '#69C45B' }}>
                                        <p style={{ color: '#69C45B' }}>Check our <span><Link href="/faq-light" aria-label="View our Frequently Asked Questions">FAQ</Link></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactHero;