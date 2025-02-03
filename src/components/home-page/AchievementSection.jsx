import StatsCounter from "../StatsCounter";
import SectionHeading from "../SectionHeading";

const AchievementSection = () => {
  return (
    <section
      data-theme="dark"
      id="achievementSection"
      className="px-4 lg:px-8 2xl:px-16 py-10 lg:py-14"
    >
      <div className="container mx-auto flex flex-col lg:flex-row gap-4 md:gap-8">
        <div id="achievementHeading" className="lg:max-w-lg">
          {/* <p className="text-accent text-xl font-semibold md:font-bold">
            TRUSTED EXPERIENCE
          </p> */}
          <p className="text-accent text-xl font-semibold md:font-bold">
            Trusted Experience
          </p>
          <SectionHeading>Modern Design Solutions</SectionHeading>
        </div>

        <div
          id="achievementDetails"
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-6 w-full h-fit place-self-center"
        >
          <div className=" stats shadow">
            <div className="stat text-center">
              <div className="stat-value text-accent">
                <StatsCounter
                  minimum={0}
                  maximum={13}
                  delay={100}
                  suffix="+"
                  className="lg:text-5xl"
                />
              </div>
              <p className="stat-desc whitespace-normal text-base text-gray-300">
                Years of Experience
              </p>
            </div>
          </div>

          <div className=" stats shadow">
            <div className="stat text-center">
              <div className="stat-value text-accent">
                <StatsCounter
                  minimum={0}
                  maximum={1000}
                  incrementBy={10}
                  delay={10}
                  suffix="+"
                  className="lg:text-5xl"
                />
              </div>
              <p className="stat-desc whitespace-normal text-base text-gray-300">
                Happy Clients
              </p>
            </div>
          </div>

          <div className=" stats shadow">
            <div className="stat text-center">
              <div className="stat-value text-accent">
                <StatsCounter
                  minimum={0}
                  maximum={5}
                  delay={200}
                  prefix="~"
                  className="lg:text-5xl"
                />
              </div>
              <p className="stat-desc whitespace-normal text-base text-gray-300">
                Sq Ft Worked (Lakh)
              </p>
            </div>
          </div>

          <div className=" stats shadow">
            <div className="stat text-center">
              <div className="stat-value text-accent">
                <StatsCounter
                  minimum={0}
                  maximum={50}
                  delay={30}
                  suffix="+"
                  className="lg:text-5xl"
                />
              </div>
              <p className="stat-desc whitespace-normal text-base text-gray-300">
                Work in Progress
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
