import { homepage_hero_slide_banner_5 } from "../../images";
import TextReveal from "../TextReveal";
import { twMerge } from "tailwind-merge";

const BentoCard = ({ image, title, desc, overlay = true, className = "" }) => {
  return (
    <div className={twMerge("", className)}>
      <div className="absolute inset-0">
        <img
          src={image || homepage_hero_slide_banner_5}
          alt="background image"
          className="w-full h-full object-cover"
        />
      </div>
      {overlay && <div className="absolute inset-0 bg-black opacity-40"></div>}
      <TextReveal>
        {title && <h3>{title}</h3>}
        {desc && (
          <p className="text-lg lg:text-xl text-center text-balance text-white mt-4">
            {desc}
          </p>
        )}
      </TextReveal>
    </div>
  );
};

export default BentoCard;
