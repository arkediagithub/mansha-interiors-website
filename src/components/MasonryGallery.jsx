import SectionWrapper from "./SectionWrapper";

export default function MasonryGallery({ images }) {
  return (
    <SectionWrapper>
      <div className="masonry-sm md:masonry-md">
        {images.map((image, i) => (
          <div key={i} className="py-2 break-inside">
            <img
              src={image}
              alt={`Gallery Image ${i + 1}`}
              className="w-full h-full rounded-lg"
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
