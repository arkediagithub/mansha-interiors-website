import BgOverlay from "../BgOverlay.jsx";
import TextAnimation from "../TextAnimation.jsx";
// import ImageSlideshow from "../ImageSlideshow.jsx";

// const heroSlideShowImages = [
//   "https://res.cloudinary.com/dmuqtk9yg/image/upload/v1740205753/DSC07407_11zon_dsyhvg.jpg",
//   "https://res.cloudinary.com/dmuqtk9yg/image/upload/v1740205687/DSC07387_11zon_zxx8d2.jpg",
//   "https://res.cloudinary.com/dmuqtk9yg/image/upload/v1740205681/DSC07417_11zon_krfic5.jpg",
//   "https://res.cloudinary.com/dmuqtk9yg/image/upload/v1740205675/DSC07398_11zon_s1wubz.jpg",
// ];

const HeroSection = () => {
  return (
    <>
      <section className="mt-20 max-sm:-mb-4">
        <div className="relative w-full aspect-[5/3] md:aspect-[16/9] max-h-[90vh]">
          {/* hero image slideshow*/}
          {/* <ImageSlideshow
            images={heroSlideShowImages}
            className="w-full h-full"
          /> */}
          <div className="w-full h-full relative overflow-hidden">
            <img
              src={
                "https://res.cloudinary.com/dmuqtk9yg/image/upload/v1740205687/DSC07387_11zon_zxx8d2.jpg"
              }
              alt={`Homepage hero section image`}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
          {/* background overlay */}
          <BgOverlay className="opacity-40" />
          {/* hero heading text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 px-4">
            <TextAnimation
              by="word"
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
