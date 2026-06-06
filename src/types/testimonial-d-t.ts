import { StaticImageData } from "next/image";

export interface TestimonialDT {
    id: number;
    quote: string;
    name: string;
    position?: string;
    avatar?: StaticImageData | string;
    style?: string;
    rating?: number;
    role?: string;
    brandLogo?: StaticImageData | string;
    reviewedOn?: string;
    logo?: StaticImageData | string;
}
