import { ArrowSvg } from '@/svg';
import Link from 'next/link';


const DigitalMarketingServiceOverview = () => {
    return (
        <div className="tp-pd-3-overview-area p-relative overflow-hidden pt-200 pb-120">
            <div className="tp-grid-bg"></div>
            <div className="container container-1230">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tp-pd-3-overview-left tp_fade_anim" data-delay=".3">
                            <span className="tp-pd-3-subtitle">Scalable ROI</span>
                            <h1 className="tp-pd-3-title">Transforming Clicks Into Market Dominance</h1>
                            <Link className="tp-btn-border" href="/contact" aria-label="Get a Free Digital Marketing Strategy Consultation">
                                Get a Free Strategy{' '}
                                <span><ArrowSvg /></span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-pd-3-overview-right">
                            <div className="tp-pd-3-overview-text">
                                <p>
                                    Liro Studios isn't just another agency; we’re your growth-engine. We engineer powerful digital marketing ecosystems designed from the ground up to maximize revenue, amplify brand authority, and turn the digital noise into a steady stream of high-intent conversions.
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="tp-pd-3-overview-info mb-40">
                                        <span>Strategy</span>
                                        <h2>Precise ROI Engineering</h2>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="tp-pd-3-overview-info mb-40">
                                        <span>Core Advantage</span>
                                        <h2>Data-Driven Dominance</h2>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="tp-pd-3-overview-info mb-40">
                                        <span>Growth Speed</span>
                                        <h2>Aggressive Scaling</h2>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="tp-pd-3-overview-info mb-40">
                                        <span>Final Outcome</span>
                                        <h2>Unstoppable Revenue</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalMarketingServiceOverview;