import { useEffect } from "react";
import MetaTags from "../components/MetaTags";
import PageHeader from "../components/PageHeader";
import StudioGallery from "../components/studio-page/StudioGallery";
import StudioPageIntro from "../components/studio-page/StudioPageIntro";
import {
  homepage_hero_slide_banner_1,
  homepage_hero_slide_banner_2,
  homepage_hero_slide_banner_3,
  homepage_hero_slide_banner_4,
  homepage_hero_slide_banner_5,
} from "../images";

const StudioPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // studio gallery images
  const images = [
    homepage_hero_slide_banner_1,
    homepage_hero_slide_banner_2,
    homepage_hero_slide_banner_3,
    homepage_hero_slide_banner_4,
    homepage_hero_slide_banner_5,
    homepage_hero_slide_banner_1,
    homepage_hero_slide_banner_2,
    homepage_hero_slide_banner_3,
    homepage_hero_slide_banner_4,
    homepage_hero_slide_banner_5,
  ];

  return (
    <>
      <MetaTags title="About Us | Mansha Interior" />
      <PageHeader title="Our Studio" />
      <StudioPageIntro />
      <StudioGallery images={images} />
    </>
  );
};

export default StudioPage;
