import { Link } from "react-router-dom";
import {
  quickLinks,
  serviceLinks,
  socialMediaLinks,
} from "../data/footer-content";

const Footer = () => {
  return (
    <footer>
      <div
        data-theme="dark"
        className="footer bg-base-200 text-base-content p-4 sm:p-6 md:p-8 lg:p-12"
      >
        <aside className="max-w-md">
          <div className="w-16 lg:w-24 aspect-square rounded-full overflow-hidden">
            <img
              src={
                "https://res.cloudinary.com/dmuqtk9yg/image/upload/v1739257631/mansha-logo-w-white-bg_bfo9y2.png"
              }
              alt="logo"
              className="h-full w-full"
            />
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

        <nav>
          <h6 className="footer-title opacity-80 text-white tracking-widest">
            Quick Links
          </h6>
          {quickLinks.map((link) => (
            <Link
              key={link.id}
              to={link.to}
              className="link no-underline text-base hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <nav>
          <h6 className="footer-title opacity-80 text-white tracking-widest">
            Services
          </h6>
          {serviceLinks.map((link) => (
            <Link
              key={link.id}
              to={link.to}
              className="link no-underline text-base hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <nav>
          <h6 className="footer-title opacity-80 text-white tracking-widest">
            Follow Us
          </h6>
          {socialMediaLinks.map((social) => (
            <Link
              key={social.id}
              to={social.to}
              className="link no-underline text-base hover:text-accent"
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
          Copyright &copy; {new Date().getFullYear()} &ndash; All right reserved
          by Mansha Interiors
        </p>
      </div>
    </footer>
  );
};

export default Footer;
