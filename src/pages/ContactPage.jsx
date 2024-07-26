import { useEffect } from "react";
import ContactPageSection from "../components/contact-page/ContactPageSection";
import PageHeader from "../components/PageHeader";
import MetaTags from "../components/MetaTags";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <MetaTags title="Mansha Interior | Contact Us" />
      <PageHeader
        title="Contact Us"
        subtitle="Let's Start a Conversation About Your Space"
      />
      <ContactPageSection />
    </>
  );
};

export default ContactPage;
