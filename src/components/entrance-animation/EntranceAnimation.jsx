import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const EntranceAnimation = ({ setLoadingAnimation }) => {
  useGSAP(() => {
    const loading = document.getElementById("loading");
    const loadingText = document.getElementById("loading-text");
    const mask = document.getElementById("mask");
    const path = document.getElementById("path");

    const loadingAnimation = () => {
      const tl = gsap.timeline();
      tl.to(loadingText, {
        ease: "power2.out",
        duration: 1,
        delay: 2,
        y: -500,
      });
      return tl;
    };

    const maskAnimation = () => {
      const tl = gsap.timeline();
      const start = "M 0 100 V 50 Q 50 0 100 50 V 100 z";
      const end = "M 0 100 V 0 Q 50 0 100 0 V 100 z";
      gsap.set(mask, { autoAlpha: 1 });
      tl.to(path, {
        duration: 0.4,
        attr: { d: start },
        ease: "power2.in",
      }).to(path, {
        duration: 0.4,
        attr: { d: end },
        ease: "power2.out",
        onComplete: () => {
          loading.style.display = "none";
          mask.style.display = "none";
        },
      });
      return tl;
    };

    const entranceAnimation = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          setLoadingAnimation(false);
        },
      });
      tl.add(loadingAnimation()).add(maskAnimation(), 2);
    };

    entranceAnimation();
  }, [setLoadingAnimation]);

  return (
    <>
      <div
        id="loading"
        className="fixed w-screen h-full bg-[#1D232A] overflow-hidden z-[10000] flex items-center justify-center"
      >
        <div
          id="loading-text"
          className="text-4xl sm:text-5xl font-medium sm:font-semibold text-white text-center motion-safe:animate-pulse-fast text-balance"
        >
          Welcome to Mansha Interiors
        </div>
      </div>

      <svg
        id="mask"
        className="fixed top-0 left-0 w-full h-full z-[10000] opacity-0 invisible"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          id="path"
          fill="white"
          vectorEffect="non-scaling-stroke"
          d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
        />
      </svg>
    </>
  );
};

export default EntranceAnimation;
