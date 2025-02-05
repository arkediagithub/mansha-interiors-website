import { twMerge } from "tailwind-merge";
import SectionWrapper from "../SectionWrapper";
import {
  homepage_hero_slide_banner_1,
  homepage_hero_slide_banner_2,
  homepage_hero_slide_banner_3,
  homepage_hero_slide_banner_4,
  homepage_hero_slide_banner_5,
} from "../../images";
import SectionHeading from "../SectionHeading";
import SectionParagraph from "../SectionParagraph";

const StudioGallery = () => {
  const images = [
    homepage_hero_slide_banner_1,
    homepage_hero_slide_banner_2,
    homepage_hero_slide_banner_3,
    homepage_hero_slide_banner_4,
    homepage_hero_slide_banner_5,
    homepage_hero_slide_banner_1,
    homepage_hero_slide_banner_2,
    homepage_hero_slide_banner_3,
    homepage_hero_slide_banner_4,
    homepage_hero_slide_banner_5,
  ];

  return (
    <SectionWrapper className="mt-10 lg:my-20">
      <SectionHeading className="text-center">
        Inside Our Creative Hub
      </SectionHeading>
      <SectionParagraph className="text-center mb-6 lg:mb-10">
        Step into our thoughtfully designed workspace, where innovation meets
        functionality. From vibrant design studios to collaborative meeting
        areas, every corner is crafted to inspire creativity and productivity.
        Experience the perfect blend of aesthetics and efficiency in our office!
      </SectionParagraph>

      {/* photo gallery */}
      <div className="container grid grid-cols-2 gap-4 mx-auto md:grid-cols-4">
        {images.map((image, index) => {
          const specialClasses =
            index === 0
              ? "col-span-2 row-span-2 min-h-96 md:col-start-3 md:row-start-1"
              : index === images.length - 1
              ? "col-span-2 row-span-2 min-h-96 md:col-start-1 md:row-start-3"
              : "min-h-48";

          return (
            <div
              key={index}
              className={twMerge(
                "w-full h-full rounded-2xl overflow-hidden group",
                specialClasses
              )}
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className={twMerge(
                  "w-full h-full shadow-sm bg-gray-500 aspect-square group-hover:scale-105 object-cover duration-500"
                )}
              />
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default StudioGallery;
