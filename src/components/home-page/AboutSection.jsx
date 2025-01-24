import { aboutInfo } from "../../data/about";
import { homepage_hero_slide_banner_1 } from "../../images";
import Reveal from "../Reveal";
import SectionWrapper from "../SectionWrapper";

const AboutSection = () => {
  return (
    <>
      <SectionWrapper id="home_page_about_section" className="md:my-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          <Reveal className="w-full max-md:order-2">
            <img
              src={homepage_hero_slide_banner_1}
              alt="interior design service image"
              className="h-64 sm:h-96 md:h-[500px] w-full max-md:order-last object-cover"
            />
          </Reveal>

          <div id="about_details" className="flex flex-col justify-center">
            <Reveal>
              <p className="text-accent text-xl font-semibold md:font-bold">
                {aboutInfo.title.toUpperCase()}
              </p>
            </Reveal>

            <Reveal>
              <h2 className="text-2xl lg:text-4xl tracking-wider my-3 md:my-6">
                Best Way To Design Your Home, Office, Etc.
              </h2>
            </Reveal>

            {/* <Reveal>
              <p className=" text-gray-600 lg:text-lg text-justify">
                Welcome to Mansha Interiors, where every space tells a story.
                Our team of passionate designers specializes in crafting
                beautiful, functional interiors that reflect your unique style
                and personality. From residential to commercial projects, we
                bring creativity and expertise to transform your vision into
                reality.
              </p>
            </Reveal>

            <Reveal>
              <p className=" mt-2 md:mt-4 text-gray-600 lg:text-lg text-justify">
                With years of experience, we offer services like space planning,
                interior styling, 3D visualization, and project management.
                Whether you&apos;re revamping your home or designing a stunning
                office, we&apos;re here to bring your dream spaces to life.
              </p>
            </Reveal>

            <Reveal>
              <p className=" mt-2 md:mt-4 text-gray-600 lg:text-lg text-justify">
                Let us help you create a space that tells your story. Contact us
                today to start your design journey with Mansha Interiors.
              </p>
            </Reveal> */}

            <Reveal>
              <p className="text-gray-600 lg:text-lg text-justify">
                Mansha Interiors is a design firm focused on creating bespoke
                interiors that blend functionality with aesthetics. Their
                experienced team specializes in transforming both residential
                and commercial spaces, ensuring each project reflects the
                client&apos;s unique style. Committed to quality, creativity,
                and client satisfaction, Mansha Interiors delivers innovative,
                elegant, and modern design solutions that exceed expectations.
              </p>
            </Reveal>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default AboutSection;
