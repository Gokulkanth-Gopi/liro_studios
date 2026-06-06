import SocialMediaMarketingMain from '@/pages/services/SocialMediaMarketing/SocialMediaMarketingMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Social Media Marketing Services - Liro Studios",
    description: "Amplify your brand voice and engage your ideal audience across all social platforms with Liro Studios' expert social media marketing services.",
};

const page = () => {
    return (
        <SocialMediaMarketingMain />
    );
};

export default page;
