import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import SectionParagraph from "../SectionParagraph";
import SectionWrapper from "../SectionWrapper";
import { IconPlayerRecordFilled } from "@tabler/icons-react";

const ServiceAboutSection = ({
  image,
  subtitle,
  descriptionContent,
  title = "title",
  description = "description",
}) => {
  return (
    <SectionWrapper id="home_page_about_section" className="md:my-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        <Reveal className="w-full max-md:order-2 rounded-2xl overflow-hidden">
          <img
            src={image || "https://placehold.co/600"}
            alt="interior design service image"
            className="w-full max-md:aspect-[5/3] max-md:order-last object-cover rounded-2xl overflow-hidden"
          />
        </Reveal>

        <div id="about_details" className="flex flex-col justify-center">
          <Reveal>
            <SectionHeading>{title}</SectionHeading>
            {subtitle && <SectionParagraph>{subtitle}</SectionParagraph>}
          </Reveal>

          <Reveal>
            <SectionParagraph>{description}</SectionParagraph>
          </Reveal>

          {Array.isArray(descriptionContent) ? (
            <Reveal>
              <ul className="text-base lg:text-lg text-gray-500 mt-4">
                {descriptionContent.map((item, i) => (
                  <li key={i} className="flex gap-2 items-center md:pl-2">
                    <IconPlayerRecordFilled
                      stroke={1}
                      className="text-roti-400"
                      size={"12px"}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : (
            <Reveal>
              <SectionParagraph>{descriptionContent}</SectionParagraph>
            </Reveal>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ServiceAboutSection;
