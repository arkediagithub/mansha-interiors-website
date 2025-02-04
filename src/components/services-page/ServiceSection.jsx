import { useState } from "react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { servicesDetails, servicesTabs } from "../../data/services";
import Reveal from "../Reveal";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";

const ServiceSection = () => {
  const [activeImage, setActiveImage] = useState(1);

  const handleImageChange = (index) => {
    setActiveImage(index);
  };

  return (
    <>
      <SectionWrapper>
        <Reveal className="w-full">
          <SectionHeading className="text-center">
            We Provide Different Types of <br className="max-sm:hidden" />{" "}
            Interior Design
          </SectionHeading>
        </Reveal>

        {/* tab list */}
        <div className="image-navigation mt-8 flex w-full justify-center">
          <div className="mb-6 lg:mb-10 flex flex-col md:flex-row gap-4 md:gap-6">
            {servicesTabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => handleImageChange(index + 1)}
                className={twMerge(
                  "text-left border-2 border-roti-400 rounded-2xl p-4",
                  activeImage === index + 1 ? "bg-roti-100" : "bg-transparent"
                )}
              >
                {/* <div>{tab.icon}</div> */}
                <h2 className="text-xl sm:text-2xl mb-2 text-black">
                  {tab.title}
                </h2>
                <p className="md:text-lg text-black">{tab.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* tab list content */}
        {servicesDetails.map(
          (service) =>
            activeImage === service.imageNumber && (
              <motion.div
                key={service.id}
                className="p-6 rounded-2xl border"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-xl lg:text-3xl mb-4">{service.title}</h2>
                <p className="text-base lg:text-lg mb-6">
                  {service.description}
                </p>
                <motion.img
                  key={service.id}
                  src={service.imageSource}
                  alt={`Image ${service.imageNumber}`}
                  // initial={{ opacity: 0, y: 100 }}
                  // animate={{ opacity: 1, y: 0 }}
                  className="w-full aspect-[16/9] rounded-lg object-cover"
                />
              </motion.div>
            )
        )}
      </SectionWrapper>
    </>
  );
};

export default ServiceSection;
