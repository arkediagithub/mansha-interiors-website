import { twMerge } from "tailwind-merge";
import SectionWrapper from "../SectionWrapper";

const ProjectTags = ({ tags, tagClick, selectedTag }) => {
  return (
    <SectionWrapper className="-my-6">
      <div className="flex items-center justify-center gap-2 my-4 flex-wrap px-4">
        {tags.map((tag, i) => (
          <div
            key={i}
            onClick={() => tagClick(tag)}
            className={twMerge(
              "badge cursor-pointer py-5 px-6 border",
              selectedTag === tag ? "badge-neutral" : "badge-outline"
            )}
          >
            <span className="text-lg">{tag.toUpperCase()}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectTags;
