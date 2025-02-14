import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          className="relative aspect-video h-full"
        >
          <img
            src={
              services[currentIndex].image ||
              "https://placehold.co/1080x720/png?text=Placeholder+Image"
            }
            alt={services[currentIndex].title}
            className="aspect-[16/9] w-full rounded-xl pointer-events-none"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 py-2 rounded-b-lg">
            <Link to={services[currentIndex].to}>
              <h3 className="text-lg lg:text-xl font-semibold mb-2">
                {services[currentIndex].title}
              </h3>
            </Link>
            <p className="text-white leading-5 lg:max-w-[85%]">
              {services[currentIndex].description}
            </p>
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
