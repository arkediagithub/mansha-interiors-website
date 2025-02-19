import { twMerge } from "tailwind-merge";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import SectionParagraph from "../SectionParagraph";
import SectionWrapper from "../SectionWrapper";

const SectionGallery = ({ title, subtitle, images }) => {
  return (
    <>
      <SectionWrapper>
        <Reveal className="w-full">
          <SectionHeading className="text-center pb-8">
            {title || "title"}
          </SectionHeading>
        </Reveal>
        {subtitle && (
          <Reveal className="w-full">
            <SectionParagraph className="text-center mb-6">
              {subtitle}
            </SectionParagraph>
          </Reveal>
        )}

        {/* service gallery */}
        <Reveal className="w-full">
          <div className="container grid grid-cols-2 gap-2 lg:gap-4 mx-auto md:grid-cols-4">
            {images.map((image, index) => {
              const specialClasses =
                index === 0
                  ? "md:col-start-1 md:row-start-1 col-span-2 row-span-2 min-h-96"
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
        </Reveal>
      </SectionWrapper>
    </>
  );
};

export default SectionGallery;
