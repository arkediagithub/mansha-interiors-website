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

        {/* new service section tabs */}
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
                  {tab.heading}
                </h2>
                <p className="md:text-lg text-black">{tab.description}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-lg border">
          {servicesDetails.map(
            (image) =>
              activeImage === image.imageNumber && (
                <motion.img
                  key={image.imageNumber}
                  src={image.imageSource}
                  alt={`Image ${image.imageNumber}`}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full aspect-[16/9] rounded-lg object-cover"
                />
              )
          )}
        </div>
      </SectionWrapper>
    </>
  );
};

export default ServiceSection;
