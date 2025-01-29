import SectionHeading from "../SectionHeading";
import SectionParagraph from "../SectionParagraph";
import SectionWrapper from "../SectionWrapper";

const StudioPageIntro = () => {
  return (
    <>
      <SectionWrapper>
        <SectionHeading className="text-center">
          About Mansha Interiors
        </SectionHeading>
        <SectionParagraph className="sm:text-center">
          At Mansha Interiors, we believe in crafting spaces that inspire and
          resonate with individuality. Founded with a passion for design
          excellence, our firm specializes in creating bespoke interiors that
          seamlessly blend functionality with aesthetics.
        </SectionParagraph>
        <SectionParagraph className="sm:text-center">
          Our team of experienced designers and craftsmen is dedicated to
          transforming your vision into reality, ensuring every detail reflects
          your unique personality and style. From residential havens to
          commercial landmarks, Mansha Interiors delivers innovative solutions
          tailored to your needs, combining timeless elegance with modern
          trends.
        </SectionParagraph>
        <SectionParagraph className="sm:text-center">
          With an emphasis on quality, creativity, and client satisfaction,
          Mansha Interiors strives to create spaces that not only meet but
          exceed expectations. Let us help you reimagine your spaces and bring
          your dream designs to life.
        </SectionParagraph>
      </SectionWrapper>
    </>
  );
};

export default StudioPageIntro;
