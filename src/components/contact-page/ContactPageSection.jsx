import { useState } from "react";
import { Link } from "react-router-dom";
import TextReveal from "../TextReveal";
import { contactInfo } from "../../data/contact";
import Reveal from "../Reveal";

const ContactPageSection = () => {
  const [result, setResult] = useState("");
  const accessKey = "8036b690-2d80-4c79-83d6-bb72e6cca4c2";

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", accessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      console.log("Success", data);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section
      id="contact_form_section"
      className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12 bg-gray-100 text-gray-900 scroll-mt-28"
    >
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
            onSubmit={onSubmit}
            noValidate=""
            className="flex flex-col text-black py-6 space-y-6 md:py-0 md:px-6"
          >
            <label className="block">
              <span className="mb-1 text-black">Full Name</span>
              <input
                type="text"
                placeholder="Type name here"
                className="block input input-bordered w-full"
              />
            </label>
            <label className="block">
              <span className="mb-1 text-black">Email Address</span>
              <input
                type="email"
                placeholder="Type email here"
                className="block input input-bordered w-full"
              />
            </label>
            <label className="block">
              <span className="mb-1 text-black">Phone Number</span>
              <input
                type="number"
                placeholder="+911234567890"
                className="block input input-bordered w-full"
              />
            </label>
            <label className="block">
              <span className="mb-1 text-black">Message</span>
              <textarea
                className="block w-full textarea textarea-bordered"
                placeholder="Your Message"
              ></textarea>
            </label>
            <button
              type="submit"
              className="btn btn-neutral md:text-lg font-normal font-unbounded-variable"
            >
              Submit
            </button>
            <span className="text-center">{result}</span>
          </form>
        </TextReveal>
      </div>
    </section>
  );
};

export default ContactPageSection;
