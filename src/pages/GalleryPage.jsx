import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { projects } from "../data/projects";
import ProjectList from "../components/projects-page/ProjectList";
import ProjectTags from "../components/projects-page/ProjectTags";
import MetaTags from "../components/MetaTags";

export default function GalleryPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [selectedTags, setSelectedTags] = useState([]);

  const tagOptions = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );

  const handleTagClick = (givenTag) => {
    if (selectedTags.includes(givenTag)) {
      //   setSelectedTags(selectedTags.filter((tag) => tag !== givenTag));
      setSelectedTags([]);
    } else {
      //   setSelectedTags([...selectedTags, givenTag]);
      setSelectedTags([givenTag]);
    }
  };

  const filteredProjects = projects.filter((project) =>
    selectedTags.every((tag) => project.tags.includes(tag))
  );

  return (
    <>
      <MetaTags title="Gallery | Mansha Interior" />
      <PageHeader title="Our Gallery" />
      <ProjectTags
        tags={tagOptions}
        selectedTags={selectedTags}
        tagClick={handleTagClick}
      />
      <ProjectList projectList={filteredProjects} />
    </>
  );
}
