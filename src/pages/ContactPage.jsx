import ContactPageSection from "../components/contact-page/ContactPageSection";
import PageHeader from "../components/PageHeader";
import MetaTags from "../components/MetaTags";

const ContactPage = () => {
  return (
    <>
      <MetaTags title="Contact Us | Mansha Interior" />
      <PageHeader
        title="Contact Us"
        subtitle="Let's Start a Conversation About Your Space"
      />
      <ContactPageSection />
    </>
  );
};

export default ContactPage;
