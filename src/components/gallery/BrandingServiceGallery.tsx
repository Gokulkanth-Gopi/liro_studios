
import Image from 'next/image';

// Image import - using real Liro Studios portfolio work
import port1 from '../../../public/assets/img/project-img/project-gal-01.webp';
import port2 from '../../../public/assets/img/project-img/project-gal-04.webp';
import port3 from '../../../public/assets/img/project-img/project-gal-06.webp';
import port4 from '../../../public/assets/img/project-img/Grid Tumblr Banner.png';

const BrandingServiceGallery = () => {
    // Data array
    const galleryData = [
        { id: 1, img: port1, col: 'col-lg-4', extraClass: 'small-img mb-20', alt: "Bespoke Branding - Signature Logo Identity" },
        { id: 2, img: port2, col: 'col-lg-4', extraClass: 'small-img mb-20', alt: "Bespoke Branding - Visual Communication System" },
        { id: 3, img: port3, col: 'col-lg-4', extraClass: 'small-img mb-20', alt: "Bespoke Branding - Iconic Brand Presence" },
        { id: 4, img: port4, col: 'col-lg-12', extraClass: 'height mb-20', alt: "Bespoke Branding - Infinite Brand Equity Showcase" },
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

export default BrandingServiceGallery;
