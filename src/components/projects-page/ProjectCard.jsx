import Reveal from "../Reveal";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative group h-[300px] lg:h-[400px]">
      {/* image */}
      <Reveal className="h-full" width="w-full">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-fill"
        />
      </Reveal>
      {/* overlay */}
      <div className="absolute bg-black opacity-0 inset-0 transition-all group-hover:opacity-50 group-hover:z-10"></div>
      {/* project name */}
      <p className="absolute top-5 left-5 opacity-0 transition-all group-hover:opacity-100 group-hover:z-10 text-xl font-bold text-white sm:text-2xl">
        {project.name}
      </p>
    </div>
  );
};

export default ProjectCard;
