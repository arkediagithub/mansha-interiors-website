import SectionWrapper from "../SectionWrapper";
import BentoCard from "./BentoCard";

const HomeBentoService = () => {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-3 md:grid-cols-3 grid-rows-3 md:grid-rows-4 gap-2 md:gap-3 m-4">
        <div className="col-start-1 row-start-1 md:col-start-1 md:row-start-1 md:col-span-2 md:row-span-1 bg-gray-300 rounded-md p-10">
          <BentoCard
            image={
              "https://res.cloudinary.com/dmuqtk9yg/image/upload/v1739262671/homepage_hero_slide_banner_1_u9rwjh.png"
            }
            title={"Interior Design"}
            desc={
              "Your home should be a reflection of your lifestyle and personality. We specialize in designing warm, inviting, and functional living spaces that perfectly balance aesthetics and comfort. From modern minimalism to classic elegance, our expert designers tailor every detail to your taste. Whether it's a cozy bedroom, a stylish living area, or a functional kitchen, we ensure every corner of your home feels truly yours."
            }
          />
        </div>
        <div className="hidden md:block md:col-start-3 md:row-start-1 md:col-span-1 md:row-span-1 bg-gray-300 rounded-md p-10">
          1
        </div>
        <div className="hidden md:block md:col-start-1 md:row-start-2 md:col-span-1 md:row-span-1 bg-gray-300 rounded-md p-10">
          2
        </div>
        <div className="hidden md:block md:col-start-2 md:row-start-2 md:col-span-2 md:row-span-1 bg-gray-300 rounded-md p-10">
          3
        </div>
        <div className="hidden md:block md:col-start-1 md:row-start-3 md:col-span-2 md:row-span-1 bg-gray-300 rounded-md p-10">
          4
        </div>
        <div className="hidden md:block md:col-start-3 md:row-start-3 md:col-span-1 md:row-span-1 bg-gray-300 rounded-md p-10">
          5
        </div>
        <div className="hidden md:block md:col-start-1 md:row-start-4 md:col-span-1 md:row-span-1 bg-gray-300 rounded-md p-10">
          6
        </div>
        <div className="hidden md:block md:col-start-2 md:row-start-4 md:col-span-2 md:row-span-1 bg-gray-300 rounded-md p-10">
          7
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HomeBentoService;
