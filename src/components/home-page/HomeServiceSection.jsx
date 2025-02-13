import { useState } from "react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { servicesDetails, servicesTabs } from "../../data/services";
import SectionWrapper from "../SectionWrapper";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const HomeServiceSection = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <SectionWrapper id="home_page_feature_section" className="md:mt-32">
      <div id="features_headings">
        <Reveal>
          <p className="text-accent text-xl font-semibold md:font-bold">
            What We Do
          </p>
        </Reveal>
        <Reveal>
          {/* <SectionHeading>
            Designing The Future <br className="max-sm:hidden" />
            One at a Time
          </SectionHeading> */}
          <SectionHeading>Designing with Purpose and Passion</SectionHeading>
        </Reveal>
      </div>

      {/* tab list */}
      <div className="image-navigation mt-4 md:mt-8 flex w-full justify-center">
        <div className="mb-6 lg:mb-10 flex flex-col md:flex-row gap-4 md:gap-6">
          {servicesTabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabChange(index + 1)}
              className={twMerge(
                "text-left border-2 border-roti-400 rounded-2xl p-4",
                activeTab === index + 1 ? "bg-roti-100" : "bg-transparent"
              )}
            >
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
          activeTab === service.tabNumber && (
            <motion.div
              key={service.id}
              className="p-4 lg:p-6 rounded-2xl border"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-xl lg:text-3xl mb-4">{service.title}</h2>
              <p className="text-base lg:text-lg mb-6 text-black">
                {service.description}
              </p>
              <img
                src={service.imageSource}
                alt={`Image ${service.imageNumber}`}
                className="w-full aspect-[18/9] rounded-lg object-cover"
              />
            </motion.div>
          )
      )}
    </SectionWrapper>
  );
};

export default HomeServiceSection;
