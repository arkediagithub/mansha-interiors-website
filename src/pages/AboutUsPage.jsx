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
      <MetaTags title="Mansha Interior | About Us" />
      <PageHeader
        title={aboutUsContent.title}
        subtitle={aboutUsContent.subtitle}
      />
      <AboutPageSection section={aboutUsContent.sections.welcome} opposite />
      <AboutPageSection section={aboutUsContent.sections.mission} />
      <AboutPageSection section={aboutUsContent.sections.commitment} opposite />
      <AboutPageSection section={aboutUsContent.sections.contact} contact />
    </>
  );
};

export default AboutUsPage;
