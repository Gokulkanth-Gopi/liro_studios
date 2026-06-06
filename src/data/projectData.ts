import { ProjectsDT } from '@/types/project-d-t';
//home main project - using real Liro Studios portfolio artboards
import project1 from "../../public/assets/img/project-img/553012876_17925445128135974_7253210524302311965_n..webp";
import project2 from "../../public/assets/img/project-img/553595919_17925538827135974_2696719676193757832_n..webp";
import project3 from "../../public/assets/img/project-img/553655567_17925445164135974_1548929835760114199_n..webp";
import project4 from "../../public/assets/img/project-img/553672354_17925538791135974_4540469672458959936_n..webp";
import project5 from "../../public/assets/img/project-img/554174193_17925445155135974_7722113763933838037_n..webp";
import project6 from "../../public/assets/img/project-img/554194483_17925538836135974_1392314382053237986_n..webp";
import project7 from "../../public/assets/img/project-img/554346572_17925538818135974_6897109342145764914_n..webp";
import project8 from "../../public/assets/img/project-img/554673526_17925445116135974_8111112567276349090_n..webp";
import project9 from "../../public/assets/img/project-img/554811231_17925445173135974_3927515930408068838_n..webp";
import project10 from "../../public/assets/img/project-img/554815415_17925538800135974_7279360132064477915_n..webp";
import project11 from "../../public/assets/img/project-img/554925084_17925445146135974_2359132673471757041_n..webp";
import project12 from "../../public/assets/img/project-img/555162033_17925700464135974_5207640237035644391_n..webp";

// home IT Solution project image
import itProject1 from "../../public/assets/img/home-11/project/project-1.jpg";
import itProject2 from "../../public/assets/img/home-11/project/project-2.jpg";
import itProject3 from "../../public/assets/img/home-11/project/project-3.jpg";
import itProject4 from "../../public/assets/img/home-11/project/project-4.jpg";

// portfolio metro images
import portfolioThumb21 from '../../public/assets/img/home-05/project/project-1.jpg';
import portfolioThumb22 from '../../public/assets/img/home-05/project/project-2.jpg';
import portfolioThumb23 from '../../public/assets/img/home-05/project/project-3.jpg';
import portfolioThumb24 from '../../public/assets/img/home-05/project/project-4.jpg';
import portfolioThumb25 from '../../public/assets/img/home-05/project/project-5.jpg';

export const projectsData: ProjectsDT[] = [
    {
        id: 1,
        title: "Social Horizon",
        image: project1,
        categories: ["Social Media", "Marketing", "Strategy"],
        link: "/",
    },
    {
        id: 2,
        title: "Vanguard Identity",
        image: project2,
        categories: ["Branding", "Identity", "Design"],
        link: "/",
    },
    {
        id: 3,
        title: "Creative Essence",
        image: project3,
        categories: ["Graphic Design", "Illustration", "Creative"],
        link: "/",
    },
    {
        id: 4,
        title: "Apex Web Platform",
        image: project4,
        categories: ["Web Design", "Development", "UI/UX"],
        link: "/",
    },
    {
        id: 5,
        title: "Visual Chronicles",
        image: project5,
        categories: ["Photography", "Art Direction", "Styling"],
        link: "/",
    },
    {
        id: 6,
        title: "Narrative Pulse",
        image: project6,
        categories: ["Content", "Video", "Copywriting"],
        link: "/",
    },
    {
        id: 7,
        title: "Stratum Branding",
        image: project7,
        categories: ["Design", "Branding", "Strategy"],
        link: "/",
    },
    {
        id: 8,
        title: "Omnichannel Growth",
        image: project8,
        categories: ["Social Media", "Content", "Marketing"],
        link: "/",
    },
    {
        id: 9,
        title: "Infinity Interface",
        image: project9,
        categories: ["Web Design", "UI/UX", "Development"],
        link: "/",
    },
    {
        id: 10,
        title: "Synthesis Identity",
        image: project10,
        categories: ["Branding", "Design", "Creative"],
        link: "/",
    },
    {
        id: 11,
        title: "Velocity Campaign",
        image: project11,
        categories: ["Marketing", "Strategy", "Content"],
        link: "/",
    },
    {
        id: 12,
        title: "Illustrative Odyssey",
        image: project12,
        categories: ["Design", "Illustration", "Art Direction"],
        link: "/",
    },
    // IT Solution IT Project data start
    {
        id: 38,
        title: "The Professional Theft",
        category: "Digital Art",
        image: itProject1,
        link: "/portfolio-details-gallery-light",
    },
    {
        id: 39,
        title: "The Mastermind Heist",
        category: "Digital Art",
        image: itProject2,
        link: "/portfolio-details-gallery-light",
    },
    {
        id: 40,
        title: "The Shadow Larcenist",
        category: "Digital Art",
        image: itProject3,
        link: "/portfolio-details-gallery-light",
    },
    {
        id: 41,
        title: "The Elite Burglar",
        category: "Digital Art",
        image: itProject4,
        link: "/portfolio-details-gallery-light",
    },
    {
        id: 42,
        title: "The Mastermind Heist",
        category: "Digital Art",
        image: itProject2,
        link: "/portfolio-details-gallery-light",
    },
    {
        id: 43,
        title: "The Shadow Larcenist",
        category: "Digital Art",
        image: itProject3,
        link: "/portfolio-details-gallery-light",
    },
    //Home-11 IT Solution IT Project data end

    // portfolio metro data start
    {
        id: 48,
        title: "imusic",
        services: "Research, UX, UI Design",
        image: portfolioThumb21,
        layout: "left",
        hasLineBreak: false,
        link: "/portfolio-details-modern-light",
    },
    {
        id: 49,
        title: "simple logistics",
        services: "Research, UX, UI Design",
        image: portfolioThumb22,
        hasLineBreak: true,
        contentClass: "pl-200",
        link: "/portfolio-details-modern-light"
    },
    {
        id: 50,
        title: "genesis",
        services: "Research, UX, UI Design",
        image: portfolioThumb23,
        layout: "left",
        hasLineBreak: false,
        link: "/portfolio-details-modern-light",
    },

    {
        id: 51,
        title: "simple logistics",
        services: "Research, UX, UI Design",
        image: portfolioThumb24,
        hasLineBreak: true,
        contentClass: "pl-200",
        link: "/portfolio-details-modern-light"
    },
    {
        id: 52,
        title: "genesis",
        services: "Research, UX, UI Design",
        image: portfolioThumb25,
        layout: "left",
        hasLineBreak: false,
        link: "/portfolio-details-modern-light",
    },
    // portfolio metro data  end
];

export default projectsData;