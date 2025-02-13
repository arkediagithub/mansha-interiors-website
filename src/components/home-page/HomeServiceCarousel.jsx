import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const HomeServiceCarousel = ({ services }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + services.length) % services.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          className="relative aspect-video h-full"
          // drag="x"
          // dragConstraints={{ left: 0, right: 0 }}
          // onDragEnd={(event, info) => {
          //   if (info.offset.x < -50) nextSlide();
          //   if (info.offset.x > 50) prevSlide();
          // }}
        >
          <img
            src={
              services[currentIndex].image ||
              "https://placehold.co/1080x720/png?text=Placeholder+Image"
            }
            alt={services[currentIndex].title}
            className="aspect-[16/9] w-full rounded-xl pointer-events-none"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
            <h3 className="text-xl font-semibold mb-2">
              {services[currentIndex].title}
            </h3>
            <p className="text-white">{services[currentIndex].description}</p>
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
};

export default HomeServiceCarousel;
