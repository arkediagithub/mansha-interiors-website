import SectionWrapper from "../SectionWrapper";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import SectionParagraph from "../SectionParagraph";
import CareerPageForm from "./CareerPageForm";

const CareerPageSection = ({
  section,
  rowReverse,
  id = "career_page_section",
}) => {
  return (
    <>
      <SectionWrapper id={id}>
        <div className="mx-auto max-w-screen-xl">
          <div
            className={`flex flex-col ${
              rowReverse ? "md:flex-row-reverse" : "md:flex-row"
            } gap-8 lg:gap-16`}
          >
            <Reveal className="w-full md:w-1/2 rounded-2xl">
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
              <Reveal>
                <div className="w-[56px] h-[56px] flex items-center justify-center rounded-full mb-4 max-md:hidden bg-white border-2 border-accent">
                  <section.icon
                    stroke={2}
                    size={"50%"}
                    className="text-accent"
                  />
                </div>
              </Reveal>

              <Reveal>
                <SectionHeading className="my-0 md:my-0">
                  {section.heading}
                </SectionHeading>
              </Reveal>

              <Reveal>
                <SectionParagraph className="mt-2 mb-4">
                  {section.content}
                </SectionParagraph>
              </Reveal>

              <button
                className="btn btn-outline w-full md:w-fit text-base md:text-lg"
                onClick={() =>
                  document.getElementById("career_page_form_modal").showModal()
                }
              >
                Apply Now
              </button>

              <dialog
                id="career_page_form_modal"
                className="modal modal-bottom sm:modal-middle"
              >
                <CareerPageForm />
              </dialog>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default CareerPageSection;
