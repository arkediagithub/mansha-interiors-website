import { motion } from "motion/react";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import SectionParagraph from "../SectionParagraph";
import SectionWrapper from "../SectionWrapper";
import HomeServiceCarousel from "./HomeServiceCarousel";
import { mainServices, otherServices } from "../../data/home-page";

const HomeServiceBento = () => {
  return (
    <>
      <SectionWrapper>
        {/* first grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* left */}
          <div className="lg:pr-10 lg:pt-4 lg:pl-2">
            <Reveal>
              <p className="text-roti-400 text-xl font-semibold md:font-bold">
                What We Do
              </p>
            </Reveal>
            <Reveal>
              <SectionHeading className="lg:text-3xl xl:text-4xl">
                Designing with Purpose and Passion
              </SectionHeading>
            </Reveal>
            <Reveal>
              <SectionParagraph>
                At Mansha Design, we create functional and elegant interiors
                tailored to your needs. From offices and showrooms to hospitals
                and hospitality spaces, we craft inspiring environments with a
                seamless blend of aesthetics and practicality.
              </SectionParagraph>
            </Reveal>
          </div>
          {/* right */}
          <div className="rounded-xl overflow-hidden border border-roti-400">
            <HomeServiceCarousel services={mainServices} />
          </div>
        </div>

        {/* second grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 mt-4 lg:mt-6">
          {otherServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="card card-compact bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  src={service.image}
                  alt="other service images"
                  className="w-full h-full pointer-events-none"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service.title}</h2>
                <p className="text-base">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default HomeServiceBento;
