import port1 from '../../../../public/assets/img/project-img/project-gal-08.webp';
import port2 from '../../../../public/assets/img/project-img/project-gal-09.webp';
import Image from 'next/image';


const DigitalMarketingServicePortfolio = () => {
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
                                        alt="Digital Marketing Challenge" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="tp-pd-3-portfolio-content tp-pd-3-content-pin mt-20 ml-40">
                                    <span className="tp-pd-3-subtitle">Brand Evolution</span>
                                    <h2 className="tp-pd-3-title">From Invisible to Unstoppable</h2>
                                    <div className="tp-pd-3-overview-text">
                                        <p> Being "just online" isn't enough. We identify the critical gaps in your digital presence—whether it's underperforming ads or lost search traffic—to turn your brand from a background player into a market leader.
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
                                    <span className="tp-pd-3-subtitle">The ROI Engine</span>
                                    <h2 className="tp-pd-3-title">What We Do For You</h2>
                                    <div className="tp-pd-3-overview-text">
                                        <p> We design high-performance growth systems that prioritize one thing: Your ROI. From high-intent PPC campaigns to SEO scaling, everything we do is engineered to turn passive browsing into profitable, long-term brand equity.
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
                                        alt="Digital Marketing Solution Strategy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalMarketingServicePortfolio;