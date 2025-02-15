import { Link } from "react-router-dom";
import { contactInfo } from "../../data/contact";
import Reveal from "../Reveal";
import SectionWrapper from "../SectionWrapper";
import ContactPageForm from "./ContactPageForm";

const ContactPageSection = () => {
  return (
    <>
      <SectionWrapper id="contact_form_section">
        <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x">
          {/* contact info */}
          <div className="py-6 md:py-0 flex flex-col justify-center md:items-center">
            <div>
              <Reveal>
                <h1 className="text-2xl sm:text-4xl">Get in touch</h1>
              </Reveal>
              <Reveal>
                <p className="pt-2 pb-4 md:text-lg">
                  We are here to answer any question you may have. Feel free to
                  reach via contact form.
                </p>
              </Reveal>
              <div className="space-y-4">
                {contactInfo.map((contact) => (
                  <Reveal key={contact.id}>
                    <p className="flex items-center gap-4">
                      <contact.icon stroke={2} />
                      {contact.type === "link" ? (
                        <Link to={contact.linkTo}>{contact.description}</Link>
                      ) : (
                        <span>{contact.description}</span>
                      )}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <Reveal className="w-full">
            <ContactPageForm />
          </Reveal>
        </div>
      </SectionWrapper>
    </>
  );
};

export default ContactPageSection;
