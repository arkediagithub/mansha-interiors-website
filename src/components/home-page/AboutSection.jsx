import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import aboutImg from "../../assets/about.avif";
import { aboutInfo } from "../../data/about";

import Reveal from "../Reveal";
import SectionWrapper from "../SectionWrapper";

const AboutSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("#aboutDetails", {
      scrollTrigger: {
        trigger: "#aboutSection",
        start: "top 90%",
        end: "top 50%",
        scrub: true,
        once: true,
      },
      opacity: 0,
      duration: 10,
      y: 100,
    });
  }, []);

  return (
    <>
      <SectionWrapper id="home page about section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          <Reveal className="w-full">
            <img
              src={aboutImg}
              alt="interior design service image"
              className="h-64 sm:h-96 md:h-full w-full max-md:order-last"
            />
          </Reveal>

          <div id="aboutDetails" className="flex flex-col justify-center">
            <Reveal>
              <p className="text-accent text-xl font-semibold md:font-bold">
                {aboutInfo.title.toUpperCase()}
              </p>
            </Reveal>

            <Reveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-dm-serif-display tracking-wider">
                {aboutInfo.subtitle}
              </h2>
            </Reveal>

            {aboutInfo.description.slice(0, 2).map((item, idx) => (
              <Reveal key={idx} className="mt-4">
                <p className="text-gray-600 lg:text-lg">{item}</p>
              </Reveal>
            ))}

            <Reveal>
              <p className="mt-4 text-gray-600 lg:text-lg">
                {aboutInfo.description[aboutInfo.description.length - 1]}
              </p>
            </Reveal>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default AboutSection;
