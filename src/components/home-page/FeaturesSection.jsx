import { features } from "../../data/features";
import SectionWrapper from "../SectionWrapper";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const FeaturesSection = () => {
  return (
    <SectionWrapper id="home_page_feature_section" className="md:mt-32">
      <div id="features_headings">
        <Reveal>
          <p className="text-accent text-xl font-semibold md:font-bold">
            What We Do
          </p>
        </Reveal>
        <Reveal>
          <SectionHeading>
            Designing Future Rooms <br />
            One at a Time
          </SectionHeading>
        </Reveal>
      </div>

      {/* feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {features.map((feature) => (
          <Reveal key={feature?.id}>
            <div className="card bg-base-100 rounded-none rounded-tr-3xl rounded-bl-3xl border border-b-4 border-l-4 border-b-accent border-l-accent h-full">
              <div className="card-body py-4">
                <h2 className="text-xl md:text-2xl tracking-wide">
                  {feature.heading}
                </h2>
                <p className="md:text-lg text-gray-500 my-2 text-justify">
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
