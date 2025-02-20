import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";
import SectionParagraph from "../SectionParagraph";
import CustomGallery from "../CustomGallery";

const images = [
  "https://placehold.co/600",
  "https://placehold.co/500",
  "https://placehold.co/700",
  "https://placehold.co/400",
  "https://placehold.co/500",
  "https://placehold.co/600",
  "https://placehold.co/500",
  "https://placehold.co/700",
  "https://placehold.co/400",
  "https://placehold.co/500",
];

const StudioGallery = () => {
  return (
    <SectionWrapper className="mt-10 lg:my-20">
      <SectionHeading className="text-center">
        Inside Our Creative Hub
      </SectionHeading>
      <SectionParagraph className="text-center mb-6 lg:mb-10">
        Step into our thoughtfully designed workspace, where innovation meets
        functionality. From vibrant design studios to collaborative meeting
        areas, every corner is crafted to inspire creativity and productivity.
        Experience the perfect blend of aesthetics and efficiency in our office!
      </SectionParagraph>

      {/* studio gallery */}
      <CustomGallery images={images} />
    </SectionWrapper>
  );
};

export default StudioGallery;
