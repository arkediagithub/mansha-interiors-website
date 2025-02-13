import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const projects = [
  {
    id: 1,
    title: "Modern Minimalist Home",
    description:
      "A sleek and minimalist design for a contemporary urban apartment.",
    image: "https://placehold.co/1080x720/png?text=Placeholder+Image",
  },
  {
    id: 2,
    title: "Luxurious Villa Retreat",
    description:
      "An opulent villa design combining traditional elements with modern luxury.",
    image: "https://placehold.co/1080x720/png?text=Placeholder+Image",
  },
  {
    id: 3,
    title: "Eco-Friendly Office Space",
    description:
      "A sustainable office design promoting productivity and well-being.",
    image: "https://placehold.co/1080x720/png?text=Placeholder+Image",
  },
];

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-video cursor-grab"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(event, info) => {
            if (info.offset.x < -50) nextSlide();
            if (info.offset.x > 50) prevSlide();
          }}
        >
          <img
            src={
              projects[currentIndex].image ||
              "https://placehold.co/1080x720/png?text=Placeholder+Image"
            }
            alt={projects[currentIndex].title}
            className="aspect-[16/9] w-full rounded-lg pointer-events-none"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
            <h3 className="text-xl font-semibold mb-2">
              {projects[currentIndex].title}
            </h3>
            <p className="text-white">{projects[currentIndex].description}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
      >
        <IconChevronLeft className="w-6 h-6 text-black" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
      >
        <IconChevronRight className="w-6 h-6 text-black" />
      </button>
    </div>
  );
}
