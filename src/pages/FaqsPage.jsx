import { useEffect } from "react";
import { faqs } from "../data/faq-page-content";
import FaqsList from "../components/faq-page/FaqsList";
import MetaTags from "../components/MetaTags";
import PageHeader from "../components/PageHeader";
import SectionWrapper from "../components/SectionWrapper";

const FaqsPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <MetaTags title="FAQs | Mansha Interior" />
      <PageHeader title={"Frequently Asked Questions"} />
      <SectionWrapper>
        <FaqsList faqs={faqs} />
      </SectionWrapper>
    </>
  );
};

export default FaqsPage;
