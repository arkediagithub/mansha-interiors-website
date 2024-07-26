import { useMediaQuery } from "@mantine/hooks";
import { IconArrowNarrowUp } from "@tabler/icons-react";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sm = useMediaQuery("(min-width: 640px)");

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsVisible(scrollTop > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      style={{
        display: isVisible ? "flex" : "none",
      }}
      className="btn btn-circle cursor-pointer fixed right-5 bottom-5 mix-blend-difference max-sm:btn-sm"
    >
      <IconArrowNarrowUp stroke={sm ? 3 : 2} />
    </button>
  );
};

export default ScrollToTop;
