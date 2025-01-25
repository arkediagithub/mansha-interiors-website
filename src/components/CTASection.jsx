import { Link } from "react-router-dom";
import SectionWrapper from "./SectionWrapper";

const CTASection = ({
  title,
  subtitle,
  buttonText = "Book a Free Consultation",
}) => {
  return (
    <>
      <SectionWrapper>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl sm:text-4xl tracking-wider text-balance text-center my-2 md:my-6">
            {title}
          </h2>
          <p className="md:text-lg max-sm:text-center mb-2">{subtitle}</p>
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
