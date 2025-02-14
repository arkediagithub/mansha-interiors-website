import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

const blurInUpVariants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      y: { duration: 0.3 },
      opacity: { duration: 0.4 },
      filter: { duration: 0.3 },
    },
  },
};

const TextAnimation = ({
  text,
  className,
  segmentClassName,
  startOnView = false,
  once = false,
  by = "word",
  staggerChildren = 0.03,
}) => {
  let segments = [];
  switch (by) {
    case "word":
      segments = text.split(/(\s+)/);
      break;
    case "character":
      segments = text.split("");
      break;
    case "line":
      segments = text.split("\n");
      break;
    case "text":
    default:
      segments = [text];
      break;
  }

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView={startOnView ? "show" : undefined}
        animate={startOnView ? undefined : "show"}
        viewport={{ once }}
        className={twMerge("whitespace-pre-wrap font-against", className)}
        transition={{ staggerChildren }}
      >
        {segments.map((segment, i) => (
          <motion.span
            key={i}
            variants={blurInUpVariants}
            className={twMerge(
              "",
              by === "line" ? "block" : "inline-block whitespace-pre",
              segmentClassName
            )}
          >
            {segment}
          </motion.span>
        ))}
      </motion.div>
    </>
  );
};

export default TextAnimation;
