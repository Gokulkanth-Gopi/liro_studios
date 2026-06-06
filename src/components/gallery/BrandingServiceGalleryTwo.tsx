import port1 from '../../../public/assets/img/project-img/project-gal-14.webp';
import port2 from '../../../public/assets/img/project-img/project-gal-16.webp';
import Image from 'next/image';


const BrandingServiceGalleryTwo = () => {
    return (
        <div className="tp-pd-3-gallery-area">
            <div className="container-fluid">
                <div className="row gx-20">
                    <div className="col-lg-6">
                        <div className="tp-pd-3-gallery-img medium-img mb-20">
                            <Image data-speed=".8" style={{ width: "100%", height: "auto" }} src={port1} alt="Branding Case Study - Premium Visual Identity" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-pd-3-gallery-img medium-img mb-20">
                            <Image data-speed="1.1" style={{ width: "100%", height: "auto" }} src={port2} alt="Branding Case Study - Iconic Market Presence" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandingServiceGalleryTwo;