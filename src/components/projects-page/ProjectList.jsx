import ProjectCard from "./ProjectCard";

const ProjectList = ({ projectList }) => {
  console.log("projectList", projectList);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 px-4 sm:px-6 lg:px-8 my-4 lg:mb-8">
      {projectList.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
