import { twMerge } from "tailwind-merge";
import SectionWrapper from "../SectionWrapper";
import TestimonialAnimation from "./TestimonialAnimation";

const Testimonial = ({ testimonial, index }) => {
  return (
    <SectionWrapper className="px-8 lg:px-20">
      <div
        className={twMerge(
          "flex flex-col gap-4 md:gap-0 md:my-20",
          index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
        )}
      >
        <div className="md:w-1/3 flex flex-col justify-center items-center">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-36 lg:w-48 aspect-square object-cover rounded-full"
          />
          <p className="text-lg">{testimonial.name}</p>
        </div>
        <div className="md:w-2/3">
          <TestimonialAnimation paragraph={testimonial.text} />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Testimonial;
