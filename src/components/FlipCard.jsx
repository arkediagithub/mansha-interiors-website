import { twMerge } from "tailwind-merge";

const FlipCard = ({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  description,
  className,
  rotate = "y",
}) => {
  const rotationClass = {
    x: [
      "group-hover:[transform:rotateX(180deg)]",
      "[transform:rotateX(180deg)]",
    ],
    y: [
      "group-hover:[transform:rotateY(180deg)]",
      "[transform:rotateY(180deg)]",
    ],
  };

  const self = rotationClass[rotate];
  console.log("self", self);

  return (
    <div
      className={twMerge(
        "group w-full h-72 lg:h-80 xl:h-[400px] [perspective:1000px]",
        className
      )}
    >
      <div
        className={twMerge(
          "relative h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]",
          self[0]
        )}
      >
        {/* Front */}
        <div className="absolute h-full w-full [backface-visibility:hidden]">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full rounded-2xl object-cover shadow-2xl shadow-black/40"
            loading="lazy"
          />
          <div className="absolute bottom-4 left-4 text-xl font-bold text-white">
            {title}
          </div>
        </div>

        {/* Back */}
        <div
          className={twMerge(
            "absolute h-full w-full rounded-2xl bg-roti-400 p-4 text-slate-200 [backface-visibility:hidden] flex flex-col justify-center items-center",
            self[1]
          )}
        >
          <div className="w-24 aspect-square rounded-full overflow-hidden border-4 border-white mb-4 max-md:hidden">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <h1 className="text-xl font-bold text-white">{title}</h1>
          <h2 className="text-lg font-medium text-white">{subtitle}</h2>
          <p className="mt-1 border-t border-t-gray-200 py-4 text-sm lg:text-lg font-medium leading-normal text-gray-100 text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
