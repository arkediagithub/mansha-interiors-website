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
  //   console.log(project);

  return (
    <>
      <MetaTags title="Gallery Project | Mansha Interior" />
      <PageHeader image={project?.image} overlay={false} />
      <ProjectShowcase project={project} />
    </>
  );
};

export default SingleGalleryPage;
