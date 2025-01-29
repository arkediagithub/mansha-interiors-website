import { useEffect } from "react";
import AboutSection from "../components/home-page/AboutSection";
import AchievementSection from "../components/home-page/AchievementSection";
// import ContactSection from "../components/home-page/ContactSection";
import FeaturesSection from "../components/home-page/FeaturesSection";
import HeroSection from "../components/home-page/HeroSection";
import MetaTags from "../components/MetaTags";
import CTASection from "../components/CTASection";
import WhyChooseUsSection from "../components/home-page/WhyChooseUsSection";

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
      <WhyChooseUsSection />
      <CTASection
        title="Elevate Your Living Experience"
        subtitle="From concept to completion, we craft spaces you'll love to live in."
      />
    </>
  );
};

export default HomePage;
