import { teamMembers } from "../../data/teamMembers";
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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="relative group h-full max-h-[300px] lg:max-h-[450px] overflow-hidden"
          >
            {/* image */}
            <Reveal className="w-full">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover image_hover_bw_to_color"
                style={{ objectPosition: "50% 50%" }}
              />
            </Reveal>
            {/* overlay */}
            <div className="absolute bg-black opacity-0 inset-0 transition-all group-hover:opacity-20 group-hover:z-10 pointer-events-none"></div>
            {/* member info */}
            <div className="absolute bottom-5 left-5 right-5 opacity-0 transition-all group-hover:opacity-100 group-hover:z-10 pointer-events-none">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xl text-white font-unbounded-variable">
                  {member.name}
                </p>
                <p className="text-sm font-medium uppercase tracking-widest text-white">
                  {member.designation}
                </p>
                <p className="text-sm font-medium tracking-widest text-white">
                  {member.details}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default TeamSection;
