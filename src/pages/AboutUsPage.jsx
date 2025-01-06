import { useEffect } from "react";
import AboutPageSection from "../components/about-page/AboutPageSection";
import PageHeader from "../components/PageHeader";
import { aboutUsContent } from "../data/about-page-content";
import MetaTags from "../components/MetaTags";
aboutUsContent;

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <MetaTags title="About Us | Mansha Interior" />
      <PageHeader
        title={aboutUsContent.title}
        subtitle={aboutUsContent.subtitle}
      />
      <AboutPageSection
        id="about_page_welcome_section"
        section={aboutUsContent.sections.welcome}
        opposite
      />
      <AboutPageSection
        id="about_page_mission_section"
        section={aboutUsContent.sections.mission}
      />
      <AboutPageSection
        id="about_page_commitment_section"
        section={aboutUsContent.sections.commitment}
        opposite
      />
      <AboutPageSection
        id="about_page_contact_section"
        section={aboutUsContent.sections.contact}
        contact
      />
    </>
  );
};

export default AboutUsPage;
