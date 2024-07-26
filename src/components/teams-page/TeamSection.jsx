import { teamMembers } from "../../data/teamMembers";

const TeamSection = () => {
  return (
    <section className="px-4 py-6 sm:px-8 sm:py-8 lg:px-8 lg:py-12 mx-auto">
      <header className="max-w-xl md:max-w-[700px] mx-auto mb-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-dm-serif-display tracking-wider text-center">
          Meet Our Team
        </h2>
        <p className="md:text-lg mb-6 md:mb-10 text-center">
          Our talented interior design team transforms spaces into breathtaking
          works of art, reflecting your unique style and personality.
        </p>
      </header>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="">
            <div className="group relative block bg-black">
              <img
                alt={member.name}
                src={member.image}
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                style={{ objectPosition: "50% 40%" }}
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <div className="mt-72">
                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-xl font-bold text-white sm:text-2xl">
                      {member.name}
                    </p>

                    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                      {member.designation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
