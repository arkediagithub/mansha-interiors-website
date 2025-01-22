import TextReveal from "../TextReveal";
import { contactInfo } from "../../data/contact";
import { Link } from "react-router-dom";
import Reveal from "../Reveal";

const ContactPageSection = () => {
  return (
    <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12 bg-gray-100 text-gray-900">
      <div className="grid grid-cols-1 lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6 flex flex-col justify-center md:items-center">
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

        <TextReveal>
          <form
            noValidate=""
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
          >
            <label className="block">
              <span className="mb-1">Full Name</span>
              <input
                type="text"
                placeholder="Type name here"
                className="block input input-bordered w-full"
              />
            </label>
            <label className="block">
              <span className="mb-1">Email Address</span>
              <input
                type="email"
                placeholder="Type email here"
                className="block input input-bordered w-full"
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                className="block w-full textarea textarea-bordered"
                placeholder="Your Message"
              ></textarea>
            </label>
            <button type="button" className="btn btn-neutral md:text-lg">
              Submit
            </button>
          </form>
        </TextReveal>
      </div>
    </section>
  );
};

export default ContactPageSection;
