import SectionWrapper from "../SectionWrapper";

export default function MapSection() {
  return (
    <>
      <SectionWrapper className="-mt-14">
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.164073832036!2d88.43371300849753!3d26.73913978415143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e44101f52b53d1%3A0x2b06f7b4419535b7!2sMansha%20Interiors!5e0!3m2!1sen!2sin!4v1737809438106!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[300px] md:h-[400px] xl:h-[500px] w-full"
          ></iframe>
        </div>
      </SectionWrapper>
    </>
  );
}
