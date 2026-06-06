import videoImgOne from "../../../public/assets/img/video/Photography.webp";
import videoImgTwo from "../../../public/assets/img/video/Branding.webp";
import videoImgThree from "../../../public/assets/img/video/MotionGraphics.webp";
import videoImgFour from "../../../public/assets/img/video/Ad.webp";
import videoImgFive from "../../../public/assets/img/video/Editing.webp";
import VideoPlayer from '../shared/VideoPlayer/VideoPlayer';
import Image from 'next/image';
 

// Image imports with descriptive names
const VIDEO_IMAGES = [
  {
    image: videoImgOne,
    alt: "Creative Agency Video Production",
    className: "d-none d-xl-block"
  },
  {
    image: videoImgTwo,
    alt: "Digital Marketing Strategy Session",
    className: "d-none d-xl-block mb-25"
  },
  {
    image: videoImgThree,
    alt: "Web Design and Development Team",
    className: "d-none d-xl-block mb-25"
  },
  {
    image: videoImgFour,
    alt: "Brand Identity Design Process",
    className: "d-none d-xl-block"
  },
  {
    image: videoImgFive,
    alt: "Social Media Campaign Analytics",
    className: "d-none d-xl-block"
  }
] as const;

const HomeMainVideo = () => {
  const firstImage = VIDEO_IMAGES[0];
  
  return (
    <section className="tp-video-area black-bg mt-120 fix">
      <div className="container-fluid p-0">
        <div className="tp-video-thumb-wrap">
          {/* First image (hidden on mobile) */}
          <div className={`tp-video-thumb ${firstImage.className}`}>
            <Image style={{width:"100%", height:"auto"}} src={firstImage.image} alt={firstImage.alt} loading="lazy" quality={80} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </div>

          {/* Main video player (always visible) */}
          <div className="tp-video-thumb mb-25">
            <VideoPlayer videoUrl="/assets/videos/liro.mp4" />
          </div>

          {/* Remaining images */}
          {VIDEO_IMAGES.slice(1).map((img) => (
            <div key={img.alt} className={`tp-video-thumb ${img.className}`}>
              <Image style={{ width: "100%", height: "auto" }} src={img.image} alt={img.alt} loading="lazy" quality={80} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeMainVideo;