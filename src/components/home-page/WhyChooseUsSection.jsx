import { whyChooseUs } from "../../data/whyChooseUs";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import SectionWrapper from "../SectionWrapper";

export default function WhyChooseUsSection() {
  return (
    <>
      <SectionWrapper>
        <Reveal className="w-full">
          <SectionHeading className="text-center">
            Why Choose Us?
          </SectionHeading>
        </Reveal>

        <Reveal>
          <p className="lg:text-lg text-center lg:w-3/4 mx-auto">
            At Mansha Interiors, we believe that a home or office is more than
            just a space — it&apos;s a reflection of who you are. Based in
            Siliguri, we specialize in transforming your ideas into reality,
            creating spaces that are as functional as they are beautiful.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 my-6 md:my-10 lg:my-16">
          {whyChooseUs.map((item, i) => (
            <div key={item.id} className="relative w-full">
              <div className="rounded-bl-3xl rounded-tr-3xl overflow-hidden px-6 py-4 lg:p-8 border border-b-4 border-l-4 border-b-roti-400 border-l-roti-400 h-full">
                <h3 className="text-xl md:text-2xl font-medium my-4">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg -mt-2 mb-2 text-justify">
                  {item.description}
                </p>
              </div>

              <div className="absolute bottom-0 right-2 opacity-20">
                <span className="text-roti-500 text-7xl lg:text-[112px] font-semibold font-league-spartan-variable">
                  {i + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
