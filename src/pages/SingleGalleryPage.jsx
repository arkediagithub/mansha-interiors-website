import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import MetaTags from "../components/MetaTags";
import PageHeader from "../components/PageHeader";
import ProjectShowcase from "../components/ProjectShowcase";

const SingleGalleryPage = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const project = projects.find((project) => project.id === Number(id));

  return (
    <>
      <MetaTags
        title="Project Showcase - Mansha Interiors"
        description="Explore our latest interior projects designed with creativity, elegance, and functionality."
      />
      <PageHeader
        image={project?.image}
        overlay={false}
        className="h-[60vh] sm:h-[90vh] lg:h-[130vh]"
      />
      <ProjectShowcase project={project} />
    </>
  );
};

export default SingleGalleryPage;
