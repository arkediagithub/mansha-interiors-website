import { randomId } from "@mantine/hooks";
import {
  IconHome,
  IconTargetArrow,
  IconHeartHandshake,
  IconMail,
} from "@tabler/icons-react";

export const aboutUsContent = {
  title: "About Us",
  subtitle: "Creating Timeless and Elegant Interiors",
  sections: {
    welcome: {
      heading: "Welcome to Mansha Interiors",
      content:
        "At Mansha Interiors, we believe that every space has a story to tell. Our team of passionate and creative designers is dedicated to transforming your vision into reality, crafting beautiful and functional interiors that reflect your unique style and personality.",
      image:
        "https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: IconHome,
    },
    mission: {
      heading: "Our Mission",
      content:
        "Our mission is to create timeless and elegant designs that not only look beautiful but also enhance your quality of life. We pride ourselves on our collaborative approach, working closely with our clients to understand their needs, preferences, and budget.",
      image:
        "https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: IconTargetArrow,
    },
    commitment: {
      heading: "Our Commitment",
      content:
        "At Mansha Interiors, excellence is our standard. From the initial consultation to the final installation, our attention to detail, innovative solutions, and dedication to customer satisfaction set us apart in the world of interior design.",
      image:
        "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg",
      icon: IconHeartHandshake,
    },
    contact: {
      heading: "Contact Us",
      content:
        "Let us help you create a space that tells your story. Contact us today to start your design journey with Mansha Interiors.",
      image:
        "https://images.pexels.com/photos/1129413/pexels-photo-1129413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: IconMail,
    },
  },
  faqs: [
    {
      id: randomId(),
      question: "What services do you offer?",
      answer:
        "We offer a range of services including residential and commercial design, interior styling, space planning, furniture design, renovation services, lighting design, color consulting, and architecture design.",
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
        "The duration of a project varies based on its scope, location, and complexity. We will provide a detailed timeline during the design proposal stage, ensuring you have a clear understanding of the project schedule.",
    },
    {
      id: randomId(),
      question: "Can you work within my budget?",
      answer:
        "Yes, we strive to create designs that meet your vision while staying within your budget. We will discuss your budget during the initial consultation and plan accordingly.",
    },
  ],
};
