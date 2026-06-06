import port1 from '../../../public/assets/img/projects/raga-project-01.png';
import port2 from '../../../public/assets/img/project-img/gal-12.webp';
import Image from 'next/image';


const PortfolioDetailsThreeGalleryTwo = () => {
    return (
        <div className="tp-pd-3-gallery-area">
            <div className="container-fluid">
                <div className="row gx-20">
                    <div className="col-lg-6">
                        <div className="tp-pd-3-gallery-img medium-img mb-20">
                            <Image data-speed=".8" style={{ width: "100%", height: "auto" }} src={port1} alt="Hastham Naturals Package Design by Liro Studios" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-pd-3-gallery-img medium-img mb-20">
                            <Image data-speed="1.1" style={{ width: "100%", height: "auto" }} src={port2} alt="RAGAA Dance Academy Brand Identity" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetailsThreeGalleryTwo;