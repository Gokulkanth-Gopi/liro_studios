import UniqueAICopyright from './subComponents/MainFooterCopyright';
import { FacebookSvg, InstagramSvg, LinkedinSvg, WhatsAppSvg, EmailSvg, FooterShape } from '@/svg';
import Link from 'next/link';
 

const MainFooter = () => {
    return (
        <footer>
            {/* -- footer area start -- */}
            <div className="ai-footer-area pt-100 pb-100 p-relative">
                <div className="container container-1230">
                    <div className="row">
                        {/* Brand Section */}
                        <div className="col-xl-3 col-lg-5 col-md-12">
                            <div className="ai-footer-widget ai-footer-col-1 tp_fade_anim" data-delay=".3">
                                <h2 className="ai-footer-widget-title" style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                                    We build <br />
                                    iconic <br />
                                    <span className='p-relative d-inline-block'>
                                        digital brands
                                        <FooterShape />
                                    </span>
                                </h2>
                            </div>
                        </div>
                      
                        {/* Navigation Menu */}
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4">
                            <div className="ai-footer-widget ai-footer-col-3 tp_fade_anim" data-delay=".5">
                                <h3 className="ai-footer-widget-title-sm">Menu</h3>
                                <div className="ai-footer-menu">
                                    <ul>
                                        <li><Link href="/" aria-label="Home">Home</Link></li>
                                        <li><Link href="/service" aria-label="Services">Services</Link></li>
                                        <li><Link href="/contact" aria-label="Contact Us">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4">
                            <div className="ai-footer-widget ai-footer-col-4 tp_fade_anim" data-delay=".7">
                                <h3 className="ai-footer-widget-title-sm">Say Hello</h3>
                                <div className="ai-footer-contact-info">
                                    <div className="ai-footer-contact-item">
                                        <Link href="mailto:contact@lirostudios.com">contact@lirostudios.com</Link>
                                        <Link href="tel:+918778796477">+91 87787 96477</Link>
                                    </div>
                                    <div className="ai-footer-contact-item">
                                        <p style={{ color: 'rgba(255, 255, 255, 0.6)', marginBottom: 0 }}>
                                            Salem, Tamil Nadu, India
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className="col-xl-3 offset-xl-1 col-lg-4 col-md-6 col-sm-6">
                            <div className="ai-footer-widget ai-footer-col-2" style={{ minWidth: '250px' }}>
                                <h3 className="ai-footer-widget-title-sm">Socials</h3>
                                <div className="ai-footer-social-container">
                                    <Link href="https://instagram.com/liro_studios" target="_blank" aria-label="Visit our Instagram profile">
                                        <InstagramSvg />
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/liro-medias" target="_blank" aria-label="Visit our LinkedIn profile">
                                        <LinkedinSvg />
                                    </Link>
                                    <Link href="https://www.facebook.com/profile.php?id=61577393215357" target="_blank" aria-label="Visit our Facebook profile">
                                        <FacebookSvg />
                                    </Link>
                                    <Link href="https://wa.me/918778796477" target="_blank" aria-label="Chat with us on WhatsApp">
                                        <WhatsAppSvg />
                                    </Link>
                                    <Link href="mailto:contact@lirostudios.com" aria-label="Send us an email">
                                        <EmailSvg />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .ai-footer-social-container {
                    display: flex !important;
                    flex-direction: row !important;
                    flex-wrap: nowrap !important;
                    gap: 25px !important;
                    align-items: center !important;
                    justify-content: flex-start !important;
                    width: max-content !important;
                    margin-top: 15px !important;
                }
                .ai-footer-social-container a {
                    display: inline-flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    color: #ffffff !important;
                    opacity: 1 !important;
                    text-decoration: none !important;
                    transition: all 0.3s ease !important;
                }
                .ai-footer-social-container a:hover {
                    transform: translateY(-3px) !important;
                    opacity: 0.8 !important;
                }
                .ai-footer-social-container svg {
                    width: 20px !important;
                    height: 20px !important;
                    filter: brightness(0) invert(1) !important;
                    display: block !important;
                }
                .ai-footer-widget-title-sm {
                    color: #ffffff !important;
                    opacity: 1 !important;
                    font-weight: 700 !important;
                    margin-bottom: 20px !important;
                }
            ` }} />

            {/* Footer Copyright */}
            <UniqueAICopyright />

            {/* -- footer area end -- */}
        </footer>
    );
};

export default MainFooter;
