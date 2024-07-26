import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TextReveal from "./TextReveal";

const PageHeader = ({ title, subtitle }) => {
  const headingRef = useRef();

  useGSAP(() => {
    gsap.from(headingRef.current, {
      y: 200,
      duration: 1,
    });
  }, []);

  return (
    <>
      <section className="mt-14 w-full h-[40vh] sm:h-[60vh] lg:h-[80vh] flex items-center justify-center relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gray-900/75 sm:from-gray-900/95 sm:to-gray-900/25"></div>
        <TextReveal>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl text-center text-balance font-dm-serif-display text-white">
            {title}
          </h1>
          <p className="text-xl lg:text-2xl text-center text-balance text-white mt-4">
            {subtitle}
          </p>
        </TextReveal>
      </section>
    </>
  );
};

export default PageHeader;
