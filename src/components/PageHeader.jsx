import { twMerge } from "tailwind-merge";
import TextReveal from "./TextReveal";
import { homepage_hero_slide_banner_5 } from "../images";
import TextAnimation from "./TextAnimation";

const PageHeader = ({
  image,
  title,
  subtitle,
  overlay = true,
  className = "",
}) => {
  return (
    <>
      <section
        className={twMerge(
          "mt-20 w-full h-[30vh] sm:h-[50vh] lg:h-[70vh] flex items-center justify-center relative p-4",
          className
        )}
      >
        {/* background images */}
        <div className="absolute inset-0">
          <img
            src={image || homepage_hero_slide_banner_5}
            alt="background image"
            className="w-full h-full object-cover"
          />
        </div>
        {overlay && (
          <div className="absolute inset-0 bg-black opacity-40"></div>
        )}
        <TextReveal>
          {title && (
            <TextAnimation
              by="word"
              text={title}
              className="text-3xl sm:text-5xl lg:text-7xl text-center tracking-wider text-white text-balance"
              staggerChildren={0.05}
            />
          )}
          {subtitle && (
            <p className="text-xl lg:text-2xl text-center text-balance text-white mt-4">
              {subtitle}
            </p>
          )}
        </TextReveal>
      </section>
    </>
  );
};

export default PageHeader;
