import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const TestimonialAnimation = ({ paragraph }) => {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraph.split(" ");

  return (
    <>
      <motion.p
        ref={element}
        className="text-2xl md:text-4xl lg:text-4xl font-marck-script flex flex-wrap gap-x-2 gap-y-1 relative"
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;

          return (
            <>
              <Word key={i} range={[start, end]} progress={scrollYProgress}>
                {word}
              </Word>
            </>
          );
        })}
      </motion.p>
    </>
  );
};

export default TestimonialAnimation;

const Word = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0.3, 1]);
  return <motion.span style={{ opacity }}>{children}</motion.span>;
};
