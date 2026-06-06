import logo from '../../../../public/assets/img/logo/logo.png';
import { getCurrentYear } from '@/utils/getCurrentYear';
import Image from 'next/image';
import Link from 'next/link';
 



const MainFooterCopyright = () => {


    return (
        <div 
            className="ai-copyright-area ai-copyright-ptb p-relative" 
            style={{ backgroundColor: "#0E0F11", borderTop: '1px solid rgba(255, 255, 255, 0.1)', padding: '30px 0' }}
        >
            <div className="container container-1230">
                <div className="row align-items-center">
                    {/* Logo Section */}
                    <div className="col-md-6 col-12">
                        <div className="ai-copyright-logo">
                            <Link href="/">
                                <Image 
                                    width={140} 
                                    src={logo} 
                                    alt="Liro Studios" 
                                    style={{ height: 'auto' }}
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Copyright Section with Back to Top */}
                    <div className="col-md-6 col-12">
                        <div className="ai-copyright-content d-flex align-items-center justify-content-md-end justify-content-start">
                            <p style={{ margin: 0, fontSize: '16px', color: 'rgba(255, 255, 255, 0.7)' }}>
                                Liro Studios © {getCurrentYear()}. All rights reserved. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainFooterCopyright;