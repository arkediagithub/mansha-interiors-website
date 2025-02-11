import SectionWrapper from "./SectionWrapper";

export default function MasonryGallery({ images }) {
  return (
    <SectionWrapper>
      <div className="masonry-sm md:masonry-md">
        {images.map((image, index) => (
          <div key={index} className="py-2 break-inside">
            <img src={image} alt="" className="w-full h-full rounded-lg " />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
