import Reveal from "../Reveal";

const ProjectCard = ({ project }) => {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button onClick={() => document.getElementById(project.id).showModal()}>
        {/* project cards */}
        <div className="relative group h-[300px] lg:h-[400px]">
          {/* image */}
          <Reveal className="h-full w-full">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-fill"
            />
          </Reveal>
          {/* overlay */}
          <div className="absolute bg-black opacity-0 inset-0 transition-all group-hover:opacity-50 group-hover:z-10 pointer-events-none"></div>
          {/* project name */}
          <h6 className="absolute bottom-5 left-5 opacity-0 transition-all group-hover:opacity-100 group-hover:z-10 text-xl text-white pointer-events-none">
            {project.name}
          </h6>
        </div>
      </button>
      {/* <dialog id={project.id} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-full max-w-5xl">
          <h3 className="font-bold text-lg">{project.name}</h3>
          <p className="py-4 text-xs">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog> */}
    </>
  );
};

export default ProjectCard;
