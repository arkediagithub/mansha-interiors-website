import { useEffect, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { IconChevronLeft, IconChevronRight, IconX } from "@tabler/icons-react";
import { useClickOutside } from "@mantine/hooks";

const CustomGallery = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const ref = useClickOutside(() => setSelectedIndex(null));

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedIndex !== null) {
        if (event.key === "ArrowRight") {
          handleNext();
        } else if (event.key === "ArrowLeft") {
          handlePrev();
        } else if (event.key === "Escape") {
          setSelectedIndex(null);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  const specialClasses = useMemo(() => {
    return images.map((_, index) => {
      if (index === 0) {
        return "md:col-start-1 md:row-start-1 col-span-2 row-span-2 min-h-96";
      } else if (index === images.length - 1) {
        return "md:col-start-3 md:row-start-3 col-span-2 row-span-2 min-h-96";
      } else {
        return "min-h-48";
      }
    });
  }, [images]);

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mx-auto md:grid-cols-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={twMerge(
              "w-full h-full rounded-2xl overflow-hidden group",
              specialClasses[index]
            )}
          >
            <img
              src={image}
              alt={`Studio Gallery Image ${index + 1}`}
              className={twMerge(
                "w-full h-full cursor-pointer rounded-lg shadow-md hover:opacity-80 transition"
              )}
              onClick={() => setSelectedIndex(index)}
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center bg-black/70 p-4">
          <div
            ref={ref}
            className="relative max-w-3xl w-full flex items-center"
          >
            <button
              className="absolute left-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition"
              onClick={handlePrev}
            >
              <IconChevronLeft className="w-6 h-6" />
            </button>
            <img
              src={images[selectedIndex]}
              alt="Selected"
              className="w-full max-h-[100vh] shadow-lg object-contain"
            />
            <button
              className="absolute right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition"
              onClick={handleNext}
            >
              <IconChevronRight className="w-6 h-6" />
            </button>
            <button
              className={twMerge(
                "absolute top-2 right-2 p-2 bg-white rounded-full shadow-md",
                "hover:bg-gray-200 transition"
              )}
              onClick={() => setSelectedIndex(null)}
            >
              <IconX className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomGallery;
