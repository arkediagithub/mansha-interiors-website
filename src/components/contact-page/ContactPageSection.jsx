import { Link } from "react-router-dom";
import { contactInfo } from "../../data/contact";
import Reveal from "../Reveal";
import SectionWrapper from "../SectionWrapper";
import ContactPageForm from "./ContactPageForm";
import ContactPhoneNumber from "./ContactPhoneNumber";

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
                    <div className="flex items-center gap-4 text-gray-500 md:text-lg">
                      <contact.icon stroke={2} />
                      {contact.type === "email" ? (
                        <Link
                          to={`mailto:${contact.to}`}
                          className="hover:text-roti-500"
                        >
                          {contact.description}
                        </Link>
                      ) : contact.type === "phone" ? (
                        <ContactPhoneNumber phoneNumber={contact} />
                      ) : contact.type === "location" ? (
                        <Link
                          to={contact.to}
                          target="_blank"
                          className="hover:text-roti-500"
                        >
                          {contact.description}
                        </Link>
                      ) : (
                        <span>{contact.description}</span>
                      )}
                    </div>
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
