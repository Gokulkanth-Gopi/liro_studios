import teamBgImg from '../../../public/assets/img/misc/team-bg.png';
import { ArrowTwenty } from '@/svg/ArrowIcons';
 

const ServiceFiveHero = () => {
    return (
        <div className="ar-hero-area p-relative pt-190 pb-100" style={{ backgroundImage: `url(${teamBgImg.src})` }}>
            <div className="container container-1230">
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <div className="ar-hero-title-box service-5-heading tp_fade_anim mb-80" data-delay=".3">
                            <div className="ar-about-us-4-title-box d-flex align-items-center mb-20">
                                <span className="tp-section-subtitle pre tp_fade_anim">Marketing</span>
                                <div className="ar-about-us-4-icon">
                                    <ArrowTwenty />
                                </div>
                            </div>
                            <h1 className="tp-career-title">Digital Marketing
                                {/* <span className="shape-1"><Image src={shape} alt="shape" /></span> */}
                                </h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-8">
                        <div className="tp-service-5-text tp_fade_anim" data-delay=".5">
                            <p>We provide comprehensive digital marketing solutions to help your <br />business grow online, from search engine optimization to <br />targeted social media campaigns and data-driven strategies.</p>
                        </div>
                        <div className="tp-service-5-list tp_fade_anim " data-delay=".7">
                            <ul>
                                <li>+ SEO</li>
                                <li>+ Social Media Marketing</li>
                                <li>+ Email Marketing</li>
                                <li>+ PPC</li>
                                <li>+ Content Marketing</li>
                                <li>+ Video Marketing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceFiveHero;