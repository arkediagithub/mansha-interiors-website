import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import TextReveal from "../TextReveal";
import { contactInfo } from "../../data/contact";

const ContactSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("#contactHeading", {
      scrollTrigger: {
        trigger: "#contactSection",
        start: "top 80%",
        end: "top 50%",
        scrub: true,
        once: true,
      },
      opacity: 0,
      duration: 3,
    });
    tl.from("#contactDetails", {
      scrollTrigger: {
        trigger: "#contactSection",
        start: "top 80%",
        end: "top 50%",
        scrub: true,
        once: true,
      },
      opacity: 0,
      duration: 3,
    });
  }, []);

  return (
    <section
      id="contactSection"
      className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col gap-4 md:gap-6"
    >
      <TextReveal>
        <div className="">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-dm-serif-display tracking-wider mt-4 mb-4 md:mb-8 text-balance text-center">
            Have Any Questions Contact Us
          </h2>
        </div>
      </TextReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-screen-xl mx-auto">
        {contactInfo.map((contact) => (
          <TextReveal key={contact.id}>
            <div
              key={contact.id}
              className="flex flex-col items-center sm:flex-row gap-1 sm:gap-4"
            >
              <div
                // data-theme="dark"
                className="w-[70px] sm:w-[100px] h-[70px] sm:h-[100px] flex items-center justify-center rounded-full bg-accent"
              >
                <contact.icon stroke={1} size={"40%"} color="white"/>
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
          </TextReveal>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
