import { Helmet } from "react-helmet-async";

const MetaTags = ({ title = "Mansha Interiors" }) => {
  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta
        name="description"
        content="Explore Mansha Interiors, interior design services in siliguri, expert design solutions."
      />
      <meta
        name="keywords"
        content="mansha interiors, interior design service, siliguri, kolkata, expert design solutions"
      />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English"></meta>
    </Helmet>
  );
};

export default MetaTags;
