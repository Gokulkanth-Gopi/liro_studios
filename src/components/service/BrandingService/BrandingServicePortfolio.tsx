import port1 from '../../../../public/assets/img/project-img/project-gal-08.webp';
import port2 from '../../../../public/assets/img/project-img/project-gal-09.webp';
import Image from 'next/image';


const BrandingServicePortfolio = () => {
    return (
        <div className="tp-pd-3-portfolio-area pt-120 pb-60">
            <div className="container container-1200">
                <div className="tp-pd-3-portfolio-item-wrap">
                    <div className="tp-pd-3-portfolio-item mb-120">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tp-pd-3-portfolio-thumb">
                                    <Image
                                        style={{ width: "100%", height: "auto", objectFit: "contain", backgroundColor: "#f8f8f8", borderRadius: "20px" }}
                                        className="w-100"
                                        src={port1}
                                        alt="Branding Identity Vision" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="tp-pd-3-portfolio-content tp-pd-3-content-pin mt-20 ml-40">
                                    <span className="tp-pd-3-subtitle">Visual Legacy</span>
                                    <h2 className="tp-pd-3-title">From Invisible to Iconic</h2>
                                    <div className="tp-pd-3-overview-text">
                                        <p> A logo is just the beginning. We excavate the soul of your business to create a visual language that speaks before you do. We turn generic businesses into category-defining brands that command loyalty and premium positioning.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tp-pd-3-portfolio-item-wrap pt-120">
                    <div className="tp-pd-3-portfolio-item mb-120">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tp-pd-3-portfolio-content tp-pd-3-content-pin mt-20 mr-40">
                                    <span className="tp-pd-3-subtitle">Prestige Engineering</span>
                                    <h2 className="tp-pd-3-title">Identity That Dominates</h2>
                                    <div className="tp-pd-3-overview-text">
                                        <p> We design cohesive brand systems that harmonize every touchpoint—from typography to tone of voice. Our identity work is engineered for one goal: Infinite market equity. We ensure your brand doesn't just fit in; it sets the standard.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="tp-pd-3-portfolio-thumb">
                                    <Image
                                        style={{ width: "100%", height: "auto", objectFit: "contain", backgroundColor: "#f8f8f8", borderRadius: "20px" }}
                                        className="w-100"
                                        src={port2}
                                        alt="Branding Strategy Execution" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandingServicePortfolio;