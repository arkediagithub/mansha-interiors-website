import { whyChooseUs } from "../../data/whyChooseUs";
import Reveal from "../Reveal";
import SectionWrapper from "../SectionWrapper";

export default function WhyChooseUsSection() {
  return (
    <>
      <SectionWrapper>
        <Reveal className="w-full">
          <h2 className="font-unbounded-variable text-2xl md:text-4xl text-center my-2 md:my-4">
            Why Choose Us?
          </h2>
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
          {whyChooseUs.map((item, idx) => (
            <div key={item.id} className="indicator w-full group">
              <div className="indicator-item indicator-start left-5 lg:left-0 top-5 lg:top-0 w-16 aspect-square bg-accent rounded-full flex justify-center items-center group-hover:bg-black duration-500">
                <h6 className="text-white text-lg md:text-xl">{idx + 1}</h6>
              </div>
              <div className="rounded-3xl rounded-br-none overflow-hidden px-4 md:px-6 md:py-2 border-4 border-accent">
                <h3 className="text-lg md:text-xl my-4 max-md:pl-10">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg my-4 text-justify">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
