import { whyChooseUs } from "../data/home-page";
import MetaTags from "../components/MetaTags";
import HeroSection from "../components/home-page/HeroSection";
import AboutSection from "../components/home-page/AboutSection";
import AchievementSection from "../components/home-page/AchievementSection";
import CTASection from "../components/CTASection";
import HomeServiceBento from "../components/home-page/HomeServiceBento";
import SectionSteps from "../components/SectionSteps";

export const HomePage = () => {
  return (
    <>
      <MetaTags
        title="Mansha Interiors - Elevate Your Living Spaces"
        description="Transform your home with Mansha Interiors. Expert interior design for elegant, functional, and stylish living spaces."
      />
      <HeroSection />
      <AboutSection />
      <HomeServiceBento />
      <AchievementSection />
      <SectionSteps
        title="Why Choose Us?"
        subtitle={
          "At Mansha Interiors, we believe that a home or office is more than just a space — it's a reflection of who you are. Based in Siliguri, we specialize in transforming your ideas into reality, creating spaces that are as functional as they are beautiful."
        }
        steps={whyChooseUs}
      />
      <CTASection
        title="Elevate Your Living Experience"
        subtitle="From concept to completion, we craft spaces you'll love to live in."
      />
    </>
  );
};

export default HomePage;
