import { StaticImageData } from "next/image";

export interface TeamMember {
    id: number;
    since?: string;
    name: string;
    position: string;
    image: StaticImageData | string;
    link: string;
    socialLinks?: {
        facebook?: string;
        twitter?: string;
        linkedin?: string;
    };
    className?: string;
    colClass?: string;
    wrapClass?: string;
    mbClass?: string;
}
