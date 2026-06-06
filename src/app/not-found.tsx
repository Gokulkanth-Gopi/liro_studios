import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
    title: "Liro-Studios - 404 Not Found Page",
};

export default function NotFound() {
    return (
        <main style={{ height: '100vh', overflow: 'hidden' }}>
            <div className="tp-error-area h-100 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-error-wrapper text-center">
                                <div className="tp-error-thumb">
                                    <Image 
                                        src="/assets/img/misc/404.png" 
                                        alt="404 Error" 
                                        width={1024} 
                                        height={1024}
                                        style={{ height: 'auto', width: 'auto', filter: 'none !important' }}
                                    />
                                </div>
                                <div className="tp-error-content">
                                    <h3 className="tp-error-title mt-10 mb-10">404 - Page Not Found</h3>
                                    <p className='mb-10 mt-10'>Oops! The page you are looking for does not exist.</p>
                                    <Link className="tp-btn mt-10" href="/">Back To Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}