import { Link } from "react-router-dom";
import Reveal from "../Reveal";

const ProjectCard = ({ project }) => {
  return (
    <>
      {/* onClick={() => document.getElementById(project.id).showModal()} */}
      <Link to={`/gallery/${project.id}`}>
        {/* project cards */}
        <div className="relative group h-[300px] lg:h-[400px]">
          {/* image */}
          <Reveal noOverlay className="h-full w-full">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-fill"
            />
          </Reveal>

          {/* overlay */}
          <div className="absolute bg-black opacity-0 inset-0 transition-all group-hover:opacity-30 group-hover:z-10 pointer-events-none"></div>

          {/* project name */}
          <p className="absolute bottom-5 left-5 opacity-0 transition-all group-hover:opacity-100 group-hover:z-10 text-xl text-white pointer-events-none font-unbounded-variable">
            {project.name} | {project.id}
          </p>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
