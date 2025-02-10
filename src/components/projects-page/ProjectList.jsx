import SectionWrapper from "../SectionWrapper";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ projectList }) => {
  // console.log("projectList", projectList);

  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {projectList.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectList;
