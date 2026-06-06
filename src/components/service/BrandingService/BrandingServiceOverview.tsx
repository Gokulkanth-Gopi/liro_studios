import { ArrowSvg } from '@/svg';
import Link from 'next/link';
 

const BrandingServiceOverview = () => {
    return (
        <div className="tp-pd-3-overview-area p-relative overflow-hidden pt-200 pb-120">
            <div className="tp-grid-bg"></div>
            <div className="container container-1230">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tp-pd-3-overview-left tp_fade_anim" data-delay=".3">
                            <span className="tp-pd-3-subtitle">Brand Identity</span>
                            <h1 className="tp-pd-3-title">Transforming Vision Into Iconic Legacies</h1>
                            <Link className="tp-btn-border" href="/contact" aria-label="Get a Free Digital Marketing Strategy Consultation">
                                Start Your Brand{' '}
                                <span><ArrowSvg /></span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-pd-3-overview-right">
                            <div className="tp-pd-3-overview-text">
                                <p>
                                    Liro Studios crafts more than logos; we build distinctive brand identities that command attention. We engineer complete visual ecosystems from the ground up to establish unforgettable presence, amplify market authority, and turn brand stories into global movements.
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="tp-pd-3-overview-info mb-40">
                                        <span>Strategy</span>
                                        <h2>Identity Engineering</h2>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="tp-pd-3-overview-info mb-40">
                                        <span>Core Advantage</span>
                                        <h2>Visual Dominance</h2>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="tp-pd-3-overview-info mb-40">
                                        <span>Recognition</span>
                                        <h2>Unforgettable Recall</h2>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="tp-pd-3-overview-info mb-40">
                                        <span>Final Outcome</span>
                                        <h2>Infinite Brand Equity</h2>
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

export default BrandingServiceOverview;