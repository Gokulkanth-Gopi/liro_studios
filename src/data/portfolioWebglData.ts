// Portfolio WebGL showcase data
export const portfolioWebglSlides = [
    { id: 0, active: true, title: "Top Paddock" },
    { id: 1, active: false, title: "Stickers Pack" },
    { id: 2, active: false, title: "Diseno Grafico" },
    { id: 3, active: false, title: "Bright Cap" },
    { id: 4, active: false, title: "Grafico Jan" },
    { id: 5, active: false, title: "Bright Cap" }
].map(item => ({
    ...item,
    categories: ["UI", "Web Design"],
    link: "/portfolio-details-classic-stack-light"
}));

// slider images
export const sliderImages = [
    "/assets/img/webgl/webgl-1.jpg",
    "/assets/img/webgl/webgl-2.jpg",
    "/assets/img/webgl/webgl-3.jpg",
    "/assets/img/webgl/webgl-4.jpg",
    "/assets/img/webgl/webgl-5.jpg",
    "/assets/img/webgl/webgl-6.jpg"
];

// Portfolio WebGL slides data end
