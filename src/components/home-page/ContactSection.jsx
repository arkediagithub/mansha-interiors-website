import { contactInfo } from "../../data/contact";
import Reveal from "../Reveal";
import SectionWrapper from "../SectionWrapper";

const ContactSection = () => {
  return (
    <SectionWrapper id="home_page_contact_section">
      <div className="flex flex-col justify-center items-center">
        <Reveal>
          <h2 className="text-2xl sm:text-4xl tracking-wider text-balance text-center my-2 md:my-6">
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
                <h3 className="text-xl md:text-2xl max-sm:text-center">
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
