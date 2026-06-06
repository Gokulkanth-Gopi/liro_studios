// Portfolio data for perspective slider
export interface PortfolioDT {
  id: number;
  image: {
    src: string;
  };
  category?: string;
  title: string;
  link: string;
}

// Portfolio perspective slider data
export const perspectivePortfolioData: PortfolioDT[] = [
  {
    id: 55,
    image: { src: "/assets/img/perspective-slider/slider-3.jpg" },
    category: "Branding",
    title: "Keepgrading",
    link: "/portfolio-details-gallery-light"
  },
  {
    id: 56,
    image: { src: "/assets/img/perspective-slider/slider-2.jpg" },
    category: "Branding",
    title: "Gráfico",
    link: "/portfolio-details-gallery-light"
  },
  {
    id: 57,
    image: { src: "/assets/img/perspective-slider/slider-4.jpg" },
    category: "Branding",
    title: "Diseño",
    link: "/portfolio-details-gallery-light"
  },
  {
    id: 58,
    image: { src: "/assets/img/perspective-slider/slider-5.jpg" },
    category: "Branding",
    title: "Keepgrading",
    link: "/portfolio-details-gallery-light"
  },
  {
    id: 59,
    image: { src: "/assets/img/perspective-slider/slider-1.jpg" },
    category: "Branding",
    title: "Stickers Pack",
    link: "/portfolio-details-gallery-light"
  },
  {
    id: 60,
    image: { src: "/assets/img/perspective-slider/slider-6.jpg" },
    category: "Branding",
    title: "Dinámica",
    link: "/portfolio-details-gallery-light"
  }
];
