import { useState } from "react";
import {
  // homepage_hero_slide_banner_2,
  homepage_hero_slide_banner_3,
  // homepage_hero_slide_banner_4,
  // homepage_hero_slide_banner_5,
} from "../../images.js";
// import ImageSlideshow from "../ImageSlideshow";
import TextAnimation from "../TextAnimation.jsx";

const heroHeadingText = [
  "Transform Your Space, Elevate Your Life",
  "Where Elegance Meets Comfort",
  "Designing Interiors, Crafting Dreams",
  "Luxury Living, Timeless Style",
  "Your Vision, Our Expertise",
  "Bringing Beauty and Function Together",
  "Create Spaces That Inspire",
  "Making Every Room a Masterpiece",
  "Designing Homes That Reflect You",
];

const HeroSection = () => {
  const [headingText, setHeadingText] = useState(
    heroHeadingText[Math.floor(Math.random() * heroHeadingText.length)]
  );

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setHeadingText(
  //       heroHeadingText[Math.floor(Math.random() * heroHeadingText.length)]
  //     );
  //   }, 10000);

  //   return () => clearInterval(interval);
  // }, []);

  // hero slideshow images
  // const images = [
  //   homepage_hero_slide_banner_2,
  //   homepage_hero_slide_banner_3,
  //   homepage_hero_slide_banner_4,
  //   homepage_hero_slide_banner_5,
  // ];

  return (
    <>
      <section className="mt-20 max-sm:-mb-4">
        <div className="relative w-full aspect-[5/3] md:aspect-[16/9] max-h-[90vh]">
          {/* hero image slideshow*/}
          {/* <ImageSlideshow images={images} className="w-full h-full" /> */}
          <div className="w-full h-full relative overflow-hidden">
            <img
              src={homepage_hero_slide_banner_3}
              alt={`Homepage hero section image`}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
          {/* background overlay */}
          <div className="absolute inset-0 bg-black opacity-30" />
          {/* hero heading text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 px-4">
            <TextAnimation
              by="word"
              text={headingText}
              className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl text-center tracking-wider text-white text-balance max-w-5xl"
              staggerChildren={0.05}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
