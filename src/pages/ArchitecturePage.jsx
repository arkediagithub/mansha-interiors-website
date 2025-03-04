import { useEffect } from "react";
import {
  architecturalServiceProcess,
  architectureServiceImages,
} from "../data/services-page";
import MetaTags from "../components/MetaTags";
import PageHeader from "../components/PageHeader";
import ServiceAboutSection from "../components/studio-page/ServiceAboutSection";
import SectionGallery from "../components/studio-page/SectionGallery";
import SectionSteps from "../components/SectionSteps";
import CTASection from "../components/CTASection";

const ArchitecturePage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <MetaTags title="Architecture Services - Mansha Interiors" description="Expert architectural solutions for residential and commercial spaces. Innovative designs tailored to your vision and lifestyle."/>
      <PageHeader
        image={
          "https://res.cloudinary.com/dmuqtk9yg/image/upload/v1739877456/WhatsApp_Image_2025-02-15_at_1.29.12_PM_ou0fmo.jpg"
        }
        title="Designing Tomorrow, Today"
        subtitle="Innovative and sustainable architectural solutions for timeless spaces."
      />
      <ServiceAboutSection
        title="Architectural Expertise That Shapes the Future"
        description="At Mansha Interiors, we specialize in architectural design and planning, ensuring that every structure we create is not only visually stunning but also functional and sustainable. Our services include:"
        descriptionContent={[
          "Concept & Schematic Design (Blueprints, 3D Visualizations)",
          "Structural Planning & Engineering (Safe, Efficient, and Compliant)",
          "Sustainable & Green Architecture (Eco-Friendly & Energy-Efficient Designs)",
          "Urban & Landscape Architecture (Outdoor Spaces & City Planning)",
        ]}
        image={
          "https://res.cloudinary.com/dmuqtk9yg/image/upload/v1739877456/WhatsApp_Image_2025-02-15_at_1.29.07_PM_yaf4zs.jpg"
        }
      />
      <SectionGallery
        title={"Our Completed Architectural Projects"}
        images={architectureServiceImages}
      />
      <SectionSteps
        title="A Streamlined Architectural Process"
        steps={architecturalServiceProcess}
      />
      <CTASection
        title="Build Your Dream Space with Experts"
        subtitle="Let’s create architectural masterpieces that stand the test of time. Consult with our experts today!"
      />
    </>
  );
};

export default ArchitecturePage;
