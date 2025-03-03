import { twMerge } from "tailwind-merge";

const BgOverlay = ({ className = "opacity-30" }) => {
  return <div className={twMerge("absolute inset-0 bg-black", className)} />;
};

export default BgOverlay;
