import { teamMembers } from "../../data/teamMembers";
import FlipCard from "../FlipCard";
import Reveal from "../Reveal";
import SectionWrapper from "../SectionWrapper";

const TeamSection = () => {
  return (
    <SectionWrapper>
      {/* headings */}
      <div className="max-w-xl md:max-w-[700px] mx-auto mb-6 flex flex-col justify-center items-center gap-2">
        <Reveal>
          <h2 className="text-center text-2xl sm:text-4xl font-unbounded-variable tracking-wider">
            Meet Our Team
          </h2>
        </Reveal>
        <Reveal>
          <p className="md:text-lg mb-6 md:mb-10 text-center">
            Our talented interior design team transforms spaces into
            breathtaking works of art, reflecting your unique style and
            personality.
          </p>
        </Reveal>
      </div>

      {/* team list */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {teamMembers.map((teamMember, index) => (
          <FlipCard
            key={teamMember.id}
            imageSrc={teamMember.image}
            imageAlt={`Gallery Image ${index + 1}`}
            title={teamMember.name}
            subtitle={teamMember.designation}
            description={teamMember.description}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default TeamSection;
