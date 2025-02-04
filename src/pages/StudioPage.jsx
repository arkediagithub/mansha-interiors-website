import { useEffect } from "react";
import MetaTags from "../components/MetaTags";
import PageHeader from "../components/PageHeader";
import StudioGallery from "../components/studio-page/StudioGallery";

const StudioPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <MetaTags title="About Us | Mansha Interior" />
      <PageHeader title="Our Studio" />
      <StudioGallery />
    </>
  );
};

export default StudioPage;
