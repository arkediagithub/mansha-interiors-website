import { founder } from "../../data/teamMembers";
import { Link } from "react-router-dom";

const FounderSection = () => {
  return (
    <section className="px-4 py-6 sm:px-8 sm:py-8 lg:px-8 lg:py-12 mx-auto">
      <section>
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 lg:h-screen md:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 md:h-full">
                <img
                  src={founder.image}
                  alt="Goutam Agarwal Image"
                  className="absolute inset-0 h-full w-full object-contain md:object-cover object-top"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 md:p-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-dm-serif-display tracking-wider">
                  {founder.designation}
                </h2>

                {founder.about.map((about, i) => (
                  <p key={i} className="mt-4 md:text-lg text-gray-600">
                    {about}
                  </p>
                ))}

                <Link to="/contact" role="button" className="mt-8 btn btn-neutral md:text-lg">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FounderSection;
