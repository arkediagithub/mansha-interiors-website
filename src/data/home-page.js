import { randomId } from "@mantine/hooks";
import {
  IconAlarm,
  IconDiamond,
  IconLayout,
  IconUserCheck,
  IconUsers,
  IconZoomIn,
} from "@tabler/icons-react";

export const heroSlideShowImages = [
  "https://res.cloudinary.com/dmuqtk9yg/image/upload/v1740205753/DSC07407_11zon_dsyhvg.jpg",
  "https://res.cloudinary.com/dmuqtk9yg/image/upload/v1740205669/DSC07403_11zon_vkj6xc.jpg",
  "https://res.cloudinary.com/dmuqtk9yg/image/upload/v1740205684/DSC07442_11zon_blbpdp.jpg",
];

export const mainServices = [
  {
    id: 1,
    title: "Interior Design",
    description:
      "We craft inviting and functional living spaces tailored to your style, from modern minimalism to classic elegance.",
    image:
      "https://res.cloudinary.com/dmuqtk9yg/image/upload/v1739262671/homepage_hero_slide_banner_1_u9rwjh.png",
    to: "/services/interior",
  },
  {
    id: 2,
    title: "Architecture Design",
    description:
      "Our visionary designs blend form, function, and sustainability, creating timeless structures that inspire.",
    image:
      "https://images.unsplash.com/photo-1721294104781-4f00f6ffef99?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    to: "/services/architecture",
  },
  {
    id: 3,
    title: "Landscape Design",
    description:
      "We design vibrant landscapes that enhance spaces, promoting harmony between nature and architecture.",
    image:
      "https://images.unsplash.com/photo-1705909772719-8d3bf32552be?q=80&w=1718&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    to: "/services/landscape",
  },
];

export const otherServices = [
  {
    title: "Office Interior Design",
    description:
      "Crafting workspaces that inspire productivity and innovation.",
    image:
      "https://res.cloudinary.com/dmuqtk9yg/image/upload/w_400,h_300/v1739877457/Camera.001_caqmsd.jpg",
  },
  {
    title: "Showroom Interior Design",
    description:
      "Designing captivating spaces that enhance brand presence and customer experience.",
    image:
      "https://res.cloudinary.com/dmuqtk9yg/image/upload/w_400,h_300/v1739941998/WhatsApp_Image_2025-02-17_at_1.29.25_PM_yye7ti.jpg",
  },
  {
    title: "Residence Interior Design",
    description:
      "Creating healing environments with comfort, efficiency, and care at the core.",
    image:
      "https://res.cloudinary.com/dmuqtk9yg/image/upload/w_400,h_300/v1739252035/REV5_MANOJ_JI__MASTER_BEDROOM_V11_ebxfd7.jpg",
  },
  {
    title: "Hospitality Interior Design",
    description:
      "Elevating guest experiences with elegant and immersive spaces.",
    image:
      "https://res.cloudinary.com/dmuqtk9yg/image/upload/w_400,h_300/v1739877467/Camera.015_1_zkrrst.jpg",
  },
];

export const whyChooseUs = [
  {
    id: randomId(),
    title: "Personalized Design Approach",
    description:
      "We tailor designs to your vision, preferences, and lifestyle for a perfect fit.",
    icon: IconUserCheck,
  },
  {
    id: randomId(),
    title: "Experienced and Creative Team",
    description:
      "Our skilled team combines expertise and creativity to craft functional, stunning spaces.",
    icon: IconUsers,
  },
  {
    id: randomId(),
    title: "Quality and Craftsmanship",
    description:
      "Using premium materials and trusted vendors, we ensure durable and beautiful results.",
    icon: IconDiamond,
  },
  {
    id: randomId(),
    title: "End-to-End Services",
    description:
      "From layouts to furniture and colors, we manage every detail for a seamless experience.",
    icon: IconLayout,
  },
  {
    id: randomId(),
    title: "Attention to Detail",
    description:
      "We focus on every inch of your space, delivering exceptional designs with precision.",
    icon: IconZoomIn,
  },
  {
    id: randomId(),
    title: "On-Time Completion",
    description:
      "We respect your time and budget, providing top-notch designs on schedule.",
    icon: IconAlarm,
  },
];
