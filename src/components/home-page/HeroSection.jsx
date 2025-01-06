import heroImg1 from "../../assets/hero.jpg";
import StatsCounter from "../StatsCounter";
import ImageSlideshow from "../ImageSlideshow";
import SectionWrapper from "../SectionWrapper";
import HeadingAnimation from "../HeadingAnimation";

const HeroSection = () => {
  // hero images
  const images = [
    heroImg1,
    "https://images.unsplash.com/photo-1499955085172-a104c9463ece?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <>
      <SectionWrapper className={`pt-12 md:pt-16 pb-0 md:pb-8`}>
        {/* hero heading text */}
        <HeadingAnimation
          text="Transform Your Space with Elegance and Style"
          className="text-4xl sm:text-5xl lg:text-7xl text-center  mt-24 md:mt-16 mb-10 md:mb-14 tracking-wider text-balance lg:w-3/4 mx-auto font-dm-serif-display"
        />

        {/* relative image container */}
        <div className="relative">
          {/* hero image slideshow*/}
          <ImageSlideshow
            images={images}
            className="w-full lg:w-[85%] relative aspect-[16/9] mx-auto"
          />

          {/* floating contact card */}
          <div className="w-fit p-4 md:p-8 bg-white border-t-4 border-t-accent absolute shadow-lg animate-bounce-slow top-[80%] sm:top-[10%] right-[1%] sm:right-[0] z-10 max-md:hidden">
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
          <div className="w-fit p-4 md:p-8 bg-white border-t-4 border-t-accent absolute shadow-lg animate-bounce-slow sm:top-[75%] left-[1%] sm:left-[0] z-10 max-md:hidden">
            <p className="text-sm sm:text-base md:text-lg mb-4 ">Contact:</p>
            <p className="text-sm sm:text-base font-bold">+91 96099 30991</p>
            <p className="text-sm sm:text-base font-bold">
              mi@manshainteriors.com
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default HeroSection;
