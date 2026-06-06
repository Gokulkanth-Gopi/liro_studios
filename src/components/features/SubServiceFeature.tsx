import feature from '../../../public/assets/img/services/digitalmarketing.webp';

import { FeatureArrowIcon } from '@/svg/FeaturesIcons';
import Image from 'next/image';
 

const ServiceFeature = () => {


    return (
        <div className="tp-service-5-features-ptb p-relative">
            <div className="container container-1550">
                <div className="tp-service-4-process-video service-5-pos">
                    {/* <button onClick={() => playVideo("VCPGMjCW0is")} className="popup-video dgm-testimonial-playbtn" >
                        <span>Play Video</span>
                    </button> */}
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-service-5-feature-wrap p-relative">
                            <div className="tp-service-5-feature-content">
                                <span><FeatureArrowIcon /></span>
                                <h3 className="tp-service-5-feature-title">Boost growth <br /> with expert digital <br />
                                    marketing solutions</h3>
                            </div>
                            <Image style={{ width: "100%", height: "auto" }} data-speed=".8" src={feature} alt="feature image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceFeature;