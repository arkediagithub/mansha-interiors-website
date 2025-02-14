import { founder } from "../../data/teamMembers";
import Reveal from "../Reveal";
import SectionWrapper from "../SectionWrapper";
import SectionParagraph from "../SectionParagraph";
import SectionHeading from "../SectionHeading";

export default function FounderSection() {
  return (
    <>
      <SectionWrapper id="home_page_about_section" className="md:my-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <Reveal className="w-full">
            <img
              src={founder.image}
              alt="interior design service image"
              className="w-full md:h-full max-md:aspect-[12/10] max-md:order-last object-cover rounded-3xl md:rounded-[53%_47%_62%_38%_/_60%_59%_41%_40%]"
            />
          </Reveal>

          <div id="about_details" className="flex flex-col justify-center">
            <Reveal>
              <SectionHeading className="mb-0 md:mb-0 max-md:mt-0">
                {founder.name}
              </SectionHeading>
            </Reveal>

            <Reveal>
              <SectionParagraph>{founder.designation}</SectionParagraph>
            </Reveal>

            <Reveal>
              {/* <SectionParagraph>
                Meet Gautam Agarwal, the visionary founder of Mansha Interiors.
                With a B.Com degree and a prestigious diploma in Interior Design
                from INIFD, he embarked on his design journey 13 years ago with
                a passion for crafting spaces that are both visually stunning
                and deeply inviting. A perfectionist with an eye for detail,
                Gautam believes that great design is an experience—one that
                seamlessly blends form, function, and emotion. His approach
                begins with understanding each client’s unique needs, ensuring
                every project flows effortlessly and resonates on a personal
                level.
              </SectionParagraph> */}
              <SectionParagraph>
                Gautam Agarwal, founder of Mansha Interiors, blends creativity
                with precision. With a B.Com and an Interior Design diploma from
                INIFD, he’s spent 13 years crafting spaces that are both stylish
                and inviting.
              </SectionParagraph>
            </Reveal>

            <Reveal>
              {/* <SectionParagraph>
                Under his leadership, Mansha Interiors has become synonymous
                with innovation, modern aesthetics, and highly personalized
                design. Gautam’s mission is simple: to create spaces that not
                only impress but also evoke warmth, comfort, and a true sense of
                belonging.
              </SectionParagraph> */}
              <SectionParagraph>
                His client-first approach has shaped Mansha Interiors into a
                name synonymous with innovation, modern aesthetics, and bespoke
                design. His vision ensures every space is not just beautifully
                designed but also deeply personal and functional.
              </SectionParagraph>
            </Reveal>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
