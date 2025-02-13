import { randomId } from "@mantine/hooks";
import {
  homepage_hero_slide_banner_1,
  homepage_hero_slide_banner_2,
  homepage_hero_slide_banner_3,
} from "../images";
import {
  IconAlarm,
  IconDiamond,
  IconLayout,
  IconUserCheck,
  IconUsers,
  IconZoomIn,
} from "@tabler/icons-react";

export const whyChooseUs = [
  {
    id: randomId(),
    title: "Personalized Design Approach",
    description:
      "We tailor designs to your vision, preferences, and lifestyle for a perfect fit.",
    image: homepage_hero_slide_banner_1,
    icon: IconUserCheck,
  },
  {
    id: randomId(),
    title: "Experienced and Creative Team",
    description:
      "Our skilled team combines expertise and creativity to craft functional, stunning spaces.",
    image: homepage_hero_slide_banner_2,
    icon: IconUsers,
  },
  {
    id: randomId(),
    title: "Quality and Craftsmanship",
    description:
      "Using premium materials and trusted vendors, we ensure durable and beautiful results.",
    image: homepage_hero_slide_banner_3,
    icon: IconDiamond,
  },
  {
    id: randomId(),
    title: "End-to-End Services",
    description:
      "From layouts to furniture and colors, we manage every detail for a seamless experience.",
    image: homepage_hero_slide_banner_1,
    icon: IconLayout,
  },
  {
    id: randomId(),
    title: "Attention to Detail",
    description:
      "We focus on every inch of your space, delivering exceptional designs with precision.",
    image: homepage_hero_slide_banner_2,
    icon: IconZoomIn,
  },
  {
    id: randomId(),
    title: "On-Time Completion",
    description:
      "We respect your time and budget, providing top-notch designs on schedule.",
    image: homepage_hero_slide_banner_3,
    icon: IconAlarm,
  },
];
