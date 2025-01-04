import ProjectCard from "./ProjectCard";

const ProjectList = ({ projectList }) => {
  console.log("projectList", projectList);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4  px-4 sm:px-6 lg:px-8 my-10">
      {projectList.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
