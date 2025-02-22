import { useEffect } from "react";
import { careerPageContent } from "../data/career-page";
import CareerPageSection from "../components/career-page/CareerPageSection";
import MetaTags from "../components/MetaTags";
import PageHeader from "../components/PageHeader";

const CareersPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <MetaTags
        title="Careers at Mansha Interiors - Join Our Team"
        description="Passionate about interior design? Explore career opportunities at Mansha Interiors and be part of a creative, dynamic team."
      />
      <PageHeader
        title="Grow with Us, Shape the Future"
        image={
          "https://res.cloudinary.com/dmuqtk9yg/image/upload/v1740205659/DSC07504_11zon_cwcogb.jpg"
        }
      />
      <CareerPageSection section={careerPageContent} />
    </>
  );
};

export default CareersPage;
