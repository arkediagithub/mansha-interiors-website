import { useParams } from "react-router-dom";
import MetaTags from "../components/MetaTags";
import PageHeader from "../components/PageHeader";
import { useEffect } from "react";
import { projects } from "../data/projects";
import ProjectShowcase from "../components/ProjectShowcase";

const SingleGalleryPage = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const project = projects.find((project) => project.id === id);

  return (
    <>
      <MetaTags title="Gallery Project | Mansha Interior" />
      <PageHeader
        image={project?.image}
        overlay={false}
        className="h-[45vh] sm:h-[75vh] lg:h-[100vh]"
      />
      <ProjectShowcase project={project} />
    </>
  );
};

export default SingleGalleryPage;
