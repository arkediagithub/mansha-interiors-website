import { motion } from "motion/react";

const TextReveal = ({ children, classNames = "" }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`py-2 text-white overflow-hidden z-[3] ${classNames}`}
    >
      {children}
    </motion.div>
  );
};

export default TextReveal;
