import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import heroImg1 from "../../assets/hero.jpg";
import StatsCounter from "../StatsCounter";
import ImageSlideshow from "../ImageSlideshow";

const HeroSection = () => {
  const headingRef = useRef(null);
  const headingText = "Transform Your Space with Elegance and Style";

  const splitText = headingText.split("").map((char, index) => (
    <span key={index} className="char">
      {char}
    </span>
  ));

  useGSAP(() => {
    gsap.fromTo(
      ".char",
      { opacity: 0 },
      { opacity: 1, stagger: 0.03, duration: 1 }
    );
  }, []);

  // hero images
  const images = [
    heroImg1,
    "https://images.unsplash.com/photo-1499955085172-a104c9463ece?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <>
      <section
        className={`px-4 sm:px-6 md:px-8 lg:px-12 pt-12 md:pt-16 pb-0 md:pb-20`}
      >
        {/* hero heading text for md screens */}
        <h1
          ref={headingRef}
          id="heroHeading"
          className="text-4xl sm:text-5xl lg:text-7xl text-center  mt-24 md:mt-16 mb-10 md:mb-14 tracking-wider text-balance md:w-3/4 mx-auto font-dm-serif-display"
        >
          {splitText}
        </h1>

        {/* relative image container */}
        <div className="relative ">
          {/* hero image slideshow*/}
          <ImageSlideshow
            images={images}
            className="w-full md:w-[85%] relative aspect-[16/9] mx-auto"
          />

          {/* floating contact card */}
          <div className="w-fit p-4 md:p-8 bg-white border-t-4 border-t-accent absolute shadow-lg animate-bounce-slow top-[80%] sm:top-[10%] right-[1%] sm:right-[3%] z-10 max-md:hidden">
            <StatsCounter
              minimum={0}
              maximum={104}
              delay={10}
              className="text-xl md:text-3xl font-bold text-accent"
            />
            <p className="text-sm sm:text-base">HAPPY CLIENTS</p>
            <div className="my-4 md:my-8"></div>
            <StatsCounter
              minimum={0}
              maximum={98}
              delay={20}
              className="text-xl md:text-3xl font-bold text-accent"
            />
            <p className="text-sm sm:text-base">AWARDS RECEIVED</p>
          </div>

          {/* floating clients card */}
          <div className="w-fit p-4 md:p-8 bg-white border-t-4 border-t-accent absolute shadow-lg animate-bounce-slow top-[95%] sm:top-[65%] left-[1%] sm:left-[3%] z-10 max-md:hidden">
            <p className="text-sm sm:text-base md:text-lg mb-4 ">Contact:</p>
            <p className="text-sm sm:text-base font-bold">+91 96099 30991</p>
            <p className="text-sm sm:text-base font-bold">
              mi@manshainteriors.com
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
