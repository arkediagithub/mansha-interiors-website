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

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceSteps.map((serviceStep, idx) => (
            <TextReveal key={idx}>
              <div
                key={idx}
                className="block p-6 md:p-8 border border-b-4 border-l-4 border-b-accent border-l-accent text-black rounded-bl-3xl rounded-tr-3xl"
              >
                <h2 className="text-xl tracking-wide">{serviceStep.heading}</h2>
                <p className="mt-1">{serviceStep.description}</p>
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
