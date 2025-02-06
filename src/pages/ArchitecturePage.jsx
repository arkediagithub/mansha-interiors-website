import { useEffect } from "react";
import MetaTags from "../components/MetaTags";
import PageHeader from "../components/PageHeader";

const ArchitecturePage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  
  return (
    <>
      <MetaTags title="Architecture | Mansha Interior" />
      <PageHeader title="Architecture" />
    </>
  );
};

export default ArchitecturePage;
