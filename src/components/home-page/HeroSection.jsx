import { useState } from "react";
import TextAnimation from "../TextAnimation.jsx";

const heroHeadingText = [
  "Simplicity is the ultimate sophistication",
  "Transform Your Space, Elevate Your Life",
  "Where Elegance Meets Comfort",
  "Designing Interiors, Crafting Dreams",
  "Luxury Living, Timeless Style",
  "Your Vision, Our Expertise",
  "Bringing Beauty and Function Together",
  "Create Spaces That Inspire",
  "Making Every Room a Masterpiece",
  "Designing Homes That Reflect You",
  "We shape our homes and then our homes shape us",
];

const HeroSection = () => {
  const [headingText, setHeadingText] = useState(
    heroHeadingText[Math.floor(Math.random() * heroHeadingText.length)]
  );

  return (
    <>
      <section className="mt-20 max-sm:-mb-4">
        <div className="relative w-full aspect-[5/3] md:aspect-[16/9] max-h-[90vh]">
          {/* hero image slideshow*/}
          {/* <ImageSlideshow images={images} className="w-full h-full" /> */}
          <div className="w-full h-full relative overflow-hidden">
            <img
              // src={"https://placehold.co/1080x820?text=Office+Photo"}
              src={
                "https://res.cloudinary.com/dmuqtk9yg/image/upload/v1739262668/homepage_hero_slide_banner_3_d4le0m.png"
              }
              alt={`Homepage hero section image`}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
          {/* background overlay */}
          <div className="absolute inset-0 bg-black opacity-40" />
          {/* hero heading text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 px-4">
            <TextAnimation
              by="word"
              // text={"Welcome to Mansha Interiors"}
              text={"Transform Your Space, Elevate Your Life"}
              className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl text-center tracking-wider text-white text-balance max-w-5xl"
              staggerChildren={0.05}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
