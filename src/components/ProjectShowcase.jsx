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
      {project?.otherImages && <MasonryGallery images={project?.otherImages} />}
    </SectionWrapper>
  );
};

export default ProjectShowcase;
