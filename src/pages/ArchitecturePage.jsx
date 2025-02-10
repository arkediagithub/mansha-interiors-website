import { useEffect } from "react";
import { architecturalServiceProcess } from "../data/services";
import MetaTags from "../components/MetaTags";
import PageHeader from "../components/PageHeader";
import ServiceAboutSection from "../components/studio-page/ServiceAboutSection";
import ServiceBeforeAfter from "../components/studio-page/ServiceBeforeAfter";
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

  const architectureServiceImages = [
    "https://placehold.co/600",
    "https://placehold.co/600",
    "https://placehold.co/600",
    "https://placehold.co/600",
    "https://placehold.co/600",
  ];

  return (
    <>
      <MetaTags title="Architecture | Mansha Interior" />
      <PageHeader
        image={"https://placehold.co/1080x720"}
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
      />
      <ServiceBeforeAfter
        title={"From Vision to Reality"}
        subtitle={
          "For [Client Name], we designed an ultra-modern residential villa integrating open spaces, natural lighting, and eco-friendly materials. The result? A seamless blend of luxury and sustainability."
        }
        beforeImage={"https://placehold.co/1080x720"}
        afterImage={"https://placehold.co/1080x820"}
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
