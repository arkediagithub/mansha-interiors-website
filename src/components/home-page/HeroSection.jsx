import {
  homepage_hero_slide_banner_1,
  homepage_hero_slide_banner_2,
  homepage_hero_slide_banner_3,
  homepage_hero_slide_banner_4,
} from "../../images.js";
import HeadingAnimation from "../HeadingAnimation";
import ImageSlideshow from "../ImageSlideshow";

const HeroSection = () => {
  // hero slideshow images
  const images = [
    "https://images.unsplash.com/photo-1499955085172-a104c9463ece?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    homepage_hero_slide_banner_1,
    homepage_hero_slide_banner_2,
    homepage_hero_slide_banner_3,
    homepage_hero_slide_banner_4,
  ];

  return (
    <>
      <section className="mt-20">
        <div className="relative w-full aspect-[5/3] md:aspect-[16/9] max-h-[90vh]">
          {/* hero image slideshow*/}
          <ImageSlideshow images={images} className="w-full h-full" />
          {/* background overlay */}
          <div className="absolute inset-0 bg-black opacity-30" />
          {/*  */}
          <div className="absolute inset-0 flex flex-col justify-center items-center gap-4">
            <HeadingAnimation
              text="Create Spaces That Inspire"
              className="text-2xl sm:text-4xl lg:text-5xl text-center tracking-wider text-white text-balance"
            />
            <div className="lg:h-20"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
