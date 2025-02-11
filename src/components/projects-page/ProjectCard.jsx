import { Link } from "react-router-dom";


const ProjectCard = ({ project }) => {
  return (
    <>
      <Link to={`/gallery/${project.id}`}>
        {/* project cards */}
        <div className="relative group h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
          {/* image */}
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-fill"
          />

          {/* overlay */}
          <div className="absolute bg-black opacity-0 inset-0 transition-all group-hover:opacity-30 group-hover:z-10 pointer-events-none"></div>

          {/* project name */}
          <p className="absolute bottom-5 left-5 opacity-0 transition-all group-hover:opacity-100 group-hover:z-10 text-xl text-white pointer-events-none font-unbounded-variable">
            {project.name}
          </p>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
