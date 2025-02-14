import { Link } from "react-router-dom";
import { IconArrowUpRight } from "@tabler/icons-react";
import { homepage_hero_slide_banner_1 } from "../../images";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import SectionParagraph from "../SectionParagraph";
import SectionWrapper from "../SectionWrapper";

const AboutSection = () => {
  return (
    <>
      <SectionWrapper id="home_page_about_section" className="md:my-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          <Reveal className="w-full max-md:order-2">
            <div className="relative">
              <img
                src={homepage_hero_slide_banner_1}
                alt="interior design service image"
                className="h-64 sm:h-96 md:h-[450px] w-full max-md:order-last object-fill rounded-2xl md:rounded-br-[200px]"
              />
              <Link
                to={"/about"}
                role="button"
                className="absolute btn-circle border-[3px] border-roti-400 bottom-0 right-0 grid place-items-center w-24 h-24 group max-md:hidden"
              >
                <IconArrowUpRight
                  stroke={2}
                  size={"50%"}
                  className="text-roti-400 group-hover:rotate-45 duration-500"
                />
              </Link>
            </div>
          </Reveal>

          <div id="about_details" className="flex flex-col justify-center">
            <Reveal>
              <p className="text-roti-400 text-xl font-semibold md:font-bold max-md:hidden">
                Who We Are
              </p>
            </Reveal>

            <Reveal>
              <SectionHeading>
                Live in Style, Designed with Intention
              </SectionHeading>
            </Reveal>

            <Reveal>
              <SectionParagraph>
                Every space has a story waiting to be told. The soft glow of a
                lamp in your reading nook, the timeless charm of a handcrafted
                dining table, the way sunlight dances on your living room
                walls—each detail we design is a reflection of you.
              </SectionParagraph>
            </Reveal>
            <Reveal>
              <SectionParagraph>
                At Mansha Interiors, we don&apos;t just design spaces; we craft
                experiences. Whether it&apos;s a cozy home that whispers comfort
                or a bold workspace that fuels ambition, we blend creativity,
                functionality, and modern aesthetics to bring your vision to
                life. Based in Siliguri, we turn empty rooms into vibrant
                expressions of style and purpose, ensuring every corner feels
                like yours.
              </SectionParagraph>
            </Reveal>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default AboutSection;
