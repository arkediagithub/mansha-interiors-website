import ContactPageSection from "../components/contact-page/ContactPageSection";
import PageHeader from "../components/PageHeader";
import MetaTags from "../components/MetaTags";
import { useEffect } from "react";
import MapSection from "../components/contact-page/MapSection";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <MetaTags title="Contact Us | Mansha Interior" />
      <PageHeader title="Contact Us" />
      <ContactPageSection />
      <MapSection />
    </>
  );
};

export default ContactPage;
