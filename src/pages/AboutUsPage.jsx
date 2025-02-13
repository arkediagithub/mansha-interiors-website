import { useEffect } from "react";
import MetaTags from "../components/MetaTags";
import PageHeader from "../components/PageHeader";
import AboutPageIntro from "../components/about-page/AboutPageIntro";
import FounderSection from "../components/teams-page/FounderSection";
import TeamSection from "../components/teams-page/TeamSection";
import StudioGallery from "../components/studio-page/StudioGallery";

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
        title="Who We Are"
        image={"https://placehold.co/1080x720?text=Office+Photo"}
      />

      <AboutPageIntro />

      <FounderSection />
      <TeamSection />

      <StudioGallery />
    </>
  );
};

export default AboutUsPage;
