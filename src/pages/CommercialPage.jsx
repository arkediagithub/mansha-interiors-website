import { useEffect } from "react";
import MetaTags from "../components/MetaTags";
import PageHeader from "../components/PageHeader";

const CommercialPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <MetaTags title="Commercial | Mansha Interior" />
      <PageHeader title="Commercial" />
    </>
  );
};

export default CommercialPage;
