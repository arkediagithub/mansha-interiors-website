import { useEffect } from "react";
import MetaTags from "../components/MetaTags";
import PageHeader from "../components/PageHeader";
import MapSection from "../components/contact-page/MapSection";
import ContactPageSection from "../components/contact-page/ContactPageSection";

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
      <PageHeader
        title="Reach Out & Let’s Create Something Amazing"
        image={
          "https://res.cloudinary.com/dmuqtk9yg/image/upload/v1740205753/DSC07407_11zon_dsyhvg.jpg"
        }
      />
      <ContactPageSection />
      <MapSection />
    </>
  );
};

export default ContactPage;
