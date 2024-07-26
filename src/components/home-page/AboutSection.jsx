import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import aboutImg from "../../assets/about.avif";
import ImageReveal from "../ImageReveal";
import { aboutInfo } from "../../data/about";
import TextReveal from "../TextReveal";

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
      <section
        id="aboutSection"
        className=" px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12"
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            <ImageReveal
              src={aboutImg}
              alt="interior design service image"
              classNames="h-64 sm:h-96 md:h-full max-md:order-last"
            />

            <div id="aboutDetails" className="flex flex-col justify-center">
              <TextReveal>
                <p className="text-accent text-xl font-semibold md:font-bold">
                  {aboutInfo.title.toUpperCase()}
                </p>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-dm-serif-display tracking-wider">
                  {aboutInfo.subtitle}
                </h2>

                {aboutInfo.description.slice(0, 2).map((item, idx) => (
                  <p key={idx} className="mt-4 text-gray-600 lg:text-lg">
                    {item}
                  </p>
                ))}

                <p className="mt-4 text-gray-600 lg:text-lg">
                  {aboutInfo.description[aboutInfo.description.length - 1]}
                </p>
              </TextReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
