import { Link } from "react-router-dom";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const CTASection = ({
  title,
  subtitle,
  buttonText = "Book a Free Consultation",
}) => {
  return (
    <>
      <SectionWrapper className="my-20">
        <div className="flex flex-col justify-center items-center">
          <SectionHeading className="text-center">{title}</SectionHeading>
          <p className="md:text-lg max-sm:text-center -mt-2 mb-2">{subtitle}</p>
          <Link
            to="/contact"
            role="button"
            className="mt-8 btn btn-neutral md:text-lg font-normal font-unbounded-variable bg-accent text-black border-accent hover:text-white"
          >
            {buttonText}
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
};

export default CTASection;
