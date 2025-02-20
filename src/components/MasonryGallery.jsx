import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useClickOutside } from "@mantine/hooks";
import { IconChevronLeft, IconChevronRight, IconX } from "@tabler/icons-react";

// const images = [
//   "https://placehold.co/600x400?text=nature",
//   "https://placehold.co/600?text=city",
//   "https://placehold.co/600?text=technology",
//   "https://placehold.co/600x500?text=architecture",
//   "https://placehold.co/600x400?text=food",
//   "https://placehold.co/300x400?text=animals",
// ];

export default function MasonryGallery({ images }) {
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

  return (
    <div>
      <div className="masonry-sm md:masonry-md">
        {images.map((src, i) => (
          <div key={i} className="py-2 break-inside">
            <img
              src={src}
              alt={`Gallery Image ${i + 1}`}
              className="w-full h-full cursor-pointer rounded-lg shadow-md hover:opacity-80 transition object-cover"
              onClick={() => setSelectedIndex(i)}
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center bg-black/70 p-4">
          <div
            ref={ref}
            className="relative max-w-2xl w-full flex items-center"
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
              className="rounded-lg w-full max-h-[90vh] shadow-lg"
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
}
