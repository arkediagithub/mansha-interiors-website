import { twMerge } from "tailwind-merge";
import SectionWrapper from "../SectionWrapper";

const StudioGallery = ({ images }) => {
  return (
    <>
      <SectionWrapper>
        <div className="container grid grid-cols-2 gap-4 mx-auto md:grid-cols-4">
          {images.map((image, index) => {
            // Define special styling for first and last images
            const specialClasses =
              index === 0
                ? "col-span-2 row-span-2 min-h-96 md:col-start-3 md:row-start-1"
                : index === images.length - 1
                ? "col-span-2 row-span-2 min-h-96 md:col-start-1 md:row-start-3"
                : "min-h-48";

            return (
              <img
                key={index}
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className={twMerge(
                  "w-full h-full rounded shadow-sm bg-gray-500 aspect-square object-cover",
                  specialClasses
                )}
              />
            );
          })}
        </div>
      </SectionWrapper>
    </>
  );
};

export default StudioGallery;
