import SectionHeading from "../SectionHeading";
import SectionParagraph from "../SectionParagraph";
import SectionWrapper from "../SectionWrapper";

const AboutPageIntro = () => {
  return (
    <>
      <SectionWrapper>
        <SectionHeading className="text-center">
          About Mansha Interiors
        </SectionHeading>
        <SectionParagraph className="sm:text-center max-w-6xl mx-auto">
          At Mansha Interiors, we believe in crafting spaces that inspire and
          resonate with individuality. Founded with a passion for design
          excellence, our firm specializes in creating bespoke interiors that
          seamlessly blend functionality with aesthetics, ensuring each space is
          both beautiful and practical.
        </SectionParagraph>
        <SectionParagraph className="sm:text-center max-w-6xl mx-auto">
          Our team of experienced designers and skilled craftsmen is dedicated
          to transforming your vision into reality, ensuring every detail
          reflects your unique personality, style, and aspirations. From
          luxurious residential havens to dynamic commercial landmarks, Mansha
          Interiors delivers innovative, tailor-made solutions that combine
          timeless elegance with contemporary trends.
        </SectionParagraph>
        <SectionParagraph className="sm:text-center max-w-6xl mx-auto">
          With an unwavering emphasis on quality, creativity, and client
          satisfaction, Mansha Interiors strives to create spaces that not only
          meet but exceed expectations. Whether you&apos;re looking to refresh a
          single room or design an entire property, let us help you reimagine
          your spaces and bring your dream designs to life with sophistication
          and finesse.
        </SectionParagraph>
      </SectionWrapper>
    </>
  );
};

export default AboutPageIntro;
