import { contactInfo } from "../../data/contact";
import Reveal from "../Reveal";
import SectionWrapper from "../SectionWrapper";

const ContactSection = () => {
  return (
    <SectionWrapper id="home page contact section">
      <div className="flex flex-col justify-center items-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-dm-serif-display tracking-wider mt-4 mb-4 md:mb-8 text-balance text-center">
            Have Any Questions Contact Us
          </h2>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
        {contactInfo.map((contact) => (
          <Reveal key={contact.id} className="w-full">
            <div className="flex flex-col items-center justify-center sm:flex-row gap-1 sm:gap-4">
              <div className="w-[70px] sm:w-[100px] h-[70px] sm:h-[100px] flex items-center justify-center rounded-full bg-accent">
                <contact.icon stroke={2} size={"40%"} color="white" />
              </div>
              <div className="w-[70%] flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-dm-serif-display max-sm:text-center">
                  {contact.title}
                </h3>
                <p className="md:text-lg max-sm:text-center">
                  {contact.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
