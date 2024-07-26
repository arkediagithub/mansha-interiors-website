import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const TextReveal = ({ children, classNames = "" }) => {
  const textWrapprRef = useRef(null);
  const textRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: textWrapprRef.current,
        start: "top 90%",
        end: "top 70%",
        once: true,
      },
      y: 100,
      opacity: 0,
      duration: 0.5,
    });
  }, []);

  return (
    <div ref={textWrapprRef} className={`overflow-hidden ${classNames}`}>
      <div ref={textRef}>{children}</div>
    </div>
  );
};

export default TextReveal;
