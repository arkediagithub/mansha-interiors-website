import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const ImageSlideshow = ({ images, duration = 5, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [images.length, duration]);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
    >
      <AnimatePresence>
        {images.map((image, index) => {
          return (
            index === currentIndex && (
              <motion.img
                key={image}
                src={image}
                alt={`Slide ${index + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            )
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default ImageSlideshow;
