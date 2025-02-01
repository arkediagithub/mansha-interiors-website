import { useEffect } from "react";
import PageHeader from "../components/PageHeader";
import ServiceSection from "../components/services-page/ServiceSection";
import ServiceSteps from "../components/services-page/ServiceSteps";
import MetaTags from "../components/MetaTags";

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <MetaTags title="Services | Mansha Interior" />
      <PageHeader title="Our Services" />
      <ServiceSection />
      <ServiceSteps />
    </>
  );
};

export default ServicesPage;
