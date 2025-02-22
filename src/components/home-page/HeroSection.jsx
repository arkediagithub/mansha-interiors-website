import TextAnimation from "../TextAnimation.jsx";

const HeroSection = () => {
  return (
    <>
      <section className="mt-20 max-sm:-mb-4">
        <div className="relative w-full aspect-[5/3] md:aspect-[16/9] max-h-[90vh]">
          {/* hero image slideshow*/}
          {/* <ImageSlideshow images={heroSlideShowImages} className="w-full h-full" /> */}
          <div className="w-full h-full relative overflow-hidden">
            <img
              src={
                "https://res.cloudinary.com/dmuqtk9yg/image/upload/v1739262668/homepage_hero_slide_banner_3_d4le0m.png"
              }
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
