import FaqsList from "../components/faq-page/FaqsList";
import MetaTags from "../components/MetaTags";
import PageHeader from "../components/PageHeader";
import { faqsPageContent } from "../data/faq-page-content";

const FaqsPage = () => {
  return (
    <>
      <MetaTags title="Mansha Interior | FAQs" />
      <PageHeader
        title={faqsPageContent.title}
        subtitle={faqsPageContent.subtitle}
      />
      <section className="px-4 sm:px-6 lg:px-8 my-4 lg:mb-8">
        <FaqsList faqs={faqsPageContent.faqs} />
      </section>
    </>
  );
};

export default FaqsPage;
