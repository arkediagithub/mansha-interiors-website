import { useEffect } from "react";
import { serviceSteps } from "../data/services";
import MetaTags from "../components/MetaTags";
import PageHeader from "../components/PageHeader";
import ServiceAboutSection from "../components/studio-page/ServiceAboutSection";
import ServiceBeforeAfter from "../components/studio-page/ServiceBeforeAfter";
import SectionGallery from "../components/studio-page/SectionGallery";
import SectionSteps from "../components/SectionSteps";
import CTASection from "../components/CTASection";

const CommercialPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const commercialServiceImages = [
    "https://placehold.co/600",
    "https://placehold.co/600",
    "https://placehold.co/600",
    "https://placehold.co/600",
    "https://placehold.co/600",
  ];

  return (
    <>
      <MetaTags title="Commercial | Mansha Interior" />
      <PageHeader
        image={"https://placehold.co/1080x720"}
        title="Crafting Inspiring Commercial Spaces"
        subtitle="Functional, elegant, and brand-aligned interiors that enhance business success."
      />
      <ServiceAboutSection
        title="Transforming Workspaces for Maximum Impact"
        description="At Mansha Interiors, we create commercial spaces that are both functional and visually striking, ensuring a productive and welcoming environment. Our services include:"
        descriptionContent={[
          "Corporate Office Interiors (Productive & inspiring workspaces)",
          "Retail Store Design (Customer-centric layouts)",
          "Hospitality Spaces (Hotels, Restaurants, Cafés)",
          "Healthcare & Wellness Centers (Clinics, Salons, Spas)",
        ]}
      />
      <ServiceBeforeAfter
        title={"Redefining Business Environments"}
        subtitle={
          "For [Company Name], we designed a contemporary office space that balances comfort, efficiency, and brand identity. The transformation included ergonomic workstations, mood-enhancing lighting, and collaborative zones."
        }
        beforeImage={"https://placehold.co/1080x720"}
        afterImage={"https://placehold.co/1080x820"}
      />
      <SectionGallery
        title={"Our Completed Commercial Projects"}
        images={commercialServiceImages}
      />
      <SectionSteps
        title="Our Design Process is Simple & Seamless"
        steps={serviceSteps}
      />
      <CTASection
        title="Book a Consultation for Your Business Space"
        subtitle="From concept to completion, we craft spaces where your business grow seamlessly."
      />
    </>
  );
};

export default CommercialPage;
