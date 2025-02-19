import { randomId } from "@mantine/hooks";
import {
  IconBriefcase,
  IconBuildingSkyscraper,
  IconChecklist,
  IconColorSwatch,
  IconCrane,
  IconFileText,
  IconHammer,
  IconHeartHandshake,
  IconHomeSearch,
  IconLayersIntersect,
  IconLifebuoy,
  IconPlant,
  IconRuler,
  IconTools,
  IconUsers,
} from "@tabler/icons-react";

export const servicesTabs = [
  {
    id: randomId(),
    title: "Interior Design",
    description:
      "Transform your living space into a sanctuary of comfort and style. Our designs reflect your personality, making your house truly feel like home.",
  },
  {
    id: randomId(),
    title: "Architecture Design",
    description:
      "Innovative architectural solutions that blend aesthetics and functionality. We design buildings that are both beautiful and practical.",
  },
  {
    id: randomId(),
    title: "Landscape Design",
    description:
      "Create a productive and inspiring work environment. We design offices that boost efficiency and reflect your brand's identity.",
  },
];

export const servicesDetails = [
  {
    id: randomId(),
    tabNumber: 1,
    title: "Interior Design",
    description:
      "Your home should be a reflection of your lifestyle and personality. We specialize in designing warm, inviting, and functional living spaces that perfectly balance aesthetics and comfort. From modern minimalism to classic elegance, our expert designers tailor every detail to your taste. Whether it's a cozy bedroom, a stylish living area, or a functional kitchen, we ensure every corner of your home feels truly yours.",
    imageSource:
      "https://res.cloudinary.com/dmuqtk9yg/image/upload/v1739262671/homepage_hero_slide_banner_1_u9rwjh.png",
  },
  {
    id: randomId(),
    tabNumber: 2,
    title: "Architecture Design",
    description:
      "We bring visionary architectural designs to life, combining form, function, and innovation. Our approach focuses on creating sustainable, efficient, and aesthetically striking structures that stand the test of time. Whether it’s a modern urban home, a commercial building, or a large-scale project, our designs seamlessly integrate with the environment while ensuring practicality and elegance.",
    imageSource:
      "https://images.unsplash.com/photo-1721294104781-4f00f6ffef99?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: randomId(),
    tabNumber: 3,
    title: "Landscape Design",
    description:
      "A well-designed workspace enhances productivity and leaves a lasting impression. We create office interiors that are not only visually appealing but also strategically designed to improve workflow and efficiency. From ergonomic workstations to collaborative meeting spaces, our commercial interiors reflect your brand’s identity while providing a motivating and functional environment for employees and clients alike.",
    imageSource:
      "https://images.unsplash.com/photo-1705909772719-8d3bf32552be?q=80&w=1718&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const serviceSteps = [
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

export const interiorServiceProcess = [
  {
    id: randomId(),
    title: "Initial Consultation",
    description:
      "We visit your place to understand your vision, style, and project needs.",
    icon: IconHomeSearch,
  },
  {
    id: randomId(),
    title: "Design Proposal",
    description:
      "We present a design proposal with sketches, mood boards, and layouts.",
    icon: IconFileText,
  },
  {
    id: randomId(),
    title: "Design Development",
    description:
      "We refine the design, selecting materials and providing 3D renderings.",
    icon: IconRuler,
  },
  {
    id: randomId(),
    title: "Start the Project",
    description:
      "We manage the build and installation to bring the design to life.",
    icon: IconTools,
  },
  {
    id: randomId(),
    title: "Final Walkthrough",
    description:
      "We review the project with you to ensure it meets your expectations.",
    icon: IconChecklist,
  },
  {
    id: randomId(),
    title: "Hand Over",
    description:
      "We officially hand over the project and offer post-project support.",
    icon: IconHeartHandshake,
  },
];

export const landscapeServiceProcess = [
  {
    id: randomId(),
    title: "Initial Consultation",
    description: "Understanding your vision, space, and environmental needs.",
    icon: IconBriefcase,
  },
  {
    id: randomId(),
    title: "Concept & Design",
    description: "Creating 3D visualizations and detailed landscape plans.",
    icon: IconLayersIntersect,
  },
  {
    id: randomId(),
    title: "Material & Plant Selection",
    description:
      "Choosing sustainable and high-quality materials, plants, and outdoor features.",
    icon: IconPlant,
  },
  {
    id: randomId(),
    title: "Project Execution",
    description:
      "Implementing the design with expert craftsmanship and precision.",
    icon: IconHammer,
  },
  {
    id: randomId(),
    title: "Final Walkthrough",
    description: "Ensuring every detail aligns with your expectations.",
    icon: IconChecklist,
  },
  {
    id: randomId(),
    title: "Post-Project Support",
    description:
      "Providing maintenance guidance, upgrades, and seasonal care tips.",
    icon: IconLifebuoy,
  },
];

export const architecturalServiceProcess = [
  {
    id: randomId(),
    title: "Initial Consultation",
    description: "Understanding the client’s vision, needs, and budget.",
    icon: IconUsers,
  },
  {
    id: randomId(),
    title: "Concept & Blueprinting",
    description: "Crafting sketches, floor plans, and 3D models.",
    icon: IconLayersIntersect,
  },
  {
    id: randomId(),
    title: "Structural Engineering",
    description: "Ensuring safety, stability, and compliance with regulations.",
    icon: IconBuildingSkyscraper,
  },
  {
    id: randomId(),
    title: "Material & Design Finalization",
    description: "Selecting sustainable, durable, and aesthetic materials.",
    icon: IconColorSwatch,
  },
  {
    id: randomId(),
    title: "Construction & Execution",
    description: "Overseeing on-site implementation and project progress.",
    icon: IconCrane,
  },
  {
    id: randomId(),
    title: "Final Inspection & Handover",
    description: "Ensuring flawless execution and client satisfaction.",
    icon: IconChecklist,
  },
];
