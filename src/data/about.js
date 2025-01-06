import { randomId } from "@mantine/hooks";

export const aboutInfo = {
  title: "About Us",
  subtitle: "Interior Design",
  description: [
    "Welcome to Mansha Interiors, where every space tells a story. Our team of passionate designers specializes in crafting beautiful, functional interiors that reflect your unique style and personality. From residential to commercial projects, we bring creativity and expertise to transform your vision into reality.",
    "With years of experience, we offer services like space planning, interior styling, 3D visualization, and project management. Whether you're revamping your home or designing a stunning office, we're here to bring your dream spaces to life.",
    "Let us help you create a space that tells your story. Contact us today to start your design journey with Mansha Interiors.",
  ],
  faqs: [
    {
      id: randomId(),
      question: "What services do you offer?",
      answer:
        "We offer a range of services including residential and commercial design, interior styling, space planning, furniture design, renovation services, lighting design, color consulting, and architechture design.",
    },
    {
      id: randomId(),
      question: "How do I start a project with your team?",
      answer:
        "You can start by scheduling an initial consultation through our website or by contacting us directly. During this consultation, we will discuss your vision, preferences, and project requirements.",
    },
    {
      id: randomId(),
      question: "What should I expect during the initial consultation?",
      answer:
        "During the initial consultation, we will visit your place to understand your space, discuss your design goals, and gather information about your style preferences and budget.",
    },
    {
      id: randomId(),
      question: "How long does a typical project take?",
      answer:
        "The duration of a project varies based on its scope, location and complexity. We will provide a detailed timeline during the design proposal stage, ensuring you have a clear understanding of the project schedule.",
    },
    {
      id: randomId(),
      question: "Can you work within my budget?",
      answer:
        "Yes, we strive to create designs that meet your vision while staying within your budget. We will discuss your budget during the initial consultation and plan accordingly.",
    },
  ],
};
