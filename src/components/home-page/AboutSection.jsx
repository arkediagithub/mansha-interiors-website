import { homepage_hero_slide_banner_1 } from "../../images";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import SectionParagraph from "../SectionParagraph";
import SectionWrapper from "../SectionWrapper";

const AboutSection = () => {
  // const aboutHeading = "Welcome to Mansha Interiors";

  return (
    <>
      <SectionWrapper id="home_page_about_section" className="md:my-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          <Reveal className="w-full max-md:order-2">
            <img
              src={homepage_hero_slide_banner_1}
              alt="interior design service image"
              className="h-64 sm:h-96 md:h-[450px] w-full max-md:order-last object-fill rounded-2xl"
            />
          </Reveal>

          <div id="about_details" className="flex flex-col justify-center">
            <Reveal>
              <SectionHeading>Welcome to Mansha Interiors</SectionHeading>
            </Reveal>

            <Reveal>
              <SectionParagraph>
                Located in Siliguri, we’re all about creating spaces that are as
                unique as you are. Whether it’s your home or office, we blend
                creativity, comfort, and modern design to bring your vision to
                life.
              </SectionParagraph>
            </Reveal>
            <Reveal>
              <SectionParagraph>
                Our team’s got the expertise to turn your ideas into reality
                with a dash of elegance and a whole lot of style. From sleek
                residential designs to bold commercial spaces, we craft
                interiors that wow.
              </SectionParagraph>
            </Reveal>
            <Reveal>
              <SectionParagraph>
                Ready to transform your space? Let’s make it happen – with
                Mansha Interiors, where design dreams come true!
              </SectionParagraph>
            </Reveal>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default AboutSection;
