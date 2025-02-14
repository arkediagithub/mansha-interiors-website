import { randomId } from "@mantine/hooks";

export const serviceLinks = [
  { id: randomId(), to: "/services/residential", label: "Residential Design" },
  { id: randomId(), to: "/services/commercial", label: "Commercial Design" },
  { id: randomId(), to: "/contact", label: "Landscape Design" },
  {
    id: randomId(),
    to: "/services/architecture",
    label: "Architecture Design",
  },
  { id: randomId(), to: "/contact", label: "Renovation and Remodeling" },
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
    to: "https://www.instagram.com/manshainteriors7/",
    label: "Instagram",
  },
];
