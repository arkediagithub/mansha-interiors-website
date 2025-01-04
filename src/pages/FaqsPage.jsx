import FaqsList from "../components/faq-page/FaqsList";
import MetaTags from "../components/MetaTags";
import PageHeader from "../components/PageHeader";
import SectionWrapper from "../components/SectionWrapper";
import { faqsPageContent } from "../data/faq-page-content";

const FaqsPage = () => {
  return (
    <>
      <MetaTags title="FAQs | Mansha Interior" />
      <PageHeader
        title={faqsPageContent.title}
        subtitle={faqsPageContent.subtitle}
      />
      <SectionWrapper>
        <FaqsList faqs={faqsPageContent.faqs} />
      </SectionWrapper>
    </>
  );
};

export default FaqsPage;
