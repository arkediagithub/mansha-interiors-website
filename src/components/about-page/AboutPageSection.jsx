import { Link } from "react-router-dom";
import SectionWrapper from "../SectionWrapper";
import Reveal from "../Reveal";

const AboutPageSection = ({
  section,
  opposite,
  contact,
  id = "about_page_section",
}) => {
  return (
    <>
      <SectionWrapper id={id}>
        <div className="mx-auto max-w-screen-xl">
          <div
            className={`flex flex-col ${
              opposite ? "md:flex-row-reverse" : "md:flex-row"
            } gap-8 lg:gap-16`}
          >
            <Reveal className="w-full md:w-1/2">
              <img
                src={section.image}
                alt="interior design service image"
                className="h-64 sm:h-96 w-full"
              />
            </Reveal>

            <div
              id="aboutDetails"
              className="flex flex-col justify-center md:w-1/2"
            >
              <div
                data-theme="dark"
                className="w-[70px] h-[70px] flex items-center justify-center rounded-full mb-4 max-md:hidden bg-accent"
              >
                <section.icon stroke={2} size={"40%"} color="white" />
              </div>

              <Reveal>
                <h2 className="text-2xl sm:text-4xl tracking-wider">
                  {section.heading}
                </h2>
              </Reveal>

              <Reveal className="my-2">
                <p className="mt-4 text-gray-600 lg:text-lg">
                  {section.content}
                </p>
              </Reveal>

              {contact && (
                <Link
                  to="/contact"
                  role="button"
                  className="mt-8 btn btn-neutral w-fit md:text-lg"
                >
                  Get in Touch
                </Link>
              )}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default AboutPageSection;
