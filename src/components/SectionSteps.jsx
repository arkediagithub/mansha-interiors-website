import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SectionWrapper from "./SectionWrapper";

const SectionSteps = ({ title, subtitle, steps }) => {
  return (
    <>
      <SectionWrapper>
        <Reveal className="w-full">
          <SectionHeading className="text-center">
            {title || "title"}
          </SectionHeading>
        </Reveal>

        {subtitle && (
          <Reveal>
            <p className="lg:text-lg text-center lg:w-3/4 mx-auto">
              {subtitle}
            </p>
          </Reveal>
        )}

        {/* service steps */}
        <Reveal className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 my-6">
            {steps.map((item, i) => (
              <div key={item.id} className="relative w-full">
                {/* content */}
                <div className="rounded-bl-3xl rounded-tr-3xl overflow-hidden px-6 py-4 border border-b-4 border-l-4 border-b-roti-400 border-l-roti-400 h-full">
                  {item.icon && (
                    <item.icon
                      stroke={1.5}
                      className="w-12 h-12 p-2 text-roti-400 mb-4 border-2 border-roti-400 rounded-full"
                    />
                  )}
                  <h3 className="text-xl md:text-2xl font-medium my-4">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg -mt-2 mb-2 text-justify">
                    {item.description}
                  </p>
                </div>
                {/* number */}
                <div className="absolute bottom-0 right-2 opacity-40 pointer-events-none">
                  <span className="text-roti-400 text-8xl lg:text-[120px] font-semibold font-alegreya-sans">
                    {i + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </SectionWrapper>
    </>
  );
};

export default SectionSteps;
