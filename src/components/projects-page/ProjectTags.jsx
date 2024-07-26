const ProjectTags = ({ tags, tagClick, selectedTags }) => {
  return (
    <div className="flex items-center justify-center gap-2 my-4 flex-wrap px-4">
      {tags.map((tag, idx) => (
        <div
          key={idx}
          className={`badge cursor-pointer p-4 ${
            selectedTags.includes(tag) ? "badge-neutral" : "badge-ghost"
          }`}
          onClick={() => tagClick(tag)}
        >
          {tag.charAt(0).toUpperCase() + tag.slice(1)}
        </div>
      ))}
    </div>
  );
};

export default ProjectTags;
