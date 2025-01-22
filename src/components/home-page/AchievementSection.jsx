import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import StatsCounter from "../StatsCounter";

const AchievementSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".achievement", {
      innerText: 0,
      duration: 5,
      stagger: 0.3,
      snap: {
        innerText: 1,
      },
      scrollTrigger: {
        trigger: "#achievementSection",
        start: "top 90%",
        end: "top 50%",
        scrub: true,
        once: true,
      },
    });
  }, []);

  return (
    <section
      data-theme="dark"
      id="achievementSection"
      className="px-4 lg:px-8 2xl:px-16 py-10 lg:py-14"
    >
      <div className="container mx-auto flex flex-col lg:flex-row gap-4 md:gap-8">
        <div id="achievementHeading" className="lg:max-w-lg">
          <p className="text-accent text-xl font-semibold md:font-bold">
            TRUSTED EXPERIENCE
          </p>
          <h2 className="text-2xl sm:text-4xl tracking-wider mt-4 mb-8">
            Modern Design Solutions
          </h2>
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
                  maximum={4}
                  delay={100}
                  suffix="M"
                  className="lg:text-5xl"
                />
              </div>
              <div className="stat-desc whitespace-normal">
                SQUARE FEET BUILT
              </div>
            </div>
          </div>

          <div className=" stats shadow">
            <div className="stat text-center">
              <div className="stat-value text-accent">
                <StatsCounter
                  minimum={0}
                  maximum={100}
                  delay={20}
                  suffix="+"
                  className="lg:text-5xl"
                />
              </div>
              <div className="stat-desc whitespace-normal">HAPPY CLIENTS</div>
            </div>
          </div>

          <div className=" stats shadow">
            <div className="stat text-center">
              <div className="stat-value text-accent">
                <StatsCounter
                  minimum={0}
                  maximum={98}
                  delay={20}
                  className="lg:text-5xl"
                />
              </div>
              <div className="stat-desc whitespace-normal">AWARDS RECEIVED</div>
            </div>
          </div>

          <div className=" stats shadow">
            <div className="stat text-center">
              <div className="stat-value text-accent">
                <StatsCounter
                  minimum={0}
                  maximum={105}
                  delay={20}
                  className="lg:text-5xl"
                />
              </div>
              <div className="stat-desc whitespace-normal">
                WORK IN PROGRESS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
