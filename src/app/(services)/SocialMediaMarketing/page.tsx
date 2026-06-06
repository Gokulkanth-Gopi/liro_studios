import SocialMediaMarketingMain from '@/pages/services/SocialMediaMarketing/SocialMediaMarketingMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Liro-Studios - Social Media Marketing Service",
};

const page = () => {
    return (
        <SocialMediaMarketingMain />
    );
};

export default page;
