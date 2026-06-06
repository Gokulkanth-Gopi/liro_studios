
import ProjectItem from './subComponents/ProjectItem';
 

const HomeMainProject = () => {
    return (
        <div className="tp-project-area pt-200 pb-60">
            <div className="container">
                <div className="tp-project-title-box mb-50">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="tp-project-subtitle-wrap">
                                <span className="tp-section-subtitle pre">Featured Projects</span>
                                <h2 className="d-none">Our Featured Projects</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <ProjectItem />
            </div>
        </div>
    );
};

export default HomeMainProject;