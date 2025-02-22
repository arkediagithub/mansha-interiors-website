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
      <MetaTags
        title="About Mansha Interiors - Crafting Dream Spaces"
        description="Discover Mansha Interiors—where creativity meets functionality. We design spaces that reflect your personality and lifestyle."
      />
      <PageHeader
        title="Who We Are"
        image={
          "https://res.cloudinary.com/dmuqtk9yg/image/upload/v1740205660/DSC07520_11zon_umxuz3.jpg"
        }
      />

      <AboutPageIntro />

      <FounderSection />

      <TeamSection />

      <StudioGallery />
    </>
  );
};

export default AboutUsPage;
