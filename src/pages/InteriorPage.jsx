import { useEffect } from "react";
import MetaTags from "../components/MetaTags";
import PageHeader from "../components/PageHeader";

const InteriorPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <MetaTags title="Interior | Mansha Interior" />
      <PageHeader title="Interior" />
    </>
  );
};

export default InteriorPage;
