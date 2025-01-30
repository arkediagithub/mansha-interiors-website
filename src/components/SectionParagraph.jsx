import { twMerge } from "tailwind-merge";

const SectionParagraph = ({ children, className = "" }) => {
  return (
    <p
      className={twMerge(
        "text-gray-500 text-base lg:text-lg text-justify mt-2",
        className
      )}
    >
      {children}
    </p>
  );
};

export default SectionParagraph;
