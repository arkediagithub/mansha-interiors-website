const FlipCard = ({ imageSrc, imageAlt, title, description }) => {
  return (
    <div className="relative w-full h-72 lg:h-96 [perspective:1000px]">
      <div className="absolute w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-accent text-white flex flex-col items-center justify-center rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden] p-4 text-center">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white mb-4">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl lg:text-2xl font-bold">{title}</h2>
          <p className="text-base lg:text-lg mt-2 text-white">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
