import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import SectionParagraph from "../SectionParagraph";
import SectionWrapper from "../SectionWrapper";

const ServiceBeforeAfter = ({ title, subtitle, beforeImage, afterImage }) => {
  return (
    <SectionWrapper>
      <Reveal className="w-full">
        <SectionHeading className="text-center">
          {title || "title"}
        </SectionHeading>
        {subtitle && (
          <SectionParagraph className="text-center mb-6">
            {subtitle}
          </SectionParagraph>
        )}
      </Reveal>

      {/* before and after image */}
      <Reveal className="w-full">
        <div className="diff aspect-[16/9] lg:aspect-[18/9]">
          {/* after */}
          <div className="diff-item-1">
            <img
              src={afterImage}
              alt={`After Image`}
              className="rounded-lg object-cover"
            />
          </div>
          {/* before */}
          <div className="diff-item-2">
            <img
              src={beforeImage}
              alt={`Before Image`}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="diff-resizer"></div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
};

export default ServiceBeforeAfter;
