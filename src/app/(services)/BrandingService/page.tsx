
import BrandingService from '@/pages/services/Branding/BrandingService';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Branding & Identity Services - Liro Studios",
    description: "Build a market-leading brand identity with Liro Studios. From logo design to comprehensive brand guidelines, we create visual systems that build trust and authority.",
};

const page = () => {
    return (
        <BrandingService />
    );
};

export default page;



