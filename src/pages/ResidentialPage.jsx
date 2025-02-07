import { useEffect } from "react";
import MetaTags from "../components/MetaTags";
import PageHeader from "../components/PageHeader";

const ResidentialPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <MetaTags title="Residential | Mansha Interior" />
      <PageHeader title="Residential" />
    </>
  );
};

export default ResidentialPage;
