import { useEffect } from "react";
import { testimonials } from "../data/testimonials-page";
import MetaTags from "../components/MetaTags";
import PageHeader from "../components/PageHeader";
import SectionParagraph from "../components/SectionParagraph";
import SectionWrapper from "../components/SectionWrapper";
import Testimonial from "../components/testimonials-page/Testimonial";

export default function TestimonialsPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <MetaTags
        title="Mansha Interiors - Client Testimonials"
        description="Hear from our satisfied clients! See how Mansha Interiors transforms spaces with stunning designs and impeccable craftsmanship."
      />
      <PageHeader
        title="Voices of Satisfaction & Trust"
        image={
          "https://res.cloudinary.com/dmuqtk9yg/image/upload/v1740205675/DSC07398_11zon_s1wubz.jpg"
        }
        bgImageClassName="object-[50%_20%]"
      />

      <SectionWrapper className="md:-mt-6">
        <SectionParagraph className="text-center lg:w-3/4 lg:mx-auto lg:text-xl">
          At Mansha Interiors, we take pride in delivering excellence, and
          nothing speaks louder than the words of our happy clients. Here&apos;s
          what they have to say about their experience with us. Read through
          their stories and see why we are the trusted choice for quality and
          reliability.
        </SectionParagraph>
      </SectionWrapper>

      {testimonials.map((testimonial, i) => (
        <Testimonial key={i} index={i} testimonial={testimonial} />
      ))}
    </>
  );
}
