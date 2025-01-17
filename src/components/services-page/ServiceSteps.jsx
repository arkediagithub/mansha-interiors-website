import { Link } from "react-router-dom";
import { serviceSteps } from "../../data/serviceSteps";
import TextReveal from "../TextReveal";
import Reveal from "../Reveal";
import SectionWrapper from "../SectionWrapper";

const ServiceSteps = () => {
  return (
    <>
      <SectionWrapper>
        {/* heading */}
        <div className="flex flex-col justify-center items-center gap-2 px-10">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-dm-serif-display tracking-wider md:max-w-xl text-center mx-auto">
              How We work?
            </h2>
          </Reveal>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceSteps.map((serviceStep, idx) => (
            <TextReveal key={idx}>
              <div
                key={idx}
                className="block p-6 md:p-8 shadow-md hover:shadow-xl transition border border-b-4 border-l-4 border-b-accent border-l-accent"
              >
                <h2 className="text-xl md:text-2xl tracking-wide font-bold">
                  {serviceStep.heading}
                </h2>

                <p className="mt-1 text-sm">{serviceStep.description}</p>
              </div>
            </TextReveal>
          ))}
        </div>

        <div className="text-center my-4 sm:my-8">
          <Link to="/contact" role="button" className="btn btn-neutral">
            Contact Us Today
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
};

export default ServiceSteps;
