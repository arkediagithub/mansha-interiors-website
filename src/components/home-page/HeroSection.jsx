import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import heroImg1 from "../../assets/hero.jpg";

const HeroSection = () => {
  const headingRef = useRef(null);
  const heroImage1Ref = useRef(null);
  const heroImage2Ref = useRef(null);
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

    gsap.from(".imageOverlay", 1, {
      top: 0,
      left: 0,
      width: "100%",
    });

    const tl = gsap.timeline({ repeat: -1 });

    tl.to(heroImage1Ref.current, {
      opacity: 1,
      duration: 2,
    });
    tl.to(heroImage1Ref.current, {
      opacity: 0,
      duration: 1,
      delay: 2,
    });
    tl.to(
      heroImage2Ref.current,
      {
        opacity: 1,
        duration: 2,
      },
      2
    );
    tl.to(heroImage2Ref.current, {
      opacity: 0,
      duration: 1,
      delay: 2,
    });
  }, []);

  return (
    <>
      <section
        className={`px-4 sm:px-6 md:px-8 lg:px-12 pt-12 md:pt-16 pb-28 max-md:pb-10`}
      >
        {/* hero heading text */}
        <h1
          ref={headingRef}
          id="heroHeading"
          className="text-4xl sm:text-5xl lg:text-7xl text-center  mt-32 md:mt-16 mb-8 md:mb-14 tracking-wider text-balance md:w-3/4 mx-auto font-dm-serif-display"
        >
          {splitText}
        </h1>

        {/* relative image container */}
        <div className="relative ">
          {/* hero image */}
          <div className="w-full md:w-[85%] relative aspect-[16/9] mx-auto overflow-hidden">
            <img
              ref={heroImage1Ref}
              src={heroImg1}
              alt="hero image"
              className="heroImage absolute top-0 left-0 h-full w-full object-cover opacity-0"
            />
            <img
              ref={heroImage2Ref}
              src={
                "https://plus.unsplash.com/premium_photo-1670360414483-64e6d9ba9038?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="hero image"
              className="heroImage absolute top-0 left-0 h-full w-full object-cover opacity-0"
            />
            <div className="imageOverlay absolute top-0 left-0 h-full bg-accent"></div>
          </div>

          {/* floating contact card */}
          <div className="w-fit p-4 md:p-8 bg-white border-t-4 border-t-accent absolute shadow-lg animate-bounce-slow top-[80%] sm:top-[10%] right-[1%] sm:right-[3%] z-10 max-sm:hidden">
            <p className="text-sm sm:text-base md:text-lg mb-4 ">Contact:</p>
            <p className="text-sm sm:text-base font-bold">+91 96099 30991</p>
            <p className="text-sm sm:text-base font-bold">
              mi@manshainteriors.com
            </p>
          </div>

          {/* floating clients card */}
          <div className="w-fit p-4 md:p-8 bg-white border-t-4 border-t-accent absolute shadow-lg animate-bounce-slow top-[95%] sm:top-[65%] left-[1%] sm:left-[3%] z-10 max-sm:hidden">
            <p className="text-xl md:text-3xl font-bold text-accent">104</p>
            <p className="text-sm sm:text-base">HAPPY CLIENTS</p>
            <div className="my-4 md:my-8"></div>
            <p className="text-xl md:text-3xl font-bold text-accent">98</p>
            <p className="text-sm sm:text-base">AWARDS RECEIVED</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
