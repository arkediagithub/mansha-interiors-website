import { Link } from "react-router-dom";
import { socialMedia } from "../data/socialMedia";
import logo from "../assets/mansha-logo-w-white-bg.png";

const Footer = () => {
  return (
    <footer>
      <div
        data-theme="dark"
        className="footer bg-base-200 text-base-content p-4 sm:p-6 md:p-8 lg:p-12"
      >
        <aside className="max-w-md">
          <div className="w-16 lg:w-20 aspect-square rounded-full overflow-hidden">
            <img src={logo} alt="logo" className="h-full w-full" />
          </div>
          <ul className="text-base">
            <li>
              <strong className="font-league-spartan-variable text-lg">
                Email:{" "}
              </strong>
              <Link
                to={"mailto:work@manshainteriors.com"}
                className="hover:text-accent"
              >
                work@manshainteriors.com
              </Link>
            </li>
            <li>
              <strong className="font-league-spartan-variable text-lg">
                Phone Number:{" "}
              </strong>
              <Link to={"tel:+919609930991"} className="hover:text-accent">
                9609930991
              </Link>
              /
              <Link to={"tel:+919832049481"} className="hover:text-accent">
                9832049481
              </Link>
            </li>
            <li>
              <strong className="font-league-spartan-variable text-lg">
                Timing:{" "}
              </strong>
              <span>Monday-Friday: 10AM-7PM</span>
            </li>
            <li>
              <strong className="font-league-spartan-variable text-lg">
                Location:{" "}
              </strong>
              <span>Shop No.9, 2nd Floor, Time Square Building, Siliguri</span>
            </li>
          </ul>
        </aside>

        <nav className="text-white">
          <h6 className="footer-title opacity-80 text-white tracking-widest">
            Services
          </h6>
          <p className="text-base text-gray-400">Space Planning</p>
          <p className="text-base text-gray-400">Interior Design</p>
          <p className="text-base text-gray-400">Architecture Design</p>
          <p className="text-base text-gray-400">Design Consultation</p>
          <p className="text-base text-gray-400">Renovation and Remodeling</p>
        </nav>

        <nav>
          <h6 className="footer-title opacity-80 text-white tracking-widest">
            Quick Links
          </h6>
          {/* <Link to={"/"} className="link link-hover text-base">
            Home
          </Link> */}
          <Link to={"/about"} className="link link-hover text-base">
            About Us
          </Link>
          <Link to={"/gallery"} className="link link-hover text-base">
            Gallery
          </Link>
          <Link to={"/careers"} className="link link-hover text-base">
            Careers
          </Link>
          <Link to={"/faqs"} className="link link-hover text-base">
            FAQs
          </Link>
        </nav>

        <nav>
          <h6 className="footer-title opacity-80 text-white tracking-widest">
            Follow Us
          </h6>

          {socialMedia.map((social) => (
            <Link
              key={social.id}
              to={social.to}
              className="link link-hover text-base"
            >
              {social.label}
            </Link>
          ))}
        </nav>
      </div>

      <div
        data-theme="dark"
        className="footer footer-center bg-base-200 p-4 border-t"
      >
        <p className="text-gray-400 text-base lg:text-lg">
          Copyright © {new Date().getFullYear()} - All right reserved by Mansha
          Interiors
        </p>
      </div>
    </footer>
  );
};

export default Footer;
