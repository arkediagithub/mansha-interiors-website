import { founder } from "../../data/teamMembers";
import { Link } from "react-router-dom";
import Reveal from "../Reveal";
import SectionWrapper from "../SectionWrapper";

const FounderSection = () => {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:h-screen md:grid-cols-2">
          {/* right */}
          <div className="z-10 lg:py-16">
            <div className="relative w-full h-80 sm:h-80 md:h-full">
              <img
                src={founder.image}
                alt="Goutam Agarwal Image"
                className="absolute inset-0 h-full w-full object-cover md:object-cover object-top"
              />
            </div>
          </div>
          {/* left */}
          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div className="p-8 md:p-12">
              <Reveal>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-dm-serif-display tracking-wider">
                  {founder.designation}
                </h2>
              </Reveal>

              {founder.about.map((about, i) => (
                <Reveal key={i} className="mt-4">
                  <p className="md:text-lg text-gray-600">{about}</p>
                </Reveal>
              ))}

              <Link
                to="/contact"
                role="button"
                className="mt-8 btn btn-neutral md:text-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FounderSection;
