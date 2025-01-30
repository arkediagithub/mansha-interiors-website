import { twMerge } from "tailwind-merge";

const SectionHeading = ({ children, className = "" }) => {
  return (
    <h2
      className={twMerge(
        "text-3xl lg:text-5xl tracking-wider my-2 md:my-4 font-league-spartan-variable",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
