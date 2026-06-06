import ServiceFourMain from '@/pages/services/service-main/Service';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Our Services - Digital Marketing, Branding & Web Design | Liro Studios",
    description: "Explore Liro Studios' comprehensive digital services: Digital Marketing, Branding, Social Media, Content Production, and Web Design. We scale ambitious brands.",
};

const page = () => {
    return (
        <ServiceFourMain />
    );
};

export default page;