import { randomId } from "@mantine/hooks";

export const serviceLinks = [
  { id: randomId(), to: "/services/interior", label: "Interior Design" },
  { id: randomId(), to: "/services/landscape", label: "Landscape Design" },
  {
    id: randomId(),
    to: "/services/architecture",
    label: "Architecture Design",
  },
];

export const quickLinks = [
  { id: randomId(), to: "/about", label: "About Us" },
  { id: randomId(), to: "/gallery", label: "Design Gallery" },
  { id: randomId(), to: "/careers", label: "Careers" },
  { id: randomId(), to: "/contact", label: "Contact Us" },
  { id: randomId(), to: "/faqs", label: "FAQs" },
];

export const socialMediaLinks = [
  {
    id: randomId(),
    to: "https://www.facebook.com/manshainteriors.siliguri",
    label: "Facebook",
  },
  {
    id: randomId(),
    to: "https://www.instagram.com/officialmanshainteriors.in/",
    label: "Instagram",
  },
];
