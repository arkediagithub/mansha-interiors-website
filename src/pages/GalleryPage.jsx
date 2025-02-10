import { useEffect } from "react";
import { projects } from "../data/projects";
import PageHeader from "../components/PageHeader";
import ProjectList from "../components/projects-page/ProjectList";
import MetaTags from "../components/MetaTags";

export default function GalleryPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <MetaTags title="Gallery | Mansha Interior" />
      <PageHeader title="Designed by Us" />
      <ProjectList projectList={projects} />
    </>
  );
}
