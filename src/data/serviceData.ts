import {
    DigitalMarketingIcon,
    SocialMediaMarketingIcon,
    ContentProductionIcon,
    SocialMediaOptimizationIcon,
    MotionGraphicsIcon,
    AdMarketingIcon,
    PhotographyVideographyIcon,
    BusinessAnalyticsIcon,
    NewBrandingIcon,
    NewWebDesignIcon
} from "@/svg";
import service1 from "../../public/assets/img/New-images/brand.png";
import service2 from "../../public/assets/img/New-images/digital.png";
import service3 from "../../public/assets/img/services/SocialMediaMarketing.png";
import service4 from "../../public/assets/img/New-images/content.png";
import service5 from "../../public/assets/img/services/Webdesign.png";
import { ServicesDT } from "@/types/service-d-t";

//home-5 IT Solution service icon
import icon1 from '../../public/assets/img/home-11/feature/icon-1.png';
import icon2 from '../../public/assets/img/home-11/feature/icon-2.png';
import icon3 from '../../public/assets/img/home-11/feature/icon-3.png';
import icon4 from '../../public/assets/img/home-11/feature/icon-4.png';
import icon5 from '../../public/assets/img/home-11/feature/icon-5.png';

// Force Next.js to invalidate cache for serviceData.ts
const servicesData: ServicesDT[] = [
    {
        id: 1,
        title: "Digital Marketing",
        image: service2,
        description: "Dominate search results and drive revenue with our data-driven digital marketing services. We integrate technical SEO, targeted PPC, and content strategies to maximize ROI and convert traffic into loyal customers.",
        categories: ["Technical SEO", "PPC Management", "Conversion Rate Optimization (CRO)", "Email Automation"],
        link: "/DigitalMarketingService",
        svgIcon: DigitalMarketingIcon,
    },
    {
        id: 2,
        title: "Branding",
        image: service1,
        description: "Establish a market-leading identity with our strategic branding services. From logo design to comprehensive brand guidelines, we build cohesive visual systems that build trust and authority in your industry.",
        categories: ["Brand Strategy", "Visual Identity System", "Typography & Color Theory", "Brand Guidelines"],
        link: "/BrandingService",
        svgIcon: NewBrandingIcon,
    },
    {
        id: 3,
        title: "Social Media Marketing",
        image: service3,
        description: "Amplify your brand voice and engage your ideal audience across all social platforms. We create viral-ready content and manage communities to build lasting relationships and brand advocacy.",
        categories: ["Content Strategy", "Community Management", "Influencer Marketing", "Social Analytics"],
        link: "/under-construction",
        svgIcon: SocialMediaMarketingIcon,
    },
    {
        id: 4,
        title: "Content Production",
        image: service4,
        description: "Captivate your audience with high-quality, SEO-optimized content. Our team produces compelling meaningful videos, blogs, and graphics that tell your brand story and drive organic traffic.",
        categories: ["Video Production", "SEO Copywriting", "Motion Graphics", "Visual Assets"],
        link: "/under-construction",
        svgIcon: ContentProductionIcon,
    },
    {
        id: 5,
        title: "Web Design",
        image: service5,
        description: "Convert visitors into customers with stunning, high-performance web design. We build responsive, accessible, and user-centric websites that deliver seamless digital experiences.",
        categories: ["UI/UX Design", "Responsive Development", "E-commerce Solutions", "Web Accessibility"],
        link: "/under-construction",
        svgIcon: NewWebDesignIcon,
    },

    //main services data end
    //Inner services Main data start

    {
        id: 6,
        title: "Social Media Optimization",
        description: "Maximize your brand's reach and engagement by optimizing your social profiles and content for peak performance across all platforms.",
        link: "/under-construction",
        svgIcon: SocialMediaOptimizationIcon,
    },
    {
        id: 7,
        title: "Motion graphics",
        description: "Bring your brand to life with dynamic animations and visual effects that tell your story in a compelling and memorable way.",
        link: "/under-construction",
        svgIcon: MotionGraphicsIcon,
    },
    {
        id: 8,
        title: "Ad Marketing",
        description: "Reach your ideal customers with precision-targeted advertising campaigns designed to increase conversions and maximize your ad spend.",
        link: "/under-construction",
        svgIcon: AdMarketingIcon,
    },
    {
        id: 9,
        title: "Photography & Videography",
        description: "Showcase your brand's personality through high-quality visual content, from professional headshots to cinematic brand stories.",
        link: "/under-construction",
        svgIcon: PhotographyVideographyIcon,
    },
    {
        id: 10,
        title: "Business Analytics",
        description: "Unlock the power of your data with comprehensive analytics that provide deep insights into customer behavior and business performance.",
        link: "/under-construction",
        svgIcon: BusinessAnalyticsIcon,
    },

    //Service Solutions
    {
        id: 11,
        title: 'Branding Design',
        description: "Crafting a unique visual identity that resonates with your audience and defines your brand's presence effectively.",
        svgIcon: NewBrandingIcon,
        link: '/BrandingService'
    },
    {
        id: 12,
        title: 'Digital Marketing',
        description: "Driving online growth through strategic SEO, PPC management, and data-driven digital marketing campaigns today.",
        svgIcon: DigitalMarketingIcon,
        link: '/DigitalMarketingService'
    },
    {
        id: 13,
        title: 'Social Media Marketing',
        description: "Building community and engagement across platforms through creative content and strategic social management.",
        svgIcon: SocialMediaMarketingIcon,
        link: '/under-construction'
    },
    {
        id: 14,
        title: 'Content Production',
        description: "Producing high-quality visual and written assets that tell your story and captivate your audience perfectly.",
        svgIcon: ContentProductionIcon,
        link: '/under-construction'
    },
    {
        id: 15,
        title: 'Web Design',
        description: "Designing responsive and user-centric websites that provide exceptional digital experiences and drive results.",
        svgIcon: NewWebDesignIcon,
        link: '/under-construction'
    },

    // IT Solution feature data start
    {
        id: 28,
        title: "IT Consultation",
        image: icon1,
        description: "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
        categories: ["Strategy", "Consultation", "Management"],
        colorClass: "color-1",
        delay: ".3",
        link: "/under-construction",
    },
    {
        id: 29,
        title: "Data Security",
        image: icon2,
        description: "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
        categories: ["Management", "Backup & Recovery", "Transfer"],
        colorClass: "color-2",
        delay: ".5",
        link: "/under-construction",
    },
    {
        id: 30,
        title: "IT Consultation",
        image: icon3,
        description: "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
        categories: ["Strategy", "Consultation", "Management"],
        colorClass: "color-3",
        delay: ".7",
        link: "/under-construction",
    },
    {
        id: 31,
        title: "Cloud Services",
        image: icon4,
        description: "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
        categories: ["Cloud Storerage", "Hosting & VPS"],
        colorClass: "color-4",
        delay: ".3",
        link: "/under-construction",
    },
    {
        id: 32,
        title: "UI/UX Design",
        image: icon5,
        description: "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
        categories: ["Website", "Landing Page", "Mobile App"],
        colorClass: "color-5",
        delay: ".5",
        link: "/under-construction",
    },

];

export default servicesData;
