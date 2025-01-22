import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

const HeadingAnimation = ({ text = "", className = "" }) => {
  const letters = Array.from(text);

  const parent = {
    hidden: {},
    visible: {},
  };

  const child = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.h1
      className={twMerge("text-3xl", className)}
      variants={parent}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.03 }}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {letters.map((char, index) => (
          <motion.span key={index} variants={child} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    </motion.h1>
  );
};

export default HeadingAnimation;
