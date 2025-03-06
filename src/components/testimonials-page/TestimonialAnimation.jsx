import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const TestimonialAnimation = ({ paragraph }) => {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.3"],
  });

  // Split the paragraph into individual words
  // const words = paragraph.split(" ");

  // Split the paragraph into individual characters
  const characters = paragraph.split("");

  return (
    <motion.p
      ref={element}
      className="text-2xl md:text-3xl lg:text-3xl font-marck-script relative text-gray-600"
    >
      <span className="text-5xl mr-2">&quot;</span>
      {/* {words.map((word, i) => {
          const start = i / words.length; // Calculate start position for animation
          const end = start + 1 / words.length; // Calculate end position for animation

          return (
            <>
              <Word key={i} range={[start, end]} progress={scrollYProgress}>
                {word}
              </Word>
            </>
          );
        })} */}

      {characters.map((char, i) => {
        const start = i / characters.length; // Calculate start position for animation
        const end = start + 1 / characters.length; // Calculate end position for animation

        return (
          <Character key={i} range={[start, end]} progress={scrollYProgress}>
            {char}
          </Character>
        );
      })}
      <span className="text-5xl ml-2">&quot;</span>
    </motion.p>
  );
};

export default TestimonialAnimation;

// const Word = ({ children, range, progress }) => {
//   const opacity = useTransform(progress, range, [0.3, 1]);
//   return <motion.span style={{ opacity }}>{children}</motion.span>;
// };

const Character = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0.3, 1]); // Animate opacity based on scroll progress
  return <motion.span style={{ opacity }}>{children}</motion.span>;
};
