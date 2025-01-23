import { services } from "../../data/services";
import TextReveal from "../TextReveal";
import Reveal from "../Reveal";
import SectionWrapper from "../SectionWrapper";

const ServiceSection = () => {
  return (
    <>
      <SectionWrapper>
        {/* heading */}
        <div className="flex flex-col justify-center items-center gap-2 px-10">
          <Reveal>
            <h1 className="text-2xl sm:text-4xl tracking-wider md:max-w-xl text-center mx-auto">
              We provide different types of Interior design
            </h1>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 my-8">
          {services.map((service, idx) => (
            <div key={idx}>
              <Reveal className="w-full">
                <img
                  src={service?.image}
                  alt="interior design service image"
                  className="h-72 w-full mb-4 object-cover"
                />
              </Reveal>

              <TextReveal>
                <h2 className="text-xl sm:text-2xl mb-2">
                  {service?.heading}
                </h2>
                <p className="md:text-lg">{service?.description}</p>
              </TextReveal>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default ServiceSection;
