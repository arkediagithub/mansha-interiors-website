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
                className="absolute inset-0 h-full w-full object-cover md:object-cover object-top image_hover_bw_to_color"
              />
            </div>
          </div>
          {/* left */}
          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div className="p-8 md:p-12">
              <Reveal>
                <h2 className="text-2xl sm:text-4xl tracking-wider">
                  {founder.name}
                </h2>
              </Reveal>

              <Reveal>
                <p className="tracking-wider text-lg my-2 md:my-4">
                  {founder.designation}
                </p>
              </Reveal>

              <Reveal>
                <p className="md:text-lg text-gray-600">
                  Gautam Agarwal is the Founder and Principle Designer at Mansha
                  interiors. He is a B.Com graduate along with a diploma from
                  INIFD in Interior Design. He started this firm 13 years ago
                  with a zeal for designing spaces.
                </p>
              </Reveal>

              <Reveal>
                <p className="mt-2 md:mt-4 md:text-lg text-gray-600">
                  Gautam&apos;s noble aim is create joy with his designs. He is
                  stickler for details and is dedicated in making every project
                  unique. His approach towards design is driven by an in- depth
                  understanding of the users requirements, creative space
                  planning and a careful study of volumes and forms.
                </p>
              </Reveal>

              <Link
                to="/contact"
                role="button"
                className="mt-8 btn btn-neutral md:text-lg font-unbounded-variable"
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
