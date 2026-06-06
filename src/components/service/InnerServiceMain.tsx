import InnerServiceFourItem from './subComponents/InnerServiceMainItem';
import { ServiceShapeIcon } from '@/svg/ServiesIcons';
import servicesData from '@/data/serviceData';
 

const InnerServiceFour = () => {
    return (
        <div className="dgm-service-area dgm-service-radius pt-80 z-index-1">
            <div className="container container-1230">
                <div className="row">
                    <div className="col-xl-7">
                        <div className="dgm-service-title-box service-4-heading z-index-1 mb-70">
                            <span className="tp-section-subtitle subtitle-grey mb-15 tp_fade_anim" data-delay=".3">Core Capabilities</span>
                            <h2 className="tp-section-title-grotesk tp_fade_anim" data-delay=".5">
                                Accelerate revenue with <br />
                                <span className="p-relative">
                                    high-impact{' '}digital
                                </span>{' '}
                                services
                                <span className="tp-section-title-shape">
                                        <ServiceShapeIcon />
                                    </span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="dgm-service-wrap">
                    <div className="row">
                        <div className="col-xl-12">
                            {servicesData.slice(5, 10).map((service) => (
                                <InnerServiceFourItem key={service.id} service={service} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InnerServiceFour;