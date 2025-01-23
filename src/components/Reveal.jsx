import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { motion, useAnimation, useInView } from "motion/react";

const Reveal = ({
  children,
  className = "",
  // overlayClassName = "bg-accent",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <div
      ref={ref}
      className={twMerge("relative overflow-hidden w-fit", className)}
    >
      <motion.div
        className="h-full"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
      >
        {children}
      </motion.div>
      {/* overlay slide animation */}
      {/* <motion.div
        className={twMerge("absolute inset-0 z-20", overlayClassName)}
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
      ></motion.div> */}
    </div>
  );
};

export default Reveal;
