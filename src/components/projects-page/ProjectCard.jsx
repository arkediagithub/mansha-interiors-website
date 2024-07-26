import ImageReveal from "../ImageReveal";

const ProjectCard = ({ project }) => {
  return (
    <>
      <div className="group relative block bg-black w-full h-[300px] lg:h-[400px]">
        {/* <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover absolute inset-0 opacity-75 transition-opacity group-hover:opacity-50"
        /> */}
        <ImageReveal
          src={project.image}
          alt={project.name}
          imageClassNames="opacity-75 transition-opacity group-hover:opacity-50"
        />

        {/* <div className="relative p-4 sm:p-6 lg:p-8 opacity-0 transition-all group-hover:opacity-100 group-hover:z-10">
          <p className="text-xl font-bold text-white sm:text-2xl">
            {project.name}
          </p>
        </div> */}

        <div className="absolute top-5 left-5 opacity-0 transition-all group-hover:opacity-100 group-hover:z-10">
          <p className="text-xl font-bold text-white sm:text-2xl">
            {project.name}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
