import { useEffect } from "react";
import { IconArrowUpRight } from "@tabler/icons-react";
import CareerPageSection from "../components/career-page/CareerPageSection";
import MetaTags from "../components/MetaTags";
import PageHeader from "../components/PageHeader";

const CareersPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const careerSectionContent = {
    heading: "Join the Mansha Interiors Team!",
    content:
      "Are you ready to shape the future of design? At Mansha Interiors, we're always on the lookout for talented individuals who are passionate, innovative, and ready to make an impact. Join us to create stunning spaces that inspire and bring ideas to life.",
    image: "https://placehold.co/600?text=Office+Photo",
    icon: IconArrowUpRight,
  };

  return (
    <>
      <MetaTags title="Contact Us | Mansha Interior" />
      <PageHeader
        title="Grow with Us, Shape the Future"
        image={"https://placehold.co/1080x720?text=Team+Photo"}
      />
      <CareerPageSection section={careerSectionContent} />
    </>
  );
};

export default CareersPage;
