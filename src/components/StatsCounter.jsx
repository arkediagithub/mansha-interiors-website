import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";
import { twMerge } from "tailwind-merge";

const StatsCounter = ({
  minimum = 0,
  maximum = 100,
  prefix = "",
  suffix = "",
  className = "",
  incrementBy = 1,
  delay = 1,
}) => {
  const [count, setCount] = useState(minimum);
  const ref = useRef(null);

  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, amount: 1 });

  useEffect(() => {
    let interval;

    if (isInView) {
      controls.start("visible");
      interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount + incrementBy > maximum) {
            clearInterval(interval);
            return maximum;
          }
          return prevCount + incrementBy;
        });
      }, delay);
    }

    return () => clearInterval(interval);
  }, [isInView, incrementBy, delay, maximum, controls]);

  return (
    <motion.div
      ref={ref}
      className={twMerge("font-league-spartan-variable", className)}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{ duration: 0.5 }}
    >
      {`${prefix}${count}${suffix}`}
    </motion.div>
  );
};

export default StatsCounter;
