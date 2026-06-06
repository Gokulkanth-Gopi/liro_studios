
import PortfolioDetailsCreativeSlider from '@/pages/services/DigitalMarketing/DigitalMarketingService';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Digital Marketing Services - Liro Studios",
    description: "Drive revenue with Liro Studios' data-driven digital marketing services. Technical SEO, PPC, CRO, and email automation strategies that maximize your ROI.",
};

const page = () => {
    return (
        <PortfolioDetailsCreativeSlider />
    );
};

export default page;



