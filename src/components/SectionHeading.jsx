import { twMerge } from "tailwind-merge";

const SectionHeading = ({ children, className = "" }) => {
  return (
    <h2
      className={twMerge(
        "text-2xl lg:text-4xl tracking-wider my-2 md:my-4",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
