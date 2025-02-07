import { useEffect } from "react";
import MetaTags from "../components/MetaTags";
import PageHeader from "../components/PageHeader";
import CTASection from "../components/CTASection";
import ServiceAboutSection from "../components/studio-page/ServiceAboutSection";
import ServiceBeforeAfter from "../components/studio-page/ServiceBeforeAfter";
import SectionGallery from "../components/studio-page/SectionGallery";
import { randomId } from "@mantine/hooks";
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

  const residentialServiceSteps = [
    {
      id: randomId(),
      title: "Initial Consultation",
      description:
        "We visit your place to understand your vision, style, and project needs.",
    },
    {
      id: randomId(),
      title: "Design Proposal",
      description:
        "We present a design proposal with sketches, mood boards, and layouts.",
    },
    {
      id: randomId(),
      title: "Design Development",
      description:
        "We refine the design, selecting materials and providing 3D renderings.",
    },
    {
      id: randomId(),
      title: "Start the Project",
      description:
        "We manage the build and installation to bring the design to life.",
    },
    {
      id: randomId(),
      title: "Final Walkthrough",
      description:
        "We review the project with you to ensure it meets your expectations.",
    },
    {
      id: randomId(),
      title: "Hand Over",
      description:
        "We officially hand over the project and offer post-project support.",
    },
  ];

  return (
    <>
      <MetaTags title="Residential | Mansha Interior" />
      <PageHeader
        image={"https://placehold.co/1080x820"}
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
          "We redesigned a contemporary apartment in [City Name], optimizing space, adding warm textures, and incorporating smart lighting to enhance ambiance."
        }
        beforeImage={"https://placehold.co/1080x720"}
        afterImage={"https://placehold.co/1080x1080"}
      />
      <SectionGallery
        title={"Our Completed Residential Projects"}
        images={residentialServiceImages}
      />
      <SectionSteps
        title="Our Design Process: Simple & Seamless"
        steps={residentialServiceSteps}
      />
      <CTASection
        title="Elevate Your Living Experience"
        subtitle="From concept to completion, we craft spaces you'll love to live in."
      />
    </>
  );
};

export default ResidentialPage;
