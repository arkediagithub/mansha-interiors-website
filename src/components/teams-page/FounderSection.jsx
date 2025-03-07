import { founder } from "../../data/about-us-page";
import Reveal from "../Reveal";
import SectionParagraph from "../SectionParagraph";
import SectionHeading from "../SectionHeading";

const FounderIntro = () => {
  return (
    <div className="container mx-auto px-4 lg:px-8 2xl:px-16 my-10 lg:my-14 ">
      <Reveal className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 border border-roti-500 rounded-3xl overflow-hidden">
          {/* founder image */}
          <img
            src={founder.image}
            alt="Founder image"
            className="w-full md:h-full max-md:aspect-[16/9] object-cover"
          />

          {/* founder content */}
          <div className="flex flex-col justify-center p-4 md:p-6 xl:p-8">
            <Reveal>
              <SectionHeading className="mb-0 md:mb-0 max-md:mt-0">
                {founder.name}
              </SectionHeading>
            </Reveal>

            <Reveal>
              <SectionParagraph>{founder.designation}</SectionParagraph>
            </Reveal>

            <Reveal>
              <SectionParagraph>
                Gautam Agarwal, founder of Mansha Interiors, blends creativity
                with precision. With a B.Com and an Interior Design diploma from
                INIFD, he’s spent 13 years crafting spaces that are both stylish
                and inviting.
              </SectionParagraph>
            </Reveal>

            <Reveal>
              <SectionParagraph>
                His client-first approach has shaped Mansha Interiors into a
                name synonymous with innovation, modern aesthetics, and bespoke
                design. His vision ensures every space is not just beautifully
                designed but also deeply personal and functional.
              </SectionParagraph>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default FounderIntro;
