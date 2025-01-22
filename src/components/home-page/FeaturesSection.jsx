import { features } from "../../data/features";
import SectionWrapper from "../SectionWrapper";
import Reveal from "../Reveal";

const FeaturesSection = () => {
  return (
    <SectionWrapper id="home_page_feature_section">
      <div id="features_headings">
        <Reveal>
          <p className="text-accent text-xl font-semibold md:font-bold">
            BEST SERVICE
          </p>
        </Reveal>
        <Reveal className="my-2">
          <h2 className="text-2xl sm:text-4xl tracking-wider my-6">
            Designing Future Rooms <br />
            One at a Time
          </h2>
        </Reveal>
      </div>

      {/* feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {features.map((feature) => (
          <Reveal key={feature?.id}>
            <div className="card bg-base-100 shadow-xl rounded-none border border-b-4 border-l-4 border-b-accent border-l-accent h-full">
              <div className="card-body py-4">
                <h2 className="text-xl md:text-2xl tracking-wide font-bold">
                  {feature.heading}
                </h2>
                <p className="md:text-lg text-gray-500 my-2 md:my-4">
                  {feature.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default FeaturesSection;
