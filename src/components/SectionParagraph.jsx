import { twMerge } from "tailwind-merge";

const SectionParagraph = ({ children, className = "" }) => {
  return (
    <p
      className={twMerge(
        "text-gray-500 text-base lg:text-lg text-justify font-inter-variable mt-3",
        className
      )}
    >
      {children}
    </p>
  );
};

export default SectionParagraph;
