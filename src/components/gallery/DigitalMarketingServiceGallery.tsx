
import Image from 'next/image';

// Image import - using real Liro Studios portfolio work
import port1 from '../../../public/assets/img/projects/petz.png';
import port2 from '../../../public/assets/img/projects/raga.png';
import port3 from '../../../public/assets/img/projects/nur-ma.png';
import port4 from '../../../public/assets/img/project-img/Grid Tumblr Banner.png';

const PortfolioDetailsThreeGallery = () => {
    // Data array
    const galleryData = [
        { id: 1, img: port1, col: 'col-lg-4', extraClass: 'small-img mb-20', alt: "NextGen Robotics Academy - Student Success Campaign" },
        { id: 2, img: port2, col: 'col-lg-4', extraClass: 'small-img mb-20', alt: "NextGen Robotics Academy - Future Leaders Campaign" },
        { id: 3, img: port3, col: 'col-lg-4', extraClass: 'small-img mb-20', alt: "NextGen Robotics Academy - Brand Identity Design" },
        { id: 4, img: port4, col: 'col-lg-12', extraClass: 'height mb-20', alt: "NextGen Robotics Academy - Branding Mockups Showcase" },
    ];

    return (
        <div className="tp-pd-3-gallery-area">
            <div className="container container-1800">
                <div className="row gx-20">
                    {galleryData.map((item) => (
                        <div key={item.id} className={item.col}>
                            <div className={`tp-pd-3-gallery-img ${item.extraClass}`}>
                                <Image
                                    style={{ width: "100%", height: "auto" }}
                                    src={item.img}
                                    alt={item.alt}
                                    data-speed=".8"
                                    className="w-100"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetailsThreeGallery;
