import { founder } from "../../data/teamMembers";
import Reveal from "../Reveal";
import SectionWrapper from "../SectionWrapper";
import SectionParagraph from "../SectionParagraph";
import SectionHeading from "../SectionHeading";

export default function FounderSection() {
  return (
    <>
      <SectionWrapper id="home_page_about_section" className="md:my-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          <Reveal className="w-full">
            <img
              src={founder.image}
              alt="interior design service image"
              className="w-full md:h-full max-md:aspect-square max-md:order-last object-cover rounded-2xl"
            />
          </Reveal>

          <div id="about_details" className="flex flex-col justify-center">
            <Reveal>
              <SectionHeading className="mb-0 md:mb-0">
                {founder.name}
              </SectionHeading>
            </Reveal>

            <Reveal>
              <SectionParagraph>{founder.designation}</SectionParagraph>
            </Reveal>

            <Reveal>
              <SectionParagraph>
                Meet Gautam Agarwal, the creative force and founder of Mansha
                Interiors. With a B.Com degree and a prestigious diploma in
                Interior Design from INIFD, Gautam embarked on his design
                journey 13 years ago with one clear goal: to create spaces that
                don&apos;t just look stunning but make you feel truly at home.
              </SectionParagraph>
            </Reveal>

            <Reveal>
              <SectionParagraph>
                A perfectionist with an eye for the smallest details,
                Gautam&apos;s approach to design is centered on the belief that
                every space should be an experience—one that blends form,
                function, and emotion. His process begins by understanding the
                unique needs of each client, ensuring every project is tailored
                to create a seamless flow that resonates with both the eye and
                the soul. The result? Spaces that inspire awe and spark joy at
                every turn.
              </SectionParagraph>
            </Reveal>

            <Reveal>
              <SectionParagraph>
                Under Gautam&apos;s leadership, Mansha Interiors has become a
                hallmark of innovative, modern, and highly personalized design.
                Gautam&apos;s mission is simple: to craft environments that not
                only wow but also create a sense of comfort, warmth, and
                belonging, making each space feel alive and full of possibility.
              </SectionParagraph>
            </Reveal>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
