import { Link } from "react-router-dom";

import ProjectImage1 from "../../assets/projects/project1.png";
import ProjectImage2 from "../../assets/projects/project2.png";
import ProjectImage3 from "../../assets/projects/project7.png";

const ProjectShowcase = () => {
  return (
    <section className="mx-auto px-4 py-6 sm:px-8 sm:py-8 lg:px-8 lg:py-12">
      <header className="text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-dm-serif-display tracking-wider md:max-w-xl text-center mx-auto">
          Some of Our Projects
        </h2>
      </header>

      <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <li>
          <Link to="/projects" className="group relative block">
            <img
              src={ProjectImage1}
              alt=""
              className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
            />

            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
              <h3 className="text-xl font-medium text-white">
                Office Interior
              </h3>

              <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                Visit
              </span>
            </div>
          </Link>
        </li>

        <li>
          <Link to="projects" className="group relative block">
            <img
              src={ProjectImage2}
              alt=""
              className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
            />

            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
              <h3 className="text-xl font-medium text-white">
                Living Room Interior
              </h3>

              <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                Visit
              </span>
            </div>
          </Link>
        </li>

        <li className="md:col-span-2 md:col-start-2 md:row-span-2 md:row-start-1">
          <Link to="/projects" className="group relative block">
            <img
              src={ProjectImage3}
              alt=""
              className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
            />

            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
              <h3 className="text-xl font-medium text-white">
                Bed Room Interior
              </h3>

              <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                Visit
              </span>
            </div>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default ProjectShowcase;
