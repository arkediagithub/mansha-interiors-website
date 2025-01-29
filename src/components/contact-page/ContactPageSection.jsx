import { useState } from "react";
import { Link } from "react-router-dom";
import { contactInfo } from "../../data/contact";
import Reveal from "../Reveal";
import SectionWrapper from "../SectionWrapper";

const ContactPageSection = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const accessKey = "8036b690-2d80-4c79-83d6-bb72e6cca4c2";

  // form submit function
  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
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
      setLoading(false);
      console.log("Success", data);
      event.target.reset();
    } else {
      setLoading(false);
      console.log("Error", data);
      setResult(data.message);
    }
  };

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
            <form
              onSubmit={onSubmit}
              noValidate=""
              className="flex flex-col text-black py-6 space-y-4 md:py-0 px-1 md:pl-6"
            >
              <label className="block">
                <span className="mb-2 text-black">Full Name</span>
                <input
                  type="text"
                  name="Full_Name"
                  placeholder="Type name here"
                  className="block input input-bordered w-full"
                />
              </label>
              <label className="block">
                <span className="mb-2 text-black">Email Address</span>
                <input
                  type="email"
                  name="Email_Address"
                  placeholder="Type email here"
                  className="block input input-bordered w-full"
                />
              </label>
              <label className="block">
                <span className="mb-2 text-black">Phone Number</span>
                <input
                  type="number"
                  name="Phone_Number"
                  placeholder="+911234567890"
                  className="block input input-bordered w-full"
                />
              </label>
              <label className="block">
                <span className="mb-2 text-black">Message</span>
                <textarea
                  name="Message"
                  className="block w-full textarea textarea-bordered"
                  placeholder="Your Message"
                ></textarea>
              </label>
              <button
                type="submit"
                className="btn btn-neutral text-base md:text-xl font-normal"
              >
                {loading && (
                  <>
                    <span className="loading loading-spinner"></span>
                  </>
                )}
                Submit
              </button>
              <span className="text-center">{result}</span>
            </form>
          </Reveal>
        </div>
      </SectionWrapper>
    </>
  );
};

export default ContactPageSection;
