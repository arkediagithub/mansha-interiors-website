import { useEffect } from "react";
import { residentialServiceProcess } from "../data/services";
import MetaTags from "../components/MetaTags";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import ServiceAboutSection from "../components/studio-page/ServiceAboutSection";
import ServiceBeforeAfter from "../components/studio-page/ServiceBeforeAfter";
import SectionGallery from "../components/studio-page/SectionGallery";
import SectionSteps from "../components/SectionSteps";

const ResidentialPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const residentialServiceImages = [
    "https://placehold.co/600",
    "https://placehold.co/600",
    "https://placehold.co/600",
    "https://placehold.co/600",
    "https://placehold.co/600",
  ];

  return (
    <>
      <MetaTags title="Residential | Mansha Interior" />
      <PageHeader
        image={"https://placehold.co/1080x720"}
        title="Elevate Your Home with Bespoke Interior Design"
        subtitle="Tailored designs that blend elegance, functionality, and comfort to transform your living spaces."
      />
      <ServiceAboutSection
        title="Customized Residential Interior Design Solutions"
        description="At Mansha Interiors, we craft personalized interior spaces that reflect your style and enhance your everyday living. Our services include:"
        descriptionContent={[
          "Space Planning & Layout Optimization",
          "Furniture Selection & Customization",
          "Lighting & Décor Enhancements",
          "Smart Home Integration",
        ]}
      />
      <ServiceBeforeAfter
        title={"Transforming Dreams into Reality"}
        subtitle={
          "We redesigned a contemporary apartment in Siliguri, optimizing space, adding warm textures, and incorporating smart lighting to enhance ambiance."
        }
        beforeImage={"https://placehold.co/1080x720"}
        afterImage={"https://placehold.co/1080x820"}
      />
      <SectionGallery
        title={"Our Completed Residential Projects"}
        images={residentialServiceImages}
      />
      <SectionSteps
        title="Our Design Process is Simple & Seamless"
        steps={residentialServiceProcess}
      />
      <CTASection
        title="Elevate Your Living Experience"
        subtitle="From concept to completion, we craft spaces you'll love to live in."
      />
    </>
  );
};

export default ResidentialPage;
