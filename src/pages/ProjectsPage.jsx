import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { projects } from "../data/projects";
import ProjectList from "../components/projects-page/ProjectList";
import ProjectTags from "../components/projects-page/ProjectTags";
import MetaTags from "../components/MetaTags";

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const tagOptions = Array.from(
    new Set(projects.flatMap((project) => project.tag))
  );

  const [selectedTag, setSelectedTag] = useState("");

  const handleTagClick = (givenTag) => {
    setSelectedTag(selectedTag === givenTag ? "" : givenTag);
  };

  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tag.includes(selectedTag))
    : projects;

  return (
    <>
      <MetaTags title="Projects | Mansha Interior" />
      <PageHeader
        title="Our Projects"
        subtitle={"Explore Our Portfolio of Completed Projects"}
      />
      <ProjectTags
        tags={tagOptions}
        selectedTag={selectedTag}
        tagClick={handleTagClick}
      />
      <ProjectList projectList={filteredProjects} />
    </>
  );
};

export default ProjectsPage;
