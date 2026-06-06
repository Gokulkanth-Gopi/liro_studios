import ServiceBanner from '../../../public/assets/img/services/ban.png';
import serviceBg from '../../../public/assets/img/services/service-4-bg.png';
import Image from 'next/image';
 

const ServiceFourBanner = () => {
    return (
        <div className="tp-service-4-banner-area p-relative">
            <div className="tp-service-4-bg-shape">
                <Image src={serviceBg} alt="Liro Studios Service Background" loading="lazy" />
            </div>
            <div className="container container-1320">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-service-4-banner-breadcrumb p-relative pb-25">
                            <span>Our Services</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ar-banner-wrap ar-about-us-4">
                <Image 
                    style={{ width: "100%", height: "auto" }} 
                    className="w-100" 
                    src={ServiceBanner} 
                    alt="Liro Studios Digital Agency Services Team" 
                    data-speed=".8" 
                    priority 
                    fetchPriority="high"
                    sizes="100vw" />
            </div>
        </div>
    );
};

export default ServiceFourBanner;