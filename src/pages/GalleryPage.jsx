import { useEffect, useState } from "react";
import { projects } from "../data/projects";
import PageHeader from "../components/PageHeader";
import ProjectList from "../components/projects-page/ProjectList";
import MetaTags from "../components/MetaTags";
import ProjectTags from "../components/projects-page/ProjectTags";

export default function GalleryPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const tags = Array.from(new Set(projects.flatMap((project) => project.tag)));

  const [selectedTag, setSelectedTag] = useState("");

  const handleTagClick = (givenTag) => {
    setSelectedTag(selectedTag === givenTag ? "" : givenTag);
  };

  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tag.includes(selectedTag))
    : projects;

  return (
    <>
      <MetaTags
        title="Mansha Interiors Showcase - Stunning Designs"
        description="Explore our design gallery featuring premium interior projects. Get inspired by our expert craftsmanship and creative vision."
      />
      <PageHeader
        title="Designed by Us"
        image={
          "https://res.cloudinary.com/dmuqtk9yg/image/upload/v1740205681/DSC07417_11zon_krfic5.jpg"
        }
      />
      <ProjectTags
        tags={tags}
        selectedTag={selectedTag}
        tagClick={handleTagClick}
      />
      <ProjectList projectList={filteredProjects} />
    </>
  );
}
