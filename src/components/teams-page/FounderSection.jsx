import { Link } from "react-router-dom";
import { founder } from "../../data/teamMembers";
import Reveal from "../Reveal";
import SectionWrapper from "../SectionWrapper";

export default function FounderSection() {
  return (
    <>
      <SectionWrapper id="home_page_about_section" className="md:my-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          <Reveal className="w-full order-2">
            <img
              src={founder.image}
              alt="interior design service image"
              className="w-full md:h-full max-md:aspect-square max-md:order-last object-cover image_hover_bw_to_color"
            />
          </Reveal>

          <div id="about_details" className="flex flex-col justify-center">
            <Reveal>
              <h2 className="text-2xl sm:text-4xl tracking-wider">
                {founder.name}
              </h2>
            </Reveal>

            <Reveal>
              <p className="tracking-wider text-lg my-2 md:my-4">
                {founder.designation}
              </p>
            </Reveal>

            <Reveal>
              <p className="md:text-lg text-gray-600 text-justify">
                Gautam Agarwal is the Founder and Principle Designer at Mansha
                interiors. He is a B.Com graduate along with a diploma from
                INIFD in Interior Design. He started this firm 13 years ago with
                a zeal for designing spaces.
              </p>
            </Reveal>

            <Reveal>
              <p className="mt-2 md:mt-4 md:text-lg text-gray-600 text-justify">
                Gautam&apos;s noble aim is create joy with his designs. He is
                stickler for details and is dedicated in making every project
                unique. His approach towards design is driven by an in- depth
                understanding of the users requirements, creative space planning
                and a careful study of volumes and forms.
              </p>
            </Reveal>

            <Link
              to="/contact"
              role="button"
              className="mt-8 btn btn-outline md:text-lg font-unbounded-variable w-fit font-normal"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
