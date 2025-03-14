import { useEffect } from "react";
import {
  landscapeServiceImages,
  landscapeServiceProcess,
} from "../data/services-page";
import MetaTags from "../components/MetaTags";
import PageHeader from "../components/PageHeader";
import ServiceAboutSection from "../components/studio-page/ServiceAboutSection";
import SectionGallery from "../components/studio-page/SectionGallery";
import SectionSteps from "../components/SectionSteps";
import CTASection from "../components/CTASection";

const LandscapeServicePage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <MetaTags
        title="Landscape Design Services - Mansha Interiors"
        description="Elevate your outdoor spaces with our landscape design services. Stunning, sustainable, and functional landscaping solutions."
      />
      <PageHeader
        image={"https://placehold.co/1080x720"}
        title="Designing Breathtaking Outdoor Landscapes"
        subtitle="Harmonizing nature and architecture to create stunning, functional outdoor spaces."
      />
      <ServiceAboutSection
        title="Elevating Outdoor Spaces with Thoughtful Design"
        description="At Mansha Interiors, we craft landscapes that balance beauty, sustainability, and functionality. Whether for homes, businesses, or urban spaces, our designs enhance surroundings and enrich experiences. Our services include:"
        descriptionContent={[
          "Residential Landscaping (Beautiful gardens, patios, and outdoor living spaces.)",
          "Commercial Landscaping (Corporate gardens, green office spaces, and entryway designs.)",
          "Hardscaping & Softscaping (Paved pathways, retaining walls, fountains, and plant selections.)",
          "Sustainable & Eco-friendly Designs (Drought-resistant plants, rainwater harvesting, and green roofs.)",
        ]}
      />
      <SectionGallery
        title={"Our Portfolio of Lush Landscape Creations"}
        images={landscapeServiceImages}
      />
      <SectionSteps
        title="Our Streamlined Landscape Design Process"
        steps={landscapeServiceProcess}
      />
      <CTASection
        title="Turn Your Outdoor Vision into Reality"
        subtitle="Let's create a landscape that blends natural beauty with purposeful design."
        buttonText="Schedule a Consultation"
      />
    </>
  );
};

export default LandscapeServicePage;
