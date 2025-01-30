import { useState } from "react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconChevronLeft,
  IconPhone,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const FloatingSocialLinks = {
  whatsapp: "https://wa.me/your-number",
  instagram: "https://www.instagram.com/manshainteriors7/",
  facebook: "https://www.facebook.com/manshainteriors.siliguri",
  phone: "tel:+919609930991",
};

export default function FloatingSocialIcons() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed top-1/2 -translate-y-1/2 left-0 z-50 flex flex-col items-end space-y-2">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black text-white p-2 lg:p-3 rounded-r-lg shadow-lg hover:bg-gray-800 transition"
      >
        {isOpen ? (
          <IconChevronLeft className="text-xl" />
        ) : (
          <IconChevronLeft className="text-xl rotate-180" />
        )}
      </button>

      {/* Social Icons */}
      <div
        className={twMerge(
          "flex flex-col space-y-1 transition-all duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <Link
          to={FloatingSocialLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 p-2 lg:p-3 flex items-center justify-center rounded-r-lg shadow-lg hover:bg-green-600 transition"
        >
          <IconBrandWhatsapp className="text-white text-xl" />
        </Link>
        <Link
          to={FloatingSocialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-pink-500 to-orange-400 p-2 lg:p-3 flex items-center justify-center rounded-r-lg shadow-lg hover:opacity-80 transition"
        >
          <IconBrandInstagram className="text-white text-xl" />
        </Link>
        <Link
          to={FloatingSocialLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 p-2 lg:p-3 flex items-center justify-center rounded-r-lg shadow-lg hover:bg-blue-700 transition"
        >
          <IconBrandFacebook className="text-white text-xl" />
        </Link>
        <Link
          to={FloatingSocialLinks.phone}
          className="bg-green-600 p-2 lg:p-3 flex items-center justify-center rounded-r-lg shadow-lg hover:bg-green-700 transition"
        >
          <IconPhone className="text-white text-xl" />
        </Link>
      </div>
    </div>
  );
}
