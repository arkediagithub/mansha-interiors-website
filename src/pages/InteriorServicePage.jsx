import { useEffect } from "react";
import { interiorServiceProcess } from "../data/services";
import MetaTags from "../components/MetaTags";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import ServiceAboutSection from "../components/studio-page/ServiceAboutSection";
import SectionGallery from "../components/studio-page/SectionGallery";
import SectionSteps from "../components/SectionSteps";

// InteriorServicePage
const InteriorServicePage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const interiorServiceImages = [
    "https://res.cloudinary.com/dmuqtk9yg/image/upload/v1739252018/REV6_MANOJ_JI_SON_S_BEDROOM_v4_qa2snl.jpg",
    "https://res.cloudinary.com/dmuqtk9yg/image/upload/v1739252035/REV5_MANOJ_JI__MASTER_BEDROOM_V11_ebxfd7.jpg",
    "https://res.cloudinary.com/dmuqtk9yg/image/upload/v1739252034/REV6_MANOJ_JI_SON_S_BEDROOM_view2_gzgnkx.jpg",
    "https://res.cloudinary.com/dmuqtk9yg/image/upload/v1739877459/3_alxfd0.jpg",
    "https://res.cloudinary.com/dmuqtk9yg/image/upload/v1739877459/1_n4pzcg.jpg",
  ];

  return (
    <>
      <MetaTags title="Interior Design | Mansha Interior" />
      <PageHeader
        title="Creating Inspired Interiors"
        subtitle="Where elegance meets functionality—tailored designs that enhance your lifestyle and workspaces."
        // image={"https://placehold.co/1080x720?text=Interior+Design"}
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
