import { useState } from "react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconChevronLeft,
  IconChevronRight,
  IconPhone,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

const FloatingSocialLinks = {
  whatsapp: "https://wa.me/your-number",
  instagram: "https://www.instagram.com/manshainteriors7/",
  facebook: "https://www.facebook.com/manshainteriors.siliguri",
  phone: "tel:+919609930991",
};

export default function FloatingSocialIcons() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className="fixed top-1/2 -translate-y-1/2 z-50 flex flex-col items-end space-y-2
                      left-0  sm:right-0"
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black text-white p-3 rounded-r-lg shadow-lg hover:bg-gray-800 transition 
                     sm:rounded-l-lg sm:rounded-r-none"
      >
        {isOpen ? (
          <IconChevronLeft className="text-xl sm:hidden" />
        ) : (
          <IconChevronRight className="text-xl sm:hidden" />
        )}
        {isOpen ? (
          <IconChevronRight className="text-xl hidden sm:block" />
        ) : (
          <IconChevronLeft className="text-xl hidden sm:block" />
        )}
      </button>

      {/* Social Icons */}
      <div
        className={`flex flex-col space-y-1 transition-all duration-300 
                        ${
                          isOpen
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                        }`}
      >
        <Link
          to={FloatingSocialLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 p-3 flex items-center justify-center rounded-r-lg shadow-lg hover:bg-green-600 transition
                       sm:rounded-l-lg sm:rounded-r-none"
        >
          <IconBrandWhatsapp className="text-white text-xl" />
        </Link>
        <Link
          to={FloatingSocialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-pink-500 to-orange-400 p-3 flex items-center justify-center rounded-r-lg shadow-lg hover:opacity-80 transition
                       sm:rounded-l-lg sm:rounded-r-none"
        >
          <IconBrandInstagram className="text-white text-xl" />
        </Link>
        <Link
          to={FloatingSocialLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 p-3 flex items-center justify-center rounded-r-lg shadow-lg hover:bg-blue-700 transition
                       sm:rounded-l-lg sm:rounded-r-none"
        >
          <IconBrandFacebook className="text-white text-xl" />
        </Link>
        <Link
          to={FloatingSocialLinks.phone}
          className="bg-green-600 p-3 flex items-center justify-center rounded-r-lg shadow-lg hover:bg-green-700 transition
                       sm:rounded-l-lg sm:rounded-r-none"
        >
          <IconPhone className="text-white text-xl" />
        </Link>
      </div>
    </div>
  );
}
