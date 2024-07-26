import { Link } from "react-router-dom";
import ImageReveal from "../ImageReveal";
import TextReveal from "../TextReveal";

const AboutPageSection = ({ section, opposite, contact }) => {
  return (
    <>
      <section
        id="aboutSection"
        className=" px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12"
      >
        <div className="mx-auto max-w-screen-xl">
          <div
            className={`flex flex-col ${
              opposite ? "md:flex-row-reverse" : "md:flex-row"
            } gap-8 lg:gap-16`}
          >
            <ImageReveal
              src={section.image}
              alt="interior design service image"
              classNames="h-64 sm:h-96 md:w-1/2"
            />

            <div
              id="aboutDetails"
              className="flex flex-col justify-center md:w-1/2"
            >
              <TextReveal>
                <div
                  data-theme="dark"
                  className="w-[70px] h-[70px] flex items-center justify-center rounded-full mb-4 max-md:hidden"
                >
                  <section.icon stroke={2} size={"40%"} color="white" />
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-dm-serif-display tracking-wider">
                  {section.heading}
                </h2>

                <p className="mt-4 text-gray-600 lg:text-lg">
                  {section.content}
                </p>

                {contact && (
                  <Link
                    to="/contact"
                    role="button"
                    className="mt-8 btn btn-neutral md:text-lg"
                  >
                    Get in Touch
                  </Link>
                )}
              </TextReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPageSection;
