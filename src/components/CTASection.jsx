import { Link } from "react-router-dom";
import SectionWrapper from "./SectionWrapper";

const CTASection = () => {
  return (
    <>
      <SectionWrapper>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl sm:text-4xl tracking-wider text-balance text-center my-2 md:my-6">
            Elevate Your Living Experience
          </h2>
          <p className="md:text-lg max-sm:text-center mb-2">
            From concept to completion, we craft spaces you’ll love to live in.
          </p>
          <Link
            to="/contact#contact_form_section"
            role="button"
            className="mt-8 btn btn-neutral md:text-lg font-normal font-unbounded-variable"
          >
            Book a Free Consultation
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
};

export default CTASection;
