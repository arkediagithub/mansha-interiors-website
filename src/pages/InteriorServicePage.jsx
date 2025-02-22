import { useEffect } from "react";
import {
  interiorServiceImages,
  interiorServiceProcess,
} from "../data/services-page";
import MetaTags from "../components/MetaTags";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import ServiceAboutSection from "../components/studio-page/ServiceAboutSection";
import SectionGallery from "../components/studio-page/SectionGallery";
import SectionSteps from "../components/SectionSteps";

const InteriorServicePage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <MetaTags
        title="Interior Design Services - Mansha Interiors"
        description="Transform your space with our expert interior design services. Elegant, functional, and timeless designs for your dream home."
      />
      <PageHeader
        title="Creating Inspired Interiors"
        subtitle="Where elegance meets functionality—tailored designs that enhance your lifestyle and workspaces."
        image={
          "https://res.cloudinary.com/dmuqtk9yg/image/upload/v1739186883/Camera.003_vtqimk.jpg"
        }
        className="h-[35vh] sm:h-[60vh] lg:h-[80vh]"
      />
      <ServiceAboutSection
        title="Transforming Interiors with Thoughtful Design"
        description="At Mansha Interiors, we specialize in crafting sophisticated, functional, and brand-aligned interiors. Whether residential or commercial, our designs elevate spaces, blending comfort with aesthetics. Our expertise includes:"
        descriptionContent={[
          "Space Planning & Layout Optimization",
          "Furniture Selection & Customization",
          "Lighting & Décor Enhancements",
          "Smart Home Integration",
        ]}
        image={
          "https://res.cloudinary.com/dmuqtk9yg/image/upload/v1739193999/V03_dscwzf.jpg"
        }
      />
      <SectionGallery
        title={"Our Portfolio of Stunning Interior Designs"}
        images={interiorServiceImages}
      />
      <SectionSteps
        title="Our Design Process is Simple & Seamless"
        steps={interiorServiceProcess}
      />
      <CTASection
        title="Let's Bring Your Dream Space to Life"
        subtitle="From concept to completion, we design interiors that inspire and uplift."
      />
    </>
  );
};

export default InteriorServicePage;
