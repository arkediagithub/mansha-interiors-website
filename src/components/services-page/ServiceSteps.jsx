import { Link } from "react-router-dom";
import { serviceSteps } from "../../data/serviceSteps";
import TextReveal from "../TextReveal";
import Reveal from "../Reveal";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";

const ServiceSteps = () => {
  return (
    <>
      <SectionWrapper>
        <Reveal className="w-full">
          <SectionHeading className="text-center">How We Work?</SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-2 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceSteps.map((serviceStep, i) => (
            <TextReveal key={i} classNames="relative">
              <div className="relative group">
                {/* content */}
                <div className="block px-6 py-4 border border-b-4 border-l-4 border-b-roti-400 border-l-roti-400 text-black rounded-bl-3xl rounded-tr-3xl relative">
                  <h2 className="text-xl md:text-2xl font-medium my-4">
                    {serviceStep.heading}
                  </h2>
                  <p className="text-base md:text-lg -mt-2 mb-2 text-justify">
                    {serviceStep.description}
                  </p>
                </div>
                {/* number */}
                <div className="absolute bottom-0 right-2 opacity-20 group-hover:opacity-50 duration-500">
                  <span className="text-roti-500 text-7xl lg:text-[112px] font-semibold font-league-spartan-variable">
                    {i + 1}
                  </span>
                </div>
              </div>
            </TextReveal>
          ))}
        </div>

        <div className="text-center my-4 sm:my-8">
          <Link
            to="/contact"
            role="button"
            className="btn btn-neutral bg-accent text-black border-accent hover:text-white font-normal text-base lg:text-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
};

export default ServiceSteps;
