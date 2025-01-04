import { useEffect } from "react";
import AboutSection from "../components/home-page/AboutSection";
import AchievementSection from "../components/home-page/AchievementSection";
import ContactSection from "../components/home-page/ContactSection";
import FeaturesSection from "../components/home-page/FeaturesSection";
import HeroSection from "../components/home-page/HeroSection";
import MetaTags from "../components/MetaTags";

export const HomePage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <MetaTags />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <AchievementSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
