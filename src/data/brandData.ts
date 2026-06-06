import { StaticImageData } from 'next/image';
import sliderImg1 from '../../public/assets/img/home-14/slider/text-slider.svg';

interface BrandDT {
    id: number;
    title: string;
    icon?: StaticImageData;
    iconFill?: string;
}

// home personal portfolio data start
export const portfolioTextSlideData: BrandDT[] = [
    {
        id: 1,
        title: 'Teaming up with ambitious agencies',
        icon: sliderImg1
    },
    {
        id: 2,
        title: 'Currently working Independently',
        icon: sliderImg1
    },
    {
        id: 3,
        title: 'Teaming up with ambitious agencies',
        icon: sliderImg1
    },
    {
        id: 4,
        title: 'Open to projects and Partnerships',
        icon: sliderImg1
    },
    {
        id: 5,
        title: 'Teaming up with ambitious agencies',
        icon: sliderImg1
    },
    {
        id: 6,
        title: 'Currently working Independently',
        icon: sliderImg1
    },
    {
        id: 7,
        title: 'Teaming up with ambitious agencies',
        icon: sliderImg1
    },
];

export const portfolioBrandSlideData: BrandDT[] = [
    { id: 1, title: 'E-commerce', iconFill: '#FFF669' },
    { id: 2, title: 'Landing page', iconFill: '#FFF669' },
    { id: 3, title: 'Social network', iconFill: '#FFF669' },
    { id: 4, title: 'Blog', iconFill: '#FFF669' },
    { id: 5, title: 'Corporate website', iconFill: '#FFF669' },
    { id: 6, title: 'Dashboard', iconFill: '#FFF669' },
    { id: 7, title: 'Landing page', iconFill: '#FFF669' },
    { id: 8, title: 'Social network', iconFill: '#FFF669' },
    { id: 9, title: 'Blog', iconFill: '#FFF669' },
    { id: 10, title: 'Landing page', iconFill: '#FFF669' },
    { id: 11, title: 'Social network', iconFill: '#FFF669' },
    { id: 12, title: 'Blog', iconFill: '#FFF669' },
    { id: 13, title: 'Corporate website', iconFill: '#FFF669' },
];
// home personal portfolio data end