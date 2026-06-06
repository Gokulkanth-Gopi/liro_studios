import { projectsData } from '@/data/projectData';
import { ArrowSvg } from '@/svg';
import Image from 'next/image';
import Link from 'next/link';

const ProjectItem = () => {

  // Split projects into two columns
  const leftColumnProjects = projectsData.slice(0, 6).filter((_, index) => index % 2 === 0);
  const rightColumnProjects = projectsData.slice(0, 6).filter((_, index) => index % 2 !== 0);

  return (
    <div className="row gx-135">
      {/* Left Column */}
      <div className="col-md-6">
        {leftColumnProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>

      {/* Right Column */}
      <div className="col-md-6">
        {rightColumnProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};

interface ProjectCardProps {
  project: typeof projectsData[0];
}

const ProjectCard = ({ project }: ProjectCardProps) => {

  return (
    <div className="tp-project-item mb-95">
      <div className="tp-project-thumb not-hide-cursor">
        <Link
          className="cursor-hide"
          href="/under-construction"
          aria-label={`View detailed case study for the ${project.title} project`}
        >
          <Image
            style={{ width: "100%", height: "auto" }}
            src={project.image}
            alt={`${project.title} project image`}
          />
          <div className="tp-project-overlay">
            <div className="tp-project-icon">
              <ArrowSvg />
            </div>
          </div>
        </Link>
      </div>
      <div className="tp-project-content">
        <h3 className="tp-project-title">
          {project.title}
        </h3>
        {project.categories && (
          <div className="tp-project-category">
            {project.categories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;