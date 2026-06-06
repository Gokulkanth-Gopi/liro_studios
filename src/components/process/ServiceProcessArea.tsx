import serviceThumb from '../../../public/assets/img/services/service-4-thumb-1.png';
import { ServiceShapeIcon } from '@/svg/ServiesIcons';
import Image from 'next/image';
 

const ServiceProcessArea = () => {

    return (
        <div className="tp-service-4-process-ptb pt-100 pb-100">
            <div className="container container-1230">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="dgm-service-title-box service-4-heading z-index-1 mb-60">
                            <span className="tp-section-subtitle subtitle-grey mb-15 tp_fade_anim" data-delay=".3">Our Process</span>
                            <h2 className="tp-section-title-grotesk tp_fade_anim" data-delay=".5">
                                We execute with precision <br />
                                using a proven{' '}
                                <span className="p-relative">
                                    strategic{' '}
                                </span>
                                <br />
                                framework
                                <span className="tp-section-title-shape">
                                    <ServiceShapeIcon />
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="tp-service-4-process-wrap">
                            <div className="tp-service-4-process-list">
                                <span>01</span>
                                <p>Strategic Discovery <br />
                                    & Research</p>
                            </div>
                            <div className="tp-service-4-process-list">
                                <span>02</span>
                                <p>Problem Definition <br />
                                    & Roadmap</p>
                            </div>
                            <div className="tp-service-4-process-list">
                                <span>03</span>
                                <p>Design, Prototyping, <br />
                                    & Wireframing</p>
                            </div>
                            <div className="tp-service-4-process-list">
                                <span>04</span>
                                <p>Development & <br />
                                    Deployment</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="tp-service-4-process-wrapper pl-70 p-relative">
                            <p className="pl-200 mb-50">Our design system is powered by precision and creativity, <br />
                                ensuring every pixel serves a purpose. We build scalable <br />
                                solutions that grow with your business.</p>
                            <div className="tp-service-4-process-thumb fix">
                                <div className="tp_img_reveal">
                                    <Image src={serviceThumb} alt="service thumb" />
                                </div>
                            </div>
                            {/* <div className="tp-service-4-process-video">
                                <button onClick={() => playVideo("VCPGMjCW0is")} className="popup-video dgm-testimonial-playbtn">
                                    <span><VideoPlayIcon /></span>
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceProcessArea;