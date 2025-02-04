import { teamMembers } from "../../data/teamMembers";
import FlipCard from "../FlipCard";
import SectionHeading from "../SectionHeading";
import SectionParagraph from "../SectionParagraph";
import SectionWrapper from "../SectionWrapper";

const TeamSection = () => {
  return (
    <SectionWrapper>
      <SectionHeading className="text-center">Meet Our Team</SectionHeading>
      <SectionParagraph className="text-center mb-6 lg:mb-10">
        Our talented interior design team transforms spaces into breathtaking
        works of art, reflecting your unique style and personality.
      </SectionParagraph>

      {/* team list */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
