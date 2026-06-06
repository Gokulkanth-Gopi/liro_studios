import projectImg from "../../../public/assets/img/home-02/project/project-1.jpg";
import Image from 'next/image';

const SocialMediaMarketingProject = () => {

    return (
        <div className="des-project-area pb-200">
            <div className="des-project-banner">
                <Image
                    style={{ width: "100%", height: "auto" }}
                    className="w-100"
                    data-speed=".7"
                    src={projectImg}
                    alt="project-image"
                />
            </div>
            {/* couter section */}
        </div>
    );
};

export default SocialMediaMarketingProject;
