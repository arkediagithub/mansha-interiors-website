import { twMerge } from "tailwind-merge";

const SectionHeading = ({ children, className = "" }) => {
  return (
    <h2
      className={twMerge(
        "text-3xl lg:text-5xl tracking-wider my-3 md:my-6 font-league-spartan-variable",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
