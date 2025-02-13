import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SectionParagraph from "./SectionParagraph";
import SectionWrapper from "./SectionWrapper";
import MasonryGallery from "./MasonryGallery";

const ProjectShowcase = ({ project }) => {
  return (
    <SectionWrapper>
      <Reveal className="w-full">
        <SectionHeading className="text-center">{project?.name}</SectionHeading>
        <SectionParagraph className="text-center mb-6">
          {project?.type}
        </SectionParagraph>
      </Reveal>

      {/* project gallery */}
      {project?.otherImages && (
        <>
          {/* <div className={`grid grid-cols-2 lg:grid-cols-3 gap-4`}>
            {project?.otherImages.map((image, i) => (
              <div key={i} className="">
                <img
                  className={twMerge(
                    "w-full h-36 sm:h-72 lg:h-[400px] rounded-lg object-cover"
                  )}
                  src={image}
                  alt={`Gallery Image ${i + 1}`}
                />
              </div>
            ))}
          </div> */}
          <MasonryGallery images={project?.otherImages} />
        </>
      )}
    </SectionWrapper>
  );
};

export default ProjectShowcase;
