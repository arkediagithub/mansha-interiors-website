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

  const [selectedTags, setSelectedTags] = useState([]);

  const tagOptions = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );
  console.log(tagOptions);

  const handleTagClick = (givenTag) => {
    if (selectedTags.includes(givenTag)) {
      setSelectedTags(selectedTags.filter((tag) => tag !== givenTag));
    } else {
      setSelectedTags([...selectedTags, givenTag]);
    }
  };

  const filteredProjects = projects.filter((project) =>
    selectedTags.every((tag) => project.tags.includes(tag))
  );

  return (
    <>
      <MetaTags title="Mansha Interior | Projects" />
      <PageHeader
        title="Our Projects"
        subtitle={"Explore Our Portfolio of Completed Projects"}
      />
      <ProjectTags
        tags={tagOptions}
        selectedTags={selectedTags}
        tagClick={handleTagClick}
      />
      <ProjectList projectList={filteredProjects} />
    </>
  );
};

export default ProjectsPage;
