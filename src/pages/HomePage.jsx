import MetaTags from "../components/MetaTags";
import HeroSection from "../components/home-page/HeroSection";
import AboutSection from "../components/home-page/AboutSection";
import AchievementSection from "../components/home-page/AchievementSection";
import CTASection from "../components/CTASection";
import WhyChooseUsSection from "../components/home-page/WhyChooseUsSection";
import HomeServiceBento from "../components/home-page/HomeServiceBento";

export const HomePage = () => {
  return (
    <>
      <MetaTags />
      <HeroSection />
      <AboutSection />
      <HomeServiceBento />
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
