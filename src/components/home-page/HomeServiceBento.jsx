import { motion } from "motion/react";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import SectionParagraph from "../SectionParagraph";
import SectionWrapper from "../SectionWrapper";
import HomeServiceCarousel from "./HomeServiceCarousel";

const mainServices = [
  {
    id: 1,
    title: "Interior Design",
    description:
      "We craft inviting and functional living spaces tailored to your style, from modern minimalism to classic elegance.",
    image:
      "https://res.cloudinary.com/dmuqtk9yg/image/upload/v1739262671/homepage_hero_slide_banner_1_u9rwjh.png",
    to: "/services/interior",
  },
  {
    id: 2,
    title: "Architecture Design",
    description:
      "Our visionary designs blend form, function, and sustainability, creating timeless structures that inspire.",
    image:
      "https://images.unsplash.com/photo-1721294104781-4f00f6ffef99?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    to: "/services/architecture",
  },
  {
    id: 3,
    title: "Landscape Design",
    description:
      "We design vibrant landscapes that enhance spaces, promoting harmony between nature and architecture.",
    image:
      "https://images.unsplash.com/photo-1705909772719-8d3bf32552be?q=80&w=1718&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    to: "/services/landscape",
  },
];

const otherServices = [
  {
    title: "Office Interior Design",
    description:
      "Crafting workspaces that inspire productivity and innovation.",
    image:
      "https://res.cloudinary.com/dmuqtk9yg/image/upload/w_400,h_300/v1739877457/Camera.001_caqmsd.jpg",
  },
  {
    title: "Showroom Interior Design",
    description:
      "Designing captivating spaces that enhance brand presence and customer experience.",
    image:
      "https://res.cloudinary.com/dmuqtk9yg/image/upload/w_400,h_300/v1739941998/WhatsApp_Image_2025-02-17_at_1.29.25_PM_yye7ti.jpg",
  },
  {
    title: "Residence Interior Design",
    description:
      "Creating healing environments with comfort, efficiency, and care at the core.",
    image:
      "https://res.cloudinary.com/dmuqtk9yg/image/upload/w_400,h_300/v1739252035/REV5_MANOJ_JI__MASTER_BEDROOM_V11_ebxfd7.jpg",
  },
  {
    title: "Hospitality Interior Design",
    description:
      "Elevating guest experiences with elegant and immersive spaces.",
    image:
      "https://res.cloudinary.com/dmuqtk9yg/image/upload/w_400,h_300/v1739877467/Camera.015_1_zkrrst.jpg",
  },
];

const HomeServiceBento = () => {
  return (
    <>
      <SectionWrapper>
        {/* first grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* left */}
          <div className="lg:pr-10 lg:pt-4 lg:pl-2">
            <Reveal>
              <p className="text-roti-400 text-xl font-semibold md:font-bold">
                What We Do
              </p>
            </Reveal>
            <Reveal>
              <SectionHeading className="lg:text-3xl xl:text-4xl">
                Designing with Purpose and Passion
              </SectionHeading>
            </Reveal>
            <Reveal>
              <SectionParagraph>
                At Mansha Design, we create functional and elegant interiors
                tailored to your needs. From offices and showrooms to hospitals
                and hospitality spaces, we craft inspiring environments with a
                seamless blend of aesthetics and practicality.
              </SectionParagraph>
            </Reveal>
          </div>
          {/* right */}
          <div className="rounded-xl overflow-hidden border border-roti-400">
            <HomeServiceCarousel services={mainServices} />
          </div>
        </div>

        {/* second grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 mt-4 lg:mt-6">
          {otherServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="card card-compact bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  src={service.image}
                  alt="other service images"
                  className="w-full h-full pointer-events-none"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service.title}</h2>
                <p className="text-base">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default HomeServiceBento;
